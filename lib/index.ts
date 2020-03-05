import * as sns from '@aws-cdk/aws-sns';
import * as subs from '@aws-cdk/aws-sns-subscriptions';
import * as sqs from '@aws-cdk/aws-sqs';
import * as cdk from '@aws-cdk/core';

export interface CdkLambdaApiProps {
  /**
   * The visibility timeout to be configured on the SQS Queue, in seconds.
   *
   * @default Duration.seconds(300)
   */
  visibilityTimeout?: cdk.Duration;
}

export class CdkLambdaApi extends cdk.Construct {
  /** @returns the ARN of the SQS queue */
  public readonly queueArn: string;

  constructor(scope: cdk.Construct, id: string, props: CdkLambdaApiProps = {}) {
    super(scope, id);

    const queue = new sqs.Queue(this, 'CdkLambdaApiQueue', {
      visibilityTimeout: props.visibilityTimeout || cdk.Duration.seconds(300)
    });

    const topic = new sns.Topic(this, 'CdkLambdaApiTopic');

    topic.addSubscription(new subs.SqsSubscription(queue));

    this.queueArn = queue.queueArn;
  }
}
