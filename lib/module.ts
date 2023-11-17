import { DynamicModule, LoggerService } from '@nestjs/common';
import { SqsModule } from '@ssut/nestjs-sqs';
import {
  SqsConsumerOptions,
  SqsProducerOptions,
} from '@ssut/nestjs-sqs/dist/sqs.types';

export interface SQSOptions {
  consumers?: SqsConsumerOptions[];
  producers?: SqsProducerOptions[];
  logger?: LoggerService;
}

export function SQSModule(options: SQSOptions): DynamicModule {
  return SqsModule.register(options);
}
