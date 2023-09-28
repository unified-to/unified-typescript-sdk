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
  connectionId: "multimedia",
  id: "<ID>",
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

sdk.ats.getAtsConnectionIdApplicationId({
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
  connectionId: "Northwest forceful Moore",
  limit: 2623.89,
  offset: 7811.91,
  order: "Mouse whether deploy",
  query: "pink",
  sort: "huzzah thistle",
  updatedGte: new Date("2022-03-13T15:14:03.645Z"),
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
  connectionId: "ha Loan",
  id: "<ID>",
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

sdk.ats.getAtsConnectionIdInterviewId({
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

sdk.ats.getAtsConnectionIdJobId({
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

sdk.ats.getAtsConnectionIdScorecardId({
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
      address1: "closely Goyette plus",
      address2: "culpa",
      city: "Darrinshire",
      country: "Mongolia",
      countryCode: "GW",
      postalCode: "05275",
      region: "TLS calculating",
      regionCode: "up Argon Internal",
    },
    companyName: "Fadel, Schulist and Koss",
    createdAt: new Date("2022-12-09T07:16:54.728Z"),
    emails: [
      {
        email: "Gregory63@gmail.com",
        type: AtsEmailType.Other,
      },
    ],
    externalId: "Elegant",
    id: "<ID>",
    imageUrl: "Tricycle Yttrium Hybrid",
    name: "ornery whether",
    raw: {},
    tags: [
      "Cadillac",
    ],
    telephones: [
      {
        telephone: "Marketing Cotton",
        type: AtsTelephoneType.Home,
      },
    ],
    title: "East",
    updatedAt: new Date("2023-10-31T11:53:36.953Z"),
  },
  connectionId: "redundant Tricycle unloose",
  id: "<ID>",
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
      address1: "incubate",
      address2: "azure Trans",
      city: "Port Rory",
      country: "El Salvador",
      countryCode: "CX",
      postalCode: "54222-0235",
      region: "modi fooey",
      regionCode: "Metal TCP incidunt",
    },
    companyName: "McCullough, Rosenbaum and Daugherty",
    createdAt: new Date("2023-02-07T05:55:59.357Z"),
    emails: [
      {
        email: "Eleanora.Rogahn44@hotmail.com",
        type: AtsEmailType.Home,
      },
    ],
    externalId: "South though",
    id: "<ID>",
    imageUrl: "Pants",
    name: "Raleigh",
    raw: {},
    tags: [
      "morph",
    ],
    telephones: [
      {
        telephone: "lavender Sedan Folk",
        type: AtsTelephoneType.Other,
      },
    ],
    title: "Savings panel",
    updatedAt: new Date("2022-02-09T15:32:35.578Z"),
  },
  connectionId: "Ngultrum red glean",
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
      address1: "archive",
      address2: "Specialist Kyat",
      city: "New Dennis",
      country: "Mauritius",
      countryCode: "TL",
      postalCode: "49105-9909",
      region: "copy olive",
      regionCode: "withdrawal cumque person",
    },
    companyName: "Kuhn and Sons",
    createdAt: new Date("2022-01-28T10:51:00.922Z"),
    emails: [
      {
        email: "Hester.Jenkins@gmail.com",
        type: AtsEmailType.Home,
      },
    ],
    externalId: "Loan EXE",
    id: "<ID>",
    imageUrl: "deliver executive RSS",
    name: "because aha black",
    raw: {},
    tags: [
      "program",
    ],
    telephones: [
      {
        telephone: "empower exit Pangender",
        type: AtsTelephoneType.Mobile,
      },
    ],
    title: "Corporate anenst Electronic",
    updatedAt: new Date("2022-03-30T08:00:53.284Z"),
  },
  connectionId: "Flerovium azure",
  id: "<ID>",
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

