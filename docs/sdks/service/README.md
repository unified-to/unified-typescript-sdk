# Service

## Overview

### Available Operations

* [createComputeService](#createcomputeservice) - Create a service
* [getComputeService](#getcomputeservice) - Retrieve a service
* [listComputeServices](#listcomputeservices) - List all services
* [patchComputeService](#patchcomputeservice) - Update a service
* [removeComputeService](#removecomputeservice) - Remove a service
* [updateComputeService](#updatecomputeservice) - Update a service

## createComputeService

Create a service

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createComputeService" method="post" path="/compute/{connection_id}/service" example="compute_service" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.service.createComputeService({
    computeService: {
      branch: "main",
      buildCommand: "npm run build",
      createdAt: new Date("2023-10-04T02:06:29.391Z"),
      id: "f2b4a9f6-bb79-465b-a438-8abf1f136486",
      instanceCount: 6,
      maxInstanceCount: 6,
      metadata: [],
      minInstanceCount: 1,
      name: "tame-sideboard",
      projectIdentifier: "4nyWICvPfi",
      repoUrl: "https://github.com/Kimberly_Muller95/tame-sideboard",
      runtime: "python",
      status: "SUSPENDED",
      type: "OTHER",
      updatedAt: new Date("2025-03-31T13:58:33.119Z"),
      url: "https://tame-sideboard.rotating-shoulder.biz",
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
import { computeCreateComputeService } from "@unified-api/typescript-sdk/funcs/computeCreateComputeService.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await computeCreateComputeService(unifiedTo, {
    computeService: {
      branch: "main",
      buildCommand: "npm run build",
      createdAt: new Date("2023-10-04T02:06:29.391Z"),
      id: "f2b4a9f6-bb79-465b-a438-8abf1f136486",
      instanceCount: 6,
      maxInstanceCount: 6,
      metadata: [],
      minInstanceCount: 1,
      name: "tame-sideboard",
      projectIdentifier: "4nyWICvPfi",
      repoUrl: "https://github.com/Kimberly_Muller95/tame-sideboard",
      runtime: "python",
      status: "SUSPENDED",
      type: "OTHER",
      updatedAt: new Date("2025-03-31T13:58:33.119Z"),
      url: "https://tame-sideboard.rotating-shoulder.biz",
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("computeCreateComputeService failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateComputeServiceRequest](../../sdk/models/operations/createcomputeservicerequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.ComputeService](../../sdk/models/shared/computeservice.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getComputeService

Retrieve a service

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getComputeService" method="get" path="/compute/{connection_id}/service/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.service.getComputeService({
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
import { computeGetComputeService } from "@unified-api/typescript-sdk/funcs/computeGetComputeService.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await computeGetComputeService(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("computeGetComputeService failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetComputeServiceRequest](../../sdk/models/operations/getcomputeservicerequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.ComputeService](../../sdk/models/shared/computeservice.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listComputeServices

List all services

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listComputeServices" method="get" path="/compute/{connection_id}/service" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.service.listComputeServices({
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
import { computeListComputeServices } from "@unified-api/typescript-sdk/funcs/computeListComputeServices.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await computeListComputeServices(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("computeListComputeServices failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListComputeServicesRequest](../../sdk/models/operations/listcomputeservicesrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.ComputeService[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchComputeService

Update a service

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchComputeService" method="patch" path="/compute/{connection_id}/service/{id}" example="compute_service" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.service.patchComputeService({
    computeService: {
      branch: "main",
      buildCommand: "npm run build",
      createdAt: new Date("2023-10-04T02:06:29.391Z"),
      id: "2cbb869e-6003-4247-b58c-8908aad99d64",
      instanceCount: 6,
      maxInstanceCount: 6,
      metadata: [],
      minInstanceCount: 1,
      name: "tame-sideboard",
      projectIdentifier: "4nyWICvPfi",
      repoUrl: "https://github.com/Kimberly_Muller95/tame-sideboard",
      runtime: "python",
      status: "SUSPENDED",
      type: "OTHER",
      updatedAt: new Date("2025-03-31T13:58:33.132Z"),
      url: "https://tame-sideboard.rotating-shoulder.biz",
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
import { computePatchComputeService } from "@unified-api/typescript-sdk/funcs/computePatchComputeService.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await computePatchComputeService(unifiedTo, {
    computeService: {
      branch: "main",
      buildCommand: "npm run build",
      createdAt: new Date("2023-10-04T02:06:29.391Z"),
      id: "2cbb869e-6003-4247-b58c-8908aad99d64",
      instanceCount: 6,
      maxInstanceCount: 6,
      metadata: [],
      minInstanceCount: 1,
      name: "tame-sideboard",
      projectIdentifier: "4nyWICvPfi",
      repoUrl: "https://github.com/Kimberly_Muller95/tame-sideboard",
      runtime: "python",
      status: "SUSPENDED",
      type: "OTHER",
      updatedAt: new Date("2025-03-31T13:58:33.132Z"),
      url: "https://tame-sideboard.rotating-shoulder.biz",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("computePatchComputeService failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchComputeServiceRequest](../../sdk/models/operations/patchcomputeservicerequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.ComputeService](../../sdk/models/shared/computeservice.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeComputeService

Remove a service

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeComputeService" method="delete" path="/compute/{connection_id}/service/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.service.removeComputeService({
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
import { computeRemoveComputeService } from "@unified-api/typescript-sdk/funcs/computeRemoveComputeService.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await computeRemoveComputeService(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("computeRemoveComputeService failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveComputeServiceRequest](../../sdk/models/operations/removecomputeservicerequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveComputeServiceResponse](../../sdk/models/operations/removecomputeserviceresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateComputeService

Update a service

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateComputeService" method="put" path="/compute/{connection_id}/service/{id}" example="compute_service" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.service.updateComputeService({
    computeService: {
      branch: "main",
      buildCommand: "npm run build",
      createdAt: new Date("2023-10-04T02:06:29.391Z"),
      id: "2cbb869e-6003-4247-b58c-8908aad99d64",
      instanceCount: 6,
      maxInstanceCount: 6,
      metadata: [],
      minInstanceCount: 1,
      name: "tame-sideboard",
      projectIdentifier: "4nyWICvPfi",
      repoUrl: "https://github.com/Kimberly_Muller95/tame-sideboard",
      runtime: "python",
      status: "SUSPENDED",
      type: "OTHER",
      updatedAt: new Date("2025-03-31T13:58:33.132Z"),
      url: "https://tame-sideboard.rotating-shoulder.biz",
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
import { computeUpdateComputeService } from "@unified-api/typescript-sdk/funcs/computeUpdateComputeService.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await computeUpdateComputeService(unifiedTo, {
    computeService: {
      branch: "main",
      buildCommand: "npm run build",
      createdAt: new Date("2023-10-04T02:06:29.391Z"),
      id: "2cbb869e-6003-4247-b58c-8908aad99d64",
      instanceCount: 6,
      maxInstanceCount: 6,
      metadata: [],
      minInstanceCount: 1,
      name: "tame-sideboard",
      projectIdentifier: "4nyWICvPfi",
      repoUrl: "https://github.com/Kimberly_Muller95/tame-sideboard",
      runtime: "python",
      status: "SUSPENDED",
      type: "OTHER",
      updatedAt: new Date("2025-03-31T13:58:33.132Z"),
      url: "https://tame-sideboard.rotating-shoulder.biz",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("computeUpdateComputeService failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateComputeServiceRequest](../../sdk/models/operations/updatecomputeservicerequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.ComputeService](../../sdk/models/shared/computeservice.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |