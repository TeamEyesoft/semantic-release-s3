import type { ReadStream } from 'fs'

import type aws from 'aws-sdk'
import type { AWSError } from 'aws-sdk'
import { S3 } from 'aws-sdk'
import type {
    ListObjectsV2Request,
    ManagedUpload,
    ObjectCannedACL,
    PutObjectRequest,
} from 'aws-sdk/clients/s3'
import type { Context } from 'semantic-release'

import type {
    PluginConfig,
    S3Config,
    WithoutNullableKeys,
} from './types'

export class AWS {
    public static loadConfig(config: PluginConfig, context: Context): S3Config {
        return {
            accessKey: context.env[config.accessKeyName ?? 'S3_ACCESS_KEY_ID'] ?? null,
            endpoint: config.endpoint ?? undefined,
            region: config.region ?? undefined,
            s3BucketEndpoint: config.s3BucketEndpoint ?? undefined,
            secretAccessKey: context.env[config.secretAccessKeyName ?? 'S3_SECRET_ACCESS_KEY'] ?? null,
            sslEnabled: config.sslEnabled ?? undefined,
        }
    }

    public readonly awsS3: InstanceType<typeof aws.S3>

    constructor(s3Config: WithoutNullableKeys<S3Config>) {
        this.awsS3 = new S3({
            accessKeyId: s3Config.accessKey,
            computeChecksums: true,
            endpoint: s3Config.endpoint,
            region: s3Config.region,
            s3BucketEndpoint: s3Config.s3BucketEndpoint,
            secretAccessKey: s3Config.secretAccessKey,
            sslEnabled: s3Config.sslEnabled,
        })
    }

    public async deleteFile(bucket: string, pathToDelete: string) {
        return new Promise<string>((resolve, reject) => {
            const deleteParam = {
                Bucket: bucket,
                Key: pathToDelete,
            }

            this.awsS3.deleteObject(deleteParam, (error: AWSError | null) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(`File ${pathToDelete} deleted successfully from bucket ${bucket}`)
                }
            })
        })
    }

    public async getExistingFiles(bucket: string, prefix?: string) {
        async function existingFilesKeys(
            s3: S3,
            param: ListObjectsV2Request,
            allKeys: string[] = [],
        ): Promise<string[]> {
            return new Promise((resolve, reject) => {
                s3.listObjectsV2(param, async (error: AWSError | null, data) => {
                    if (error) {
                        reject(error)
                    } else {
                        if (data.Contents) {
                            allKeys.push(...data.Contents.map((content) => {
                                return content.Key as string
                            }))
                        }

                        if (data.IsTruncated) {
                            resolve(await existingFilesKeys(
                                s3,
                                {
                                    ...param,
                                    ContinuationToken: data.NextContinuationToken,
                                },
                                allKeys,
                            ))
                        } else {
                            resolve(allKeys)
                        }
                    }
                })
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

    public async uploadFile(bucket: string, key: string, body: ReadStream, objectMimeType: string, objectACL?: ObjectCannedACL) {
        const uploadParams: PutObjectRequest = {
            ACL: objectACL,
            Body: body,
            Bucket: bucket,
            ContentType: objectMimeType,
            Key: key,
        }

        return new Promise<string>((resolve, reject) => {
            this.awsS3.upload(uploadParams, (error: Error | null, data: ManagedUpload.SendData) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(data.Location)
                }
            })
        })
    }
}
