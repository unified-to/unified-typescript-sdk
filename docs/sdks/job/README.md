# Job
(*job*)

### Available Operations

* [createAtsJob](#createatsjob) - Create a job
* [getAtsJob](#getatsjob) - Retrieve a job
* [listAtsJobs](#listatsjobs) - List all jobs
* [patchAtsJob](#patchatsjob) - Update a job
* [removeAtsJob](#removeatsjob) - Remove a job
* [updateAtsJob](#updateatsjob) - Update a job

## createAtsJob

Create a job

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { AtsCompensationType, AtsJobQuestionType, AtsJobStatus, EmploymentType, Frequency } from "@unified-api/typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo({
    security: {
      jwt: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.job.createAtsJob({
    atsJob: {
      addresses: [
        {},
      ],
      compensation: [
        {
          type: AtsCompensationType.Salary,
        },
      ],
      departments: [
        "<value>",
      ],
      hiringManagerIds: [
        "<value>",
      ],
      publicJobUrls: [
        "<value>",
      ],
      questions: [
        {
          options: [
            "<value>",
          ],
          question: "<value>",
          type: AtsJobQuestionType.File,
        },
      ],
      raw: {
        "key": "<value>",
      },
      recruiterIds: [
        "<value>",
      ],
    },
    connectionId: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.CreateAtsJobRequest](../../sdk/models/operations/createatsjobrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.CreateAtsJobResponse](../../sdk/models/operations/createatsjobresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getAtsJob

Retrieve a job

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

async function run() {
  const sdk = new UnifiedTo({
    security: {
      jwt: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.job.getAtsJob({
    connectionId: "<value>",
    fields: [
      "<value>",
    ],
    id: "<id>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.GetAtsJobRequest](../../sdk/models/operations/getatsjobrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.GetAtsJobResponse](../../sdk/models/operations/getatsjobresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listAtsJobs

List all jobs

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

async function run() {
  const sdk = new UnifiedTo({
    security: {
      jwt: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.job.listAtsJobs({
    connectionId: "<value>",
    fields: [
      "<value>",
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.ListAtsJobsRequest](../../sdk/models/operations/listatsjobsrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.ListAtsJobsResponse](../../sdk/models/operations/listatsjobsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchAtsJob

Update a job

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { AtsCompensationType, AtsJobQuestionType, AtsJobStatus, EmploymentType, Frequency } from "@unified-api/typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo({
    security: {
      jwt: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.job.patchAtsJob({
    atsJob: {
      addresses: [
        {},
      ],
      compensation: [
        {
          type: AtsCompensationType.Bonus,
        },
      ],
      departments: [
        "<value>",
      ],
      hiringManagerIds: [
        "<value>",
      ],
      publicJobUrls: [
        "<value>",
      ],
      questions: [
        {
          options: [
            "<value>",
          ],
          question: "<value>",
          type: AtsJobQuestionType.Date,
        },
      ],
      raw: {
        "key": "<value>",
      },
      recruiterIds: [
        "<value>",
      ],
    },
    connectionId: "<value>",
    id: "<id>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.PatchAtsJobRequest](../../sdk/models/operations/patchatsjobrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.PatchAtsJobResponse](../../sdk/models/operations/patchatsjobresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## removeAtsJob

Remove a job

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

async function run() {
  const sdk = new UnifiedTo({
    security: {
      jwt: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.job.removeAtsJob({
    connectionId: "<value>",
    id: "<id>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.RemoveAtsJobRequest](../../sdk/models/operations/removeatsjobrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.RemoveAtsJobResponse](../../sdk/models/operations/removeatsjobresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateAtsJob

Update a job

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { AtsCompensationType, AtsJobQuestionType, AtsJobStatus, EmploymentType, Frequency } from "@unified-api/typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo({
    security: {
      jwt: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.job.updateAtsJob({
    atsJob: {
      addresses: [
        {},
      ],
      compensation: [
        {
          type: AtsCompensationType.Equity,
        },
      ],
      departments: [
        "<value>",
      ],
      hiringManagerIds: [
        "<value>",
      ],
      publicJobUrls: [
        "<value>",
      ],
      questions: [
        {
          options: [
            "<value>",
          ],
          question: "<value>",
          type: AtsJobQuestionType.Date,
        },
      ],
      raw: {
        "key": "<value>",
      },
      recruiterIds: [
        "<value>",
      ],
    },
    connectionId: "<value>",
    id: "<id>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.UpdateAtsJobRequest](../../sdk/models/operations/updateatsjobrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.UpdateAtsJobResponse](../../sdk/models/operations/updateatsjobresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
