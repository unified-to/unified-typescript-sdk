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
  connectionId: "facere",
  id: "9c337473-082b-494f-aab1-fd5671e9c326",
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
  applicationId: "neque",
  candidateId: "enim",
  connectionId: "eaque",
  interviewId: "officia",
  limit: 2702.53,
  offset: 4310.35,
  order: "molestiae",
  query: "architecto",
  sort: "aliquam",
  updatedGte: new Date("2022-07-12T22:54:11.511Z"),
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
  connectionId: "blanditiis",
  id: "9ce0e991-594d-493a-b4c0-252fe3b4b4db",
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
    applicationId: "atque",
    candidateId: "tempore",
    createdAt: new Date("2022-07-22T19:46:16.313Z"),
    id: "8ebb6e1d-2cf5-402b-afb2-cbc4635d5e65",
    interviewId: "at",
    interviewerId: "culpa",
    jobId: "alias",
    raw: {},
    recommendation: AtsScorecardRecommendation.DefinitelyNo,
    updatedAt: new Date("2021-06-03T11:24:52.324Z"),
  },
  connectionId: "dolor",
  id: "e951a1e3-0fda-4966-889d-7b78673e13a1",
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
    applicationId: "eos",
    candidateId: "dolorum",
    createdAt: new Date("2022-04-19T16:37:31.203Z"),
    id: "99249459-4487-4f5c-8438-36b86b3cdf64",
    interviewId: "dicta",
    interviewerId: "minima",
    jobId: "facilis",
    raw: {},
    recommendation: AtsScorecardRecommendation.DefinitelyNo,
    updatedAt: new Date("2022-09-13T14:57:39.091Z"),
  },
  connectionId: "molestias",
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
    applicationId: "hic",
    candidateId: "error",
    createdAt: new Date("2020-02-11T23:32:43.703Z"),
    id: "13f4eedb-e78b-4f60-a825-894ea763d5c7",
    interviewId: "fugit",
    interviewerId: "voluptate",
    jobId: "provident",
    raw: {},
    recommendation: AtsScorecardRecommendation.No,
    updatedAt: new Date("2022-01-28T06:25:58.770Z"),
  },
  connectionId: "laudantium",
  id: "5148d6d5-49e5-4635-b33b-c0f970c42fc9",
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

