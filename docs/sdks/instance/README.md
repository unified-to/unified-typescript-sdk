# Instance

## Overview

### Available Operations

* [createComputeInstance](#createcomputeinstance) - Create an instance
* [getComputeInstance](#getcomputeinstance) - Retrieve an instance
* [listComputeInstances](#listcomputeinstances) - List all instances
* [patchComputeInstance](#patchcomputeinstance) - Update an instance
* [removeComputeInstance](#removecomputeinstance) - Remove an instance
* [updateComputeInstance](#updatecomputeinstance) - Update an instance

## createComputeInstance

Create an instance

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createComputeInstance" method="post" path="/compute/{connection_id}/instance" example="compute_instance" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.instance.createComputeInstance({
    computeInstance: {
      allowedActions: [
        "TERMINATE",
      ],
      architecture: "OTHER",
      cpuCount: 8,
      createdAt: new Date("2022-10-07T14:18:53.874Z"),
      currency: "USD",
      diskMb: 1024000,
      endpoints: [
        {
          isAuthRequired: true,
          port: 8080,
          protocol: "HTTPS",
          url: "https://serene-shark.biz/",
        },
      ],
      gpuCount: 0,
      hasInternetAccess: true,
      id: "1e4a9e22-07ad-4170-ac3f-3a8dd4ee4180",
      image: "ubuntu:24.04",
      market: "SPOT",
      memoryMb: 2048,
      metadata: [],
      name: "digital-panel",
      onIdle: "TERMINATE",
      priceAmount: 24.90336107776966,
      priceUnit: "PER_INSTANCE_HOUR",
      projectIdentifier: "g547KrivqY",
      ssh: {
        host: "116.42.165.89",
        port: 22,
        username: "root",
      },
      startedAt: new Date("2025-03-23T05:32:35.472Z"),
      status: "ERROR",
      statusReason: "Sponte quasi adversus alioqui reiciendis arca carmen canis.",
      type: "BAREMETAL",
      updatedAt: new Date("2025-06-15T09:25:14.575Z"),
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
import { computeCreateComputeInstance } from "@unified-api/typescript-sdk/funcs/computeCreateComputeInstance.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await computeCreateComputeInstance(unifiedTo, {
    computeInstance: {
      allowedActions: [
        "TERMINATE",
      ],
      architecture: "OTHER",
      cpuCount: 8,
      createdAt: new Date("2022-10-07T14:18:53.874Z"),
      currency: "USD",
      diskMb: 1024000,
      endpoints: [
        {
          isAuthRequired: true,
          port: 8080,
          protocol: "HTTPS",
          url: "https://serene-shark.biz/",
        },
      ],
      gpuCount: 0,
      hasInternetAccess: true,
      id: "1e4a9e22-07ad-4170-ac3f-3a8dd4ee4180",
      image: "ubuntu:24.04",
      market: "SPOT",
      memoryMb: 2048,
      metadata: [],
      name: "digital-panel",
      onIdle: "TERMINATE",
      priceAmount: 24.90336107776966,
      priceUnit: "PER_INSTANCE_HOUR",
      projectIdentifier: "g547KrivqY",
      ssh: {
        host: "116.42.165.89",
        port: 22,
        username: "root",
      },
      startedAt: new Date("2025-03-23T05:32:35.472Z"),
      status: "ERROR",
      statusReason: "Sponte quasi adversus alioqui reiciendis arca carmen canis.",
      type: "BAREMETAL",
      updatedAt: new Date("2025-06-15T09:25:14.575Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("computeCreateComputeInstance failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateComputeInstanceRequest](../../sdk/models/operations/createcomputeinstancerequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.ComputeInstance](../../sdk/models/shared/computeinstance.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getComputeInstance

Retrieve an instance

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getComputeInstance" method="get" path="/compute/{connection_id}/instance/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.instance.getComputeInstance({
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
import { computeGetComputeInstance } from "@unified-api/typescript-sdk/funcs/computeGetComputeInstance.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await computeGetComputeInstance(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("computeGetComputeInstance failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetComputeInstanceRequest](../../sdk/models/operations/getcomputeinstancerequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.ComputeInstance](../../sdk/models/shared/computeinstance.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listComputeInstances

List all instances

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listComputeInstances" method="get" path="/compute/{connection_id}/instance" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.instance.listComputeInstances({
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
import { computeListComputeInstances } from "@unified-api/typescript-sdk/funcs/computeListComputeInstances.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await computeListComputeInstances(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("computeListComputeInstances failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListComputeInstancesRequest](../../sdk/models/operations/listcomputeinstancesrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.ComputeInstance[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchComputeInstance

Update an instance

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchComputeInstance" method="patch" path="/compute/{connection_id}/instance/{id}" example="compute_instance" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.instance.patchComputeInstance({
    computeInstance: {
      allowedActions: [
        "TERMINATE",
      ],
      architecture: "OTHER",
      cpuCount: 8,
      createdAt: new Date("2022-10-07T14:18:53.874Z"),
      currency: "USD",
      diskMb: 1024000,
      endpoints: [
        {
          isAuthRequired: true,
          port: 8080,
          protocol: "HTTPS",
          url: "https://serene-shark.biz/",
        },
      ],
      gpuCount: 0,
      hasInternetAccess: true,
      id: "12ca1ad4-a2f3-4f5d-ae0c-8a26a3ccf636",
      image: "ubuntu:24.04",
      market: "SPOT",
      memoryMb: 2048,
      metadata: [],
      name: "digital-panel",
      onIdle: "TERMINATE",
      priceAmount: 24.90336107776966,
      priceUnit: "PER_INSTANCE_HOUR",
      projectIdentifier: "g547KrivqY",
      ssh: {
        host: "116.42.165.89",
        port: 22,
        username: "root",
      },
      startedAt: new Date("2025-03-23T05:32:35.489Z"),
      status: "ERROR",
      statusReason: "Sponte quasi adversus alioqui reiciendis arca carmen canis.",
      type: "BAREMETAL",
      updatedAt: new Date("2025-06-15T09:25:14.593Z"),
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
import { computePatchComputeInstance } from "@unified-api/typescript-sdk/funcs/computePatchComputeInstance.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await computePatchComputeInstance(unifiedTo, {
    computeInstance: {
      allowedActions: [
        "TERMINATE",
      ],
      architecture: "OTHER",
      cpuCount: 8,
      createdAt: new Date("2022-10-07T14:18:53.874Z"),
      currency: "USD",
      diskMb: 1024000,
      endpoints: [
        {
          isAuthRequired: true,
          port: 8080,
          protocol: "HTTPS",
          url: "https://serene-shark.biz/",
        },
      ],
      gpuCount: 0,
      hasInternetAccess: true,
      id: "12ca1ad4-a2f3-4f5d-ae0c-8a26a3ccf636",
      image: "ubuntu:24.04",
      market: "SPOT",
      memoryMb: 2048,
      metadata: [],
      name: "digital-panel",
      onIdle: "TERMINATE",
      priceAmount: 24.90336107776966,
      priceUnit: "PER_INSTANCE_HOUR",
      projectIdentifier: "g547KrivqY",
      ssh: {
        host: "116.42.165.89",
        port: 22,
        username: "root",
      },
      startedAt: new Date("2025-03-23T05:32:35.489Z"),
      status: "ERROR",
      statusReason: "Sponte quasi adversus alioqui reiciendis arca carmen canis.",
      type: "BAREMETAL",
      updatedAt: new Date("2025-06-15T09:25:14.593Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("computePatchComputeInstance failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchComputeInstanceRequest](../../sdk/models/operations/patchcomputeinstancerequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.ComputeInstance](../../sdk/models/shared/computeinstance.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeComputeInstance

Remove an instance

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeComputeInstance" method="delete" path="/compute/{connection_id}/instance/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.instance.removeComputeInstance({
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
import { computeRemoveComputeInstance } from "@unified-api/typescript-sdk/funcs/computeRemoveComputeInstance.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await computeRemoveComputeInstance(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("computeRemoveComputeInstance failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveComputeInstanceRequest](../../sdk/models/operations/removecomputeinstancerequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveComputeInstanceResponse](../../sdk/models/operations/removecomputeinstanceresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateComputeInstance

Update an instance

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateComputeInstance" method="put" path="/compute/{connection_id}/instance/{id}" example="compute_instance" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.instance.updateComputeInstance({
    computeInstance: {
      allowedActions: [
        "TERMINATE",
      ],
      architecture: "OTHER",
      cpuCount: 8,
      createdAt: new Date("2022-10-07T14:18:53.874Z"),
      currency: "USD",
      diskMb: 1024000,
      endpoints: [
        {
          isAuthRequired: true,
          port: 8080,
          protocol: "HTTPS",
          url: "https://serene-shark.biz/",
        },
      ],
      gpuCount: 0,
      hasInternetAccess: true,
      id: "12ca1ad4-a2f3-4f5d-ae0c-8a26a3ccf636",
      image: "ubuntu:24.04",
      market: "SPOT",
      memoryMb: 2048,
      metadata: [],
      name: "digital-panel",
      onIdle: "TERMINATE",
      priceAmount: 24.90336107776966,
      priceUnit: "PER_INSTANCE_HOUR",
      projectIdentifier: "g547KrivqY",
      ssh: {
        host: "116.42.165.89",
        port: 22,
        username: "root",
      },
      startedAt: new Date("2025-03-23T05:32:35.489Z"),
      status: "ERROR",
      statusReason: "Sponte quasi adversus alioqui reiciendis arca carmen canis.",
      type: "BAREMETAL",
      updatedAt: new Date("2025-06-15T09:25:14.593Z"),
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
import { computeUpdateComputeInstance } from "@unified-api/typescript-sdk/funcs/computeUpdateComputeInstance.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await computeUpdateComputeInstance(unifiedTo, {
    computeInstance: {
      allowedActions: [
        "TERMINATE",
      ],
      architecture: "OTHER",
      cpuCount: 8,
      createdAt: new Date("2022-10-07T14:18:53.874Z"),
      currency: "USD",
      diskMb: 1024000,
      endpoints: [
        {
          isAuthRequired: true,
          port: 8080,
          protocol: "HTTPS",
          url: "https://serene-shark.biz/",
        },
      ],
      gpuCount: 0,
      hasInternetAccess: true,
      id: "12ca1ad4-a2f3-4f5d-ae0c-8a26a3ccf636",
      image: "ubuntu:24.04",
      market: "SPOT",
      memoryMb: 2048,
      metadata: [],
      name: "digital-panel",
      onIdle: "TERMINATE",
      priceAmount: 24.90336107776966,
      priceUnit: "PER_INSTANCE_HOUR",
      projectIdentifier: "g547KrivqY",
      ssh: {
        host: "116.42.165.89",
        port: 22,
        username: "root",
      },
      startedAt: new Date("2025-03-23T05:32:35.489Z"),
      status: "ERROR",
      statusReason: "Sponte quasi adversus alioqui reiciendis arca carmen canis.",
      type: "BAREMETAL",
      updatedAt: new Date("2025-06-15T09:25:14.593Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("computeUpdateComputeInstance failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateComputeInstanceRequest](../../sdk/models/operations/updatecomputeinstancerequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.ComputeInstance](../../sdk/models/shared/computeinstance.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |