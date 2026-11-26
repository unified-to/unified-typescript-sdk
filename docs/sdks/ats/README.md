# Ats

## Overview

### Available Operations

* [createAtsActivity](#createatsactivity) - Create an activity
* [createAtsApplication](#createatsapplication) - Create an application
* [createAtsCandidate](#createatscandidate) - Create a candidate
* [createAtsCompany](#createatscompany) - Create a company
* [createAtsDocument](#createatsdocument) - Create a document
* [createAtsInterview](#createatsinterview) - Create an interview
* [createAtsJob](#createatsjob) - Create a job
* [createAtsScorecard](#createatsscorecard) - Create a scorecard
* [getAtsActivity](#getatsactivity) - Retrieve an activity
* [getAtsApplication](#getatsapplication) - Retrieve an application
* [getAtsApplicationstatus](#getatsapplicationstatus) - Retrieve an applicationstatus
* [getAtsCandidate](#getatscandidate) - Retrieve a candidate
* [getAtsCompany](#getatscompany) - Retrieve a company
* [getAtsDocument](#getatsdocument) - Retrieve a document
* [getAtsInterview](#getatsinterview) - Retrieve an interview
* [getAtsJob](#getatsjob) - Retrieve a job
* [getAtsScorecard](#getatsscorecard) - Retrieve a scorecard
* [listAtsActivities](#listatsactivities) - List all activities
* [listAtsApplications](#listatsapplications) - List all applications
* [listAtsApplicationstatuses](#listatsapplicationstatuses) - List all applicationstatuses
* [listAtsCandidates](#listatscandidates) - List all candidates
* [listAtsCompanies](#listatscompanies) - List all companies
* [listAtsDocuments](#listatsdocuments) - List all documents
* [listAtsInterviews](#listatsinterviews) - List all interviews
* [listAtsJobs](#listatsjobs) - List all jobs
* [listAtsScorecards](#listatsscorecards) - List all scorecards
* [patchAtsActivity](#patchatsactivity) - Update an activity
* [patchAtsApplication](#patchatsapplication) - Update an application
* [patchAtsCandidate](#patchatscandidate) - Update a candidate
* [patchAtsCompany](#patchatscompany) - Update a company
* [patchAtsDocument](#patchatsdocument) - Update a document
* [patchAtsInterview](#patchatsinterview) - Update an interview
* [patchAtsJob](#patchatsjob) - Update a job
* [patchAtsScorecard](#patchatsscorecard) - Update a scorecard
* [removeAtsActivity](#removeatsactivity) - Remove an activity
* [removeAtsApplication](#removeatsapplication) - Remove an application
* [removeAtsCandidate](#removeatscandidate) - Remove a candidate
* [removeAtsCompany](#removeatscompany) - Remove a company
* [removeAtsDocument](#removeatsdocument) - Remove a document
* [removeAtsInterview](#removeatsinterview) - Remove an interview
* [removeAtsJob](#removeatsjob) - Remove a job
* [removeAtsScorecard](#removeatsscorecard) - Remove a scorecard
* [updateAtsActivity](#updateatsactivity) - Update an activity
* [updateAtsApplication](#updateatsapplication) - Update an application
* [updateAtsCandidate](#updateatscandidate) - Update a candidate
* [updateAtsCompany](#updateatscompany) - Update a company
* [updateAtsDocument](#updateatsdocument) - Update a document
* [updateAtsInterview](#updateatsinterview) - Update an interview
* [updateAtsJob](#updateatsjob) - Update a job
* [updateAtsScorecard](#updateatsscorecard) - Update a scorecard

## createAtsActivity

Creates a AtsActivity. Provide the unified AtsActivity fields in the request body; they are mapped to the provider's API. Returns the created AtsActivity.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createAtsActivity" method="post" path="/ats/{connection_id}/activity" example="ats_activity" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.createAtsActivity({
    atsActivity: {
      createdAt: new Date("2022-08-07T03:16:43.865Z"),
      description: "Reprehenderit.",
      id: "170ef5e1-4c09-48cd-9b74-f90771010509",
      isPrivate: false,
      metadata: [
        {
          extraData: {

          },
          format: "TEXT",
          id: "10c4c8fa-4782-4bd0-8900-4388a568f0b5",
          namespace: "activity",
          slug: "verto",
          value: "Sint varietas officia aequus stillicidium vereor victus tricesimus vester.",
        },
      ],
      subType: "TASK",
      title: "Amplus sapiente cimentarius.",
      type: "TASK",
      updatedAt: new Date("2026-05-05T14:37:08.495Z"),
    },
    connectionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsCreateAtsActivity } from "@unified-api/typescript-sdk/funcs/atsCreateAtsActivity.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsCreateAtsActivity(unifiedTo, {
    atsActivity: {
      createdAt: new Date("2022-08-07T03:16:43.865Z"),
      description: "Reprehenderit.",
      id: "170ef5e1-4c09-48cd-9b74-f90771010509",
      isPrivate: false,
      metadata: [
        {
          extraData: {
  
          },
          format: "TEXT",
          id: "10c4c8fa-4782-4bd0-8900-4388a568f0b5",
          namespace: "activity",
          slug: "verto",
          value: "Sint varietas officia aequus stillicidium vereor victus tricesimus vester.",
        },
      ],
      subType: "TASK",
      title: "Amplus sapiente cimentarius.",
      type: "TASK",
      updatedAt: new Date("2026-05-05T14:37:08.495Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsCreateAtsActivity failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateAtsActivityRequest](../../sdk/models/operations/createatsactivityrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsActivity](../../sdk/models/shared/atsactivity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createAtsApplication

Creates a AtsApplication. Provide the unified AtsApplication fields in the request body; they are mapped to the provider's API. Returns the created AtsApplication.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createAtsApplication" method="post" path="/ats/{connection_id}/application" example="ats_application" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.createAtsApplication({
    atsApplication: {
      answers: [],
      appliedAt: new Date("2025-10-23T03:30:17.745Z"),
      createdAt: new Date("2023-10-17T07:19:48.787Z"),
      hiredAt: new Date("2026-06-12T12:10:08.037Z"),
      id: "667cc369-1a41-4ffb-86b7-bae6c46eba47",
      metadata: [
        {
          extraData: {

          },
          format: "TEXT",
          id: "8c86d544-2e76-446f-9d3c-bf93264b6aaa",
          namespace: "application",
          slug: "arguo",
          value: "Defessus occaecati adflicto caecus claustrum annus addo.",
        },
      ],
      offers: [],
      originalStatus: "caput",
      originalSubstatus: "admiratio",
      rejectedAt: new Date("2026-11-16T06:04:36.353Z"),
      rejectedReason: "Talio credo vomica allatus stella.",
      source: "alii",
      status: "REVIEWING",
      summary: "Crebro nostrum alias sponte turbo sopor vergo surculus nam copiose. Enim casso cursus aestus deprecator. Despecto tabella argentum decretum cultellus aveho distinctio verecundia stella.",
      updatedAt: new Date("2026-11-23T07:41:36.976Z"),
    },
    connectionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsCreateAtsApplication } from "@unified-api/typescript-sdk/funcs/atsCreateAtsApplication.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsCreateAtsApplication(unifiedTo, {
    atsApplication: {
      answers: [],
      appliedAt: new Date("2025-10-23T03:30:17.745Z"),
      createdAt: new Date("2023-10-17T07:19:48.787Z"),
      hiredAt: new Date("2026-06-12T12:10:08.037Z"),
      id: "667cc369-1a41-4ffb-86b7-bae6c46eba47",
      metadata: [
        {
          extraData: {
  
          },
          format: "TEXT",
          id: "8c86d544-2e76-446f-9d3c-bf93264b6aaa",
          namespace: "application",
          slug: "arguo",
          value: "Defessus occaecati adflicto caecus claustrum annus addo.",
        },
      ],
      offers: [],
      originalStatus: "caput",
      originalSubstatus: "admiratio",
      rejectedAt: new Date("2026-11-16T06:04:36.353Z"),
      rejectedReason: "Talio credo vomica allatus stella.",
      source: "alii",
      status: "REVIEWING",
      summary: "Crebro nostrum alias sponte turbo sopor vergo surculus nam copiose. Enim casso cursus aestus deprecator. Despecto tabella argentum decretum cultellus aveho distinctio verecundia stella.",
      updatedAt: new Date("2026-11-23T07:41:36.976Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsCreateAtsApplication failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateAtsApplicationRequest](../../sdk/models/operations/createatsapplicationrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsApplication](../../sdk/models/shared/atsapplication.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createAtsCandidate

Creates a AtsCandidate. Provide the unified AtsCandidate fields in the request body; they are mapped to the provider's API. Returns the created AtsCandidate.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createAtsCandidate" method="post" path="/ats/{connection_id}/candidate" example="ats_candidate" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.createAtsCandidate({
    atsCandidate: {
      address: {
        address1: "699 Legros Falls",
        city: "New Albertoboro",
        countryCode: "US",
        postalCode: "85550-0688",
        region: "Minnesota",
        regionCode: "WY",
      },
      companyName: "Doyle-Kutch LLC",
      createdAt: new Date("2023-10-16T05:42:56.049Z"),
      dateOfBirth: new Date("1994-07-05T19:48:57.631Z"),
      education: [
        {
          degree: "wilt powerfully",
          endAt: new Date("1978-04-14T07:58:36.326Z"),
          fieldOfStudy: "totam",
          institution: "Wunsch - Grimes-Heller",
          level: "phd",
          startAt: new Date("1994-06-09T13:31:39.059Z"),
        },
        {
          degree: "substantial yum",
          endAt: new Date("1989-09-06T03:32:39.901Z"),
          fieldOfStudy: "commodi",
          institution: "Franecki and Sons",
          level: "highschool",
          startAt: new Date("1992-11-28T20:23:20.311Z"),
        },
      ],
      emails: [
        {
          email: "alyce.rempel@outlook.com",
          name: "Alyce Rempel",
          type: "HOME",
        },
      ],
      experiences: [
        {
          companyName: "Mayert - Rohan",
          endAt: new Date("1974-03-01T17:02:58.824Z"),
          startAt: new Date("1999-09-21T22:12:51.663Z"),
          title: "Central Response Designer",
        },
        {
          companyName: "Padberg, Keeling and Franey",
          endAt: new Date("2004-10-14T14:01:00.717Z"),
          startAt: new Date("1996-12-15T04:12:04.582Z"),
          title: "Central Communications Producer",
        },
      ],
      firstName: "Alyce",
      hasDoNotContact: false,
      id: "d82e91fd-6744-4156-8421-db3e4078ad03",
      imageUrl: "https://avatars.githubusercontent.com/u/99913246",
      isPrivate: true,
      jobIds: [],
      lastName: "Rempel",
      linkUrls: [
        "https://www.linkedin.com/in/alyce-rempel",
      ],
      metadata: [
        {
          extraData: {

          },
          format: "TEXT",
          id: "0473c908-8e1a-4da8-9a99-40fb620846e2",
          namespace: "custom",
          slug: "custom_field",
          value: "chirographum",
        },
      ],
      name: "Alyce Rempel",
      origin: "AGENCY",
      skills: [
        "curvo",
        "voveo",
      ],
      sources: [
        "tripudio",
        "volup",
      ],
      summary: "Spero nostrum damnatio averto pecus cervus aspicio. Stabilis thesis admiratio. Acquiro sperno voluptate laboriosam comitatus teres doloribus canonicus considero tersus.",
      tags: [
        "alo",
      ],
      telephones: [
        {
          telephone: "(251) 489-6457",
          type: "MOBILE",
        },
      ],
      title: "Internal Paradigm Consultant",
      updatedAt: new Date("2024-05-05T03:18:50.603Z"),
      webUrl: "https://light-meander.com/",
    },
    connectionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsCreateAtsCandidate } from "@unified-api/typescript-sdk/funcs/atsCreateAtsCandidate.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsCreateAtsCandidate(unifiedTo, {
    atsCandidate: {
      address: {
        address1: "699 Legros Falls",
        city: "New Albertoboro",
        countryCode: "US",
        postalCode: "85550-0688",
        region: "Minnesota",
        regionCode: "WY",
      },
      companyName: "Doyle-Kutch LLC",
      createdAt: new Date("2023-10-16T05:42:56.049Z"),
      dateOfBirth: new Date("1994-07-05T19:48:57.631Z"),
      education: [
        {
          degree: "wilt powerfully",
          endAt: new Date("1978-04-14T07:58:36.326Z"),
          fieldOfStudy: "totam",
          institution: "Wunsch - Grimes-Heller",
          level: "phd",
          startAt: new Date("1994-06-09T13:31:39.059Z"),
        },
        {
          degree: "substantial yum",
          endAt: new Date("1989-09-06T03:32:39.901Z"),
          fieldOfStudy: "commodi",
          institution: "Franecki and Sons",
          level: "highschool",
          startAt: new Date("1992-11-28T20:23:20.311Z"),
        },
      ],
      emails: [
        {
          email: "alyce.rempel@outlook.com",
          name: "Alyce Rempel",
          type: "HOME",
        },
      ],
      experiences: [
        {
          companyName: "Mayert - Rohan",
          endAt: new Date("1974-03-01T17:02:58.824Z"),
          startAt: new Date("1999-09-21T22:12:51.663Z"),
          title: "Central Response Designer",
        },
        {
          companyName: "Padberg, Keeling and Franey",
          endAt: new Date("2004-10-14T14:01:00.717Z"),
          startAt: new Date("1996-12-15T04:12:04.582Z"),
          title: "Central Communications Producer",
        },
      ],
      firstName: "Alyce",
      hasDoNotContact: false,
      id: "d82e91fd-6744-4156-8421-db3e4078ad03",
      imageUrl: "https://avatars.githubusercontent.com/u/99913246",
      isPrivate: true,
      jobIds: [],
      lastName: "Rempel",
      linkUrls: [
        "https://www.linkedin.com/in/alyce-rempel",
      ],
      metadata: [
        {
          extraData: {
  
          },
          format: "TEXT",
          id: "0473c908-8e1a-4da8-9a99-40fb620846e2",
          namespace: "custom",
          slug: "custom_field",
          value: "chirographum",
        },
      ],
      name: "Alyce Rempel",
      origin: "AGENCY",
      skills: [
        "curvo",
        "voveo",
      ],
      sources: [
        "tripudio",
        "volup",
      ],
      summary: "Spero nostrum damnatio averto pecus cervus aspicio. Stabilis thesis admiratio. Acquiro sperno voluptate laboriosam comitatus teres doloribus canonicus considero tersus.",
      tags: [
        "alo",
      ],
      telephones: [
        {
          telephone: "(251) 489-6457",
          type: "MOBILE",
        },
      ],
      title: "Internal Paradigm Consultant",
      updatedAt: new Date("2024-05-05T03:18:50.603Z"),
      webUrl: "https://light-meander.com/",
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsCreateAtsCandidate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateAtsCandidateRequest](../../sdk/models/operations/createatscandidaterequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsCandidate](../../sdk/models/shared/atscandidate.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createAtsCompany

Creates a AtsCompany. Provide the unified AtsCompany fields in the request body; they are mapped to the provider's API. Returns the created AtsCompany.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createAtsCompany" method="post" path="/ats/{connection_id}/company" example="ats_company" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.createAtsCompany({
    atsCompany: {
      createdAt: new Date("2019-04-22T03:50:02.920Z"),
      fees: [
        {
          percentage: 23,
          type: "CONTINGENCY",
        },
      ],
      id: "3594adb3-ae5f-412f-8c89-fdb6288328c5",
      name: "Streich, Mohr and Barton",
      phone: "245-586-5728 x0090",
      updatedAt: new Date("2020-10-08T02:50:57.044Z"),
      websiteUrl: "https://www.streichmohr.com",
    },
    connectionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsCreateAtsCompany } from "@unified-api/typescript-sdk/funcs/atsCreateAtsCompany.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsCreateAtsCompany(unifiedTo, {
    atsCompany: {
      createdAt: new Date("2019-04-22T03:50:02.920Z"),
      fees: [
        {
          percentage: 23,
          type: "CONTINGENCY",
        },
      ],
      id: "3594adb3-ae5f-412f-8c89-fdb6288328c5",
      name: "Streich, Mohr and Barton",
      phone: "245-586-5728 x0090",
      updatedAt: new Date("2020-10-08T02:50:57.044Z"),
      websiteUrl: "https://www.streichmohr.com",
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsCreateAtsCompany failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateAtsCompanyRequest](../../sdk/models/operations/createatscompanyrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsCompany](../../sdk/models/shared/atscompany.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createAtsDocument

Creates a AtsDocument. Provide the unified AtsDocument fields in the request body; they are mapped to the provider's API. Returns the created AtsDocument.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createAtsDocument" method="post" path="/ats/{connection_id}/document" example="ats_document" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.createAtsDocument({
    atsDocument: {
      createdAt: new Date("2021-08-20T08:00:27.437Z"),
      documentUrl: "https://thin-video.org/",
      filename: "reggie_langosh_resume.pdf",
      id: "3b0ee585-354e-4a7a-874a-893a31aa0859",
      metadata: [],
      type: "COVER_LETTER",
      updatedAt: new Date("2022-12-16T05:59:29.074Z"),
    },
    connectionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsCreateAtsDocument } from "@unified-api/typescript-sdk/funcs/atsCreateAtsDocument.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsCreateAtsDocument(unifiedTo, {
    atsDocument: {
      createdAt: new Date("2021-08-20T08:00:27.437Z"),
      documentUrl: "https://thin-video.org/",
      filename: "reggie_langosh_resume.pdf",
      id: "3b0ee585-354e-4a7a-874a-893a31aa0859",
      metadata: [],
      type: "COVER_LETTER",
      updatedAt: new Date("2022-12-16T05:59:29.074Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsCreateAtsDocument failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateAtsDocumentRequest](../../sdk/models/operations/createatsdocumentrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsDocument](../../sdk/models/shared/atsdocument.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createAtsInterview

Creates a AtsInterview. Provide the unified AtsInterview fields in the request body; they are mapped to the provider's API. Returns the created AtsInterview.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createAtsInterview" method="post" path="/ats/{connection_id}/interview" example="ats_interview" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.createAtsInterview({
    atsInterview: {
      createdAt: new Date("2021-11-28T03:14:47.774Z"),
      endAt: new Date("2021-12-08T06:33:19.583Z"),
      id: "31b5e748-dbb8-4c1f-b42e-c314a2f2ae71",
      location: "9604 S Pine Street",
      meetingUrl: "https://gummy-battle.name/",
      metadata: [],
      startAt: new Date("2021-12-08T06:03:19.583Z"),
      status: "SCHEDULED",
      updatedAt: new Date("2023-10-07T01:56:58.692Z"),
    },
    connectionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsCreateAtsInterview } from "@unified-api/typescript-sdk/funcs/atsCreateAtsInterview.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsCreateAtsInterview(unifiedTo, {
    atsInterview: {
      createdAt: new Date("2021-11-28T03:14:47.774Z"),
      endAt: new Date("2021-12-08T06:33:19.583Z"),
      id: "31b5e748-dbb8-4c1f-b42e-c314a2f2ae71",
      location: "9604 S Pine Street",
      meetingUrl: "https://gummy-battle.name/",
      metadata: [],
      startAt: new Date("2021-12-08T06:03:19.583Z"),
      status: "SCHEDULED",
      updatedAt: new Date("2023-10-07T01:56:58.692Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsCreateAtsInterview failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateAtsInterviewRequest](../../sdk/models/operations/createatsinterviewrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsInterview](../../sdk/models/shared/atsinterview.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createAtsJob

Creates a AtsJob. Provide the unified AtsJob fields in the request body; they are mapped to the provider's API. Returns the created AtsJob.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createAtsJob" method="post" path="/ats/{connection_id}/job" example="ats_job" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.createAtsJob({
    atsJob: {
      addresses: [
        {
          address1: "458 E 8th Street",
          city: "Visalia",
          countryCode: "US",
          postalCode: "60669-0678",
          region: "Oregon",
          regionCode: "DE",
        },
      ],
      compensation: [
        {
          currency: "GBP",
          frequency: "DAY",
          max: 174303,
          min: 174042,
          type: "BONUS",
        },
        {
          currency: "KMF",
          frequency: "MONTH",
          max: 171171,
          min: 151975,
          type: "SALARY",
        },
      ],
      createdAt: new Date("2023-06-16T12:51:44.518Z"),
      description: "Senior",
      employmentType: "FREELANCE",
      fees: [
        {
          amount: 35146,
          currency: "AFN",
          type: "CONTINGENCY",
        },
      ],
      hiringManagers: [],
      id: "3f542f8d-8aab-441d-a6e3-8672ce9b2be2",
      industry: "Refined Ceramic Keyboard",
      languageLocale: "en",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "225096b8-69ad-48c6-9b74-2d058005a930",
          namespace: "custom",
          slug: "custom_property",
          value: "cursus",
        },
      ],
      minimumDegree: "Bachelor",
      minimumExperienceYears: 3,
      name: "Senior Interactions Developer",
      numberOfOpenings: 1,
      openings: [
        {
          closeReason: "Tolero aequus tamquam inflammatio asporto canis vinitor utrum.",
          openedAt: new Date("2026-07-09T22:19:32.312Z"),
          status: "OPEN",
        },
      ],
      postings: [
        {
          address: {
            address1: "295 First Street",
            city: "East Agustinton",
            countryCode: "US",
            postalCode: "57059",
            region: "Utah",
            regionCode: "NE",
          },
          createdAt: new Date("2026-09-04T16:19:34.289Z"),
          description: "Sublime.",
          id: "ba3c9b08-e46b-47cb-8230-ff21005815ad",
          isActive: false,
          location: "5699 Purdy Motorway",
          name: "Legacy Implementation Orchestrator",
          postingUrl: "https://elementary-privilege.com/",
          updatedAt: new Date("2026-10-01T18:18:40.205Z"),
        },
      ],
      publicJobUrls: [
        "https://parched-dash.info",
        "https://mild-midwife.org/",
      ],
      questions: [
        {
          description: "Capitulus.",
          id: "cdac0040-30b5-430a-8c91-04d621a364cf",
          maxLength: 214,
          minLength: 1,
          options: [
            "aetas",
            "vado",
          ],
          prompt: "Agnosco tendo.",
          question: "Deporto tolero.",
          required: true,
          type: "TEXT",
        },
        {
          id: "09e20133-8fd4-425d-8e87-b1cbd6cc54a1",
          maxLength: 309,
          minLength: 1,
          options: [
            "sodalitas",
          ],
          prompt: "Supra veritatis.",
          question: "Maxime tres tergiversatio tactus vehemens architecto ab nam defetiscor.",
          required: false,
          type: "TEXT",
        },
        {
          description: "Confero trepide.",
          id: "17438be4-364d-4a97-9783-f26338dd654f",
          maxLength: 428,
          minLength: 1,
          options: [
            "censura",
          ],
          prompt: "Taceo rem compello spectaculum mollitia arcus compello.",
          question: "Attonbitus reprehenderit voro depono constans vehemens.",
          required: false,
          type: "TEXT",
        },
      ],
      skills: [
        "similique",
        "absque",
      ],
      status: "ARCHIVED",
      summary: "Contra damno desolo suadeo utrimque cresco aetas turpis.",
      updatedAt: new Date("2026-03-28T11:35:32.474Z"),
    },
    connectionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsCreateAtsJob } from "@unified-api/typescript-sdk/funcs/atsCreateAtsJob.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsCreateAtsJob(unifiedTo, {
    atsJob: {
      addresses: [
        {
          address1: "458 E 8th Street",
          city: "Visalia",
          countryCode: "US",
          postalCode: "60669-0678",
          region: "Oregon",
          regionCode: "DE",
        },
      ],
      compensation: [
        {
          currency: "GBP",
          frequency: "DAY",
          max: 174303,
          min: 174042,
          type: "BONUS",
        },
        {
          currency: "KMF",
          frequency: "MONTH",
          max: 171171,
          min: 151975,
          type: "SALARY",
        },
      ],
      createdAt: new Date("2023-06-16T12:51:44.518Z"),
      description: "Senior",
      employmentType: "FREELANCE",
      fees: [
        {
          amount: 35146,
          currency: "AFN",
          type: "CONTINGENCY",
        },
      ],
      hiringManagers: [],
      id: "3f542f8d-8aab-441d-a6e3-8672ce9b2be2",
      industry: "Refined Ceramic Keyboard",
      languageLocale: "en",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "225096b8-69ad-48c6-9b74-2d058005a930",
          namespace: "custom",
          slug: "custom_property",
          value: "cursus",
        },
      ],
      minimumDegree: "Bachelor",
      minimumExperienceYears: 3,
      name: "Senior Interactions Developer",
      numberOfOpenings: 1,
      openings: [
        {
          closeReason: "Tolero aequus tamquam inflammatio asporto canis vinitor utrum.",
          openedAt: new Date("2026-07-09T22:19:32.312Z"),
          status: "OPEN",
        },
      ],
      postings: [
        {
          address: {
            address1: "295 First Street",
            city: "East Agustinton",
            countryCode: "US",
            postalCode: "57059",
            region: "Utah",
            regionCode: "NE",
          },
          createdAt: new Date("2026-09-04T16:19:34.289Z"),
          description: "Sublime.",
          id: "ba3c9b08-e46b-47cb-8230-ff21005815ad",
          isActive: false,
          location: "5699 Purdy Motorway",
          name: "Legacy Implementation Orchestrator",
          postingUrl: "https://elementary-privilege.com/",
          updatedAt: new Date("2026-10-01T18:18:40.205Z"),
        },
      ],
      publicJobUrls: [
        "https://parched-dash.info",
        "https://mild-midwife.org/",
      ],
      questions: [
        {
          description: "Capitulus.",
          id: "cdac0040-30b5-430a-8c91-04d621a364cf",
          maxLength: 214,
          minLength: 1,
          options: [
            "aetas",
            "vado",
          ],
          prompt: "Agnosco tendo.",
          question: "Deporto tolero.",
          required: true,
          type: "TEXT",
        },
        {
          id: "09e20133-8fd4-425d-8e87-b1cbd6cc54a1",
          maxLength: 309,
          minLength: 1,
          options: [
            "sodalitas",
          ],
          prompt: "Supra veritatis.",
          question: "Maxime tres tergiversatio tactus vehemens architecto ab nam defetiscor.",
          required: false,
          type: "TEXT",
        },
        {
          description: "Confero trepide.",
          id: "17438be4-364d-4a97-9783-f26338dd654f",
          maxLength: 428,
          minLength: 1,
          options: [
            "censura",
          ],
          prompt: "Taceo rem compello spectaculum mollitia arcus compello.",
          question: "Attonbitus reprehenderit voro depono constans vehemens.",
          required: false,
          type: "TEXT",
        },
      ],
      skills: [
        "similique",
        "absque",
      ],
      status: "ARCHIVED",
      summary: "Contra damno desolo suadeo utrimque cresco aetas turpis.",
      updatedAt: new Date("2026-03-28T11:35:32.474Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsCreateAtsJob failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateAtsJobRequest](../../sdk/models/operations/createatsjobrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsJob](../../sdk/models/shared/atsjob.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createAtsScorecard

Creates a AtsScorecard. Provide the unified AtsScorecard fields in the request body; they are mapped to the provider's API. Returns the created AtsScorecard.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createAtsScorecard" method="post" path="/ats/{connection_id}/scorecard" example="ats_scorecard" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.createAtsScorecard({
    atsScorecard: {
      comment: "Aliquam.",
      createdAt: new Date("2022-02-20T17:09:45.498Z"),
      id: "ca5a671c-7163-408a-9b6e-16bbe878b9a3",
      metadata: [],
      questions: [
        {
          description: "Pecto vulpes libero vomer comburo.",
          text: "Desidero modi tamdiu auxilium defessus adimpleo clementia tero.",
        },
        {
          answer: "Conatus cicuta doloremque statua bonus.",
          description: "Aduro viscus celebrer.",
          text: "Decretum.",
        },
      ],
      recommendation: "STRONG_YES",
      updatedAt: new Date("2023-06-15T12:06:36.787Z"),
    },
    connectionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsCreateAtsScorecard } from "@unified-api/typescript-sdk/funcs/atsCreateAtsScorecard.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsCreateAtsScorecard(unifiedTo, {
    atsScorecard: {
      comment: "Aliquam.",
      createdAt: new Date("2022-02-20T17:09:45.498Z"),
      id: "ca5a671c-7163-408a-9b6e-16bbe878b9a3",
      metadata: [],
      questions: [
        {
          description: "Pecto vulpes libero vomer comburo.",
          text: "Desidero modi tamdiu auxilium defessus adimpleo clementia tero.",
        },
        {
          answer: "Conatus cicuta doloremque statua bonus.",
          description: "Aduro viscus celebrer.",
          text: "Decretum.",
        },
      ],
      recommendation: "STRONG_YES",
      updatedAt: new Date("2023-06-15T12:06:36.787Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsCreateAtsScorecard failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateAtsScorecardRequest](../../sdk/models/operations/createatsscorecardrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsScorecard](../../sdk/models/shared/atsscorecard.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getAtsActivity

Retrieves a single AtsActivity by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAtsActivity" method="get" path="/ats/{connection_id}/activity/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.getAtsActivity({
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsGetAtsActivity } from "@unified-api/typescript-sdk/funcs/atsGetAtsActivity.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsGetAtsActivity(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsGetAtsActivity failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAtsActivityRequest](../../sdk/models/operations/getatsactivityrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsActivity](../../sdk/models/shared/atsactivity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getAtsApplication

Retrieves a single AtsApplication by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAtsApplication" method="get" path="/ats/{connection_id}/application/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.getAtsApplication({
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsGetAtsApplication } from "@unified-api/typescript-sdk/funcs/atsGetAtsApplication.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsGetAtsApplication(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsGetAtsApplication failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAtsApplicationRequest](../../sdk/models/operations/getatsapplicationrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsApplication](../../sdk/models/shared/atsapplication.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getAtsApplicationstatus

Retrieves a single AtsStatus by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAtsApplicationstatus" method="get" path="/ats/{connection_id}/applicationstatus/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.getAtsApplicationstatus({
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsGetAtsApplicationstatus } from "@unified-api/typescript-sdk/funcs/atsGetAtsApplicationstatus.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsGetAtsApplicationstatus(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsGetAtsApplicationstatus failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAtsApplicationstatusRequest](../../sdk/models/operations/getatsapplicationstatusrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsStatus](../../sdk/models/shared/atsstatus.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getAtsCandidate

Retrieves a single AtsCandidate by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAtsCandidate" method="get" path="/ats/{connection_id}/candidate/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.getAtsCandidate({
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsGetAtsCandidate } from "@unified-api/typescript-sdk/funcs/atsGetAtsCandidate.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsGetAtsCandidate(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsGetAtsCandidate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAtsCandidateRequest](../../sdk/models/operations/getatscandidaterequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsCandidate](../../sdk/models/shared/atscandidate.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getAtsCompany

Retrieves a single AtsCompany by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAtsCompany" method="get" path="/ats/{connection_id}/company/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.getAtsCompany({
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsGetAtsCompany } from "@unified-api/typescript-sdk/funcs/atsGetAtsCompany.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsGetAtsCompany(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsGetAtsCompany failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAtsCompanyRequest](../../sdk/models/operations/getatscompanyrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsCompany](../../sdk/models/shared/atscompany.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getAtsDocument

Retrieves a single AtsDocument by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAtsDocument" method="get" path="/ats/{connection_id}/document/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.getAtsDocument({
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsGetAtsDocument } from "@unified-api/typescript-sdk/funcs/atsGetAtsDocument.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsGetAtsDocument(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsGetAtsDocument failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAtsDocumentRequest](../../sdk/models/operations/getatsdocumentrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsDocument](../../sdk/models/shared/atsdocument.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getAtsInterview

Retrieves a single AtsInterview by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAtsInterview" method="get" path="/ats/{connection_id}/interview/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.getAtsInterview({
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsGetAtsInterview } from "@unified-api/typescript-sdk/funcs/atsGetAtsInterview.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsGetAtsInterview(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsGetAtsInterview failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAtsInterviewRequest](../../sdk/models/operations/getatsinterviewrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsInterview](../../sdk/models/shared/atsinterview.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getAtsJob

Retrieves a single AtsJob by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAtsJob" method="get" path="/ats/{connection_id}/job/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.getAtsJob({
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsGetAtsJob } from "@unified-api/typescript-sdk/funcs/atsGetAtsJob.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsGetAtsJob(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsGetAtsJob failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAtsJobRequest](../../sdk/models/operations/getatsjobrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsJob](../../sdk/models/shared/atsjob.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getAtsScorecard

Retrieves a single AtsScorecard by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAtsScorecard" method="get" path="/ats/{connection_id}/scorecard/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.getAtsScorecard({
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsGetAtsScorecard } from "@unified-api/typescript-sdk/funcs/atsGetAtsScorecard.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsGetAtsScorecard(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsGetAtsScorecard failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAtsScorecardRequest](../../sdk/models/operations/getatsscorecardrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsScorecard](../../sdk/models/shared/atsscorecard.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listAtsActivities

Returns a list of AtsActivities. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listAtsActivities" method="get" path="/ats/{connection_id}/activity" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.listAtsActivities({
    connectionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsListAtsActivities } from "@unified-api/typescript-sdk/funcs/atsListAtsActivities.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsListAtsActivities(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsListAtsActivities failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAtsActivitiesRequest](../../sdk/models/operations/listatsactivitiesrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsActivity[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listAtsApplications

Returns a list of AtsApplications. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listAtsApplications" method="get" path="/ats/{connection_id}/application" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.listAtsApplications({
    connectionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsListAtsApplications } from "@unified-api/typescript-sdk/funcs/atsListAtsApplications.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsListAtsApplications(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsListAtsApplications failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAtsApplicationsRequest](../../sdk/models/operations/listatsapplicationsrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsApplication[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listAtsApplicationstatuses

Returns a list of AtsStatuses. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listAtsApplicationstatuses" method="get" path="/ats/{connection_id}/applicationstatus" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.listAtsApplicationstatuses({
    connectionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsListAtsApplicationstatuses } from "@unified-api/typescript-sdk/funcs/atsListAtsApplicationstatuses.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsListAtsApplicationstatuses(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsListAtsApplicationstatuses failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAtsApplicationstatusesRequest](../../sdk/models/operations/listatsapplicationstatusesrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsStatus[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listAtsCandidates

Returns a list of AtsCandidates. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listAtsCandidates" method="get" path="/ats/{connection_id}/candidate" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.listAtsCandidates({
    connectionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsListAtsCandidates } from "@unified-api/typescript-sdk/funcs/atsListAtsCandidates.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsListAtsCandidates(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsListAtsCandidates failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAtsCandidatesRequest](../../sdk/models/operations/listatscandidatesrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsCandidate[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listAtsCompanies

Returns a list of AtsCompanies. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listAtsCompanies" method="get" path="/ats/{connection_id}/company" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.listAtsCompanies({
    connectionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsListAtsCompanies } from "@unified-api/typescript-sdk/funcs/atsListAtsCompanies.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsListAtsCompanies(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsListAtsCompanies failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAtsCompaniesRequest](../../sdk/models/operations/listatscompaniesrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsCompany[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listAtsDocuments

Returns a list of AtsDocuments. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listAtsDocuments" method="get" path="/ats/{connection_id}/document" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.listAtsDocuments({
    connectionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsListAtsDocuments } from "@unified-api/typescript-sdk/funcs/atsListAtsDocuments.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsListAtsDocuments(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsListAtsDocuments failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAtsDocumentsRequest](../../sdk/models/operations/listatsdocumentsrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsDocument[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listAtsInterviews

Returns a list of AtsInterviews. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listAtsInterviews" method="get" path="/ats/{connection_id}/interview" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.listAtsInterviews({
    connectionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsListAtsInterviews } from "@unified-api/typescript-sdk/funcs/atsListAtsInterviews.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsListAtsInterviews(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsListAtsInterviews failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAtsInterviewsRequest](../../sdk/models/operations/listatsinterviewsrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsInterview[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listAtsJobs

Returns a list of AtsJobs. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listAtsJobs" method="get" path="/ats/{connection_id}/job" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.listAtsJobs({
    connectionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsListAtsJobs } from "@unified-api/typescript-sdk/funcs/atsListAtsJobs.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsListAtsJobs(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsListAtsJobs failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAtsJobsRequest](../../sdk/models/operations/listatsjobsrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsJob[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listAtsScorecards

Returns a list of AtsScorecards. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listAtsScorecards" method="get" path="/ats/{connection_id}/scorecard" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.listAtsScorecards({
    connectionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsListAtsScorecards } from "@unified-api/typescript-sdk/funcs/atsListAtsScorecards.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsListAtsScorecards(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsListAtsScorecards failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAtsScorecardsRequest](../../sdk/models/operations/listatsscorecardsrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsScorecard[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchAtsActivity

Updates the AtsActivity identified by `id`. Provide the unified AtsActivity fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchAtsActivity" method="patch" path="/ats/{connection_id}/activity/{id}" example="ats_activity" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.patchAtsActivity({
    atsActivity: {
      createdAt: new Date("2022-08-07T03:16:43.865Z"),
      description: "Reprehenderit.",
      id: "ec303f65-f8cf-4973-a10f-a110d4528a6f",
      isPrivate: false,
      metadata: [
        {
          extraData: {

          },
          format: "TEXT",
          id: "ba679995-d117-4601-a31d-d67b39efbd82",
          namespace: "activity",
          slug: "verto",
          value: "Sint varietas officia aequus stillicidium vereor victus tricesimus vester.",
        },
      ],
      subType: "TASK",
      title: "Amplus sapiente cimentarius.",
      type: "TASK",
      updatedAt: new Date("2026-05-05T14:37:08.517Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsPatchAtsActivity } from "@unified-api/typescript-sdk/funcs/atsPatchAtsActivity.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsPatchAtsActivity(unifiedTo, {
    atsActivity: {
      createdAt: new Date("2022-08-07T03:16:43.865Z"),
      description: "Reprehenderit.",
      id: "ec303f65-f8cf-4973-a10f-a110d4528a6f",
      isPrivate: false,
      metadata: [
        {
          extraData: {
  
          },
          format: "TEXT",
          id: "ba679995-d117-4601-a31d-d67b39efbd82",
          namespace: "activity",
          slug: "verto",
          value: "Sint varietas officia aequus stillicidium vereor victus tricesimus vester.",
        },
      ],
      subType: "TASK",
      title: "Amplus sapiente cimentarius.",
      type: "TASK",
      updatedAt: new Date("2026-05-05T14:37:08.517Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsPatchAtsActivity failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchAtsActivityRequest](../../sdk/models/operations/patchatsactivityrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsActivity](../../sdk/models/shared/atsactivity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchAtsApplication

Updates the AtsApplication identified by `id`. Provide the unified AtsApplication fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchAtsApplication" method="patch" path="/ats/{connection_id}/application/{id}" example="ats_application" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.patchAtsApplication({
    atsApplication: {
      answers: [],
      appliedAt: new Date("2025-10-23T03:30:17.763Z"),
      createdAt: new Date("2023-10-17T07:19:48.787Z"),
      hiredAt: new Date("2026-06-12T12:10:08.062Z"),
      id: "6551ad54-8e3f-4479-a5e0-9cba63b53152",
      metadata: [
        {
          extraData: {

          },
          format: "TEXT",
          id: "67df4fdf-8807-4dc5-87ad-dfc267b63885",
          namespace: "application",
          slug: "arguo",
          value: "Defessus occaecati adflicto caecus claustrum annus addo.",
        },
      ],
      offers: [],
      originalStatus: "caput",
      originalSubstatus: "admiratio",
      rejectedAt: new Date("2026-11-16T06:04:36.382Z"),
      rejectedReason: "Talio credo vomica allatus stella.",
      source: "alii",
      status: "REVIEWING",
      summary: "Crebro nostrum alias sponte turbo sopor vergo surculus nam copiose. Enim casso cursus aestus deprecator. Despecto tabella argentum decretum cultellus aveho distinctio verecundia stella.",
      updatedAt: new Date("2026-11-23T07:41:37.005Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsPatchAtsApplication } from "@unified-api/typescript-sdk/funcs/atsPatchAtsApplication.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsPatchAtsApplication(unifiedTo, {
    atsApplication: {
      answers: [],
      appliedAt: new Date("2025-10-23T03:30:17.763Z"),
      createdAt: new Date("2023-10-17T07:19:48.787Z"),
      hiredAt: new Date("2026-06-12T12:10:08.062Z"),
      id: "6551ad54-8e3f-4479-a5e0-9cba63b53152",
      metadata: [
        {
          extraData: {
  
          },
          format: "TEXT",
          id: "67df4fdf-8807-4dc5-87ad-dfc267b63885",
          namespace: "application",
          slug: "arguo",
          value: "Defessus occaecati adflicto caecus claustrum annus addo.",
        },
      ],
      offers: [],
      originalStatus: "caput",
      originalSubstatus: "admiratio",
      rejectedAt: new Date("2026-11-16T06:04:36.382Z"),
      rejectedReason: "Talio credo vomica allatus stella.",
      source: "alii",
      status: "REVIEWING",
      summary: "Crebro nostrum alias sponte turbo sopor vergo surculus nam copiose. Enim casso cursus aestus deprecator. Despecto tabella argentum decretum cultellus aveho distinctio verecundia stella.",
      updatedAt: new Date("2026-11-23T07:41:37.005Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsPatchAtsApplication failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchAtsApplicationRequest](../../sdk/models/operations/patchatsapplicationrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsApplication](../../sdk/models/shared/atsapplication.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchAtsCandidate

Updates the AtsCandidate identified by `id`. Provide the unified AtsCandidate fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchAtsCandidate" method="patch" path="/ats/{connection_id}/candidate/{id}" example="ats_candidate" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.patchAtsCandidate({
    atsCandidate: {
      address: {
        address1: "699 Legros Falls",
        city: "New Albertoboro",
        countryCode: "US",
        postalCode: "85550-0688",
        region: "Minnesota",
        regionCode: "WY",
      },
      companyName: "Doyle-Kutch LLC",
      createdAt: new Date("2023-10-16T05:42:56.049Z"),
      dateOfBirth: new Date("1994-07-05T19:48:57.631Z"),
      education: [
        {
          degree: "wilt powerfully",
          endAt: new Date("1978-04-14T07:58:36.326Z"),
          fieldOfStudy: "totam",
          institution: "Wunsch - Grimes-Heller",
          level: "phd",
          startAt: new Date("1994-06-09T13:31:39.059Z"),
        },
        {
          degree: "substantial yum",
          endAt: new Date("1989-09-06T03:32:39.901Z"),
          fieldOfStudy: "commodi",
          institution: "Franecki and Sons",
          level: "highschool",
          startAt: new Date("1992-11-28T20:23:20.311Z"),
        },
      ],
      emails: [
        {
          email: "alyce.rempel@outlook.com",
          name: "Alyce Rempel",
          type: "HOME",
        },
      ],
      experiences: [
        {
          companyName: "Mayert - Rohan",
          endAt: new Date("1974-03-01T17:02:58.824Z"),
          startAt: new Date("1999-09-21T22:12:51.663Z"),
          title: "Central Response Designer",
        },
        {
          companyName: "Padberg, Keeling and Franey",
          endAt: new Date("2004-10-14T14:01:00.717Z"),
          startAt: new Date("1996-12-15T04:12:04.582Z"),
          title: "Central Communications Producer",
        },
      ],
      firstName: "Alyce",
      hasDoNotContact: false,
      id: "904474f1-bdb2-42c8-81d8-54d8b373d895",
      imageUrl: "https://avatars.githubusercontent.com/u/99913246",
      isPrivate: true,
      jobIds: [],
      lastName: "Rempel",
      linkUrls: [
        "https://www.linkedin.com/in/alyce-rempel",
      ],
      metadata: [
        {
          extraData: {

          },
          format: "TEXT",
          id: "6c5029ca-867a-4895-8e02-785db7dfb971",
          namespace: "custom",
          slug: "custom_field",
          value: "chirographum",
        },
      ],
      name: "Alyce Rempel",
      origin: "AGENCY",
      skills: [
        "curvo",
        "voveo",
      ],
      sources: [
        "tripudio",
        "volup",
      ],
      summary: "Spero nostrum damnatio averto pecus cervus aspicio. Stabilis thesis admiratio. Acquiro sperno voluptate laboriosam comitatus teres doloribus canonicus considero tersus.",
      tags: [
        "alo",
      ],
      telephones: [
        {
          telephone: "(251) 489-6457",
          type: "MOBILE",
        },
      ],
      title: "Internal Paradigm Consultant",
      updatedAt: new Date("2024-05-05T03:18:50.608Z"),
      webUrl: "https://light-meander.com/",
    },
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsPatchAtsCandidate } from "@unified-api/typescript-sdk/funcs/atsPatchAtsCandidate.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsPatchAtsCandidate(unifiedTo, {
    atsCandidate: {
      address: {
        address1: "699 Legros Falls",
        city: "New Albertoboro",
        countryCode: "US",
        postalCode: "85550-0688",
        region: "Minnesota",
        regionCode: "WY",
      },
      companyName: "Doyle-Kutch LLC",
      createdAt: new Date("2023-10-16T05:42:56.049Z"),
      dateOfBirth: new Date("1994-07-05T19:48:57.631Z"),
      education: [
        {
          degree: "wilt powerfully",
          endAt: new Date("1978-04-14T07:58:36.326Z"),
          fieldOfStudy: "totam",
          institution: "Wunsch - Grimes-Heller",
          level: "phd",
          startAt: new Date("1994-06-09T13:31:39.059Z"),
        },
        {
          degree: "substantial yum",
          endAt: new Date("1989-09-06T03:32:39.901Z"),
          fieldOfStudy: "commodi",
          institution: "Franecki and Sons",
          level: "highschool",
          startAt: new Date("1992-11-28T20:23:20.311Z"),
        },
      ],
      emails: [
        {
          email: "alyce.rempel@outlook.com",
          name: "Alyce Rempel",
          type: "HOME",
        },
      ],
      experiences: [
        {
          companyName: "Mayert - Rohan",
          endAt: new Date("1974-03-01T17:02:58.824Z"),
          startAt: new Date("1999-09-21T22:12:51.663Z"),
          title: "Central Response Designer",
        },
        {
          companyName: "Padberg, Keeling and Franey",
          endAt: new Date("2004-10-14T14:01:00.717Z"),
          startAt: new Date("1996-12-15T04:12:04.582Z"),
          title: "Central Communications Producer",
        },
      ],
      firstName: "Alyce",
      hasDoNotContact: false,
      id: "904474f1-bdb2-42c8-81d8-54d8b373d895",
      imageUrl: "https://avatars.githubusercontent.com/u/99913246",
      isPrivate: true,
      jobIds: [],
      lastName: "Rempel",
      linkUrls: [
        "https://www.linkedin.com/in/alyce-rempel",
      ],
      metadata: [
        {
          extraData: {
  
          },
          format: "TEXT",
          id: "6c5029ca-867a-4895-8e02-785db7dfb971",
          namespace: "custom",
          slug: "custom_field",
          value: "chirographum",
        },
      ],
      name: "Alyce Rempel",
      origin: "AGENCY",
      skills: [
        "curvo",
        "voveo",
      ],
      sources: [
        "tripudio",
        "volup",
      ],
      summary: "Spero nostrum damnatio averto pecus cervus aspicio. Stabilis thesis admiratio. Acquiro sperno voluptate laboriosam comitatus teres doloribus canonicus considero tersus.",
      tags: [
        "alo",
      ],
      telephones: [
        {
          telephone: "(251) 489-6457",
          type: "MOBILE",
        },
      ],
      title: "Internal Paradigm Consultant",
      updatedAt: new Date("2024-05-05T03:18:50.608Z"),
      webUrl: "https://light-meander.com/",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsPatchAtsCandidate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchAtsCandidateRequest](../../sdk/models/operations/patchatscandidaterequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsCandidate](../../sdk/models/shared/atscandidate.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchAtsCompany

Updates the AtsCompany identified by `id`. Provide the unified AtsCompany fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchAtsCompany" method="patch" path="/ats/{connection_id}/company/{id}" example="ats_company" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.patchAtsCompany({
    atsCompany: {
      createdAt: new Date("2019-04-22T03:50:02.920Z"),
      fees: [
        {
          percentage: 23,
          type: "CONTINGENCY",
        },
      ],
      id: "d77048a1-a7f6-401e-b0f2-c52ac8deb2d8",
      name: "Streich, Mohr and Barton",
      phone: "245-586-5728 x0090",
      updatedAt: new Date("2020-10-08T02:50:57.047Z"),
      websiteUrl: "https://www.streichmohr.com",
    },
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsPatchAtsCompany } from "@unified-api/typescript-sdk/funcs/atsPatchAtsCompany.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsPatchAtsCompany(unifiedTo, {
    atsCompany: {
      createdAt: new Date("2019-04-22T03:50:02.920Z"),
      fees: [
        {
          percentage: 23,
          type: "CONTINGENCY",
        },
      ],
      id: "d77048a1-a7f6-401e-b0f2-c52ac8deb2d8",
      name: "Streich, Mohr and Barton",
      phone: "245-586-5728 x0090",
      updatedAt: new Date("2020-10-08T02:50:57.047Z"),
      websiteUrl: "https://www.streichmohr.com",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsPatchAtsCompany failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchAtsCompanyRequest](../../sdk/models/operations/patchatscompanyrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsCompany](../../sdk/models/shared/atscompany.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchAtsDocument

Updates the AtsDocument identified by `id`. Provide the unified AtsDocument fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchAtsDocument" method="patch" path="/ats/{connection_id}/document/{id}" example="ats_document" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.patchAtsDocument({
    atsDocument: {
      createdAt: new Date("2021-08-20T08:00:27.437Z"),
      documentUrl: "https://thin-video.org/",
      filename: "reggie_langosh_resume.pdf",
      id: "049106d4-2741-4586-a2ec-17b51be0c62f",
      metadata: [],
      type: "COVER_LETTER",
      updatedAt: new Date("2022-12-16T05:59:29.076Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsPatchAtsDocument } from "@unified-api/typescript-sdk/funcs/atsPatchAtsDocument.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsPatchAtsDocument(unifiedTo, {
    atsDocument: {
      createdAt: new Date("2021-08-20T08:00:27.437Z"),
      documentUrl: "https://thin-video.org/",
      filename: "reggie_langosh_resume.pdf",
      id: "049106d4-2741-4586-a2ec-17b51be0c62f",
      metadata: [],
      type: "COVER_LETTER",
      updatedAt: new Date("2022-12-16T05:59:29.076Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsPatchAtsDocument failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchAtsDocumentRequest](../../sdk/models/operations/patchatsdocumentrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsDocument](../../sdk/models/shared/atsdocument.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchAtsInterview

Updates the AtsInterview identified by `id`. Provide the unified AtsInterview fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchAtsInterview" method="patch" path="/ats/{connection_id}/interview/{id}" example="ats_interview" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.patchAtsInterview({
    atsInterview: {
      createdAt: new Date("2021-11-28T03:14:47.774Z"),
      endAt: new Date("2021-12-08T06:33:19.583Z"),
      id: "a01386e8-361d-4cc2-9101-0965ba8a9927",
      location: "9604 S Pine Street",
      meetingUrl: "https://gummy-battle.name/",
      metadata: [],
      startAt: new Date("2021-12-08T06:03:19.583Z"),
      status: "SCHEDULED",
      updatedAt: new Date("2023-10-07T01:56:58.695Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsPatchAtsInterview } from "@unified-api/typescript-sdk/funcs/atsPatchAtsInterview.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsPatchAtsInterview(unifiedTo, {
    atsInterview: {
      createdAt: new Date("2021-11-28T03:14:47.774Z"),
      endAt: new Date("2021-12-08T06:33:19.583Z"),
      id: "a01386e8-361d-4cc2-9101-0965ba8a9927",
      location: "9604 S Pine Street",
      meetingUrl: "https://gummy-battle.name/",
      metadata: [],
      startAt: new Date("2021-12-08T06:03:19.583Z"),
      status: "SCHEDULED",
      updatedAt: new Date("2023-10-07T01:56:58.695Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsPatchAtsInterview failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchAtsInterviewRequest](../../sdk/models/operations/patchatsinterviewrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsInterview](../../sdk/models/shared/atsinterview.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchAtsJob

Updates the AtsJob identified by `id`. Provide the unified AtsJob fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchAtsJob" method="patch" path="/ats/{connection_id}/job/{id}" example="ats_job" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.patchAtsJob({
    atsJob: {
      addresses: [
        {
          address1: "458 E 8th Street",
          city: "Visalia",
          countryCode: "US",
          postalCode: "60669-0678",
          region: "Oregon",
          regionCode: "DE",
        },
      ],
      compensation: [
        {
          currency: "GBP",
          frequency: "DAY",
          max: 174303,
          min: 174042,
          type: "BONUS",
        },
        {
          currency: "KMF",
          frequency: "MONTH",
          max: 171171,
          min: 151975,
          type: "SALARY",
        },
      ],
      createdAt: new Date("2023-06-16T12:51:44.518Z"),
      description: "Senior",
      employmentType: "FREELANCE",
      fees: [
        {
          amount: 35146,
          currency: "AFN",
          type: "CONTINGENCY",
        },
      ],
      hiringManagers: [],
      id: "d2a56245-dbd5-43ac-aa43-789b84bc90a9",
      industry: "Refined Ceramic Keyboard",
      languageLocale: "en",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "79a4bfa2-8541-437e-b7b9-4354361e74ef",
          namespace: "custom",
          slug: "custom_property",
          value: "cursus",
        },
      ],
      minimumDegree: "Bachelor",
      minimumExperienceYears: 3,
      name: "Senior Interactions Developer",
      numberOfOpenings: 1,
      openings: [
        {
          closeReason: "Tolero aequus tamquam inflammatio asporto canis vinitor utrum.",
          openedAt: new Date("2026-07-09T22:19:32.366Z"),
          status: "OPEN",
        },
      ],
      postings: [
        {
          address: {
            address1: "295 First Street",
            city: "East Agustinton",
            countryCode: "US",
            postalCode: "57059",
            region: "Utah",
            regionCode: "NE",
          },
          createdAt: new Date("2026-09-04T16:19:34.346Z"),
          description: "Sublime.",
          id: "5c21ffeb-ae19-4802-919e-a2bcc7a14cc8",
          isActive: false,
          location: "5699 Purdy Motorway",
          name: "Legacy Implementation Orchestrator",
          postingUrl: "https://elementary-privilege.com/",
          updatedAt: new Date("2026-10-01T18:18:40.264Z"),
        },
      ],
      publicJobUrls: [
        "https://parched-dash.info",
        "https://mild-midwife.org/",
      ],
      questions: [
        {
          description: "Capitulus.",
          id: "a0ba8f22-d38f-4325-8f30-5604e56942e8",
          maxLength: 214,
          minLength: 1,
          options: [
            "aetas",
            "vado",
          ],
          prompt: "Agnosco tendo.",
          question: "Deporto tolero.",
          required: true,
          type: "TEXT",
        },
        {
          id: "5e711c92-d2e9-4ab6-b2fc-b60914cb39b8",
          maxLength: 309,
          minLength: 1,
          options: [
            "sodalitas",
          ],
          prompt: "Supra veritatis.",
          question: "Maxime tres tergiversatio tactus vehemens architecto ab nam defetiscor.",
          required: false,
          type: "TEXT",
        },
        {
          description: "Confero trepide.",
          id: "dce2d9e9-379b-48dc-b3c0-f9e0563797fa",
          maxLength: 428,
          minLength: 1,
          options: [
            "censura",
          ],
          prompt: "Taceo rem compello spectaculum mollitia arcus compello.",
          question: "Attonbitus reprehenderit voro depono constans vehemens.",
          required: false,
          type: "TEXT",
        },
      ],
      skills: [
        "similique",
        "absque",
      ],
      status: "ARCHIVED",
      summary: "Contra damno desolo suadeo utrimque cresco aetas turpis.",
      updatedAt: new Date("2026-03-28T11:35:32.524Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsPatchAtsJob } from "@unified-api/typescript-sdk/funcs/atsPatchAtsJob.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsPatchAtsJob(unifiedTo, {
    atsJob: {
      addresses: [
        {
          address1: "458 E 8th Street",
          city: "Visalia",
          countryCode: "US",
          postalCode: "60669-0678",
          region: "Oregon",
          regionCode: "DE",
        },
      ],
      compensation: [
        {
          currency: "GBP",
          frequency: "DAY",
          max: 174303,
          min: 174042,
          type: "BONUS",
        },
        {
          currency: "KMF",
          frequency: "MONTH",
          max: 171171,
          min: 151975,
          type: "SALARY",
        },
      ],
      createdAt: new Date("2023-06-16T12:51:44.518Z"),
      description: "Senior",
      employmentType: "FREELANCE",
      fees: [
        {
          amount: 35146,
          currency: "AFN",
          type: "CONTINGENCY",
        },
      ],
      hiringManagers: [],
      id: "d2a56245-dbd5-43ac-aa43-789b84bc90a9",
      industry: "Refined Ceramic Keyboard",
      languageLocale: "en",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "79a4bfa2-8541-437e-b7b9-4354361e74ef",
          namespace: "custom",
          slug: "custom_property",
          value: "cursus",
        },
      ],
      minimumDegree: "Bachelor",
      minimumExperienceYears: 3,
      name: "Senior Interactions Developer",
      numberOfOpenings: 1,
      openings: [
        {
          closeReason: "Tolero aequus tamquam inflammatio asporto canis vinitor utrum.",
          openedAt: new Date("2026-07-09T22:19:32.366Z"),
          status: "OPEN",
        },
      ],
      postings: [
        {
          address: {
            address1: "295 First Street",
            city: "East Agustinton",
            countryCode: "US",
            postalCode: "57059",
            region: "Utah",
            regionCode: "NE",
          },
          createdAt: new Date("2026-09-04T16:19:34.346Z"),
          description: "Sublime.",
          id: "5c21ffeb-ae19-4802-919e-a2bcc7a14cc8",
          isActive: false,
          location: "5699 Purdy Motorway",
          name: "Legacy Implementation Orchestrator",
          postingUrl: "https://elementary-privilege.com/",
          updatedAt: new Date("2026-10-01T18:18:40.264Z"),
        },
      ],
      publicJobUrls: [
        "https://parched-dash.info",
        "https://mild-midwife.org/",
      ],
      questions: [
        {
          description: "Capitulus.",
          id: "a0ba8f22-d38f-4325-8f30-5604e56942e8",
          maxLength: 214,
          minLength: 1,
          options: [
            "aetas",
            "vado",
          ],
          prompt: "Agnosco tendo.",
          question: "Deporto tolero.",
          required: true,
          type: "TEXT",
        },
        {
          id: "5e711c92-d2e9-4ab6-b2fc-b60914cb39b8",
          maxLength: 309,
          minLength: 1,
          options: [
            "sodalitas",
          ],
          prompt: "Supra veritatis.",
          question: "Maxime tres tergiversatio tactus vehemens architecto ab nam defetiscor.",
          required: false,
          type: "TEXT",
        },
        {
          description: "Confero trepide.",
          id: "dce2d9e9-379b-48dc-b3c0-f9e0563797fa",
          maxLength: 428,
          minLength: 1,
          options: [
            "censura",
          ],
          prompt: "Taceo rem compello spectaculum mollitia arcus compello.",
          question: "Attonbitus reprehenderit voro depono constans vehemens.",
          required: false,
          type: "TEXT",
        },
      ],
      skills: [
        "similique",
        "absque",
      ],
      status: "ARCHIVED",
      summary: "Contra damno desolo suadeo utrimque cresco aetas turpis.",
      updatedAt: new Date("2026-03-28T11:35:32.524Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsPatchAtsJob failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchAtsJobRequest](../../sdk/models/operations/patchatsjobrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsJob](../../sdk/models/shared/atsjob.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchAtsScorecard

Updates the AtsScorecard identified by `id`. Provide the unified AtsScorecard fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchAtsScorecard" method="patch" path="/ats/{connection_id}/scorecard/{id}" example="ats_scorecard" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.patchAtsScorecard({
    atsScorecard: {
      comment: "Aliquam.",
      createdAt: new Date("2022-02-20T17:09:45.498Z"),
      id: "ac00d7b9-f29e-466b-b562-cf3102d4580e",
      metadata: [],
      questions: [
        {
          description: "Pecto vulpes libero vomer comburo.",
          text: "Desidero modi tamdiu auxilium defessus adimpleo clementia tero.",
        },
        {
          answer: "Conatus cicuta doloremque statua bonus.",
          description: "Aduro viscus celebrer.",
          text: "Decretum.",
        },
      ],
      recommendation: "STRONG_YES",
      updatedAt: new Date("2023-06-15T12:06:36.790Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsPatchAtsScorecard } from "@unified-api/typescript-sdk/funcs/atsPatchAtsScorecard.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsPatchAtsScorecard(unifiedTo, {
    atsScorecard: {
      comment: "Aliquam.",
      createdAt: new Date("2022-02-20T17:09:45.498Z"),
      id: "ac00d7b9-f29e-466b-b562-cf3102d4580e",
      metadata: [],
      questions: [
        {
          description: "Pecto vulpes libero vomer comburo.",
          text: "Desidero modi tamdiu auxilium defessus adimpleo clementia tero.",
        },
        {
          answer: "Conatus cicuta doloremque statua bonus.",
          description: "Aduro viscus celebrer.",
          text: "Decretum.",
        },
      ],
      recommendation: "STRONG_YES",
      updatedAt: new Date("2023-06-15T12:06:36.790Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsPatchAtsScorecard failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchAtsScorecardRequest](../../sdk/models/operations/patchatsscorecardrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsScorecard](../../sdk/models/shared/atsscorecard.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeAtsActivity

Deletes the AtsActivity identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeAtsActivity" method="delete" path="/ats/{connection_id}/activity/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.removeAtsActivity({
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsRemoveAtsActivity } from "@unified-api/typescript-sdk/funcs/atsRemoveAtsActivity.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsRemoveAtsActivity(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsRemoveAtsActivity failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveAtsActivityRequest](../../sdk/models/operations/removeatsactivityrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveAtsActivityResponse](../../sdk/models/operations/removeatsactivityresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeAtsApplication

Deletes the AtsApplication identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeAtsApplication" method="delete" path="/ats/{connection_id}/application/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.removeAtsApplication({
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsRemoveAtsApplication } from "@unified-api/typescript-sdk/funcs/atsRemoveAtsApplication.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsRemoveAtsApplication(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsRemoveAtsApplication failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveAtsApplicationRequest](../../sdk/models/operations/removeatsapplicationrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveAtsApplicationResponse](../../sdk/models/operations/removeatsapplicationresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeAtsCandidate

Deletes the AtsCandidate identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeAtsCandidate" method="delete" path="/ats/{connection_id}/candidate/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.removeAtsCandidate({
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsRemoveAtsCandidate } from "@unified-api/typescript-sdk/funcs/atsRemoveAtsCandidate.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsRemoveAtsCandidate(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsRemoveAtsCandidate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveAtsCandidateRequest](../../sdk/models/operations/removeatscandidaterequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveAtsCandidateResponse](../../sdk/models/operations/removeatscandidateresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeAtsCompany

Deletes the AtsCompany identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeAtsCompany" method="delete" path="/ats/{connection_id}/company/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.removeAtsCompany({
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsRemoveAtsCompany } from "@unified-api/typescript-sdk/funcs/atsRemoveAtsCompany.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsRemoveAtsCompany(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsRemoveAtsCompany failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveAtsCompanyRequest](../../sdk/models/operations/removeatscompanyrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveAtsCompanyResponse](../../sdk/models/operations/removeatscompanyresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeAtsDocument

Deletes the AtsDocument identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeAtsDocument" method="delete" path="/ats/{connection_id}/document/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.removeAtsDocument({
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsRemoveAtsDocument } from "@unified-api/typescript-sdk/funcs/atsRemoveAtsDocument.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsRemoveAtsDocument(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsRemoveAtsDocument failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveAtsDocumentRequest](../../sdk/models/operations/removeatsdocumentrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveAtsDocumentResponse](../../sdk/models/operations/removeatsdocumentresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeAtsInterview

Deletes the AtsInterview identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeAtsInterview" method="delete" path="/ats/{connection_id}/interview/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.removeAtsInterview({
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsRemoveAtsInterview } from "@unified-api/typescript-sdk/funcs/atsRemoveAtsInterview.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsRemoveAtsInterview(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsRemoveAtsInterview failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveAtsInterviewRequest](../../sdk/models/operations/removeatsinterviewrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveAtsInterviewResponse](../../sdk/models/operations/removeatsinterviewresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeAtsJob

Deletes the AtsJob identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeAtsJob" method="delete" path="/ats/{connection_id}/job/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.removeAtsJob({
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsRemoveAtsJob } from "@unified-api/typescript-sdk/funcs/atsRemoveAtsJob.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsRemoveAtsJob(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsRemoveAtsJob failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveAtsJobRequest](../../sdk/models/operations/removeatsjobrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveAtsJobResponse](../../sdk/models/operations/removeatsjobresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeAtsScorecard

Deletes the AtsScorecard identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeAtsScorecard" method="delete" path="/ats/{connection_id}/scorecard/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.removeAtsScorecard({
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsRemoveAtsScorecard } from "@unified-api/typescript-sdk/funcs/atsRemoveAtsScorecard.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsRemoveAtsScorecard(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsRemoveAtsScorecard failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveAtsScorecardRequest](../../sdk/models/operations/removeatsscorecardrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveAtsScorecardResponse](../../sdk/models/operations/removeatsscorecardresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateAtsActivity

Updates the AtsActivity identified by `id`. Provide the unified AtsActivity fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateAtsActivity" method="put" path="/ats/{connection_id}/activity/{id}" example="ats_activity" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.updateAtsActivity({
    atsActivity: {
      createdAt: new Date("2022-08-07T03:16:43.865Z"),
      description: "Reprehenderit.",
      id: "ec303f65-f8cf-4973-a10f-a110d4528a6f",
      isPrivate: false,
      metadata: [
        {
          extraData: {

          },
          format: "TEXT",
          id: "ba679995-d117-4601-a31d-d67b39efbd82",
          namespace: "activity",
          slug: "verto",
          value: "Sint varietas officia aequus stillicidium vereor victus tricesimus vester.",
        },
      ],
      subType: "TASK",
      title: "Amplus sapiente cimentarius.",
      type: "TASK",
      updatedAt: new Date("2026-05-05T14:37:08.517Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsUpdateAtsActivity } from "@unified-api/typescript-sdk/funcs/atsUpdateAtsActivity.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsUpdateAtsActivity(unifiedTo, {
    atsActivity: {
      createdAt: new Date("2022-08-07T03:16:43.865Z"),
      description: "Reprehenderit.",
      id: "ec303f65-f8cf-4973-a10f-a110d4528a6f",
      isPrivate: false,
      metadata: [
        {
          extraData: {
  
          },
          format: "TEXT",
          id: "ba679995-d117-4601-a31d-d67b39efbd82",
          namespace: "activity",
          slug: "verto",
          value: "Sint varietas officia aequus stillicidium vereor victus tricesimus vester.",
        },
      ],
      subType: "TASK",
      title: "Amplus sapiente cimentarius.",
      type: "TASK",
      updatedAt: new Date("2026-05-05T14:37:08.517Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsUpdateAtsActivity failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateAtsActivityRequest](../../sdk/models/operations/updateatsactivityrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsActivity](../../sdk/models/shared/atsactivity.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateAtsApplication

Updates the AtsApplication identified by `id`. Provide the unified AtsApplication fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateAtsApplication" method="put" path="/ats/{connection_id}/application/{id}" example="ats_application" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.updateAtsApplication({
    atsApplication: {
      answers: [],
      appliedAt: new Date("2025-10-23T03:30:17.763Z"),
      createdAt: new Date("2023-10-17T07:19:48.787Z"),
      hiredAt: new Date("2026-06-12T12:10:08.062Z"),
      id: "6551ad54-8e3f-4479-a5e0-9cba63b53152",
      metadata: [
        {
          extraData: {

          },
          format: "TEXT",
          id: "67df4fdf-8807-4dc5-87ad-dfc267b63885",
          namespace: "application",
          slug: "arguo",
          value: "Defessus occaecati adflicto caecus claustrum annus addo.",
        },
      ],
      offers: [],
      originalStatus: "caput",
      originalSubstatus: "admiratio",
      rejectedAt: new Date("2026-11-16T06:04:36.382Z"),
      rejectedReason: "Talio credo vomica allatus stella.",
      source: "alii",
      status: "REVIEWING",
      summary: "Crebro nostrum alias sponte turbo sopor vergo surculus nam copiose. Enim casso cursus aestus deprecator. Despecto tabella argentum decretum cultellus aveho distinctio verecundia stella.",
      updatedAt: new Date("2026-11-23T07:41:37.005Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsUpdateAtsApplication } from "@unified-api/typescript-sdk/funcs/atsUpdateAtsApplication.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsUpdateAtsApplication(unifiedTo, {
    atsApplication: {
      answers: [],
      appliedAt: new Date("2025-10-23T03:30:17.763Z"),
      createdAt: new Date("2023-10-17T07:19:48.787Z"),
      hiredAt: new Date("2026-06-12T12:10:08.062Z"),
      id: "6551ad54-8e3f-4479-a5e0-9cba63b53152",
      metadata: [
        {
          extraData: {
  
          },
          format: "TEXT",
          id: "67df4fdf-8807-4dc5-87ad-dfc267b63885",
          namespace: "application",
          slug: "arguo",
          value: "Defessus occaecati adflicto caecus claustrum annus addo.",
        },
      ],
      offers: [],
      originalStatus: "caput",
      originalSubstatus: "admiratio",
      rejectedAt: new Date("2026-11-16T06:04:36.382Z"),
      rejectedReason: "Talio credo vomica allatus stella.",
      source: "alii",
      status: "REVIEWING",
      summary: "Crebro nostrum alias sponte turbo sopor vergo surculus nam copiose. Enim casso cursus aestus deprecator. Despecto tabella argentum decretum cultellus aveho distinctio verecundia stella.",
      updatedAt: new Date("2026-11-23T07:41:37.005Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsUpdateAtsApplication failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateAtsApplicationRequest](../../sdk/models/operations/updateatsapplicationrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsApplication](../../sdk/models/shared/atsapplication.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateAtsCandidate

Updates the AtsCandidate identified by `id`. Provide the unified AtsCandidate fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateAtsCandidate" method="put" path="/ats/{connection_id}/candidate/{id}" example="ats_candidate" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.updateAtsCandidate({
    atsCandidate: {
      address: {
        address1: "699 Legros Falls",
        city: "New Albertoboro",
        countryCode: "US",
        postalCode: "85550-0688",
        region: "Minnesota",
        regionCode: "WY",
      },
      companyName: "Doyle-Kutch LLC",
      createdAt: new Date("2023-10-16T05:42:56.049Z"),
      dateOfBirth: new Date("1994-07-05T19:48:57.631Z"),
      education: [
        {
          degree: "wilt powerfully",
          endAt: new Date("1978-04-14T07:58:36.326Z"),
          fieldOfStudy: "totam",
          institution: "Wunsch - Grimes-Heller",
          level: "phd",
          startAt: new Date("1994-06-09T13:31:39.059Z"),
        },
        {
          degree: "substantial yum",
          endAt: new Date("1989-09-06T03:32:39.901Z"),
          fieldOfStudy: "commodi",
          institution: "Franecki and Sons",
          level: "highschool",
          startAt: new Date("1992-11-28T20:23:20.311Z"),
        },
      ],
      emails: [
        {
          email: "alyce.rempel@outlook.com",
          name: "Alyce Rempel",
          type: "HOME",
        },
      ],
      experiences: [
        {
          companyName: "Mayert - Rohan",
          endAt: new Date("1974-03-01T17:02:58.824Z"),
          startAt: new Date("1999-09-21T22:12:51.663Z"),
          title: "Central Response Designer",
        },
        {
          companyName: "Padberg, Keeling and Franey",
          endAt: new Date("2004-10-14T14:01:00.717Z"),
          startAt: new Date("1996-12-15T04:12:04.582Z"),
          title: "Central Communications Producer",
        },
      ],
      firstName: "Alyce",
      hasDoNotContact: false,
      id: "904474f1-bdb2-42c8-81d8-54d8b373d895",
      imageUrl: "https://avatars.githubusercontent.com/u/99913246",
      isPrivate: true,
      jobIds: [],
      lastName: "Rempel",
      linkUrls: [
        "https://www.linkedin.com/in/alyce-rempel",
      ],
      metadata: [
        {
          extraData: {

          },
          format: "TEXT",
          id: "6c5029ca-867a-4895-8e02-785db7dfb971",
          namespace: "custom",
          slug: "custom_field",
          value: "chirographum",
        },
      ],
      name: "Alyce Rempel",
      origin: "AGENCY",
      skills: [
        "curvo",
        "voveo",
      ],
      sources: [
        "tripudio",
        "volup",
      ],
      summary: "Spero nostrum damnatio averto pecus cervus aspicio. Stabilis thesis admiratio. Acquiro sperno voluptate laboriosam comitatus teres doloribus canonicus considero tersus.",
      tags: [
        "alo",
      ],
      telephones: [
        {
          telephone: "(251) 489-6457",
          type: "MOBILE",
        },
      ],
      title: "Internal Paradigm Consultant",
      updatedAt: new Date("2024-05-05T03:18:50.608Z"),
      webUrl: "https://light-meander.com/",
    },
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsUpdateAtsCandidate } from "@unified-api/typescript-sdk/funcs/atsUpdateAtsCandidate.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsUpdateAtsCandidate(unifiedTo, {
    atsCandidate: {
      address: {
        address1: "699 Legros Falls",
        city: "New Albertoboro",
        countryCode: "US",
        postalCode: "85550-0688",
        region: "Minnesota",
        regionCode: "WY",
      },
      companyName: "Doyle-Kutch LLC",
      createdAt: new Date("2023-10-16T05:42:56.049Z"),
      dateOfBirth: new Date("1994-07-05T19:48:57.631Z"),
      education: [
        {
          degree: "wilt powerfully",
          endAt: new Date("1978-04-14T07:58:36.326Z"),
          fieldOfStudy: "totam",
          institution: "Wunsch - Grimes-Heller",
          level: "phd",
          startAt: new Date("1994-06-09T13:31:39.059Z"),
        },
        {
          degree: "substantial yum",
          endAt: new Date("1989-09-06T03:32:39.901Z"),
          fieldOfStudy: "commodi",
          institution: "Franecki and Sons",
          level: "highschool",
          startAt: new Date("1992-11-28T20:23:20.311Z"),
        },
      ],
      emails: [
        {
          email: "alyce.rempel@outlook.com",
          name: "Alyce Rempel",
          type: "HOME",
        },
      ],
      experiences: [
        {
          companyName: "Mayert - Rohan",
          endAt: new Date("1974-03-01T17:02:58.824Z"),
          startAt: new Date("1999-09-21T22:12:51.663Z"),
          title: "Central Response Designer",
        },
        {
          companyName: "Padberg, Keeling and Franey",
          endAt: new Date("2004-10-14T14:01:00.717Z"),
          startAt: new Date("1996-12-15T04:12:04.582Z"),
          title: "Central Communications Producer",
        },
      ],
      firstName: "Alyce",
      hasDoNotContact: false,
      id: "904474f1-bdb2-42c8-81d8-54d8b373d895",
      imageUrl: "https://avatars.githubusercontent.com/u/99913246",
      isPrivate: true,
      jobIds: [],
      lastName: "Rempel",
      linkUrls: [
        "https://www.linkedin.com/in/alyce-rempel",
      ],
      metadata: [
        {
          extraData: {
  
          },
          format: "TEXT",
          id: "6c5029ca-867a-4895-8e02-785db7dfb971",
          namespace: "custom",
          slug: "custom_field",
          value: "chirographum",
        },
      ],
      name: "Alyce Rempel",
      origin: "AGENCY",
      skills: [
        "curvo",
        "voveo",
      ],
      sources: [
        "tripudio",
        "volup",
      ],
      summary: "Spero nostrum damnatio averto pecus cervus aspicio. Stabilis thesis admiratio. Acquiro sperno voluptate laboriosam comitatus teres doloribus canonicus considero tersus.",
      tags: [
        "alo",
      ],
      telephones: [
        {
          telephone: "(251) 489-6457",
          type: "MOBILE",
        },
      ],
      title: "Internal Paradigm Consultant",
      updatedAt: new Date("2024-05-05T03:18:50.608Z"),
      webUrl: "https://light-meander.com/",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsUpdateAtsCandidate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateAtsCandidateRequest](../../sdk/models/operations/updateatscandidaterequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsCandidate](../../sdk/models/shared/atscandidate.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateAtsCompany

Updates the AtsCompany identified by `id`. Provide the unified AtsCompany fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateAtsCompany" method="put" path="/ats/{connection_id}/company/{id}" example="ats_company" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.updateAtsCompany({
    atsCompany: {
      createdAt: new Date("2019-04-22T03:50:02.920Z"),
      fees: [
        {
          percentage: 23,
          type: "CONTINGENCY",
        },
      ],
      id: "d77048a1-a7f6-401e-b0f2-c52ac8deb2d8",
      name: "Streich, Mohr and Barton",
      phone: "245-586-5728 x0090",
      updatedAt: new Date("2020-10-08T02:50:57.047Z"),
      websiteUrl: "https://www.streichmohr.com",
    },
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsUpdateAtsCompany } from "@unified-api/typescript-sdk/funcs/atsUpdateAtsCompany.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsUpdateAtsCompany(unifiedTo, {
    atsCompany: {
      createdAt: new Date("2019-04-22T03:50:02.920Z"),
      fees: [
        {
          percentage: 23,
          type: "CONTINGENCY",
        },
      ],
      id: "d77048a1-a7f6-401e-b0f2-c52ac8deb2d8",
      name: "Streich, Mohr and Barton",
      phone: "245-586-5728 x0090",
      updatedAt: new Date("2020-10-08T02:50:57.047Z"),
      websiteUrl: "https://www.streichmohr.com",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsUpdateAtsCompany failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateAtsCompanyRequest](../../sdk/models/operations/updateatscompanyrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsCompany](../../sdk/models/shared/atscompany.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateAtsDocument

Updates the AtsDocument identified by `id`. Provide the unified AtsDocument fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateAtsDocument" method="put" path="/ats/{connection_id}/document/{id}" example="ats_document" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.updateAtsDocument({
    atsDocument: {
      createdAt: new Date("2021-08-20T08:00:27.437Z"),
      documentUrl: "https://thin-video.org/",
      filename: "reggie_langosh_resume.pdf",
      id: "049106d4-2741-4586-a2ec-17b51be0c62f",
      metadata: [],
      type: "COVER_LETTER",
      updatedAt: new Date("2022-12-16T05:59:29.076Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsUpdateAtsDocument } from "@unified-api/typescript-sdk/funcs/atsUpdateAtsDocument.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsUpdateAtsDocument(unifiedTo, {
    atsDocument: {
      createdAt: new Date("2021-08-20T08:00:27.437Z"),
      documentUrl: "https://thin-video.org/",
      filename: "reggie_langosh_resume.pdf",
      id: "049106d4-2741-4586-a2ec-17b51be0c62f",
      metadata: [],
      type: "COVER_LETTER",
      updatedAt: new Date("2022-12-16T05:59:29.076Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsUpdateAtsDocument failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateAtsDocumentRequest](../../sdk/models/operations/updateatsdocumentrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsDocument](../../sdk/models/shared/atsdocument.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateAtsInterview

Updates the AtsInterview identified by `id`. Provide the unified AtsInterview fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateAtsInterview" method="put" path="/ats/{connection_id}/interview/{id}" example="ats_interview" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.updateAtsInterview({
    atsInterview: {
      createdAt: new Date("2021-11-28T03:14:47.774Z"),
      endAt: new Date("2021-12-08T06:33:19.583Z"),
      id: "a01386e8-361d-4cc2-9101-0965ba8a9927",
      location: "9604 S Pine Street",
      meetingUrl: "https://gummy-battle.name/",
      metadata: [],
      startAt: new Date("2021-12-08T06:03:19.583Z"),
      status: "SCHEDULED",
      updatedAt: new Date("2023-10-07T01:56:58.695Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsUpdateAtsInterview } from "@unified-api/typescript-sdk/funcs/atsUpdateAtsInterview.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsUpdateAtsInterview(unifiedTo, {
    atsInterview: {
      createdAt: new Date("2021-11-28T03:14:47.774Z"),
      endAt: new Date("2021-12-08T06:33:19.583Z"),
      id: "a01386e8-361d-4cc2-9101-0965ba8a9927",
      location: "9604 S Pine Street",
      meetingUrl: "https://gummy-battle.name/",
      metadata: [],
      startAt: new Date("2021-12-08T06:03:19.583Z"),
      status: "SCHEDULED",
      updatedAt: new Date("2023-10-07T01:56:58.695Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsUpdateAtsInterview failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateAtsInterviewRequest](../../sdk/models/operations/updateatsinterviewrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsInterview](../../sdk/models/shared/atsinterview.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateAtsJob

Updates the AtsJob identified by `id`. Provide the unified AtsJob fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateAtsJob" method="put" path="/ats/{connection_id}/job/{id}" example="ats_job" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.updateAtsJob({
    atsJob: {
      addresses: [
        {
          address1: "458 E 8th Street",
          city: "Visalia",
          countryCode: "US",
          postalCode: "60669-0678",
          region: "Oregon",
          regionCode: "DE",
        },
      ],
      compensation: [
        {
          currency: "GBP",
          frequency: "DAY",
          max: 174303,
          min: 174042,
          type: "BONUS",
        },
        {
          currency: "KMF",
          frequency: "MONTH",
          max: 171171,
          min: 151975,
          type: "SALARY",
        },
      ],
      createdAt: new Date("2023-06-16T12:51:44.518Z"),
      description: "Senior",
      employmentType: "FREELANCE",
      fees: [
        {
          amount: 35146,
          currency: "AFN",
          type: "CONTINGENCY",
        },
      ],
      hiringManagers: [],
      id: "d2a56245-dbd5-43ac-aa43-789b84bc90a9",
      industry: "Refined Ceramic Keyboard",
      languageLocale: "en",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "79a4bfa2-8541-437e-b7b9-4354361e74ef",
          namespace: "custom",
          slug: "custom_property",
          value: "cursus",
        },
      ],
      minimumDegree: "Bachelor",
      minimumExperienceYears: 3,
      name: "Senior Interactions Developer",
      numberOfOpenings: 1,
      openings: [
        {
          closeReason: "Tolero aequus tamquam inflammatio asporto canis vinitor utrum.",
          openedAt: new Date("2026-07-09T22:19:32.366Z"),
          status: "OPEN",
        },
      ],
      postings: [
        {
          address: {
            address1: "295 First Street",
            city: "East Agustinton",
            countryCode: "US",
            postalCode: "57059",
            region: "Utah",
            regionCode: "NE",
          },
          createdAt: new Date("2026-09-04T16:19:34.346Z"),
          description: "Sublime.",
          id: "5c21ffeb-ae19-4802-919e-a2bcc7a14cc8",
          isActive: false,
          location: "5699 Purdy Motorway",
          name: "Legacy Implementation Orchestrator",
          postingUrl: "https://elementary-privilege.com/",
          updatedAt: new Date("2026-10-01T18:18:40.264Z"),
        },
      ],
      publicJobUrls: [
        "https://parched-dash.info",
        "https://mild-midwife.org/",
      ],
      questions: [
        {
          description: "Capitulus.",
          id: "a0ba8f22-d38f-4325-8f30-5604e56942e8",
          maxLength: 214,
          minLength: 1,
          options: [
            "aetas",
            "vado",
          ],
          prompt: "Agnosco tendo.",
          question: "Deporto tolero.",
          required: true,
          type: "TEXT",
        },
        {
          id: "5e711c92-d2e9-4ab6-b2fc-b60914cb39b8",
          maxLength: 309,
          minLength: 1,
          options: [
            "sodalitas",
          ],
          prompt: "Supra veritatis.",
          question: "Maxime tres tergiversatio tactus vehemens architecto ab nam defetiscor.",
          required: false,
          type: "TEXT",
        },
        {
          description: "Confero trepide.",
          id: "dce2d9e9-379b-48dc-b3c0-f9e0563797fa",
          maxLength: 428,
          minLength: 1,
          options: [
            "censura",
          ],
          prompt: "Taceo rem compello spectaculum mollitia arcus compello.",
          question: "Attonbitus reprehenderit voro depono constans vehemens.",
          required: false,
          type: "TEXT",
        },
      ],
      skills: [
        "similique",
        "absque",
      ],
      status: "ARCHIVED",
      summary: "Contra damno desolo suadeo utrimque cresco aetas turpis.",
      updatedAt: new Date("2026-03-28T11:35:32.524Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsUpdateAtsJob } from "@unified-api/typescript-sdk/funcs/atsUpdateAtsJob.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsUpdateAtsJob(unifiedTo, {
    atsJob: {
      addresses: [
        {
          address1: "458 E 8th Street",
          city: "Visalia",
          countryCode: "US",
          postalCode: "60669-0678",
          region: "Oregon",
          regionCode: "DE",
        },
      ],
      compensation: [
        {
          currency: "GBP",
          frequency: "DAY",
          max: 174303,
          min: 174042,
          type: "BONUS",
        },
        {
          currency: "KMF",
          frequency: "MONTH",
          max: 171171,
          min: 151975,
          type: "SALARY",
        },
      ],
      createdAt: new Date("2023-06-16T12:51:44.518Z"),
      description: "Senior",
      employmentType: "FREELANCE",
      fees: [
        {
          amount: 35146,
          currency: "AFN",
          type: "CONTINGENCY",
        },
      ],
      hiringManagers: [],
      id: "d2a56245-dbd5-43ac-aa43-789b84bc90a9",
      industry: "Refined Ceramic Keyboard",
      languageLocale: "en",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "79a4bfa2-8541-437e-b7b9-4354361e74ef",
          namespace: "custom",
          slug: "custom_property",
          value: "cursus",
        },
      ],
      minimumDegree: "Bachelor",
      minimumExperienceYears: 3,
      name: "Senior Interactions Developer",
      numberOfOpenings: 1,
      openings: [
        {
          closeReason: "Tolero aequus tamquam inflammatio asporto canis vinitor utrum.",
          openedAt: new Date("2026-07-09T22:19:32.366Z"),
          status: "OPEN",
        },
      ],
      postings: [
        {
          address: {
            address1: "295 First Street",
            city: "East Agustinton",
            countryCode: "US",
            postalCode: "57059",
            region: "Utah",
            regionCode: "NE",
          },
          createdAt: new Date("2026-09-04T16:19:34.346Z"),
          description: "Sublime.",
          id: "5c21ffeb-ae19-4802-919e-a2bcc7a14cc8",
          isActive: false,
          location: "5699 Purdy Motorway",
          name: "Legacy Implementation Orchestrator",
          postingUrl: "https://elementary-privilege.com/",
          updatedAt: new Date("2026-10-01T18:18:40.264Z"),
        },
      ],
      publicJobUrls: [
        "https://parched-dash.info",
        "https://mild-midwife.org/",
      ],
      questions: [
        {
          description: "Capitulus.",
          id: "a0ba8f22-d38f-4325-8f30-5604e56942e8",
          maxLength: 214,
          minLength: 1,
          options: [
            "aetas",
            "vado",
          ],
          prompt: "Agnosco tendo.",
          question: "Deporto tolero.",
          required: true,
          type: "TEXT",
        },
        {
          id: "5e711c92-d2e9-4ab6-b2fc-b60914cb39b8",
          maxLength: 309,
          minLength: 1,
          options: [
            "sodalitas",
          ],
          prompt: "Supra veritatis.",
          question: "Maxime tres tergiversatio tactus vehemens architecto ab nam defetiscor.",
          required: false,
          type: "TEXT",
        },
        {
          description: "Confero trepide.",
          id: "dce2d9e9-379b-48dc-b3c0-f9e0563797fa",
          maxLength: 428,
          minLength: 1,
          options: [
            "censura",
          ],
          prompt: "Taceo rem compello spectaculum mollitia arcus compello.",
          question: "Attonbitus reprehenderit voro depono constans vehemens.",
          required: false,
          type: "TEXT",
        },
      ],
      skills: [
        "similique",
        "absque",
      ],
      status: "ARCHIVED",
      summary: "Contra damno desolo suadeo utrimque cresco aetas turpis.",
      updatedAt: new Date("2026-03-28T11:35:32.524Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsUpdateAtsJob failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateAtsJobRequest](../../sdk/models/operations/updateatsjobrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsJob](../../sdk/models/shared/atsjob.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateAtsScorecard

Updates the AtsScorecard identified by `id`. Provide the unified AtsScorecard fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateAtsScorecard" method="put" path="/ats/{connection_id}/scorecard/{id}" example="ats_scorecard" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.ats.updateAtsScorecard({
    atsScorecard: {
      comment: "Aliquam.",
      createdAt: new Date("2022-02-20T17:09:45.498Z"),
      id: "ac00d7b9-f29e-466b-b562-cf3102d4580e",
      metadata: [],
      questions: [
        {
          description: "Pecto vulpes libero vomer comburo.",
          text: "Desidero modi tamdiu auxilium defessus adimpleo clementia tero.",
        },
        {
          answer: "Conatus cicuta doloremque statua bonus.",
          description: "Aduro viscus celebrer.",
          text: "Decretum.",
        },
      ],
      recommendation: "STRONG_YES",
      updatedAt: new Date("2023-06-15T12:06:36.790Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { atsUpdateAtsScorecard } from "@unified-api/typescript-sdk/funcs/atsUpdateAtsScorecard.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await atsUpdateAtsScorecard(unifiedTo, {
    atsScorecard: {
      comment: "Aliquam.",
      createdAt: new Date("2022-02-20T17:09:45.498Z"),
      id: "ac00d7b9-f29e-466b-b562-cf3102d4580e",
      metadata: [],
      questions: [
        {
          description: "Pecto vulpes libero vomer comburo.",
          text: "Desidero modi tamdiu auxilium defessus adimpleo clementia tero.",
        },
        {
          answer: "Conatus cicuta doloremque statua bonus.",
          description: "Aduro viscus celebrer.",
          text: "Decretum.",
        },
      ],
      recommendation: "STRONG_YES",
      updatedAt: new Date("2023-06-15T12:06:36.790Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("atsUpdateAtsScorecard failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateAtsScorecardRequest](../../sdk/models/operations/updateatsscorecardrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AtsScorecard](../../sdk/models/shared/atsscorecard.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |