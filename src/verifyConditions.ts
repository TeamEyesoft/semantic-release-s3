import AggregateError from 'aggregate-error'
import type { Context } from 'semantic-release'

import { AWS } from './aws'
import { getError } from './error'
import type { PluginConfig } from './types'

export function verifyConditions(config: PluginConfig, context: Context): void {
    const errors = []

    const awsConfig = AWS.loadConfig(config, context)

    if (!awsConfig.accessKey) {
        errors.push(getError('ENOACCESSKEYID'))
    }

    if (!awsConfig.secretAccessKey) {
        errors.push(getError('ENOSECRETACCESSKEY'))
    }

    if (!config.s3Bucket || !Object.keys(config.s3Bucket).length) {
        errors.push(getError('ENOS3BUCKET'))
    }

    if (!config.directoryPath) {
        errors.push(getError('ENODIRECTORYPATH'))
    }

    if (config.s3BucketEndpoint && !config.endpoint) {
        errors.push(getError('ENODIRECTORYPATH'))
    }

    if (errors.length > 0) {
        throw new AggregateError(errors)
    }
}
