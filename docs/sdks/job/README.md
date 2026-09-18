# Job

## Overview

### Available Operations

* [createAtsJob](#createatsjob) - Create a job
* [getAtsJob](#getatsjob) - Retrieve a job
* [listAtsJobs](#listatsjobs) - List all jobs
* [patchAtsJob](#patchatsjob) - Update a job
* [removeAtsJob](#removeatsjob) - Remove a job
* [updateAtsJob](#updateatsjob) - Update a job

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
          id: "fd9852e3-9035-4f42-beb3-bbf4e4022122",
          name: "Eloise Mueller PhD",
        },
      ],
      id: "66ab0110-f43b-4a2e-ac77-00ee9ed7d453",
      industry: "Gorgeous Plastic Computer",
      languageLocale: "en",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "fe031341-9e80-483c-9552-147da99d959e",
          namespace: "custom",
          slug: "custom_property",
          value: "acceptus",
        },
      ],
      minimumDegree: "Bachelor",
      minimumExperienceYears: 3,
      name: "Forward Brand Producer",
      numberOfOpenings: 1,
      openings: [
        {
          closeReason: "Admoveo trado textilis.",
          openedAt: new Date("2026-05-09T12:56:29.780Z"),
          status: "OPEN",
        },
      ],
      postings: [
        {
          address: {
            address1: "8460 Nils Trace",
            city: "West Mervinburgh",
            countryCode: "US",
            postalCode: "14162",
            region: "Maine",
            regionCode: "MO",
          },
          createdAt: new Date("2026-07-02T04:14:45.189Z"),
          description: "Deduco cultellus alii terebro depono thesaurus.",
          id: "f6101769-deb3-4721-978c-d205638870ee",
          isActive: false,
          location: "6788 Oxford Road",
          name: "Forward Security Orchestrator",
          postingUrl: "https://ajar-metabolite.net/",
          updatedAt: new Date("2026-07-27T18:35:01.326Z"),
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
          id: "b3a0b53b-38f3-4e8d-84b9-f413a900d79b",
          options: [
            "odit",
          ],
          prompt: "Similique absque temeritas celebrer enim.",
          question: "Vinitor sodalitas desino sollers viduo volo.",
          required: false,
          type: "TEXT",
        },
        {
          description: "Abstergo possimus quibusdam deinde amoveo.",
          id: "568be61d-060e-4d8c-a8ab-8a17cb25edf3",
          options: [
            "vallum",
          ],
          prompt: "Ara thermae aetas vivo constans victoria volo carbo vehemens praesentium.",
          question: "Subiungo ambitus neque talis amitto terreo alienus quae vulticulus.",
          required: false,
          type: "TEXT",
        },
      ],
      skills: [
        "amiculum",
        "crux",
      ],
      status: "ARCHIVED",
      updatedAt: new Date("2026-01-31T18:22:08.370Z"),
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
          id: "fd9852e3-9035-4f42-beb3-bbf4e4022122",
          name: "Eloise Mueller PhD",
        },
      ],
      id: "66ab0110-f43b-4a2e-ac77-00ee9ed7d453",
      industry: "Gorgeous Plastic Computer",
      languageLocale: "en",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "fe031341-9e80-483c-9552-147da99d959e",
          namespace: "custom",
          slug: "custom_property",
          value: "acceptus",
        },
      ],
      minimumDegree: "Bachelor",
      minimumExperienceYears: 3,
      name: "Forward Brand Producer",
      numberOfOpenings: 1,
      openings: [
        {
          closeReason: "Admoveo trado textilis.",
          openedAt: new Date("2026-05-09T12:56:29.780Z"),
          status: "OPEN",
        },
      ],
      postings: [
        {
          address: {
            address1: "8460 Nils Trace",
            city: "West Mervinburgh",
            countryCode: "US",
            postalCode: "14162",
            region: "Maine",
            regionCode: "MO",
          },
          createdAt: new Date("2026-07-02T04:14:45.189Z"),
          description: "Deduco cultellus alii terebro depono thesaurus.",
          id: "f6101769-deb3-4721-978c-d205638870ee",
          isActive: false,
          location: "6788 Oxford Road",
          name: "Forward Security Orchestrator",
          postingUrl: "https://ajar-metabolite.net/",
          updatedAt: new Date("2026-07-27T18:35:01.326Z"),
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
          id: "b3a0b53b-38f3-4e8d-84b9-f413a900d79b",
          options: [
            "odit",
          ],
          prompt: "Similique absque temeritas celebrer enim.",
          question: "Vinitor sodalitas desino sollers viduo volo.",
          required: false,
          type: "TEXT",
        },
        {
          description: "Abstergo possimus quibusdam deinde amoveo.",
          id: "568be61d-060e-4d8c-a8ab-8a17cb25edf3",
          options: [
            "vallum",
          ],
          prompt: "Ara thermae aetas vivo constans victoria volo carbo vehemens praesentium.",
          question: "Subiungo ambitus neque talis amitto terreo alienus quae vulticulus.",
          required: false,
          type: "TEXT",
        },
      ],
      skills: [
        "amiculum",
        "crux",
      ],
      status: "ARCHIVED",
      updatedAt: new Date("2026-01-31T18:22:08.370Z"),
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
          id: "fd9852e3-9035-4f42-beb3-bbf4e4022122",
          name: "Eloise Mueller PhD",
        },
      ],
      id: "5cfa40e8-1d71-4a46-bae3-5176a66056a5",
      industry: "Gorgeous Plastic Computer",
      languageLocale: "en",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "60b94c73-9f9e-4396-a602-910042160eed",
          namespace: "custom",
          slug: "custom_property",
          value: "acceptus",
        },
      ],
      minimumDegree: "Bachelor",
      minimumExperienceYears: 3,
      name: "Forward Brand Producer",
      numberOfOpenings: 1,
      openings: [
        {
          closeReason: "Admoveo trado textilis.",
          openedAt: new Date("2026-05-09T12:56:29.822Z"),
          status: "OPEN",
        },
      ],
      postings: [
        {
          address: {
            address1: "8460 Nils Trace",
            city: "West Mervinburgh",
            countryCode: "US",
            postalCode: "14162",
            region: "Maine",
            regionCode: "MO",
          },
          createdAt: new Date("2026-07-02T04:14:45.234Z"),
          description: "Deduco cultellus alii terebro depono thesaurus.",
          id: "f6101769-deb3-4721-978c-d205638870ee",
          isActive: false,
          location: "6788 Oxford Road",
          name: "Forward Security Orchestrator",
          postingUrl: "https://ajar-metabolite.net/",
          updatedAt: new Date("2026-07-27T18:35:01.372Z"),
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
          id: "b3a0b53b-38f3-4e8d-84b9-f413a900d79b",
          options: [
            "odit",
          ],
          prompt: "Similique absque temeritas celebrer enim.",
          question: "Vinitor sodalitas desino sollers viduo volo.",
          required: false,
          type: "TEXT",
        },
        {
          description: "Abstergo possimus quibusdam deinde amoveo.",
          id: "568be61d-060e-4d8c-a8ab-8a17cb25edf3",
          options: [
            "vallum",
          ],
          prompt: "Ara thermae aetas vivo constans victoria volo carbo vehemens praesentium.",
          question: "Subiungo ambitus neque talis amitto terreo alienus quae vulticulus.",
          required: false,
          type: "TEXT",
        },
      ],
      skills: [
        "amiculum",
        "crux",
      ],
      status: "ARCHIVED",
      updatedAt: new Date("2026-01-31T18:22:08.408Z"),
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
          id: "fd9852e3-9035-4f42-beb3-bbf4e4022122",
          name: "Eloise Mueller PhD",
        },
      ],
      id: "5cfa40e8-1d71-4a46-bae3-5176a66056a5",
      industry: "Gorgeous Plastic Computer",
      languageLocale: "en",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "60b94c73-9f9e-4396-a602-910042160eed",
          namespace: "custom",
          slug: "custom_property",
          value: "acceptus",
        },
      ],
      minimumDegree: "Bachelor",
      minimumExperienceYears: 3,
      name: "Forward Brand Producer",
      numberOfOpenings: 1,
      openings: [
        {
          closeReason: "Admoveo trado textilis.",
          openedAt: new Date("2026-05-09T12:56:29.822Z"),
          status: "OPEN",
        },
      ],
      postings: [
        {
          address: {
            address1: "8460 Nils Trace",
            city: "West Mervinburgh",
            countryCode: "US",
            postalCode: "14162",
            region: "Maine",
            regionCode: "MO",
          },
          createdAt: new Date("2026-07-02T04:14:45.234Z"),
          description: "Deduco cultellus alii terebro depono thesaurus.",
          id: "f6101769-deb3-4721-978c-d205638870ee",
          isActive: false,
          location: "6788 Oxford Road",
          name: "Forward Security Orchestrator",
          postingUrl: "https://ajar-metabolite.net/",
          updatedAt: new Date("2026-07-27T18:35:01.372Z"),
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
          id: "b3a0b53b-38f3-4e8d-84b9-f413a900d79b",
          options: [
            "odit",
          ],
          prompt: "Similique absque temeritas celebrer enim.",
          question: "Vinitor sodalitas desino sollers viduo volo.",
          required: false,
          type: "TEXT",
        },
        {
          description: "Abstergo possimus quibusdam deinde amoveo.",
          id: "568be61d-060e-4d8c-a8ab-8a17cb25edf3",
          options: [
            "vallum",
          ],
          prompt: "Ara thermae aetas vivo constans victoria volo carbo vehemens praesentium.",
          question: "Subiungo ambitus neque talis amitto terreo alienus quae vulticulus.",
          required: false,
          type: "TEXT",
        },
      ],
      skills: [
        "amiculum",
        "crux",
      ],
      status: "ARCHIVED",
      updatedAt: new Date("2026-01-31T18:22:08.408Z"),
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
          id: "fd9852e3-9035-4f42-beb3-bbf4e4022122",
          name: "Eloise Mueller PhD",
        },
      ],
      id: "5cfa40e8-1d71-4a46-bae3-5176a66056a5",
      industry: "Gorgeous Plastic Computer",
      languageLocale: "en",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "60b94c73-9f9e-4396-a602-910042160eed",
          namespace: "custom",
          slug: "custom_property",
          value: "acceptus",
        },
      ],
      minimumDegree: "Bachelor",
      minimumExperienceYears: 3,
      name: "Forward Brand Producer",
      numberOfOpenings: 1,
      openings: [
        {
          closeReason: "Admoveo trado textilis.",
          openedAt: new Date("2026-05-09T12:56:29.822Z"),
          status: "OPEN",
        },
      ],
      postings: [
        {
          address: {
            address1: "8460 Nils Trace",
            city: "West Mervinburgh",
            countryCode: "US",
            postalCode: "14162",
            region: "Maine",
            regionCode: "MO",
          },
          createdAt: new Date("2026-07-02T04:14:45.234Z"),
          description: "Deduco cultellus alii terebro depono thesaurus.",
          id: "f6101769-deb3-4721-978c-d205638870ee",
          isActive: false,
          location: "6788 Oxford Road",
          name: "Forward Security Orchestrator",
          postingUrl: "https://ajar-metabolite.net/",
          updatedAt: new Date("2026-07-27T18:35:01.372Z"),
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
          id: "b3a0b53b-38f3-4e8d-84b9-f413a900d79b",
          options: [
            "odit",
          ],
          prompt: "Similique absque temeritas celebrer enim.",
          question: "Vinitor sodalitas desino sollers viduo volo.",
          required: false,
          type: "TEXT",
        },
        {
          description: "Abstergo possimus quibusdam deinde amoveo.",
          id: "568be61d-060e-4d8c-a8ab-8a17cb25edf3",
          options: [
            "vallum",
          ],
          prompt: "Ara thermae aetas vivo constans victoria volo carbo vehemens praesentium.",
          question: "Subiungo ambitus neque talis amitto terreo alienus quae vulticulus.",
          required: false,
          type: "TEXT",
        },
      ],
      skills: [
        "amiculum",
        "crux",
      ],
      status: "ARCHIVED",
      updatedAt: new Date("2026-01-31T18:22:08.408Z"),
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
          id: "fd9852e3-9035-4f42-beb3-bbf4e4022122",
          name: "Eloise Mueller PhD",
        },
      ],
      id: "5cfa40e8-1d71-4a46-bae3-5176a66056a5",
      industry: "Gorgeous Plastic Computer",
      languageLocale: "en",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "60b94c73-9f9e-4396-a602-910042160eed",
          namespace: "custom",
          slug: "custom_property",
          value: "acceptus",
        },
      ],
      minimumDegree: "Bachelor",
      minimumExperienceYears: 3,
      name: "Forward Brand Producer",
      numberOfOpenings: 1,
      openings: [
        {
          closeReason: "Admoveo trado textilis.",
          openedAt: new Date("2026-05-09T12:56:29.822Z"),
          status: "OPEN",
        },
      ],
      postings: [
        {
          address: {
            address1: "8460 Nils Trace",
            city: "West Mervinburgh",
            countryCode: "US",
            postalCode: "14162",
            region: "Maine",
            regionCode: "MO",
          },
          createdAt: new Date("2026-07-02T04:14:45.234Z"),
          description: "Deduco cultellus alii terebro depono thesaurus.",
          id: "f6101769-deb3-4721-978c-d205638870ee",
          isActive: false,
          location: "6788 Oxford Road",
          name: "Forward Security Orchestrator",
          postingUrl: "https://ajar-metabolite.net/",
          updatedAt: new Date("2026-07-27T18:35:01.372Z"),
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
          id: "b3a0b53b-38f3-4e8d-84b9-f413a900d79b",
          options: [
            "odit",
          ],
          prompt: "Similique absque temeritas celebrer enim.",
          question: "Vinitor sodalitas desino sollers viduo volo.",
          required: false,
          type: "TEXT",
        },
        {
          description: "Abstergo possimus quibusdam deinde amoveo.",
          id: "568be61d-060e-4d8c-a8ab-8a17cb25edf3",
          options: [
            "vallum",
          ],
          prompt: "Ara thermae aetas vivo constans victoria volo carbo vehemens praesentium.",
          question: "Subiungo ambitus neque talis amitto terreo alienus quae vulticulus.",
          required: false,
          type: "TEXT",
        },
      ],
      skills: [
        "amiculum",
        "crux",
      ],
      status: "ARCHIVED",
      updatedAt: new Date("2026-01-31T18:22:08.408Z"),
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