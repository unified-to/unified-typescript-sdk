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
  connectionId: "markets sievert meh",
  id: "<ID>",
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
  candidateId: "turquoise",
  connectionId: "Regional Bedfordshire",
  jobId: "Northwest portal Electric",
  limit: 576.8,
  offset: 7467.13,
  order: "Architect",
  query: "loosely contingency",
  sort: "female",
  updatedGte: new Date("2023-09-05T13:59:23.348Z"),
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
  connectionId: "Buckinghamshire functionalities",
  id: "<ID>",
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
    appliedAt: new Date("2023-10-17T09:51:42.165Z"),
    candidateId: "North et beyond",
    createdAt: new Date("2023-01-08T08:26:22.845Z"),
    id: "<ID>",
    jobId: "ick Sausages Bronze",
    raw: {},
    rejectedAt: new Date("2023-10-18T00:47:25.469Z"),
    rejectedReason: "Avon Sum quis",
    source: "Carolina Wooden Pop",
    status: AtsApplicationStatus.Hired,
    updatedAt: new Date("2021-07-20T22:05:46.009Z"),
  },
  connectionId: "Baby Paucek",
  id: "<ID>",
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
    appliedAt: new Date("2021-10-26T15:24:28.979Z"),
    candidateId: "solid",
    createdAt: new Date("2022-09-13T17:17:33.049Z"),
    id: "<ID>",
    jobId: "Gloves Pizza virtual",
    raw: {},
    rejectedAt: new Date("2023-12-27T18:41:56.821Z"),
    rejectedReason: "Northwest Kids",
    source: "Human Tasty Loan",
    status: AtsApplicationStatus.New,
    updatedAt: new Date("2022-11-01T21:08:50.319Z"),
  },
  connectionId: "Jazz",
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
    appliedAt: new Date("2022-06-15T22:25:51.833Z"),
    candidateId: "farad Indianapolis",
    createdAt: new Date("2022-04-01T21:03:58.880Z"),
    id: "<ID>",
    jobId: "enable foreground",
    raw: {},
    rejectedAt: new Date("2022-11-06T11:41:30.414Z"),
    rejectedReason: "virtual North plum",
    source: "Fort solid",
    status: AtsApplicationStatus.Submitted,
    updatedAt: new Date("2021-02-21T04:47:57.079Z"),
  },
  connectionId: "Southeast",
  id: "<ID>",
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

