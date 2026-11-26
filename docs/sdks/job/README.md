# Job

## Overview

### Available Operations

* [createAtsJob](#createatsjob) - Create a job
* [createHrisJob](#createhrisjob) - Create a job
* [getAtsJob](#getatsjob) - Retrieve a job
* [getHrisJob](#gethrisjob) - Retrieve a job
* [listAtsJobs](#listatsjobs) - List all jobs
* [listHrisJobs](#listhrisjobs) - List all jobs
* [patchAtsJob](#patchatsjob) - Update a job
* [patchHrisJob](#patchhrisjob) - Update a job
* [removeAtsJob](#removeatsjob) - Remove a job
* [removeHrisJob](#removehrisjob) - Remove a job
* [updateAtsJob](#updateatsjob) - Update a job
* [updateHrisJob](#updatehrisjob) - Update a job

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
  const result = await unifiedTo.job.createAtsJob({
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

## createHrisJob

Creates a HrisJob. Provide the unified HrisJob fields in the request body; they are mapped to the provider's API. Returns the created HrisJob.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createHrisJob" method="post" path="/hris/{connection_id}/job" example="hris_job" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.job.createHrisJob({
    hrisJob: {
      code: "P-54753",
      createdAt: new Date("2020-10-28T01:13:19.491Z"),
      description: "Bonus vobis creator tabella callide cavus triumphus caveo abbas patria.",
      employmentType: "FREELANCE",
      id: "ba643af1-b64b-4c47-9c20-fcfe15073c0f",
      isActive: false,
      metadata: [],
      name: "Customer Security Assistant",
      updatedAt: new Date("2023-02-12T19:30:32.895Z"),
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
import { jobCreateHrisJob } from "@unified-api/typescript-sdk/funcs/jobCreateHrisJob.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await jobCreateHrisJob(unifiedTo, {
    hrisJob: {
      code: "P-54753",
      createdAt: new Date("2020-10-28T01:13:19.491Z"),
      description: "Bonus vobis creator tabella callide cavus triumphus caveo abbas patria.",
      employmentType: "FREELANCE",
      id: "ba643af1-b64b-4c47-9c20-fcfe15073c0f",
      isActive: false,
      metadata: [],
      name: "Customer Security Assistant",
      updatedAt: new Date("2023-02-12T19:30:32.895Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobCreateHrisJob failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateHrisJobRequest](../../sdk/models/operations/createhrisjobrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisJob](../../sdk/models/shared/hrisjob.md)\>**

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
  const result = await unifiedTo.job.getAtsJob({
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

## getHrisJob

Retrieves a single HrisJob by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getHrisJob" method="get" path="/hris/{connection_id}/job/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.job.getHrisJob({
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
import { jobGetHrisJob } from "@unified-api/typescript-sdk/funcs/jobGetHrisJob.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await jobGetHrisJob(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobGetHrisJob failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetHrisJobRequest](../../sdk/models/operations/gethrisjobrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisJob](../../sdk/models/shared/hrisjob.md)\>**

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
  const result = await unifiedTo.job.listAtsJobs({
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

## listHrisJobs

Returns a list of HrisJobs. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listHrisJobs" method="get" path="/hris/{connection_id}/job" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.job.listHrisJobs({
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
import { jobListHrisJobs } from "@unified-api/typescript-sdk/funcs/jobListHrisJobs.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await jobListHrisJobs(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobListHrisJobs failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListHrisJobsRequest](../../sdk/models/operations/listhrisjobsrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisJob[]](../../models/.md)\>**

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
  const result = await unifiedTo.job.patchAtsJob({
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

## patchHrisJob

Updates the HrisJob identified by `id`. Provide the unified HrisJob fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchHrisJob" method="patch" path="/hris/{connection_id}/job/{id}" example="hris_job" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.job.patchHrisJob({
    hrisJob: {
      code: "P-54753",
      createdAt: new Date("2020-10-28T01:13:19.491Z"),
      description: "Bonus vobis creator tabella callide cavus triumphus caveo abbas patria.",
      employmentType: "FREELANCE",
      id: "d1f47fe9-1228-4fa2-831e-e18826600301",
      isActive: false,
      metadata: [],
      name: "Customer Security Assistant",
      updatedAt: new Date("2023-02-12T19:30:32.937Z"),
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
import { jobPatchHrisJob } from "@unified-api/typescript-sdk/funcs/jobPatchHrisJob.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await jobPatchHrisJob(unifiedTo, {
    hrisJob: {
      code: "P-54753",
      createdAt: new Date("2020-10-28T01:13:19.491Z"),
      description: "Bonus vobis creator tabella callide cavus triumphus caveo abbas patria.",
      employmentType: "FREELANCE",
      id: "d1f47fe9-1228-4fa2-831e-e18826600301",
      isActive: false,
      metadata: [],
      name: "Customer Security Assistant",
      updatedAt: new Date("2023-02-12T19:30:32.937Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobPatchHrisJob failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchHrisJobRequest](../../sdk/models/operations/patchhrisjobrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisJob](../../sdk/models/shared/hrisjob.md)\>**

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
  const result = await unifiedTo.job.removeAtsJob({
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

## removeHrisJob

Deletes the HrisJob identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeHrisJob" method="delete" path="/hris/{connection_id}/job/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.job.removeHrisJob({
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
import { jobRemoveHrisJob } from "@unified-api/typescript-sdk/funcs/jobRemoveHrisJob.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await jobRemoveHrisJob(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobRemoveHrisJob failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveHrisJobRequest](../../sdk/models/operations/removehrisjobrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveHrisJobResponse](../../sdk/models/operations/removehrisjobresponse.md)\>**

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
  const result = await unifiedTo.job.updateAtsJob({
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

## updateHrisJob

Updates the HrisJob identified by `id`. Provide the unified HrisJob fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateHrisJob" method="put" path="/hris/{connection_id}/job/{id}" example="hris_job" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.job.updateHrisJob({
    hrisJob: {
      code: "P-54753",
      createdAt: new Date("2020-10-28T01:13:19.491Z"),
      description: "Bonus vobis creator tabella callide cavus triumphus caveo abbas patria.",
      employmentType: "FREELANCE",
      id: "d1f47fe9-1228-4fa2-831e-e18826600301",
      isActive: false,
      metadata: [],
      name: "Customer Security Assistant",
      updatedAt: new Date("2023-02-12T19:30:32.937Z"),
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
import { jobUpdateHrisJob } from "@unified-api/typescript-sdk/funcs/jobUpdateHrisJob.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await jobUpdateHrisJob(unifiedTo, {
    hrisJob: {
      code: "P-54753",
      createdAt: new Date("2020-10-28T01:13:19.491Z"),
      description: "Bonus vobis creator tabella callide cavus triumphus caveo abbas patria.",
      employmentType: "FREELANCE",
      id: "d1f47fe9-1228-4fa2-831e-e18826600301",
      isActive: false,
      metadata: [],
      name: "Customer Security Assistant",
      updatedAt: new Date("2023-02-12T19:30:32.937Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("jobUpdateHrisJob failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateHrisJobRequest](../../sdk/models/operations/updatehrisjobrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HrisJob](../../sdk/models/shared/hrisjob.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |