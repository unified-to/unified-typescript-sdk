# Issue

## Overview

### Available Operations

* [createQmsIssue](#createqmsissue) - Create an issue
* [getQmsIssue](#getqmsissue) - Retrieve an issue
* [getUnifiedIssue](#getunifiedissue) - Retrieve support issue
* [listQmsIssues](#listqmsissues) - List all issues
* [listUnifiedIssues](#listunifiedissues) - List support issues
* [patchQmsIssue](#patchqmsissue) - Update an issue
* [updateQmsIssue](#updateqmsissue) - Update an issue

## createQmsIssue

Creates a QmsIssue. Provide the unified QmsIssue fields in the request body; they are mapped to the provider's API. Returns the created QmsIssue.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createQmsIssue" method="post" path="/qms/{connection_id}/issue" example="qms_issue" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.issue.createQmsIssue({
    qmsIssue: {
      actionIds: [],
      affectedItems: [
        {
          partNumber: "PRT-051260",
          quantity: 27,
          revision: "B",
          serialNumber: "SN-419784",
        },
      ],
      changeIds: [],
      createdAt: new Date("2020-06-10T05:10:42.904Z"),
      description: "Adfero delectatio earum contabesco convoco uxor avaritia volaticus dens.",
      dueAt: new Date("2024-07-23T23:27:44.473Z"),
      fileIds: [],
      id: "d0973912-0afb-4b7f-9558-5d0f8dc7c8ae",
      lifecycleState: "In Progress",
      metadata: [],
      name: "Labeling error on tuxedo",
      number: "CMP-5154",
      openedAt: new Date("2024-07-08T22:53:20.681Z"),
      originalType: "Customer Complaint",
      severity: "MEDIUM",
      source: "CUSTOMER",
      status: "IN_PROGRESS",
      type: "COMPLAINT",
      updatedAt: new Date("2021-03-13T04:40:43.127Z"),
      url: "https://annual-cycle.org/",
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
import { qmsCreateQmsIssue } from "@unified-api/typescript-sdk/funcs/qmsCreateQmsIssue.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await qmsCreateQmsIssue(unifiedTo, {
    qmsIssue: {
      actionIds: [],
      affectedItems: [
        {
          partNumber: "PRT-051260",
          quantity: 27,
          revision: "B",
          serialNumber: "SN-419784",
        },
      ],
      changeIds: [],
      createdAt: new Date("2020-06-10T05:10:42.904Z"),
      description: "Adfero delectatio earum contabesco convoco uxor avaritia volaticus dens.",
      dueAt: new Date("2024-07-23T23:27:44.473Z"),
      fileIds: [],
      id: "d0973912-0afb-4b7f-9558-5d0f8dc7c8ae",
      lifecycleState: "In Progress",
      metadata: [],
      name: "Labeling error on tuxedo",
      number: "CMP-5154",
      openedAt: new Date("2024-07-08T22:53:20.681Z"),
      originalType: "Customer Complaint",
      severity: "MEDIUM",
      source: "CUSTOMER",
      status: "IN_PROGRESS",
      type: "COMPLAINT",
      updatedAt: new Date("2021-03-13T04:40:43.127Z"),
      url: "https://annual-cycle.org/",
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("qmsCreateQmsIssue failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateQmsIssueRequest](../../sdk/models/operations/createqmsissuerequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.QmsIssue](../../sdk/models/shared/qmsissue.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getQmsIssue

Retrieves a single QmsIssue by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getQmsIssue" method="get" path="/qms/{connection_id}/issue/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.issue.getQmsIssue({
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
import { qmsGetQmsIssue } from "@unified-api/typescript-sdk/funcs/qmsGetQmsIssue.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await qmsGetQmsIssue(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("qmsGetQmsIssue failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetQmsIssueRequest](../../sdk/models/operations/getqmsissuerequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.QmsIssue](../../sdk/models/shared/qmsissue.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getUnifiedIssue

Retrieve support issue

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getUnifiedIssue" method="get" path="/unified/issue/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.issue.getUnifiedIssue({
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
import { issueGetUnifiedIssue } from "@unified-api/typescript-sdk/funcs/issueGetUnifiedIssue.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await issueGetUnifiedIssue(unifiedTo, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("issueGetUnifiedIssue failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetUnifiedIssueRequest](../../sdk/models/operations/getunifiedissuerequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.Issue](../../sdk/models/shared/issue.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listQmsIssues

Returns a list of QmsIssues. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listQmsIssues" method="get" path="/qms/{connection_id}/issue" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.issue.listQmsIssues({
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
import { qmsListQmsIssues } from "@unified-api/typescript-sdk/funcs/qmsListQmsIssues.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await qmsListQmsIssues(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("qmsListQmsIssues failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListQmsIssuesRequest](../../sdk/models/operations/listqmsissuesrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.QmsIssue[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listUnifiedIssues

List support issues

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listUnifiedIssues" method="get" path="/unified/issue" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.issue.listUnifiedIssues({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { issueListUnifiedIssues } from "@unified-api/typescript-sdk/funcs/issueListUnifiedIssues.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await issueListUnifiedIssues(unifiedTo, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("issueListUnifiedIssues failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListUnifiedIssuesRequest](../../sdk/models/operations/listunifiedissuesrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.Issue[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchQmsIssue

Updates the QmsIssue identified by `id`. Provide the unified QmsIssue fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchQmsIssue" method="patch" path="/qms/{connection_id}/issue/{id}" example="qms_issue" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.issue.patchQmsIssue({
    qmsIssue: {
      actionIds: [],
      affectedItems: [
        {
          partNumber: "PRT-051260",
          quantity: 27,
          revision: "B",
          serialNumber: "SN-419784",
        },
      ],
      changeIds: [],
      createdAt: new Date("2020-06-10T05:10:42.904Z"),
      description: "Adfero delectatio earum contabesco convoco uxor avaritia volaticus dens.",
      dueAt: new Date("2024-07-23T23:27:44.485Z"),
      fileIds: [],
      id: "e90c2f58-2e63-42c9-99f8-50f865d74711",
      lifecycleState: "In Progress",
      metadata: [],
      name: "Labeling error on tuxedo",
      number: "CMP-5154",
      openedAt: new Date("2024-07-08T22:53:20.693Z"),
      originalType: "Customer Complaint",
      severity: "MEDIUM",
      source: "CUSTOMER",
      status: "IN_PROGRESS",
      type: "COMPLAINT",
      updatedAt: new Date("2021-03-13T04:40:43.129Z"),
      url: "https://annual-cycle.org/",
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
import { qmsPatchQmsIssue } from "@unified-api/typescript-sdk/funcs/qmsPatchQmsIssue.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await qmsPatchQmsIssue(unifiedTo, {
    qmsIssue: {
      actionIds: [],
      affectedItems: [
        {
          partNumber: "PRT-051260",
          quantity: 27,
          revision: "B",
          serialNumber: "SN-419784",
        },
      ],
      changeIds: [],
      createdAt: new Date("2020-06-10T05:10:42.904Z"),
      description: "Adfero delectatio earum contabesco convoco uxor avaritia volaticus dens.",
      dueAt: new Date("2024-07-23T23:27:44.485Z"),
      fileIds: [],
      id: "e90c2f58-2e63-42c9-99f8-50f865d74711",
      lifecycleState: "In Progress",
      metadata: [],
      name: "Labeling error on tuxedo",
      number: "CMP-5154",
      openedAt: new Date("2024-07-08T22:53:20.693Z"),
      originalType: "Customer Complaint",
      severity: "MEDIUM",
      source: "CUSTOMER",
      status: "IN_PROGRESS",
      type: "COMPLAINT",
      updatedAt: new Date("2021-03-13T04:40:43.129Z"),
      url: "https://annual-cycle.org/",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("qmsPatchQmsIssue failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchQmsIssueRequest](../../sdk/models/operations/patchqmsissuerequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.QmsIssue](../../sdk/models/shared/qmsissue.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateQmsIssue

Updates the QmsIssue identified by `id`. Provide the unified QmsIssue fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateQmsIssue" method="put" path="/qms/{connection_id}/issue/{id}" example="qms_issue" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.issue.updateQmsIssue({
    qmsIssue: {
      actionIds: [],
      affectedItems: [
        {
          partNumber: "PRT-051260",
          quantity: 27,
          revision: "B",
          serialNumber: "SN-419784",
        },
      ],
      changeIds: [],
      createdAt: new Date("2020-06-10T05:10:42.904Z"),
      description: "Adfero delectatio earum contabesco convoco uxor avaritia volaticus dens.",
      dueAt: new Date("2024-07-23T23:27:44.485Z"),
      fileIds: [],
      id: "e90c2f58-2e63-42c9-99f8-50f865d74711",
      lifecycleState: "In Progress",
      metadata: [],
      name: "Labeling error on tuxedo",
      number: "CMP-5154",
      openedAt: new Date("2024-07-08T22:53:20.693Z"),
      originalType: "Customer Complaint",
      severity: "MEDIUM",
      source: "CUSTOMER",
      status: "IN_PROGRESS",
      type: "COMPLAINT",
      updatedAt: new Date("2021-03-13T04:40:43.129Z"),
      url: "https://annual-cycle.org/",
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
import { qmsUpdateQmsIssue } from "@unified-api/typescript-sdk/funcs/qmsUpdateQmsIssue.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await qmsUpdateQmsIssue(unifiedTo, {
    qmsIssue: {
      actionIds: [],
      affectedItems: [
        {
          partNumber: "PRT-051260",
          quantity: 27,
          revision: "B",
          serialNumber: "SN-419784",
        },
      ],
      changeIds: [],
      createdAt: new Date("2020-06-10T05:10:42.904Z"),
      description: "Adfero delectatio earum contabesco convoco uxor avaritia volaticus dens.",
      dueAt: new Date("2024-07-23T23:27:44.485Z"),
      fileIds: [],
      id: "e90c2f58-2e63-42c9-99f8-50f865d74711",
      lifecycleState: "In Progress",
      metadata: [],
      name: "Labeling error on tuxedo",
      number: "CMP-5154",
      openedAt: new Date("2024-07-08T22:53:20.693Z"),
      originalType: "Customer Complaint",
      severity: "MEDIUM",
      source: "CUSTOMER",
      status: "IN_PROGRESS",
      type: "COMPLAINT",
      updatedAt: new Date("2021-03-13T04:40:43.129Z"),
      url: "https://annual-cycle.org/",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("qmsUpdateQmsIssue failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateQmsIssueRequest](../../sdk/models/operations/updateqmsissuerequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.QmsIssue](../../sdk/models/shared/qmsissue.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |