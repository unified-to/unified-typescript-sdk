# Application

## Overview

### Available Operations

* [createAtsApplication](#createatsapplication) - Create an application
* [getAtsApplication](#getatsapplication) - Retrieve an application
* [listAtsApplications](#listatsapplications) - List all applications
* [patchAtsApplication](#patchatsapplication) - Update an application
* [removeAtsApplication](#removeatsapplication) - Remove an application
* [updateAtsApplication](#updateatsapplication) - Update an application

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
  const result = await unifiedTo.application.createAtsApplication({
    atsApplication: {
      answers: [],
      appliedAt: new Date("2025-10-10T03:53:06.606Z"),
      createdAt: new Date("2023-10-17T07:19:48.787Z"),
      hiredAt: new Date("2026-05-26T10:16:50.020Z"),
      id: "35bc0c22-cef2-4138-8a0f-003edb02f75a",
      metadata: [
        {
          extraData: {

          },
          format: "TEXT",
          id: "4cc36dc8-90e0-4816-96f0-74ebb9fdef98",
          namespace: "application",
          slug: "stella",
          value: "Caput.",
        },
      ],
      offers: [],
      originalStatus: "vomica",
      originalSubstatus: "allatus",
      rejectedAt: new Date("2026-10-27T09:53:54.155Z"),
      rejectedReason: "Cometes amplitudo videlicet talio.",
      source: "credo",
      status: "REVIEWING",
      summary: "Arguo repudiandae defessus. Adflicto caecus claustrum annus addo vere crebro. Alias sponte turbo sopor vergo surculus nam.",
      updatedAt: new Date("2026-11-03T08:31:34.793Z"),
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
      appliedAt: new Date("2025-10-10T03:53:06.606Z"),
      createdAt: new Date("2023-10-17T07:19:48.787Z"),
      hiredAt: new Date("2026-05-26T10:16:50.020Z"),
      id: "35bc0c22-cef2-4138-8a0f-003edb02f75a",
      metadata: [
        {
          extraData: {
  
          },
          format: "TEXT",
          id: "4cc36dc8-90e0-4816-96f0-74ebb9fdef98",
          namespace: "application",
          slug: "stella",
          value: "Caput.",
        },
      ],
      offers: [],
      originalStatus: "vomica",
      originalSubstatus: "allatus",
      rejectedAt: new Date("2026-10-27T09:53:54.155Z"),
      rejectedReason: "Cometes amplitudo videlicet talio.",
      source: "credo",
      status: "REVIEWING",
      summary: "Arguo repudiandae defessus. Adflicto caecus claustrum annus addo vere crebro. Alias sponte turbo sopor vergo surculus nam.",
      updatedAt: new Date("2026-11-03T08:31:34.793Z"),
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
  const result = await unifiedTo.application.getAtsApplication({
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
  const result = await unifiedTo.application.listAtsApplications({
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
  const result = await unifiedTo.application.patchAtsApplication({
    atsApplication: {
      answers: [],
      appliedAt: new Date("2025-10-10T03:53:06.619Z"),
      createdAt: new Date("2023-10-17T07:19:48.787Z"),
      hiredAt: new Date("2026-05-26T10:16:50.037Z"),
      id: "7d8d8fec-ab84-4e99-b3ef-a31c3326c9dc",
      metadata: [
        {
          extraData: {

          },
          format: "TEXT",
          id: "d1688e37-c008-41ad-912e-c28a784ddd7d",
          namespace: "application",
          slug: "stella",
          value: "Caput.",
        },
      ],
      offers: [],
      originalStatus: "vomica",
      originalSubstatus: "allatus",
      rejectedAt: new Date("2026-10-27T09:53:54.175Z"),
      rejectedReason: "Cometes amplitudo videlicet talio.",
      source: "credo",
      status: "REVIEWING",
      summary: "Arguo repudiandae defessus. Adflicto caecus claustrum annus addo vere crebro. Alias sponte turbo sopor vergo surculus nam.",
      updatedAt: new Date("2026-11-03T08:31:34.813Z"),
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
      appliedAt: new Date("2025-10-10T03:53:06.619Z"),
      createdAt: new Date("2023-10-17T07:19:48.787Z"),
      hiredAt: new Date("2026-05-26T10:16:50.037Z"),
      id: "7d8d8fec-ab84-4e99-b3ef-a31c3326c9dc",
      metadata: [
        {
          extraData: {
  
          },
          format: "TEXT",
          id: "d1688e37-c008-41ad-912e-c28a784ddd7d",
          namespace: "application",
          slug: "stella",
          value: "Caput.",
        },
      ],
      offers: [],
      originalStatus: "vomica",
      originalSubstatus: "allatus",
      rejectedAt: new Date("2026-10-27T09:53:54.175Z"),
      rejectedReason: "Cometes amplitudo videlicet talio.",
      source: "credo",
      status: "REVIEWING",
      summary: "Arguo repudiandae defessus. Adflicto caecus claustrum annus addo vere crebro. Alias sponte turbo sopor vergo surculus nam.",
      updatedAt: new Date("2026-11-03T08:31:34.813Z"),
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
  const result = await unifiedTo.application.removeAtsApplication({
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
  const result = await unifiedTo.application.updateAtsApplication({
    atsApplication: {
      answers: [],
      appliedAt: new Date("2025-10-10T03:53:06.619Z"),
      createdAt: new Date("2023-10-17T07:19:48.787Z"),
      hiredAt: new Date("2026-05-26T10:16:50.037Z"),
      id: "7d8d8fec-ab84-4e99-b3ef-a31c3326c9dc",
      metadata: [
        {
          extraData: {

          },
          format: "TEXT",
          id: "d1688e37-c008-41ad-912e-c28a784ddd7d",
          namespace: "application",
          slug: "stella",
          value: "Caput.",
        },
      ],
      offers: [],
      originalStatus: "vomica",
      originalSubstatus: "allatus",
      rejectedAt: new Date("2026-10-27T09:53:54.175Z"),
      rejectedReason: "Cometes amplitudo videlicet talio.",
      source: "credo",
      status: "REVIEWING",
      summary: "Arguo repudiandae defessus. Adflicto caecus claustrum annus addo vere crebro. Alias sponte turbo sopor vergo surculus nam.",
      updatedAt: new Date("2026-11-03T08:31:34.813Z"),
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
      appliedAt: new Date("2025-10-10T03:53:06.619Z"),
      createdAt: new Date("2023-10-17T07:19:48.787Z"),
      hiredAt: new Date("2026-05-26T10:16:50.037Z"),
      id: "7d8d8fec-ab84-4e99-b3ef-a31c3326c9dc",
      metadata: [
        {
          extraData: {
  
          },
          format: "TEXT",
          id: "d1688e37-c008-41ad-912e-c28a784ddd7d",
          namespace: "application",
          slug: "stella",
          value: "Caput.",
        },
      ],
      offers: [],
      originalStatus: "vomica",
      originalSubstatus: "allatus",
      rejectedAt: new Date("2026-10-27T09:53:54.175Z"),
      rejectedReason: "Cometes amplitudo videlicet talio.",
      source: "credo",
      status: "REVIEWING",
      summary: "Arguo repudiandae defessus. Adflicto caecus claustrum annus addo vere crebro. Alias sponte turbo sopor vergo surculus nam.",
      updatedAt: new Date("2026-11-03T08:31:34.813Z"),
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