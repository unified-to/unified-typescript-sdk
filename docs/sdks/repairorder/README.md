# Repairorder

## Overview

### Available Operations

* [createDmsRepairorder](#createdmsrepairorder) - Create a repairorder
* [getDmsRepairorder](#getdmsrepairorder) - Retrieve a repairorder
* [listDmsRepairorders](#listdmsrepairorders) - List all repairorders
* [patchDmsRepairorder](#patchdmsrepairorder) - Update a repairorder
* [updateDmsRepairorder](#updatedmsrepairorder) - Update a repairorder

## createDmsRepairorder

Creates a DmsRepairorder. Provide the unified DmsRepairorder fields in the request body; they are mapped to the provider's API. Returns the created DmsRepairorder.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createDmsRepairorder" method="post" path="/dms/{connection_id}/repairorder" example="dms_repairorder" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.repairorder.createDmsRepairorder({
    dmsRepairorder: {
      balanceAmount: 3193.86,
      completedAt: new Date("2026-11-13T20:16:23.183Z"),
      createdAt: new Date("2022-10-25T15:50:48.007Z"),
      currency: "USD",
      discountAmount: 0,
      estimateAmount: 3264,
      id: "23a78263-275b-49a0-8633-0966eeb86f23",
      jobs: [
        {
          actualHours: 3.6,
          cause: "Scheduled maintenance",
          complaint: "Due for service",
          correction: "Aufero cumque vicinus aptus assumenda quis aptus.",
          id: "50cde5d9-355e-45a3-9d92-0f7c461469f1",
          laborAmount: 681.6,
          labors: [
            {
              id: "487b8606-6ae5-4c0b-9561-f11066d3f1e1",
              payType: "WARRANTY",
              rateAmount: 213,
              soldHours: 3.2,
              technicianUserIds: [],
              totalAmount: 681.6,
            },
          ],
          name: "Customer concern",
          number: "A",
          parts: [],
          partsAmount: 0,
          payType: "WARRANTY",
          soldHours: 3.2,
          status: "COMPLETED",
          technicianUserIds: [],
          totalAmount: 681.6,
        },
        {
          actualHours: 3,
          cause: "Worn brake pads",
          complaint: "Vibration at highway speed",
          correction: "Somnus avaritia utroque vulnero ullam ancilla.",
          id: "b3e5b44c-fc9b-4e83-b4d3-25b139cda107",
          laborAmount: 446.4,
          labors: [
            {
              id: "44b52e3f-2ce5-4738-81dd-2f88d3984f75",
              payType: "WARRANTY",
              rateAmount: 144,
              soldHours: 3.1,
              technicianUserIds: [],
              totalAmount: 446.4,
            },
          ],
          name: "Customer concern",
          number: "B",
          parts: [
            {
              id: "2e1d11a8-84f0-4b23-a2a4-1f740d42d9ed",
              payType: "WARRANTY",
              quantity: 4,
              quantityOrdered: 4,
              totalAmount: 890.44,
              unitPriceAmount: 222.61,
            },
            {
              id: "277dbdb7-a4d0-47a0-9a3e-a00d15ecede3",
              payType: "WARRANTY",
              quantity: 2,
              quantityOrdered: 2,
              totalAmount: 216.18,
              unitPriceAmount: 108.09,
            },
          ],
          partsAmount: 1106.6200000000001,
          payType: "WARRANTY",
          soldHours: 3.1,
          status: "COMPLETED",
          technicianUserIds: [],
          totalAmount: 1553.02,
        },
        {
          actualHours: 1.5,
          cause: "Scheduled maintenance",
          complaint: "Noise when braking",
          correction: "Degero theca natus.",
          id: "b34fca0a-1cc4-4738-9b62-469d546f5e52",
          laborAmount: 232.4,
          labors: [
            {
              id: "0c775c7d-0aa5-4f91-92c5-3e4e80aaf9af",
              payType: "CUSTOMER",
              rateAmount: 166,
              soldHours: 1.4,
              technicianUserIds: [],
              totalAmount: 232.4,
            },
          ],
          name: "Customer concern",
          number: "C",
          parts: [
            {
              id: "df148b13-51ac-467c-a26f-71209265df9a",
              payType: "CUSTOMER",
              quantity: 1,
              quantityOrdered: 1,
              totalAmount: 216.02,
              unitPriceAmount: 216.02,
            },
            {
              id: "72b627c9-c085-47f2-990a-e921c8b0e20d",
              payType: "CUSTOMER",
              quantity: 2,
              quantityOrdered: 2,
              totalAmount: 358.16,
              unitPriceAmount: 179.08,
            },
          ],
          partsAmount: 574.1800000000001,
          payType: "CUSTOMER",
          soldHours: 1.4,
          status: "COMPLETED",
          technicianUserIds: [],
          totalAmount: 806.58,
        },
      ],
      laborAmount: 1360.4,
      metadata: [],
      miscAmount: 35,
      number: "143398",
      odometerIn: 7776,
      odometerOut: 7776,
      odometerUnit: "MILES",
      openedAt: new Date("2025-02-08T09:20:27.451Z"),
      partsAmount: 1680.8000000000002,
      payType: "WARRANTY",
      promisedAt: new Date("2025-02-09T17:20:27.451Z"),
      purchaseOrderNumber: "182743",
      status: "COMPLETED",
      subletAmount: 0,
      tagNumber: "758",
      taxAmount: 117.66,
      technicianUserIds: [],
      totalAmount: 3193.86,
      totals: [
        {
          discountAmount: 0,
          laborAmount: 232.4,
          partsAmount: 574.1800000000001,
          payType: "CUSTOMER",
          subletAmount: 0,
          totalAmount: 806.58,
        },
        {
          discountAmount: 0,
          laborAmount: 1128,
          partsAmount: 1106.6200000000001,
          payType: "WARRANTY",
          subletAmount: 0,
          totalAmount: 2234.62,
        },
      ],
      transportType: "LOANER",
      updatedAt: new Date("2025-11-28T17:09:52.379Z"),
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
import { dmsCreateDmsRepairorder } from "@unified-api/typescript-sdk/funcs/dmsCreateDmsRepairorder.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsCreateDmsRepairorder(unifiedTo, {
    dmsRepairorder: {
      balanceAmount: 3193.86,
      completedAt: new Date("2026-11-13T20:16:23.183Z"),
      createdAt: new Date("2022-10-25T15:50:48.007Z"),
      currency: "USD",
      discountAmount: 0,
      estimateAmount: 3264,
      id: "23a78263-275b-49a0-8633-0966eeb86f23",
      jobs: [
        {
          actualHours: 3.6,
          cause: "Scheduled maintenance",
          complaint: "Due for service",
          correction: "Aufero cumque vicinus aptus assumenda quis aptus.",
          id: "50cde5d9-355e-45a3-9d92-0f7c461469f1",
          laborAmount: 681.6,
          labors: [
            {
              id: "487b8606-6ae5-4c0b-9561-f11066d3f1e1",
              payType: "WARRANTY",
              rateAmount: 213,
              soldHours: 3.2,
              technicianUserIds: [],
              totalAmount: 681.6,
            },
          ],
          name: "Customer concern",
          number: "A",
          parts: [],
          partsAmount: 0,
          payType: "WARRANTY",
          soldHours: 3.2,
          status: "COMPLETED",
          technicianUserIds: [],
          totalAmount: 681.6,
        },
        {
          actualHours: 3,
          cause: "Worn brake pads",
          complaint: "Vibration at highway speed",
          correction: "Somnus avaritia utroque vulnero ullam ancilla.",
          id: "b3e5b44c-fc9b-4e83-b4d3-25b139cda107",
          laborAmount: 446.4,
          labors: [
            {
              id: "44b52e3f-2ce5-4738-81dd-2f88d3984f75",
              payType: "WARRANTY",
              rateAmount: 144,
              soldHours: 3.1,
              technicianUserIds: [],
              totalAmount: 446.4,
            },
          ],
          name: "Customer concern",
          number: "B",
          parts: [
            {
              id: "2e1d11a8-84f0-4b23-a2a4-1f740d42d9ed",
              payType: "WARRANTY",
              quantity: 4,
              quantityOrdered: 4,
              totalAmount: 890.44,
              unitPriceAmount: 222.61,
            },
            {
              id: "277dbdb7-a4d0-47a0-9a3e-a00d15ecede3",
              payType: "WARRANTY",
              quantity: 2,
              quantityOrdered: 2,
              totalAmount: 216.18,
              unitPriceAmount: 108.09,
            },
          ],
          partsAmount: 1106.6200000000001,
          payType: "WARRANTY",
          soldHours: 3.1,
          status: "COMPLETED",
          technicianUserIds: [],
          totalAmount: 1553.02,
        },
        {
          actualHours: 1.5,
          cause: "Scheduled maintenance",
          complaint: "Noise when braking",
          correction: "Degero theca natus.",
          id: "b34fca0a-1cc4-4738-9b62-469d546f5e52",
          laborAmount: 232.4,
          labors: [
            {
              id: "0c775c7d-0aa5-4f91-92c5-3e4e80aaf9af",
              payType: "CUSTOMER",
              rateAmount: 166,
              soldHours: 1.4,
              technicianUserIds: [],
              totalAmount: 232.4,
            },
          ],
          name: "Customer concern",
          number: "C",
          parts: [
            {
              id: "df148b13-51ac-467c-a26f-71209265df9a",
              payType: "CUSTOMER",
              quantity: 1,
              quantityOrdered: 1,
              totalAmount: 216.02,
              unitPriceAmount: 216.02,
            },
            {
              id: "72b627c9-c085-47f2-990a-e921c8b0e20d",
              payType: "CUSTOMER",
              quantity: 2,
              quantityOrdered: 2,
              totalAmount: 358.16,
              unitPriceAmount: 179.08,
            },
          ],
          partsAmount: 574.1800000000001,
          payType: "CUSTOMER",
          soldHours: 1.4,
          status: "COMPLETED",
          technicianUserIds: [],
          totalAmount: 806.58,
        },
      ],
      laborAmount: 1360.4,
      metadata: [],
      miscAmount: 35,
      number: "143398",
      odometerIn: 7776,
      odometerOut: 7776,
      odometerUnit: "MILES",
      openedAt: new Date("2025-02-08T09:20:27.451Z"),
      partsAmount: 1680.8000000000002,
      payType: "WARRANTY",
      promisedAt: new Date("2025-02-09T17:20:27.451Z"),
      purchaseOrderNumber: "182743",
      status: "COMPLETED",
      subletAmount: 0,
      tagNumber: "758",
      taxAmount: 117.66,
      technicianUserIds: [],
      totalAmount: 3193.86,
      totals: [
        {
          discountAmount: 0,
          laborAmount: 232.4,
          partsAmount: 574.1800000000001,
          payType: "CUSTOMER",
          subletAmount: 0,
          totalAmount: 806.58,
        },
        {
          discountAmount: 0,
          laborAmount: 1128,
          partsAmount: 1106.6200000000001,
          payType: "WARRANTY",
          subletAmount: 0,
          totalAmount: 2234.62,
        },
      ],
      transportType: "LOANER",
      updatedAt: new Date("2025-11-28T17:09:52.379Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsCreateDmsRepairorder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateDmsRepairorderRequest](../../sdk/models/operations/createdmsrepairorderrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsRepairorder](../../sdk/models/shared/dmsrepairorder.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getDmsRepairorder

Retrieves a single DmsRepairorder by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getDmsRepairorder" method="get" path="/dms/{connection_id}/repairorder/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.repairorder.getDmsRepairorder({
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
import { dmsGetDmsRepairorder } from "@unified-api/typescript-sdk/funcs/dmsGetDmsRepairorder.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsGetDmsRepairorder(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsGetDmsRepairorder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetDmsRepairorderRequest](../../sdk/models/operations/getdmsrepairorderrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsRepairorder](../../sdk/models/shared/dmsrepairorder.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listDmsRepairorders

Returns a list of DmsRepairorders. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listDmsRepairorders" method="get" path="/dms/{connection_id}/repairorder" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.repairorder.listDmsRepairorders({
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
import { dmsListDmsRepairorders } from "@unified-api/typescript-sdk/funcs/dmsListDmsRepairorders.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsListDmsRepairorders(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsListDmsRepairorders failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListDmsRepairordersRequest](../../sdk/models/operations/listdmsrepairordersrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsRepairorder[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchDmsRepairorder

Updates the DmsRepairorder identified by `id`. Provide the unified DmsRepairorder fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchDmsRepairorder" method="patch" path="/dms/{connection_id}/repairorder/{id}" example="dms_repairorder" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.repairorder.patchDmsRepairorder({
    dmsRepairorder: {
      balanceAmount: 3193.86,
      completedAt: new Date("2026-11-13T20:16:23.222Z"),
      createdAt: new Date("2022-10-25T15:50:48.007Z"),
      currency: "USD",
      discountAmount: 0,
      estimateAmount: 3264,
      id: "71dc5a34-77d6-4d1c-bc8a-fe809f238bd9",
      jobs: [
        {
          actualHours: 3.6,
          cause: "Scheduled maintenance",
          complaint: "Due for service",
          correction: "Aufero cumque vicinus aptus assumenda quis aptus.",
          id: "992abbca-c196-488d-8068-64d879701f63",
          laborAmount: 681.6,
          labors: [
            {
              id: "dad6fb2a-0faf-4869-b6c8-2f33389f310e",
              payType: "WARRANTY",
              rateAmount: 213,
              soldHours: 3.2,
              technicianUserIds: [],
              totalAmount: 681.6,
            },
          ],
          name: "Customer concern",
          number: "A",
          parts: [],
          partsAmount: 0,
          payType: "WARRANTY",
          soldHours: 3.2,
          status: "COMPLETED",
          technicianUserIds: [],
          totalAmount: 681.6,
        },
        {
          actualHours: 3,
          cause: "Worn brake pads",
          complaint: "Vibration at highway speed",
          correction: "Somnus avaritia utroque vulnero ullam ancilla.",
          id: "d1818bdb-c03f-4e9e-ac74-7ed13188c99c",
          laborAmount: 446.4,
          labors: [
            {
              id: "96144e6b-246c-41b1-b75b-acb81b3c07d0",
              payType: "WARRANTY",
              rateAmount: 144,
              soldHours: 3.1,
              technicianUserIds: [],
              totalAmount: 446.4,
            },
          ],
          name: "Customer concern",
          number: "B",
          parts: [
            {
              id: "27b4c004-f677-4dba-b6e0-5f77ffffea69",
              payType: "WARRANTY",
              quantity: 4,
              quantityOrdered: 4,
              totalAmount: 890.44,
              unitPriceAmount: 222.61,
            },
            {
              id: "713484f8-ddf4-4e50-acd3-b1424219c2a2",
              payType: "WARRANTY",
              quantity: 2,
              quantityOrdered: 2,
              totalAmount: 216.18,
              unitPriceAmount: 108.09,
            },
          ],
          partsAmount: 1106.6200000000001,
          payType: "WARRANTY",
          soldHours: 3.1,
          status: "COMPLETED",
          technicianUserIds: [],
          totalAmount: 1553.02,
        },
        {
          actualHours: 1.5,
          cause: "Scheduled maintenance",
          complaint: "Noise when braking",
          correction: "Degero theca natus.",
          id: "d3217289-702e-46db-b304-a5db91d2fdad",
          laborAmount: 232.4,
          labors: [
            {
              id: "12055ea7-cb5f-4162-89d8-0771f1502631",
              payType: "CUSTOMER",
              rateAmount: 166,
              soldHours: 1.4,
              technicianUserIds: [],
              totalAmount: 232.4,
            },
          ],
          name: "Customer concern",
          number: "C",
          parts: [
            {
              id: "3df61b9e-dcd9-45b5-9b2d-2fde5a1dcf0d",
              payType: "CUSTOMER",
              quantity: 1,
              quantityOrdered: 1,
              totalAmount: 216.02,
              unitPriceAmount: 216.02,
            },
            {
              id: "598c6341-2b69-4d14-886d-51ff348f7f31",
              payType: "CUSTOMER",
              quantity: 2,
              quantityOrdered: 2,
              totalAmount: 358.16,
              unitPriceAmount: 179.08,
            },
          ],
          partsAmount: 574.1800000000001,
          payType: "CUSTOMER",
          soldHours: 1.4,
          status: "COMPLETED",
          technicianUserIds: [],
          totalAmount: 806.58,
        },
      ],
      laborAmount: 1360.4,
      metadata: [],
      miscAmount: 35,
      number: "143398",
      odometerIn: 7776,
      odometerOut: 7776,
      odometerUnit: "MILES",
      openedAt: new Date("2025-02-08T09:20:27.473Z"),
      partsAmount: 1680.8000000000002,
      payType: "WARRANTY",
      promisedAt: new Date("2025-02-09T17:20:27.473Z"),
      purchaseOrderNumber: "182743",
      status: "COMPLETED",
      subletAmount: 0,
      tagNumber: "758",
      taxAmount: 117.66,
      technicianUserIds: [],
      totalAmount: 3193.86,
      totals: [
        {
          discountAmount: 0,
          laborAmount: 232.4,
          partsAmount: 574.1800000000001,
          payType: "CUSTOMER",
          subletAmount: 0,
          totalAmount: 806.58,
        },
        {
          discountAmount: 0,
          laborAmount: 1128,
          partsAmount: 1106.6200000000001,
          payType: "WARRANTY",
          subletAmount: 0,
          totalAmount: 2234.62,
        },
      ],
      transportType: "LOANER",
      updatedAt: new Date("2025-11-28T17:09:52.408Z"),
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
import { dmsPatchDmsRepairorder } from "@unified-api/typescript-sdk/funcs/dmsPatchDmsRepairorder.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsPatchDmsRepairorder(unifiedTo, {
    dmsRepairorder: {
      balanceAmount: 3193.86,
      completedAt: new Date("2026-11-13T20:16:23.222Z"),
      createdAt: new Date("2022-10-25T15:50:48.007Z"),
      currency: "USD",
      discountAmount: 0,
      estimateAmount: 3264,
      id: "71dc5a34-77d6-4d1c-bc8a-fe809f238bd9",
      jobs: [
        {
          actualHours: 3.6,
          cause: "Scheduled maintenance",
          complaint: "Due for service",
          correction: "Aufero cumque vicinus aptus assumenda quis aptus.",
          id: "992abbca-c196-488d-8068-64d879701f63",
          laborAmount: 681.6,
          labors: [
            {
              id: "dad6fb2a-0faf-4869-b6c8-2f33389f310e",
              payType: "WARRANTY",
              rateAmount: 213,
              soldHours: 3.2,
              technicianUserIds: [],
              totalAmount: 681.6,
            },
          ],
          name: "Customer concern",
          number: "A",
          parts: [],
          partsAmount: 0,
          payType: "WARRANTY",
          soldHours: 3.2,
          status: "COMPLETED",
          technicianUserIds: [],
          totalAmount: 681.6,
        },
        {
          actualHours: 3,
          cause: "Worn brake pads",
          complaint: "Vibration at highway speed",
          correction: "Somnus avaritia utroque vulnero ullam ancilla.",
          id: "d1818bdb-c03f-4e9e-ac74-7ed13188c99c",
          laborAmount: 446.4,
          labors: [
            {
              id: "96144e6b-246c-41b1-b75b-acb81b3c07d0",
              payType: "WARRANTY",
              rateAmount: 144,
              soldHours: 3.1,
              technicianUserIds: [],
              totalAmount: 446.4,
            },
          ],
          name: "Customer concern",
          number: "B",
          parts: [
            {
              id: "27b4c004-f677-4dba-b6e0-5f77ffffea69",
              payType: "WARRANTY",
              quantity: 4,
              quantityOrdered: 4,
              totalAmount: 890.44,
              unitPriceAmount: 222.61,
            },
            {
              id: "713484f8-ddf4-4e50-acd3-b1424219c2a2",
              payType: "WARRANTY",
              quantity: 2,
              quantityOrdered: 2,
              totalAmount: 216.18,
              unitPriceAmount: 108.09,
            },
          ],
          partsAmount: 1106.6200000000001,
          payType: "WARRANTY",
          soldHours: 3.1,
          status: "COMPLETED",
          technicianUserIds: [],
          totalAmount: 1553.02,
        },
        {
          actualHours: 1.5,
          cause: "Scheduled maintenance",
          complaint: "Noise when braking",
          correction: "Degero theca natus.",
          id: "d3217289-702e-46db-b304-a5db91d2fdad",
          laborAmount: 232.4,
          labors: [
            {
              id: "12055ea7-cb5f-4162-89d8-0771f1502631",
              payType: "CUSTOMER",
              rateAmount: 166,
              soldHours: 1.4,
              technicianUserIds: [],
              totalAmount: 232.4,
            },
          ],
          name: "Customer concern",
          number: "C",
          parts: [
            {
              id: "3df61b9e-dcd9-45b5-9b2d-2fde5a1dcf0d",
              payType: "CUSTOMER",
              quantity: 1,
              quantityOrdered: 1,
              totalAmount: 216.02,
              unitPriceAmount: 216.02,
            },
            {
              id: "598c6341-2b69-4d14-886d-51ff348f7f31",
              payType: "CUSTOMER",
              quantity: 2,
              quantityOrdered: 2,
              totalAmount: 358.16,
              unitPriceAmount: 179.08,
            },
          ],
          partsAmount: 574.1800000000001,
          payType: "CUSTOMER",
          soldHours: 1.4,
          status: "COMPLETED",
          technicianUserIds: [],
          totalAmount: 806.58,
        },
      ],
      laborAmount: 1360.4,
      metadata: [],
      miscAmount: 35,
      number: "143398",
      odometerIn: 7776,
      odometerOut: 7776,
      odometerUnit: "MILES",
      openedAt: new Date("2025-02-08T09:20:27.473Z"),
      partsAmount: 1680.8000000000002,
      payType: "WARRANTY",
      promisedAt: new Date("2025-02-09T17:20:27.473Z"),
      purchaseOrderNumber: "182743",
      status: "COMPLETED",
      subletAmount: 0,
      tagNumber: "758",
      taxAmount: 117.66,
      technicianUserIds: [],
      totalAmount: 3193.86,
      totals: [
        {
          discountAmount: 0,
          laborAmount: 232.4,
          partsAmount: 574.1800000000001,
          payType: "CUSTOMER",
          subletAmount: 0,
          totalAmount: 806.58,
        },
        {
          discountAmount: 0,
          laborAmount: 1128,
          partsAmount: 1106.6200000000001,
          payType: "WARRANTY",
          subletAmount: 0,
          totalAmount: 2234.62,
        },
      ],
      transportType: "LOANER",
      updatedAt: new Date("2025-11-28T17:09:52.408Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsPatchDmsRepairorder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchDmsRepairorderRequest](../../sdk/models/operations/patchdmsrepairorderrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsRepairorder](../../sdk/models/shared/dmsrepairorder.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateDmsRepairorder

Updates the DmsRepairorder identified by `id`. Provide the unified DmsRepairorder fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateDmsRepairorder" method="put" path="/dms/{connection_id}/repairorder/{id}" example="dms_repairorder" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.repairorder.updateDmsRepairorder({
    dmsRepairorder: {
      balanceAmount: 3193.86,
      completedAt: new Date("2026-11-13T20:16:23.222Z"),
      createdAt: new Date("2022-10-25T15:50:48.007Z"),
      currency: "USD",
      discountAmount: 0,
      estimateAmount: 3264,
      id: "71dc5a34-77d6-4d1c-bc8a-fe809f238bd9",
      jobs: [
        {
          actualHours: 3.6,
          cause: "Scheduled maintenance",
          complaint: "Due for service",
          correction: "Aufero cumque vicinus aptus assumenda quis aptus.",
          id: "992abbca-c196-488d-8068-64d879701f63",
          laborAmount: 681.6,
          labors: [
            {
              id: "dad6fb2a-0faf-4869-b6c8-2f33389f310e",
              payType: "WARRANTY",
              rateAmount: 213,
              soldHours: 3.2,
              technicianUserIds: [],
              totalAmount: 681.6,
            },
          ],
          name: "Customer concern",
          number: "A",
          parts: [],
          partsAmount: 0,
          payType: "WARRANTY",
          soldHours: 3.2,
          status: "COMPLETED",
          technicianUserIds: [],
          totalAmount: 681.6,
        },
        {
          actualHours: 3,
          cause: "Worn brake pads",
          complaint: "Vibration at highway speed",
          correction: "Somnus avaritia utroque vulnero ullam ancilla.",
          id: "d1818bdb-c03f-4e9e-ac74-7ed13188c99c",
          laborAmount: 446.4,
          labors: [
            {
              id: "96144e6b-246c-41b1-b75b-acb81b3c07d0",
              payType: "WARRANTY",
              rateAmount: 144,
              soldHours: 3.1,
              technicianUserIds: [],
              totalAmount: 446.4,
            },
          ],
          name: "Customer concern",
          number: "B",
          parts: [
            {
              id: "27b4c004-f677-4dba-b6e0-5f77ffffea69",
              payType: "WARRANTY",
              quantity: 4,
              quantityOrdered: 4,
              totalAmount: 890.44,
              unitPriceAmount: 222.61,
            },
            {
              id: "713484f8-ddf4-4e50-acd3-b1424219c2a2",
              payType: "WARRANTY",
              quantity: 2,
              quantityOrdered: 2,
              totalAmount: 216.18,
              unitPriceAmount: 108.09,
            },
          ],
          partsAmount: 1106.6200000000001,
          payType: "WARRANTY",
          soldHours: 3.1,
          status: "COMPLETED",
          technicianUserIds: [],
          totalAmount: 1553.02,
        },
        {
          actualHours: 1.5,
          cause: "Scheduled maintenance",
          complaint: "Noise when braking",
          correction: "Degero theca natus.",
          id: "d3217289-702e-46db-b304-a5db91d2fdad",
          laborAmount: 232.4,
          labors: [
            {
              id: "12055ea7-cb5f-4162-89d8-0771f1502631",
              payType: "CUSTOMER",
              rateAmount: 166,
              soldHours: 1.4,
              technicianUserIds: [],
              totalAmount: 232.4,
            },
          ],
          name: "Customer concern",
          number: "C",
          parts: [
            {
              id: "3df61b9e-dcd9-45b5-9b2d-2fde5a1dcf0d",
              payType: "CUSTOMER",
              quantity: 1,
              quantityOrdered: 1,
              totalAmount: 216.02,
              unitPriceAmount: 216.02,
            },
            {
              id: "598c6341-2b69-4d14-886d-51ff348f7f31",
              payType: "CUSTOMER",
              quantity: 2,
              quantityOrdered: 2,
              totalAmount: 358.16,
              unitPriceAmount: 179.08,
            },
          ],
          partsAmount: 574.1800000000001,
          payType: "CUSTOMER",
          soldHours: 1.4,
          status: "COMPLETED",
          technicianUserIds: [],
          totalAmount: 806.58,
        },
      ],
      laborAmount: 1360.4,
      metadata: [],
      miscAmount: 35,
      number: "143398",
      odometerIn: 7776,
      odometerOut: 7776,
      odometerUnit: "MILES",
      openedAt: new Date("2025-02-08T09:20:27.473Z"),
      partsAmount: 1680.8000000000002,
      payType: "WARRANTY",
      promisedAt: new Date("2025-02-09T17:20:27.473Z"),
      purchaseOrderNumber: "182743",
      status: "COMPLETED",
      subletAmount: 0,
      tagNumber: "758",
      taxAmount: 117.66,
      technicianUserIds: [],
      totalAmount: 3193.86,
      totals: [
        {
          discountAmount: 0,
          laborAmount: 232.4,
          partsAmount: 574.1800000000001,
          payType: "CUSTOMER",
          subletAmount: 0,
          totalAmount: 806.58,
        },
        {
          discountAmount: 0,
          laborAmount: 1128,
          partsAmount: 1106.6200000000001,
          payType: "WARRANTY",
          subletAmount: 0,
          totalAmount: 2234.62,
        },
      ],
      transportType: "LOANER",
      updatedAt: new Date("2025-11-28T17:09:52.408Z"),
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
import { dmsUpdateDmsRepairorder } from "@unified-api/typescript-sdk/funcs/dmsUpdateDmsRepairorder.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsUpdateDmsRepairorder(unifiedTo, {
    dmsRepairorder: {
      balanceAmount: 3193.86,
      completedAt: new Date("2026-11-13T20:16:23.222Z"),
      createdAt: new Date("2022-10-25T15:50:48.007Z"),
      currency: "USD",
      discountAmount: 0,
      estimateAmount: 3264,
      id: "71dc5a34-77d6-4d1c-bc8a-fe809f238bd9",
      jobs: [
        {
          actualHours: 3.6,
          cause: "Scheduled maintenance",
          complaint: "Due for service",
          correction: "Aufero cumque vicinus aptus assumenda quis aptus.",
          id: "992abbca-c196-488d-8068-64d879701f63",
          laborAmount: 681.6,
          labors: [
            {
              id: "dad6fb2a-0faf-4869-b6c8-2f33389f310e",
              payType: "WARRANTY",
              rateAmount: 213,
              soldHours: 3.2,
              technicianUserIds: [],
              totalAmount: 681.6,
            },
          ],
          name: "Customer concern",
          number: "A",
          parts: [],
          partsAmount: 0,
          payType: "WARRANTY",
          soldHours: 3.2,
          status: "COMPLETED",
          technicianUserIds: [],
          totalAmount: 681.6,
        },
        {
          actualHours: 3,
          cause: "Worn brake pads",
          complaint: "Vibration at highway speed",
          correction: "Somnus avaritia utroque vulnero ullam ancilla.",
          id: "d1818bdb-c03f-4e9e-ac74-7ed13188c99c",
          laborAmount: 446.4,
          labors: [
            {
              id: "96144e6b-246c-41b1-b75b-acb81b3c07d0",
              payType: "WARRANTY",
              rateAmount: 144,
              soldHours: 3.1,
              technicianUserIds: [],
              totalAmount: 446.4,
            },
          ],
          name: "Customer concern",
          number: "B",
          parts: [
            {
              id: "27b4c004-f677-4dba-b6e0-5f77ffffea69",
              payType: "WARRANTY",
              quantity: 4,
              quantityOrdered: 4,
              totalAmount: 890.44,
              unitPriceAmount: 222.61,
            },
            {
              id: "713484f8-ddf4-4e50-acd3-b1424219c2a2",
              payType: "WARRANTY",
              quantity: 2,
              quantityOrdered: 2,
              totalAmount: 216.18,
              unitPriceAmount: 108.09,
            },
          ],
          partsAmount: 1106.6200000000001,
          payType: "WARRANTY",
          soldHours: 3.1,
          status: "COMPLETED",
          technicianUserIds: [],
          totalAmount: 1553.02,
        },
        {
          actualHours: 1.5,
          cause: "Scheduled maintenance",
          complaint: "Noise when braking",
          correction: "Degero theca natus.",
          id: "d3217289-702e-46db-b304-a5db91d2fdad",
          laborAmount: 232.4,
          labors: [
            {
              id: "12055ea7-cb5f-4162-89d8-0771f1502631",
              payType: "CUSTOMER",
              rateAmount: 166,
              soldHours: 1.4,
              technicianUserIds: [],
              totalAmount: 232.4,
            },
          ],
          name: "Customer concern",
          number: "C",
          parts: [
            {
              id: "3df61b9e-dcd9-45b5-9b2d-2fde5a1dcf0d",
              payType: "CUSTOMER",
              quantity: 1,
              quantityOrdered: 1,
              totalAmount: 216.02,
              unitPriceAmount: 216.02,
            },
            {
              id: "598c6341-2b69-4d14-886d-51ff348f7f31",
              payType: "CUSTOMER",
              quantity: 2,
              quantityOrdered: 2,
              totalAmount: 358.16,
              unitPriceAmount: 179.08,
            },
          ],
          partsAmount: 574.1800000000001,
          payType: "CUSTOMER",
          soldHours: 1.4,
          status: "COMPLETED",
          technicianUserIds: [],
          totalAmount: 806.58,
        },
      ],
      laborAmount: 1360.4,
      metadata: [],
      miscAmount: 35,
      number: "143398",
      odometerIn: 7776,
      odometerOut: 7776,
      odometerUnit: "MILES",
      openedAt: new Date("2025-02-08T09:20:27.473Z"),
      partsAmount: 1680.8000000000002,
      payType: "WARRANTY",
      promisedAt: new Date("2025-02-09T17:20:27.473Z"),
      purchaseOrderNumber: "182743",
      status: "COMPLETED",
      subletAmount: 0,
      tagNumber: "758",
      taxAmount: 117.66,
      technicianUserIds: [],
      totalAmount: 3193.86,
      totals: [
        {
          discountAmount: 0,
          laborAmount: 232.4,
          partsAmount: 574.1800000000001,
          payType: "CUSTOMER",
          subletAmount: 0,
          totalAmount: 806.58,
        },
        {
          discountAmount: 0,
          laborAmount: 1128,
          partsAmount: 1106.6200000000001,
          payType: "WARRANTY",
          subletAmount: 0,
          totalAmount: 2234.62,
        },
      ],
      transportType: "LOANER",
      updatedAt: new Date("2025-11-28T17:09:52.408Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsUpdateDmsRepairorder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateDmsRepairorderRequest](../../sdk/models/operations/updatedmsrepairorderrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsRepairorder](../../sdk/models/shared/dmsrepairorder.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |