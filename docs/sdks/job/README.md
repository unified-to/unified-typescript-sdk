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
import { UnifiedTo } from "unified-typescript-sdk";
import { CreateAtsJobSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { AtsCompensationType, AtsJobQuestionType, AtsJobStatus, EmploymentType, Frequency } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: CreateAtsJobSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

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
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.CreateAtsJobRequest](../../sdk/models/operations/createatsjobrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.CreateAtsJobSecurity](../../sdk/models/operations/createatsjobsecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


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
import { UnifiedTo } from "unified-typescript-sdk";
import { GetAtsJobSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetAtsJobSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.job.getAtsJob({
    connectionId: "<value>",
    fields: [
      "<value>",
    ],
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.GetAtsJobRequest](../../sdk/models/operations/getatsjobrequest.md)   | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `security`                                                                       | [operations.GetAtsJobSecurity](../../sdk/models/operations/getatsjobsecurity.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


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
import { UnifiedTo } from "unified-typescript-sdk";
import { ListAtsJobsSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListAtsJobsSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.job.listAtsJobs({
    connectionId: "<value>",
    fields: [
      "<value>",
    ],
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.ListAtsJobsRequest](../../sdk/models/operations/listatsjobsrequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.ListAtsJobsSecurity](../../sdk/models/operations/listatsjobssecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


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
import { UnifiedTo } from "unified-typescript-sdk";
import { PatchAtsJobSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { AtsCompensationType, AtsJobQuestionType, AtsJobStatus, EmploymentType, Frequency } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: PatchAtsJobSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

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
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.PatchAtsJobRequest](../../sdk/models/operations/patchatsjobrequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.PatchAtsJobSecurity](../../sdk/models/operations/patchatsjobsecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


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
import { UnifiedTo } from "unified-typescript-sdk";
import { RemoveAtsJobSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: RemoveAtsJobSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.job.removeAtsJob({
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.RemoveAtsJobRequest](../../sdk/models/operations/removeatsjobrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.RemoveAtsJobSecurity](../../sdk/models/operations/removeatsjobsecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


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
import { UnifiedTo } from "unified-typescript-sdk";
import { UpdateAtsJobSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { AtsCompensationType, AtsJobQuestionType, AtsJobStatus, EmploymentType, Frequency } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: UpdateAtsJobSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

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
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.UpdateAtsJobRequest](../../sdk/models/operations/updateatsjobrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.UpdateAtsJobSecurity](../../sdk/models/operations/updateatsjobsecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.UpdateAtsJobResponse](../../sdk/models/operations/updateatsjobresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
