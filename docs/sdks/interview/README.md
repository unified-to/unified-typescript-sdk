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
  connectionId: "minus",
  id: "7dda70ec-60e6-4075-894d-61c14cd90227",
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
  applicationId: "recusandae",
  connectionId: "neque",
  limit: 4704,
  offset: 7513.92,
  order: "eaque",
  query: "facere",
  sort: "iste",
  updatedGte: new Date("2022-07-18T13:22:41.461Z"),
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
  connectionId: "reiciendis",
  id: "1a5491ab-e975-41b1-86d2-3e03e69815aa",
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
    applicationId: "officiis",
    candidateId: "omnis",
    createdAt: new Date("2021-02-14T06:16:40.973Z"),
    endAt: new Date("2020-07-04T00:06:57.464Z"),
    externalEventXref: "necessitatibus",
    id: "9e729c9d-4f2d-48a4-8640-ca60db73a2f9",
    jobId: "dolorem",
    location: "maiores",
    raw: {},
    startAt: new Date("2022-07-30T22:40:12.837Z"),
    status: AtsInterviewStatus.AwaitingFeedback,
    updatedAt: new Date("2020-08-23T06:10:38.086Z"),
    userIds: [
      "quae",
    ],
  },
  connectionId: "possimus",
  id: "8da56122-026a-4b8f-a774-85c1976af980",
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
    applicationId: "nulla",
    candidateId: "culpa",
    createdAt: new Date("2022-05-03T00:35:12.279Z"),
    endAt: new Date("2022-07-01T18:15:54.042Z"),
    externalEventXref: "unde",
    id: "fc44db27-4530-4e5c-87c6-d0cbcfdcd334",
    jobId: "facilis",
    location: "autem",
    raw: {},
    startAt: new Date("2021-10-11T12:48:40.365Z"),
    status: AtsInterviewStatus.Scheduled,
    updatedAt: new Date("2022-04-07T13:36:21.889Z"),
    userIds: [
      "minus",
    ],
  },
  connectionId: "repudiandae",
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
    applicationId: "quisquam",
    candidateId: "mollitia",
    createdAt: new Date("2022-04-26T08:01:34.967Z"),
    endAt: new Date("2022-04-30T16:16:14.065Z"),
    externalEventXref: "voluptates",
    id: "e5e0da8b-9af6-4ad0-9486-e7b413cbe2d1",
    jobId: "molestiae",
    location: "ea",
    raw: {},
    startAt: new Date("2020-07-27T11:23:20.202Z"),
    status: AtsInterviewStatus.Scheduled,
    updatedAt: new Date("2022-03-28T14:55:27.491Z"),
    userIds: [
      "adipisci",
    ],
  },
  connectionId: "pariatur",
  id: "40f61d17-1157-4cbe-9ee4-f7211840772f",
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

