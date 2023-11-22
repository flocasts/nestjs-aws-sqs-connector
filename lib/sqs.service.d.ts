export { Message } from '@aws-sdk/client-sqs';
export declare class SqsService {
    private static sqsClient;
    static Configure(region: string): void;
    static DeleteMessage(queueUrl: string, receiptHandle: string): Promise<void>;
}
