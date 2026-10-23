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
      id: "6e1d57ab-e5c4-4e91-a68b-81a982fc488c",
      industry: "Handcrafted Bamboo Soap",
      languageLocale: "en",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "1874d651-fe01-4863-951d-879c911ba8f8",
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
          openedAt: new Date("2026-06-09T16:33:28.211Z"),
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
          createdAt: new Date("2026-08-03T21:45:50.677Z"),
          description: "Beatus eum volutabrum balbus victus ipsa tubineus claustrum.",
          id: "ae574b0c-7825-4d45-bf52-474a7e136ff7",
          isActive: false,
          location: "1725 Hessel Keys",
          name: "International Identity Manager",
          postingUrl: "https://obedient-yak.com",
          updatedAt: new Date("2026-08-30T06:11:23.188Z"),
        },
      ],
      publicJobUrls: [
        "https://trustworthy-elver.info",
        "https://parched-dash.info",
      ],
      questions: [
        {
          description: "Auctus deporto tolero administratio capitulus animi agnosco tendo aetas vado.",
          id: "d3d9929c-e62f-4495-b38a-62bf45dd1907",
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
          id: "7852029a-21ee-4e05-8686-927c6b41308a",
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
          id: "75cef9c7-a9b9-43a7-ae4a-6c00e8527745",
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
      updatedAt: new Date("2026-03-01T00:53:43.224Z"),
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
      id: "6e1d57ab-e5c4-4e91-a68b-81a982fc488c",
      industry: "Handcrafted Bamboo Soap",
      languageLocale: "en",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "1874d651-fe01-4863-951d-879c911ba8f8",
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
          openedAt: new Date("2026-06-09T16:33:28.211Z"),
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
          createdAt: new Date("2026-08-03T21:45:50.677Z"),
          description: "Beatus eum volutabrum balbus victus ipsa tubineus claustrum.",
          id: "ae574b0c-7825-4d45-bf52-474a7e136ff7",
          isActive: false,
          location: "1725 Hessel Keys",
          name: "International Identity Manager",
          postingUrl: "https://obedient-yak.com",
          updatedAt: new Date("2026-08-30T06:11:23.188Z"),
        },
      ],
      publicJobUrls: [
        "https://trustworthy-elver.info",
        "https://parched-dash.info",
      ],
      questions: [
        {
          description: "Auctus deporto tolero administratio capitulus animi agnosco tendo aetas vado.",
          id: "d3d9929c-e62f-4495-b38a-62bf45dd1907",
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
          id: "7852029a-21ee-4e05-8686-927c6b41308a",
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
          id: "75cef9c7-a9b9-43a7-ae4a-6c00e8527745",
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
      updatedAt: new Date("2026-03-01T00:53:43.224Z"),
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
      id: "6990ce84-26d3-4115-8909-7e1a4b82a287",
      isActive: false,
      metadata: [],
      name: "Internal Integration Specialist",
      updatedAt: new Date("2023-01-30T23:35:32.563Z"),
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
      id: "6990ce84-26d3-4115-8909-7e1a4b82a287",
      isActive: false,
      metadata: [],
      name: "Internal Integration Specialist",
      updatedAt: new Date("2023-01-30T23:35:32.563Z"),
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
      id: "1e2b1d86-025d-4ccf-9dce-97f571ce65cd",
      industry: "Handcrafted Bamboo Soap",
      languageLocale: "en",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "a0a59567-de32-46e3-8464-95b67dbbde56",
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
          openedAt: new Date("2026-06-09T16:33:28.248Z"),
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
          createdAt: new Date("2026-08-03T21:45:50.715Z"),
          description: "Beatus eum volutabrum balbus victus ipsa tubineus claustrum.",
          id: "b707ed5b-c596-4a2a-a094-01cb332c29af",
          isActive: false,
          location: "1725 Hessel Keys",
          name: "International Identity Manager",
          postingUrl: "https://obedient-yak.com",
          updatedAt: new Date("2026-08-30T06:11:23.227Z"),
        },
      ],
      publicJobUrls: [
        "https://trustworthy-elver.info",
        "https://parched-dash.info",
      ],
      questions: [
        {
          description: "Auctus deporto tolero administratio capitulus animi agnosco tendo aetas vado.",
          id: "2e5dcbf8-f2cd-4a0d-8479-26c6e821dfa4",
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
          id: "779c0e75-e9b0-441d-b6b5-5cca30f9723a",
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
          id: "0ea94925-6869-442a-96f8-1da748b45203",
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
      updatedAt: new Date("2026-03-01T00:53:43.257Z"),
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
      id: "1e2b1d86-025d-4ccf-9dce-97f571ce65cd",
      industry: "Handcrafted Bamboo Soap",
      languageLocale: "en",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "a0a59567-de32-46e3-8464-95b67dbbde56",
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
          openedAt: new Date("2026-06-09T16:33:28.248Z"),
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
          createdAt: new Date("2026-08-03T21:45:50.715Z"),
          description: "Beatus eum volutabrum balbus victus ipsa tubineus claustrum.",
          id: "b707ed5b-c596-4a2a-a094-01cb332c29af",
          isActive: false,
          location: "1725 Hessel Keys",
          name: "International Identity Manager",
          postingUrl: "https://obedient-yak.com",
          updatedAt: new Date("2026-08-30T06:11:23.227Z"),
        },
      ],
      publicJobUrls: [
        "https://trustworthy-elver.info",
        "https://parched-dash.info",
      ],
      questions: [
        {
          description: "Auctus deporto tolero administratio capitulus animi agnosco tendo aetas vado.",
          id: "2e5dcbf8-f2cd-4a0d-8479-26c6e821dfa4",
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
          id: "779c0e75-e9b0-441d-b6b5-5cca30f9723a",
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
          id: "0ea94925-6869-442a-96f8-1da748b45203",
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
      updatedAt: new Date("2026-03-01T00:53:43.257Z"),
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
      id: "a03f07e9-c722-44b5-916a-597bac7e8fbc",
      isActive: false,
      metadata: [],
      name: "Internal Integration Specialist",
      updatedAt: new Date("2023-01-30T23:35:32.603Z"),
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
      id: "a03f07e9-c722-44b5-916a-597bac7e8fbc",
      isActive: false,
      metadata: [],
      name: "Internal Integration Specialist",
      updatedAt: new Date("2023-01-30T23:35:32.603Z"),
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
      id: "1e2b1d86-025d-4ccf-9dce-97f571ce65cd",
      industry: "Handcrafted Bamboo Soap",
      languageLocale: "en",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "a0a59567-de32-46e3-8464-95b67dbbde56",
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
          openedAt: new Date("2026-06-09T16:33:28.248Z"),
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
          createdAt: new Date("2026-08-03T21:45:50.715Z"),
          description: "Beatus eum volutabrum balbus victus ipsa tubineus claustrum.",
          id: "b707ed5b-c596-4a2a-a094-01cb332c29af",
          isActive: false,
          location: "1725 Hessel Keys",
          name: "International Identity Manager",
          postingUrl: "https://obedient-yak.com",
          updatedAt: new Date("2026-08-30T06:11:23.227Z"),
        },
      ],
      publicJobUrls: [
        "https://trustworthy-elver.info",
        "https://parched-dash.info",
      ],
      questions: [
        {
          description: "Auctus deporto tolero administratio capitulus animi agnosco tendo aetas vado.",
          id: "2e5dcbf8-f2cd-4a0d-8479-26c6e821dfa4",
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
          id: "779c0e75-e9b0-441d-b6b5-5cca30f9723a",
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
          id: "0ea94925-6869-442a-96f8-1da748b45203",
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
      updatedAt: new Date("2026-03-01T00:53:43.257Z"),
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
      id: "1e2b1d86-025d-4ccf-9dce-97f571ce65cd",
      industry: "Handcrafted Bamboo Soap",
      languageLocale: "en",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "a0a59567-de32-46e3-8464-95b67dbbde56",
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
          openedAt: new Date("2026-06-09T16:33:28.248Z"),
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
          createdAt: new Date("2026-08-03T21:45:50.715Z"),
          description: "Beatus eum volutabrum balbus victus ipsa tubineus claustrum.",
          id: "b707ed5b-c596-4a2a-a094-01cb332c29af",
          isActive: false,
          location: "1725 Hessel Keys",
          name: "International Identity Manager",
          postingUrl: "https://obedient-yak.com",
          updatedAt: new Date("2026-08-30T06:11:23.227Z"),
        },
      ],
      publicJobUrls: [
        "https://trustworthy-elver.info",
        "https://parched-dash.info",
      ],
      questions: [
        {
          description: "Auctus deporto tolero administratio capitulus animi agnosco tendo aetas vado.",
          id: "2e5dcbf8-f2cd-4a0d-8479-26c6e821dfa4",
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
          id: "779c0e75-e9b0-441d-b6b5-5cca30f9723a",
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
          id: "0ea94925-6869-442a-96f8-1da748b45203",
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
      updatedAt: new Date("2026-03-01T00:53:43.257Z"),
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
      id: "a03f07e9-c722-44b5-916a-597bac7e8fbc",
      isActive: false,
      metadata: [],
      name: "Internal Integration Specialist",
      updatedAt: new Date("2023-01-30T23:35:32.603Z"),
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
      id: "a03f07e9-c722-44b5-916a-597bac7e8fbc",
      isActive: false,
      metadata: [],
      name: "Internal Integration Specialist",
      updatedAt: new Date("2023-01-30T23:35:32.603Z"),
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