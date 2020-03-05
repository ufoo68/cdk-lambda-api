import * as lambda from '@aws-cdk/aws-lambda'
import * as apigateway from '@aws-cdk/aws-apigateway'
import * as cdk from '@aws-cdk/core'

export interface LambdaApiProps {
  environment?: { [key: string]: string }
  lambdaPath: string
}

export class LambdaApi extends cdk.Construct {
  /** @returns the Class of the lambda Function */
  public readonly handler: lambda.Function
  /** @returns the Class of the Rest Api */
  public readonly api: apigateway.LambdaRestApi

  constructor(scope: cdk.Construct, id: string, { environment, lambdaPath }: LambdaApiProps) {
    super(scope, id)

    this.handler = new lambda.Function(this, `${id}Handler`, {
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.asset(lambdaPath),
      handler: 'index.handler',
      environment
    })

    this.api = new apigateway.LambdaRestApi(this, `${id}Endpoint`, {
      handler: this.handler
    })
  }
}
