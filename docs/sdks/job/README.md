# Job
(*job*)

### Available Operations

* [deleteAtsConnectionIdJobId](#deleteatsconnectionidjobid) - Remove a job
* [getAtsConnectionIdJob](#getatsconnectionidjob) - List all jobs
* [getAtsConnectionIdJobId](#getatsconnectionidjobid) - Retrieve a job
* [patchAtsConnectionIdJobId](#patchatsconnectionidjobid) - Update a job
* [postAtsConnectionIdJob](#postatsconnectionidjob) - Create a job
* [putAtsConnectionIdJobId](#putatsconnectionidjobid) - Update a job

## deleteAtsConnectionIdJobId

Remove a job

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteAtsConnectionIdJobIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.job.deleteAtsConnectionIdJobId({
  connectionId: "adipisci",
  id: "2e3b49db-e0f2-43b7-b6d9-948d6eded477",
}).then((res: DeleteAtsConnectionIdJobIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.DeleteAtsConnectionIdJobIdRequest](../../models/operations/deleteatsconnectionidjobidrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.DeleteAtsConnectionIdJobIdResponse](../../models/operations/deleteatsconnectionidjobidresponse.md)>**


## getAtsConnectionIdJob

List all jobs

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetAtsConnectionIdJobResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.job.getAtsConnectionIdJob({
  connectionId: "voluptas",
  limit: 5378.51,
  offset: 504.05,
  order: "reiciendis",
  query: "minus",
  sort: "iure",
  updatedGte: new Date("2022-11-11T00:39:35.207Z"),
}).then((res: GetAtsConnectionIdJobResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetAtsConnectionIdJobRequest](../../models/operations/getatsconnectionidjobrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetAtsConnectionIdJobResponse](../../models/operations/getatsconnectionidjobresponse.md)>**


## getAtsConnectionIdJobId

Retrieve a job

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetAtsConnectionIdJobIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.job.getAtsConnectionIdJobId({
  connectionId: "iure",
  id: "a82e5e82-fd28-4d10-80a7-e91392ab44cb",
}).then((res: GetAtsConnectionIdJobIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.GetAtsConnectionIdJobIdRequest](../../models/operations/getatsconnectionidjobidrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetAtsConnectionIdJobIdResponse](../../models/operations/getatsconnectionidjobidresponse.md)>**


## patchAtsConnectionIdJobId

Update a job

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PatchAtsConnectionIdJobIdResponse } from "Unified-to/dist/sdk/models/operations";
import {
  AtsCompensationFrequency,
  AtsCompensationType,
  AtsJobEmploymentType,
  AtsJobStatus,
} from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.job.patchAtsConnectionIdJobId({
  atsJob: {
    addresses: [
      {
        address1: "architecto",
        address2: "totam",
        city: "West Aaron",
        country: "Aruba",
        countryCode: "LA",
        postalCode: "23078-3185",
        region: "illo",
        regionCode: "tempora",
      },
    ],
    closedAt: new Date("2022-05-27T21:54:13.074Z"),
    compensation: [
      {
        currency: "rem",
        frequency: AtsCompensationFrequency.Hour,
        max: 6129.79,
        min: 7255.92,
        type: AtsCompensationType.Equity,
      },
    ],
    createdAt: new Date("2022-08-10T22:57:33.587Z"),
    departments: [
      "aperiam",
    ],
    description: "similique",
    employmentType: AtsJobEmploymentType.Freelance,
    hiringManagerIds: [
      "pariatur",
    ],
    id: "fde410c3-7daa-4918-aa49-d9625d3caffc",
    languageLocale: "inventore",
    name: "Guy Von",
    publicJobUrls: [
      "modi",
    ],
    raw: {},
    recruiterIds: [
      "quaerat",
    ],
    remote: false,
    status: AtsJobStatus.Pending,
    updatedAt: new Date("2022-07-04T21:18:33.130Z"),
  },
  connectionId: "unde",
  id: "2bcd440e-a98b-4ecc-a048-6de0d56d73b0",
}).then((res: PatchAtsConnectionIdJobIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.PatchAtsConnectionIdJobIdRequest](../../models/operations/patchatsconnectionidjobidrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.PatchAtsConnectionIdJobIdResponse](../../models/operations/patchatsconnectionidjobidresponse.md)>**


## postAtsConnectionIdJob

Create a job

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PostAtsConnectionIdJobResponse } from "Unified-to/dist/sdk/models/operations";
import {
  AtsCompensationFrequency,
  AtsCompensationType,
  AtsJobEmploymentType,
  AtsJobStatus,
} from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.job.postAtsConnectionIdJob({
  atsJob: {
    addresses: [
      {
        address1: "quae",
        address2: "quis",
        city: "North Consuelo",
        country: "Turkmenistan",
        countryCode: "LK",
        postalCode: "74149-9447",
        region: "iure",
        regionCode: "ullam",
      },
    ],
    closedAt: new Date("2022-07-06T19:55:18.068Z"),
    compensation: [
      {
        currency: "enim",
        frequency: AtsCompensationFrequency.Week,
        max: 3432.31,
        min: 6902.62,
        type: AtsCompensationType.StockOptions,
      },
    ],
    createdAt: new Date("2022-01-28T21:56:06.312Z"),
    departments: [
      "consectetur",
    ],
    description: "vero",
    employmentType: AtsJobEmploymentType.Contractor,
    hiringManagerIds: [
      "optio",
    ],
    id: "fcc6a91e-c526-424d-8001-4ef45cea11ac",
    languageLocale: "minima",
    name: "Henrietta Powlowski",
    publicJobUrls: [
      "nostrum",
    ],
    raw: {},
    recruiterIds: [
      "corrupti",
    ],
    remote: false,
    status: AtsJobStatus.Draft,
    updatedAt: new Date("2022-04-19T01:37:46.134Z"),
  },
  connectionId: "eius",
}).then((res: PostAtsConnectionIdJobResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.PostAtsConnectionIdJobRequest](../../models/operations/postatsconnectionidjobrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.PostAtsConnectionIdJobResponse](../../models/operations/postatsconnectionidjobresponse.md)>**


## putAtsConnectionIdJobId

Update a job

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PutAtsConnectionIdJobIdResponse } from "Unified-to/dist/sdk/models/operations";
import {
  AtsCompensationFrequency,
  AtsCompensationType,
  AtsJobEmploymentType,
  AtsJobStatus,
} from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.job.putAtsConnectionIdJobId({
  atsJob: {
    addresses: [
      {
        address1: "voluptatem",
        address2: "magnam",
        city: "West Randibury",
        country: "Rwanda",
        countryCode: "MK",
        postalCode: "89820-0695",
        region: "doloribus",
        regionCode: "unde",
      },
    ],
    closedAt: new Date("2022-03-17T10:24:00.538Z"),
    compensation: [
      {
        currency: "id",
        frequency: AtsCompensationFrequency.Week,
        max: 1012.53,
        min: 7482.56,
        type: AtsCompensationType.Salary,
      },
    ],
    createdAt: new Date("2022-08-21T15:07:46.264Z"),
    departments: [
      "a",
    ],
    description: "architecto",
    employmentType: AtsJobEmploymentType.Freelance,
    hiringManagerIds: [
      "vitae",
    ],
    id: "4718c6fa-2fad-40c0-ac5d-95472cdd14fc",
    languageLocale: "eius",
    name: "Miss Bridget King",
    publicJobUrls: [
      "fuga",
    ],
    raw: {},
    recruiterIds: [
      "laudantium",
    ],
    remote: false,
    status: AtsJobStatus.Draft,
    updatedAt: new Date("2020-12-28T11:43:36.436Z"),
  },
  connectionId: "dignissimos",
  id: "0c43351c-3dd1-4eb8-b7f7-5f4f23f1c0a5",
}).then((res: PutAtsConnectionIdJobIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.PutAtsConnectionIdJobIdRequest](../../models/operations/putatsconnectionidjobidrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.PutAtsConnectionIdJobIdResponse](../../models/operations/putatsconnectionidjobidresponse.md)>**

