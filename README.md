# @eyesoft/semantic-release-s3

Forked from [@rimac-technology/semantic-release-s3](https://github.com/RimacTechnology/semantic-release-s3/) and extended to allow
other S3-like storage providers.

[**semantic-release**](https://github.com/semantic-release/semantic-release) plugin to push files and folders to any S3 bucket

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Conventional Changelog](https://img.shields.io/badge/changelog-conventional-brightgreen.svg)](http://conventional-changelog.github.io)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-conventionalcommits-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

| Step               | Description                                                                                                                                             |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `verifyConditions` | Verify the presence of the `S3_ACCESS_KEY_ID`, `S3_SECRET_ACCESS_KEY` environment variables and `bucketConfiguration` and `directoryPath`plugin options |
| `publish`          | [Upload selected files and directories](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html) to the S3 bucket                               |

```bash
# For npm users
$ npm install --save-dev @eyesoft/semantic-release-s3

# For yarn users
$ yarn add --dev @eyesoft/semantic-release-s3
```

## Usage

The plugin can be configured in the
[**semantic-release** configuration file](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration):

```json
{
    "plugins": [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/npm",
        [
            "@eyesoft/semantic-release-s3",
            {
                "s3Bucket": {
                    "branchName": "s3-bucket-name"
                },
                "directoryPath": "directoryName/**/*"
            }
        ]
    ]
}
```

## Configuration

### Environment variables

| Variable               | Description      | Required |
| ---------------------- | ---------------- | :------: |
| `S3_ACCESS_KEY_ID`     | S3 access key id |    ✓     |
| `S3_SECRET_ACCESS_KEY` | S3 secret key    |    ✓     |

If `S3_ACCESS_KEY_ID` and `S3_SECRET_ACCESS_KEY` can not be set, you can set custom variables and override them in plugin options
with `accessKeyName` and `secretAccessKeyName`.

### Options

| Options               | Description                                                                                             |    Default    |      Required       |
| --------------------- | ------------------------------------------------------------------------------------------------------- | :-----------: | :-----------------: | ------------------------ | --- | --- |
| `accessKeyName`       | Environmental variable name that is used to override `S3_ACCESS_KEY_ID`                                 |               |                     |
| `secretAccessKeyName` | Environmental variable name that is used to override `S3_SECRET_ACCESS_KEY`                             |               |                     |
| `s3Bucket`            | S3 bucket configuration can be defined per git branch or a single bucket                                |               |          ✓          |
| `objectACL`           | S3 object ACL ("private"                                                                                | "public-read" | "public-read-write" | "authenticated-read"...) |     |     |
| `directoryPath`       | Path to directory which will be uploaded to the bucket                                                  |               |          ✓          |
| `removeDirectoryRoot` | Flag that determines will the root directory of the given `directoryPath` be removed                    |     false     |                     |
| `removeDiff`          | Flag that determines will the file diff which should be uploaded vs files already on s3 will be deleted |     true      |                     |
| `endpoint`            | S3 Endpoint                                                                                             |               |                     |
| `region`              | S3 Region                                                                                               |               |                     |
| `s3BucketEndpoint`    | Whether the provided endpoint addresses an individual bucket                                            |               |                     |
| `sslEnabled`          | Whether to enable SSL for requests                                                                      |               |                     |

#### `s3Bucket option`

The s3Bucket name can contain variable, is is parsed with [Lodash template](https://lodash.com/docs#template). The following
variables are available:

| Parameter     | Description                                                                         |
| ------------- | ----------------------------------------------------------------------------------- |
| `branch.name` | The branch name.                                                                    |
| `lastRelease` | `Object` with `version`, `gitTag` and `gitHead` of the last release.                |
| `nextRelease` | `Object` with `version`, `gitTag`, `gitHead` and `notes` of the release being done. |

##### `s3Bucket` examples

The `s3Bucket` `my-bucket/${nextRelease.version}` will generate push your object to this path:

> my-bucket/v1.0.0/[your-directory-content]

### Example

```json
{
    "plugins": [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/npm",
        [
            "@eyesoft/semantic-release-s3",
            {
                "accessKeyName": "ACCESS_KEY_ENV_VARIABLE_NAME",
                "secretAccessKeyName": "SECRET_ACCESS_KEY_ENV_VARIABLE_NAME",
                "s3Bucket": "s3-bucket-name",
                "objectACL": "public-read",
                "directoryPath": "directoryName/**/*",
                "removeDirectoryRoot": true,
                "removeDiff": false
            }
        ]
    ]
}
```
