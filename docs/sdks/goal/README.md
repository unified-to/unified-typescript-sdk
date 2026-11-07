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
      dueAt: new Date("2026-08-15T04:13:46.656Z"),
      id: "fe516f2b-2ef0-4d7b-a066-1d8b7555bc00",
      metadata: [],
      milestones: [
        {
          currentValue: 10,
          dueAt: new Date("2026-06-19T21:43:45.065Z"),
          id: "9d58e341-603c-4f67-8522-fb3f8c49078a",
          isCompleted: true,
          name: "Team-oriented secondary matrix",
          targetValue: 32,
          unit: "%",
          weight: 7,
        },
        {
          currentValue: 0,
          dueAt: new Date("2026-08-24T22:40:23.088Z"),
          id: "9ffcb72b-fb3b-4fcc-9e3c-4448879b9c58",
          isCompleted: true,
          name: "Exclusive client-server conglomeration",
          targetValue: 32,
          weight: 5,
        },
        {
          currentValue: 31,
          description: "Hic explicabo odit.",
          dueAt: new Date("2026-10-27T07:52:00.488Z"),
          id: "9c441b8a-f590-41f8-b243-f2aefaedad81",
          isCompleted: true,
          name: "Synchronised immersive success",
          targetValue: 32,
          weight: 5,
        },
      ],
      name: "Proactive national protocol",
      progress: 3,
      startAt: new Date("2025-08-06T05:53:37.180Z"),
      status: "CLOSED",
      type: "COMPANY",
      updatedAt: new Date("2022-09-19T18:18:32.864Z"),
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
      dueAt: new Date("2026-08-15T04:13:46.656Z"),
      id: "fe516f2b-2ef0-4d7b-a066-1d8b7555bc00",
      metadata: [],
      milestones: [
        {
          currentValue: 10,
          dueAt: new Date("2026-06-19T21:43:45.065Z"),
          id: "9d58e341-603c-4f67-8522-fb3f8c49078a",
          isCompleted: true,
          name: "Team-oriented secondary matrix",
          targetValue: 32,
          unit: "%",
          weight: 7,
        },
        {
          currentValue: 0,
          dueAt: new Date("2026-08-24T22:40:23.088Z"),
          id: "9ffcb72b-fb3b-4fcc-9e3c-4448879b9c58",
          isCompleted: true,
          name: "Exclusive client-server conglomeration",
          targetValue: 32,
          weight: 5,
        },
        {
          currentValue: 31,
          description: "Hic explicabo odit.",
          dueAt: new Date("2026-10-27T07:52:00.488Z"),
          id: "9c441b8a-f590-41f8-b243-f2aefaedad81",
          isCompleted: true,
          name: "Synchronised immersive success",
          targetValue: 32,
          weight: 5,
        },
      ],
      name: "Proactive national protocol",
      progress: 3,
      startAt: new Date("2025-08-06T05:53:37.180Z"),
      status: "CLOSED",
      type: "COMPANY",
      updatedAt: new Date("2022-09-19T18:18:32.864Z"),
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
      dueAt: new Date("2026-08-15T04:13:46.670Z"),
      id: "91f181fd-5bc6-4ab8-8d56-332be6226f22",
      metadata: [],
      milestones: [
        {
          currentValue: 10,
          dueAt: new Date("2026-06-19T21:43:45.079Z"),
          id: "6d5a2402-2286-49b4-96d5-a7ec8f574754",
          isCompleted: true,
          name: "Team-oriented secondary matrix",
          targetValue: 32,
          unit: "%",
          weight: 7,
        },
        {
          currentValue: 0,
          dueAt: new Date("2026-08-24T22:40:23.103Z"),
          id: "e21057b6-3f42-41ff-97f1-102b2bbe66e0",
          isCompleted: true,
          name: "Exclusive client-server conglomeration",
          targetValue: 32,
          weight: 5,
        },
        {
          currentValue: 31,
          description: "Hic explicabo odit.",
          dueAt: new Date("2026-10-27T07:52:00.503Z"),
          id: "7f9ba300-e968-46e2-a92a-f6dc7c6f8bd1",
          isCompleted: true,
          name: "Synchronised immersive success",
          targetValue: 32,
          weight: 5,
        },
      ],
      name: "Proactive national protocol",
      progress: 3,
      startAt: new Date("2025-08-06T05:53:37.191Z"),
      status: "CLOSED",
      type: "COMPANY",
      updatedAt: new Date("2022-09-19T18:18:32.870Z"),
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
      dueAt: new Date("2026-08-15T04:13:46.670Z"),
      id: "91f181fd-5bc6-4ab8-8d56-332be6226f22",
      metadata: [],
      milestones: [
        {
          currentValue: 10,
          dueAt: new Date("2026-06-19T21:43:45.079Z"),
          id: "6d5a2402-2286-49b4-96d5-a7ec8f574754",
          isCompleted: true,
          name: "Team-oriented secondary matrix",
          targetValue: 32,
          unit: "%",
          weight: 7,
        },
        {
          currentValue: 0,
          dueAt: new Date("2026-08-24T22:40:23.103Z"),
          id: "e21057b6-3f42-41ff-97f1-102b2bbe66e0",
          isCompleted: true,
          name: "Exclusive client-server conglomeration",
          targetValue: 32,
          weight: 5,
        },
        {
          currentValue: 31,
          description: "Hic explicabo odit.",
          dueAt: new Date("2026-10-27T07:52:00.503Z"),
          id: "7f9ba300-e968-46e2-a92a-f6dc7c6f8bd1",
          isCompleted: true,
          name: "Synchronised immersive success",
          targetValue: 32,
          weight: 5,
        },
      ],
      name: "Proactive national protocol",
      progress: 3,
      startAt: new Date("2025-08-06T05:53:37.191Z"),
      status: "CLOSED",
      type: "COMPANY",
      updatedAt: new Date("2022-09-19T18:18:32.870Z"),
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
      dueAt: new Date("2026-08-15T04:13:46.670Z"),
      id: "91f181fd-5bc6-4ab8-8d56-332be6226f22",
      metadata: [],
      milestones: [
        {
          currentValue: 10,
          dueAt: new Date("2026-06-19T21:43:45.079Z"),
          id: "6d5a2402-2286-49b4-96d5-a7ec8f574754",
          isCompleted: true,
          name: "Team-oriented secondary matrix",
          targetValue: 32,
          unit: "%",
          weight: 7,
        },
        {
          currentValue: 0,
          dueAt: new Date("2026-08-24T22:40:23.103Z"),
          id: "e21057b6-3f42-41ff-97f1-102b2bbe66e0",
          isCompleted: true,
          name: "Exclusive client-server conglomeration",
          targetValue: 32,
          weight: 5,
        },
        {
          currentValue: 31,
          description: "Hic explicabo odit.",
          dueAt: new Date("2026-10-27T07:52:00.503Z"),
          id: "7f9ba300-e968-46e2-a92a-f6dc7c6f8bd1",
          isCompleted: true,
          name: "Synchronised immersive success",
          targetValue: 32,
          weight: 5,
        },
      ],
      name: "Proactive national protocol",
      progress: 3,
      startAt: new Date("2025-08-06T05:53:37.191Z"),
      status: "CLOSED",
      type: "COMPANY",
      updatedAt: new Date("2022-09-19T18:18:32.870Z"),
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
      dueAt: new Date("2026-08-15T04:13:46.670Z"),
      id: "91f181fd-5bc6-4ab8-8d56-332be6226f22",
      metadata: [],
      milestones: [
        {
          currentValue: 10,
          dueAt: new Date("2026-06-19T21:43:45.079Z"),
          id: "6d5a2402-2286-49b4-96d5-a7ec8f574754",
          isCompleted: true,
          name: "Team-oriented secondary matrix",
          targetValue: 32,
          unit: "%",
          weight: 7,
        },
        {
          currentValue: 0,
          dueAt: new Date("2026-08-24T22:40:23.103Z"),
          id: "e21057b6-3f42-41ff-97f1-102b2bbe66e0",
          isCompleted: true,
          name: "Exclusive client-server conglomeration",
          targetValue: 32,
          weight: 5,
        },
        {
          currentValue: 31,
          description: "Hic explicabo odit.",
          dueAt: new Date("2026-10-27T07:52:00.503Z"),
          id: "7f9ba300-e968-46e2-a92a-f6dc7c6f8bd1",
          isCompleted: true,
          name: "Synchronised immersive success",
          targetValue: 32,
          weight: 5,
        },
      ],
      name: "Proactive national protocol",
      progress: 3,
      startAt: new Date("2025-08-06T05:53:37.191Z"),
      status: "CLOSED",
      type: "COMPANY",
      updatedAt: new Date("2022-09-19T18:18:32.870Z"),
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