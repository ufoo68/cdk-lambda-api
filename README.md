# This is simple library for Lambda integration on [AWS CDK](https://aws.amazon.com/cdk/)

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
