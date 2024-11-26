import type { Readable } from 'node:stream'

import type {
    ListObjectsRequest,
    ObjectCannedACL,
    PutObjectCommandInput,
} from '@aws-sdk/client-s3'
import {
    DeleteObjectsCommand,
    ListObjectsCommand,
    PutObjectCommand,
    S3,
} from '@aws-sdk/client-s3'
import type { Context } from 'semantic-release'

import type {
    PluginConfig,
    S3ConfigProps,
    WithoutNullableKeysType,
} from './types'

export class AWS {
    public static loadConfig(config: PluginConfig, context: Context): S3ConfigProps {
        return {
            accessKey: context.env[config.accessKeyName ?? 'S3_ACCESS_KEY_ID'] ?? null,
            endpoint: config.endpoint ?? undefined,
            region: config.region ?? undefined,
            s3BucketEndpoint: config.s3BucketEndpoint ?? undefined,
            secretAccessKey: context.env[config.secretAccessKeyName ?? 'S3_SECRET_ACCESS_KEY'] ?? null,
            sslEnabled: config.sslEnabled ?? undefined,
        }
    }

    public readonly awsS3: InstanceType<typeof S3>

    constructor(s3Config: WithoutNullableKeysType<S3ConfigProps>) {
        this.awsS3 = new S3({
            bucketEndpoint: s3Config.s3BucketEndpoint,
            credentials: {
                accessKeyId: s3Config.accessKey,
                secretAccessKey: s3Config.secretAccessKey,
            },
            endpoint: s3Config.endpoint,
            region: s3Config.region,
            tls: s3Config.sslEnabled,
        })
    }

    public async deleteFile(bucket: string, pathToDelete: string) {
        const deleteObjectsCommand = new DeleteObjectsCommand({
            Bucket: bucket,
            Delete: { Objects: [{ Key: pathToDelete }] },
        })

        return this.awsS3.send(deleteObjectsCommand)
    }

    public async emptyBucket(bucket: string, prefix?: string) {
        // Empty bucket
        const listObjectsCommand = new ListObjectsCommand({ Bucket: bucket, Prefix: prefix })
        const { Contents } = await this.awsS3.send(listObjectsCommand)

        if (!Contents) {
            return
        }

        const keys = Contents.map((c) => c.Key)

        const deleteObjectsCommand = new DeleteObjectsCommand({
            Bucket: bucket,
            Delete: { Objects: keys.map((key) => ({ Key: key })) },
        })

        return this.awsS3.send(deleteObjectsCommand)
    }

    public async getExistingFiles(bucket: string, prefix?: string) {
        async function existingFilesKeys(
            s3: S3,
            param: ListObjectsRequest,
            allKeys: string[] = [],
        ): Promise<string[]> {
            const listObjectsCommand = new ListObjectsCommand(param)

            return s3.send(listObjectsCommand).then(async (data) => {
                if (data.Contents) {
                    allKeys.push(...data.Contents.map((content) => {
                        return content.Key as string
                    }))
                }

                if (data.IsTruncated) {
                    return existingFilesKeys(
                        s3,
                        {
                            ...param,
                            Marker: data.NextMarker,
                        },
                        allKeys,
                    )
                } else {
                    return allKeys
                }
            })
        }

        return existingFilesKeys(
            this.awsS3,
            {
                Bucket: bucket,
                Prefix: prefix,
            },
        )
    }

    public async uploadFile(bucket: string, key: string, body: Readable, objectMimeType: string, objectACL?: ObjectCannedACL) {
        const uploadParams: PutObjectCommandInput = {
            ACL: objectACL,
            Body: body,
            Bucket: bucket,
            ContentType: objectMimeType,
            Key: key,
        }
        const command = new PutObjectCommand(uploadParams)

        return this.awsS3.send(command)
    }
}
