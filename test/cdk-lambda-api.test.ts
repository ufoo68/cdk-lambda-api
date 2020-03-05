import { expect as expectCDK, haveResource, SynthUtils } from '@aws-cdk/assert'
import * as cdk from '@aws-cdk/core'
import LambdaApi = require('../lib/index')

test('Lambda Function Created', () => {
  const app = new cdk.App()
  const stack = new cdk.Stack(app, 'TestStack')
  // WHEN
  new LambdaApi.LambdaApi(stack, 'MyTestConstruct', { lambdaPath: 'test' })
  // THEN
  expectCDK(stack).to(haveResource('AWS::Lambda::Function'))
})

test('Rest Api Created', () => {
  const app = new cdk.App()
  const stack = new cdk.Stack(app, 'TestStack')
  // WHEN
  new LambdaApi.LambdaApi(stack, 'MyTestConstruct', { lambdaPath: 'test' })
  // THEN
  expectCDK(stack).to(haveResource('AWS::ApiGateway::RestApi'))
})
