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
  const result = await unifiedTo.candidate.createAtsCandidate({
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
      id: "bca3ab81-ed3a-4b76-afe3-78afbb2b1dad",
      imageUrl: "https://avatars.githubusercontent.com/u/27464445",
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
          id: "587c7316-a29a-430b-acb0-b09d0c0598eb",
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
      updatedAt: new Date("2024-04-28T17:53:29.995Z"),
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
      id: "bca3ab81-ed3a-4b76-afe3-78afbb2b1dad",
      imageUrl: "https://avatars.githubusercontent.com/u/27464445",
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
          id: "587c7316-a29a-430b-acb0-b09d0c0598eb",
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
      updatedAt: new Date("2024-04-28T17:53:29.995Z"),
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
  const result = await unifiedTo.candidate.patchAtsCandidate({
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
      id: "88777c66-46ba-415c-ba8e-16bf603d9518",
      imageUrl: "https://avatars.githubusercontent.com/u/27464445",
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
          id: "be4aa2c3-6458-4652-b561-48fb38190de8",
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
      updatedAt: new Date("2024-04-28T17:53:30.003Z"),
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
      id: "88777c66-46ba-415c-ba8e-16bf603d9518",
      imageUrl: "https://avatars.githubusercontent.com/u/27464445",
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
          id: "be4aa2c3-6458-4652-b561-48fb38190de8",
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
      updatedAt: new Date("2024-04-28T17:53:30.003Z"),
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
  const result = await unifiedTo.candidate.updateAtsCandidate({
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
      id: "88777c66-46ba-415c-ba8e-16bf603d9518",
      imageUrl: "https://avatars.githubusercontent.com/u/27464445",
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
          id: "be4aa2c3-6458-4652-b561-48fb38190de8",
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
      updatedAt: new Date("2024-04-28T17:53:30.003Z"),
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
      id: "88777c66-46ba-415c-ba8e-16bf603d9518",
      imageUrl: "https://avatars.githubusercontent.com/u/27464445",
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
          id: "be4aa2c3-6458-4652-b561-48fb38190de8",
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
      updatedAt: new Date("2024-04-28T17:53:30.003Z"),
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