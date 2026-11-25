# Candidate

## Overview

### Available Operations

* [createAtsCandidate](#createatscandidate) - Create a candidate
* [getAtsCandidate](#getatscandidate) - Retrieve a candidate
* [listAtsCandidates](#listatscandidates) - List all candidates
* [patchAtsCandidate](#patchatscandidate) - Update a candidate
* [removeAtsCandidate](#removeatscandidate) - Remove a candidate
* [updateAtsCandidate](#updateatscandidate) - Update a candidate

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
  const result = await unifiedTo.candidate.createAtsCandidate({
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
      id: "76515b6c-3d26-4f59-96d0-399ee4ce0ceb",
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
          id: "56d93be1-b293-469b-b99d-fc3dc590086c",
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
      updatedAt: new Date("2024-05-05T02:45:42.163Z"),
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
      id: "76515b6c-3d26-4f59-96d0-399ee4ce0ceb",
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
          id: "56d93be1-b293-469b-b99d-fc3dc590086c",
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
      updatedAt: new Date("2024-05-05T02:45:42.163Z"),
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
  const result = await unifiedTo.candidate.getAtsCandidate({
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
  const result = await unifiedTo.candidate.listAtsCandidates({
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
  const result = await unifiedTo.candidate.patchAtsCandidate({
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
      id: "2ed3755a-0bc1-47b6-bd95-65549791ace5",
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
          id: "2783b998-e698-4d04-9469-7a069b94cb18",
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
      updatedAt: new Date("2024-05-05T02:45:42.175Z"),
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
      id: "2ed3755a-0bc1-47b6-bd95-65549791ace5",
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
          id: "2783b998-e698-4d04-9469-7a069b94cb18",
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
      updatedAt: new Date("2024-05-05T02:45:42.175Z"),
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
  const result = await unifiedTo.candidate.removeAtsCandidate({
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
  const result = await unifiedTo.candidate.updateAtsCandidate({
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
      id: "2ed3755a-0bc1-47b6-bd95-65549791ace5",
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
          id: "2783b998-e698-4d04-9469-7a069b94cb18",
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
      updatedAt: new Date("2024-05-05T02:45:42.175Z"),
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
      id: "2ed3755a-0bc1-47b6-bd95-65549791ace5",
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
          id: "2783b998-e698-4d04-9469-7a069b94cb18",
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
      updatedAt: new Date("2024-05-05T02:45:42.175Z"),
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