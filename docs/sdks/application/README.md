# Application
(*application*)

### Available Operations

* [deleteAtsConnectionIdApplicationId](#deleteatsconnectionidapplicationid) - Remove an application
* [getAtsConnectionIdApplication](#getatsconnectionidapplication) - List all applications
* [getAtsConnectionIdApplicationId](#getatsconnectionidapplicationid) - Retrieve an application
* [patchAtsConnectionIdApplicationId](#patchatsconnectionidapplicationid) - Update an application
* [postAtsConnectionIdApplication](#postatsconnectionidapplication) - Create an application
* [putAtsConnectionIdApplicationId](#putatsconnectionidapplicationid) - Update an application

## deleteAtsConnectionIdApplicationId

Remove an application

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteAtsConnectionIdApplicationIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.application.deleteAtsConnectionIdApplicationId({
  connectionId: "quaerat",
  id: "ebf69280-d1ba-477a-89eb-f737ae4203ce",
}).then((res: DeleteAtsConnectionIdApplicationIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.DeleteAtsConnectionIdApplicationIdRequest](../../models/operations/deleteatsconnectionidapplicationidrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.DeleteAtsConnectionIdApplicationIdResponse](../../models/operations/deleteatsconnectionidapplicationidresponse.md)>**


## getAtsConnectionIdApplication

List all applications

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetAtsConnectionIdApplicationResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.application.getAtsConnectionIdApplication({
  candidateId: "ad",
  connectionId: "saepe",
  jobId: "suscipit",
  limit: 6457.85,
  offset: 5883.17,
  order: "minima",
  query: "repellendus",
  sort: "totam",
  updatedGte: new Date("2022-12-31T23:01:47.942Z"),
}).then((res: GetAtsConnectionIdApplicationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.GetAtsConnectionIdApplicationRequest](../../models/operations/getatsconnectionidapplicationrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.GetAtsConnectionIdApplicationResponse](../../models/operations/getatsconnectionidapplicationresponse.md)>**


## getAtsConnectionIdApplicationId

Retrieve an application

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetAtsConnectionIdApplicationIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.application.getAtsConnectionIdApplicationId({
  connectionId: "at",
  id: "446ce2af-7a73-4cf3-be45-3f870b326b5a",
}).then((res: GetAtsConnectionIdApplicationIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.GetAtsConnectionIdApplicationIdRequest](../../models/operations/getatsconnectionidapplicationidrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.GetAtsConnectionIdApplicationIdResponse](../../models/operations/getatsconnectionidapplicationidresponse.md)>**


## patchAtsConnectionIdApplicationId

Update an application

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PatchAtsConnectionIdApplicationIdResponse } from "Unified-to/dist/sdk/models/operations";
import { AtsApplicationStatus } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.application.patchAtsConnectionIdApplicationId({
  atsApplication: {
    appliedAt: new Date("2022-10-14T13:38:40.307Z"),
    candidateId: "incidunt",
    createdAt: new Date("2022-05-31T19:46:08.472Z"),
    id: "cdb1a842-2bb6-479d-a322-715bf0cbb1e3",
    jobId: "veritatis",
    raw: {},
    rejectedAt: new Date("2021-11-23T21:35:15.992Z"),
    rejectedReason: "tempore",
    source: "cupiditate",
    status: AtsApplicationStatus.New,
    updatedAt: new Date("2022-05-16T23:21:11.104Z"),
  },
  connectionId: "dolore",
  id: "43a1108e-0adc-4f4b-9218-79fce953f73e",
}).then((res: PatchAtsConnectionIdApplicationIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.PatchAtsConnectionIdApplicationIdRequest](../../models/operations/patchatsconnectionidapplicationidrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.PatchAtsConnectionIdApplicationIdResponse](../../models/operations/patchatsconnectionidapplicationidresponse.md)>**


## postAtsConnectionIdApplication

Create an application

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PostAtsConnectionIdApplicationResponse } from "Unified-to/dist/sdk/models/operations";
import { AtsApplicationStatus } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.application.postAtsConnectionIdApplication({
  atsApplication: {
    appliedAt: new Date("2021-07-10T23:11:25.857Z"),
    candidateId: "hic",
    createdAt: new Date("2021-05-27T13:58:14.379Z"),
    id: "7abd74dd-39c0-4f5d-acff-7c70a45626d4",
    jobId: "ratione",
    raw: {},
    rejectedAt: new Date("2022-06-28T08:50:44.084Z"),
    rejectedReason: "dicta",
    source: "dolor",
    status: AtsApplicationStatus.Rejected,
    updatedAt: new Date("2022-08-05T18:23:03.713Z"),
  },
  connectionId: "nulla",
}).then((res: PostAtsConnectionIdApplicationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.PostAtsConnectionIdApplicationRequest](../../models/operations/postatsconnectionidapplicationrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.PostAtsConnectionIdApplicationResponse](../../models/operations/postatsconnectionidapplicationresponse.md)>**


## putAtsConnectionIdApplicationId

Update an application

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PutAtsConnectionIdApplicationIdResponse } from "Unified-to/dist/sdk/models/operations";
import { AtsApplicationStatus } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.application.putAtsConnectionIdApplicationId({
  atsApplication: {
    appliedAt: new Date("2021-01-20T18:27:01.887Z"),
    candidateId: "nostrum",
    createdAt: new Date("2020-08-20T04:25:24.387Z"),
    id: "e6c55614-6c3e-4250-bb00-8c42e141aac3",
    jobId: "eum",
    raw: {},
    rejectedAt: new Date("2022-04-01T11:18:05.592Z"),
    rejectedReason: "quas",
    source: "assumenda",
    status: AtsApplicationStatus.Hired,
    updatedAt: new Date("2022-04-10T15:05:31.822Z"),
  },
  connectionId: "quasi",
  id: "44290747-4778-4a7b-9466-d28c10ab3cdc",
}).then((res: PutAtsConnectionIdApplicationIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.PutAtsConnectionIdApplicationIdRequest](../../models/operations/putatsconnectionidapplicationidrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.PutAtsConnectionIdApplicationIdResponse](../../models/operations/putatsconnectionidapplicationidresponse.md)>**

