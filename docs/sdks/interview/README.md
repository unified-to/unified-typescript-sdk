# Interview
(*interview*)

### Available Operations

* [deleteAtsConnectionIdInterviewId](#deleteatsconnectionidinterviewid) - Remove a interview
* [getAtsConnectionIdInterview](#getatsconnectionidinterview) - List all interviews
* [getAtsConnectionIdInterviewId](#getatsconnectionidinterviewid) - Retrieve a interview
* [patchAtsConnectionIdInterviewId](#patchatsconnectionidinterviewid) - Update a interview
* [postAtsConnectionIdInterview](#postatsconnectionidinterview) - Create a interview
* [putAtsConnectionIdInterviewId](#putatsconnectionidinterviewid) - Update a interview

## deleteAtsConnectionIdInterviewId

Remove a interview

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteAtsConnectionIdInterviewIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.interview.deleteAtsConnectionIdInterviewId({
  connectionId: "redundant Health Hayes",
  id: "<ID>",
}).then((res: DeleteAtsConnectionIdInterviewIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.DeleteAtsConnectionIdInterviewIdRequest](../../models/operations/deleteatsconnectionidinterviewidrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.DeleteAtsConnectionIdInterviewIdResponse](../../models/operations/deleteatsconnectionidinterviewidresponse.md)>**


## getAtsConnectionIdInterview

List all interviews

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetAtsConnectionIdInterviewResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.interview.getAtsConnectionIdInterview({
  applicationId: "Fresh Pickup converse",
  connectionId: "vortals",
  limit: 5167.08,
  offset: 6488.61,
  order: "Oregon Metal",
  query: "Account",
  sort: "haptic",
  updatedGte: new Date("2021-09-23T19:46:35.825Z"),
}).then((res: GetAtsConnectionIdInterviewResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.GetAtsConnectionIdInterviewRequest](../../models/operations/getatsconnectionidinterviewrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.GetAtsConnectionIdInterviewResponse](../../models/operations/getatsconnectionidinterviewresponse.md)>**


## getAtsConnectionIdInterviewId

Retrieve a interview

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetAtsConnectionIdInterviewIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.interview.getAtsConnectionIdInterviewId({
  connectionId: "Loan Gorgeous lux",
  id: "<ID>",
}).then((res: GetAtsConnectionIdInterviewIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.GetAtsConnectionIdInterviewIdRequest](../../models/operations/getatsconnectionidinterviewidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.GetAtsConnectionIdInterviewIdResponse](../../models/operations/getatsconnectionidinterviewidresponse.md)>**


## patchAtsConnectionIdInterviewId

Update a interview

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PatchAtsConnectionIdInterviewIdResponse } from "Unified-to/dist/sdk/models/operations";
import { AtsInterviewStatus } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.interview.patchAtsConnectionIdInterviewId({
  atsInterview: {
    applicationId: "SSD green pascal",
    candidateId: "Buckinghamshire example",
    createdAt: new Date("2021-08-24T08:30:07.073Z"),
    endAt: new Date("2021-06-27T04:06:46.373Z"),
    externalEventXref: "apropos Gadolinium",
    id: "<ID>",
    jobId: "transgender transmitting",
    location: "Investor synthesizing",
    raw: {},
    startAt: new Date("2021-01-19T01:51:02.213Z"),
    status: AtsInterviewStatus.AwaitingFeedback,
    updatedAt: new Date("2022-01-21T17:38:09.113Z"),
    userIds: [
      "Honda",
    ],
  },
  connectionId: "Myrl Dram Trail",
  id: "<ID>",
}).then((res: PatchAtsConnectionIdInterviewIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.PatchAtsConnectionIdInterviewIdRequest](../../models/operations/patchatsconnectionidinterviewidrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.PatchAtsConnectionIdInterviewIdResponse](../../models/operations/patchatsconnectionidinterviewidresponse.md)>**


## postAtsConnectionIdInterview

Create a interview

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PostAtsConnectionIdInterviewResponse } from "Unified-to/dist/sdk/models/operations";
import { AtsInterviewStatus } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.interview.postAtsConnectionIdInterview({
  atsInterview: {
    applicationId: "round Hat Savings",
    candidateId: "Northeast",
    createdAt: new Date("2022-12-27T10:33:09.160Z"),
    endAt: new Date("2021-11-12T23:57:19.974Z"),
    externalEventXref: "platforms",
    id: "<ID>",
    jobId: "payment panel Identity",
    location: "Northwest Buckinghamshire",
    raw: {},
    startAt: new Date("2022-11-02T05:07:18.592Z"),
    status: AtsInterviewStatus.Complete,
    updatedAt: new Date("2023-07-13T16:35:04.177Z"),
    userIds: [
      "Chevrolet",
    ],
  },
  connectionId: "Shoes Northeast SMTP",
}).then((res: PostAtsConnectionIdInterviewResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.PostAtsConnectionIdInterviewRequest](../../models/operations/postatsconnectionidinterviewrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.PostAtsConnectionIdInterviewResponse](../../models/operations/postatsconnectionidinterviewresponse.md)>**


## putAtsConnectionIdInterviewId

Update a interview

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PutAtsConnectionIdInterviewIdResponse } from "Unified-to/dist/sdk/models/operations";
import { AtsInterviewStatus } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.interview.putAtsConnectionIdInterviewId({
  atsInterview: {
    applicationId: "Generic capacitor",
    candidateId: "Road disbelieve",
    createdAt: new Date("2022-06-22T01:57:06.573Z"),
    endAt: new Date("2022-05-28T02:29:32.144Z"),
    externalEventXref: "architectures",
    id: "<ID>",
    jobId: "Casper 1080p South",
    location: "program siemens Cis",
    raw: {},
    startAt: new Date("2021-03-14T15:20:41.084Z"),
    status: AtsInterviewStatus.AwaitingFeedback,
    updatedAt: new Date("2023-07-14T19:59:39.905Z"),
    userIds: [
      "East",
    ],
  },
  connectionId: "ASCII yet Hybrid",
  id: "<ID>",
}).then((res: PutAtsConnectionIdInterviewIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.PutAtsConnectionIdInterviewIdRequest](../../models/operations/putatsconnectionidinterviewidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.PutAtsConnectionIdInterviewIdResponse](../../models/operations/putatsconnectionidinterviewidresponse.md)>**

