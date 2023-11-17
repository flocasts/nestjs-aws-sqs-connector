
## Description

This project provides an AWS SQS consumer library that is a wrapper for @ssut/nestjs-sqs


## Quick Start

```bash
$ npm i
$ npm start
```
## Using the library in other projects

### Add the library to a project

```bash
$ npm add -S @flocast/nestjs-aws-sqs-connector 

```

### Import the module in the app.module.ts

```typescript
@Module({
    SQSModule({
        consumers: [],
        producers: [],

    } as SQSOptions)
}]
```


## License

Nest is [MIT licensed](LICENSE).
