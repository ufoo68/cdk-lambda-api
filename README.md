# This is simple library for Lambda integration on [AWS CDK](https://aws.amazon.com/cdk/)

[![GitHub Actions status](https://github.com/ufoo68/cdk-lambda-api/workflows/cdk/badge.svg)](https://github.com/ufoo68/cdk-lambda-api/actions)
[![npm version](https://badge.fury.io/js/cdk-lambda-api.svg)](https://badge.fury.io/js/cdk-lambda-api)

This cdk library include two resouces

- [Lambda](https://aws.amazon.com/lambda/)
- [API Gateway](https://aws.amazon.com/api-gateway/)

## Install

- Using npm

```bash
npm i -s cdk-lambda-api
```

- Using yarn

```bash
yarn add cdk-lambda-api
```

## Usage

Following is simple usage of library. The lambda file name must be `index.ts`

```typescript
// specify directory path on `lambdaPath`
new LambdaApi(this, 'LambdaApi', { lambdaPath: 'lambda' })
// If you use environment variable, `environment` props is encvironment variables
new LambdaApi(this, 'LambdaApi', { lambdaPath: 'lambda', environment: { key: value } })
```
