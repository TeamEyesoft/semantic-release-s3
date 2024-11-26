import fs from 'fs'
import * as path from 'path'

import AggregateError from 'aggregate-error'
import globby from 'globby'
import template from 'lodash.template'
import mime from 'mime-types'
import type { Context } from 'semantic-release'

import { AWS } from './aws'
import { getS3Error } from './error'
import type {
    PluginConfig,
    S3ConfigProps,
    WithoutNullableKeysType,
} from './types'

export async function publish(config: PluginConfig, context: Context) {
    const { branch, lastRelease, logger, nextRelease } = context

    const awsConfig = AWS.loadConfig(config, context) as WithoutNullableKeysType<S3ConfigProps>

    const s3 = new AWS(awsConfig)

    const filePaths = await globby(config.directoryPath)

    let s3Bucket: string | undefined

    if (typeof config.s3Bucket === 'string') {
        s3Bucket = config.s3Bucket
    } else if (typeof config.s3Bucket === 'object') {
        s3Bucket = config.s3Bucket[branch.name]
    }

    const s3BucketWithResolvedVariables = template(s3Bucket)(
        {
            branch: branch.name,
            lastRelease,
            nextRelease,
        }
    )

    const [
        bucketName,
        ...bucketPrefixes
    ] = s3BucketWithResolvedVariables.split(path.sep)

    const bucketPrefix = bucketPrefixes.join(path.sep).replaceAll(/\$([_a-z]+\w*)|\$\{(\w*)\}/giu, (match, p1, p2) => {
        return process.env[p1 || p2] ?? match
    })

    if (!bucketName) {
        throw new Error('Missing s3 bucket configuration. ' +
            'Please check your plugin configuration and add a valid ' +
            's3 bucket name or s3 bucket configuration for one or more git branches.')
    }

    let removedRootFilesPaths: string[] = []

    if (config.removeDirectoryRoot) {
        removedRootFilesPaths = filePaths.map((filePath) => {
            return filePath.slice(filePath.indexOf('/') + 1)
        })
    }

    const publishPromises: Array<Promise<unknown>> = []

    if (config.removeDiff) {
        const existingFiles = await s3.getExistingFiles(bucketName, bucketPrefix)
        const fileDifference = existingFiles.filter((file) => {
            if (config.removeDirectoryRoot) {
                return !removedRootFilesPaths.includes(file)
            }

            return !filePaths.includes(file)
        })

        publishPromises.push(...fileDifference.map(async (pathToDelete) => {
            logger.info(`Deleting file ${pathToDelete} from S3 bucket ${bucketName}`)

            return s3.deleteFile(
                bucketName,
                `${bucketPrefix}/${pathToDelete}`,
            )
        }))
    }

    publishPromises.push(...filePaths.map(async (filePath, index) => {
        const fileName = path.basename(filePath)
        // 'application/octet-stream' is the default s3 content type for object uploads
        const mimeType = mime.lookup(fileName) || 'application/octet-stream'
        const pathToPublish = path.join(bucketPrefix, removedRootFilesPaths[index] ?? filePath)
        logger.info(`Publishing file ${pathToPublish} from S3 bucket ${bucketName}`)

        return s3.uploadFile(
            bucketName,
            pathToPublish,
            fs.createReadStream(filePath),
            mimeType,
            config.objectACL
        )
    }))

    const results = await Promise.allSettled(publishPromises)

    const errors = results.filter((result) => result.status === 'rejected').map((result) => getS3Error(result.reason))

    if (errors.length > 0) {
        throw new AggregateError(errors)
    }

    // Url to the bucket
    let url = `https://${awsConfig.endpoint}/${bucketName}/${bucketPrefix}`

    if (config.s3BucketEndpoint) {
        url = `https://${awsConfig.endpoint}/${bucketPrefix}`
    }

    return {
        name: 'S3 release',
        url,
    }
}
