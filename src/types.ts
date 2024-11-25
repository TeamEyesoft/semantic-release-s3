import type { ObjectCannedACL } from 'aws-sdk/clients/s3'
import type { Config } from 'semantic-release'

export interface PluginConfig extends Config {
    /**
     * Access key env variable name
     *
     * @default ""
     */
    readonly accessKeyName?: string
    /**
     * Path to directory
     *
     * @default ""
     */
    readonly directoryPath: string
    /**
     * Endpoint
     *
     * @default ""
     */
    readonly endpoint?: string
    /**
     * Object ACL
     *
     * @default ""
     */
    readonly objectACL?: ObjectCannedACL
    /**
     * Region
     *
     * @default ""
     */
    readonly region?: string
    /**
     * if true, all files which are on remote but not staged for upload will be deleted
     *
     * @default "false"
     */
    readonly removeDiff?: boolean
    /**
     * If true, root directory of the given [directoryPath] will be removed
     *
     * @default "false"
     */
    readonly removeDirectoryRoot?: boolean
    /**
     * Bucket configuration
     *
     * @default ""
     */
    readonly s3Bucket: Record<string, string> | string
    /**
     * Whether the provided endpoint addresses an individual bucket (false if it addresses the root API endpoint)
     *
     * @default false
     */
    readonly s3BucketEndpoint?: boolean
    /**
     * Secret access key env variable name
     *
     * @default ""
     */
    readonly secretAccessKeyName?: string
    /**
     * Whether to enable SSL for requests
     *
     * @default true
     */
    readonly sslEnabled?: boolean
}

export type WithoutNullableKeys<Type> = {
    [Key in keyof Type]-?: WithoutNullableKeys<NonNullable<Type[Key]>>
}

export type S3Config = {
    /**
     * Access key
     *
     * @default ""
     */
    accessKey: string | null
    /**
     * Endpoint
     *
     * @default undefined
     */
    endpoint: string | undefined
    /**
     * Region
     *
     * @default undefined
     */
    region: string | undefined
    /**
     * s3BucketEndpoint
     *
     * @default undefined
     */
    s3BucketEndpoint: boolean | undefined
    /**
     * Secret access key
     *
     * @default ""
     */
    secretAccessKey: string | null
    /**
     * sslEnabled
     *
     * @default undefined
     */
    sslEnabled: boolean | undefined
}

export type ErrorCodes =
    'ENOACCESSKEYID' | 'ENODIRECTORYPATH' | 'ENOS3BUCKET' | 'ENOSECRETACCESSKEY' | 'ENOENDPOINT'
