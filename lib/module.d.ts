import { DynamicModule, LoggerService } from '@nestjs/common';
import { SqsConsumerOptions, SqsProducerOptions } from '@ssut/nestjs-sqs/dist/sqs.types';
export interface SQSOptions {
    consumers?: SqsConsumerOptions[];
    producers?: SqsProducerOptions[];
    logger?: LoggerService;
}
export declare function SQSModule(options: SQSOptions): DynamicModule;
