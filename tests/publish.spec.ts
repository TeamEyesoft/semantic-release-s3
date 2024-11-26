import { expect } from 'chai'
import { publish } from '../src/publish'
import type { PluginConfig } from '../src/types'
import type { Context } from 'semantic-release'
import { EmptyBucket, FakeLogger, GetExistingFiles } from './shared'

// From env variables
const ACCESS_KEY_ID = process.env.S3_ACCESS_KEY_ID ?? ''
const SECRET_ACCESS_KEY = process.env.S3_SECRET_ACCESS_KEY ?? ''

const RANDOM_PREFIX = (Math.random() + 1).toString(36).substring(7)
const FAKE_SHARED_CONFIG = {
    endpoint: 'https://s3.fr-par.scw.cloud',
    region: 'fr-par',
    s3BucketEndpoint: false,
    sslEnabled: false,
    removeDirectoryRoot: true,
}
const FAKE_SHARED_CONTEXT: { env: { [key: string]: string }, branch: { name: string } } = {
    env: {
        'S3_ACCESS_KEY_ID': ACCESS_KEY_ID,
        'S3_SECRET_ACCESS_KEY': SECRET_ACCESS_KEY,
    },
    branch: {
        name: 'master',
    },
}

process.chdir('./tests')

describe('Should correctly publish release', () => {
    after(async () => {
        const fakeConfig: PluginConfig = {
            ...FAKE_SHARED_CONFIG,
            directoryPath: './data-v1',
            s3Bucket: `fr.eyesoft.tests/${RANDOM_PREFIX}`,
        }
        const fakeContext: Context = {
            ...FAKE_SHARED_CONTEXT,
            logger: new FakeLogger(),
        }
        await EmptyBucket(fakeConfig, fakeContext, 'fr.eyesoft.tests', RANDOM_PREFIX)
    })

    it("should publish a release to an empty bucket", async () => {
        const fakeLogger = new FakeLogger()
        const fakeConfig: PluginConfig = {
            ...FAKE_SHARED_CONFIG,
            directoryPath: './data-v1',
            s3Bucket: `fr.eyesoft.tests/${RANDOM_PREFIX}/empty`,
        }
        const fakeContext: Context = {
            ...FAKE_SHARED_CONTEXT,
            logger: fakeLogger,
        }
        await publish(fakeConfig, fakeContext)
        expect(fakeLogger.getCallCount('info')).to.equal(3)
    })

    it("should publish a release to an existing bucket", async () => {
        const fakeLogger = new FakeLogger()
        const fakeConfig: PluginConfig = {
            ...FAKE_SHARED_CONFIG,
            directoryPath: './data-v1',
            s3Bucket: `fr.eyesoft.tests/${RANDOM_PREFIX}/existing`,
        }
        const fakeContext: Context = {
            ...FAKE_SHARED_CONTEXT,
            logger: fakeLogger,
        }
        await publish(fakeConfig, fakeContext)
        expect(fakeLogger.getCallCount('info')).to.equal(3)
        await publish({...fakeConfig, directoryPath: './data-v2'}, fakeContext)
        expect(fakeLogger.getCallCount('info')).to.equal(7)
        const files = await GetExistingFiles(fakeConfig, fakeContext, 'fr.eyesoft.tests', `${RANDOM_PREFIX}/existing`)
        expect(files).deep.equal([
            `${RANDOM_PREFIX}/existing/root.txt`,
            `${RANDOM_PREFIX}/existing/subfolder/file1.txt`,
            `${RANDOM_PREFIX}/existing/subfolder/file2.txt`,
            `${RANDOM_PREFIX}/existing/subfolder/file3.txt`,
            `${RANDOM_PREFIX}/existing/subfolder/file4.txt`
        ])
    })

    it("should publish a release to an existing bucket and remove diff", async () => {
        const fakeLogger = new FakeLogger()
        const fakeConfig: PluginConfig = {
            ...FAKE_SHARED_CONFIG,
            directoryPath: './data-v1',
            s3Bucket: `fr.eyesoft.tests/${RANDOM_PREFIX}/existingDiff`,
            removeDiff: true,
        }
        const fakeContext: Context = {
            ...FAKE_SHARED_CONTEXT,
            logger: fakeLogger,
        }
        await publish(fakeConfig, fakeContext)
        expect(fakeLogger.getCallCount('info')).to.equal(3)
        await publish({...fakeConfig, directoryPath: './data-v2'}, fakeContext)
        expect(fakeLogger.getCallCount('info')).to.equal(10)
        const files = await GetExistingFiles(fakeConfig, fakeContext, 'fr.eyesoft.tests', `${RANDOM_PREFIX}/existingDiff`)
        expect(files).deep.equal([
            `${RANDOM_PREFIX}/existingDiff/root.txt`,
            `${RANDOM_PREFIX}/existingDiff/subfolder/file1.txt`,
            `${RANDOM_PREFIX}/existingDiff/subfolder/file3.txt`,
            `${RANDOM_PREFIX}/existingDiff/subfolder/file4.txt`
        ])
    })
})
