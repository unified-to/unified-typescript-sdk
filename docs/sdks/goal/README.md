# Goal

## Overview

### Available Operations

* [createPerformanceGoal](#createperformancegoal) - Create a goal
* [getHealthcareGoal](#gethealthcaregoal) - Retrieve a goal
* [getPerformanceGoal](#getperformancegoal) - Retrieve a goal
* [listHealthcareGoals](#listhealthcaregoals) - List all goals
* [listPerformanceGoals](#listperformancegoals) - List all goals
* [patchPerformanceGoal](#patchperformancegoal) - Update a goal
* [removePerformanceGoal](#removeperformancegoal) - Remove a goal
* [updatePerformanceGoal](#updateperformancegoal) - Update a goal

## createPerformanceGoal

Creates a PerformanceGoal. Provide the unified PerformanceGoal fields in the request body; they are mapped to the provider's API. Returns the created PerformanceGoal.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createPerformanceGoal" method="post" path="/performance/{connection_id}/goal" example="performance_goal" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.goal.createPerformanceGoal({
    performanceGoal: {
      createdAt: new Date("2020-01-09T20:43:07.380Z"),
      description: "Suscipit suspendo vulnero vel facere valeo vallum degero.",
      dueAt: new Date("2026-08-12T05:00:19.462Z"),
      id: "ff586182-2904-41fa-b7dd-b4b748d0b6e1",
      metadata: [],
      milestones: [
        {
          currentValue: 10,
          dueAt: new Date("2026-06-17T00:10:06.405Z"),
          id: "6c1408b5-1e07-47a3-a86a-32745fe2eca6",
          isCompleted: true,
          name: "Team-oriented secondary matrix",
          targetValue: 32,
          unit: "%",
          weight: 7,
        },
        {
          currentValue: 0,
          dueAt: new Date("2026-08-21T23:09:36.300Z"),
          id: "c0ad9946-f0c6-4f11-b11c-369d61c647ef",
          isCompleted: true,
          name: "Exclusive client-server conglomeration",
          targetValue: 32,
          weight: 5,
        },
        {
          currentValue: 31,
          description: "Hic explicabo odit.",
          dueAt: new Date("2026-10-24T06:28:48.260Z"),
          id: "1eaa2923-803b-425a-b9ac-7f64820f9928",
          isCompleted: true,
          name: "Synchronised immersive success",
          targetValue: 32,
          weight: 5,
        },
      ],
      name: "Proactive national protocol",
      progress: 3,
      startAt: new Date("2025-08-03T17:43:24.946Z"),
      status: "CLOSED",
      type: "COMPANY",
      updatedAt: new Date("2022-09-18T13:13:22.957Z"),
      weight: 5,
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
import { goalCreatePerformanceGoal } from "@unified-api/typescript-sdk/funcs/goalCreatePerformanceGoal.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await goalCreatePerformanceGoal(unifiedTo, {
    performanceGoal: {
      createdAt: new Date("2020-01-09T20:43:07.380Z"),
      description: "Suscipit suspendo vulnero vel facere valeo vallum degero.",
      dueAt: new Date("2026-08-12T05:00:19.462Z"),
      id: "ff586182-2904-41fa-b7dd-b4b748d0b6e1",
      metadata: [],
      milestones: [
        {
          currentValue: 10,
          dueAt: new Date("2026-06-17T00:10:06.405Z"),
          id: "6c1408b5-1e07-47a3-a86a-32745fe2eca6",
          isCompleted: true,
          name: "Team-oriented secondary matrix",
          targetValue: 32,
          unit: "%",
          weight: 7,
        },
        {
          currentValue: 0,
          dueAt: new Date("2026-08-21T23:09:36.300Z"),
          id: "c0ad9946-f0c6-4f11-b11c-369d61c647ef",
          isCompleted: true,
          name: "Exclusive client-server conglomeration",
          targetValue: 32,
          weight: 5,
        },
        {
          currentValue: 31,
          description: "Hic explicabo odit.",
          dueAt: new Date("2026-10-24T06:28:48.260Z"),
          id: "1eaa2923-803b-425a-b9ac-7f64820f9928",
          isCompleted: true,
          name: "Synchronised immersive success",
          targetValue: 32,
          weight: 5,
        },
      ],
      name: "Proactive national protocol",
      progress: 3,
      startAt: new Date("2025-08-03T17:43:24.946Z"),
      status: "CLOSED",
      type: "COMPANY",
      updatedAt: new Date("2022-09-18T13:13:22.957Z"),
      weight: 5,
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("goalCreatePerformanceGoal failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreatePerformanceGoalRequest](../../sdk/models/operations/createperformancegoalrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PerformanceGoal](../../sdk/models/shared/performancegoal.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getHealthcareGoal

Retrieves a single HealthcareGoal by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getHealthcareGoal" method="get" path="/healthcare/{connection_id}/goal/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.goal.getHealthcareGoal({
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
import { healthcareGetHealthcareGoal } from "@unified-api/typescript-sdk/funcs/healthcareGetHealthcareGoal.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await healthcareGetHealthcareGoal(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("healthcareGetHealthcareGoal failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetHealthcareGoalRequest](../../sdk/models/operations/gethealthcaregoalrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HealthcareGoal](../../sdk/models/shared/healthcaregoal.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getPerformanceGoal

Retrieves a single PerformanceGoal by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getPerformanceGoal" method="get" path="/performance/{connection_id}/goal/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.goal.getPerformanceGoal({
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
import { goalGetPerformanceGoal } from "@unified-api/typescript-sdk/funcs/goalGetPerformanceGoal.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await goalGetPerformanceGoal(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("goalGetPerformanceGoal failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPerformanceGoalRequest](../../sdk/models/operations/getperformancegoalrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PerformanceGoal](../../sdk/models/shared/performancegoal.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listHealthcareGoals

Returns a list of HealthcareGoals. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listHealthcareGoals" method="get" path="/healthcare/{connection_id}/goal" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.goal.listHealthcareGoals({
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
import { healthcareListHealthcareGoals } from "@unified-api/typescript-sdk/funcs/healthcareListHealthcareGoals.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await healthcareListHealthcareGoals(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("healthcareListHealthcareGoals failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListHealthcareGoalsRequest](../../sdk/models/operations/listhealthcaregoalsrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.HealthcareGoal[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listPerformanceGoals

Returns a list of PerformanceGoals. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listPerformanceGoals" method="get" path="/performance/{connection_id}/goal" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.goal.listPerformanceGoals({
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
import { goalListPerformanceGoals } from "@unified-api/typescript-sdk/funcs/goalListPerformanceGoals.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await goalListPerformanceGoals(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("goalListPerformanceGoals failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPerformanceGoalsRequest](../../sdk/models/operations/listperformancegoalsrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PerformanceGoal[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchPerformanceGoal

Updates the PerformanceGoal identified by `id`. Provide the unified PerformanceGoal fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchPerformanceGoal" method="patch" path="/performance/{connection_id}/goal/{id}" example="performance_goal" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.goal.patchPerformanceGoal({
    performanceGoal: {
      createdAt: new Date("2020-01-09T20:43:07.380Z"),
      description: "Suscipit suspendo vulnero vel facere valeo vallum degero.",
      dueAt: new Date("2026-08-12T05:00:19.476Z"),
      id: "eaaab1dc-52c5-443e-8f6c-3b6575695a8a",
      metadata: [],
      milestones: [
        {
          currentValue: 10,
          dueAt: new Date("2026-06-17T00:10:06.418Z"),
          id: "ee2a6fbf-ebd5-4fdf-9242-e4994cbca6d7",
          isCompleted: true,
          name: "Team-oriented secondary matrix",
          targetValue: 32,
          unit: "%",
          weight: 7,
        },
        {
          currentValue: 0,
          dueAt: new Date("2026-08-21T23:09:36.314Z"),
          id: "f516fc5e-8584-4db2-96eb-2bb8fa0b1342",
          isCompleted: true,
          name: "Exclusive client-server conglomeration",
          targetValue: 32,
          weight: 5,
        },
        {
          currentValue: 31,
          description: "Hic explicabo odit.",
          dueAt: new Date("2026-10-24T06:28:48.274Z"),
          id: "4f0a72cf-7d8b-48da-8501-acbdfcc88b94",
          isCompleted: true,
          name: "Synchronised immersive success",
          targetValue: 32,
          weight: 5,
        },
      ],
      name: "Proactive national protocol",
      progress: 3,
      startAt: new Date("2025-08-03T17:43:24.957Z"),
      status: "CLOSED",
      type: "COMPANY",
      updatedAt: new Date("2022-09-18T13:13:22.963Z"),
      weight: 5,
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
import { goalPatchPerformanceGoal } from "@unified-api/typescript-sdk/funcs/goalPatchPerformanceGoal.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await goalPatchPerformanceGoal(unifiedTo, {
    performanceGoal: {
      createdAt: new Date("2020-01-09T20:43:07.380Z"),
      description: "Suscipit suspendo vulnero vel facere valeo vallum degero.",
      dueAt: new Date("2026-08-12T05:00:19.476Z"),
      id: "eaaab1dc-52c5-443e-8f6c-3b6575695a8a",
      metadata: [],
      milestones: [
        {
          currentValue: 10,
          dueAt: new Date("2026-06-17T00:10:06.418Z"),
          id: "ee2a6fbf-ebd5-4fdf-9242-e4994cbca6d7",
          isCompleted: true,
          name: "Team-oriented secondary matrix",
          targetValue: 32,
          unit: "%",
          weight: 7,
        },
        {
          currentValue: 0,
          dueAt: new Date("2026-08-21T23:09:36.314Z"),
          id: "f516fc5e-8584-4db2-96eb-2bb8fa0b1342",
          isCompleted: true,
          name: "Exclusive client-server conglomeration",
          targetValue: 32,
          weight: 5,
        },
        {
          currentValue: 31,
          description: "Hic explicabo odit.",
          dueAt: new Date("2026-10-24T06:28:48.274Z"),
          id: "4f0a72cf-7d8b-48da-8501-acbdfcc88b94",
          isCompleted: true,
          name: "Synchronised immersive success",
          targetValue: 32,
          weight: 5,
        },
      ],
      name: "Proactive national protocol",
      progress: 3,
      startAt: new Date("2025-08-03T17:43:24.957Z"),
      status: "CLOSED",
      type: "COMPANY",
      updatedAt: new Date("2022-09-18T13:13:22.963Z"),
      weight: 5,
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("goalPatchPerformanceGoal failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchPerformanceGoalRequest](../../sdk/models/operations/patchperformancegoalrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PerformanceGoal](../../sdk/models/shared/performancegoal.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removePerformanceGoal

Deletes the PerformanceGoal identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removePerformanceGoal" method="delete" path="/performance/{connection_id}/goal/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.goal.removePerformanceGoal({
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
import { goalRemovePerformanceGoal } from "@unified-api/typescript-sdk/funcs/goalRemovePerformanceGoal.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await goalRemovePerformanceGoal(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("goalRemovePerformanceGoal failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemovePerformanceGoalRequest](../../sdk/models/operations/removeperformancegoalrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemovePerformanceGoalResponse](../../sdk/models/operations/removeperformancegoalresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updatePerformanceGoal

Updates the PerformanceGoal identified by `id`. Provide the unified PerformanceGoal fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updatePerformanceGoal" method="put" path="/performance/{connection_id}/goal/{id}" example="performance_goal" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.goal.updatePerformanceGoal({
    performanceGoal: {
      createdAt: new Date("2020-01-09T20:43:07.380Z"),
      description: "Suscipit suspendo vulnero vel facere valeo vallum degero.",
      dueAt: new Date("2026-08-12T05:00:19.476Z"),
      id: "eaaab1dc-52c5-443e-8f6c-3b6575695a8a",
      metadata: [],
      milestones: [
        {
          currentValue: 10,
          dueAt: new Date("2026-06-17T00:10:06.418Z"),
          id: "ee2a6fbf-ebd5-4fdf-9242-e4994cbca6d7",
          isCompleted: true,
          name: "Team-oriented secondary matrix",
          targetValue: 32,
          unit: "%",
          weight: 7,
        },
        {
          currentValue: 0,
          dueAt: new Date("2026-08-21T23:09:36.314Z"),
          id: "f516fc5e-8584-4db2-96eb-2bb8fa0b1342",
          isCompleted: true,
          name: "Exclusive client-server conglomeration",
          targetValue: 32,
          weight: 5,
        },
        {
          currentValue: 31,
          description: "Hic explicabo odit.",
          dueAt: new Date("2026-10-24T06:28:48.274Z"),
          id: "4f0a72cf-7d8b-48da-8501-acbdfcc88b94",
          isCompleted: true,
          name: "Synchronised immersive success",
          targetValue: 32,
          weight: 5,
        },
      ],
      name: "Proactive national protocol",
      progress: 3,
      startAt: new Date("2025-08-03T17:43:24.957Z"),
      status: "CLOSED",
      type: "COMPANY",
      updatedAt: new Date("2022-09-18T13:13:22.963Z"),
      weight: 5,
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
import { goalUpdatePerformanceGoal } from "@unified-api/typescript-sdk/funcs/goalUpdatePerformanceGoal.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await goalUpdatePerformanceGoal(unifiedTo, {
    performanceGoal: {
      createdAt: new Date("2020-01-09T20:43:07.380Z"),
      description: "Suscipit suspendo vulnero vel facere valeo vallum degero.",
      dueAt: new Date("2026-08-12T05:00:19.476Z"),
      id: "eaaab1dc-52c5-443e-8f6c-3b6575695a8a",
      metadata: [],
      milestones: [
        {
          currentValue: 10,
          dueAt: new Date("2026-06-17T00:10:06.418Z"),
          id: "ee2a6fbf-ebd5-4fdf-9242-e4994cbca6d7",
          isCompleted: true,
          name: "Team-oriented secondary matrix",
          targetValue: 32,
          unit: "%",
          weight: 7,
        },
        {
          currentValue: 0,
          dueAt: new Date("2026-08-21T23:09:36.314Z"),
          id: "f516fc5e-8584-4db2-96eb-2bb8fa0b1342",
          isCompleted: true,
          name: "Exclusive client-server conglomeration",
          targetValue: 32,
          weight: 5,
        },
        {
          currentValue: 31,
          description: "Hic explicabo odit.",
          dueAt: new Date("2026-10-24T06:28:48.274Z"),
          id: "4f0a72cf-7d8b-48da-8501-acbdfcc88b94",
          isCompleted: true,
          name: "Synchronised immersive success",
          targetValue: 32,
          weight: 5,
        },
      ],
      name: "Proactive national protocol",
      progress: 3,
      startAt: new Date("2025-08-03T17:43:24.957Z"),
      status: "CLOSED",
      type: "COMPANY",
      updatedAt: new Date("2022-09-18T13:13:22.963Z"),
      weight: 5,
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("goalUpdatePerformanceGoal failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdatePerformanceGoalRequest](../../sdk/models/operations/updateperformancegoalrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PerformanceGoal](../../sdk/models/shared/performancegoal.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |