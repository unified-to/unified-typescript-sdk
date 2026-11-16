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
      description: "Sapiente.",
      id: "edb1a82f-e39d-449e-bff2-82c6e742f169",
      isPrivate: false,
      metadata: [
        {
          extraData: {

          },
          format: "TEXT",
          id: "2696075e-db73-4dec-ae0e-277eda3b1ad6",
          namespace: "activity",
          slug: "cimentarius",
          value: "Reprehenderit verto.",
        },
      ],
      subType: "TASK",
      title: "Venio blandior aureus.",
      type: "TASK",
      updatedAt: new Date("2026-04-26T21:19:27.945Z"),
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
      description: "Sapiente.",
      id: "edb1a82f-e39d-449e-bff2-82c6e742f169",
      isPrivate: false,
      metadata: [
        {
          extraData: {
  
          },
          format: "TEXT",
          id: "2696075e-db73-4dec-ae0e-277eda3b1ad6",
          namespace: "activity",
          slug: "cimentarius",
          value: "Reprehenderit verto.",
        },
      ],
      subType: "TASK",
      title: "Venio blandior aureus.",
      type: "TASK",
      updatedAt: new Date("2026-04-26T21:19:27.945Z"),
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
      appliedAt: new Date("2025-10-16T15:25:05.423Z"),
      createdAt: new Date("2023-10-17T07:19:48.787Z"),
      hiredAt: new Date("2026-06-03T22:51:37.953Z"),
      id: "78e62de2-f343-4761-a15f-09cb9b611b54",
      metadata: [
        {
          extraData: {

          },
          format: "TEXT",
          id: "1f33ed37-74ad-4e03-8e86-d4daaadece51",
          namespace: "application",
          slug: "stella",
          value: "Caput.",
        },
      ],
      offers: [],
      originalStatus: "vomica",
      originalSubstatus: "allatus",
      rejectedAt: new Date("2026-11-06T07:33:52.142Z"),
      rejectedReason: "Cometes amplitudo videlicet talio.",
      source: "credo",
      status: "REVIEWING",
      summary: "Arguo repudiandae defessus. Adflicto caecus claustrum annus addo vere crebro. Alias sponte turbo sopor vergo surculus nam.",
      updatedAt: new Date("2026-11-13T07:41:03.212Z"),
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
      appliedAt: new Date("2025-10-16T15:25:05.423Z"),
      createdAt: new Date("2023-10-17T07:19:48.787Z"),
      hiredAt: new Date("2026-06-03T22:51:37.953Z"),
      id: "78e62de2-f343-4761-a15f-09cb9b611b54",
      metadata: [
        {
          extraData: {
  
          },
          format: "TEXT",
          id: "1f33ed37-74ad-4e03-8e86-d4daaadece51",
          namespace: "application",
          slug: "stella",
          value: "Caput.",
        },
      ],
      offers: [],
      originalStatus: "vomica",
      originalSubstatus: "allatus",
      rejectedAt: new Date("2026-11-06T07:33:52.142Z"),
      rejectedReason: "Cometes amplitudo videlicet talio.",
      source: "credo",
      status: "REVIEWING",
      summary: "Arguo repudiandae defessus. Adflicto caecus claustrum annus addo vere crebro. Alias sponte turbo sopor vergo surculus nam.",
      updatedAt: new Date("2026-11-13T07:41:03.212Z"),
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
        address1: "6790 S 1st Street",
        city: "Ferrystad",
        countryCode: "US",
        postalCode: "91605",
        region: "Idaho",
        regionCode: "HI",
      },
      companyName: "Lehner and Sons",
      createdAt: new Date("2023-10-16T05:42:56.049Z"),
      dateOfBirth: new Date("1994-07-05T19:48:57.631Z"),
      education: [
        {
          degree: "emphasize tricky",
          endAt: new Date("1978-04-14T07:58:36.326Z"),
          fieldOfStudy: "curtus",
          institution: "Abbott - Batz",
          level: "phd",
          startAt: new Date("1994-06-09T13:31:39.059Z"),
        },
        {
          degree: "blah cappelletti",
          endAt: new Date("1989-09-06T03:32:39.901Z"),
          fieldOfStudy: "crustulum",
          institution: "Herman, Franey and Lebsack",
          level: "highschool",
          startAt: new Date("1992-11-28T20:23:20.311Z"),
        },
      ],
      emails: [
        {
          email: "ardith.beatty@outlook.com",
          name: "Ardith Beatty",
          type: "HOME",
        },
      ],
      experiences: [
        {
          companyName: "Kutch, Lind and Marks",
          endAt: new Date("1974-03-01T17:02:58.824Z"),
          startAt: new Date("1999-09-21T22:12:51.663Z"),
          title: "Lead Security Technician",
        },
        {
          companyName: "Trantow, Sipes and Witting",
          endAt: new Date("2004-10-14T14:01:00.717Z"),
          startAt: new Date("1996-12-15T04:12:04.582Z"),
          title: "Regional Applications Planner",
        },
      ],
      firstName: "Ardith",
      hasDoNotContact: false,
      id: "403e53ae-6d2f-403b-a191-5cb680c10966",
      imageUrl: "https://avatars.githubusercontent.com/u/27464445",
      isPrivate: true,
      jobIds: [],
      lastName: "Beatty",
      linkUrls: [
        "https://www.linkedin.com/in/ardith-beatty",
      ],
      metadata: [
        {
          extraData: {

          },
          format: "TEXT",
          id: "53e07167-7b07-4258-96f5-ee756c5b29ff",
          namespace: "custom",
          slug: "custom_field",
          value: "officia",
        },
      ],
      name: "Ardith Beatty",
      origin: "AGENCY",
      skills: [
        "trepide",
        "voveo",
      ],
      sources: [
        "vesper",
        "utroque",
      ],
      summary: "Laborum trado carcer delibero patruus totam. Vita cohors cariosus trans denego barba rerum similique. Templum totam suus voluptatem cui depraedor virgo cui comminor commodi.",
      tags: [
        "voro",
      ],
      telephones: [
        {
          telephone: "(837) 251-3896",
          type: "MOBILE",
        },
      ],
      title: "Customer Division Producer",
      updatedAt: new Date("2024-05-03T08:35:06.917Z"),
      webUrl: "https://fragrant-husband.net/",
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
        address1: "6790 S 1st Street",
        city: "Ferrystad",
        countryCode: "US",
        postalCode: "91605",
        region: "Idaho",
        regionCode: "HI",
      },
      companyName: "Lehner and Sons",
      createdAt: new Date("2023-10-16T05:42:56.049Z"),
      dateOfBirth: new Date("1994-07-05T19:48:57.631Z"),
      education: [
        {
          degree: "emphasize tricky",
          endAt: new Date("1978-04-14T07:58:36.326Z"),
          fieldOfStudy: "curtus",
          institution: "Abbott - Batz",
          level: "phd",
          startAt: new Date("1994-06-09T13:31:39.059Z"),
        },
        {
          degree: "blah cappelletti",
          endAt: new Date("1989-09-06T03:32:39.901Z"),
          fieldOfStudy: "crustulum",
          institution: "Herman, Franey and Lebsack",
          level: "highschool",
          startAt: new Date("1992-11-28T20:23:20.311Z"),
        },
      ],
      emails: [
        {
          email: "ardith.beatty@outlook.com",
          name: "Ardith Beatty",
          type: "HOME",
        },
      ],
      experiences: [
        {
          companyName: "Kutch, Lind and Marks",
          endAt: new Date("1974-03-01T17:02:58.824Z"),
          startAt: new Date("1999-09-21T22:12:51.663Z"),
          title: "Lead Security Technician",
        },
        {
          companyName: "Trantow, Sipes and Witting",
          endAt: new Date("2004-10-14T14:01:00.717Z"),
          startAt: new Date("1996-12-15T04:12:04.582Z"),
          title: "Regional Applications Planner",
        },
      ],
      firstName: "Ardith",
      hasDoNotContact: false,
      id: "403e53ae-6d2f-403b-a191-5cb680c10966",
      imageUrl: "https://avatars.githubusercontent.com/u/27464445",
      isPrivate: true,
      jobIds: [],
      lastName: "Beatty",
      linkUrls: [
        "https://www.linkedin.com/in/ardith-beatty",
      ],
      metadata: [
        {
          extraData: {
  
          },
          format: "TEXT",
          id: "53e07167-7b07-4258-96f5-ee756c5b29ff",
          namespace: "custom",
          slug: "custom_field",
          value: "officia",
        },
      ],
      name: "Ardith Beatty",
      origin: "AGENCY",
      skills: [
        "trepide",
        "voveo",
      ],
      sources: [
        "vesper",
        "utroque",
      ],
      summary: "Laborum trado carcer delibero patruus totam. Vita cohors cariosus trans denego barba rerum similique. Templum totam suus voluptatem cui depraedor virgo cui comminor commodi.",
      tags: [
        "voro",
      ],
      telephones: [
        {
          telephone: "(837) 251-3896",
          type: "MOBILE",
        },
      ],
      title: "Customer Division Producer",
      updatedAt: new Date("2024-05-03T08:35:06.917Z"),
      webUrl: "https://fragrant-husband.net/",
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
      id: "f2518eda-347b-4c1b-8f53-988a74da9b7e",
      name: "Gulgowski, Dibbert and Wilderman",
      phone: "1-882-360-2010",
      updatedAt: new Date("2020-10-06T04:28:06.650Z"),
      websiteUrl: "https://www.gulgowskidibbert.com",
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
      id: "f2518eda-347b-4c1b-8f53-988a74da9b7e",
      name: "Gulgowski, Dibbert and Wilderman",
      phone: "1-882-360-2010",
      updatedAt: new Date("2020-10-06T04:28:06.650Z"),
      websiteUrl: "https://www.gulgowskidibbert.com",
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
      documentUrl: "https://vengeful-lashes.biz",
      filename: "lonzo_schowalter_resume.pdf",
      id: "facf153e-8795-41c0-8bc4-b7f08cd1063b",
      metadata: [],
      type: "COVER_LETTER",
      updatedAt: new Date("2022-12-13T17:35:49.477Z"),
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
      documentUrl: "https://vengeful-lashes.biz",
      filename: "lonzo_schowalter_resume.pdf",
      id: "facf153e-8795-41c0-8bc4-b7f08cd1063b",
      metadata: [],
      type: "COVER_LETTER",
      updatedAt: new Date("2022-12-13T17:35:49.477Z"),
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
      id: "7aac5907-8751-4216-a230-485732bbc4e3",
      location: "26596 Halle Trafficway",
      meetingUrl: "https://immaculate-foodstuffs.biz",
      metadata: [],
      startAt: new Date("2021-12-08T06:03:19.583Z"),
      status: "SCHEDULED",
      updatedAt: new Date("2023-10-03T08:31:30.305Z"),
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
      id: "7aac5907-8751-4216-a230-485732bbc4e3",
      location: "26596 Halle Trafficway",
      meetingUrl: "https://immaculate-foodstuffs.biz",
      metadata: [],
      startAt: new Date("2021-12-08T06:03:19.583Z"),
      status: "SCHEDULED",
      updatedAt: new Date("2023-10-03T08:31:30.305Z"),
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
          address1: "98097 Carlo Trail",
          city: "South Judd",
          countryCode: "US",
          postalCode: "89776-0669",
          region: "Mississippi",
          regionCode: "FL",
        },
      ],
      compensation: [
        {
          currency: "AUD",
          frequency: "DAY",
          max: 174303,
          min: 174042,
          type: "BONUS",
        },
        {
          currency: "MZN",
          frequency: "MONTH",
          max: 171171,
          min: 151975,
          type: "SALARY",
        },
      ],
      createdAt: new Date("2023-06-16T12:51:44.518Z"),
      description: "Global",
      employmentType: "FREELANCE",
      hiringManagers: [],
      id: "0130c362-92af-43e6-acfe-b6bc69505559",
      industry: "Handcrafted Bamboo Soap",
      languageLocale: "en",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "413fe4e6-2fc7-44ea-ace9-6b767678cdc7",
          namespace: "custom",
          slug: "custom_property",
          value: "desolo",
        },
      ],
      minimumDegree: "Bachelor",
      minimumExperienceYears: 3,
      name: "Forward Brand Producer",
      numberOfOpenings: 1,
      openings: [
        {
          closeReason: "Admoveo trado textilis.",
          openedAt: new Date("2026-07-01T00:20:03.178Z"),
          status: "OPEN",
        },
      ],
      postings: [
        {
          address: {
            address1: "75008 Medhurst Road",
            city: "Madelynnshire",
            countryCode: "US",
            postalCode: "98754",
            region: "Wisconsin",
            regionCode: "CO",
          },
          createdAt: new Date("2026-08-26T07:29:09.689Z"),
          description: "Beatus eum volutabrum balbus victus ipsa tubineus claustrum.",
          id: "9516ebf7-77f8-4920-ade5-4867310cb14f",
          isActive: false,
          location: "1725 Hessel Keys",
          name: "International Identity Manager",
          postingUrl: "https://obedient-yak.com",
          updatedAt: new Date("2026-09-22T04:17:37.238Z"),
        },
      ],
      publicJobUrls: [
        "https://trustworthy-elver.info",
        "https://parched-dash.info",
      ],
      questions: [
        {
          description: "Auctus deporto tolero administratio capitulus animi agnosco tendo aetas vado.",
          id: "f435be8a-04ed-4433-8cc9-808cb9947ab0",
          maxLength: 117,
          minLength: 1,
          options: [
            "tactus",
            "vehemens",
          ],
          prompt: "Totam maxime tres tergiversatio.",
          question: "Doloribus mollitia.",
          required: true,
          type: "TEXT",
        },
        {
          id: "ce1d7dba-2cb1-4f3f-b356-4695eee0a2fa",
          maxLength: 453,
          minLength: 1,
          options: [
            "constans",
          ],
          prompt: "Veritatis sodalitas nemo natus attonbitus reprehenderit voro depono.",
          question: "Nam.",
          required: false,
          type: "TEXT",
        },
        {
          description: "Taceo rem compello spectaculum mollitia arcus compello.",
          id: "f5c6b6ef-f1f6-426d-aed1-464a00ea2c57",
          maxLength: 66,
          minLength: 1,
          options: [
            "repellendus",
          ],
          prompt: "Tum tamisium autus.",
          question: "Confero trepide.",
          required: false,
          type: "TEXT",
        },
      ],
      skills: [
        "suadeo",
        "utrimque",
      ],
      status: "ARCHIVED",
      summary: "Crepusculum adsuesco vere.",
      updatedAt: new Date("2026-03-20T09:22:35.900Z"),
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
          address1: "98097 Carlo Trail",
          city: "South Judd",
          countryCode: "US",
          postalCode: "89776-0669",
          region: "Mississippi",
          regionCode: "FL",
        },
      ],
      compensation: [
        {
          currency: "AUD",
          frequency: "DAY",
          max: 174303,
          min: 174042,
          type: "BONUS",
        },
        {
          currency: "MZN",
          frequency: "MONTH",
          max: 171171,
          min: 151975,
          type: "SALARY",
        },
      ],
      createdAt: new Date("2023-06-16T12:51:44.518Z"),
      description: "Global",
      employmentType: "FREELANCE",
      hiringManagers: [],
      id: "0130c362-92af-43e6-acfe-b6bc69505559",
      industry: "Handcrafted Bamboo Soap",
      languageLocale: "en",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "413fe4e6-2fc7-44ea-ace9-6b767678cdc7",
          namespace: "custom",
          slug: "custom_property",
          value: "desolo",
        },
      ],
      minimumDegree: "Bachelor",
      minimumExperienceYears: 3,
      name: "Forward Brand Producer",
      numberOfOpenings: 1,
      openings: [
        {
          closeReason: "Admoveo trado textilis.",
          openedAt: new Date("2026-07-01T00:20:03.178Z"),
          status: "OPEN",
        },
      ],
      postings: [
        {
          address: {
            address1: "75008 Medhurst Road",
            city: "Madelynnshire",
            countryCode: "US",
            postalCode: "98754",
            region: "Wisconsin",
            regionCode: "CO",
          },
          createdAt: new Date("2026-08-26T07:29:09.689Z"),
          description: "Beatus eum volutabrum balbus victus ipsa tubineus claustrum.",
          id: "9516ebf7-77f8-4920-ade5-4867310cb14f",
          isActive: false,
          location: "1725 Hessel Keys",
          name: "International Identity Manager",
          postingUrl: "https://obedient-yak.com",
          updatedAt: new Date("2026-09-22T04:17:37.238Z"),
        },
      ],
      publicJobUrls: [
        "https://trustworthy-elver.info",
        "https://parched-dash.info",
      ],
      questions: [
        {
          description: "Auctus deporto tolero administratio capitulus animi agnosco tendo aetas vado.",
          id: "f435be8a-04ed-4433-8cc9-808cb9947ab0",
          maxLength: 117,
          minLength: 1,
          options: [
            "tactus",
            "vehemens",
          ],
          prompt: "Totam maxime tres tergiversatio.",
          question: "Doloribus mollitia.",
          required: true,
          type: "TEXT",
        },
        {
          id: "ce1d7dba-2cb1-4f3f-b356-4695eee0a2fa",
          maxLength: 453,
          minLength: 1,
          options: [
            "constans",
          ],
          prompt: "Veritatis sodalitas nemo natus attonbitus reprehenderit voro depono.",
          question: "Nam.",
          required: false,
          type: "TEXT",
        },
        {
          description: "Taceo rem compello spectaculum mollitia arcus compello.",
          id: "f5c6b6ef-f1f6-426d-aed1-464a00ea2c57",
          maxLength: 66,
          minLength: 1,
          options: [
            "repellendus",
          ],
          prompt: "Tum tamisium autus.",
          question: "Confero trepide.",
          required: false,
          type: "TEXT",
        },
      ],
      skills: [
        "suadeo",
        "utrimque",
      ],
      status: "ARCHIVED",
      summary: "Crepusculum adsuesco vere.",
      updatedAt: new Date("2026-03-20T09:22:35.900Z"),
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
      comment: "Maiores enim.",
      createdAt: new Date("2022-02-20T17:09:45.498Z"),
      id: "2516d89a-c01f-4016-bce6-2d611e511450",
      metadata: [],
      questions: [
        {
          description: "Sulum textor eveniet facere vita.",
          text: "Aliquam.",
        },
        {
          answer: "Decretum.",
          description: "Conatus cicuta doloremque statua bonus.",
          text: "Pecto vulpes libero vomer comburo.",
        },
      ],
      recommendation: "STRONG_YES",
      updatedAt: new Date("2023-06-12T17:44:45.421Z"),
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
      comment: "Maiores enim.",
      createdAt: new Date("2022-02-20T17:09:45.498Z"),
      id: "2516d89a-c01f-4016-bce6-2d611e511450",
      metadata: [],
      questions: [
        {
          description: "Sulum textor eveniet facere vita.",
          text: "Aliquam.",
        },
        {
          answer: "Decretum.",
          description: "Conatus cicuta doloremque statua bonus.",
          text: "Pecto vulpes libero vomer comburo.",
        },
      ],
      recommendation: "STRONG_YES",
      updatedAt: new Date("2023-06-12T17:44:45.421Z"),
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
      description: "Sapiente.",
      id: "40923435-83c3-4af1-a772-3c5302e5decc",
      isPrivate: false,
      metadata: [
        {
          extraData: {

          },
          format: "TEXT",
          id: "61c9837b-b331-4047-af96-4c8b96116f26",
          namespace: "activity",
          slug: "cimentarius",
          value: "Reprehenderit verto.",
        },
      ],
      subType: "TASK",
      title: "Venio blandior aureus.",
      type: "TASK",
      updatedAt: new Date("2026-04-26T21:19:27.959Z"),
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
      description: "Sapiente.",
      id: "40923435-83c3-4af1-a772-3c5302e5decc",
      isPrivate: false,
      metadata: [
        {
          extraData: {
  
          },
          format: "TEXT",
          id: "61c9837b-b331-4047-af96-4c8b96116f26",
          namespace: "activity",
          slug: "cimentarius",
          value: "Reprehenderit verto.",
        },
      ],
      subType: "TASK",
      title: "Venio blandior aureus.",
      type: "TASK",
      updatedAt: new Date("2026-04-26T21:19:27.959Z"),
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
      appliedAt: new Date("2025-10-16T15:25:05.432Z"),
      createdAt: new Date("2023-10-17T07:19:48.787Z"),
      hiredAt: new Date("2026-06-03T22:51:37.965Z"),
      id: "08c794ef-ff4e-4f68-b69e-b3889453400f",
      metadata: [
        {
          extraData: {

          },
          format: "TEXT",
          id: "58640206-bfcc-4d02-9c80-40dd977e75b3",
          namespace: "application",
          slug: "stella",
          value: "Caput.",
        },
      ],
      offers: [],
      originalStatus: "vomica",
      originalSubstatus: "allatus",
      rejectedAt: new Date("2026-11-06T07:33:52.157Z"),
      rejectedReason: "Cometes amplitudo videlicet talio.",
      source: "credo",
      status: "REVIEWING",
      summary: "Arguo repudiandae defessus. Adflicto caecus claustrum annus addo vere crebro. Alias sponte turbo sopor vergo surculus nam.",
      updatedAt: new Date("2026-11-13T07:41:03.227Z"),
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
      appliedAt: new Date("2025-10-16T15:25:05.432Z"),
      createdAt: new Date("2023-10-17T07:19:48.787Z"),
      hiredAt: new Date("2026-06-03T22:51:37.965Z"),
      id: "08c794ef-ff4e-4f68-b69e-b3889453400f",
      metadata: [
        {
          extraData: {
  
          },
          format: "TEXT",
          id: "58640206-bfcc-4d02-9c80-40dd977e75b3",
          namespace: "application",
          slug: "stella",
          value: "Caput.",
        },
      ],
      offers: [],
      originalStatus: "vomica",
      originalSubstatus: "allatus",
      rejectedAt: new Date("2026-11-06T07:33:52.157Z"),
      rejectedReason: "Cometes amplitudo videlicet talio.",
      source: "credo",
      status: "REVIEWING",
      summary: "Arguo repudiandae defessus. Adflicto caecus claustrum annus addo vere crebro. Alias sponte turbo sopor vergo surculus nam.",
      updatedAt: new Date("2026-11-13T07:41:03.227Z"),
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
        address1: "6790 S 1st Street",
        city: "Ferrystad",
        countryCode: "US",
        postalCode: "91605",
        region: "Idaho",
        regionCode: "HI",
      },
      companyName: "Lehner and Sons",
      createdAt: new Date("2023-10-16T05:42:56.049Z"),
      dateOfBirth: new Date("1994-07-05T19:48:57.631Z"),
      education: [
        {
          degree: "emphasize tricky",
          endAt: new Date("1978-04-14T07:58:36.326Z"),
          fieldOfStudy: "curtus",
          institution: "Abbott - Batz",
          level: "phd",
          startAt: new Date("1994-06-09T13:31:39.059Z"),
        },
        {
          degree: "blah cappelletti",
          endAt: new Date("1989-09-06T03:32:39.901Z"),
          fieldOfStudy: "crustulum",
          institution: "Herman, Franey and Lebsack",
          level: "highschool",
          startAt: new Date("1992-11-28T20:23:20.311Z"),
        },
      ],
      emails: [
        {
          email: "ardith.beatty@outlook.com",
          name: "Ardith Beatty",
          type: "HOME",
        },
      ],
      experiences: [
        {
          companyName: "Kutch, Lind and Marks",
          endAt: new Date("1974-03-01T17:02:58.824Z"),
          startAt: new Date("1999-09-21T22:12:51.663Z"),
          title: "Lead Security Technician",
        },
        {
          companyName: "Trantow, Sipes and Witting",
          endAt: new Date("2004-10-14T14:01:00.717Z"),
          startAt: new Date("1996-12-15T04:12:04.582Z"),
          title: "Regional Applications Planner",
        },
      ],
      firstName: "Ardith",
      hasDoNotContact: false,
      id: "b48613c0-4018-43a3-b337-e009433f08d9",
      imageUrl: "https://avatars.githubusercontent.com/u/27464445",
      isPrivate: true,
      jobIds: [],
      lastName: "Beatty",
      linkUrls: [
        "https://www.linkedin.com/in/ardith-beatty",
      ],
      metadata: [
        {
          extraData: {

          },
          format: "TEXT",
          id: "db4716a5-33a3-409f-ae79-5c3cc18ec984",
          namespace: "custom",
          slug: "custom_field",
          value: "officia",
        },
      ],
      name: "Ardith Beatty",
      origin: "AGENCY",
      skills: [
        "trepide",
        "voveo",
      ],
      sources: [
        "vesper",
        "utroque",
      ],
      summary: "Laborum trado carcer delibero patruus totam. Vita cohors cariosus trans denego barba rerum similique. Templum totam suus voluptatem cui depraedor virgo cui comminor commodi.",
      tags: [
        "voro",
      ],
      telephones: [
        {
          telephone: "(837) 251-3896",
          type: "MOBILE",
        },
      ],
      title: "Customer Division Producer",
      updatedAt: new Date("2024-05-03T08:35:06.922Z"),
      webUrl: "https://fragrant-husband.net/",
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
        address1: "6790 S 1st Street",
        city: "Ferrystad",
        countryCode: "US",
        postalCode: "91605",
        region: "Idaho",
        regionCode: "HI",
      },
      companyName: "Lehner and Sons",
      createdAt: new Date("2023-10-16T05:42:56.049Z"),
      dateOfBirth: new Date("1994-07-05T19:48:57.631Z"),
      education: [
        {
          degree: "emphasize tricky",
          endAt: new Date("1978-04-14T07:58:36.326Z"),
          fieldOfStudy: "curtus",
          institution: "Abbott - Batz",
          level: "phd",
          startAt: new Date("1994-06-09T13:31:39.059Z"),
        },
        {
          degree: "blah cappelletti",
          endAt: new Date("1989-09-06T03:32:39.901Z"),
          fieldOfStudy: "crustulum",
          institution: "Herman, Franey and Lebsack",
          level: "highschool",
          startAt: new Date("1992-11-28T20:23:20.311Z"),
        },
      ],
      emails: [
        {
          email: "ardith.beatty@outlook.com",
          name: "Ardith Beatty",
          type: "HOME",
        },
      ],
      experiences: [
        {
          companyName: "Kutch, Lind and Marks",
          endAt: new Date("1974-03-01T17:02:58.824Z"),
          startAt: new Date("1999-09-21T22:12:51.663Z"),
          title: "Lead Security Technician",
        },
        {
          companyName: "Trantow, Sipes and Witting",
          endAt: new Date("2004-10-14T14:01:00.717Z"),
          startAt: new Date("1996-12-15T04:12:04.582Z"),
          title: "Regional Applications Planner",
        },
      ],
      firstName: "Ardith",
      hasDoNotContact: false,
      id: "b48613c0-4018-43a3-b337-e009433f08d9",
      imageUrl: "https://avatars.githubusercontent.com/u/27464445",
      isPrivate: true,
      jobIds: [],
      lastName: "Beatty",
      linkUrls: [
        "https://www.linkedin.com/in/ardith-beatty",
      ],
      metadata: [
        {
          extraData: {
  
          },
          format: "TEXT",
          id: "db4716a5-33a3-409f-ae79-5c3cc18ec984",
          namespace: "custom",
          slug: "custom_field",
          value: "officia",
        },
      ],
      name: "Ardith Beatty",
      origin: "AGENCY",
      skills: [
        "trepide",
        "voveo",
      ],
      sources: [
        "vesper",
        "utroque",
      ],
      summary: "Laborum trado carcer delibero patruus totam. Vita cohors cariosus trans denego barba rerum similique. Templum totam suus voluptatem cui depraedor virgo cui comminor commodi.",
      tags: [
        "voro",
      ],
      telephones: [
        {
          telephone: "(837) 251-3896",
          type: "MOBILE",
        },
      ],
      title: "Customer Division Producer",
      updatedAt: new Date("2024-05-03T08:35:06.922Z"),
      webUrl: "https://fragrant-husband.net/",
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
      id: "0cc99dcc-4ccd-4145-9170-465779efefbf",
      name: "Gulgowski, Dibbert and Wilderman",
      phone: "1-882-360-2010",
      updatedAt: new Date("2020-10-06T04:28:06.652Z"),
      websiteUrl: "https://www.gulgowskidibbert.com",
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
      id: "0cc99dcc-4ccd-4145-9170-465779efefbf",
      name: "Gulgowski, Dibbert and Wilderman",
      phone: "1-882-360-2010",
      updatedAt: new Date("2020-10-06T04:28:06.652Z"),
      websiteUrl: "https://www.gulgowskidibbert.com",
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
      documentUrl: "https://vengeful-lashes.biz",
      filename: "lonzo_schowalter_resume.pdf",
      id: "8b17fe9b-f40a-4ce0-94ba-20872d162a8c",
      metadata: [],
      type: "COVER_LETTER",
      updatedAt: new Date("2022-12-13T17:35:49.480Z"),
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
      documentUrl: "https://vengeful-lashes.biz",
      filename: "lonzo_schowalter_resume.pdf",
      id: "8b17fe9b-f40a-4ce0-94ba-20872d162a8c",
      metadata: [],
      type: "COVER_LETTER",
      updatedAt: new Date("2022-12-13T17:35:49.480Z"),
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
      id: "7a396078-3477-4301-b8c5-1d394a42ad3a",
      location: "26596 Halle Trafficway",
      meetingUrl: "https://immaculate-foodstuffs.biz",
      metadata: [],
      startAt: new Date("2021-12-08T06:03:19.583Z"),
      status: "SCHEDULED",
      updatedAt: new Date("2023-10-03T08:31:30.308Z"),
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
      id: "7a396078-3477-4301-b8c5-1d394a42ad3a",
      location: "26596 Halle Trafficway",
      meetingUrl: "https://immaculate-foodstuffs.biz",
      metadata: [],
      startAt: new Date("2021-12-08T06:03:19.583Z"),
      status: "SCHEDULED",
      updatedAt: new Date("2023-10-03T08:31:30.308Z"),
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
          address1: "98097 Carlo Trail",
          city: "South Judd",
          countryCode: "US",
          postalCode: "89776-0669",
          region: "Mississippi",
          regionCode: "FL",
        },
      ],
      compensation: [
        {
          currency: "AUD",
          frequency: "DAY",
          max: 174303,
          min: 174042,
          type: "BONUS",
        },
        {
          currency: "MZN",
          frequency: "MONTH",
          max: 171171,
          min: 151975,
          type: "SALARY",
        },
      ],
      createdAt: new Date("2023-06-16T12:51:44.518Z"),
      description: "Global",
      employmentType: "FREELANCE",
      hiringManagers: [],
      id: "5618d5f8-f089-4b96-93bd-77a945cca8c8",
      industry: "Handcrafted Bamboo Soap",
      languageLocale: "en",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "2d5be9c8-76eb-4701-91f4-0d6916ef2aee",
          namespace: "custom",
          slug: "custom_property",
          value: "desolo",
        },
      ],
      minimumDegree: "Bachelor",
      minimumExperienceYears: 3,
      name: "Forward Brand Producer",
      numberOfOpenings: 1,
      openings: [
        {
          closeReason: "Admoveo trado textilis.",
          openedAt: new Date("2026-07-01T00:20:03.208Z"),
          status: "OPEN",
        },
      ],
      postings: [
        {
          address: {
            address1: "75008 Medhurst Road",
            city: "Madelynnshire",
            countryCode: "US",
            postalCode: "98754",
            region: "Wisconsin",
            regionCode: "CO",
          },
          createdAt: new Date("2026-08-26T07:29:09.720Z"),
          description: "Beatus eum volutabrum balbus victus ipsa tubineus claustrum.",
          id: "144921ca-a715-4f4b-afaf-45070b004fd1",
          isActive: false,
          location: "1725 Hessel Keys",
          name: "International Identity Manager",
          postingUrl: "https://obedient-yak.com",
          updatedAt: new Date("2026-09-22T04:17:37.270Z"),
        },
      ],
      publicJobUrls: [
        "https://trustworthy-elver.info",
        "https://parched-dash.info",
      ],
      questions: [
        {
          description: "Auctus deporto tolero administratio capitulus animi agnosco tendo aetas vado.",
          id: "186018eb-b3fa-408f-8978-cd6fa89ab441",
          maxLength: 117,
          minLength: 1,
          options: [
            "tactus",
            "vehemens",
          ],
          prompt: "Totam maxime tres tergiversatio.",
          question: "Doloribus mollitia.",
          required: true,
          type: "TEXT",
        },
        {
          id: "9c8fa028-8617-4205-a397-407524b8ca21",
          maxLength: 453,
          minLength: 1,
          options: [
            "constans",
          ],
          prompt: "Veritatis sodalitas nemo natus attonbitus reprehenderit voro depono.",
          question: "Nam.",
          required: false,
          type: "TEXT",
        },
        {
          description: "Taceo rem compello spectaculum mollitia arcus compello.",
          id: "b773c366-9f72-4bf3-9741-d6d4c72389b7",
          maxLength: 66,
          minLength: 1,
          options: [
            "repellendus",
          ],
          prompt: "Tum tamisium autus.",
          question: "Confero trepide.",
          required: false,
          type: "TEXT",
        },
      ],
      skills: [
        "suadeo",
        "utrimque",
      ],
      status: "ARCHIVED",
      summary: "Crepusculum adsuesco vere.",
      updatedAt: new Date("2026-03-20T09:22:35.927Z"),
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
          address1: "98097 Carlo Trail",
          city: "South Judd",
          countryCode: "US",
          postalCode: "89776-0669",
          region: "Mississippi",
          regionCode: "FL",
        },
      ],
      compensation: [
        {
          currency: "AUD",
          frequency: "DAY",
          max: 174303,
          min: 174042,
          type: "BONUS",
        },
        {
          currency: "MZN",
          frequency: "MONTH",
          max: 171171,
          min: 151975,
          type: "SALARY",
        },
      ],
      createdAt: new Date("2023-06-16T12:51:44.518Z"),
      description: "Global",
      employmentType: "FREELANCE",
      hiringManagers: [],
      id: "5618d5f8-f089-4b96-93bd-77a945cca8c8",
      industry: "Handcrafted Bamboo Soap",
      languageLocale: "en",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "2d5be9c8-76eb-4701-91f4-0d6916ef2aee",
          namespace: "custom",
          slug: "custom_property",
          value: "desolo",
        },
      ],
      minimumDegree: "Bachelor",
      minimumExperienceYears: 3,
      name: "Forward Brand Producer",
      numberOfOpenings: 1,
      openings: [
        {
          closeReason: "Admoveo trado textilis.",
          openedAt: new Date("2026-07-01T00:20:03.208Z"),
          status: "OPEN",
        },
      ],
      postings: [
        {
          address: {
            address1: "75008 Medhurst Road",
            city: "Madelynnshire",
            countryCode: "US",
            postalCode: "98754",
            region: "Wisconsin",
            regionCode: "CO",
          },
          createdAt: new Date("2026-08-26T07:29:09.720Z"),
          description: "Beatus eum volutabrum balbus victus ipsa tubineus claustrum.",
          id: "144921ca-a715-4f4b-afaf-45070b004fd1",
          isActive: false,
          location: "1725 Hessel Keys",
          name: "International Identity Manager",
          postingUrl: "https://obedient-yak.com",
          updatedAt: new Date("2026-09-22T04:17:37.270Z"),
        },
      ],
      publicJobUrls: [
        "https://trustworthy-elver.info",
        "https://parched-dash.info",
      ],
      questions: [
        {
          description: "Auctus deporto tolero administratio capitulus animi agnosco tendo aetas vado.",
          id: "186018eb-b3fa-408f-8978-cd6fa89ab441",
          maxLength: 117,
          minLength: 1,
          options: [
            "tactus",
            "vehemens",
          ],
          prompt: "Totam maxime tres tergiversatio.",
          question: "Doloribus mollitia.",
          required: true,
          type: "TEXT",
        },
        {
          id: "9c8fa028-8617-4205-a397-407524b8ca21",
          maxLength: 453,
          minLength: 1,
          options: [
            "constans",
          ],
          prompt: "Veritatis sodalitas nemo natus attonbitus reprehenderit voro depono.",
          question: "Nam.",
          required: false,
          type: "TEXT",
        },
        {
          description: "Taceo rem compello spectaculum mollitia arcus compello.",
          id: "b773c366-9f72-4bf3-9741-d6d4c72389b7",
          maxLength: 66,
          minLength: 1,
          options: [
            "repellendus",
          ],
          prompt: "Tum tamisium autus.",
          question: "Confero trepide.",
          required: false,
          type: "TEXT",
        },
      ],
      skills: [
        "suadeo",
        "utrimque",
      ],
      status: "ARCHIVED",
      summary: "Crepusculum adsuesco vere.",
      updatedAt: new Date("2026-03-20T09:22:35.927Z"),
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
      comment: "Maiores enim.",
      createdAt: new Date("2022-02-20T17:09:45.498Z"),
      id: "40f2eaf0-96e8-46b4-bc6b-9e7256b59093",
      metadata: [],
      questions: [
        {
          description: "Sulum textor eveniet facere vita.",
          text: "Aliquam.",
        },
        {
          answer: "Decretum.",
          description: "Conatus cicuta doloremque statua bonus.",
          text: "Pecto vulpes libero vomer comburo.",
        },
      ],
      recommendation: "STRONG_YES",
      updatedAt: new Date("2023-06-12T17:44:45.423Z"),
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
      comment: "Maiores enim.",
      createdAt: new Date("2022-02-20T17:09:45.498Z"),
      id: "40f2eaf0-96e8-46b4-bc6b-9e7256b59093",
      metadata: [],
      questions: [
        {
          description: "Sulum textor eveniet facere vita.",
          text: "Aliquam.",
        },
        {
          answer: "Decretum.",
          description: "Conatus cicuta doloremque statua bonus.",
          text: "Pecto vulpes libero vomer comburo.",
        },
      ],
      recommendation: "STRONG_YES",
      updatedAt: new Date("2023-06-12T17:44:45.423Z"),
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
      description: "Sapiente.",
      id: "40923435-83c3-4af1-a772-3c5302e5decc",
      isPrivate: false,
      metadata: [
        {
          extraData: {

          },
          format: "TEXT",
          id: "61c9837b-b331-4047-af96-4c8b96116f26",
          namespace: "activity",
          slug: "cimentarius",
          value: "Reprehenderit verto.",
        },
      ],
      subType: "TASK",
      title: "Venio blandior aureus.",
      type: "TASK",
      updatedAt: new Date("2026-04-26T21:19:27.959Z"),
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
      description: "Sapiente.",
      id: "40923435-83c3-4af1-a772-3c5302e5decc",
      isPrivate: false,
      metadata: [
        {
          extraData: {
  
          },
          format: "TEXT",
          id: "61c9837b-b331-4047-af96-4c8b96116f26",
          namespace: "activity",
          slug: "cimentarius",
          value: "Reprehenderit verto.",
        },
      ],
      subType: "TASK",
      title: "Venio blandior aureus.",
      type: "TASK",
      updatedAt: new Date("2026-04-26T21:19:27.959Z"),
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
      appliedAt: new Date("2025-10-16T15:25:05.432Z"),
      createdAt: new Date("2023-10-17T07:19:48.787Z"),
      hiredAt: new Date("2026-06-03T22:51:37.965Z"),
      id: "08c794ef-ff4e-4f68-b69e-b3889453400f",
      metadata: [
        {
          extraData: {

          },
          format: "TEXT",
          id: "58640206-bfcc-4d02-9c80-40dd977e75b3",
          namespace: "application",
          slug: "stella",
          value: "Caput.",
        },
      ],
      offers: [],
      originalStatus: "vomica",
      originalSubstatus: "allatus",
      rejectedAt: new Date("2026-11-06T07:33:52.157Z"),
      rejectedReason: "Cometes amplitudo videlicet talio.",
      source: "credo",
      status: "REVIEWING",
      summary: "Arguo repudiandae defessus. Adflicto caecus claustrum annus addo vere crebro. Alias sponte turbo sopor vergo surculus nam.",
      updatedAt: new Date("2026-11-13T07:41:03.227Z"),
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
      appliedAt: new Date("2025-10-16T15:25:05.432Z"),
      createdAt: new Date("2023-10-17T07:19:48.787Z"),
      hiredAt: new Date("2026-06-03T22:51:37.965Z"),
      id: "08c794ef-ff4e-4f68-b69e-b3889453400f",
      metadata: [
        {
          extraData: {
  
          },
          format: "TEXT",
          id: "58640206-bfcc-4d02-9c80-40dd977e75b3",
          namespace: "application",
          slug: "stella",
          value: "Caput.",
        },
      ],
      offers: [],
      originalStatus: "vomica",
      originalSubstatus: "allatus",
      rejectedAt: new Date("2026-11-06T07:33:52.157Z"),
      rejectedReason: "Cometes amplitudo videlicet talio.",
      source: "credo",
      status: "REVIEWING",
      summary: "Arguo repudiandae defessus. Adflicto caecus claustrum annus addo vere crebro. Alias sponte turbo sopor vergo surculus nam.",
      updatedAt: new Date("2026-11-13T07:41:03.227Z"),
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
        address1: "6790 S 1st Street",
        city: "Ferrystad",
        countryCode: "US",
        postalCode: "91605",
        region: "Idaho",
        regionCode: "HI",
      },
      companyName: "Lehner and Sons",
      createdAt: new Date("2023-10-16T05:42:56.049Z"),
      dateOfBirth: new Date("1994-07-05T19:48:57.631Z"),
      education: [
        {
          degree: "emphasize tricky",
          endAt: new Date("1978-04-14T07:58:36.326Z"),
          fieldOfStudy: "curtus",
          institution: "Abbott - Batz",
          level: "phd",
          startAt: new Date("1994-06-09T13:31:39.059Z"),
        },
        {
          degree: "blah cappelletti",
          endAt: new Date("1989-09-06T03:32:39.901Z"),
          fieldOfStudy: "crustulum",
          institution: "Herman, Franey and Lebsack",
          level: "highschool",
          startAt: new Date("1992-11-28T20:23:20.311Z"),
        },
      ],
      emails: [
        {
          email: "ardith.beatty@outlook.com",
          name: "Ardith Beatty",
          type: "HOME",
        },
      ],
      experiences: [
        {
          companyName: "Kutch, Lind and Marks",
          endAt: new Date("1974-03-01T17:02:58.824Z"),
          startAt: new Date("1999-09-21T22:12:51.663Z"),
          title: "Lead Security Technician",
        },
        {
          companyName: "Trantow, Sipes and Witting",
          endAt: new Date("2004-10-14T14:01:00.717Z"),
          startAt: new Date("1996-12-15T04:12:04.582Z"),
          title: "Regional Applications Planner",
        },
      ],
      firstName: "Ardith",
      hasDoNotContact: false,
      id: "b48613c0-4018-43a3-b337-e009433f08d9",
      imageUrl: "https://avatars.githubusercontent.com/u/27464445",
      isPrivate: true,
      jobIds: [],
      lastName: "Beatty",
      linkUrls: [
        "https://www.linkedin.com/in/ardith-beatty",
      ],
      metadata: [
        {
          extraData: {

          },
          format: "TEXT",
          id: "db4716a5-33a3-409f-ae79-5c3cc18ec984",
          namespace: "custom",
          slug: "custom_field",
          value: "officia",
        },
      ],
      name: "Ardith Beatty",
      origin: "AGENCY",
      skills: [
        "trepide",
        "voveo",
      ],
      sources: [
        "vesper",
        "utroque",
      ],
      summary: "Laborum trado carcer delibero patruus totam. Vita cohors cariosus trans denego barba rerum similique. Templum totam suus voluptatem cui depraedor virgo cui comminor commodi.",
      tags: [
        "voro",
      ],
      telephones: [
        {
          telephone: "(837) 251-3896",
          type: "MOBILE",
        },
      ],
      title: "Customer Division Producer",
      updatedAt: new Date("2024-05-03T08:35:06.922Z"),
      webUrl: "https://fragrant-husband.net/",
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
        address1: "6790 S 1st Street",
        city: "Ferrystad",
        countryCode: "US",
        postalCode: "91605",
        region: "Idaho",
        regionCode: "HI",
      },
      companyName: "Lehner and Sons",
      createdAt: new Date("2023-10-16T05:42:56.049Z"),
      dateOfBirth: new Date("1994-07-05T19:48:57.631Z"),
      education: [
        {
          degree: "emphasize tricky",
          endAt: new Date("1978-04-14T07:58:36.326Z"),
          fieldOfStudy: "curtus",
          institution: "Abbott - Batz",
          level: "phd",
          startAt: new Date("1994-06-09T13:31:39.059Z"),
        },
        {
          degree: "blah cappelletti",
          endAt: new Date("1989-09-06T03:32:39.901Z"),
          fieldOfStudy: "crustulum",
          institution: "Herman, Franey and Lebsack",
          level: "highschool",
          startAt: new Date("1992-11-28T20:23:20.311Z"),
        },
      ],
      emails: [
        {
          email: "ardith.beatty@outlook.com",
          name: "Ardith Beatty",
          type: "HOME",
        },
      ],
      experiences: [
        {
          companyName: "Kutch, Lind and Marks",
          endAt: new Date("1974-03-01T17:02:58.824Z"),
          startAt: new Date("1999-09-21T22:12:51.663Z"),
          title: "Lead Security Technician",
        },
        {
          companyName: "Trantow, Sipes and Witting",
          endAt: new Date("2004-10-14T14:01:00.717Z"),
          startAt: new Date("1996-12-15T04:12:04.582Z"),
          title: "Regional Applications Planner",
        },
      ],
      firstName: "Ardith",
      hasDoNotContact: false,
      id: "b48613c0-4018-43a3-b337-e009433f08d9",
      imageUrl: "https://avatars.githubusercontent.com/u/27464445",
      isPrivate: true,
      jobIds: [],
      lastName: "Beatty",
      linkUrls: [
        "https://www.linkedin.com/in/ardith-beatty",
      ],
      metadata: [
        {
          extraData: {
  
          },
          format: "TEXT",
          id: "db4716a5-33a3-409f-ae79-5c3cc18ec984",
          namespace: "custom",
          slug: "custom_field",
          value: "officia",
        },
      ],
      name: "Ardith Beatty",
      origin: "AGENCY",
      skills: [
        "trepide",
        "voveo",
      ],
      sources: [
        "vesper",
        "utroque",
      ],
      summary: "Laborum trado carcer delibero patruus totam. Vita cohors cariosus trans denego barba rerum similique. Templum totam suus voluptatem cui depraedor virgo cui comminor commodi.",
      tags: [
        "voro",
      ],
      telephones: [
        {
          telephone: "(837) 251-3896",
          type: "MOBILE",
        },
      ],
      title: "Customer Division Producer",
      updatedAt: new Date("2024-05-03T08:35:06.922Z"),
      webUrl: "https://fragrant-husband.net/",
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
      id: "0cc99dcc-4ccd-4145-9170-465779efefbf",
      name: "Gulgowski, Dibbert and Wilderman",
      phone: "1-882-360-2010",
      updatedAt: new Date("2020-10-06T04:28:06.652Z"),
      websiteUrl: "https://www.gulgowskidibbert.com",
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
      id: "0cc99dcc-4ccd-4145-9170-465779efefbf",
      name: "Gulgowski, Dibbert and Wilderman",
      phone: "1-882-360-2010",
      updatedAt: new Date("2020-10-06T04:28:06.652Z"),
      websiteUrl: "https://www.gulgowskidibbert.com",
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
      documentUrl: "https://vengeful-lashes.biz",
      filename: "lonzo_schowalter_resume.pdf",
      id: "8b17fe9b-f40a-4ce0-94ba-20872d162a8c",
      metadata: [],
      type: "COVER_LETTER",
      updatedAt: new Date("2022-12-13T17:35:49.480Z"),
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
      documentUrl: "https://vengeful-lashes.biz",
      filename: "lonzo_schowalter_resume.pdf",
      id: "8b17fe9b-f40a-4ce0-94ba-20872d162a8c",
      metadata: [],
      type: "COVER_LETTER",
      updatedAt: new Date("2022-12-13T17:35:49.480Z"),
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
      id: "7a396078-3477-4301-b8c5-1d394a42ad3a",
      location: "26596 Halle Trafficway",
      meetingUrl: "https://immaculate-foodstuffs.biz",
      metadata: [],
      startAt: new Date("2021-12-08T06:03:19.583Z"),
      status: "SCHEDULED",
      updatedAt: new Date("2023-10-03T08:31:30.308Z"),
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
      id: "7a396078-3477-4301-b8c5-1d394a42ad3a",
      location: "26596 Halle Trafficway",
      meetingUrl: "https://immaculate-foodstuffs.biz",
      metadata: [],
      startAt: new Date("2021-12-08T06:03:19.583Z"),
      status: "SCHEDULED",
      updatedAt: new Date("2023-10-03T08:31:30.308Z"),
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
          address1: "98097 Carlo Trail",
          city: "South Judd",
          countryCode: "US",
          postalCode: "89776-0669",
          region: "Mississippi",
          regionCode: "FL",
        },
      ],
      compensation: [
        {
          currency: "AUD",
          frequency: "DAY",
          max: 174303,
          min: 174042,
          type: "BONUS",
        },
        {
          currency: "MZN",
          frequency: "MONTH",
          max: 171171,
          min: 151975,
          type: "SALARY",
        },
      ],
      createdAt: new Date("2023-06-16T12:51:44.518Z"),
      description: "Global",
      employmentType: "FREELANCE",
      hiringManagers: [],
      id: "5618d5f8-f089-4b96-93bd-77a945cca8c8",
      industry: "Handcrafted Bamboo Soap",
      languageLocale: "en",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "2d5be9c8-76eb-4701-91f4-0d6916ef2aee",
          namespace: "custom",
          slug: "custom_property",
          value: "desolo",
        },
      ],
      minimumDegree: "Bachelor",
      minimumExperienceYears: 3,
      name: "Forward Brand Producer",
      numberOfOpenings: 1,
      openings: [
        {
          closeReason: "Admoveo trado textilis.",
          openedAt: new Date("2026-07-01T00:20:03.208Z"),
          status: "OPEN",
        },
      ],
      postings: [
        {
          address: {
            address1: "75008 Medhurst Road",
            city: "Madelynnshire",
            countryCode: "US",
            postalCode: "98754",
            region: "Wisconsin",
            regionCode: "CO",
          },
          createdAt: new Date("2026-08-26T07:29:09.720Z"),
          description: "Beatus eum volutabrum balbus victus ipsa tubineus claustrum.",
          id: "144921ca-a715-4f4b-afaf-45070b004fd1",
          isActive: false,
          location: "1725 Hessel Keys",
          name: "International Identity Manager",
          postingUrl: "https://obedient-yak.com",
          updatedAt: new Date("2026-09-22T04:17:37.270Z"),
        },
      ],
      publicJobUrls: [
        "https://trustworthy-elver.info",
        "https://parched-dash.info",
      ],
      questions: [
        {
          description: "Auctus deporto tolero administratio capitulus animi agnosco tendo aetas vado.",
          id: "186018eb-b3fa-408f-8978-cd6fa89ab441",
          maxLength: 117,
          minLength: 1,
          options: [
            "tactus",
            "vehemens",
          ],
          prompt: "Totam maxime tres tergiversatio.",
          question: "Doloribus mollitia.",
          required: true,
          type: "TEXT",
        },
        {
          id: "9c8fa028-8617-4205-a397-407524b8ca21",
          maxLength: 453,
          minLength: 1,
          options: [
            "constans",
          ],
          prompt: "Veritatis sodalitas nemo natus attonbitus reprehenderit voro depono.",
          question: "Nam.",
          required: false,
          type: "TEXT",
        },
        {
          description: "Taceo rem compello spectaculum mollitia arcus compello.",
          id: "b773c366-9f72-4bf3-9741-d6d4c72389b7",
          maxLength: 66,
          minLength: 1,
          options: [
            "repellendus",
          ],
          prompt: "Tum tamisium autus.",
          question: "Confero trepide.",
          required: false,
          type: "TEXT",
        },
      ],
      skills: [
        "suadeo",
        "utrimque",
      ],
      status: "ARCHIVED",
      summary: "Crepusculum adsuesco vere.",
      updatedAt: new Date("2026-03-20T09:22:35.927Z"),
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
          address1: "98097 Carlo Trail",
          city: "South Judd",
          countryCode: "US",
          postalCode: "89776-0669",
          region: "Mississippi",
          regionCode: "FL",
        },
      ],
      compensation: [
        {
          currency: "AUD",
          frequency: "DAY",
          max: 174303,
          min: 174042,
          type: "BONUS",
        },
        {
          currency: "MZN",
          frequency: "MONTH",
          max: 171171,
          min: 151975,
          type: "SALARY",
        },
      ],
      createdAt: new Date("2023-06-16T12:51:44.518Z"),
      description: "Global",
      employmentType: "FREELANCE",
      hiringManagers: [],
      id: "5618d5f8-f089-4b96-93bd-77a945cca8c8",
      industry: "Handcrafted Bamboo Soap",
      languageLocale: "en",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "2d5be9c8-76eb-4701-91f4-0d6916ef2aee",
          namespace: "custom",
          slug: "custom_property",
          value: "desolo",
        },
      ],
      minimumDegree: "Bachelor",
      minimumExperienceYears: 3,
      name: "Forward Brand Producer",
      numberOfOpenings: 1,
      openings: [
        {
          closeReason: "Admoveo trado textilis.",
          openedAt: new Date("2026-07-01T00:20:03.208Z"),
          status: "OPEN",
        },
      ],
      postings: [
        {
          address: {
            address1: "75008 Medhurst Road",
            city: "Madelynnshire",
            countryCode: "US",
            postalCode: "98754",
            region: "Wisconsin",
            regionCode: "CO",
          },
          createdAt: new Date("2026-08-26T07:29:09.720Z"),
          description: "Beatus eum volutabrum balbus victus ipsa tubineus claustrum.",
          id: "144921ca-a715-4f4b-afaf-45070b004fd1",
          isActive: false,
          location: "1725 Hessel Keys",
          name: "International Identity Manager",
          postingUrl: "https://obedient-yak.com",
          updatedAt: new Date("2026-09-22T04:17:37.270Z"),
        },
      ],
      publicJobUrls: [
        "https://trustworthy-elver.info",
        "https://parched-dash.info",
      ],
      questions: [
        {
          description: "Auctus deporto tolero administratio capitulus animi agnosco tendo aetas vado.",
          id: "186018eb-b3fa-408f-8978-cd6fa89ab441",
          maxLength: 117,
          minLength: 1,
          options: [
            "tactus",
            "vehemens",
          ],
          prompt: "Totam maxime tres tergiversatio.",
          question: "Doloribus mollitia.",
          required: true,
          type: "TEXT",
        },
        {
          id: "9c8fa028-8617-4205-a397-407524b8ca21",
          maxLength: 453,
          minLength: 1,
          options: [
            "constans",
          ],
          prompt: "Veritatis sodalitas nemo natus attonbitus reprehenderit voro depono.",
          question: "Nam.",
          required: false,
          type: "TEXT",
        },
        {
          description: "Taceo rem compello spectaculum mollitia arcus compello.",
          id: "b773c366-9f72-4bf3-9741-d6d4c72389b7",
          maxLength: 66,
          minLength: 1,
          options: [
            "repellendus",
          ],
          prompt: "Tum tamisium autus.",
          question: "Confero trepide.",
          required: false,
          type: "TEXT",
        },
      ],
      skills: [
        "suadeo",
        "utrimque",
      ],
      status: "ARCHIVED",
      summary: "Crepusculum adsuesco vere.",
      updatedAt: new Date("2026-03-20T09:22:35.927Z"),
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
      comment: "Maiores enim.",
      createdAt: new Date("2022-02-20T17:09:45.498Z"),
      id: "40f2eaf0-96e8-46b4-bc6b-9e7256b59093",
      metadata: [],
      questions: [
        {
          description: "Sulum textor eveniet facere vita.",
          text: "Aliquam.",
        },
        {
          answer: "Decretum.",
          description: "Conatus cicuta doloremque statua bonus.",
          text: "Pecto vulpes libero vomer comburo.",
        },
      ],
      recommendation: "STRONG_YES",
      updatedAt: new Date("2023-06-12T17:44:45.423Z"),
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
      comment: "Maiores enim.",
      createdAt: new Date("2022-02-20T17:09:45.498Z"),
      id: "40f2eaf0-96e8-46b4-bc6b-9e7256b59093",
      metadata: [],
      questions: [
        {
          description: "Sulum textor eveniet facere vita.",
          text: "Aliquam.",
        },
        {
          answer: "Decretum.",
          description: "Conatus cicuta doloremque statua bonus.",
          text: "Pecto vulpes libero vomer comburo.",
        },
      ],
      recommendation: "STRONG_YES",
      updatedAt: new Date("2023-06-12T17:44:45.423Z"),
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