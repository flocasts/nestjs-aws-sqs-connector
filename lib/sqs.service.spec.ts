// libs/my-sqs-wrapper/src/lib/sqs.service.spec.ts

import { SqsService } from './sqs.service';
import { SQS } from '@aws-sdk/client-sqs';

describe('SqsService', () => {
  beforeEach(() => {
    // Reset the configuration before each test
    SqsService['sqsClient'] = undefined;
  });

  it('should configure the SQS client', () => {
    SqsService.Configure('test-region');
    expect(SqsService['sqsClient']).toBeDefined();
  });

  it('should throw an error if DeleteMessage is called without configuring', async () => {
    const queueUrl = 'test-queue-url';
    const receiptHandle = 'test-receipt-handle';

    // Use async/await to handle the promise rejection
    await expect(
      SqsService.DeleteMessage(queueUrl, receiptHandle),
    ).rejects.toThrowError(
      'SQS client not configured. Call configure method first.',
    );
  });

});
