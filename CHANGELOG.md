## [1.0.2](https://github.com/TeamEyesoft/semantic-release-s3/compare/v1.0.1...v1.0.2) (2024-11-26)


### Bug Fixes

* handle errors and fix diff code ([1cd3370](https://github.com/TeamEyesoft/semantic-release-s3/commit/1cd3370ef7ab38af6d3058ca156c266fb9cc7d65))


### Other

* add tests ([2ccaf0e](https://github.com/TeamEyesoft/semantic-release-s3/commit/2ccaf0e078a970c02172dc684a93f1870257ca24))
* revert README ([718bd65](https://github.com/TeamEyesoft/semantic-release-s3/commit/718bd65b89379bcf0029ed864177e9aaf528af27))

## [1.0.1](https://github.com/TeamEyesoft/semantic-release-s3/compare/v1.0.0...v1.0.1) (2024-11-26)


### Bug Fixes

* check s3Bucket existance before using keys ([5f03ef6](https://github.com/TeamEyesoft/semantic-release-s3/commit/5f03ef62a4da9adae04469342163798859f8ef7c))
* update dependencies and move to aws sdk v3 ([4962330](https://github.com/TeamEyesoft/semantic-release-s3/commit/496233099ecf2be9b75747368795530c199dc777))
* update publish url ([4247c4e](https://github.com/TeamEyesoft/semantic-release-s3/commit/4247c4e5e7a68594e53d59e859b783368ee2ee36))

## 1.0.0 (2024-11-25)


### ⚠ BREAKING CHANGES

* plugin configuration has changed

### Features

* add option to define different bucket name per branch ([5320ef8](https://github.com/TeamEyesoft/semantic-release-s3/commit/5320ef8dbf59534edbc1a17f7f00ed6bd774795f))
* add option to define different bucket name per branch ([323f223](https://github.com/TeamEyesoft/semantic-release-s3/commit/323f223b114e5c86bdad4d2612bdbcb8732911a6))
* allow more settings ([3d282e7](https://github.com/TeamEyesoft/semantic-release-s3/commit/3d282e70696da191178ffa1c187965885141d7e6))
* **aws:** add objectACL param for s3 upload ([7415191](https://github.com/TeamEyesoft/semantic-release-s3/commit/74151919ef431c0eeeea618edc80ff9c867f9c7b))
* build and expose library as `CommonJS` package ([6c79017](https://github.com/TeamEyesoft/semantic-release-s3/commit/6c790170a854b7b997136ce8b297ff882af79d71))
* initial release ([70aeb5a](https://github.com/TeamEyesoft/semantic-release-s3/commit/70aeb5a151cba6dcd18e46c19f906890a497a9c5))
* initial release ([7adecbc](https://github.com/TeamEyesoft/semantic-release-s3/commit/7adecbc2a99d9c7b94deb1e7f1c3a0dc4ebfe669))
* **publish:** add possibility to use semantic context for s3Bucket option ([c880601](https://github.com/TeamEyesoft/semantic-release-s3/commit/c8806016b6df86948f510d5d2ec3d068bf336e7d))
* **publish:** return release context to be able to use it in other plugins ([8d5ee96](https://github.com/TeamEyesoft/semantic-release-s3/commit/8d5ee9624d3fcd1aa6663ec763f1b466574bd2ef))
* replace bucketName with bucketConfiguration in documentation ([a1e27bf](https://github.com/TeamEyesoft/semantic-release-s3/commit/a1e27bf57ddcbef0c912dd9bd13a172f99bc1e78))
* replace bucketName with bucketConfiguration in PluginConfig ([a519bf7](https://github.com/TeamEyesoft/semantic-release-s3/commit/a519bf7265aeed59659499c1e2c2dba2d2fc125b))
* replace variables like `$VAR_NAME` from bucket name with `process.env` values ([ef6a657](https://github.com/TeamEyesoft/semantic-release-s3/commit/ef6a6577438329aa6e558fd05ef920eaf6f128ac))
* update dependencies ([c185a2d](https://github.com/TeamEyesoft/semantic-release-s3/commit/c185a2dfbdb3e75e83a6b0a55bec819c582722b7))
* update plugin configuration options ([#13](https://github.com/TeamEyesoft/semantic-release-s3/issues/13)) ([95d58c1](https://github.com/TeamEyesoft/semantic-release-s3/commit/95d58c1ab4aaf7d1faef946b889607d96a72cbf5))


### Bug Fixes

*  remove file ([9d6a4cf](https://github.com/TeamEyesoft/semantic-release-s3/commit/9d6a4cff00236f3744c68c60bd5e27cfb9084074))
* **aws:** handle file content-type correctly ([#20](https://github.com/TeamEyesoft/semantic-release-s3/issues/20)) ([766f1f1](https://github.com/TeamEyesoft/semantic-release-s3/commit/766f1f143d65cdbd56f7a089bedf337e41379018))
* prevent deleting files from s3 before then new files are uploaded ([9513d5b](https://github.com/TeamEyesoft/semantic-release-s3/commit/9513d5b30ae4c37f7c3a10246e2b76c70d360d05))
* **publish:** correct invalid regex ([f9baa6e](https://github.com/TeamEyesoft/semantic-release-s3/commit/f9baa6e78f95bfb648e42109be6197175d7ea8e2))


### Code Refactoring

* lower node and yarn requirement closes [#14](https://github.com/TeamEyesoft/semantic-release-s3/issues/14) ([228eef2](https://github.com/TeamEyesoft/semantic-release-s3/commit/228eef2edf44ab0bc1ce4f36f8b5c9c1f61d7384))


### Other

* add Copyright mention ([71d69b1](https://github.com/TeamEyesoft/semantic-release-s3/commit/71d69b105b168268c908101b240db3887324e3c0))
* apply lint ([4dae6bf](https://github.com/TeamEyesoft/semantic-release-s3/commit/4dae6bf021db9a9641c42c403bdeb5337bb5a13d))
* **release:** 1.0.0 [skip ci] ([50dce4b](https://github.com/TeamEyesoft/semantic-release-s3/commit/50dce4b1715ce27bbeadde090f68a50d02817244))
* **release:** 1.1.0 [skip ci] ([bff460a](https://github.com/TeamEyesoft/semantic-release-s3/commit/bff460ad2305fae05f3e10d7ad3d479258ca6dbc))
* **release:** 1.2.0 [skip ci] ([687db84](https://github.com/TeamEyesoft/semantic-release-s3/commit/687db84b23dfc91b738dec84a468f52b5c30b892))
* **release:** 1.3.0 [skip ci] ([86dc589](https://github.com/TeamEyesoft/semantic-release-s3/commit/86dc5899a6fd7fa05dff2b5173300c4ce9e19261))
* **release:** 1.4.0 [skip ci] ([5e77920](https://github.com/TeamEyesoft/semantic-release-s3/commit/5e7792058a97281421064cb8d2849ebd53b75b44))
* **release:** 2.0.0 [skip ci] ([4f88710](https://github.com/TeamEyesoft/semantic-release-s3/commit/4f88710a095fe1f235415bcb5bac725172b4754f)), closes [#13](https://github.com/TeamEyesoft/semantic-release-s3/issues/13)
* **release:** 2.1.0 [skip ci] ([1e338b2](https://github.com/TeamEyesoft/semantic-release-s3/commit/1e338b261f2ce5bfca2a937fe88833cc57b5717d))
* **release:** 2.2.0 [skip ci] ([ace6fa1](https://github.com/TeamEyesoft/semantic-release-s3/commit/ace6fa1952a554cb916f293ea19a15afd63caa11))
* **release:** 2.2.1 [skip ci] ([06593d9](https://github.com/TeamEyesoft/semantic-release-s3/commit/06593d9b5ea87c348b383c951cf3a9515fa376fa))
* **release:** 2.2.2 [skip ci] ([acba310](https://github.com/TeamEyesoft/semantic-release-s3/commit/acba310c9778f5f8c5daaec8e762eca61de5fcf6)), closes [#14](https://github.com/TeamEyesoft/semantic-release-s3/issues/14)
* **release:** 2.2.3 [skip ci] ([6668dd7](https://github.com/TeamEyesoft/semantic-release-s3/commit/6668dd76e4ca3b91836ffba8954ed59d5eb8b39a))
* **release:** 2.2.4 [skip ci] ([9b8e271](https://github.com/TeamEyesoft/semantic-release-s3/commit/9b8e27175a06abcd2c2f0fdf7e922c6f5cdad1dd)), closes [#20](https://github.com/TeamEyesoft/semantic-release-s3/issues/20)
* **release:** 2.3.0 [skip ci] ([0889674](https://github.com/TeamEyesoft/semantic-release-s3/commit/088967425cc51c6dbe1ac10f33525c0f59c801d4))
* **release:** 2.4.0 [skip ci] ([46d613e](https://github.com/TeamEyesoft/semantic-release-s3/commit/46d613ed3add877da6aff526622996f9404e7518))
* update deps ([228f875](https://github.com/TeamEyesoft/semantic-release-s3/commit/228f875a3692441b970fd6a4283ad85178430e0b))
* update repository path ([591aaee](https://github.com/TeamEyesoft/semantic-release-s3/commit/591aaee94de0b80b8f2c73f7df85e2dfe661080a))

## [2.4.0](https://github.com/RimacTechnology/semantic-release-s3/compare/v2.3.0...v2.4.0) (2023-03-20)


### Features

* **publish:** return release context to be able to use it in other plugins ([8d5ee96](https://github.com/RimacTechnology/semantic-release-s3/commit/8d5ee9624d3fcd1aa6663ec763f1b466574bd2ef))

## [2.3.0](https://github.com/RimacTechnology/semantic-release-s3/compare/v2.2.4...v2.3.0) (2023-03-08)


### Features

* **aws:** add objectACL param for s3 upload ([7415191](https://github.com/RimacTechnology/semantic-release-s3/commit/74151919ef431c0eeeea618edc80ff9c867f9c7b))
* **publish:** add possibility to use semantic context for s3Bucket option ([c880601](https://github.com/RimacTechnology/semantic-release-s3/commit/c8806016b6df86948f510d5d2ec3d068bf336e7d))

## [2.2.4](https://github.com/RimacTechnology/semantic-release-s3/compare/v2.2.3...v2.2.4) (2023-03-02)


### Bug Fixes

* **aws:** handle file content-type correctly ([#20](https://github.com/RimacTechnology/semantic-release-s3/issues/20)) ([766f1f1](https://github.com/RimacTechnology/semantic-release-s3/commit/766f1f143d65cdbd56f7a089bedf337e41379018))

## [2.2.3](https://github.com/RimacTechnology/semantic-release-s3/compare/v2.2.2...v2.2.3) (2023-03-02)


### Bug Fixes

* **publish:** correct invalid regex ([f9baa6e](https://github.com/RimacTechnology/semantic-release-s3/commit/f9baa6e78f95bfb648e42109be6197175d7ea8e2))

## [2.2.2](https://github.com/RimacTechnology/semantic-release-s3/compare/v2.2.1...v2.2.2) (2023-03-01)


### Other

* update deps ([228f875](https://github.com/RimacTechnology/semantic-release-s3/commit/228f875a3692441b970fd6a4283ad85178430e0b))


### Code Refactoring

* lower node and yarn requirement closes [#14](https://github.com/RimacTechnology/semantic-release-s3/issues/14) ([228eef2](https://github.com/RimacTechnology/semantic-release-s3/commit/228eef2edf44ab0bc1ce4f36f8b5c9c1f61d7384))

## [2.2.1](https://github.com/RimacTechnology/semantic-release-s3/compare/v2.2.0...v2.2.1) (2023-02-13)


### Bug Fixes

* prevent deleting files from s3 before then new files are uploaded ([9513d5b](https://github.com/RimacTechnology/semantic-release-s3/commit/9513d5b30ae4c37f7c3a10246e2b76c70d360d05))

## [2.2.0](https://github.com/RimacTechnology/semantic-release-s3/compare/v2.1.0...v2.2.0) (2023-02-10)


### Features

* replace variables like `$VAR_NAME` from bucket name with `process.env` values ([ef6a657](https://github.com/RimacTechnology/semantic-release-s3/commit/ef6a6577438329aa6e558fd05ef920eaf6f128ac))

## [2.1.0](https://github.com/RimacTechnology/semantic-release-s3/compare/v2.0.0...v2.1.0) (2023-02-10)


### Features

* build and expose library as `CommonJS` package ([6c79017](https://github.com/RimacTechnology/semantic-release-s3/commit/6c790170a854b7b997136ce8b297ff882af79d71))

## [2.0.0](https://github.com/RimacTechnology/semantic-release-s3/compare/v1.4.0...v2.0.0) (2023-02-09)


### ⚠ BREAKING CHANGES

* plugin configuration has changed

### Features

* update plugin configuration options ([#13](https://github.com/RimacTechnology/semantic-release-s3/issues/13)) ([95d58c1](https://github.com/RimacTechnology/semantic-release-s3/commit/95d58c1ab4aaf7d1faef946b889607d96a72cbf5))

## [1.4.0](https://github.com/RimacTechnology/semantic-release-s3/compare/v1.3.0...v1.4.0) (2022-11-30)


### Features

* replace bucketName with bucketConfiguration in documentation ([a1e27bf](https://github.com/RimacTechnology/semantic-release-s3/commit/a1e27bf57ddcbef0c912dd9bd13a172f99bc1e78))

## [1.4.0-alpha.1](https://github.com/RimacTechnology/semantic-release-s3/compare/v1.3.0...v1.4.0-alpha.1) (2022-11-30)


### Features

* replace bucketName with bucketConfiguration in documentation ([aff7405](https://github.com/RimacTechnology/semantic-release-s3/commit/aff7405360a31111b1e3e470f29eadfb9f447963))

## [1.3.0](https://github.com/RimacTechnology/semantic-release-s3/compare/v1.2.0...v1.3.0) (2022-11-29)


### Features

* replace bucketName with bucketConfiguration in PluginConfig ([a519bf7](https://github.com/RimacTechnology/semantic-release-s3/commit/a519bf7265aeed59659499c1e2c2dba2d2fc125b))

## [1.3.0-alpha.1](https://github.com/RimacTechnology/semantic-release-s3/compare/v1.2.0...v1.3.0-alpha.1) (2022-11-29)


### Features

* replace bucketName with bucketConfiguration in PluginConfig ([5fc0980](https://github.com/RimacTechnology/semantic-release-s3/commit/5fc09802fdad9d509184b0c8f5ab779a5616203f))

## [1.2.0](https://github.com/RimacTechnology/semantic-release-s3/compare/v1.1.0...v1.2.0) (2022-11-29)


### Features

* add option to define different bucket name per branch ([5320ef8](https://github.com/RimacTechnology/semantic-release-s3/commit/5320ef8dbf59534edbc1a17f7f00ed6bd774795f))
* add option to define different bucket name per branch ([323f223](https://github.com/RimacTechnology/semantic-release-s3/commit/323f223b114e5c86bdad4d2612bdbcb8732911a6))

## [1.2.0-alpha.1](https://github.com/RimacTechnology/semantic-release-s3/compare/v1.1.0...v1.2.0-alpha.1) (2022-11-28)


### Features

* add option to define different bucket name per branch ([e3d68ff](https://github.com/RimacTechnology/semantic-release-s3/commit/e3d68ffff3475c3598a9678aaf30b11d31a761e1))
* update ([0a6cf82](https://github.com/RimacTechnology/semantic-release-s3/commit/0a6cf826d7781ab250a6fbba3ee49ac96c129afc))
* update ([abf174e](https://github.com/RimacTechnology/semantic-release-s3/commit/abf174e993bffc955b2b48b42bb32f4f873e8dda))
* update ([3b582c4](https://github.com/RimacTechnology/semantic-release-s3/commit/3b582c4f5c286ea44ff84a506f5696849551eaea))
* update ([a4080b9](https://github.com/RimacTechnology/semantic-release-s3/commit/a4080b935876f381b7c0f5b315ee1f9170b87e54))
* update ([66712f9](https://github.com/RimacTechnology/semantic-release-s3/commit/66712f92cfee60940a4c89ec63571042ada6c5f7))
* update 92 ([5c71833](https://github.com/RimacTechnology/semantic-release-s3/commit/5c718333e5fd4368aa4f93abfca9026deb1fdfed))
* update changelog ([df21ebf](https://github.com/RimacTechnology/semantic-release-s3/commit/df21ebf7d9008c3589b43f961190dc295fd970e9))


### Other

* **release:** 1.2.0-alpha.1 [skip ci] ([e7f80b2](https://github.com/RimacTechnology/semantic-release-s3/commit/e7f80b2b2d9d6cb7a9604b33417dff2274383996))
* **release:** 1.2.0-alpha.1 [skip ci] ([cfabf81](https://github.com/RimacTechnology/semantic-release-s3/commit/cfabf81fdd288368e24d553530d54f4c9b7c1a81))
* **release:** 1.2.0-alpha.1 [skip ci] ([6219ee5](https://github.com/RimacTechnology/semantic-release-s3/commit/6219ee5a8552909147a97324cb5098382ba51c7b))

## [1.2.0-alpha.1](https://github.com/RimacTechnology/semantic-release-s3/compare/v1.1.0...v1.2.0-alpha.1) (2022-11-28)


### Features

* add option to define different bucket name per branch ([e3d68ff](https://github.com/RimacTechnology/semantic-release-s3/commit/e3d68ffff3475c3598a9678aaf30b11d31a761e1))
* update 92 ([5c71833](https://github.com/RimacTechnology/semantic-release-s3/commit/5c718333e5fd4368aa4f93abfca9026deb1fdfed))
* update changelog ([df21ebf](https://github.com/RimacTechnology/semantic-release-s3/commit/df21ebf7d9008c3589b43f961190dc295fd970e9))


### Other

* **release:** 1.2.0-alpha.1 [skip ci] ([cfabf81](https://github.com/RimacTechnology/semantic-release-s3/commit/cfabf81fdd288368e24d553530d54f4c9b7c1a81))
* **release:** 1.2.0-alpha.1 [skip ci] ([6219ee5](https://github.com/RimacTechnology/semantic-release-s3/commit/6219ee5a8552909147a97324cb5098382ba51c7b))

## [1.2.0-alpha.1](https://github.com/RimacTechnology/semantic-release-s3/compare/v1.1.0...v1.2.0-alpha.1) (2022-11-28)


### Features

* add option to define different bucket name per branch ([e3d68ff](https://github.com/RimacTechnology/semantic-release-s3/commit/e3d68ffff3475c3598a9678aaf30b11d31a761e1))

## [1.1.0](https://github.com/RimacTechnology/semantic-release-s3/compare/v1.0.0...v1.1.0) (2022-11-27)


### Features

* update dependencies ([c185a2d](https://github.com/RimacTechnology/semantic-release-s3/commit/c185a2dfbdb3e75e83a6b0a55bec819c582722b7))

## 1.0.0 (2022-11-27)


### Features

* initial release ([70aeb5a](https://github.com/RimacTechnology/semantic-release-s3/commit/70aeb5a151cba6dcd18e46c19f906890a497a9c5))
* initial release ([7adecbc](https://github.com/RimacTechnology/semantic-release-s3/commit/7adecbc2a99d9c7b94deb1e7f1c3a0dc4ebfe669))
