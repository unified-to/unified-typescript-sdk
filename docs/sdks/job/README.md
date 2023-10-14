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
import { UnifiedTo } from "unified-to";
import {
  AtsCompensationFrequency,
  AtsCompensationType,
  AtsJobEmploymentType,
  AtsJobStatus,
} from "unified-to/dist/sdk/models/shared";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
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
        "Loan",
      ],
      hiringManagerIds: [
        "driver",
      ],
      publicJobUrls: [
        "Transmasculine",
      ],
      raw: {},
      recruiterIds: [
        "Mini",
      ],
    },
    connectionId: "Savings Customer Loan",
    fields: [
      "SMS",
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.CreateAtsJobRequest](../../models/operations/createatsjobrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.CreateAtsJobResponse](../../models/operations/createatsjobresponse.md)>**


## getAtsJob

Retrieve a job

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.job.getAtsJob({
    connectionId: "runway",
    fields: [
      "Bronze",
    ],
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.GetAtsJobRequest](../../models/operations/getatsjobrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.GetAtsJobResponse](../../models/operations/getatsjobresponse.md)>**


## listAtsJobs

List all jobs

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.job.listAtsJobs({
    connectionId: "niches SQL",
    fields: [
      "1080p",
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.ListAtsJobsRequest](../../models/operations/listatsjobsrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.ListAtsJobsResponse](../../models/operations/listatsjobsresponse.md)>**


## patchAtsJob

Update a job

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";
import {
  AtsCompensationFrequency,
  AtsCompensationType,
  AtsJobEmploymentType,
  AtsJobStatus,
} from "unified-to/dist/sdk/models/shared";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
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
        "indigo",
      ],
      hiringManagerIds: [
        "Bedfordshire",
      ],
      publicJobUrls: [
        "North",
      ],
      raw: {},
      recruiterIds: [
        "mainland",
      ],
    },
    connectionId: "gold Principal",
    fields: [
      "BMW",
    ],
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.PatchAtsJobRequest](../../models/operations/patchatsjobrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.PatchAtsJobResponse](../../models/operations/patchatsjobresponse.md)>**


## removeAtsJob

Remove a job

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.job.removeAtsJob({
    connectionId: "Aruba",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.RemoveAtsJobRequest](../../models/operations/removeatsjobrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.RemoveAtsJobResponse](../../models/operations/removeatsjobresponse.md)>**


## updateAtsJob

Update a job

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";
import {
  AtsCompensationFrequency,
  AtsCompensationType,
  AtsJobEmploymentType,
  AtsJobStatus,
} from "unified-to/dist/sdk/models/shared";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
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
        "Plastic",
      ],
      hiringManagerIds: [
        "West",
      ],
      publicJobUrls: [
        "Direct",
      ],
      raw: {},
      recruiterIds: [
        "SMS",
      ],
    },
    connectionId: "euthanise system",
    fields: [
      "payment",
    ],
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.UpdateAtsJobRequest](../../models/operations/updateatsjobrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.UpdateAtsJobResponse](../../models/operations/updateatsjobresponse.md)>**

