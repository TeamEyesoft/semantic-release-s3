import type { ObjectCannedACL } from '@aws-sdk/client-s3'
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
     * A map of base64-encoded MD5 hash of uploaded objects
     *
     * @default undefined
     */
    readonly md5Hashes?: Record<string, string>
    /**
     * A map of metadata to store with the object in S3
     *
     * @default undefined
     */
    readonly metadata?: Record<string, string>
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

export type WithoutNullableKeysType<T> = {
    [Key in keyof T]-?: WithoutNullableKeysType<NonNullable<T[Key]>>
}

export type S3ConfigProps = {
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

export type ErrorCodesProps =
    'ENOACCESSKEYID' | 'ENODIRECTORYPATH' | 'ENOENDPOINT' | 'ENOS3BUCKET' | 'ENOSECRETACCESSKEY'
