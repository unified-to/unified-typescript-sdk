# Ats
(*ats*)

### Available Operations

* [createAtsActivity](#createatsactivity) - Create an activity
* [createAtsApplication](#createatsapplication) - Create an application
* [createAtsCandidate](#createatscandidate) - Create a candidate
* [createAtsDocument](#createatsdocument) - Create a document
* [createAtsInterview](#createatsinterview) - Create a interview
* [createAtsJob](#createatsjob) - Create a job
* [createAtsScorecard](#createatsscorecard) - Create a scorecard
* [getAtsActivity](#getatsactivity) - Retrieve an activity
* [getAtsApplication](#getatsapplication) - Retrieve an application
* [getAtsCandidate](#getatscandidate) - Retrieve a candidate
* [getAtsCompany](#getatscompany) - Retrieve a company
* [getAtsDocument](#getatsdocument) - Retrieve a document
* [getAtsInterview](#getatsinterview) - Retrieve a interview
* [getAtsJob](#getatsjob) - Retrieve a job
* [getAtsScorecard](#getatsscorecard) - Retrieve a scorecard
* [listAtsActivities](#listatsactivities) - List all activities
* [listAtsApplications](#listatsapplications) - List all applications
* [listAtsApplicationstatuses](#listatsapplicationstatuses) - List all application statuses
* [listAtsCandidates](#listatscandidates) - List all candidates
* [listAtsCompanies](#listatscompanies) - List all companies
* [listAtsDocuments](#listatsdocuments) - List all documents
* [listAtsInterviews](#listatsinterviews) - List all interviews
* [listAtsJobs](#listatsjobs) - List all jobs
* [listAtsScorecards](#listatsscorecards) - List all scorecards
* [patchAtsActivity](#patchatsactivity) - Update an activity
* [patchAtsApplication](#patchatsapplication) - Update an application
* [patchAtsCandidate](#patchatscandidate) - Update a candidate
* [patchAtsDocument](#patchatsdocument) - Update a document
* [patchAtsInterview](#patchatsinterview) - Update a interview
* [patchAtsJob](#patchatsjob) - Update a job
* [patchAtsScorecard](#patchatsscorecard) - Update a scorecard
* [removeAtsActivity](#removeatsactivity) - Remove an activity
* [removeAtsApplication](#removeatsapplication) - Remove an application
* [removeAtsCandidate](#removeatscandidate) - Remove a candidate
* [removeAtsDocument](#removeatsdocument) - Remove a document
* [removeAtsInterview](#removeatsinterview) - Remove a interview
* [removeAtsJob](#removeatsjob) - Remove a job
* [removeAtsScorecard](#removeatsscorecard) - Remove a scorecard
* [updateAtsActivity](#updateatsactivity) - Update an activity
* [updateAtsApplication](#updateatsapplication) - Update an application
* [updateAtsCandidate](#updateatscandidate) - Update a candidate
* [updateAtsDocument](#updateatsdocument) - Update a document
* [updateAtsInterview](#updateatsinterview) - Update a interview
* [updateAtsJob](#updateatsjob) - Update a job
* [updateAtsScorecard](#updateatsscorecard) - Update a scorecard

## createAtsActivity

Create an activity

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { CreateAtsActivitySecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { AtsActivityType } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: CreateAtsActivitySecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.ats.createAtsActivity({
    atsActivity: {
      raw: {
        "key": "<value>",
      },
      title: "<value>",
      userIds: [
        "<value>",
      ],
    },
    connectionId: "<value>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.CreateAtsActivityRequest](../../sdk/models/operations/createatsactivityrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.CreateAtsActivitySecurity](../../sdk/models/operations/createatsactivitysecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.CreateAtsActivityResponse](../../sdk/models/operations/createatsactivityresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## createAtsApplication

Create an application

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { CreateAtsApplicationSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { AtsApplicationStatus } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: CreateAtsApplicationSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.ats.createAtsApplication({
    atsApplication: {
      answers: [
        {
          answers: [
            "<value>",
          ],
          questionId: "<value>",
        },
      ],
      raw: {
        "key": "<value>",
      },
    },
    connectionId: "<value>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.CreateAtsApplicationRequest](../../sdk/models/operations/createatsapplicationrequest.md)   | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `security`                                                                                             | [operations.CreateAtsApplicationSecurity](../../sdk/models/operations/createatsapplicationsecurity.md) | :heavy_check_mark:                                                                                     | The security requirements to use for the request.                                                      |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.CreateAtsApplicationResponse](../../sdk/models/operations/createatsapplicationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## createAtsCandidate

Create a candidate

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { CreateAtsCandidateSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { AtsEmailType, AtsTelephoneType, Origin } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: CreateAtsCandidateSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.ats.createAtsCandidate({
    atsCandidate: {
      address: {},
      emails: [
        {
          email: "Robin_Feeney@hotmail.com",
        },
      ],
      linkUrls: [
        "<value>",
      ],
      raw: {
        "key": "<value>",
      },
      sources: [
        "<value>",
      ],
      tags: [
        "<value>",
      ],
      telephones: [
        {
          telephone: "<value>",
        },
      ],
    },
    connectionId: "<value>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.CreateAtsCandidateRequest](../../sdk/models/operations/createatscandidaterequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.CreateAtsCandidateSecurity](../../sdk/models/operations/createatscandidatesecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.CreateAtsCandidateResponse](../../sdk/models/operations/createatscandidateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## createAtsDocument

Create a document

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { CreateAtsDocumentSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { AtsDocumentType } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: CreateAtsDocumentSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.ats.createAtsDocument({
    atsDocument: {
      raw: {
        "key": "<value>",
      },
    },
    connectionId: "<value>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.CreateAtsDocumentRequest](../../sdk/models/operations/createatsdocumentrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.CreateAtsDocumentSecurity](../../sdk/models/operations/createatsdocumentsecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.CreateAtsDocumentResponse](../../sdk/models/operations/createatsdocumentresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## createAtsInterview

Create a interview

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { CreateAtsInterviewSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { AtsInterviewStatus } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: CreateAtsInterviewSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.ats.createAtsInterview({
    atsInterview: {
      raw: {
        "key": "<value>",
      },
      userIds: [
        "<value>",
      ],
    },
    connectionId: "<value>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.CreateAtsInterviewRequest](../../sdk/models/operations/createatsinterviewrequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.CreateAtsInterviewSecurity](../../sdk/models/operations/createatsinterviewsecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.CreateAtsInterviewResponse](../../sdk/models/operations/createatsinterviewresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## createAtsJob

Create a job

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { CreateAtsJobSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { AtsCompensationType, AtsJobQuestionType, AtsJobStatus, EmploymentType, Frequency } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: CreateAtsJobSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.ats.createAtsJob({
    atsJob: {
      addresses: [
        {},
      ],
      compensation: [
        {
          type: AtsCompensationType.Salary,
        },
      ],
      departments: [
        "<value>",
      ],
      hiringManagerIds: [
        "<value>",
      ],
      publicJobUrls: [
        "<value>",
      ],
      questions: [
        {
          options: [
            "<value>",
          ],
          question: "<value>",
          type: AtsJobQuestionType.File,
        },
      ],
      raw: {
        "key": "<value>",
      },
      recruiterIds: [
        "<value>",
      ],
    },
    connectionId: "<value>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.CreateAtsJobRequest](../../sdk/models/operations/createatsjobrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.CreateAtsJobSecurity](../../sdk/models/operations/createatsjobsecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CreateAtsJobResponse](../../sdk/models/operations/createatsjobresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## createAtsScorecard

Create a scorecard

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { CreateAtsScorecardSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { Recommendation } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: CreateAtsScorecardSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.ats.createAtsScorecard({
    atsScorecard: {
      questions: [
        {
          text: "<value>",
        },
      ],
      raw: {
        "key": "<value>",
      },
    },
    connectionId: "<value>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.CreateAtsScorecardRequest](../../sdk/models/operations/createatsscorecardrequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.CreateAtsScorecardSecurity](../../sdk/models/operations/createatsscorecardsecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.CreateAtsScorecardResponse](../../sdk/models/operations/createatsscorecardresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getAtsActivity

Retrieve an activity

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { GetAtsActivitySecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetAtsActivitySecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.ats.getAtsActivity({
    connectionId: "<value>",
    fields: [
      "<value>",
    ],
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetAtsActivityRequest](../../sdk/models/operations/getatsactivityrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.GetAtsActivitySecurity](../../sdk/models/operations/getatsactivitysecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetAtsActivityResponse](../../sdk/models/operations/getatsactivityresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getAtsApplication

Retrieve an application

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { GetAtsApplicationSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetAtsApplicationSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.ats.getAtsApplication({
    connectionId: "<value>",
    fields: [
      "<value>",
    ],
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetAtsApplicationRequest](../../sdk/models/operations/getatsapplicationrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.GetAtsApplicationSecurity](../../sdk/models/operations/getatsapplicationsecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetAtsApplicationResponse](../../sdk/models/operations/getatsapplicationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getAtsCandidate

Retrieve a candidate

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { GetAtsCandidateSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetAtsCandidateSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.ats.getAtsCandidate({
    connectionId: "<value>",
    fields: [
      "<value>",
    ],
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetAtsCandidateRequest](../../sdk/models/operations/getatscandidaterequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.GetAtsCandidateSecurity](../../sdk/models/operations/getatscandidatesecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetAtsCandidateResponse](../../sdk/models/operations/getatscandidateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getAtsCompany

Retrieve a company

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { GetAtsCompanySecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetAtsCompanySecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.ats.getAtsCompany({
    connectionId: "<value>",
    fields: [
      "<value>",
    ],
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetAtsCompanyRequest](../../sdk/models/operations/getatscompanyrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.GetAtsCompanySecurity](../../sdk/models/operations/getatscompanysecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetAtsCompanyResponse](../../sdk/models/operations/getatscompanyresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getAtsDocument

Retrieve a document

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { GetAtsDocumentSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetAtsDocumentSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.ats.getAtsDocument({
    connectionId: "<value>",
    fields: [
      "<value>",
    ],
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetAtsDocumentRequest](../../sdk/models/operations/getatsdocumentrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.GetAtsDocumentSecurity](../../sdk/models/operations/getatsdocumentsecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetAtsDocumentResponse](../../sdk/models/operations/getatsdocumentresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getAtsInterview

Retrieve a interview

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { GetAtsInterviewSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetAtsInterviewSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.ats.getAtsInterview({
    connectionId: "<value>",
    fields: [
      "<value>",
    ],
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetAtsInterviewRequest](../../sdk/models/operations/getatsinterviewrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.GetAtsInterviewSecurity](../../sdk/models/operations/getatsinterviewsecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetAtsInterviewResponse](../../sdk/models/operations/getatsinterviewresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getAtsJob

Retrieve a job

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { GetAtsJobSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetAtsJobSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.ats.getAtsJob({
    connectionId: "<value>",
    fields: [
      "<value>",
    ],
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.GetAtsJobRequest](../../sdk/models/operations/getatsjobrequest.md)   | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `security`                                                                       | [operations.GetAtsJobSecurity](../../sdk/models/operations/getatsjobsecurity.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetAtsJobResponse](../../sdk/models/operations/getatsjobresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getAtsScorecard

Retrieve a scorecard

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { GetAtsScorecardSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetAtsScorecardSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.ats.getAtsScorecard({
    connectionId: "<value>",
    fields: [
      "<value>",
    ],
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetAtsScorecardRequest](../../sdk/models/operations/getatsscorecardrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.GetAtsScorecardSecurity](../../sdk/models/operations/getatsscorecardsecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetAtsScorecardResponse](../../sdk/models/operations/getatsscorecardresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listAtsActivities

List all activities

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { ListAtsActivitiesSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListAtsActivitiesSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.ats.listAtsActivities({
    connectionId: "<value>",
    fields: [
      "<value>",
    ],
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.ListAtsActivitiesRequest](../../sdk/models/operations/listatsactivitiesrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.ListAtsActivitiesSecurity](../../sdk/models/operations/listatsactivitiessecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.ListAtsActivitiesResponse](../../sdk/models/operations/listatsactivitiesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listAtsApplications

List all applications

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { ListAtsApplicationsSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListAtsApplicationsSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.ats.listAtsApplications({
    connectionId: "<value>",
    fields: [
      "<value>",
    ],
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.ListAtsApplicationsRequest](../../sdk/models/operations/listatsapplicationsrequest.md)   | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `security`                                                                                           | [operations.ListAtsApplicationsSecurity](../../sdk/models/operations/listatsapplicationssecurity.md) | :heavy_check_mark:                                                                                   | The security requirements to use for the request.                                                    |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.ListAtsApplicationsResponse](../../sdk/models/operations/listatsapplicationsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listAtsApplicationstatuses

List all application statuses

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { ListAtsApplicationstatusesSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListAtsApplicationstatusesSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.ats.listAtsApplicationstatuses({
    connectionId: "<value>",
    fields: [
      "<value>",
    ],
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.ListAtsApplicationstatusesRequest](../../sdk/models/operations/listatsapplicationstatusesrequest.md)   | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `security`                                                                                                         | [operations.ListAtsApplicationstatusesSecurity](../../sdk/models/operations/listatsapplicationstatusessecurity.md) | :heavy_check_mark:                                                                                                 | The security requirements to use for the request.                                                                  |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.ListAtsApplicationstatusesResponse](../../sdk/models/operations/listatsapplicationstatusesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listAtsCandidates

List all candidates

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { ListAtsCandidatesSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListAtsCandidatesSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.ats.listAtsCandidates({
    connectionId: "<value>",
    fields: [
      "<value>",
    ],
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.ListAtsCandidatesRequest](../../sdk/models/operations/listatscandidatesrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.ListAtsCandidatesSecurity](../../sdk/models/operations/listatscandidatessecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.ListAtsCandidatesResponse](../../sdk/models/operations/listatscandidatesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listAtsCompanies

List all companies

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { ListAtsCompaniesSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListAtsCompaniesSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.ats.listAtsCompanies({
    connectionId: "<value>",
    fields: [
      "<value>",
    ],
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.ListAtsCompaniesRequest](../../sdk/models/operations/listatscompaniesrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.ListAtsCompaniesSecurity](../../sdk/models/operations/listatscompaniessecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.ListAtsCompaniesResponse](../../sdk/models/operations/listatscompaniesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listAtsDocuments

List all documents

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { ListAtsDocumentsSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListAtsDocumentsSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.ats.listAtsDocuments({
    connectionId: "<value>",
    fields: [
      "<value>",
    ],
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.ListAtsDocumentsRequest](../../sdk/models/operations/listatsdocumentsrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.ListAtsDocumentsSecurity](../../sdk/models/operations/listatsdocumentssecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.ListAtsDocumentsResponse](../../sdk/models/operations/listatsdocumentsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listAtsInterviews

List all interviews

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { ListAtsInterviewsSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListAtsInterviewsSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.ats.listAtsInterviews({
    connectionId: "<value>",
    fields: [
      "<value>",
    ],
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.ListAtsInterviewsRequest](../../sdk/models/operations/listatsinterviewsrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.ListAtsInterviewsSecurity](../../sdk/models/operations/listatsinterviewssecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.ListAtsInterviewsResponse](../../sdk/models/operations/listatsinterviewsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listAtsJobs

List all jobs

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { ListAtsJobsSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListAtsJobsSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.ats.listAtsJobs({
    connectionId: "<value>",
    fields: [
      "<value>",
    ],
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.ListAtsJobsRequest](../../sdk/models/operations/listatsjobsrequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.ListAtsJobsSecurity](../../sdk/models/operations/listatsjobssecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ListAtsJobsResponse](../../sdk/models/operations/listatsjobsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listAtsScorecards

List all scorecards

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { ListAtsScorecardsSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListAtsScorecardsSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.ats.listAtsScorecards({
    connectionId: "<value>",
    fields: [
      "<value>",
    ],
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.ListAtsScorecardsRequest](../../sdk/models/operations/listatsscorecardsrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.ListAtsScorecardsSecurity](../../sdk/models/operations/listatsscorecardssecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.ListAtsScorecardsResponse](../../sdk/models/operations/listatsscorecardsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchAtsActivity

Update an activity

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { PatchAtsActivitySecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { AtsActivityType } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: PatchAtsActivitySecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.ats.patchAtsActivity({
    atsActivity: {
      raw: {
        "key": "<value>",
      },
      title: "<value>",
      userIds: [
        "<value>",
      ],
    },
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.PatchAtsActivityRequest](../../sdk/models/operations/patchatsactivityrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.PatchAtsActivitySecurity](../../sdk/models/operations/patchatsactivitysecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.PatchAtsActivityResponse](../../sdk/models/operations/patchatsactivityresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchAtsApplication

Update an application

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { PatchAtsApplicationSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { AtsApplicationStatus } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: PatchAtsApplicationSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.ats.patchAtsApplication({
    atsApplication: {
      answers: [
        {
          answers: [
            "<value>",
          ],
          questionId: "<value>",
        },
      ],
      raw: {
        "key": "<value>",
      },
    },
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.PatchAtsApplicationRequest](../../sdk/models/operations/patchatsapplicationrequest.md)   | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `security`                                                                                           | [operations.PatchAtsApplicationSecurity](../../sdk/models/operations/patchatsapplicationsecurity.md) | :heavy_check_mark:                                                                                   | The security requirements to use for the request.                                                    |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.PatchAtsApplicationResponse](../../sdk/models/operations/patchatsapplicationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchAtsCandidate

Update a candidate

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { PatchAtsCandidateSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { AtsEmailType, AtsTelephoneType, Origin } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: PatchAtsCandidateSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.ats.patchAtsCandidate({
    atsCandidate: {
      address: {},
      emails: [
        {
          email: "Tracy.Collins13@gmail.com",
        },
      ],
      linkUrls: [
        "<value>",
      ],
      raw: {
        "key": "<value>",
      },
      sources: [
        "<value>",
      ],
      tags: [
        "<value>",
      ],
      telephones: [
        {
          telephone: "<value>",
        },
      ],
    },
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.PatchAtsCandidateRequest](../../sdk/models/operations/patchatscandidaterequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.PatchAtsCandidateSecurity](../../sdk/models/operations/patchatscandidatesecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.PatchAtsCandidateResponse](../../sdk/models/operations/patchatscandidateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchAtsDocument

Update a document

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { PatchAtsDocumentSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { AtsDocumentType } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: PatchAtsDocumentSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.ats.patchAtsDocument({
    atsDocument: {
      raw: {
        "key": "<value>",
      },
    },
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.PatchAtsDocumentRequest](../../sdk/models/operations/patchatsdocumentrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.PatchAtsDocumentSecurity](../../sdk/models/operations/patchatsdocumentsecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.PatchAtsDocumentResponse](../../sdk/models/operations/patchatsdocumentresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchAtsInterview

Update a interview

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { PatchAtsInterviewSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { AtsInterviewStatus } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: PatchAtsInterviewSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.ats.patchAtsInterview({
    atsInterview: {
      raw: {
        "key": "<value>",
      },
      userIds: [
        "<value>",
      ],
    },
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.PatchAtsInterviewRequest](../../sdk/models/operations/patchatsinterviewrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.PatchAtsInterviewSecurity](../../sdk/models/operations/patchatsinterviewsecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.PatchAtsInterviewResponse](../../sdk/models/operations/patchatsinterviewresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchAtsJob

Update a job

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { PatchAtsJobSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { AtsCompensationType, AtsJobQuestionType, AtsJobStatus, EmploymentType, Frequency } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: PatchAtsJobSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.ats.patchAtsJob({
    atsJob: {
      addresses: [
        {},
      ],
      compensation: [
        {
          type: AtsCompensationType.Bonus,
        },
      ],
      departments: [
        "<value>",
      ],
      hiringManagerIds: [
        "<value>",
      ],
      publicJobUrls: [
        "<value>",
      ],
      questions: [
        {
          options: [
            "<value>",
          ],
          question: "<value>",
          type: AtsJobQuestionType.Date,
        },
      ],
      raw: {
        "key": "<value>",
      },
      recruiterIds: [
        "<value>",
      ],
    },
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.PatchAtsJobRequest](../../sdk/models/operations/patchatsjobrequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.PatchAtsJobSecurity](../../sdk/models/operations/patchatsjobsecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.PatchAtsJobResponse](../../sdk/models/operations/patchatsjobresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchAtsScorecard

Update a scorecard

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { PatchAtsScorecardSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { Recommendation } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: PatchAtsScorecardSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.ats.patchAtsScorecard({
    atsScorecard: {
      questions: [
        {
          text: "<value>",
        },
      ],
      raw: {
        "key": "<value>",
      },
    },
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.PatchAtsScorecardRequest](../../sdk/models/operations/patchatsscorecardrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.PatchAtsScorecardSecurity](../../sdk/models/operations/patchatsscorecardsecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.PatchAtsScorecardResponse](../../sdk/models/operations/patchatsscorecardresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## removeAtsActivity

Remove an activity

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { RemoveAtsActivitySecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: RemoveAtsActivitySecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.ats.removeAtsActivity({
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.RemoveAtsActivityRequest](../../sdk/models/operations/removeatsactivityrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.RemoveAtsActivitySecurity](../../sdk/models/operations/removeatsactivitysecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.RemoveAtsActivityResponse](../../sdk/models/operations/removeatsactivityresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## removeAtsApplication

Remove an application

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { RemoveAtsApplicationSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: RemoveAtsApplicationSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.ats.removeAtsApplication({
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.RemoveAtsApplicationRequest](../../sdk/models/operations/removeatsapplicationrequest.md)   | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `security`                                                                                             | [operations.RemoveAtsApplicationSecurity](../../sdk/models/operations/removeatsapplicationsecurity.md) | :heavy_check_mark:                                                                                     | The security requirements to use for the request.                                                      |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.RemoveAtsApplicationResponse](../../sdk/models/operations/removeatsapplicationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## removeAtsCandidate

Remove a candidate

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { RemoveAtsCandidateSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: RemoveAtsCandidateSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.ats.removeAtsCandidate({
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.RemoveAtsCandidateRequest](../../sdk/models/operations/removeatscandidaterequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.RemoveAtsCandidateSecurity](../../sdk/models/operations/removeatscandidatesecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.RemoveAtsCandidateResponse](../../sdk/models/operations/removeatscandidateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## removeAtsDocument

Remove a document

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { RemoveAtsDocumentSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: RemoveAtsDocumentSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.ats.removeAtsDocument({
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.RemoveAtsDocumentRequest](../../sdk/models/operations/removeatsdocumentrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.RemoveAtsDocumentSecurity](../../sdk/models/operations/removeatsdocumentsecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.RemoveAtsDocumentResponse](../../sdk/models/operations/removeatsdocumentresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## removeAtsInterview

Remove a interview

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { RemoveAtsInterviewSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: RemoveAtsInterviewSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.ats.removeAtsInterview({
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.RemoveAtsInterviewRequest](../../sdk/models/operations/removeatsinterviewrequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.RemoveAtsInterviewSecurity](../../sdk/models/operations/removeatsinterviewsecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.RemoveAtsInterviewResponse](../../sdk/models/operations/removeatsinterviewresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## removeAtsJob

Remove a job

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { RemoveAtsJobSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: RemoveAtsJobSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.ats.removeAtsJob({
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.RemoveAtsJobRequest](../../sdk/models/operations/removeatsjobrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.RemoveAtsJobSecurity](../../sdk/models/operations/removeatsjobsecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.RemoveAtsJobResponse](../../sdk/models/operations/removeatsjobresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## removeAtsScorecard

Remove a scorecard

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { RemoveAtsScorecardSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: RemoveAtsScorecardSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.ats.removeAtsScorecard({
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.RemoveAtsScorecardRequest](../../sdk/models/operations/removeatsscorecardrequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.RemoveAtsScorecardSecurity](../../sdk/models/operations/removeatsscorecardsecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.RemoveAtsScorecardResponse](../../sdk/models/operations/removeatsscorecardresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateAtsActivity

Update an activity

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { UpdateAtsActivitySecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { AtsActivityType } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: UpdateAtsActivitySecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.ats.updateAtsActivity({
    atsActivity: {
      raw: {
        "key": "<value>",
      },
      title: "<value>",
      userIds: [
        "<value>",
      ],
    },
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.UpdateAtsActivityRequest](../../sdk/models/operations/updateatsactivityrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.UpdateAtsActivitySecurity](../../sdk/models/operations/updateatsactivitysecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.UpdateAtsActivityResponse](../../sdk/models/operations/updateatsactivityresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateAtsApplication

Update an application

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { UpdateAtsApplicationSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { AtsApplicationStatus } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: UpdateAtsApplicationSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.ats.updateAtsApplication({
    atsApplication: {
      answers: [
        {
          answers: [
            "<value>",
          ],
          questionId: "<value>",
        },
      ],
      raw: {
        "key": "<value>",
      },
    },
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.UpdateAtsApplicationRequest](../../sdk/models/operations/updateatsapplicationrequest.md)   | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `security`                                                                                             | [operations.UpdateAtsApplicationSecurity](../../sdk/models/operations/updateatsapplicationsecurity.md) | :heavy_check_mark:                                                                                     | The security requirements to use for the request.                                                      |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.UpdateAtsApplicationResponse](../../sdk/models/operations/updateatsapplicationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateAtsCandidate

Update a candidate

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { UpdateAtsCandidateSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { AtsEmailType, AtsTelephoneType, Origin } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: UpdateAtsCandidateSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.ats.updateAtsCandidate({
    atsCandidate: {
      address: {},
      emails: [
        {
          email: "Gaetano86@hotmail.com",
        },
      ],
      linkUrls: [
        "<value>",
      ],
      raw: {
        "key": "<value>",
      },
      sources: [
        "<value>",
      ],
      tags: [
        "<value>",
      ],
      telephones: [
        {
          telephone: "<value>",
        },
      ],
    },
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.UpdateAtsCandidateRequest](../../sdk/models/operations/updateatscandidaterequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.UpdateAtsCandidateSecurity](../../sdk/models/operations/updateatscandidatesecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.UpdateAtsCandidateResponse](../../sdk/models/operations/updateatscandidateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateAtsDocument

Update a document

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { UpdateAtsDocumentSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { AtsDocumentType } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: UpdateAtsDocumentSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.ats.updateAtsDocument({
    atsDocument: {
      raw: {
        "key": "<value>",
      },
    },
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.UpdateAtsDocumentRequest](../../sdk/models/operations/updateatsdocumentrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.UpdateAtsDocumentSecurity](../../sdk/models/operations/updateatsdocumentsecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.UpdateAtsDocumentResponse](../../sdk/models/operations/updateatsdocumentresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateAtsInterview

Update a interview

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { UpdateAtsInterviewSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { AtsInterviewStatus } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: UpdateAtsInterviewSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.ats.updateAtsInterview({
    atsInterview: {
      raw: {
        "key": "<value>",
      },
      userIds: [
        "<value>",
      ],
    },
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.UpdateAtsInterviewRequest](../../sdk/models/operations/updateatsinterviewrequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.UpdateAtsInterviewSecurity](../../sdk/models/operations/updateatsinterviewsecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.UpdateAtsInterviewResponse](../../sdk/models/operations/updateatsinterviewresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateAtsJob

Update a job

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { UpdateAtsJobSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { AtsCompensationType, AtsJobQuestionType, AtsJobStatus, EmploymentType, Frequency } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: UpdateAtsJobSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.ats.updateAtsJob({
    atsJob: {
      addresses: [
        {},
      ],
      compensation: [
        {
          type: AtsCompensationType.Equity,
        },
      ],
      departments: [
        "<value>",
      ],
      hiringManagerIds: [
        "<value>",
      ],
      publicJobUrls: [
        "<value>",
      ],
      questions: [
        {
          options: [
            "<value>",
          ],
          question: "<value>",
          type: AtsJobQuestionType.Date,
        },
      ],
      raw: {
        "key": "<value>",
      },
      recruiterIds: [
        "<value>",
      ],
    },
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.UpdateAtsJobRequest](../../sdk/models/operations/updateatsjobrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.UpdateAtsJobSecurity](../../sdk/models/operations/updateatsjobsecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.UpdateAtsJobResponse](../../sdk/models/operations/updateatsjobresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateAtsScorecard

Update a scorecard

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { UpdateAtsScorecardSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { Recommendation } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: UpdateAtsScorecardSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.ats.updateAtsScorecard({
    atsScorecard: {
      questions: [
        {
          text: "<value>",
        },
      ],
      raw: {
        "key": "<value>",
      },
    },
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.UpdateAtsScorecardRequest](../../sdk/models/operations/updateatsscorecardrequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.UpdateAtsScorecardSecurity](../../sdk/models/operations/updateatsscorecardsecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.UpdateAtsScorecardResponse](../../sdk/models/operations/updateatsscorecardresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
