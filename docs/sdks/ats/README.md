# Ats
(*ats*)

### Available Operations

* [deleteAtsConnectionIdApplicationId](#deleteatsconnectionidapplicationid) - Remove an application
* [deleteAtsConnectionIdCandidateId](#deleteatsconnectionidcandidateid) - Remove a candidate
* [deleteAtsConnectionIdInterviewId](#deleteatsconnectionidinterviewid) - Remove a interview
* [deleteAtsConnectionIdJobId](#deleteatsconnectionidjobid) - Remove a job
* [deleteAtsConnectionIdScorecardId](#deleteatsconnectionidscorecardid) - Remove a scorecard
* [getAtsConnectionIdApplication](#getatsconnectionidapplication) - List all applications
* [getAtsConnectionIdApplicationId](#getatsconnectionidapplicationid) - Retrieve an application
* [getAtsConnectionIdCandidate](#getatsconnectionidcandidate) - List all candidates
* [getAtsConnectionIdCandidateId](#getatsconnectionidcandidateid) - Retrieve a candidate
* [getAtsConnectionIdInterview](#getatsconnectionidinterview) - List all interviews
* [getAtsConnectionIdInterviewId](#getatsconnectionidinterviewid) - Retrieve a interview
* [getAtsConnectionIdJob](#getatsconnectionidjob) - List all jobs
* [getAtsConnectionIdJobId](#getatsconnectionidjobid) - Retrieve a job
* [getAtsConnectionIdScorecard](#getatsconnectionidscorecard) - List all scorecards
* [getAtsConnectionIdScorecardId](#getatsconnectionidscorecardid) - Retrieve a scorecard
* [patchAtsConnectionIdApplicationId](#patchatsconnectionidapplicationid) - Update an application
* [patchAtsConnectionIdCandidateId](#patchatsconnectionidcandidateid) - Update a candidate
* [patchAtsConnectionIdInterviewId](#patchatsconnectionidinterviewid) - Update a interview
* [patchAtsConnectionIdJobId](#patchatsconnectionidjobid) - Update a job
* [patchAtsConnectionIdScorecardId](#patchatsconnectionidscorecardid) - Update a scorecard
* [postAtsConnectionIdApplication](#postatsconnectionidapplication) - Create an application
* [postAtsConnectionIdCandidate](#postatsconnectionidcandidate) - Create a candidate
* [postAtsConnectionIdInterview](#postatsconnectionidinterview) - Create a interview
* [postAtsConnectionIdJob](#postatsconnectionidjob) - Create a job
* [postAtsConnectionIdScorecard](#postatsconnectionidscorecard) - Create a scorecard
* [putAtsConnectionIdApplicationId](#putatsconnectionidapplicationid) - Update an application
* [putAtsConnectionIdCandidateId](#putatsconnectionidcandidateid) - Update a candidate
* [putAtsConnectionIdInterviewId](#putatsconnectionidinterviewid) - Update a interview
* [putAtsConnectionIdJobId](#putatsconnectionidjobid) - Update a job
* [putAtsConnectionIdScorecardId](#putatsconnectionidscorecardid) - Update a scorecard

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

sdk.ats.deleteAtsConnectionIdApplicationId({
  connectionId: "fuga",
  id: "4251904e-523c-47e0-bc71-78e4796f2a70",
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


## deleteAtsConnectionIdCandidateId

Remove a candidate

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteAtsConnectionIdCandidateIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.ats.deleteAtsConnectionIdCandidateId({
  connectionId: "porro",
  id: "688282aa-4825-462f-a22e-9817ee17cbe6",
}).then((res: DeleteAtsConnectionIdCandidateIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                | [operations.DeleteAtsConnectionIdCandidateIdRequest](../../models/operations/deleteatsconnectionidcandidateidrequest.md) | :heavy_check_mark:                                                                                                       | The request object to use for the request.                                                                               |
| `config`                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                             | :heavy_minus_sign:                                                                                                       | Available config options for making requests.                                                                            |


### Response

**Promise<[operations.DeleteAtsConnectionIdCandidateIdResponse](../../models/operations/deleteatsconnectionidcandidateidresponse.md)>**


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

sdk.ats.deleteAtsConnectionIdInterviewId({
  connectionId: "quasi",
  id: "e6b7b95b-c0ab-43c2-8c4f-3789fd871f99",
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

sdk.ats.deleteAtsConnectionIdJobId({
  connectionId: "pariatur",
  id: "d2efd121-aa6f-41e6-b4bd-b04f15756082",
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

sdk.ats.deleteAtsConnectionIdScorecardId({
  connectionId: "quibusdam",
  id: "68ea19f1-d170-4513-b9d0-8086a1840394",
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

sdk.ats.getAtsConnectionIdApplication({
  candidateId: "impedit",
  connectionId: "explicabo",
  jobId: "voluptas",
  limit: 120.36,
  offset: 4910.25,
  order: "dicta",
  query: "maiores",
  sort: "natus",
  updatedGte: new Date("2022-01-10T09:30:55.914Z"),
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

sdk.ats.getAtsConnectionIdApplicationId({
  connectionId: "voluptas",
  id: "f0642dac-7af5-415c-8413-aa63aae8d678",
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


## getAtsConnectionIdCandidate

List all candidates

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetAtsConnectionIdCandidateResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.ats.getAtsConnectionIdCandidate({
  connectionId: "vel",
  limit: 2870.51,
  offset: 8225.6,
  order: "facilis",
  query: "cum",
  sort: "commodi",
  updatedGte: new Date("2022-08-22T09:37:14.602Z"),
}).then((res: GetAtsConnectionIdCandidateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.GetAtsConnectionIdCandidateRequest](../../models/operations/getatsconnectionidcandidaterequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.GetAtsConnectionIdCandidateResponse](../../models/operations/getatsconnectionidcandidateresponse.md)>**


## getAtsConnectionIdCandidateId

Retrieve a candidate

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetAtsConnectionIdCandidateIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.ats.getAtsConnectionIdCandidateId({
  connectionId: "reiciendis",
  id: "d5e60b37-5ed4-4f6f-bee4-1f33317fe35b",
}).then((res: GetAtsConnectionIdCandidateIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.GetAtsConnectionIdCandidateIdRequest](../../models/operations/getatsconnectionidcandidateidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.GetAtsConnectionIdCandidateIdResponse](../../models/operations/getatsconnectionidcandidateidresponse.md)>**


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

sdk.ats.getAtsConnectionIdInterview({
  applicationId: "laboriosam",
  connectionId: "ipsa",
  limit: 9167.27,
  offset: 7307.09,
  order: "vitae",
  query: "accusamus",
  sort: "similique",
  updatedGte: new Date("2022-11-13T12:32:25.289Z"),
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

sdk.ats.getAtsConnectionIdInterviewId({
  connectionId: "voluptas",
  id: "555ba3c2-8744-4ed5-bb88-f3a8d8f5c0b2",
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

sdk.ats.getAtsConnectionIdJob({
  connectionId: "reiciendis",
  limit: 1318.52,
  offset: 9944.01,
  order: "facilis",
  query: "voluptate",
  sort: "expedita",
  updatedGte: new Date("2022-05-22T17:05:01.514Z"),
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

sdk.ats.getAtsConnectionIdJobId({
  connectionId: "dolore",
  id: "a276b269-16fe-41f0-8f42-94e3698f447f",
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

sdk.ats.getAtsConnectionIdScorecard({
  applicationId: "ex",
  candidateId: "sit",
  connectionId: "non",
  interviewId: "officiis",
  limit: 5058.66,
  offset: 7086.09,
  order: "quaerat",
  query: "incidunt",
  sort: "ipsam",
  updatedGte: new Date("2021-06-05T03:46:35.414Z"),
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

sdk.ats.getAtsConnectionIdScorecardId({
  connectionId: "sit",
  id: "ca55efd2-0e45-47e1-858b-6a89fbe3a5aa",
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

sdk.ats.patchAtsConnectionIdApplicationId({
  atsApplication: {
    appliedAt: new Date("2021-03-30T03:48:24.857Z"),
    candidateId: "tempora",
    createdAt: new Date("2022-09-14T18:19:59.469Z"),
    id: "4d0ab407-5088-4e51-8620-65e904f3b119",
    jobId: "labore",
    raw: {},
    rejectedAt: new Date("2021-12-03T11:25:52.746Z"),
    rejectedReason: "laborum",
    source: "nam",
    status: AtsApplicationStatus.Rejected,
    updatedAt: new Date("2022-12-31T00:19:10.437Z"),
  },
  connectionId: "amet",
  id: "a79f9dfe-0ab7-4da8-a50c-e187f86bc173",
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


## patchAtsConnectionIdCandidateId

Update a candidate

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PatchAtsConnectionIdCandidateIdResponse } from "Unified-to/dist/sdk/models/operations";
import { AtsEmailType, AtsTelephoneType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.ats.patchAtsConnectionIdCandidateId({
  atsCandidate: {
    address: {
      address1: "assumenda",
      address2: "ea",
      city: "Lindaside",
      country: "Timor-Leste",
      countryCode: "TK",
      postalCode: "31495-8653",
      region: "repudiandae",
      regionCode: "atque",
    },
    companyName: "atque",
    createdAt: new Date("2022-01-28T23:50:19.904Z"),
    emails: [
      {
        email: "Richie.Grant91@hotmail.com",
        type: AtsEmailType.Work,
      },
    ],
    externalId: "accusantium",
    id: "12563f94-e29e-4973-a922-a57a15be3e06",
    imageUrl: "ipsa",
    name: "Frank Krajcik",
    raw: {},
    tags: [
      "cum",
    ],
    telephones: [
      {
        telephone: "iure",
        type: AtsTelephoneType.Mobile,
      },
    ],
    title: "Mr.",
    updatedAt: new Date("2021-07-27T21:33:31.354Z"),
  },
  connectionId: "voluptatum",
  id: "845f0597-a60f-4f2a-94a3-1e94764a3e86",
}).then((res: PatchAtsConnectionIdCandidateIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.PatchAtsConnectionIdCandidateIdRequest](../../models/operations/patchatsconnectionidcandidateidrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.PatchAtsConnectionIdCandidateIdResponse](../../models/operations/patchatsconnectionidcandidateidresponse.md)>**


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

sdk.ats.patchAtsConnectionIdInterviewId({
  atsInterview: {
    applicationId: "nemo",
    candidateId: "recusandae",
    createdAt: new Date("2022-05-29T21:22:23.687Z"),
    endAt: new Date("2022-07-27T09:33:49.991Z"),
    externalEventXref: "reiciendis",
    id: "9251a5a9-da66-40ff-97bf-aad4f9efc1b4",
    jobId: "quis",
    location: "inventore",
    raw: {},
    startAt: new Date("2022-03-27T16:13:46.480Z"),
    status: AtsInterviewStatus.Scheduled,
    updatedAt: new Date("2022-10-04T16:56:27.065Z"),
    userIds: [
      "aspernatur",
    ],
  },
  connectionId: "eum",
  id: "48dc2f61-5199-4ebf-90e9-fe6c632ca3ae",
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

sdk.ats.patchAtsConnectionIdJobId({
  atsJob: {
    addresses: [
      {
        address1: "nulla",
        address2: "consequatur",
        city: "North Jessefurt",
        country: "Moldova",
        countryCode: "HM",
        postalCode: "01988",
        region: "ipsa",
        regionCode: "tempora",
      },
    ],
    closedAt: new Date("2022-07-12T06:51:18.031Z"),
    compensation: [
      {
        currency: "dicta",
        frequency: AtsCompensationFrequency.Year,
        max: 4570.59,
        min: 5083.9,
        type: AtsCompensationType.Other,
      },
    ],
    createdAt: new Date("2021-09-24T00:59:48.564Z"),
    departments: [
      "architecto",
    ],
    description: "fugiat",
    employmentType: AtsJobEmploymentType.FullTime,
    hiringManagerIds: [
      "dicta",
    ],
    id: "7476360a-15db-46a6-a065-9a1adeaab585",
    languageLocale: "vitae",
    name: "Ruben Ryan",
    publicJobUrls: [
      "ad",
    ],
    raw: {},
    recruiterIds: [
      "expedita",
    ],
    remote: false,
    status: AtsJobStatus.Archived,
    updatedAt: new Date("2021-07-11T19:18:20.130Z"),
  },
  connectionId: "aliquid",
  id: "1891baa0-fe1a-4de0-88e6-f8c5f350d8cd",
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

sdk.ats.patchAtsConnectionIdScorecardId({
  atsScorecard: {
    applicationId: "nam",
    candidateId: "ipsam",
    createdAt: new Date("2022-07-22T07:25:32.550Z"),
    id: "41814301-0421-4813-9520-8ece7e253b66",
    interviewId: "voluptatum",
    interviewerId: "magnam",
    jobId: "exercitationem",
    raw: {},
    recommendation: AtsScorecardRecommendation.DefinitelyNo,
    updatedAt: new Date("2021-09-26T01:55:33.743Z"),
  },
  connectionId: "nobis",
  id: "6e205e16-deab-43fe-8957-8a64584273a8",
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

sdk.ats.postAtsConnectionIdApplication({
  atsApplication: {
    appliedAt: new Date("2022-11-26T09:57:27.688Z"),
    candidateId: "rem",
    createdAt: new Date("2022-08-25T11:14:44.041Z"),
    id: "62309fb0-9299-421a-afb9-f58c4d86e68e",
    jobId: "modi",
    raw: {},
    rejectedAt: new Date("2021-03-31T11:58:23.065Z"),
    rejectedReason: "voluptatem",
    source: "ipsam",
    status: AtsApplicationStatus.SecondInterview,
    updatedAt: new Date("2022-11-27T17:29:03.103Z"),
  },
  connectionId: "non",
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


## postAtsConnectionIdCandidate

Create a candidate

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PostAtsConnectionIdCandidateResponse } from "Unified-to/dist/sdk/models/operations";
import { AtsEmailType, AtsTelephoneType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.ats.postAtsConnectionIdCandidate({
  atsCandidate: {
    address: {
      address1: "maiores",
      address2: "enim",
      city: "Ryderfurt",
      country: "Kenya",
      countryCode: "GT",
      postalCode: "63587",
      region: "hic",
      regionCode: "necessitatibus",
    },
    companyName: "asperiores",
    createdAt: new Date("2022-08-16T11:44:46.779Z"),
    emails: [
      {
        email: "Virginie_Bergnaum67@hotmail.com",
        type: AtsEmailType.Work,
      },
    ],
    externalId: "velit",
    id: "83c2beb4-7737-43c8-972f-64d1db1f2c43",
    imageUrl: "illo",
    name: "Dr. Gina Jaskolski",
    raw: {},
    tags: [
      "eum",
    ],
    telephones: [
      {
        telephone: "velit",
        type: AtsTelephoneType.Home,
      },
    ],
    title: "Ms.",
    updatedAt: new Date("2022-08-25T07:25:33.000Z"),
  },
  connectionId: "impedit",
}).then((res: PostAtsConnectionIdCandidateResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.PostAtsConnectionIdCandidateRequest](../../models/operations/postatsconnectionidcandidaterequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.PostAtsConnectionIdCandidateResponse](../../models/operations/postatsconnectionidcandidateresponse.md)>**


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

sdk.ats.postAtsConnectionIdInterview({
  atsInterview: {
    applicationId: "voluptatibus",
    candidateId: "iste",
    createdAt: new Date("2022-12-29T01:38:46.899Z"),
    endAt: new Date("2022-01-26T00:00:57.040Z"),
    externalEventXref: "velit",
    id: "a437000a-e6b6-4bc9-b8f7-59eac55a9741",
    jobId: "vero",
    location: "consectetur",
    raw: {},
    startAt: new Date("2022-12-02T07:11:00.455Z"),
    status: AtsInterviewStatus.Scheduled,
    updatedAt: new Date("2022-10-26T04:37:41.230Z"),
    userIds: [
      "iste",
    ],
  },
  connectionId: "ex",
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

sdk.ats.postAtsConnectionIdJob({
  atsJob: {
    addresses: [
      {
        address1: "nemo",
        address2: "soluta",
        city: "Legroschester",
        country: "Latvia",
        countryCode: "BZ",
        postalCode: "14002",
        region: "neque",
        regionCode: "exercitationem",
      },
    ],
    closedAt: new Date("2022-09-26T08:50:09.615Z"),
    compensation: [
      {
        currency: "ipsum",
        frequency: AtsCompensationFrequency.Hour,
        max: 8583.38,
        min: 7143.76,
        type: AtsCompensationType.Other,
      },
    ],
    createdAt: new Date("2022-11-03T21:52:43.365Z"),
    departments: [
      "nostrum",
    ],
    description: "omnis",
    employmentType: AtsJobEmploymentType.Seasonal,
    hiringManagerIds: [
      "dicta",
    ],
    id: "abda8c07-0e10-484c-b067-2d1ad879eeb9",
    languageLocale: "ea",
    name: "Brittany Prosacco",
    publicJobUrls: [
      "officiis",
    ],
    raw: {},
    recruiterIds: [
      "voluptatibus",
    ],
    remote: false,
    status: AtsJobStatus.Open,
    updatedAt: new Date("2022-12-26T08:34:47.406Z"),
  },
  connectionId: "quia",
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

sdk.ats.postAtsConnectionIdScorecard({
  atsScorecard: {
    applicationId: "quidem",
    candidateId: "fuga",
    createdAt: new Date("2022-11-24T16:37:12.153Z"),
    id: "be2d7822-59e3-4ea4-b519-7f92443da7ce",
    interviewId: "corporis",
    interviewerId: "qui",
    jobId: "expedita",
    raw: {},
    recommendation: AtsScorecardRecommendation.Yes,
    updatedAt: new Date("2022-05-07T19:45:21.246Z"),
  },
  connectionId: "placeat",
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

sdk.ats.putAtsConnectionIdApplicationId({
  atsApplication: {
    appliedAt: new Date("2022-10-18T12:19:42.762Z"),
    candidateId: "in",
    createdAt: new Date("2021-09-13T18:43:27.876Z"),
    id: "454efb0b-3489-46c3-8a5a-cfbe2fd57075",
    jobId: "in",
    raw: {},
    rejectedAt: new Date("2022-06-07T17:40:07.973Z"),
    rejectedReason: "dolores",
    source: "error",
    status: AtsApplicationStatus.Reviewing,
    updatedAt: new Date("2022-07-19T18:05:42.224Z"),
  },
  connectionId: "pariatur",
  id: "eac646ec-b573-4409-a3eb-1e5a2b12eb07",
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


## putAtsConnectionIdCandidateId

Update a candidate

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PutAtsConnectionIdCandidateIdResponse } from "Unified-to/dist/sdk/models/operations";
import { AtsEmailType, AtsTelephoneType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.ats.putAtsConnectionIdCandidateId({
  atsCandidate: {
    address: {
      address1: "maiores",
      address2: "veritatis",
      city: "South Salmacester",
      country: "Mayotte",
      countryCode: "MK",
      postalCode: "33975",
      region: "enim",
      regionCode: "hic",
    },
    companyName: "animi",
    createdAt: new Date("2021-12-19T08:26:48.749Z"),
    emails: [
      {
        email: "Jazmyne.Bechtelar55@yahoo.com",
        type: AtsEmailType.Home,
      },
    ],
    externalId: "assumenda",
    id: "bb30fcb3-3ea0-455b-997c-d44e2f52d82d",
    imageUrl: "amet",
    name: "Virginia Flatley",
    raw: {},
    tags: [
      "nisi",
    ],
    telephones: [
      {
        telephone: "voluptatibus",
        type: AtsTelephoneType.Home,
      },
    ],
    title: "Ms.",
    updatedAt: new Date("2022-03-20T12:36:58.674Z"),
  },
  connectionId: "quis",
  id: "6bcdb35f-f2e4-4b27-937a-8cd9e7319c17",
}).then((res: PutAtsConnectionIdCandidateIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.PutAtsConnectionIdCandidateIdRequest](../../models/operations/putatsconnectionidcandidateidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.PutAtsConnectionIdCandidateIdResponse](../../models/operations/putatsconnectionidcandidateidresponse.md)>**


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

sdk.ats.putAtsConnectionIdInterviewId({
  atsInterview: {
    applicationId: "esse",
    candidateId: "fugiat",
    createdAt: new Date("2022-11-12T18:59:18.362Z"),
    endAt: new Date("2022-01-13T17:49:01.077Z"),
    externalEventXref: "iusto",
    id: "7b114eeb-52ff-4785-bc37-814d4c98e0c2",
    jobId: "nam",
    location: "expedita",
    raw: {},
    startAt: new Date("2021-10-26T16:10:32.283Z"),
    status: AtsInterviewStatus.Complete,
    updatedAt: new Date("2022-01-06T13:49:40.637Z"),
    userIds: [
      "corporis",
    ],
  },
  connectionId: "vero",
  id: "ad636c60-0503-4d8b-b311-80f739ae9e05",
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

sdk.ats.putAtsConnectionIdJobId({
  atsJob: {
    addresses: [
      {
        address1: "molestiae",
        address2: "itaque",
        city: "Lockmanton",
        country: "Micronesia",
        countryCode: "TK",
        postalCode: "51022",
        region: "sunt",
        regionCode: "a",
      },
    ],
    closedAt: new Date("2022-06-02T10:52:44.468Z"),
    compensation: [
      {
        currency: "atque",
        frequency: AtsCompensationFrequency.OneTime,
        max: 8682.55,
        min: 2875.44,
        type: AtsCompensationType.Equity,
      },
    ],
    createdAt: new Date("2022-12-20T04:33:32.836Z"),
    departments: [
      "perferendis",
    ],
    description: "rerum",
    employmentType: AtsJobEmploymentType.Consultant,
    hiringManagerIds: [
      "aperiam",
    ],
    id: "7f3c93c7-3b9d-4a3f-aced-a7e23f225741",
    languageLocale: "illo",
    name: "Doug Wintheiser",
    publicJobUrls: [
      "in",
    ],
    raw: {},
    recruiterIds: [
      "exercitationem",
    ],
    remote: false,
    status: AtsJobStatus.Pending,
    updatedAt: new Date("2022-01-29T18:21:22.366Z"),
  },
  connectionId: "modi",
  id: "72e80285-7a5b-4404-a3a7-d575f1400e76",
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

sdk.ats.putAtsConnectionIdScorecardId({
  atsScorecard: {
    applicationId: "numquam",
    candidateId: "dolorum",
    createdAt: new Date("2021-08-23T14:57:18.247Z"),
    id: "334ec1b7-81b3-46a0-8088-d100efada200",
    interviewId: "eveniet",
    interviewerId: "hic",
    jobId: "voluptatem",
    raw: {},
    recommendation: AtsScorecardRecommendation.No,
    updatedAt: new Date("2022-10-25T03:32:12.534Z"),
  },
  connectionId: "necessitatibus",
  id: "b2164cf9-ab83-466c-b23f-fda9e06bee48",
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

