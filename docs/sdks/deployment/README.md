# Deployment

## Overview

### Available Operations

* [createComputeDeployment](#createcomputedeployment) - Create a deployment
* [getComputeDeployment](#getcomputedeployment) - Retrieve a deployment
* [listComputeDeployments](#listcomputedeployments) - List all deployments
* [patchComputeDeployment](#patchcomputedeployment) - Update a deployment
* [removeComputeDeployment](#removecomputedeployment) - Remove a deployment
* [updateComputeDeployment](#updatecomputedeployment) - Update a deployment

## createComputeDeployment

Create a deployment

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createComputeDeployment" method="post" path="/compute/{connection_id}/deployment" example="compute_deployment" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.deployment.createComputeDeployment({
    computeDeployment: {
      branch: "develop",
      commitIdentifier: "fadfe54eefd8fea670bea6d58b4b15d406c4b02b",
      commitMessage: "copy primary pixel",
      createdAt: new Date("2022-06-07T03:52:04.613Z"),
      environment: "PREVIEW",
      finishedAt: new Date("2025-08-23T11:27:27.373Z"),
      id: "98fa03bb-0655-496e-85b1-75d385ed4acd",
      metadata: [],
      startedAt: new Date("2025-04-04T21:33:09.818Z"),
      status: "LIVE",
      trigger: "API",
      updatedAt: new Date("2026-02-21T15:29:28.265Z"),
      url: "https://comfortable-petal.name",
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
import { computeCreateComputeDeployment } from "@unified-api/typescript-sdk/funcs/computeCreateComputeDeployment.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await computeCreateComputeDeployment(unifiedTo, {
    computeDeployment: {
      branch: "develop",
      commitIdentifier: "fadfe54eefd8fea670bea6d58b4b15d406c4b02b",
      commitMessage: "copy primary pixel",
      createdAt: new Date("2022-06-07T03:52:04.613Z"),
      environment: "PREVIEW",
      finishedAt: new Date("2025-08-23T11:27:27.373Z"),
      id: "98fa03bb-0655-496e-85b1-75d385ed4acd",
      metadata: [],
      startedAt: new Date("2025-04-04T21:33:09.818Z"),
      status: "LIVE",
      trigger: "API",
      updatedAt: new Date("2026-02-21T15:29:28.265Z"),
      url: "https://comfortable-petal.name",
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("computeCreateComputeDeployment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateComputeDeploymentRequest](../../sdk/models/operations/createcomputedeploymentrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.ComputeDeployment](../../sdk/models/shared/computedeployment.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getComputeDeployment

Retrieve a deployment

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getComputeDeployment" method="get" path="/compute/{connection_id}/deployment/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.deployment.getComputeDeployment({
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
import { computeGetComputeDeployment } from "@unified-api/typescript-sdk/funcs/computeGetComputeDeployment.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await computeGetComputeDeployment(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("computeGetComputeDeployment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetComputeDeploymentRequest](../../sdk/models/operations/getcomputedeploymentrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.ComputeDeployment](../../sdk/models/shared/computedeployment.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listComputeDeployments

List all deployments

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listComputeDeployments" method="get" path="/compute/{connection_id}/deployment" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.deployment.listComputeDeployments({
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
import { computeListComputeDeployments } from "@unified-api/typescript-sdk/funcs/computeListComputeDeployments.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await computeListComputeDeployments(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("computeListComputeDeployments failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListComputeDeploymentsRequest](../../sdk/models/operations/listcomputedeploymentsrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.ComputeDeployment[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchComputeDeployment

Update a deployment

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchComputeDeployment" method="patch" path="/compute/{connection_id}/deployment/{id}" example="compute_deployment" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.deployment.patchComputeDeployment({
    computeDeployment: {
      branch: "develop",
      commitIdentifier: "fadfe54eefd8fea670bea6d58b4b15d406c4b02b",
      commitMessage: "copy primary pixel",
      createdAt: new Date("2022-06-07T03:52:04.613Z"),
      environment: "PREVIEW",
      finishedAt: new Date("2025-08-23T11:27:27.388Z"),
      id: "f5c34431-ccd9-4237-8de8-1aa135646c9e",
      metadata: [],
      startedAt: new Date("2025-04-04T21:33:09.831Z"),
      status: "LIVE",
      trigger: "API",
      updatedAt: new Date("2026-02-21T15:29:28.281Z"),
      url: "https://comfortable-petal.name",
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
import { computePatchComputeDeployment } from "@unified-api/typescript-sdk/funcs/computePatchComputeDeployment.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await computePatchComputeDeployment(unifiedTo, {
    computeDeployment: {
      branch: "develop",
      commitIdentifier: "fadfe54eefd8fea670bea6d58b4b15d406c4b02b",
      commitMessage: "copy primary pixel",
      createdAt: new Date("2022-06-07T03:52:04.613Z"),
      environment: "PREVIEW",
      finishedAt: new Date("2025-08-23T11:27:27.388Z"),
      id: "f5c34431-ccd9-4237-8de8-1aa135646c9e",
      metadata: [],
      startedAt: new Date("2025-04-04T21:33:09.831Z"),
      status: "LIVE",
      trigger: "API",
      updatedAt: new Date("2026-02-21T15:29:28.281Z"),
      url: "https://comfortable-petal.name",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("computePatchComputeDeployment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchComputeDeploymentRequest](../../sdk/models/operations/patchcomputedeploymentrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.ComputeDeployment](../../sdk/models/shared/computedeployment.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeComputeDeployment

Remove a deployment

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeComputeDeployment" method="delete" path="/compute/{connection_id}/deployment/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.deployment.removeComputeDeployment({
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
import { computeRemoveComputeDeployment } from "@unified-api/typescript-sdk/funcs/computeRemoveComputeDeployment.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await computeRemoveComputeDeployment(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("computeRemoveComputeDeployment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveComputeDeploymentRequest](../../sdk/models/operations/removecomputedeploymentrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveComputeDeploymentResponse](../../sdk/models/operations/removecomputedeploymentresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateComputeDeployment

Update a deployment

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateComputeDeployment" method="put" path="/compute/{connection_id}/deployment/{id}" example="compute_deployment" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.deployment.updateComputeDeployment({
    computeDeployment: {
      branch: "develop",
      commitIdentifier: "fadfe54eefd8fea670bea6d58b4b15d406c4b02b",
      commitMessage: "copy primary pixel",
      createdAt: new Date("2022-06-07T03:52:04.613Z"),
      environment: "PREVIEW",
      finishedAt: new Date("2025-08-23T11:27:27.388Z"),
      id: "f5c34431-ccd9-4237-8de8-1aa135646c9e",
      metadata: [],
      startedAt: new Date("2025-04-04T21:33:09.831Z"),
      status: "LIVE",
      trigger: "API",
      updatedAt: new Date("2026-02-21T15:29:28.281Z"),
      url: "https://comfortable-petal.name",
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
import { computeUpdateComputeDeployment } from "@unified-api/typescript-sdk/funcs/computeUpdateComputeDeployment.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await computeUpdateComputeDeployment(unifiedTo, {
    computeDeployment: {
      branch: "develop",
      commitIdentifier: "fadfe54eefd8fea670bea6d58b4b15d406c4b02b",
      commitMessage: "copy primary pixel",
      createdAt: new Date("2022-06-07T03:52:04.613Z"),
      environment: "PREVIEW",
      finishedAt: new Date("2025-08-23T11:27:27.388Z"),
      id: "f5c34431-ccd9-4237-8de8-1aa135646c9e",
      metadata: [],
      startedAt: new Date("2025-04-04T21:33:09.831Z"),
      status: "LIVE",
      trigger: "API",
      updatedAt: new Date("2026-02-21T15:29:28.281Z"),
      url: "https://comfortable-petal.name",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("computeUpdateComputeDeployment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateComputeDeploymentRequest](../../sdk/models/operations/updatecomputedeploymentrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.ComputeDeployment](../../sdk/models/shared/computedeployment.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |