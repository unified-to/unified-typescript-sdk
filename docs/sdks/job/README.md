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
      id: "a7c7215d-06aa-4e39-b283-bf508562e180",
      industry: "Handcrafted Bamboo Soap",
      languageLocale: "en",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "68cca6fa-037e-4589-902b-4ecd6dfca5f1",
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
          openedAt: new Date("2026-06-13T05:56:40.671Z"),
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
          createdAt: new Date("2026-08-07T15:28:47.038Z"),
          description: "Beatus eum volutabrum balbus victus ipsa tubineus claustrum.",
          id: "c3d43875-8959-4aef-a9a0-3ca550c079a9",
          isActive: false,
          location: "1725 Hessel Keys",
          name: "International Identity Manager",
          postingUrl: "https://obedient-yak.com",
          updatedAt: new Date("2026-09-03T01:58:16.625Z"),
        },
      ],
      publicJobUrls: [
        "https://trustworthy-elver.info",
        "https://parched-dash.info",
      ],
      questions: [
        {
          description: "Auctus deporto tolero administratio capitulus animi agnosco tendo aetas vado.",
          id: "4650b454-8896-4948-9482-e5f85a016100",
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
          id: "f19c9581-9113-40e4-9b2b-90202077be5a",
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
          id: "d51bbe1a-f511-4076-b5fb-a391d3245de5",
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
      updatedAt: new Date("2026-03-04T06:23:28.451Z"),
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
      id: "a7c7215d-06aa-4e39-b283-bf508562e180",
      industry: "Handcrafted Bamboo Soap",
      languageLocale: "en",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "68cca6fa-037e-4589-902b-4ecd6dfca5f1",
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
          openedAt: new Date("2026-06-13T05:56:40.671Z"),
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
          createdAt: new Date("2026-08-07T15:28:47.038Z"),
          description: "Beatus eum volutabrum balbus victus ipsa tubineus claustrum.",
          id: "c3d43875-8959-4aef-a9a0-3ca550c079a9",
          isActive: false,
          location: "1725 Hessel Keys",
          name: "International Identity Manager",
          postingUrl: "https://obedient-yak.com",
          updatedAt: new Date("2026-09-03T01:58:16.625Z"),
        },
      ],
      publicJobUrls: [
        "https://trustworthy-elver.info",
        "https://parched-dash.info",
      ],
      questions: [
        {
          description: "Auctus deporto tolero administratio capitulus animi agnosco tendo aetas vado.",
          id: "4650b454-8896-4948-9482-e5f85a016100",
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
          id: "f19c9581-9113-40e4-9b2b-90202077be5a",
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
          id: "d51bbe1a-f511-4076-b5fb-a391d3245de5",
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
      updatedAt: new Date("2026-03-04T06:23:28.451Z"),
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
      code: "P-05547",
      createdAt: new Date("2020-10-28T01:13:19.491Z"),
      description: "Alienus timor depromo bonus vobis creator tabella callide cavus triumphus caveo.",
      employmentType: "FREELANCE",
      id: "fbbe7d4a-a2ee-4e87-8ee8-fb007f3d02af",
      isActive: false,
      metadata: [],
      name: "Internal Integration Specialist",
      updatedAt: new Date("2023-02-01T11:49:08.053Z"),
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
      code: "P-05547",
      createdAt: new Date("2020-10-28T01:13:19.491Z"),
      description: "Alienus timor depromo bonus vobis creator tabella callide cavus triumphus caveo.",
      employmentType: "FREELANCE",
      id: "fbbe7d4a-a2ee-4e87-8ee8-fb007f3d02af",
      isActive: false,
      metadata: [],
      name: "Internal Integration Specialist",
      updatedAt: new Date("2023-02-01T11:49:08.053Z"),
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
      id: "31654636-f428-437f-a5ed-454899d6d90c",
      industry: "Handcrafted Bamboo Soap",
      languageLocale: "en",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "d0ed3b38-733f-4d3d-b8d9-c9c5ef68e0d6",
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
          openedAt: new Date("2026-06-13T05:56:40.744Z"),
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
          createdAt: new Date("2026-08-07T15:28:47.114Z"),
          description: "Beatus eum volutabrum balbus victus ipsa tubineus claustrum.",
          id: "356b2243-7a8a-47fd-963a-e8322a081a73",
          isActive: false,
          location: "1725 Hessel Keys",
          name: "International Identity Manager",
          postingUrl: "https://obedient-yak.com",
          updatedAt: new Date("2026-09-03T01:58:16.702Z"),
        },
      ],
      publicJobUrls: [
        "https://trustworthy-elver.info",
        "https://parched-dash.info",
      ],
      questions: [
        {
          description: "Auctus deporto tolero administratio capitulus animi agnosco tendo aetas vado.",
          id: "e07286c3-7429-4afc-b876-0886e314c326",
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
          id: "e5c925c0-2f8a-4b0d-bd73-de7da0489dc5",
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
          id: "950c0c4f-4a7c-4d5a-b225-7c23014c491c",
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
      updatedAt: new Date("2026-03-04T06:23:28.516Z"),
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
      id: "31654636-f428-437f-a5ed-454899d6d90c",
      industry: "Handcrafted Bamboo Soap",
      languageLocale: "en",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "d0ed3b38-733f-4d3d-b8d9-c9c5ef68e0d6",
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
          openedAt: new Date("2026-06-13T05:56:40.744Z"),
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
          createdAt: new Date("2026-08-07T15:28:47.114Z"),
          description: "Beatus eum volutabrum balbus victus ipsa tubineus claustrum.",
          id: "356b2243-7a8a-47fd-963a-e8322a081a73",
          isActive: false,
          location: "1725 Hessel Keys",
          name: "International Identity Manager",
          postingUrl: "https://obedient-yak.com",
          updatedAt: new Date("2026-09-03T01:58:16.702Z"),
        },
      ],
      publicJobUrls: [
        "https://trustworthy-elver.info",
        "https://parched-dash.info",
      ],
      questions: [
        {
          description: "Auctus deporto tolero administratio capitulus animi agnosco tendo aetas vado.",
          id: "e07286c3-7429-4afc-b876-0886e314c326",
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
          id: "e5c925c0-2f8a-4b0d-bd73-de7da0489dc5",
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
          id: "950c0c4f-4a7c-4d5a-b225-7c23014c491c",
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
      updatedAt: new Date("2026-03-04T06:23:28.516Z"),
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
      code: "P-05547",
      createdAt: new Date("2020-10-28T01:13:19.491Z"),
      description: "Alienus timor depromo bonus vobis creator tabella callide cavus triumphus caveo.",
      employmentType: "FREELANCE",
      id: "6dab826b-d00a-4099-802a-b0ba5f7f1804",
      isActive: false,
      metadata: [],
      name: "Internal Integration Specialist",
      updatedAt: new Date("2023-02-01T11:49:08.119Z"),
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
      code: "P-05547",
      createdAt: new Date("2020-10-28T01:13:19.491Z"),
      description: "Alienus timor depromo bonus vobis creator tabella callide cavus triumphus caveo.",
      employmentType: "FREELANCE",
      id: "6dab826b-d00a-4099-802a-b0ba5f7f1804",
      isActive: false,
      metadata: [],
      name: "Internal Integration Specialist",
      updatedAt: new Date("2023-02-01T11:49:08.119Z"),
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
      id: "31654636-f428-437f-a5ed-454899d6d90c",
      industry: "Handcrafted Bamboo Soap",
      languageLocale: "en",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "d0ed3b38-733f-4d3d-b8d9-c9c5ef68e0d6",
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
          openedAt: new Date("2026-06-13T05:56:40.744Z"),
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
          createdAt: new Date("2026-08-07T15:28:47.114Z"),
          description: "Beatus eum volutabrum balbus victus ipsa tubineus claustrum.",
          id: "356b2243-7a8a-47fd-963a-e8322a081a73",
          isActive: false,
          location: "1725 Hessel Keys",
          name: "International Identity Manager",
          postingUrl: "https://obedient-yak.com",
          updatedAt: new Date("2026-09-03T01:58:16.702Z"),
        },
      ],
      publicJobUrls: [
        "https://trustworthy-elver.info",
        "https://parched-dash.info",
      ],
      questions: [
        {
          description: "Auctus deporto tolero administratio capitulus animi agnosco tendo aetas vado.",
          id: "e07286c3-7429-4afc-b876-0886e314c326",
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
          id: "e5c925c0-2f8a-4b0d-bd73-de7da0489dc5",
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
          id: "950c0c4f-4a7c-4d5a-b225-7c23014c491c",
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
      updatedAt: new Date("2026-03-04T06:23:28.516Z"),
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
      id: "31654636-f428-437f-a5ed-454899d6d90c",
      industry: "Handcrafted Bamboo Soap",
      languageLocale: "en",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "d0ed3b38-733f-4d3d-b8d9-c9c5ef68e0d6",
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
          openedAt: new Date("2026-06-13T05:56:40.744Z"),
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
          createdAt: new Date("2026-08-07T15:28:47.114Z"),
          description: "Beatus eum volutabrum balbus victus ipsa tubineus claustrum.",
          id: "356b2243-7a8a-47fd-963a-e8322a081a73",
          isActive: false,
          location: "1725 Hessel Keys",
          name: "International Identity Manager",
          postingUrl: "https://obedient-yak.com",
          updatedAt: new Date("2026-09-03T01:58:16.702Z"),
        },
      ],
      publicJobUrls: [
        "https://trustworthy-elver.info",
        "https://parched-dash.info",
      ],
      questions: [
        {
          description: "Auctus deporto tolero administratio capitulus animi agnosco tendo aetas vado.",
          id: "e07286c3-7429-4afc-b876-0886e314c326",
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
          id: "e5c925c0-2f8a-4b0d-bd73-de7da0489dc5",
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
          id: "950c0c4f-4a7c-4d5a-b225-7c23014c491c",
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
      updatedAt: new Date("2026-03-04T06:23:28.516Z"),
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
      code: "P-05547",
      createdAt: new Date("2020-10-28T01:13:19.491Z"),
      description: "Alienus timor depromo bonus vobis creator tabella callide cavus triumphus caveo.",
      employmentType: "FREELANCE",
      id: "6dab826b-d00a-4099-802a-b0ba5f7f1804",
      isActive: false,
      metadata: [],
      name: "Internal Integration Specialist",
      updatedAt: new Date("2023-02-01T11:49:08.119Z"),
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
      code: "P-05547",
      createdAt: new Date("2020-10-28T01:13:19.491Z"),
      description: "Alienus timor depromo bonus vobis creator tabella callide cavus triumphus caveo.",
      employmentType: "FREELANCE",
      id: "6dab826b-d00a-4099-802a-b0ba5f7f1804",
      isActive: false,
      metadata: [],
      name: "Internal Integration Specialist",
      updatedAt: new Date("2023-02-01T11:49:08.119Z"),
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