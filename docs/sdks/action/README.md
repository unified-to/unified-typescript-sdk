# Action

## Overview

### Available Operations

* [createQmsAction](#createqmsaction) - Create an action
* [getQmsAction](#getqmsaction) - Retrieve an action
* [listQmsActions](#listqmsactions) - List all actions
* [patchQmsAction](#patchqmsaction) - Update an action
* [updateQmsAction](#updateqmsaction) - Update an action

## createQmsAction

Creates a QmsAction. Provide the unified QmsAction fields in the request body; they are mapped to the provider's API. Returns the created QmsAction.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createQmsAction" method="post" path="/qms/{connection_id}/action" example="qms_action" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.action.createQmsAction({
    qmsAction: {
      affectedItems: [],
      createdAt: new Date("2022-03-07T03:01:29.933Z"),
      description: "Apparatus aegre ascisco color fugit cunctatio attollo vestrum amaritudo.",
      dueAt: new Date("2022-04-25T11:37:43.155Z"),
      fileIds: [],
      id: "9533d615-77ba-4a78-984c-51451cf6149a",
      issueIds: [],
      lifecycleState: "Cancelled",
      metadata: [],
      name: "Add inspection step",
      number: "CAPA-6268",
      originalType: "Corrective Action",
      priority: "Medium",
      rootCause: "Worn tooling",
      status: "CANCELLED",
      type: "CORRECTIVE",
      updatedAt: new Date("2025-02-25T04:55:23.162Z"),
      url: "https://scientific-kiss.biz",
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
import { qmsCreateQmsAction } from "@unified-api/typescript-sdk/funcs/qmsCreateQmsAction.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await qmsCreateQmsAction(unifiedTo, {
    qmsAction: {
      affectedItems: [],
      createdAt: new Date("2022-03-07T03:01:29.933Z"),
      description: "Apparatus aegre ascisco color fugit cunctatio attollo vestrum amaritudo.",
      dueAt: new Date("2022-04-25T11:37:43.155Z"),
      fileIds: [],
      id: "9533d615-77ba-4a78-984c-51451cf6149a",
      issueIds: [],
      lifecycleState: "Cancelled",
      metadata: [],
      name: "Add inspection step",
      number: "CAPA-6268",
      originalType: "Corrective Action",
      priority: "Medium",
      rootCause: "Worn tooling",
      status: "CANCELLED",
      type: "CORRECTIVE",
      updatedAt: new Date("2025-02-25T04:55:23.162Z"),
      url: "https://scientific-kiss.biz",
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("qmsCreateQmsAction failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateQmsActionRequest](../../sdk/models/operations/createqmsactionrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.QmsAction](../../sdk/models/shared/qmsaction.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getQmsAction

Retrieves a single QmsAction by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getQmsAction" method="get" path="/qms/{connection_id}/action/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.action.getQmsAction({
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
import { qmsGetQmsAction } from "@unified-api/typescript-sdk/funcs/qmsGetQmsAction.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await qmsGetQmsAction(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("qmsGetQmsAction failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetQmsActionRequest](../../sdk/models/operations/getqmsactionrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.QmsAction](../../sdk/models/shared/qmsaction.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listQmsActions

Returns a list of QmsActions. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listQmsActions" method="get" path="/qms/{connection_id}/action" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.action.listQmsActions({
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
import { qmsListQmsActions } from "@unified-api/typescript-sdk/funcs/qmsListQmsActions.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await qmsListQmsActions(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("qmsListQmsActions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListQmsActionsRequest](../../sdk/models/operations/listqmsactionsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.QmsAction[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchQmsAction

Updates the QmsAction identified by `id`. Provide the unified QmsAction fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchQmsAction" method="patch" path="/qms/{connection_id}/action/{id}" example="qms_action" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.action.patchQmsAction({
    qmsAction: {
      affectedItems: [],
      createdAt: new Date("2022-03-07T03:01:29.933Z"),
      description: "Apparatus aegre ascisco color fugit cunctatio attollo vestrum amaritudo.",
      dueAt: new Date("2022-04-25T11:37:43.155Z"),
      fileIds: [],
      id: "b53de6be-e9c5-42e8-8f1c-964d3eb8feec",
      issueIds: [],
      lifecycleState: "Cancelled",
      metadata: [],
      name: "Add inspection step",
      number: "CAPA-6268",
      originalType: "Corrective Action",
      priority: "Medium",
      rootCause: "Worn tooling",
      status: "CANCELLED",
      type: "CORRECTIVE",
      updatedAt: new Date("2025-02-25T04:55:23.174Z"),
      url: "https://scientific-kiss.biz",
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
import { qmsPatchQmsAction } from "@unified-api/typescript-sdk/funcs/qmsPatchQmsAction.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await qmsPatchQmsAction(unifiedTo, {
    qmsAction: {
      affectedItems: [],
      createdAt: new Date("2022-03-07T03:01:29.933Z"),
      description: "Apparatus aegre ascisco color fugit cunctatio attollo vestrum amaritudo.",
      dueAt: new Date("2022-04-25T11:37:43.155Z"),
      fileIds: [],
      id: "b53de6be-e9c5-42e8-8f1c-964d3eb8feec",
      issueIds: [],
      lifecycleState: "Cancelled",
      metadata: [],
      name: "Add inspection step",
      number: "CAPA-6268",
      originalType: "Corrective Action",
      priority: "Medium",
      rootCause: "Worn tooling",
      status: "CANCELLED",
      type: "CORRECTIVE",
      updatedAt: new Date("2025-02-25T04:55:23.174Z"),
      url: "https://scientific-kiss.biz",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("qmsPatchQmsAction failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchQmsActionRequest](../../sdk/models/operations/patchqmsactionrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.QmsAction](../../sdk/models/shared/qmsaction.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateQmsAction

Updates the QmsAction identified by `id`. Provide the unified QmsAction fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateQmsAction" method="put" path="/qms/{connection_id}/action/{id}" example="qms_action" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.action.updateQmsAction({
    qmsAction: {
      affectedItems: [],
      createdAt: new Date("2022-03-07T03:01:29.933Z"),
      description: "Apparatus aegre ascisco color fugit cunctatio attollo vestrum amaritudo.",
      dueAt: new Date("2022-04-25T11:37:43.155Z"),
      fileIds: [],
      id: "b53de6be-e9c5-42e8-8f1c-964d3eb8feec",
      issueIds: [],
      lifecycleState: "Cancelled",
      metadata: [],
      name: "Add inspection step",
      number: "CAPA-6268",
      originalType: "Corrective Action",
      priority: "Medium",
      rootCause: "Worn tooling",
      status: "CANCELLED",
      type: "CORRECTIVE",
      updatedAt: new Date("2025-02-25T04:55:23.174Z"),
      url: "https://scientific-kiss.biz",
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
import { qmsUpdateQmsAction } from "@unified-api/typescript-sdk/funcs/qmsUpdateQmsAction.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await qmsUpdateQmsAction(unifiedTo, {
    qmsAction: {
      affectedItems: [],
      createdAt: new Date("2022-03-07T03:01:29.933Z"),
      description: "Apparatus aegre ascisco color fugit cunctatio attollo vestrum amaritudo.",
      dueAt: new Date("2022-04-25T11:37:43.155Z"),
      fileIds: [],
      id: "b53de6be-e9c5-42e8-8f1c-964d3eb8feec",
      issueIds: [],
      lifecycleState: "Cancelled",
      metadata: [],
      name: "Add inspection step",
      number: "CAPA-6268",
      originalType: "Corrective Action",
      priority: "Medium",
      rootCause: "Worn tooling",
      status: "CANCELLED",
      type: "CORRECTIVE",
      updatedAt: new Date("2025-02-25T04:55:23.174Z"),
      url: "https://scientific-kiss.biz",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("qmsUpdateQmsAction failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateQmsActionRequest](../../sdk/models/operations/updateqmsactionrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.QmsAction](../../sdk/models/shared/qmsaction.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |