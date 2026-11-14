# Qms

## Overview

### Available Operations

* [createQmsAction](#createqmsaction) - Create an action
* [createQmsAudit](#createqmsaudit) - Create an audit
* [createQmsInspection](#createqmsinspection) - Create an inspection
* [createQmsIssue](#createqmsissue) - Create an issue
* [getQmsAction](#getqmsaction) - Retrieve an action
* [getQmsAudit](#getqmsaudit) - Retrieve an audit
* [getQmsInspection](#getqmsinspection) - Retrieve an inspection
* [getQmsIssue](#getqmsissue) - Retrieve an issue
* [listQmsActions](#listqmsactions) - List all actions
* [listQmsAudits](#listqmsaudits) - List all audits
* [listQmsInspections](#listqmsinspections) - List all inspections
* [listQmsIssues](#listqmsissues) - List all issues
* [patchQmsAction](#patchqmsaction) - Update an action
* [patchQmsAudit](#patchqmsaudit) - Update an audit
* [patchQmsInspection](#patchqmsinspection) - Update an inspection
* [patchQmsIssue](#patchqmsissue) - Update an issue
* [updateQmsAction](#updateqmsaction) - Update an action
* [updateQmsAudit](#updateqmsaudit) - Update an audit
* [updateQmsInspection](#updateqmsinspection) - Update an inspection
* [updateQmsIssue](#updateqmsissue) - Update an issue

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
  const result = await unifiedTo.qms.createQmsAction({
    qmsAction: {
      affectedItems: [],
      createdAt: new Date("2022-03-07T03:01:29.933Z"),
      description: "Auditor sunt tego apparatus aegre ascisco.",
      dueAt: new Date("2022-04-04T03:42:01.290Z"),
      fileIds: [],
      id: "c750277d-cea6-4dbc-9a13-5184d62fbbcf",
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
      updatedAt: new Date("2025-02-16T23:21:31.555Z"),
      url: "https://incomplete-conservation.org",
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
      description: "Auditor sunt tego apparatus aegre ascisco.",
      dueAt: new Date("2022-04-04T03:42:01.290Z"),
      fileIds: [],
      id: "c750277d-cea6-4dbc-9a13-5184d62fbbcf",
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
      updatedAt: new Date("2025-02-16T23:21:31.555Z"),
      url: "https://incomplete-conservation.org",
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
  const result = await unifiedTo.qms.createQmsAudit({
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

## createQmsInspection

Creates a QmsInspection. Provide the unified QmsInspection fields in the request body; they are mapped to the provider's API. Returns the created QmsInspection.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createQmsInspection" method="post" path="/qms/{connection_id}/inspection" example="qms_inspection" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.qms.createQmsInspection({
    qmsInspection: {
      characteristics: [
        {
          lowerLimit: 152.9,
          measuredValue: "152.94",
          name: "Hole position",
          nominalValue: 153,
          result: "PASS",
          unitOfMeasure: "mm",
          upperLimit: 153.1,
        },
        {
          lowerLimit: 24.95,
          measuredValue: "25.03",
          name: "Flatness",
          nominalValue: 25,
          result: "PASS",
          unitOfMeasure: "mm",
          upperLimit: 25.05,
        },
        {
          lowerLimit: 53.99,
          measuredValue: "53.99",
          name: "Bore diameter",
          nominalValue: 54,
          result: "PASS",
          unitOfMeasure: "mm",
          upperLimit: 54.01,
        },
      ],
      createdAt: new Date("2020-04-18T21:23:54.000Z"),
      fileIds: [],
      id: "013e67cc-e4a7-4f03-8e8e-db614eb1877b",
      inspectedAt: new Date("2021-02-07T08:45:10.646Z"),
      issueIds: [],
      lifecycleState: "Complete",
      metadata: [],
      name: "Source inspection",
      number: "INSP-96996",
      partNumber: "PRT-048483",
      quantityAccepted: 41,
      quantityInspected: 41,
      quantityRejected: 0,
      result: "PASS",
      revision: "A",
      status: "CLOSED",
      supplierName: "Gerlach LLC",
      type: "SOURCE",
      updatedAt: new Date("2026-05-08T14:03:14.383Z"),
      url: "https://purple-newsprint.name/",
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
import { qmsCreateQmsInspection } from "@unified-api/typescript-sdk/funcs/qmsCreateQmsInspection.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await qmsCreateQmsInspection(unifiedTo, {
    qmsInspection: {
      characteristics: [
        {
          lowerLimit: 152.9,
          measuredValue: "152.94",
          name: "Hole position",
          nominalValue: 153,
          result: "PASS",
          unitOfMeasure: "mm",
          upperLimit: 153.1,
        },
        {
          lowerLimit: 24.95,
          measuredValue: "25.03",
          name: "Flatness",
          nominalValue: 25,
          result: "PASS",
          unitOfMeasure: "mm",
          upperLimit: 25.05,
        },
        {
          lowerLimit: 53.99,
          measuredValue: "53.99",
          name: "Bore diameter",
          nominalValue: 54,
          result: "PASS",
          unitOfMeasure: "mm",
          upperLimit: 54.01,
        },
      ],
      createdAt: new Date("2020-04-18T21:23:54.000Z"),
      fileIds: [],
      id: "013e67cc-e4a7-4f03-8e8e-db614eb1877b",
      inspectedAt: new Date("2021-02-07T08:45:10.646Z"),
      issueIds: [],
      lifecycleState: "Complete",
      metadata: [],
      name: "Source inspection",
      number: "INSP-96996",
      partNumber: "PRT-048483",
      quantityAccepted: 41,
      quantityInspected: 41,
      quantityRejected: 0,
      result: "PASS",
      revision: "A",
      status: "CLOSED",
      supplierName: "Gerlach LLC",
      type: "SOURCE",
      updatedAt: new Date("2026-05-08T14:03:14.383Z"),
      url: "https://purple-newsprint.name/",
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("qmsCreateQmsInspection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateQmsInspectionRequest](../../sdk/models/operations/createqmsinspectionrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.QmsInspection](../../sdk/models/shared/qmsinspection.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

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
  const result = await unifiedTo.qms.createQmsIssue({
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
  const result = await unifiedTo.qms.getQmsAction({
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
  const result = await unifiedTo.qms.getQmsAudit({
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

## getQmsInspection

Retrieves a single QmsInspection by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getQmsInspection" method="get" path="/qms/{connection_id}/inspection/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.qms.getQmsInspection({
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
import { qmsGetQmsInspection } from "@unified-api/typescript-sdk/funcs/qmsGetQmsInspection.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await qmsGetQmsInspection(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("qmsGetQmsInspection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetQmsInspectionRequest](../../sdk/models/operations/getqmsinspectionrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.QmsInspection](../../sdk/models/shared/qmsinspection.md)\>**

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
  const result = await unifiedTo.qms.getQmsIssue({
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
  const result = await unifiedTo.qms.listQmsActions({
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
  const result = await unifiedTo.qms.listQmsAudits({
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

## listQmsInspections

Returns a list of QmsInspections. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listQmsInspections" method="get" path="/qms/{connection_id}/inspection" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.qms.listQmsInspections({
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
import { qmsListQmsInspections } from "@unified-api/typescript-sdk/funcs/qmsListQmsInspections.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await qmsListQmsInspections(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("qmsListQmsInspections failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListQmsInspectionsRequest](../../sdk/models/operations/listqmsinspectionsrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.QmsInspection[]](../../models/.md)\>**

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
  const result = await unifiedTo.qms.listQmsIssues({
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
  const result = await unifiedTo.qms.patchQmsAction({
    qmsAction: {
      affectedItems: [],
      createdAt: new Date("2022-03-07T03:01:29.933Z"),
      description: "Auditor sunt tego apparatus aegre ascisco.",
      dueAt: new Date("2022-04-04T03:42:01.290Z"),
      fileIds: [],
      id: "6636ca53-e4e9-4877-87d7-9c5f1c0247b6",
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
      updatedAt: new Date("2025-02-16T23:21:31.565Z"),
      url: "https://incomplete-conservation.org",
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
      description: "Auditor sunt tego apparatus aegre ascisco.",
      dueAt: new Date("2022-04-04T03:42:01.290Z"),
      fileIds: [],
      id: "6636ca53-e4e9-4877-87d7-9c5f1c0247b6",
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
      updatedAt: new Date("2025-02-16T23:21:31.565Z"),
      url: "https://incomplete-conservation.org",
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
  const result = await unifiedTo.qms.patchQmsAudit({
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

## patchQmsInspection

Updates the QmsInspection identified by `id`. Provide the unified QmsInspection fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchQmsInspection" method="patch" path="/qms/{connection_id}/inspection/{id}" example="qms_inspection" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.qms.patchQmsInspection({
    qmsInspection: {
      characteristics: [
        {
          lowerLimit: 152.9,
          measuredValue: "152.94",
          name: "Hole position",
          nominalValue: 153,
          result: "PASS",
          unitOfMeasure: "mm",
          upperLimit: 153.1,
        },
        {
          lowerLimit: 24.95,
          measuredValue: "25.03",
          name: "Flatness",
          nominalValue: 25,
          result: "PASS",
          unitOfMeasure: "mm",
          upperLimit: 25.05,
        },
        {
          lowerLimit: 53.99,
          measuredValue: "53.99",
          name: "Bore diameter",
          nominalValue: 54,
          result: "PASS",
          unitOfMeasure: "mm",
          upperLimit: 54.01,
        },
      ],
      createdAt: new Date("2020-04-18T21:23:54.000Z"),
      fileIds: [],
      id: "893f655e-e036-4227-acd8-5cbe7f5e02c0",
      inspectedAt: new Date("2021-02-07T08:45:10.649Z"),
      issueIds: [],
      lifecycleState: "Complete",
      metadata: [],
      name: "Source inspection",
      number: "INSP-96996",
      partNumber: "PRT-048483",
      quantityAccepted: 41,
      quantityInspected: 41,
      quantityRejected: 0,
      result: "PASS",
      revision: "A",
      status: "CLOSED",
      supplierName: "Gerlach LLC",
      type: "SOURCE",
      updatedAt: new Date("2026-05-08T14:03:14.400Z"),
      url: "https://purple-newsprint.name/",
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
import { qmsPatchQmsInspection } from "@unified-api/typescript-sdk/funcs/qmsPatchQmsInspection.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await qmsPatchQmsInspection(unifiedTo, {
    qmsInspection: {
      characteristics: [
        {
          lowerLimit: 152.9,
          measuredValue: "152.94",
          name: "Hole position",
          nominalValue: 153,
          result: "PASS",
          unitOfMeasure: "mm",
          upperLimit: 153.1,
        },
        {
          lowerLimit: 24.95,
          measuredValue: "25.03",
          name: "Flatness",
          nominalValue: 25,
          result: "PASS",
          unitOfMeasure: "mm",
          upperLimit: 25.05,
        },
        {
          lowerLimit: 53.99,
          measuredValue: "53.99",
          name: "Bore diameter",
          nominalValue: 54,
          result: "PASS",
          unitOfMeasure: "mm",
          upperLimit: 54.01,
        },
      ],
      createdAt: new Date("2020-04-18T21:23:54.000Z"),
      fileIds: [],
      id: "893f655e-e036-4227-acd8-5cbe7f5e02c0",
      inspectedAt: new Date("2021-02-07T08:45:10.649Z"),
      issueIds: [],
      lifecycleState: "Complete",
      metadata: [],
      name: "Source inspection",
      number: "INSP-96996",
      partNumber: "PRT-048483",
      quantityAccepted: 41,
      quantityInspected: 41,
      quantityRejected: 0,
      result: "PASS",
      revision: "A",
      status: "CLOSED",
      supplierName: "Gerlach LLC",
      type: "SOURCE",
      updatedAt: new Date("2026-05-08T14:03:14.400Z"),
      url: "https://purple-newsprint.name/",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("qmsPatchQmsInspection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchQmsInspectionRequest](../../sdk/models/operations/patchqmsinspectionrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.QmsInspection](../../sdk/models/shared/qmsinspection.md)\>**

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
  const result = await unifiedTo.qms.patchQmsIssue({
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
  const result = await unifiedTo.qms.updateQmsAction({
    qmsAction: {
      affectedItems: [],
      createdAt: new Date("2022-03-07T03:01:29.933Z"),
      description: "Auditor sunt tego apparatus aegre ascisco.",
      dueAt: new Date("2022-04-04T03:42:01.290Z"),
      fileIds: [],
      id: "6636ca53-e4e9-4877-87d7-9c5f1c0247b6",
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
      updatedAt: new Date("2025-02-16T23:21:31.565Z"),
      url: "https://incomplete-conservation.org",
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
      description: "Auditor sunt tego apparatus aegre ascisco.",
      dueAt: new Date("2022-04-04T03:42:01.290Z"),
      fileIds: [],
      id: "6636ca53-e4e9-4877-87d7-9c5f1c0247b6",
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
      updatedAt: new Date("2025-02-16T23:21:31.565Z"),
      url: "https://incomplete-conservation.org",
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
  const result = await unifiedTo.qms.updateQmsAudit({
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

## updateQmsInspection

Updates the QmsInspection identified by `id`. Provide the unified QmsInspection fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateQmsInspection" method="put" path="/qms/{connection_id}/inspection/{id}" example="qms_inspection" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.qms.updateQmsInspection({
    qmsInspection: {
      characteristics: [
        {
          lowerLimit: 152.9,
          measuredValue: "152.94",
          name: "Hole position",
          nominalValue: 153,
          result: "PASS",
          unitOfMeasure: "mm",
          upperLimit: 153.1,
        },
        {
          lowerLimit: 24.95,
          measuredValue: "25.03",
          name: "Flatness",
          nominalValue: 25,
          result: "PASS",
          unitOfMeasure: "mm",
          upperLimit: 25.05,
        },
        {
          lowerLimit: 53.99,
          measuredValue: "53.99",
          name: "Bore diameter",
          nominalValue: 54,
          result: "PASS",
          unitOfMeasure: "mm",
          upperLimit: 54.01,
        },
      ],
      createdAt: new Date("2020-04-18T21:23:54.000Z"),
      fileIds: [],
      id: "893f655e-e036-4227-acd8-5cbe7f5e02c0",
      inspectedAt: new Date("2021-02-07T08:45:10.649Z"),
      issueIds: [],
      lifecycleState: "Complete",
      metadata: [],
      name: "Source inspection",
      number: "INSP-96996",
      partNumber: "PRT-048483",
      quantityAccepted: 41,
      quantityInspected: 41,
      quantityRejected: 0,
      result: "PASS",
      revision: "A",
      status: "CLOSED",
      supplierName: "Gerlach LLC",
      type: "SOURCE",
      updatedAt: new Date("2026-05-08T14:03:14.400Z"),
      url: "https://purple-newsprint.name/",
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
import { qmsUpdateQmsInspection } from "@unified-api/typescript-sdk/funcs/qmsUpdateQmsInspection.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await qmsUpdateQmsInspection(unifiedTo, {
    qmsInspection: {
      characteristics: [
        {
          lowerLimit: 152.9,
          measuredValue: "152.94",
          name: "Hole position",
          nominalValue: 153,
          result: "PASS",
          unitOfMeasure: "mm",
          upperLimit: 153.1,
        },
        {
          lowerLimit: 24.95,
          measuredValue: "25.03",
          name: "Flatness",
          nominalValue: 25,
          result: "PASS",
          unitOfMeasure: "mm",
          upperLimit: 25.05,
        },
        {
          lowerLimit: 53.99,
          measuredValue: "53.99",
          name: "Bore diameter",
          nominalValue: 54,
          result: "PASS",
          unitOfMeasure: "mm",
          upperLimit: 54.01,
        },
      ],
      createdAt: new Date("2020-04-18T21:23:54.000Z"),
      fileIds: [],
      id: "893f655e-e036-4227-acd8-5cbe7f5e02c0",
      inspectedAt: new Date("2021-02-07T08:45:10.649Z"),
      issueIds: [],
      lifecycleState: "Complete",
      metadata: [],
      name: "Source inspection",
      number: "INSP-96996",
      partNumber: "PRT-048483",
      quantityAccepted: 41,
      quantityInspected: 41,
      quantityRejected: 0,
      result: "PASS",
      revision: "A",
      status: "CLOSED",
      supplierName: "Gerlach LLC",
      type: "SOURCE",
      updatedAt: new Date("2026-05-08T14:03:14.400Z"),
      url: "https://purple-newsprint.name/",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("qmsUpdateQmsInspection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateQmsInspectionRequest](../../sdk/models/operations/updateqmsinspectionrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.QmsInspection](../../sdk/models/shared/qmsinspection.md)\>**

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
  const result = await unifiedTo.qms.updateQmsIssue({
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