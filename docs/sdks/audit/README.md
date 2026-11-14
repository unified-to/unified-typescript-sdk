# Audit

## Overview

### Available Operations

* [createQmsAudit](#createqmsaudit) - Create an audit
* [getQmsAudit](#getqmsaudit) - Retrieve an audit
* [listQmsAudits](#listqmsaudits) - List all audits
* [patchQmsAudit](#patchqmsaudit) - Update an audit
* [updateQmsAudit](#updateqmsaudit) - Update an audit

## createQmsAudit

Creates a QmsAudit. Provide the unified QmsAudit fields in the request body; they are mapped to the provider's API. Returns the created QmsAudit.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createQmsAudit" method="post" path="/qms/{connection_id}/audit" example="qms_audit" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.audit.createQmsAudit({
    qmsAudit: {
      createdAt: new Date("2021-02-20T23:02:37.667Z"),
      endAt: new Date("2026-03-27T10:01:22.380Z"),
      fileIds: [],
      id: "34275c70-e1f9-4e26-905f-258fccbab3ff",
      issueIds: [],
      lifecycleState: "In Review",
      metadata: [],
      name: "soggy certification audit",
      number: "AUD-215",
      scheduledAt: new Date("2021-02-20T23:02:37.667Z"),
      scope: "Calibration",
      standard: "ISO 9001:2015",
      startAt: new Date("2023-01-25T00:54:50.577Z"),
      status: "IN_REVIEW",
      type: "CERTIFICATION",
      updatedAt: new Date("2024-02-08T13:44:04.840Z"),
      url: "https://mushy-obesity.name/",
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
import { qmsCreateQmsAudit } from "@unified-api/typescript-sdk/funcs/qmsCreateQmsAudit.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await qmsCreateQmsAudit(unifiedTo, {
    qmsAudit: {
      createdAt: new Date("2021-02-20T23:02:37.667Z"),
      endAt: new Date("2026-03-27T10:01:22.380Z"),
      fileIds: [],
      id: "34275c70-e1f9-4e26-905f-258fccbab3ff",
      issueIds: [],
      lifecycleState: "In Review",
      metadata: [],
      name: "soggy certification audit",
      number: "AUD-215",
      scheduledAt: new Date("2021-02-20T23:02:37.667Z"),
      scope: "Calibration",
      standard: "ISO 9001:2015",
      startAt: new Date("2023-01-25T00:54:50.577Z"),
      status: "IN_REVIEW",
      type: "CERTIFICATION",
      updatedAt: new Date("2024-02-08T13:44:04.840Z"),
      url: "https://mushy-obesity.name/",
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("qmsCreateQmsAudit failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateQmsAuditRequest](../../sdk/models/operations/createqmsauditrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.QmsAudit](../../sdk/models/shared/qmsaudit.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getQmsAudit

Retrieves a single QmsAudit by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getQmsAudit" method="get" path="/qms/{connection_id}/audit/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.audit.getQmsAudit({
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
import { qmsGetQmsAudit } from "@unified-api/typescript-sdk/funcs/qmsGetQmsAudit.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await qmsGetQmsAudit(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("qmsGetQmsAudit failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetQmsAuditRequest](../../sdk/models/operations/getqmsauditrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.QmsAudit](../../sdk/models/shared/qmsaudit.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listQmsAudits

Returns a list of QmsAudits. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listQmsAudits" method="get" path="/qms/{connection_id}/audit" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.audit.listQmsAudits({
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
import { qmsListQmsAudits } from "@unified-api/typescript-sdk/funcs/qmsListQmsAudits.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await qmsListQmsAudits(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("qmsListQmsAudits failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListQmsAuditsRequest](../../sdk/models/operations/listqmsauditsrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.QmsAudit[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchQmsAudit

Updates the QmsAudit identified by `id`. Provide the unified QmsAudit fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchQmsAudit" method="patch" path="/qms/{connection_id}/audit/{id}" example="qms_audit" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.audit.patchQmsAudit({
    qmsAudit: {
      createdAt: new Date("2021-02-20T23:02:37.667Z"),
      endAt: new Date("2026-03-27T10:01:22.392Z"),
      fileIds: [],
      id: "335ee2aa-03ee-47e8-a800-de344235d2ff",
      issueIds: [],
      lifecycleState: "In Review",
      metadata: [],
      name: "soggy certification audit",
      number: "AUD-215",
      scheduledAt: new Date("2021-02-20T23:02:37.667Z"),
      scope: "Calibration",
      standard: "ISO 9001:2015",
      startAt: new Date("2023-01-25T00:54:50.582Z"),
      status: "IN_REVIEW",
      type: "CERTIFICATION",
      updatedAt: new Date("2024-02-08T13:44:04.846Z"),
      url: "https://mushy-obesity.name/",
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
import { qmsPatchQmsAudit } from "@unified-api/typescript-sdk/funcs/qmsPatchQmsAudit.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await qmsPatchQmsAudit(unifiedTo, {
    qmsAudit: {
      createdAt: new Date("2021-02-20T23:02:37.667Z"),
      endAt: new Date("2026-03-27T10:01:22.392Z"),
      fileIds: [],
      id: "335ee2aa-03ee-47e8-a800-de344235d2ff",
      issueIds: [],
      lifecycleState: "In Review",
      metadata: [],
      name: "soggy certification audit",
      number: "AUD-215",
      scheduledAt: new Date("2021-02-20T23:02:37.667Z"),
      scope: "Calibration",
      standard: "ISO 9001:2015",
      startAt: new Date("2023-01-25T00:54:50.582Z"),
      status: "IN_REVIEW",
      type: "CERTIFICATION",
      updatedAt: new Date("2024-02-08T13:44:04.846Z"),
      url: "https://mushy-obesity.name/",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("qmsPatchQmsAudit failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchQmsAuditRequest](../../sdk/models/operations/patchqmsauditrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.QmsAudit](../../sdk/models/shared/qmsaudit.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateQmsAudit

Updates the QmsAudit identified by `id`. Provide the unified QmsAudit fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateQmsAudit" method="put" path="/qms/{connection_id}/audit/{id}" example="qms_audit" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.audit.updateQmsAudit({
    qmsAudit: {
      createdAt: new Date("2021-02-20T23:02:37.667Z"),
      endAt: new Date("2026-03-27T10:01:22.392Z"),
      fileIds: [],
      id: "335ee2aa-03ee-47e8-a800-de344235d2ff",
      issueIds: [],
      lifecycleState: "In Review",
      metadata: [],
      name: "soggy certification audit",
      number: "AUD-215",
      scheduledAt: new Date("2021-02-20T23:02:37.667Z"),
      scope: "Calibration",
      standard: "ISO 9001:2015",
      startAt: new Date("2023-01-25T00:54:50.582Z"),
      status: "IN_REVIEW",
      type: "CERTIFICATION",
      updatedAt: new Date("2024-02-08T13:44:04.846Z"),
      url: "https://mushy-obesity.name/",
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
import { qmsUpdateQmsAudit } from "@unified-api/typescript-sdk/funcs/qmsUpdateQmsAudit.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await qmsUpdateQmsAudit(unifiedTo, {
    qmsAudit: {
      createdAt: new Date("2021-02-20T23:02:37.667Z"),
      endAt: new Date("2026-03-27T10:01:22.392Z"),
      fileIds: [],
      id: "335ee2aa-03ee-47e8-a800-de344235d2ff",
      issueIds: [],
      lifecycleState: "In Review",
      metadata: [],
      name: "soggy certification audit",
      number: "AUD-215",
      scheduledAt: new Date("2021-02-20T23:02:37.667Z"),
      scope: "Calibration",
      standard: "ISO 9001:2015",
      startAt: new Date("2023-01-25T00:54:50.582Z"),
      status: "IN_REVIEW",
      type: "CERTIFICATION",
      updatedAt: new Date("2024-02-08T13:44:04.846Z"),
      url: "https://mushy-obesity.name/",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("qmsUpdateQmsAudit failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateQmsAuditRequest](../../sdk/models/operations/updateqmsauditrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.QmsAudit](../../sdk/models/shared/qmsaudit.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |