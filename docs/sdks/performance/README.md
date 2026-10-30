# Performance

## Overview

### Available Operations

* [createPerformanceFeedback](#createperformancefeedback) - Create a feedback
* [createPerformanceGoal](#createperformancegoal) - Create a goal
* [getPerformanceCycle](#getperformancecycle) - Retrieve a cycle
* [getPerformanceFeedback](#getperformancefeedback) - Retrieve a feedback
* [getPerformanceGoal](#getperformancegoal) - Retrieve a goal
* [getPerformanceReview](#getperformancereview) - Retrieve a review
* [listPerformanceCycles](#listperformancecycles) - List all cycles
* [listPerformanceFeedbacks](#listperformancefeedbacks) - List all feedbacks
* [listPerformanceGoals](#listperformancegoals) - List all goals
* [listPerformanceReviews](#listperformancereviews) - List all reviews
* [patchPerformanceGoal](#patchperformancegoal) - Update a goal
* [removePerformanceGoal](#removeperformancegoal) - Remove a goal
* [updatePerformanceGoal](#updateperformancegoal) - Update a goal

## createPerformanceFeedback

Creates a PerformanceFeedback. Provide the unified PerformanceFeedback fields in the request body; they are mapped to the provider's API. Returns the created PerformanceFeedback.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createPerformanceFeedback" method="post" path="/performance/{connection_id}/feedback" example="performance_feedback" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.performance.createPerformanceFeedback({
    performanceFeedback: {
      createdAt: new Date("2023-04-11T16:21:53.862Z"),
      id: "76afdb15-8fa5-43dc-9057-7aa0e5efd4fd",
      isVisible: true,
      message: "Tabernus corpus voluptate aestus.",
      metadata: [],
      tags: [
        "well-to-do",
        "hexagon",
      ],
      type: "PRAISE",
      updatedAt: new Date("2025-09-10T05:39:03.988Z"),
      userId: "<id>",
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
import { performanceCreatePerformanceFeedback } from "@unified-api/typescript-sdk/funcs/performanceCreatePerformanceFeedback.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await performanceCreatePerformanceFeedback(unifiedTo, {
    performanceFeedback: {
      createdAt: new Date("2023-04-11T16:21:53.862Z"),
      id: "76afdb15-8fa5-43dc-9057-7aa0e5efd4fd",
      isVisible: true,
      message: "Tabernus corpus voluptate aestus.",
      metadata: [],
      tags: [
        "well-to-do",
        "hexagon",
      ],
      type: "PRAISE",
      updatedAt: new Date("2025-09-10T05:39:03.988Z"),
      userId: "<id>",
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("performanceCreatePerformanceFeedback failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreatePerformanceFeedbackRequest](../../sdk/models/operations/createperformancefeedbackrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PerformanceFeedback](../../sdk/models/shared/performancefeedback.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

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
  const result = await unifiedTo.performance.createPerformanceGoal({
    performanceGoal: {
      createdAt: new Date("2020-01-09T20:43:07.380Z"),
      description: "Suscipit suspendo vulnero vel facere valeo vallum degero.",
      dueAt: new Date("2026-08-07T11:29:44.856Z"),
      id: "0d4ad847-7d32-4124-84f7-83301589eb40",
      metadata: [],
      milestones: [
        {
          currentValue: 10,
          dueAt: new Date("2026-06-12T09:18:35.688Z"),
          id: "a28afb85-fe48-4aa0-b582-5e020b24d253",
          isCompleted: true,
          name: "Team-oriented secondary matrix",
          targetValue: 32,
          unit: "%",
          weight: 7,
        },
        {
          currentValue: 0,
          dueAt: new Date("2026-08-17T05:11:24.899Z"),
          id: "67c80296-8c87-4781-ba15-c771b3a135f8",
          isCompleted: true,
          name: "Exclusive client-server conglomeration",
          targetValue: 32,
          weight: 5,
        },
        {
          currentValue: 31,
          description: "Hic explicabo odit.",
          dueAt: new Date("2026-10-19T09:31:26.692Z"),
          id: "d6e6d1f7-a219-4c7f-aa3b-e05e4f686cf6",
          isCompleted: true,
          name: "Synchronised immersive success",
          targetValue: 32,
          weight: 5,
        },
      ],
      name: "Proactive national protocol",
      progress: 3,
      startAt: new Date("2025-07-30T17:49:51.328Z"),
      status: "CLOSED",
      type: "COMPANY",
      updatedAt: new Date("2022-09-16T14:52:07.407Z"),
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
      dueAt: new Date("2026-08-07T11:29:44.856Z"),
      id: "0d4ad847-7d32-4124-84f7-83301589eb40",
      metadata: [],
      milestones: [
        {
          currentValue: 10,
          dueAt: new Date("2026-06-12T09:18:35.688Z"),
          id: "a28afb85-fe48-4aa0-b582-5e020b24d253",
          isCompleted: true,
          name: "Team-oriented secondary matrix",
          targetValue: 32,
          unit: "%",
          weight: 7,
        },
        {
          currentValue: 0,
          dueAt: new Date("2026-08-17T05:11:24.899Z"),
          id: "67c80296-8c87-4781-ba15-c771b3a135f8",
          isCompleted: true,
          name: "Exclusive client-server conglomeration",
          targetValue: 32,
          weight: 5,
        },
        {
          currentValue: 31,
          description: "Hic explicabo odit.",
          dueAt: new Date("2026-10-19T09:31:26.692Z"),
          id: "d6e6d1f7-a219-4c7f-aa3b-e05e4f686cf6",
          isCompleted: true,
          name: "Synchronised immersive success",
          targetValue: 32,
          weight: 5,
        },
      ],
      name: "Proactive national protocol",
      progress: 3,
      startAt: new Date("2025-07-30T17:49:51.328Z"),
      status: "CLOSED",
      type: "COMPANY",
      updatedAt: new Date("2022-09-16T14:52:07.407Z"),
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

## getPerformanceCycle

Retrieves a single PerformanceCycle by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getPerformanceCycle" method="get" path="/performance/{connection_id}/cycle/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.performance.getPerformanceCycle({
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
import { performanceGetPerformanceCycle } from "@unified-api/typescript-sdk/funcs/performanceGetPerformanceCycle.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await performanceGetPerformanceCycle(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("performanceGetPerformanceCycle failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPerformanceCycleRequest](../../sdk/models/operations/getperformancecyclerequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PerformanceCycle](../../sdk/models/shared/performancecycle.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getPerformanceFeedback

Retrieves a single PerformanceFeedback by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getPerformanceFeedback" method="get" path="/performance/{connection_id}/feedback/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.performance.getPerformanceFeedback({
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
import { performanceGetPerformanceFeedback } from "@unified-api/typescript-sdk/funcs/performanceGetPerformanceFeedback.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await performanceGetPerformanceFeedback(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("performanceGetPerformanceFeedback failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPerformanceFeedbackRequest](../../sdk/models/operations/getperformancefeedbackrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PerformanceFeedback](../../sdk/models/shared/performancefeedback.md)\>**

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
  const result = await unifiedTo.performance.getPerformanceGoal({
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

## getPerformanceReview

Retrieves a single PerformanceReview by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getPerformanceReview" method="get" path="/performance/{connection_id}/review/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.performance.getPerformanceReview({
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
import { reviewGetPerformanceReview } from "@unified-api/typescript-sdk/funcs/reviewGetPerformanceReview.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await reviewGetPerformanceReview(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reviewGetPerformanceReview failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPerformanceReviewRequest](../../sdk/models/operations/getperformancereviewrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PerformanceReview](../../sdk/models/shared/performancereview.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listPerformanceCycles

Returns a list of PerformanceCycles. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listPerformanceCycles" method="get" path="/performance/{connection_id}/cycle" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.performance.listPerformanceCycles({
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
import { performanceListPerformanceCycles } from "@unified-api/typescript-sdk/funcs/performanceListPerformanceCycles.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await performanceListPerformanceCycles(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("performanceListPerformanceCycles failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPerformanceCyclesRequest](../../sdk/models/operations/listperformancecyclesrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PerformanceCycle[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listPerformanceFeedbacks

Returns a list of PerformanceFeedbacks. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listPerformanceFeedbacks" method="get" path="/performance/{connection_id}/feedback" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.performance.listPerformanceFeedbacks({
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
import { performanceListPerformanceFeedbacks } from "@unified-api/typescript-sdk/funcs/performanceListPerformanceFeedbacks.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await performanceListPerformanceFeedbacks(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("performanceListPerformanceFeedbacks failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPerformanceFeedbacksRequest](../../sdk/models/operations/listperformancefeedbacksrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PerformanceFeedback[]](../../models/.md)\>**

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
  const result = await unifiedTo.performance.listPerformanceGoals({
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

## listPerformanceReviews

Returns a list of PerformanceReviews. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listPerformanceReviews" method="get" path="/performance/{connection_id}/review" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.performance.listPerformanceReviews({
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
import { reviewListPerformanceReviews } from "@unified-api/typescript-sdk/funcs/reviewListPerformanceReviews.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await reviewListPerformanceReviews(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("reviewListPerformanceReviews failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPerformanceReviewsRequest](../../sdk/models/operations/listperformancereviewsrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.PerformanceReview[]](../../models/.md)\>**

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
  const result = await unifiedTo.performance.patchPerformanceGoal({
    performanceGoal: {
      createdAt: new Date("2020-01-09T20:43:07.380Z"),
      description: "Suscipit suspendo vulnero vel facere valeo vallum degero.",
      dueAt: new Date("2026-08-07T11:29:44.880Z"),
      id: "f219a5c4-4786-47dd-b9f1-990cfa63a4db",
      metadata: [],
      milestones: [
        {
          currentValue: 10,
          dueAt: new Date("2026-06-12T09:18:35.713Z"),
          id: "43c08c3c-9d75-47c9-bf39-c64aee26dc93",
          isCompleted: true,
          name: "Team-oriented secondary matrix",
          targetValue: 32,
          unit: "%",
          weight: 7,
        },
        {
          currentValue: 0,
          dueAt: new Date("2026-08-17T05:11:24.924Z"),
          id: "95f13487-646c-4491-be7c-2a2c3aa3898e",
          isCompleted: true,
          name: "Exclusive client-server conglomeration",
          targetValue: 32,
          weight: 5,
        },
        {
          currentValue: 31,
          description: "Hic explicabo odit.",
          dueAt: new Date("2026-10-19T09:31:26.718Z"),
          id: "dad5cb34-c574-4c11-83f5-76bc65acd2a2",
          isCompleted: true,
          name: "Synchronised immersive success",
          targetValue: 32,
          weight: 5,
        },
      ],
      name: "Proactive national protocol",
      progress: 3,
      startAt: new Date("2025-07-30T17:49:51.350Z"),
      status: "CLOSED",
      type: "COMPANY",
      updatedAt: new Date("2022-09-16T14:52:07.417Z"),
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
      dueAt: new Date("2026-08-07T11:29:44.880Z"),
      id: "f219a5c4-4786-47dd-b9f1-990cfa63a4db",
      metadata: [],
      milestones: [
        {
          currentValue: 10,
          dueAt: new Date("2026-06-12T09:18:35.713Z"),
          id: "43c08c3c-9d75-47c9-bf39-c64aee26dc93",
          isCompleted: true,
          name: "Team-oriented secondary matrix",
          targetValue: 32,
          unit: "%",
          weight: 7,
        },
        {
          currentValue: 0,
          dueAt: new Date("2026-08-17T05:11:24.924Z"),
          id: "95f13487-646c-4491-be7c-2a2c3aa3898e",
          isCompleted: true,
          name: "Exclusive client-server conglomeration",
          targetValue: 32,
          weight: 5,
        },
        {
          currentValue: 31,
          description: "Hic explicabo odit.",
          dueAt: new Date("2026-10-19T09:31:26.718Z"),
          id: "dad5cb34-c574-4c11-83f5-76bc65acd2a2",
          isCompleted: true,
          name: "Synchronised immersive success",
          targetValue: 32,
          weight: 5,
        },
      ],
      name: "Proactive national protocol",
      progress: 3,
      startAt: new Date("2025-07-30T17:49:51.350Z"),
      status: "CLOSED",
      type: "COMPANY",
      updatedAt: new Date("2022-09-16T14:52:07.417Z"),
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
  const result = await unifiedTo.performance.removePerformanceGoal({
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
  const result = await unifiedTo.performance.updatePerformanceGoal({
    performanceGoal: {
      createdAt: new Date("2020-01-09T20:43:07.380Z"),
      description: "Suscipit suspendo vulnero vel facere valeo vallum degero.",
      dueAt: new Date("2026-08-07T11:29:44.880Z"),
      id: "f219a5c4-4786-47dd-b9f1-990cfa63a4db",
      metadata: [],
      milestones: [
        {
          currentValue: 10,
          dueAt: new Date("2026-06-12T09:18:35.713Z"),
          id: "43c08c3c-9d75-47c9-bf39-c64aee26dc93",
          isCompleted: true,
          name: "Team-oriented secondary matrix",
          targetValue: 32,
          unit: "%",
          weight: 7,
        },
        {
          currentValue: 0,
          dueAt: new Date("2026-08-17T05:11:24.924Z"),
          id: "95f13487-646c-4491-be7c-2a2c3aa3898e",
          isCompleted: true,
          name: "Exclusive client-server conglomeration",
          targetValue: 32,
          weight: 5,
        },
        {
          currentValue: 31,
          description: "Hic explicabo odit.",
          dueAt: new Date("2026-10-19T09:31:26.718Z"),
          id: "dad5cb34-c574-4c11-83f5-76bc65acd2a2",
          isCompleted: true,
          name: "Synchronised immersive success",
          targetValue: 32,
          weight: 5,
        },
      ],
      name: "Proactive national protocol",
      progress: 3,
      startAt: new Date("2025-07-30T17:49:51.350Z"),
      status: "CLOSED",
      type: "COMPANY",
      updatedAt: new Date("2022-09-16T14:52:07.417Z"),
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
      dueAt: new Date("2026-08-07T11:29:44.880Z"),
      id: "f219a5c4-4786-47dd-b9f1-990cfa63a4db",
      metadata: [],
      milestones: [
        {
          currentValue: 10,
          dueAt: new Date("2026-06-12T09:18:35.713Z"),
          id: "43c08c3c-9d75-47c9-bf39-c64aee26dc93",
          isCompleted: true,
          name: "Team-oriented secondary matrix",
          targetValue: 32,
          unit: "%",
          weight: 7,
        },
        {
          currentValue: 0,
          dueAt: new Date("2026-08-17T05:11:24.924Z"),
          id: "95f13487-646c-4491-be7c-2a2c3aa3898e",
          isCompleted: true,
          name: "Exclusive client-server conglomeration",
          targetValue: 32,
          weight: 5,
        },
        {
          currentValue: 31,
          description: "Hic explicabo odit.",
          dueAt: new Date("2026-10-19T09:31:26.718Z"),
          id: "dad5cb34-c574-4c11-83f5-76bc65acd2a2",
          isCompleted: true,
          name: "Synchronised immersive success",
          targetValue: 32,
          weight: 5,
        },
      ],
      name: "Proactive national protocol",
      progress: 3,
      startAt: new Date("2025-07-30T17:49:51.350Z"),
      status: "CLOSED",
      type: "COMPANY",
      updatedAt: new Date("2022-09-16T14:52:07.417Z"),
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