import AggregateError from 'aggregate-error'
import { expect } from 'chai'
import { verifyConditions } from '../src/verifyConditions'
import type { PluginConfig } from '../src/types'
import type { Context } from 'semantic-release'
import { FakeLogger } from './shared'

describe('Should correctly verify conditions', () => {
    it("should return aggregated errors on multiple missing elements", () => {
        const fakeConfig: PluginConfig = {
            directoryPath: 'test',
            s3Bucket: 'test'
        }
        const fakeContext: Context = {
            logger: new FakeLogger(),
            env: { },
            branch: {
                name: 'master',
            },
        }
        expect(() => verifyConditions(fakeConfig, fakeContext)).to.throw(AggregateError).with.property('_errors').to.have.length(2)
    })

    it("should return error on missing access key", () => {
        const fakeConfig: PluginConfig = {
            directoryPath: 'test',
            s3Bucket: 'test'
        }
        const fakeContext: Context = {
            logger: new FakeLogger(),
            env: {
                'S3_SECRET_ACCESS_KEY': 'test'
            },
            branch: {
                name: 'master',
            },
        }
        expect(() => verifyConditions(fakeConfig, fakeContext)).to.throw(AggregateError).with.property('_errors').to.have.length(1)
    })

    it("should return error on missing secret key", () => {
        const fakeConfig: PluginConfig = {
            directoryPath: 'test',
            s3Bucket: 'test'
        }
        const fakeContext: Context = {
            logger: new FakeLogger(),
            env: {
                'S3_ACCESS_KEY_ID': 'test'
            },
            branch: {
                name: 'master',
            },
        }
        expect(() => verifyConditions(fakeConfig, fakeContext)).to.throw(AggregateError).with.property('_errors').to.have.length(1)
    })

    it("should return error on missing bucket", () => {
        const fakeConfig: PluginConfig = {
            directoryPath: 'test',
            s3Bucket: {}
        }
        const fakeContext: Context = {
            logger: new FakeLogger(),
            env: {
                'S3_SECRET_ACCESS_KEY': 'test',
                'S3_ACCESS_KEY_ID': 'test'
            },
            branch: {
                name: 'master',
            },
        }
        expect(() => verifyConditions(fakeConfig, fakeContext)).to.throw(AggregateError).with.property('_errors').to.have.length(1)
    })

    it("should return error on missing directory path", () => {
        const fakeConfig: PluginConfig = {
            directoryPath: '',
            s3Bucket: 'test'
        }
        const fakeContext: Context = {
            logger: new FakeLogger(),
            env: {
                'S3_SECRET_ACCESS_KEY': 'test',
                'S3_ACCESS_KEY_ID': 'test'
            },
            branch: {
                name: 'master',
            },
        }
        expect(() => verifyConditions(fakeConfig, fakeContext)).to.throw(AggregateError).with.property('_errors').to.have.length(1)
    })

    it("should return error on missing endpoint when s3BucketEndpoint is set", () => {
        const fakeConfig: PluginConfig = {
            directoryPath: 'test',
            s3Bucket: 'test',
            s3BucketEndpoint: true
        }
        const fakeContext: Context = {
            logger: new FakeLogger(),
            env: {
                'S3_SECRET_ACCESS_KEY': 'test',
                'S3_ACCESS_KEY_ID': 'test'
            },
            branch: {
                name: 'master',
            },
        }
        expect(() => verifyConditions(fakeConfig, fakeContext)).to.throw(AggregateError).with.property('_errors').to.have.length(1)
    })
})
