# Document
(*document*)

### Available Operations

* [deleteAtsConnectionIdScorecardId](#deleteatsconnectionidscorecardid) - Remove a scorecard
* [getAtsConnectionIdScorecard](#getatsconnectionidscorecard) - List all scorecards
* [getAtsConnectionIdScorecardId](#getatsconnectionidscorecardid) - Retrieve a scorecard
* [patchAtsConnectionIdScorecardId](#patchatsconnectionidscorecardid) - Update a scorecard
* [postAtsConnectionIdScorecard](#postatsconnectionidscorecard) - Create a scorecard
* [putAtsConnectionIdScorecardId](#putatsconnectionidscorecardid) - Update a scorecard

## deleteAtsConnectionIdScorecardId

Remove a scorecard

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteAtsConnectionIdScorecardIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.document.deleteAtsConnectionIdScorecardId({
  connectionId: "Agent intrepid",
  id: "<ID>",
}).then((res: DeleteAtsConnectionIdScorecardIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.DeleteAtsConnectionIdScorecardIdRequest](../../models/operations/deleteatsconnectionidscorecardidrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.DeleteAtsConnectionIdScorecardIdResponse](../../models/operations/deleteatsconnectionidscorecardidresponse.md)>**


## getAtsConnectionIdScorecard

List all scorecards

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetAtsConnectionIdScorecardResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.document.getAtsConnectionIdScorecard({
  applicationId: "Licensed deep",
  candidateId: "happily",
  connectionId: "lunch accusamus",
  interviewId: "for famously Southwest",
  limit: 950.05,
  offset: 6133.23,
  order: "withdrawal",
  query: "Bicycle copy Bronze",
  sort: "ouch non ut",
  updatedGte: new Date("2021-06-01T09:53:52.927Z"),
}).then((res: GetAtsConnectionIdScorecardResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.GetAtsConnectionIdScorecardRequest](../../models/operations/getatsconnectionidscorecardrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.GetAtsConnectionIdScorecardResponse](../../models/operations/getatsconnectionidscorecardresponse.md)>**


## getAtsConnectionIdScorecardId

Retrieve a scorecard

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetAtsConnectionIdScorecardIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.document.getAtsConnectionIdScorecardId({
  connectionId: "East mobile Mini",
  id: "<ID>",
}).then((res: GetAtsConnectionIdScorecardIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.GetAtsConnectionIdScorecardIdRequest](../../models/operations/getatsconnectionidscorecardidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.GetAtsConnectionIdScorecardIdResponse](../../models/operations/getatsconnectionidscorecardidresponse.md)>**


## patchAtsConnectionIdScorecardId

Update a scorecard

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PatchAtsConnectionIdScorecardIdResponse } from "Unified-to/dist/sdk/models/operations";
import { AtsScorecardRecommendation } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.document.patchAtsConnectionIdScorecardId({
  atsScorecard: {
    applicationId: "Carter Hatchback functionalities",
    candidateId: "disagree gold New",
    createdAt: new Date("2023-05-08T15:11:07.692Z"),
    id: "<ID>",
    interviewId: "blue",
    interviewerId: "North Buckinghamshire blur",
    jobId: "kelvin hack Fantastic",
    raw: {},
    recommendation: AtsScorecardRecommendation.DefinitelyNo,
    updatedAt: new Date("2022-11-18T04:49:38.005Z"),
  },
  connectionId: "hacking meter",
  id: "<ID>",
}).then((res: PatchAtsConnectionIdScorecardIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.PatchAtsConnectionIdScorecardIdRequest](../../models/operations/patchatsconnectionidscorecardidrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.PatchAtsConnectionIdScorecardIdResponse](../../models/operations/patchatsconnectionidscorecardidresponse.md)>**


## postAtsConnectionIdScorecard

Create a scorecard

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PostAtsConnectionIdScorecardResponse } from "Unified-to/dist/sdk/models/operations";
import { AtsScorecardRecommendation } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.document.postAtsConnectionIdScorecard({
  atsScorecard: {
    applicationId: "female bah",
    candidateId: "if since",
    createdAt: new Date("2022-02-26T00:06:29.981Z"),
    id: "<ID>",
    interviewId: "invoice",
    interviewerId: "male",
    jobId: "Accountability",
    raw: {},
    recommendation: AtsScorecardRecommendation.StrongYes,
    updatedAt: new Date("2023-10-04T17:15:51.015Z"),
  },
  connectionId: "Legacy tan",
}).then((res: PostAtsConnectionIdScorecardResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.PostAtsConnectionIdScorecardRequest](../../models/operations/postatsconnectionidscorecardrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.PostAtsConnectionIdScorecardResponse](../../models/operations/postatsconnectionidscorecardresponse.md)>**


## putAtsConnectionIdScorecardId

Update a scorecard

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PutAtsConnectionIdScorecardIdResponse } from "Unified-to/dist/sdk/models/operations";
import { AtsScorecardRecommendation } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.document.putAtsConnectionIdScorecardId({
  atsScorecard: {
    applicationId: "East Granite",
    candidateId: "South",
    createdAt: new Date("2022-03-02T12:33:41.490Z"),
    id: "<ID>",
    interviewId: "Texas Technetium hack",
    interviewerId: "Adventure Kyrgyz Organic",
    jobId: "Home Dynamic Integration",
    raw: {},
    recommendation: AtsScorecardRecommendation.No,
    updatedAt: new Date("2023-11-13T03:01:57.066Z"),
  },
  connectionId: "Transexual Manager Rap",
  id: "<ID>",
}).then((res: PutAtsConnectionIdScorecardIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.PutAtsConnectionIdScorecardIdRequest](../../models/operations/putatsconnectionidscorecardidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.PutAtsConnectionIdScorecardIdResponse](../../models/operations/putatsconnectionidscorecardidresponse.md)>**

