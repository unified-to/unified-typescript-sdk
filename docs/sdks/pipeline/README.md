# Pipeline

## Overview

### Available Operations

* [createCrmPipeline](#createcrmpipeline) - Create a pipeline
* [getCrmPipeline](#getcrmpipeline) - Retrieve a pipeline
* [listCrmPipelines](#listcrmpipelines) - List all pipelines
* [patchCrmPipeline](#patchcrmpipeline) - Update a pipeline
* [removeCrmPipeline](#removecrmpipeline) - Remove a pipeline
* [updateCrmPipeline](#updatecrmpipeline) - Update a pipeline

## createCrmPipeline

Creates a CrmPipeline. Provide the unified CrmPipeline fields in the request body; they are mapped to the provider's API. Returns the created CrmPipeline.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createCrmPipeline" method="post" path="/crm/{connection_id}/pipeline" example="crm_pipeline" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.pipeline.createCrmPipeline({
    crmPipeline: {
      createdAt: new Date("2022-12-28T13:45:38.446Z"),
      dealProbability: 99,
      displayOrder: 8,
      id: "3d7acdb6-079b-4ec4-b9de-07e232378c0e",
      isActive: true,
      metadata: [],
      name: "Small Steel Bacon",
      stages: [
        {
          active: false,
          createdAt: new Date("2022-12-28T13:45:38.446Z"),
          dealProbability: 84,
          displayOrder: 72,
          id: "794fdec8-604c-4290-a577-25f0ab108f74",
          isClosed: true,
          name: "Veniam.",
          updatedAt: new Date("2025-10-15T14:27:04.306Z"),
        },
      ],
      updatedAt: new Date("2025-11-06T10:29:45.380Z"),
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
import { crmCreateCrmPipeline } from "@unified-api/typescript-sdk/funcs/crmCreateCrmPipeline.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await crmCreateCrmPipeline(unifiedTo, {
    crmPipeline: {
      createdAt: new Date("2022-12-28T13:45:38.446Z"),
      dealProbability: 99,
      displayOrder: 8,
      id: "3d7acdb6-079b-4ec4-b9de-07e232378c0e",
      isActive: true,
      metadata: [],
      name: "Small Steel Bacon",
      stages: [
        {
          active: false,
          createdAt: new Date("2022-12-28T13:45:38.446Z"),
          dealProbability: 84,
          displayOrder: 72,
          id: "794fdec8-604c-4290-a577-25f0ab108f74",
          isClosed: true,
          name: "Veniam.",
          updatedAt: new Date("2025-10-15T14:27:04.306Z"),
        },
      ],
      updatedAt: new Date("2025-11-06T10:29:45.380Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("crmCreateCrmPipeline failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateCrmPipelineRequest](../../sdk/models/operations/createcrmpipelinerequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CrmPipeline](../../sdk/models/shared/crmpipeline.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getCrmPipeline

Retrieves a single CrmPipeline by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCrmPipeline" method="get" path="/crm/{connection_id}/pipeline/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.pipeline.getCrmPipeline({
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
import { crmGetCrmPipeline } from "@unified-api/typescript-sdk/funcs/crmGetCrmPipeline.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await crmGetCrmPipeline(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("crmGetCrmPipeline failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCrmPipelineRequest](../../sdk/models/operations/getcrmpipelinerequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CrmPipeline](../../sdk/models/shared/crmpipeline.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listCrmPipelines

Returns a list of CrmPipelines. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listCrmPipelines" method="get" path="/crm/{connection_id}/pipeline" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.pipeline.listCrmPipelines({
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
import { crmListCrmPipelines } from "@unified-api/typescript-sdk/funcs/crmListCrmPipelines.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await crmListCrmPipelines(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("crmListCrmPipelines failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCrmPipelinesRequest](../../sdk/models/operations/listcrmpipelinesrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CrmPipeline[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchCrmPipeline

Updates the CrmPipeline identified by `id`. Provide the unified CrmPipeline fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchCrmPipeline" method="patch" path="/crm/{connection_id}/pipeline/{id}" example="crm_pipeline" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.pipeline.patchCrmPipeline({
    crmPipeline: {
      createdAt: new Date("2022-12-28T13:45:38.446Z"),
      dealProbability: 99,
      displayOrder: 8,
      id: "ac550507-a877-4f2d-849f-c8d9dfe3adf7",
      isActive: true,
      metadata: [],
      name: "Small Steel Bacon",
      stages: [
        {
          active: false,
          createdAt: new Date("2022-12-28T13:45:38.446Z"),
          dealProbability: 84,
          displayOrder: 72,
          id: "3a4cf836-7dfb-48d3-acb6-548005940e04",
          isClosed: true,
          name: "Veniam.",
          updatedAt: new Date("2025-10-15T14:27:04.317Z"),
        },
      ],
      updatedAt: new Date("2025-11-06T10:29:45.390Z"),
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
import { crmPatchCrmPipeline } from "@unified-api/typescript-sdk/funcs/crmPatchCrmPipeline.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await crmPatchCrmPipeline(unifiedTo, {
    crmPipeline: {
      createdAt: new Date("2022-12-28T13:45:38.446Z"),
      dealProbability: 99,
      displayOrder: 8,
      id: "ac550507-a877-4f2d-849f-c8d9dfe3adf7",
      isActive: true,
      metadata: [],
      name: "Small Steel Bacon",
      stages: [
        {
          active: false,
          createdAt: new Date("2022-12-28T13:45:38.446Z"),
          dealProbability: 84,
          displayOrder: 72,
          id: "3a4cf836-7dfb-48d3-acb6-548005940e04",
          isClosed: true,
          name: "Veniam.",
          updatedAt: new Date("2025-10-15T14:27:04.317Z"),
        },
      ],
      updatedAt: new Date("2025-11-06T10:29:45.390Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("crmPatchCrmPipeline failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchCrmPipelineRequest](../../sdk/models/operations/patchcrmpipelinerequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CrmPipeline](../../sdk/models/shared/crmpipeline.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeCrmPipeline

Deletes the CrmPipeline identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeCrmPipeline" method="delete" path="/crm/{connection_id}/pipeline/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.pipeline.removeCrmPipeline({
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
import { crmRemoveCrmPipeline } from "@unified-api/typescript-sdk/funcs/crmRemoveCrmPipeline.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await crmRemoveCrmPipeline(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("crmRemoveCrmPipeline failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveCrmPipelineRequest](../../sdk/models/operations/removecrmpipelinerequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveCrmPipelineResponse](../../sdk/models/operations/removecrmpipelineresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateCrmPipeline

Updates the CrmPipeline identified by `id`. Provide the unified CrmPipeline fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateCrmPipeline" method="put" path="/crm/{connection_id}/pipeline/{id}" example="crm_pipeline" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.pipeline.updateCrmPipeline({
    crmPipeline: {
      createdAt: new Date("2022-12-28T13:45:38.446Z"),
      dealProbability: 99,
      displayOrder: 8,
      id: "ac550507-a877-4f2d-849f-c8d9dfe3adf7",
      isActive: true,
      metadata: [],
      name: "Small Steel Bacon",
      stages: [
        {
          active: false,
          createdAt: new Date("2022-12-28T13:45:38.446Z"),
          dealProbability: 84,
          displayOrder: 72,
          id: "3a4cf836-7dfb-48d3-acb6-548005940e04",
          isClosed: true,
          name: "Veniam.",
          updatedAt: new Date("2025-10-15T14:27:04.317Z"),
        },
      ],
      updatedAt: new Date("2025-11-06T10:29:45.390Z"),
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
import { crmUpdateCrmPipeline } from "@unified-api/typescript-sdk/funcs/crmUpdateCrmPipeline.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await crmUpdateCrmPipeline(unifiedTo, {
    crmPipeline: {
      createdAt: new Date("2022-12-28T13:45:38.446Z"),
      dealProbability: 99,
      displayOrder: 8,
      id: "ac550507-a877-4f2d-849f-c8d9dfe3adf7",
      isActive: true,
      metadata: [],
      name: "Small Steel Bacon",
      stages: [
        {
          active: false,
          createdAt: new Date("2022-12-28T13:45:38.446Z"),
          dealProbability: 84,
          displayOrder: 72,
          id: "3a4cf836-7dfb-48d3-acb6-548005940e04",
          isClosed: true,
          name: "Veniam.",
          updatedAt: new Date("2025-10-15T14:27:04.317Z"),
        },
      ],
      updatedAt: new Date("2025-11-06T10:29:45.390Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("crmUpdateCrmPipeline failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateCrmPipelineRequest](../../sdk/models/operations/updatecrmpipelinerequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CrmPipeline](../../sdk/models/shared/crmpipeline.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |