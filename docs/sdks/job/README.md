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
  connectionId: "Sedan Bedfordshire Hybrid",
  id: "<ID>",
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
  connectionId: "City katal",
  limit: 3542.62,
  offset: 5417.97,
  order: "publisher",
  query: "Folding",
  sort: "Kip gross recontextualize",
  updatedGte: new Date("2022-10-12T03:36:20.050Z"),
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
  connectionId: "Jazz",
  id: "<ID>",
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
        address1: "Transexual",
        address2: "Planner redundant Towels",
        city: "Starkboro",
        country: "Chad",
        countryCode: "NU",
        postalCode: "22603",
        region: "Cambridgeshire",
        regionCode: "Account Copernicium at",
      },
    ],
    closedAt: new Date("2023-01-02T09:14:26.844Z"),
    compensation: [
      {
        currency: "Metical",
        frequency: AtsCompensationFrequency.Hour,
        max: 1424.24,
        min: 3626.17,
        type: AtsCompensationType.Salary,
      },
    ],
    createdAt: new Date("2022-03-16T15:29:37.822Z"),
    departments: [
      "Sports",
    ],
    description: "Operative bi-directional capability",
    employmentType: AtsJobEmploymentType.Intern,
    hiringManagerIds: [
      "Hop",
    ],
    id: "<ID>",
    languageLocale: "hence gracefully invoice",
    name: "Southeast vacantly Uranium",
    publicJobUrls: [
      "Keith",
    ],
    raw: {},
    recruiterIds: [
      "happily",
    ],
    remote: false,
    status: AtsJobStatus.Open,
    updatedAt: new Date("2023-08-04T07:33:03.088Z"),
  },
  connectionId: "Cis benchmark",
  id: "<ID>",
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
        address1: "Forward",
        address2: "Electric fuchsia kelvin",
        city: "Fort Sibylmouth",
        country: "Solomon Islands",
        countryCode: "DO",
        postalCode: "39037",
        region: "Rockford",
        regionCode: "Trafficway eaque athwart",
      },
    ],
    closedAt: new Date("2022-04-22T19:01:40.265Z"),
    compensation: [
      {
        currency: "Gourde",
        frequency: AtsCompensationFrequency.Year,
        max: 5349.62,
        min: 526.63,
        type: AtsCompensationType.Equity,
      },
    ],
    createdAt: new Date("2021-04-02T18:44:02.642Z"),
    departments: [
      "Polonium",
    ],
    description: "Progressive disintermediate matrix",
    employmentType: AtsJobEmploymentType.Intern,
    hiringManagerIds: [
      "itaque",
    ],
    id: "<ID>",
    languageLocale: "the joyfully",
    name: "Other because harbor",
    publicJobUrls: [
      "coil",
    ],
    raw: {},
    recruiterIds: [
      "JSON",
    ],
    remote: false,
    status: AtsJobStatus.Archived,
    updatedAt: new Date("2022-05-24T04:21:24.567Z"),
  },
  connectionId: "Coordinator applications",
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
        address1: "cotton Washington",
        address2: "rosin meanwhile male",
        city: "East Sierra",
        country: "Somalia",
        countryCode: "BQ",
        postalCode: "63475-6123",
        region: "lighthearted online Bicycle",
        regionCode: "robust",
      },
    ],
    closedAt: new Date("2021-05-06T11:53:52.940Z"),
    compensation: [
      {
        currency: "Iranian Rial",
        frequency: AtsCompensationFrequency.Year,
        max: 5965.42,
        min: 5273.81,
        type: AtsCompensationType.Bonus,
      },
    ],
    createdAt: new Date("2023-07-19T02:36:00.215Z"),
    departments: [
      "embrace",
    ],
    description: "Programmable tertiary benchmark",
    employmentType: AtsJobEmploymentType.Contractor,
    hiringManagerIds: [
      "New",
    ],
    id: "<ID>",
    languageLocale: "Facilitator Gasoline application",
    name: "North impractical",
    publicJobUrls: [
      "clamber",
    ],
    raw: {},
    recruiterIds: [
      "West",
    ],
    remote: false,
    status: AtsJobStatus.Closed,
    updatedAt: new Date("2023-02-01T04:41:47.094Z"),
  },
  connectionId: "North",
  id: "<ID>",
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

