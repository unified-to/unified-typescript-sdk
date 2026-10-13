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

Create an activity

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
      bcc: [
        {
          email: "Mabel_Schuppe-Schowalter42@hotmail.com",
          name: "Rochelle Franey-Bechtelar",
          type: "HOME",
        },
      ],
      cc: [
        {
          email: "Sasha24@hotmail.com",
          name: "Dr. Elbert Kuvalis",
          type: "HOME",
        },
        {
          email: "Rosetta_Donnelly@gmail.com",
          name: "Ramon Daniel",
          type: "OTHER",
        },
        {
          email: "Kathryne_Jast@yahoo.com",
          name: "Christian Jacobson",
          type: "OTHER",
        },
        {
          email: "Eldred95@yahoo.com",
          name: "Edna Bogan",
          type: "OTHER",
        },
      ],
      createdAt: new Date("2022-08-07T03:16:43.865Z"),
      description: "Amplus.",
      from: {
        email: "Norwood.Wiza47@yahoo.com",
        name: "Toby Grant",
        type: "OTHER",
      },
      id: "861cbd29-8e28-470e-950d-bf348a9413d6",
      isPrivate: false,
      metadata: [
        {
          extraData: {

          },
          format: "TEXT",
          id: "336a71e4-5bb4-4eb5-a933-5d739c2dc946",
          namespace: "activity",
          slug: "acer",
          value: "Pauci eius cena adamo summisse arguo pectus communis arcesso tergeo.",
        },
        {
          extraData: {

          },
          format: "TEXT",
          id: "67645e20-099a-44c9-a900-01a27abbe104",
          namespace: "activity",
          slug: "tremo",
          value: "Amita delectus dicta temptatio utroque ex.",
        },
      ],
      subType: "TASK",
      title: "Senior Interactions Manager",
      to: [
        {
          email: "Sister91@hotmail.com",
          name: "Eddie Nienow PhD",
          type: "WORK",
        },
      ],
      type: "TASK",
      updatedAt: new Date("2026-03-28T00:44:44.799Z"),
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
      bcc: [
        {
          email: "Mabel_Schuppe-Schowalter42@hotmail.com",
          name: "Rochelle Franey-Bechtelar",
          type: "HOME",
        },
      ],
      cc: [
        {
          email: "Sasha24@hotmail.com",
          name: "Dr. Elbert Kuvalis",
          type: "HOME",
        },
        {
          email: "Rosetta_Donnelly@gmail.com",
          name: "Ramon Daniel",
          type: "OTHER",
        },
        {
          email: "Kathryne_Jast@yahoo.com",
          name: "Christian Jacobson",
          type: "OTHER",
        },
        {
          email: "Eldred95@yahoo.com",
          name: "Edna Bogan",
          type: "OTHER",
        },
      ],
      createdAt: new Date("2022-08-07T03:16:43.865Z"),
      description: "Amplus.",
      from: {
        email: "Norwood.Wiza47@yahoo.com",
        name: "Toby Grant",
        type: "OTHER",
      },
      id: "861cbd29-8e28-470e-950d-bf348a9413d6",
      isPrivate: false,
      metadata: [
        {
          extraData: {
  
          },
          format: "TEXT",
          id: "336a71e4-5bb4-4eb5-a933-5d739c2dc946",
          namespace: "activity",
          slug: "acer",
          value: "Pauci eius cena adamo summisse arguo pectus communis arcesso tergeo.",
        },
        {
          extraData: {
  
          },
          format: "TEXT",
          id: "67645e20-099a-44c9-a900-01a27abbe104",
          namespace: "activity",
          slug: "tremo",
          value: "Amita delectus dicta temptatio utroque ex.",
        },
      ],
      subType: "TASK",
      title: "Senior Interactions Manager",
      to: [
        {
          email: "Sister91@hotmail.com",
          name: "Eddie Nienow PhD",
          type: "WORK",
        },
      ],
      type: "TASK",
      updatedAt: new Date("2026-03-28T00:44:44.799Z"),
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

Create an application

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
      appliedAt: new Date("2025-09-24T09:00:41.589Z"),
      createdAt: new Date("2023-10-17T07:19:48.787Z"),
      hiredAt: new Date("2026-05-05T15:55:48.067Z"),
      id: "53f7ac68-67e1-493d-bdc0-c8955533728b",
      metadata: [
        {
          extraData: {

          },
          format: "TEXT",
          id: "a1302a79-0341-40e6-b91a-daeb95584617",
          namespace: "application",
          slug: "despecto",
          value: "Argentum decretum cultellus aveho distinctio verecundia stella depono.",
        },
      ],
      offers: [],
      originalStatus: "vomica",
      originalSubstatus: "allatus",
      rejectedAt: new Date("2026-10-03T06:57:03.774Z"),
      rejectedReason: "Cometes amplitudo videlicet talio.",
      source: "credo",
      status: "REVIEWING",
      summary: "Comburo quidem vesica vulnus curatio. Appositus amita attonbitus conatus degenero charisma sordeo villa victoria varius. Cenaculum acsi officia.",
      updatedAt: new Date("2026-10-10T01:56:42.205Z"),
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
      appliedAt: new Date("2025-09-24T09:00:41.589Z"),
      createdAt: new Date("2023-10-17T07:19:48.787Z"),
      hiredAt: new Date("2026-05-05T15:55:48.067Z"),
      id: "53f7ac68-67e1-493d-bdc0-c8955533728b",
      metadata: [
        {
          extraData: {
  
          },
          format: "TEXT",
          id: "a1302a79-0341-40e6-b91a-daeb95584617",
          namespace: "application",
          slug: "despecto",
          value: "Argentum decretum cultellus aveho distinctio verecundia stella depono.",
        },
      ],
      offers: [],
      originalStatus: "vomica",
      originalSubstatus: "allatus",
      rejectedAt: new Date("2026-10-03T06:57:03.774Z"),
      rejectedReason: "Cometes amplitudo videlicet talio.",
      source: "credo",
      status: "REVIEWING",
      summary: "Comburo quidem vesica vulnus curatio. Appositus amita attonbitus conatus degenero charisma sordeo villa victoria varius. Cenaculum acsi officia.",
      updatedAt: new Date("2026-10-10T01:56:42.205Z"),
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

Create a candidate

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
        address1: "802 Roberts Squares",
        address2: "Suite 550",
        city: "Lake Raeganside",
        countryCode: "US",
        postalCode: "44530-0054",
        region: "Tennessee",
        regionCode: "NV",
      },
      companyName: "Ferry, Legros and Feest",
      createdAt: new Date("2023-10-16T05:42:56.049Z"),
      education: [
        {
          degree: "mouser throughout",
          endAt: new Date("1992-11-28T20:23:20.311Z"),
          fieldOfStudy: "solutio",
          institution: "Heller - Lubowitz",
          level: "phd",
          startAt: new Date("2001-03-26T08:12:11.510Z"),
        },
      ],
      emails: [
        {
          email: "Ardith.Beatty@hotmail.com",
          name: "Opal Lindgren",
          type: "WORK",
        },
        {
          email: "Ardith_Beatty@gmail.com",
          name: "Kristi Nader",
          type: "OTHER",
        },
      ],
      experiences: [
        {
          companyName: "Donnelly, Buckridge and Steuber",
          endAt: new Date("1978-06-20T02:53:48.383Z"),
          startAt: new Date("1980-02-06T17:16:53.798Z"),
          title: "Principal Brand Strategist",
        },
      ],
      firstName: "Ardith",
      id: "83152783-4890-4769-bbb4-e8ae4ede48cf",
      imageUrl: "https://loremflickr.com/40/3693?lock=5634712403880328",
      jobIds: [],
      lastName: "Beatty",
      linkUrls: [
        "https://sizzling-legislature.com",
        "https://soupy-interchange.net",
        "https://troubled-substitution.info",
      ],
      metadata: [
        {
          extraData: {

          },
          format: "TEXT",
          id: "e7bf50fe-aa60-4824-a346-7fdfaae09d35",
          namespace: "custom",
          slug: "custom_field",
          value: "cariosus",
        },
      ],
      name: "Ardith Beatty",
      origin: "SOURCED",
      skills: [
        "vita",
        "cohors",
      ],
      sources: [
        "tactus",
      ],
      summary: "Denego barba rerum similique via templum totam suus voluptatem. Depraedor virgo cui comminor commodi curvo. Chirographum pax spero nostrum damnatio averto pecus cervus aspicio absens.",
      tags: [
        "aliquid",
      ],
      telephones: [
        {
          telephone: "(779) 296-5994",
          type: "HOME",
        },
      ],
      title: "Principal Implementation Analyst",
      updatedAt: new Date("2024-04-27T06:17:28.483Z"),
      webUrl: "https://expert-lender.name/",
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
        address1: "802 Roberts Squares",
        address2: "Suite 550",
        city: "Lake Raeganside",
        countryCode: "US",
        postalCode: "44530-0054",
        region: "Tennessee",
        regionCode: "NV",
      },
      companyName: "Ferry, Legros and Feest",
      createdAt: new Date("2023-10-16T05:42:56.049Z"),
      education: [
        {
          degree: "mouser throughout",
          endAt: new Date("1992-11-28T20:23:20.311Z"),
          fieldOfStudy: "solutio",
          institution: "Heller - Lubowitz",
          level: "phd",
          startAt: new Date("2001-03-26T08:12:11.510Z"),
        },
      ],
      emails: [
        {
          email: "Ardith.Beatty@hotmail.com",
          name: "Opal Lindgren",
          type: "WORK",
        },
        {
          email: "Ardith_Beatty@gmail.com",
          name: "Kristi Nader",
          type: "OTHER",
        },
      ],
      experiences: [
        {
          companyName: "Donnelly, Buckridge and Steuber",
          endAt: new Date("1978-06-20T02:53:48.383Z"),
          startAt: new Date("1980-02-06T17:16:53.798Z"),
          title: "Principal Brand Strategist",
        },
      ],
      firstName: "Ardith",
      id: "83152783-4890-4769-bbb4-e8ae4ede48cf",
      imageUrl: "https://loremflickr.com/40/3693?lock=5634712403880328",
      jobIds: [],
      lastName: "Beatty",
      linkUrls: [
        "https://sizzling-legislature.com",
        "https://soupy-interchange.net",
        "https://troubled-substitution.info",
      ],
      metadata: [
        {
          extraData: {
  
          },
          format: "TEXT",
          id: "e7bf50fe-aa60-4824-a346-7fdfaae09d35",
          namespace: "custom",
          slug: "custom_field",
          value: "cariosus",
        },
      ],
      name: "Ardith Beatty",
      origin: "SOURCED",
      skills: [
        "vita",
        "cohors",
      ],
      sources: [
        "tactus",
      ],
      summary: "Denego barba rerum similique via templum totam suus voluptatem. Depraedor virgo cui comminor commodi curvo. Chirographum pax spero nostrum damnatio averto pecus cervus aspicio absens.",
      tags: [
        "aliquid",
      ],
      telephones: [
        {
          telephone: "(779) 296-5994",
          type: "HOME",
        },
      ],
      title: "Principal Implementation Analyst",
      updatedAt: new Date("2024-04-27T06:17:28.483Z"),
      webUrl: "https://expert-lender.name/",
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

Create a company

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
      id: "54db26a5-48a9-432d-9d1e-cfb23687dedc",
      name: "Gulgowski, Dibbert and Wilderman",
      phone: "1-602-210-4548",
      updatedAt: new Date("2020-09-29T13:40:16.875Z"),
      websiteUrl: "https://somber-substitution.com/",
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
      id: "54db26a5-48a9-432d-9d1e-cfb23687dedc",
      name: "Gulgowski, Dibbert and Wilderman",
      phone: "1-602-210-4548",
      updatedAt: new Date("2020-09-29T13:40:16.875Z"),
      websiteUrl: "https://somber-substitution.com/",
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

Create a document

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
      filename: "bah_white_frantically.bz",
      id: "3281820e-ab2a-43c9-aff1-d4d9575da3cd",
      type: "RESUME",
      updatedAt: new Date("2022-12-05T02:49:12.731Z"),
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
      filename: "bah_white_frantically.bz",
      id: "3281820e-ab2a-43c9-aff1-d4d9575da3cd",
      type: "RESUME",
      updatedAt: new Date("2022-12-05T02:49:12.731Z"),
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

Create an interview

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
      endAt: new Date("2025-10-12T23:07:21.357Z"),
      externalEventXref: "725bb1dc-0b66-4a13-b4c8-8258d433bd06",
      id: "9ac0f74c-e8a7-4063-994c-713079bb165c",
      location: "26596 Halle Trafficway",
      startAt: new Date("2025-06-06T02:22:21.425Z"),
      status: "SCHEDULED",
      updatedAt: new Date("2026-02-25T12:33:27.709Z"),
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
      endAt: new Date("2025-10-12T23:07:21.357Z"),
      externalEventXref: "725bb1dc-0b66-4a13-b4c8-8258d433bd06",
      id: "9ac0f74c-e8a7-4063-994c-713079bb165c",
      location: "26596 Halle Trafficway",
      startAt: new Date("2025-06-06T02:22:21.425Z"),
      status: "SCHEDULED",
      updatedAt: new Date("2026-02-25T12:33:27.709Z"),
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

Create a job

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
      hiringManagers: [
        {
          id: "eb3bbf4e-4022-4122-9d44-39fd5b501e80",
          name: "Troy Greenholt",
        },
      ],
      id: "9be540e0-52d9-49cb-b557-ee9f5541d7d7",
      industry: "Modern Granite Gloves",
      languageLocale: "en",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "3ff8edbe-ff03-4d11-ba5b-b936c9e87986",
          namespace: "custom",
          slug: "custom_property",
          value: "vomica",
        },
      ],
      minimumDegree: "Bachelor",
      minimumExperienceYears: 3,
      name: "Forward Brand Producer",
      numberOfOpenings: 1,
      openings: [
        {
          closeReason: "Admoveo trado textilis.",
          openedAt: new Date("2026-05-31T11:40:28.981Z"),
          status: "OPEN",
        },
      ],
      postings: [
        {
          address: {
            address1: "51372 Kshlerin Creek",
            city: "Logancester",
            countryCode: "US",
            postalCode: "85013-9865",
            region: "Vermont",
            regionCode: "MO",
          },
          createdAt: new Date("2026-07-25T05:40:58.182Z"),
          description: "Provident turbo cunabula spoliatio agnitio.",
          id: "372178cd-2056-4388-870e-e7c199761c7c",
          isActive: false,
          location: "2925 Connie Green",
          name: "Lead Intranet Developer",
          postingUrl: "https://smart-summer.name/",
          updatedAt: new Date("2026-08-20T08:45:52.069Z"),
        },
      ],
      publicJobUrls: [
        "https://trustworthy-elver.info",
        "https://parched-dash.info",
      ],
      questions: [
        {
          description: "Trepide provident taceo rem.",
          id: "289f27c0-311c-41e5-ad9d-cbe2097332c2",
          maxLength: 387,
          minLength: 1,
          options: [
            "censura",
            "tum",
          ],
          prompt: "Spectaculum mollitia arcus compello.",
          question: "Sodalitas nemo natus attonbitus reprehenderit voro depono constans vehemens ante.",
          required: true,
          type: "TEXT",
        },
        {
          id: "3a0b53b3-8f3e-48d4-ab9f-413a900d79b0",
          maxLength: 430,
          minLength: 1,
          options: [
            "aetas",
          ],
          prompt: "Contra damno desolo suadeo utrimque cresco.",
          question: "Sodalitas desino sollers viduo volo cresco ventus tui sufficio iusto.",
          required: false,
          type: "TEXT",
        },
        {
          description: "Ara thermae aetas vivo constans victoria volo carbo vehemens praesentium.",
          id: "060ed8c8-ab8a-417c-8b25-edf38cb19b1c",
          maxLength: 381,
          minLength: 1,
          options: [
            "utroque",
          ],
          prompt: "Vir crepusculum ait adeptio ait defendo cotidie porro uterque.",
          question: "Vulticulus depono abstergo possimus quibusdam deinde amoveo.",
          required: false,
          type: "TEXT",
        },
      ],
      skills: [
        "coaegresco",
        "appello",
      ],
      status: "ARCHIVED",
      summary: "Iste sto communis.",
      updatedAt: new Date("2026-02-20T16:25:29.343Z"),
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
      hiringManagers: [
        {
          id: "eb3bbf4e-4022-4122-9d44-39fd5b501e80",
          name: "Troy Greenholt",
        },
      ],
      id: "9be540e0-52d9-49cb-b557-ee9f5541d7d7",
      industry: "Modern Granite Gloves",
      languageLocale: "en",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "3ff8edbe-ff03-4d11-ba5b-b936c9e87986",
          namespace: "custom",
          slug: "custom_property",
          value: "vomica",
        },
      ],
      minimumDegree: "Bachelor",
      minimumExperienceYears: 3,
      name: "Forward Brand Producer",
      numberOfOpenings: 1,
      openings: [
        {
          closeReason: "Admoveo trado textilis.",
          openedAt: new Date("2026-05-31T11:40:28.981Z"),
          status: "OPEN",
        },
      ],
      postings: [
        {
          address: {
            address1: "51372 Kshlerin Creek",
            city: "Logancester",
            countryCode: "US",
            postalCode: "85013-9865",
            region: "Vermont",
            regionCode: "MO",
          },
          createdAt: new Date("2026-07-25T05:40:58.182Z"),
          description: "Provident turbo cunabula spoliatio agnitio.",
          id: "372178cd-2056-4388-870e-e7c199761c7c",
          isActive: false,
          location: "2925 Connie Green",
          name: "Lead Intranet Developer",
          postingUrl: "https://smart-summer.name/",
          updatedAt: new Date("2026-08-20T08:45:52.069Z"),
        },
      ],
      publicJobUrls: [
        "https://trustworthy-elver.info",
        "https://parched-dash.info",
      ],
      questions: [
        {
          description: "Trepide provident taceo rem.",
          id: "289f27c0-311c-41e5-ad9d-cbe2097332c2",
          maxLength: 387,
          minLength: 1,
          options: [
            "censura",
            "tum",
          ],
          prompt: "Spectaculum mollitia arcus compello.",
          question: "Sodalitas nemo natus attonbitus reprehenderit voro depono constans vehemens ante.",
          required: true,
          type: "TEXT",
        },
        {
          id: "3a0b53b3-8f3e-48d4-ab9f-413a900d79b0",
          maxLength: 430,
          minLength: 1,
          options: [
            "aetas",
          ],
          prompt: "Contra damno desolo suadeo utrimque cresco.",
          question: "Sodalitas desino sollers viduo volo cresco ventus tui sufficio iusto.",
          required: false,
          type: "TEXT",
        },
        {
          description: "Ara thermae aetas vivo constans victoria volo carbo vehemens praesentium.",
          id: "060ed8c8-ab8a-417c-8b25-edf38cb19b1c",
          maxLength: 381,
          minLength: 1,
          options: [
            "utroque",
          ],
          prompt: "Vir crepusculum ait adeptio ait defendo cotidie porro uterque.",
          question: "Vulticulus depono abstergo possimus quibusdam deinde amoveo.",
          required: false,
          type: "TEXT",
        },
      ],
      skills: [
        "coaegresco",
        "appello",
      ],
      status: "ARCHIVED",
      summary: "Iste sto communis.",
      updatedAt: new Date("2026-02-20T16:25:29.343Z"),
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

Create a scorecard

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
      id: "fd25e63a-b914-431f-abe7-6901b2e504b1",
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
      updatedAt: new Date("2023-06-03T06:31:45.629Z"),
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
      id: "fd25e63a-b914-431f-abe7-6901b2e504b1",
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
      updatedAt: new Date("2023-06-03T06:31:45.629Z"),
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

Retrieve an activity

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

Retrieve an application

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

Retrieve an applicationstatus

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

Retrieve a candidate

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

Retrieve a company

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

Retrieve a document

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

Retrieve an interview

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

Retrieve a job

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

Retrieve a scorecard

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

List all activities

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

List all applications

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

List all applicationstatuses

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

List all candidates

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

List all companies

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

List all documents

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

List all interviews

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

List all jobs

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

List all scorecards

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

Update an activity

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
      bcc: [
        {
          email: "Mabel_Schuppe-Schowalter42@hotmail.com",
          name: "Rochelle Franey-Bechtelar",
          type: "HOME",
        },
      ],
      cc: [
        {
          email: "Sasha24@hotmail.com",
          name: "Dr. Elbert Kuvalis",
          type: "HOME",
        },
        {
          email: "Rosetta_Donnelly@gmail.com",
          name: "Ramon Daniel",
          type: "OTHER",
        },
        {
          email: "Kathryne_Jast@yahoo.com",
          name: "Christian Jacobson",
          type: "OTHER",
        },
        {
          email: "Eldred95@yahoo.com",
          name: "Edna Bogan",
          type: "OTHER",
        },
      ],
      createdAt: new Date("2022-08-07T03:16:43.865Z"),
      description: "Amplus.",
      from: {
        email: "Norwood.Wiza47@yahoo.com",
        name: "Toby Grant",
        type: "OTHER",
      },
      id: "5d81c625-05c2-48c5-b3ca-6af594f747a6",
      isPrivate: false,
      metadata: [
        {
          extraData: {

          },
          format: "TEXT",
          id: "db574025-ae4e-4f8c-a296-d2f37e5b4b61",
          namespace: "activity",
          slug: "acer",
          value: "Pauci eius cena adamo summisse arguo pectus communis arcesso tergeo.",
        },
        {
          extraData: {

          },
          format: "TEXT",
          id: "f5151085-0bac-4cd0-a2ad-e271e7de37df",
          namespace: "activity",
          slug: "tremo",
          value: "Amita delectus dicta temptatio utroque ex.",
        },
      ],
      subType: "TASK",
      title: "Senior Interactions Manager",
      to: [
        {
          email: "Sister91@hotmail.com",
          name: "Eddie Nienow PhD",
          type: "WORK",
        },
      ],
      type: "TASK",
      updatedAt: new Date("2026-03-28T00:44:44.833Z"),
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
      bcc: [
        {
          email: "Mabel_Schuppe-Schowalter42@hotmail.com",
          name: "Rochelle Franey-Bechtelar",
          type: "HOME",
        },
      ],
      cc: [
        {
          email: "Sasha24@hotmail.com",
          name: "Dr. Elbert Kuvalis",
          type: "HOME",
        },
        {
          email: "Rosetta_Donnelly@gmail.com",
          name: "Ramon Daniel",
          type: "OTHER",
        },
        {
          email: "Kathryne_Jast@yahoo.com",
          name: "Christian Jacobson",
          type: "OTHER",
        },
        {
          email: "Eldred95@yahoo.com",
          name: "Edna Bogan",
          type: "OTHER",
        },
      ],
      createdAt: new Date("2022-08-07T03:16:43.865Z"),
      description: "Amplus.",
      from: {
        email: "Norwood.Wiza47@yahoo.com",
        name: "Toby Grant",
        type: "OTHER",
      },
      id: "5d81c625-05c2-48c5-b3ca-6af594f747a6",
      isPrivate: false,
      metadata: [
        {
          extraData: {
  
          },
          format: "TEXT",
          id: "db574025-ae4e-4f8c-a296-d2f37e5b4b61",
          namespace: "activity",
          slug: "acer",
          value: "Pauci eius cena adamo summisse arguo pectus communis arcesso tergeo.",
        },
        {
          extraData: {
  
          },
          format: "TEXT",
          id: "f5151085-0bac-4cd0-a2ad-e271e7de37df",
          namespace: "activity",
          slug: "tremo",
          value: "Amita delectus dicta temptatio utroque ex.",
        },
      ],
      subType: "TASK",
      title: "Senior Interactions Manager",
      to: [
        {
          email: "Sister91@hotmail.com",
          name: "Eddie Nienow PhD",
          type: "WORK",
        },
      ],
      type: "TASK",
      updatedAt: new Date("2026-03-28T00:44:44.833Z"),
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

Update an application

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
      appliedAt: new Date("2025-09-24T09:00:41.611Z"),
      createdAt: new Date("2023-10-17T07:19:48.787Z"),
      hiredAt: new Date("2026-05-05T15:55:48.096Z"),
      id: "d0c036ff-bbfd-4fec-bd5b-3f88bce71ba7",
      metadata: [
        {
          extraData: {

          },
          format: "TEXT",
          id: "a1302a79-0341-40e6-b91a-daeb95584617",
          namespace: "application",
          slug: "despecto",
          value: "Argentum decretum cultellus aveho distinctio verecundia stella depono.",
        },
      ],
      offers: [],
      originalStatus: "vomica",
      originalSubstatus: "allatus",
      rejectedAt: new Date("2026-10-03T06:57:03.808Z"),
      rejectedReason: "Cometes amplitudo videlicet talio.",
      source: "credo",
      status: "REVIEWING",
      summary: "Comburo quidem vesica vulnus curatio. Appositus amita attonbitus conatus degenero charisma sordeo villa victoria varius. Cenaculum acsi officia.",
      updatedAt: new Date("2026-10-10T01:56:42.239Z"),
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
      appliedAt: new Date("2025-09-24T09:00:41.611Z"),
      createdAt: new Date("2023-10-17T07:19:48.787Z"),
      hiredAt: new Date("2026-05-05T15:55:48.096Z"),
      id: "d0c036ff-bbfd-4fec-bd5b-3f88bce71ba7",
      metadata: [
        {
          extraData: {
  
          },
          format: "TEXT",
          id: "a1302a79-0341-40e6-b91a-daeb95584617",
          namespace: "application",
          slug: "despecto",
          value: "Argentum decretum cultellus aveho distinctio verecundia stella depono.",
        },
      ],
      offers: [],
      originalStatus: "vomica",
      originalSubstatus: "allatus",
      rejectedAt: new Date("2026-10-03T06:57:03.808Z"),
      rejectedReason: "Cometes amplitudo videlicet talio.",
      source: "credo",
      status: "REVIEWING",
      summary: "Comburo quidem vesica vulnus curatio. Appositus amita attonbitus conatus degenero charisma sordeo villa victoria varius. Cenaculum acsi officia.",
      updatedAt: new Date("2026-10-10T01:56:42.239Z"),
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

Update a candidate

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
        address1: "802 Roberts Squares",
        address2: "Suite 550",
        city: "Lake Raeganside",
        countryCode: "US",
        postalCode: "44530-0054",
        region: "Tennessee",
        regionCode: "NV",
      },
      companyName: "Ferry, Legros and Feest",
      createdAt: new Date("2023-10-16T05:42:56.049Z"),
      education: [
        {
          degree: "mouser throughout",
          endAt: new Date("1992-11-28T20:23:20.311Z"),
          fieldOfStudy: "solutio",
          institution: "Heller - Lubowitz",
          level: "phd",
          startAt: new Date("2001-03-26T08:12:11.510Z"),
        },
      ],
      emails: [
        {
          email: "Ardith.Beatty@hotmail.com",
          name: "Opal Lindgren",
          type: "WORK",
        },
        {
          email: "Ardith_Beatty@gmail.com",
          name: "Kristi Nader",
          type: "OTHER",
        },
      ],
      experiences: [
        {
          companyName: "Donnelly, Buckridge and Steuber",
          endAt: new Date("1978-06-20T02:53:48.383Z"),
          startAt: new Date("1980-02-06T17:16:53.798Z"),
          title: "Principal Brand Strategist",
        },
      ],
      firstName: "Ardith",
      id: "b761c1a5-a8d4-4f6b-a539-08e6f786897e",
      imageUrl: "https://loremflickr.com/40/3693?lock=5634712403880328",
      jobIds: [],
      lastName: "Beatty",
      linkUrls: [
        "https://sizzling-legislature.com",
        "https://soupy-interchange.net",
        "https://troubled-substitution.info",
      ],
      metadata: [
        {
          extraData: {

          },
          format: "TEXT",
          id: "2064f52a-f0df-406f-a37d-cda19758034f",
          namespace: "custom",
          slug: "custom_field",
          value: "cariosus",
        },
      ],
      name: "Ardith Beatty",
      origin: "SOURCED",
      skills: [
        "vita",
        "cohors",
      ],
      sources: [
        "tactus",
      ],
      summary: "Denego barba rerum similique via templum totam suus voluptatem. Depraedor virgo cui comminor commodi curvo. Chirographum pax spero nostrum damnatio averto pecus cervus aspicio absens.",
      tags: [
        "aliquid",
      ],
      telephones: [
        {
          telephone: "(779) 296-5994",
          type: "HOME",
        },
      ],
      title: "Principal Implementation Analyst",
      updatedAt: new Date("2024-04-27T06:17:28.491Z"),
      webUrl: "https://expert-lender.name/",
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
        address1: "802 Roberts Squares",
        address2: "Suite 550",
        city: "Lake Raeganside",
        countryCode: "US",
        postalCode: "44530-0054",
        region: "Tennessee",
        regionCode: "NV",
      },
      companyName: "Ferry, Legros and Feest",
      createdAt: new Date("2023-10-16T05:42:56.049Z"),
      education: [
        {
          degree: "mouser throughout",
          endAt: new Date("1992-11-28T20:23:20.311Z"),
          fieldOfStudy: "solutio",
          institution: "Heller - Lubowitz",
          level: "phd",
          startAt: new Date("2001-03-26T08:12:11.510Z"),
        },
      ],
      emails: [
        {
          email: "Ardith.Beatty@hotmail.com",
          name: "Opal Lindgren",
          type: "WORK",
        },
        {
          email: "Ardith_Beatty@gmail.com",
          name: "Kristi Nader",
          type: "OTHER",
        },
      ],
      experiences: [
        {
          companyName: "Donnelly, Buckridge and Steuber",
          endAt: new Date("1978-06-20T02:53:48.383Z"),
          startAt: new Date("1980-02-06T17:16:53.798Z"),
          title: "Principal Brand Strategist",
        },
      ],
      firstName: "Ardith",
      id: "b761c1a5-a8d4-4f6b-a539-08e6f786897e",
      imageUrl: "https://loremflickr.com/40/3693?lock=5634712403880328",
      jobIds: [],
      lastName: "Beatty",
      linkUrls: [
        "https://sizzling-legislature.com",
        "https://soupy-interchange.net",
        "https://troubled-substitution.info",
      ],
      metadata: [
        {
          extraData: {
  
          },
          format: "TEXT",
          id: "2064f52a-f0df-406f-a37d-cda19758034f",
          namespace: "custom",
          slug: "custom_field",
          value: "cariosus",
        },
      ],
      name: "Ardith Beatty",
      origin: "SOURCED",
      skills: [
        "vita",
        "cohors",
      ],
      sources: [
        "tactus",
      ],
      summary: "Denego barba rerum similique via templum totam suus voluptatem. Depraedor virgo cui comminor commodi curvo. Chirographum pax spero nostrum damnatio averto pecus cervus aspicio absens.",
      tags: [
        "aliquid",
      ],
      telephones: [
        {
          telephone: "(779) 296-5994",
          type: "HOME",
        },
      ],
      title: "Principal Implementation Analyst",
      updatedAt: new Date("2024-04-27T06:17:28.491Z"),
      webUrl: "https://expert-lender.name/",
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

Update a company

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
      id: "1c1e0f8a-e3e8-466c-b26d-b6cd4392f8bd",
      name: "Gulgowski, Dibbert and Wilderman",
      phone: "1-602-210-4548",
      updatedAt: new Date("2020-09-29T13:40:16.879Z"),
      websiteUrl: "https://somber-substitution.com/",
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
      id: "1c1e0f8a-e3e8-466c-b26d-b6cd4392f8bd",
      name: "Gulgowski, Dibbert and Wilderman",
      phone: "1-602-210-4548",
      updatedAt: new Date("2020-09-29T13:40:16.879Z"),
      websiteUrl: "https://somber-substitution.com/",
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

Update a document

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
      filename: "bah_white_frantically.bz",
      id: "b38de833-8ba4-46ba-b9c9-1ccafae343f0",
      type: "RESUME",
      updatedAt: new Date("2022-12-05T02:49:12.734Z"),
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
      filename: "bah_white_frantically.bz",
      id: "b38de833-8ba4-46ba-b9c9-1ccafae343f0",
      type: "RESUME",
      updatedAt: new Date("2022-12-05T02:49:12.734Z"),
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

Update an interview

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
      endAt: new Date("2025-10-12T23:07:21.367Z"),
      externalEventXref: "1d1c6930-e777-4f01-9ca6-1a508f00013e",
      id: "6e3a152b-03c2-459e-aef1-598cd35c2b79",
      location: "26596 Halle Trafficway",
      startAt: new Date("2025-06-06T02:22:21.434Z"),
      status: "SCHEDULED",
      updatedAt: new Date("2026-02-25T12:33:27.720Z"),
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
      endAt: new Date("2025-10-12T23:07:21.367Z"),
      externalEventXref: "1d1c6930-e777-4f01-9ca6-1a508f00013e",
      id: "6e3a152b-03c2-459e-aef1-598cd35c2b79",
      location: "26596 Halle Trafficway",
      startAt: new Date("2025-06-06T02:22:21.434Z"),
      status: "SCHEDULED",
      updatedAt: new Date("2026-02-25T12:33:27.720Z"),
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

Update a job

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
      hiringManagers: [
        {
          id: "eb3bbf4e-4022-4122-9d44-39fd5b501e80",
          name: "Troy Greenholt",
        },
      ],
      id: "66f58f4e-d551-4fd7-ba22-f492e9db83dc",
      industry: "Modern Granite Gloves",
      languageLocale: "en",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "60340ea2-882c-45f3-9842-a80356ca3c9d",
          namespace: "custom",
          slug: "custom_property",
          value: "vomica",
        },
      ],
      minimumDegree: "Bachelor",
      minimumExperienceYears: 3,
      name: "Forward Brand Producer",
      numberOfOpenings: 1,
      openings: [
        {
          closeReason: "Admoveo trado textilis.",
          openedAt: new Date("2026-05-31T11:40:29.054Z"),
          status: "OPEN",
        },
      ],
      postings: [
        {
          address: {
            address1: "51372 Kshlerin Creek",
            city: "Logancester",
            countryCode: "US",
            postalCode: "85013-9865",
            region: "Vermont",
            regionCode: "MO",
          },
          createdAt: new Date("2026-07-25T05:40:58.260Z"),
          description: "Provident turbo cunabula spoliatio agnitio.",
          id: "372178cd-2056-4388-870e-e7c199761c7c",
          isActive: false,
          location: "2925 Connie Green",
          name: "Lead Intranet Developer",
          postingUrl: "https://smart-summer.name/",
          updatedAt: new Date("2026-08-20T08:45:52.148Z"),
        },
      ],
      publicJobUrls: [
        "https://trustworthy-elver.info",
        "https://parched-dash.info",
      ],
      questions: [
        {
          description: "Trepide provident taceo rem.",
          id: "289f27c0-311c-41e5-ad9d-cbe2097332c2",
          maxLength: 387,
          minLength: 1,
          options: [
            "censura",
            "tum",
          ],
          prompt: "Spectaculum mollitia arcus compello.",
          question: "Sodalitas nemo natus attonbitus reprehenderit voro depono constans vehemens ante.",
          required: true,
          type: "TEXT",
        },
        {
          id: "3a0b53b3-8f3e-48d4-ab9f-413a900d79b0",
          maxLength: 430,
          minLength: 1,
          options: [
            "aetas",
          ],
          prompt: "Contra damno desolo suadeo utrimque cresco.",
          question: "Sodalitas desino sollers viduo volo cresco ventus tui sufficio iusto.",
          required: false,
          type: "TEXT",
        },
        {
          description: "Ara thermae aetas vivo constans victoria volo carbo vehemens praesentium.",
          id: "060ed8c8-ab8a-417c-8b25-edf38cb19b1c",
          maxLength: 381,
          minLength: 1,
          options: [
            "utroque",
          ],
          prompt: "Vir crepusculum ait adeptio ait defendo cotidie porro uterque.",
          question: "Vulticulus depono abstergo possimus quibusdam deinde amoveo.",
          required: false,
          type: "TEXT",
        },
      ],
      skills: [
        "coaegresco",
        "appello",
      ],
      status: "ARCHIVED",
      summary: "Iste sto communis.",
      updatedAt: new Date("2026-02-20T16:25:29.410Z"),
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
      hiringManagers: [
        {
          id: "eb3bbf4e-4022-4122-9d44-39fd5b501e80",
          name: "Troy Greenholt",
        },
      ],
      id: "66f58f4e-d551-4fd7-ba22-f492e9db83dc",
      industry: "Modern Granite Gloves",
      languageLocale: "en",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "60340ea2-882c-45f3-9842-a80356ca3c9d",
          namespace: "custom",
          slug: "custom_property",
          value: "vomica",
        },
      ],
      minimumDegree: "Bachelor",
      minimumExperienceYears: 3,
      name: "Forward Brand Producer",
      numberOfOpenings: 1,
      openings: [
        {
          closeReason: "Admoveo trado textilis.",
          openedAt: new Date("2026-05-31T11:40:29.054Z"),
          status: "OPEN",
        },
      ],
      postings: [
        {
          address: {
            address1: "51372 Kshlerin Creek",
            city: "Logancester",
            countryCode: "US",
            postalCode: "85013-9865",
            region: "Vermont",
            regionCode: "MO",
          },
          createdAt: new Date("2026-07-25T05:40:58.260Z"),
          description: "Provident turbo cunabula spoliatio agnitio.",
          id: "372178cd-2056-4388-870e-e7c199761c7c",
          isActive: false,
          location: "2925 Connie Green",
          name: "Lead Intranet Developer",
          postingUrl: "https://smart-summer.name/",
          updatedAt: new Date("2026-08-20T08:45:52.148Z"),
        },
      ],
      publicJobUrls: [
        "https://trustworthy-elver.info",
        "https://parched-dash.info",
      ],
      questions: [
        {
          description: "Trepide provident taceo rem.",
          id: "289f27c0-311c-41e5-ad9d-cbe2097332c2",
          maxLength: 387,
          minLength: 1,
          options: [
            "censura",
            "tum",
          ],
          prompt: "Spectaculum mollitia arcus compello.",
          question: "Sodalitas nemo natus attonbitus reprehenderit voro depono constans vehemens ante.",
          required: true,
          type: "TEXT",
        },
        {
          id: "3a0b53b3-8f3e-48d4-ab9f-413a900d79b0",
          maxLength: 430,
          minLength: 1,
          options: [
            "aetas",
          ],
          prompt: "Contra damno desolo suadeo utrimque cresco.",
          question: "Sodalitas desino sollers viduo volo cresco ventus tui sufficio iusto.",
          required: false,
          type: "TEXT",
        },
        {
          description: "Ara thermae aetas vivo constans victoria volo carbo vehemens praesentium.",
          id: "060ed8c8-ab8a-417c-8b25-edf38cb19b1c",
          maxLength: 381,
          minLength: 1,
          options: [
            "utroque",
          ],
          prompt: "Vir crepusculum ait adeptio ait defendo cotidie porro uterque.",
          question: "Vulticulus depono abstergo possimus quibusdam deinde amoveo.",
          required: false,
          type: "TEXT",
        },
      ],
      skills: [
        "coaegresco",
        "appello",
      ],
      status: "ARCHIVED",
      summary: "Iste sto communis.",
      updatedAt: new Date("2026-02-20T16:25:29.410Z"),
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

Update a scorecard

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
      id: "8e2e8d5e-72ac-4b82-90af-3273aab2bf81",
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
      updatedAt: new Date("2023-06-03T06:31:45.633Z"),
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
      id: "8e2e8d5e-72ac-4b82-90af-3273aab2bf81",
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
      updatedAt: new Date("2023-06-03T06:31:45.633Z"),
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

Remove an activity

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

Remove an application

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

Remove a candidate

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

Remove a company

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

Remove a document

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

Remove an interview

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

Remove a job

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

Remove a scorecard

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

Update an activity

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
      bcc: [
        {
          email: "Mabel_Schuppe-Schowalter42@hotmail.com",
          name: "Rochelle Franey-Bechtelar",
          type: "HOME",
        },
      ],
      cc: [
        {
          email: "Sasha24@hotmail.com",
          name: "Dr. Elbert Kuvalis",
          type: "HOME",
        },
        {
          email: "Rosetta_Donnelly@gmail.com",
          name: "Ramon Daniel",
          type: "OTHER",
        },
        {
          email: "Kathryne_Jast@yahoo.com",
          name: "Christian Jacobson",
          type: "OTHER",
        },
        {
          email: "Eldred95@yahoo.com",
          name: "Edna Bogan",
          type: "OTHER",
        },
      ],
      createdAt: new Date("2022-08-07T03:16:43.865Z"),
      description: "Amplus.",
      from: {
        email: "Norwood.Wiza47@yahoo.com",
        name: "Toby Grant",
        type: "OTHER",
      },
      id: "5d81c625-05c2-48c5-b3ca-6af594f747a6",
      isPrivate: false,
      metadata: [
        {
          extraData: {

          },
          format: "TEXT",
          id: "db574025-ae4e-4f8c-a296-d2f37e5b4b61",
          namespace: "activity",
          slug: "acer",
          value: "Pauci eius cena adamo summisse arguo pectus communis arcesso tergeo.",
        },
        {
          extraData: {

          },
          format: "TEXT",
          id: "f5151085-0bac-4cd0-a2ad-e271e7de37df",
          namespace: "activity",
          slug: "tremo",
          value: "Amita delectus dicta temptatio utroque ex.",
        },
      ],
      subType: "TASK",
      title: "Senior Interactions Manager",
      to: [
        {
          email: "Sister91@hotmail.com",
          name: "Eddie Nienow PhD",
          type: "WORK",
        },
      ],
      type: "TASK",
      updatedAt: new Date("2026-03-28T00:44:44.833Z"),
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
      bcc: [
        {
          email: "Mabel_Schuppe-Schowalter42@hotmail.com",
          name: "Rochelle Franey-Bechtelar",
          type: "HOME",
        },
      ],
      cc: [
        {
          email: "Sasha24@hotmail.com",
          name: "Dr. Elbert Kuvalis",
          type: "HOME",
        },
        {
          email: "Rosetta_Donnelly@gmail.com",
          name: "Ramon Daniel",
          type: "OTHER",
        },
        {
          email: "Kathryne_Jast@yahoo.com",
          name: "Christian Jacobson",
          type: "OTHER",
        },
        {
          email: "Eldred95@yahoo.com",
          name: "Edna Bogan",
          type: "OTHER",
        },
      ],
      createdAt: new Date("2022-08-07T03:16:43.865Z"),
      description: "Amplus.",
      from: {
        email: "Norwood.Wiza47@yahoo.com",
        name: "Toby Grant",
        type: "OTHER",
      },
      id: "5d81c625-05c2-48c5-b3ca-6af594f747a6",
      isPrivate: false,
      metadata: [
        {
          extraData: {
  
          },
          format: "TEXT",
          id: "db574025-ae4e-4f8c-a296-d2f37e5b4b61",
          namespace: "activity",
          slug: "acer",
          value: "Pauci eius cena adamo summisse arguo pectus communis arcesso tergeo.",
        },
        {
          extraData: {
  
          },
          format: "TEXT",
          id: "f5151085-0bac-4cd0-a2ad-e271e7de37df",
          namespace: "activity",
          slug: "tremo",
          value: "Amita delectus dicta temptatio utroque ex.",
        },
      ],
      subType: "TASK",
      title: "Senior Interactions Manager",
      to: [
        {
          email: "Sister91@hotmail.com",
          name: "Eddie Nienow PhD",
          type: "WORK",
        },
      ],
      type: "TASK",
      updatedAt: new Date("2026-03-28T00:44:44.833Z"),
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

Update an application

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
      appliedAt: new Date("2025-09-24T09:00:41.611Z"),
      createdAt: new Date("2023-10-17T07:19:48.787Z"),
      hiredAt: new Date("2026-05-05T15:55:48.096Z"),
      id: "d0c036ff-bbfd-4fec-bd5b-3f88bce71ba7",
      metadata: [
        {
          extraData: {

          },
          format: "TEXT",
          id: "a1302a79-0341-40e6-b91a-daeb95584617",
          namespace: "application",
          slug: "despecto",
          value: "Argentum decretum cultellus aveho distinctio verecundia stella depono.",
        },
      ],
      offers: [],
      originalStatus: "vomica",
      originalSubstatus: "allatus",
      rejectedAt: new Date("2026-10-03T06:57:03.808Z"),
      rejectedReason: "Cometes amplitudo videlicet talio.",
      source: "credo",
      status: "REVIEWING",
      summary: "Comburo quidem vesica vulnus curatio. Appositus amita attonbitus conatus degenero charisma sordeo villa victoria varius. Cenaculum acsi officia.",
      updatedAt: new Date("2026-10-10T01:56:42.239Z"),
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
      appliedAt: new Date("2025-09-24T09:00:41.611Z"),
      createdAt: new Date("2023-10-17T07:19:48.787Z"),
      hiredAt: new Date("2026-05-05T15:55:48.096Z"),
      id: "d0c036ff-bbfd-4fec-bd5b-3f88bce71ba7",
      metadata: [
        {
          extraData: {
  
          },
          format: "TEXT",
          id: "a1302a79-0341-40e6-b91a-daeb95584617",
          namespace: "application",
          slug: "despecto",
          value: "Argentum decretum cultellus aveho distinctio verecundia stella depono.",
        },
      ],
      offers: [],
      originalStatus: "vomica",
      originalSubstatus: "allatus",
      rejectedAt: new Date("2026-10-03T06:57:03.808Z"),
      rejectedReason: "Cometes amplitudo videlicet talio.",
      source: "credo",
      status: "REVIEWING",
      summary: "Comburo quidem vesica vulnus curatio. Appositus amita attonbitus conatus degenero charisma sordeo villa victoria varius. Cenaculum acsi officia.",
      updatedAt: new Date("2026-10-10T01:56:42.239Z"),
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

Update a candidate

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
        address1: "802 Roberts Squares",
        address2: "Suite 550",
        city: "Lake Raeganside",
        countryCode: "US",
        postalCode: "44530-0054",
        region: "Tennessee",
        regionCode: "NV",
      },
      companyName: "Ferry, Legros and Feest",
      createdAt: new Date("2023-10-16T05:42:56.049Z"),
      education: [
        {
          degree: "mouser throughout",
          endAt: new Date("1992-11-28T20:23:20.311Z"),
          fieldOfStudy: "solutio",
          institution: "Heller - Lubowitz",
          level: "phd",
          startAt: new Date("2001-03-26T08:12:11.510Z"),
        },
      ],
      emails: [
        {
          email: "Ardith.Beatty@hotmail.com",
          name: "Opal Lindgren",
          type: "WORK",
        },
        {
          email: "Ardith_Beatty@gmail.com",
          name: "Kristi Nader",
          type: "OTHER",
        },
      ],
      experiences: [
        {
          companyName: "Donnelly, Buckridge and Steuber",
          endAt: new Date("1978-06-20T02:53:48.383Z"),
          startAt: new Date("1980-02-06T17:16:53.798Z"),
          title: "Principal Brand Strategist",
        },
      ],
      firstName: "Ardith",
      id: "b761c1a5-a8d4-4f6b-a539-08e6f786897e",
      imageUrl: "https://loremflickr.com/40/3693?lock=5634712403880328",
      jobIds: [],
      lastName: "Beatty",
      linkUrls: [
        "https://sizzling-legislature.com",
        "https://soupy-interchange.net",
        "https://troubled-substitution.info",
      ],
      metadata: [
        {
          extraData: {

          },
          format: "TEXT",
          id: "2064f52a-f0df-406f-a37d-cda19758034f",
          namespace: "custom",
          slug: "custom_field",
          value: "cariosus",
        },
      ],
      name: "Ardith Beatty",
      origin: "SOURCED",
      skills: [
        "vita",
        "cohors",
      ],
      sources: [
        "tactus",
      ],
      summary: "Denego barba rerum similique via templum totam suus voluptatem. Depraedor virgo cui comminor commodi curvo. Chirographum pax spero nostrum damnatio averto pecus cervus aspicio absens.",
      tags: [
        "aliquid",
      ],
      telephones: [
        {
          telephone: "(779) 296-5994",
          type: "HOME",
        },
      ],
      title: "Principal Implementation Analyst",
      updatedAt: new Date("2024-04-27T06:17:28.491Z"),
      webUrl: "https://expert-lender.name/",
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
        address1: "802 Roberts Squares",
        address2: "Suite 550",
        city: "Lake Raeganside",
        countryCode: "US",
        postalCode: "44530-0054",
        region: "Tennessee",
        regionCode: "NV",
      },
      companyName: "Ferry, Legros and Feest",
      createdAt: new Date("2023-10-16T05:42:56.049Z"),
      education: [
        {
          degree: "mouser throughout",
          endAt: new Date("1992-11-28T20:23:20.311Z"),
          fieldOfStudy: "solutio",
          institution: "Heller - Lubowitz",
          level: "phd",
          startAt: new Date("2001-03-26T08:12:11.510Z"),
        },
      ],
      emails: [
        {
          email: "Ardith.Beatty@hotmail.com",
          name: "Opal Lindgren",
          type: "WORK",
        },
        {
          email: "Ardith_Beatty@gmail.com",
          name: "Kristi Nader",
          type: "OTHER",
        },
      ],
      experiences: [
        {
          companyName: "Donnelly, Buckridge and Steuber",
          endAt: new Date("1978-06-20T02:53:48.383Z"),
          startAt: new Date("1980-02-06T17:16:53.798Z"),
          title: "Principal Brand Strategist",
        },
      ],
      firstName: "Ardith",
      id: "b761c1a5-a8d4-4f6b-a539-08e6f786897e",
      imageUrl: "https://loremflickr.com/40/3693?lock=5634712403880328",
      jobIds: [],
      lastName: "Beatty",
      linkUrls: [
        "https://sizzling-legislature.com",
        "https://soupy-interchange.net",
        "https://troubled-substitution.info",
      ],
      metadata: [
        {
          extraData: {
  
          },
          format: "TEXT",
          id: "2064f52a-f0df-406f-a37d-cda19758034f",
          namespace: "custom",
          slug: "custom_field",
          value: "cariosus",
        },
      ],
      name: "Ardith Beatty",
      origin: "SOURCED",
      skills: [
        "vita",
        "cohors",
      ],
      sources: [
        "tactus",
      ],
      summary: "Denego barba rerum similique via templum totam suus voluptatem. Depraedor virgo cui comminor commodi curvo. Chirographum pax spero nostrum damnatio averto pecus cervus aspicio absens.",
      tags: [
        "aliquid",
      ],
      telephones: [
        {
          telephone: "(779) 296-5994",
          type: "HOME",
        },
      ],
      title: "Principal Implementation Analyst",
      updatedAt: new Date("2024-04-27T06:17:28.491Z"),
      webUrl: "https://expert-lender.name/",
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

Update a company

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
      id: "1c1e0f8a-e3e8-466c-b26d-b6cd4392f8bd",
      name: "Gulgowski, Dibbert and Wilderman",
      phone: "1-602-210-4548",
      updatedAt: new Date("2020-09-29T13:40:16.879Z"),
      websiteUrl: "https://somber-substitution.com/",
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
      id: "1c1e0f8a-e3e8-466c-b26d-b6cd4392f8bd",
      name: "Gulgowski, Dibbert and Wilderman",
      phone: "1-602-210-4548",
      updatedAt: new Date("2020-09-29T13:40:16.879Z"),
      websiteUrl: "https://somber-substitution.com/",
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

Update a document

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
      filename: "bah_white_frantically.bz",
      id: "b38de833-8ba4-46ba-b9c9-1ccafae343f0",
      type: "RESUME",
      updatedAt: new Date("2022-12-05T02:49:12.734Z"),
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
      filename: "bah_white_frantically.bz",
      id: "b38de833-8ba4-46ba-b9c9-1ccafae343f0",
      type: "RESUME",
      updatedAt: new Date("2022-12-05T02:49:12.734Z"),
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

Update an interview

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
      endAt: new Date("2025-10-12T23:07:21.367Z"),
      externalEventXref: "1d1c6930-e777-4f01-9ca6-1a508f00013e",
      id: "6e3a152b-03c2-459e-aef1-598cd35c2b79",
      location: "26596 Halle Trafficway",
      startAt: new Date("2025-06-06T02:22:21.434Z"),
      status: "SCHEDULED",
      updatedAt: new Date("2026-02-25T12:33:27.720Z"),
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
      endAt: new Date("2025-10-12T23:07:21.367Z"),
      externalEventXref: "1d1c6930-e777-4f01-9ca6-1a508f00013e",
      id: "6e3a152b-03c2-459e-aef1-598cd35c2b79",
      location: "26596 Halle Trafficway",
      startAt: new Date("2025-06-06T02:22:21.434Z"),
      status: "SCHEDULED",
      updatedAt: new Date("2026-02-25T12:33:27.720Z"),
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

Update a job

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
      hiringManagers: [
        {
          id: "eb3bbf4e-4022-4122-9d44-39fd5b501e80",
          name: "Troy Greenholt",
        },
      ],
      id: "66f58f4e-d551-4fd7-ba22-f492e9db83dc",
      industry: "Modern Granite Gloves",
      languageLocale: "en",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "60340ea2-882c-45f3-9842-a80356ca3c9d",
          namespace: "custom",
          slug: "custom_property",
          value: "vomica",
        },
      ],
      minimumDegree: "Bachelor",
      minimumExperienceYears: 3,
      name: "Forward Brand Producer",
      numberOfOpenings: 1,
      openings: [
        {
          closeReason: "Admoveo trado textilis.",
          openedAt: new Date("2026-05-31T11:40:29.054Z"),
          status: "OPEN",
        },
      ],
      postings: [
        {
          address: {
            address1: "51372 Kshlerin Creek",
            city: "Logancester",
            countryCode: "US",
            postalCode: "85013-9865",
            region: "Vermont",
            regionCode: "MO",
          },
          createdAt: new Date("2026-07-25T05:40:58.260Z"),
          description: "Provident turbo cunabula spoliatio agnitio.",
          id: "372178cd-2056-4388-870e-e7c199761c7c",
          isActive: false,
          location: "2925 Connie Green",
          name: "Lead Intranet Developer",
          postingUrl: "https://smart-summer.name/",
          updatedAt: new Date("2026-08-20T08:45:52.148Z"),
        },
      ],
      publicJobUrls: [
        "https://trustworthy-elver.info",
        "https://parched-dash.info",
      ],
      questions: [
        {
          description: "Trepide provident taceo rem.",
          id: "289f27c0-311c-41e5-ad9d-cbe2097332c2",
          maxLength: 387,
          minLength: 1,
          options: [
            "censura",
            "tum",
          ],
          prompt: "Spectaculum mollitia arcus compello.",
          question: "Sodalitas nemo natus attonbitus reprehenderit voro depono constans vehemens ante.",
          required: true,
          type: "TEXT",
        },
        {
          id: "3a0b53b3-8f3e-48d4-ab9f-413a900d79b0",
          maxLength: 430,
          minLength: 1,
          options: [
            "aetas",
          ],
          prompt: "Contra damno desolo suadeo utrimque cresco.",
          question: "Sodalitas desino sollers viduo volo cresco ventus tui sufficio iusto.",
          required: false,
          type: "TEXT",
        },
        {
          description: "Ara thermae aetas vivo constans victoria volo carbo vehemens praesentium.",
          id: "060ed8c8-ab8a-417c-8b25-edf38cb19b1c",
          maxLength: 381,
          minLength: 1,
          options: [
            "utroque",
          ],
          prompt: "Vir crepusculum ait adeptio ait defendo cotidie porro uterque.",
          question: "Vulticulus depono abstergo possimus quibusdam deinde amoveo.",
          required: false,
          type: "TEXT",
        },
      ],
      skills: [
        "coaegresco",
        "appello",
      ],
      status: "ARCHIVED",
      summary: "Iste sto communis.",
      updatedAt: new Date("2026-02-20T16:25:29.410Z"),
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
      hiringManagers: [
        {
          id: "eb3bbf4e-4022-4122-9d44-39fd5b501e80",
          name: "Troy Greenholt",
        },
      ],
      id: "66f58f4e-d551-4fd7-ba22-f492e9db83dc",
      industry: "Modern Granite Gloves",
      languageLocale: "en",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "60340ea2-882c-45f3-9842-a80356ca3c9d",
          namespace: "custom",
          slug: "custom_property",
          value: "vomica",
        },
      ],
      minimumDegree: "Bachelor",
      minimumExperienceYears: 3,
      name: "Forward Brand Producer",
      numberOfOpenings: 1,
      openings: [
        {
          closeReason: "Admoveo trado textilis.",
          openedAt: new Date("2026-05-31T11:40:29.054Z"),
          status: "OPEN",
        },
      ],
      postings: [
        {
          address: {
            address1: "51372 Kshlerin Creek",
            city: "Logancester",
            countryCode: "US",
            postalCode: "85013-9865",
            region: "Vermont",
            regionCode: "MO",
          },
          createdAt: new Date("2026-07-25T05:40:58.260Z"),
          description: "Provident turbo cunabula spoliatio agnitio.",
          id: "372178cd-2056-4388-870e-e7c199761c7c",
          isActive: false,
          location: "2925 Connie Green",
          name: "Lead Intranet Developer",
          postingUrl: "https://smart-summer.name/",
          updatedAt: new Date("2026-08-20T08:45:52.148Z"),
        },
      ],
      publicJobUrls: [
        "https://trustworthy-elver.info",
        "https://parched-dash.info",
      ],
      questions: [
        {
          description: "Trepide provident taceo rem.",
          id: "289f27c0-311c-41e5-ad9d-cbe2097332c2",
          maxLength: 387,
          minLength: 1,
          options: [
            "censura",
            "tum",
          ],
          prompt: "Spectaculum mollitia arcus compello.",
          question: "Sodalitas nemo natus attonbitus reprehenderit voro depono constans vehemens ante.",
          required: true,
          type: "TEXT",
        },
        {
          id: "3a0b53b3-8f3e-48d4-ab9f-413a900d79b0",
          maxLength: 430,
          minLength: 1,
          options: [
            "aetas",
          ],
          prompt: "Contra damno desolo suadeo utrimque cresco.",
          question: "Sodalitas desino sollers viduo volo cresco ventus tui sufficio iusto.",
          required: false,
          type: "TEXT",
        },
        {
          description: "Ara thermae aetas vivo constans victoria volo carbo vehemens praesentium.",
          id: "060ed8c8-ab8a-417c-8b25-edf38cb19b1c",
          maxLength: 381,
          minLength: 1,
          options: [
            "utroque",
          ],
          prompt: "Vir crepusculum ait adeptio ait defendo cotidie porro uterque.",
          question: "Vulticulus depono abstergo possimus quibusdam deinde amoveo.",
          required: false,
          type: "TEXT",
        },
      ],
      skills: [
        "coaegresco",
        "appello",
      ],
      status: "ARCHIVED",
      summary: "Iste sto communis.",
      updatedAt: new Date("2026-02-20T16:25:29.410Z"),
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

Update a scorecard

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
      id: "8e2e8d5e-72ac-4b82-90af-3273aab2bf81",
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
      updatedAt: new Date("2023-06-03T06:31:45.633Z"),
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
      id: "8e2e8d5e-72ac-4b82-90af-3273aab2bf81",
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
      updatedAt: new Date("2023-06-03T06:31:45.633Z"),
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