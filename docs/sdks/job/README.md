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
      hiringManagers: [
        {
          id: "eb3bbf4e-4022-4122-9d44-39fd5b501e80",
          name: "Troy Greenholt",
        },
      ],
      id: "1cd914e5-8f29-42b9-9dda-d5fca5b166e7",
      industry: "Modern Granite Gloves",
      languageLocale: "en",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "ce270e0c-116e-41a9-8f27-5f04956ed67a",
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
          openedAt: new Date("2026-06-03T11:12:18.493Z"),
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
          createdAt: new Date("2026-07-28T08:50:22.674Z"),
          description: "Provident turbo cunabula spoliatio agnitio.",
          id: "372178cd-2056-4388-870e-e7c199761c7c",
          isActive: false,
          location: "2925 Connie Green",
          name: "Lead Intranet Developer",
          postingUrl: "https://smart-summer.name/",
          updatedAt: new Date("2026-08-23T13:39:06.765Z"),
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
      updatedAt: new Date("2026-02-23T09:20:41.482Z"),
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
      id: "1cd914e5-8f29-42b9-9dda-d5fca5b166e7",
      industry: "Modern Granite Gloves",
      languageLocale: "en",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "ce270e0c-116e-41a9-8f27-5f04956ed67a",
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
          openedAt: new Date("2026-06-03T11:12:18.493Z"),
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
          createdAt: new Date("2026-07-28T08:50:22.674Z"),
          description: "Provident turbo cunabula spoliatio agnitio.",
          id: "372178cd-2056-4388-870e-e7c199761c7c",
          isActive: false,
          location: "2925 Connie Green",
          name: "Lead Intranet Developer",
          postingUrl: "https://smart-summer.name/",
          updatedAt: new Date("2026-08-23T13:39:06.765Z"),
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
      updatedAt: new Date("2026-02-23T09:20:41.482Z"),
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

Create a job

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
      id: "be4a36f3-7d5a-41ba-8ed1-240c459ea95b",
      isActive: false,
      name: "Internal Integration Specialist",
      updatedAt: new Date("2023-01-28T08:13:38.998Z"),
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
      id: "be4a36f3-7d5a-41ba-8ed1-240c459ea95b",
      isActive: false,
      name: "Internal Integration Specialist",
      updatedAt: new Date("2023-01-28T08:13:38.998Z"),
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

Retrieve a job

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

List all jobs

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
      hiringManagers: [
        {
          id: "eb3bbf4e-4022-4122-9d44-39fd5b501e80",
          name: "Troy Greenholt",
        },
      ],
      id: "8cbe6019-ffb1-4fd8-8695-7c5d015f5bd0",
      industry: "Modern Granite Gloves",
      languageLocale: "en",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "2b0429ed-538d-4eb2-857c-108e33d43022",
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
          openedAt: new Date("2026-06-03T11:12:18.552Z"),
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
          createdAt: new Date("2026-07-28T08:50:22.736Z"),
          description: "Provident turbo cunabula spoliatio agnitio.",
          id: "372178cd-2056-4388-870e-e7c199761c7c",
          isActive: false,
          location: "2925 Connie Green",
          name: "Lead Intranet Developer",
          postingUrl: "https://smart-summer.name/",
          updatedAt: new Date("2026-08-23T13:39:06.828Z"),
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
      updatedAt: new Date("2026-02-23T09:20:41.535Z"),
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
      id: "8cbe6019-ffb1-4fd8-8695-7c5d015f5bd0",
      industry: "Modern Granite Gloves",
      languageLocale: "en",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "2b0429ed-538d-4eb2-857c-108e33d43022",
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
          openedAt: new Date("2026-06-03T11:12:18.552Z"),
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
          createdAt: new Date("2026-07-28T08:50:22.736Z"),
          description: "Provident turbo cunabula spoliatio agnitio.",
          id: "372178cd-2056-4388-870e-e7c199761c7c",
          isActive: false,
          location: "2925 Connie Green",
          name: "Lead Intranet Developer",
          postingUrl: "https://smart-summer.name/",
          updatedAt: new Date("2026-08-23T13:39:06.828Z"),
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
      updatedAt: new Date("2026-02-23T09:20:41.535Z"),
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

Update a job

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
      id: "fcb15c06-0cad-4223-84ff-501215551467",
      isActive: false,
      name: "Internal Integration Specialist",
      updatedAt: new Date("2023-01-28T08:13:39.056Z"),
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
      id: "fcb15c06-0cad-4223-84ff-501215551467",
      isActive: false,
      name: "Internal Integration Specialist",
      updatedAt: new Date("2023-01-28T08:13:39.056Z"),
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

Remove a job

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
      hiringManagers: [
        {
          id: "eb3bbf4e-4022-4122-9d44-39fd5b501e80",
          name: "Troy Greenholt",
        },
      ],
      id: "8cbe6019-ffb1-4fd8-8695-7c5d015f5bd0",
      industry: "Modern Granite Gloves",
      languageLocale: "en",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "2b0429ed-538d-4eb2-857c-108e33d43022",
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
          openedAt: new Date("2026-06-03T11:12:18.552Z"),
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
          createdAt: new Date("2026-07-28T08:50:22.736Z"),
          description: "Provident turbo cunabula spoliatio agnitio.",
          id: "372178cd-2056-4388-870e-e7c199761c7c",
          isActive: false,
          location: "2925 Connie Green",
          name: "Lead Intranet Developer",
          postingUrl: "https://smart-summer.name/",
          updatedAt: new Date("2026-08-23T13:39:06.828Z"),
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
      updatedAt: new Date("2026-02-23T09:20:41.535Z"),
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
      id: "8cbe6019-ffb1-4fd8-8695-7c5d015f5bd0",
      industry: "Modern Granite Gloves",
      languageLocale: "en",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "2b0429ed-538d-4eb2-857c-108e33d43022",
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
          openedAt: new Date("2026-06-03T11:12:18.552Z"),
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
          createdAt: new Date("2026-07-28T08:50:22.736Z"),
          description: "Provident turbo cunabula spoliatio agnitio.",
          id: "372178cd-2056-4388-870e-e7c199761c7c",
          isActive: false,
          location: "2925 Connie Green",
          name: "Lead Intranet Developer",
          postingUrl: "https://smart-summer.name/",
          updatedAt: new Date("2026-08-23T13:39:06.828Z"),
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
      updatedAt: new Date("2026-02-23T09:20:41.535Z"),
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

Update a job

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
      id: "fcb15c06-0cad-4223-84ff-501215551467",
      isActive: false,
      name: "Internal Integration Specialist",
      updatedAt: new Date("2023-01-28T08:13:39.056Z"),
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
      id: "fcb15c06-0cad-4223-84ff-501215551467",
      isActive: false,
      name: "Internal Integration Specialist",
      updatedAt: new Date("2023-01-28T08:13:39.056Z"),
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