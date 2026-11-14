# Inspection

## Overview

### Available Operations

* [createQmsInspection](#createqmsinspection) - Create an inspection
* [getQmsInspection](#getqmsinspection) - Retrieve an inspection
* [listQmsInspections](#listqmsinspections) - List all inspections
* [patchQmsInspection](#patchqmsinspection) - Update an inspection
* [updateQmsInspection](#updateqmsinspection) - Update an inspection

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
  const result = await unifiedTo.inspection.createQmsInspection({
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
  const result = await unifiedTo.inspection.getQmsInspection({
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
  const result = await unifiedTo.inspection.listQmsInspections({
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
  const result = await unifiedTo.inspection.patchQmsInspection({
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
  const result = await unifiedTo.inspection.updateQmsInspection({
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