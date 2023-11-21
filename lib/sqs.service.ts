import { SQS } from '@aws-sdk/client-sqs';
export { Message } from '@aws-sdk/client-sqs';

export class SqsService {
  private static sqsClient: SQS | undefined;

  static Configure(region: string): void {
    this.sqsClient = new SQS({ region });
  }

  static async DeleteMessage(
    queueUrl: string,
    receiptHandle: string,
  ): Promise<void> {
    try {
      await this.sqsClient.deleteMessage({
        QueueUrl: queueUrl,
        ReceiptHandle: receiptHandle,
      });
    } catch (error) {
      if (this.sqsClient === undefined) {
        throw new Error(
          'SQS client not configured. Call configure method first.',
        );
      } else {
        console.error('Error deleting message:', error);
        throw error;
      }
    }
  }
}
