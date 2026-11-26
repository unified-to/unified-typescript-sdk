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
      completedAt: new Date("2026-11-12T20:55:15.520Z"),
      createdAt: new Date("2022-10-25T15:50:48.007Z"),
      currency: "USD",
      discountAmount: 0,
      estimateAmount: 3264,
      id: "08de3ec5-b19d-4a24-8353-0f1882a9b772",
      jobs: [
        {
          actualHours: 3.6,
          cause: "Scheduled maintenance",
          complaint: "Due for service",
          correction: "Aufero cumque vicinus aptus assumenda quis aptus.",
          id: "29dca99f-59a4-48a7-b853-25d0bad877f8",
          laborAmount: 681.6,
          labors: [
            {
              id: "21cc59ef-d6aa-4614-9c17-4e6ed2b08e09",
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
          id: "f550934b-8186-4902-8f83-960df02050d2",
          laborAmount: 446.4,
          labors: [
            {
              id: "94c4d5ca-1a09-4558-a7b2-d8a0276c7d8c",
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
              id: "d43fdd3b-8c4a-484a-bb0d-88f78d1dcb05",
              payType: "WARRANTY",
              quantity: 4,
              quantityOrdered: 4,
              totalAmount: 890.44,
              unitPriceAmount: 222.61,
            },
            {
              id: "06d885b9-ef9b-49c7-9fa8-d0f98f50dbac",
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
          id: "c7ca0d3f-f9aa-4913-83cd-40d3eb93dde9",
          laborAmount: 232.4,
          labors: [
            {
              id: "fff826c4-96f6-4787-af8e-01be661b953a",
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
              id: "6a21e485-d467-4bf8-be22-9e2636837c24",
              payType: "CUSTOMER",
              quantity: 1,
              quantityOrdered: 1,
              totalAmount: 216.02,
              unitPriceAmount: 216.02,
            },
            {
              id: "fa2e448e-4675-499b-ae70-12ac16de3faa",
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
      openedAt: new Date("2025-02-07T20:08:25.099Z"),
      partsAmount: 1680.8000000000002,
      payType: "WARRANTY",
      promisedAt: new Date("2025-02-09T04:08:25.099Z"),
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
      updatedAt: new Date("2025-11-27T23:20:10.461Z"),
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
      completedAt: new Date("2026-11-12T20:55:15.520Z"),
      createdAt: new Date("2022-10-25T15:50:48.007Z"),
      currency: "USD",
      discountAmount: 0,
      estimateAmount: 3264,
      id: "08de3ec5-b19d-4a24-8353-0f1882a9b772",
      jobs: [
        {
          actualHours: 3.6,
          cause: "Scheduled maintenance",
          complaint: "Due for service",
          correction: "Aufero cumque vicinus aptus assumenda quis aptus.",
          id: "29dca99f-59a4-48a7-b853-25d0bad877f8",
          laborAmount: 681.6,
          labors: [
            {
              id: "21cc59ef-d6aa-4614-9c17-4e6ed2b08e09",
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
          id: "f550934b-8186-4902-8f83-960df02050d2",
          laborAmount: 446.4,
          labors: [
            {
              id: "94c4d5ca-1a09-4558-a7b2-d8a0276c7d8c",
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
              id: "d43fdd3b-8c4a-484a-bb0d-88f78d1dcb05",
              payType: "WARRANTY",
              quantity: 4,
              quantityOrdered: 4,
              totalAmount: 890.44,
              unitPriceAmount: 222.61,
            },
            {
              id: "06d885b9-ef9b-49c7-9fa8-d0f98f50dbac",
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
          id: "c7ca0d3f-f9aa-4913-83cd-40d3eb93dde9",
          laborAmount: 232.4,
          labors: [
            {
              id: "fff826c4-96f6-4787-af8e-01be661b953a",
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
              id: "6a21e485-d467-4bf8-be22-9e2636837c24",
              payType: "CUSTOMER",
              quantity: 1,
              quantityOrdered: 1,
              totalAmount: 216.02,
              unitPriceAmount: 216.02,
            },
            {
              id: "fa2e448e-4675-499b-ae70-12ac16de3faa",
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
      openedAt: new Date("2025-02-07T20:08:25.099Z"),
      partsAmount: 1680.8000000000002,
      payType: "WARRANTY",
      promisedAt: new Date("2025-02-09T04:08:25.099Z"),
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
      updatedAt: new Date("2025-11-27T23:20:10.461Z"),
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
      completedAt: new Date("2026-11-12T20:55:15.583Z"),
      createdAt: new Date("2022-10-25T15:50:48.007Z"),
      currency: "USD",
      discountAmount: 0,
      estimateAmount: 3264,
      id: "99665264-7083-4077-9337-ac8faa500eef",
      jobs: [
        {
          actualHours: 3.6,
          cause: "Scheduled maintenance",
          complaint: "Due for service",
          correction: "Aufero cumque vicinus aptus assumenda quis aptus.",
          id: "521b94c2-276b-4a52-8045-8c0d220d6473",
          laborAmount: 681.6,
          labors: [
            {
              id: "21004c0c-b238-4bd6-892e-e2e0961c3cf8",
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
          id: "1837c3dc-a997-4586-a00e-23c780aacfb9",
          laborAmount: 446.4,
          labors: [
            {
              id: "e4c68431-9b8a-4418-9a42-40cb6c3b3dd3",
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
              id: "6037b91e-f49a-4d21-9ec0-c7267198ae48",
              payType: "WARRANTY",
              quantity: 4,
              quantityOrdered: 4,
              totalAmount: 890.44,
              unitPriceAmount: 222.61,
            },
            {
              id: "1dac944a-0c56-4bb5-b93e-d6afcb33dcbb",
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
          id: "f5a6d5b5-cdcb-43cb-9b73-2acf3aa3c490",
          laborAmount: 232.4,
          labors: [
            {
              id: "9c4fa9b1-ebde-4218-b57b-af706f6802a9",
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
              id: "63c5c488-eb69-4dd5-9710-a7701f48a063",
              payType: "CUSTOMER",
              quantity: 1,
              quantityOrdered: 1,
              totalAmount: 216.02,
              unitPriceAmount: 216.02,
            },
            {
              id: "a14df8d3-d537-4a44-8bcd-b821e9fcba97",
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
      openedAt: new Date("2025-02-07T20:08:25.134Z"),
      partsAmount: 1680.8000000000002,
      payType: "WARRANTY",
      promisedAt: new Date("2025-02-09T04:08:25.134Z"),
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
      updatedAt: new Date("2025-11-27T23:20:10.509Z"),
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
      completedAt: new Date("2026-11-12T20:55:15.583Z"),
      createdAt: new Date("2022-10-25T15:50:48.007Z"),
      currency: "USD",
      discountAmount: 0,
      estimateAmount: 3264,
      id: "99665264-7083-4077-9337-ac8faa500eef",
      jobs: [
        {
          actualHours: 3.6,
          cause: "Scheduled maintenance",
          complaint: "Due for service",
          correction: "Aufero cumque vicinus aptus assumenda quis aptus.",
          id: "521b94c2-276b-4a52-8045-8c0d220d6473",
          laborAmount: 681.6,
          labors: [
            {
              id: "21004c0c-b238-4bd6-892e-e2e0961c3cf8",
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
          id: "1837c3dc-a997-4586-a00e-23c780aacfb9",
          laborAmount: 446.4,
          labors: [
            {
              id: "e4c68431-9b8a-4418-9a42-40cb6c3b3dd3",
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
              id: "6037b91e-f49a-4d21-9ec0-c7267198ae48",
              payType: "WARRANTY",
              quantity: 4,
              quantityOrdered: 4,
              totalAmount: 890.44,
              unitPriceAmount: 222.61,
            },
            {
              id: "1dac944a-0c56-4bb5-b93e-d6afcb33dcbb",
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
          id: "f5a6d5b5-cdcb-43cb-9b73-2acf3aa3c490",
          laborAmount: 232.4,
          labors: [
            {
              id: "9c4fa9b1-ebde-4218-b57b-af706f6802a9",
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
              id: "63c5c488-eb69-4dd5-9710-a7701f48a063",
              payType: "CUSTOMER",
              quantity: 1,
              quantityOrdered: 1,
              totalAmount: 216.02,
              unitPriceAmount: 216.02,
            },
            {
              id: "a14df8d3-d537-4a44-8bcd-b821e9fcba97",
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
      openedAt: new Date("2025-02-07T20:08:25.134Z"),
      partsAmount: 1680.8000000000002,
      payType: "WARRANTY",
      promisedAt: new Date("2025-02-09T04:08:25.134Z"),
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
      updatedAt: new Date("2025-11-27T23:20:10.509Z"),
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
      completedAt: new Date("2026-11-12T20:55:15.583Z"),
      createdAt: new Date("2022-10-25T15:50:48.007Z"),
      currency: "USD",
      discountAmount: 0,
      estimateAmount: 3264,
      id: "99665264-7083-4077-9337-ac8faa500eef",
      jobs: [
        {
          actualHours: 3.6,
          cause: "Scheduled maintenance",
          complaint: "Due for service",
          correction: "Aufero cumque vicinus aptus assumenda quis aptus.",
          id: "521b94c2-276b-4a52-8045-8c0d220d6473",
          laborAmount: 681.6,
          labors: [
            {
              id: "21004c0c-b238-4bd6-892e-e2e0961c3cf8",
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
          id: "1837c3dc-a997-4586-a00e-23c780aacfb9",
          laborAmount: 446.4,
          labors: [
            {
              id: "e4c68431-9b8a-4418-9a42-40cb6c3b3dd3",
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
              id: "6037b91e-f49a-4d21-9ec0-c7267198ae48",
              payType: "WARRANTY",
              quantity: 4,
              quantityOrdered: 4,
              totalAmount: 890.44,
              unitPriceAmount: 222.61,
            },
            {
              id: "1dac944a-0c56-4bb5-b93e-d6afcb33dcbb",
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
          id: "f5a6d5b5-cdcb-43cb-9b73-2acf3aa3c490",
          laborAmount: 232.4,
          labors: [
            {
              id: "9c4fa9b1-ebde-4218-b57b-af706f6802a9",
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
              id: "63c5c488-eb69-4dd5-9710-a7701f48a063",
              payType: "CUSTOMER",
              quantity: 1,
              quantityOrdered: 1,
              totalAmount: 216.02,
              unitPriceAmount: 216.02,
            },
            {
              id: "a14df8d3-d537-4a44-8bcd-b821e9fcba97",
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
      openedAt: new Date("2025-02-07T20:08:25.134Z"),
      partsAmount: 1680.8000000000002,
      payType: "WARRANTY",
      promisedAt: new Date("2025-02-09T04:08:25.134Z"),
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
      updatedAt: new Date("2025-11-27T23:20:10.509Z"),
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
      completedAt: new Date("2026-11-12T20:55:15.583Z"),
      createdAt: new Date("2022-10-25T15:50:48.007Z"),
      currency: "USD",
      discountAmount: 0,
      estimateAmount: 3264,
      id: "99665264-7083-4077-9337-ac8faa500eef",
      jobs: [
        {
          actualHours: 3.6,
          cause: "Scheduled maintenance",
          complaint: "Due for service",
          correction: "Aufero cumque vicinus aptus assumenda quis aptus.",
          id: "521b94c2-276b-4a52-8045-8c0d220d6473",
          laborAmount: 681.6,
          labors: [
            {
              id: "21004c0c-b238-4bd6-892e-e2e0961c3cf8",
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
          id: "1837c3dc-a997-4586-a00e-23c780aacfb9",
          laborAmount: 446.4,
          labors: [
            {
              id: "e4c68431-9b8a-4418-9a42-40cb6c3b3dd3",
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
              id: "6037b91e-f49a-4d21-9ec0-c7267198ae48",
              payType: "WARRANTY",
              quantity: 4,
              quantityOrdered: 4,
              totalAmount: 890.44,
              unitPriceAmount: 222.61,
            },
            {
              id: "1dac944a-0c56-4bb5-b93e-d6afcb33dcbb",
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
          id: "f5a6d5b5-cdcb-43cb-9b73-2acf3aa3c490",
          laborAmount: 232.4,
          labors: [
            {
              id: "9c4fa9b1-ebde-4218-b57b-af706f6802a9",
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
              id: "63c5c488-eb69-4dd5-9710-a7701f48a063",
              payType: "CUSTOMER",
              quantity: 1,
              quantityOrdered: 1,
              totalAmount: 216.02,
              unitPriceAmount: 216.02,
            },
            {
              id: "a14df8d3-d537-4a44-8bcd-b821e9fcba97",
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
      openedAt: new Date("2025-02-07T20:08:25.134Z"),
      partsAmount: 1680.8000000000002,
      payType: "WARRANTY",
      promisedAt: new Date("2025-02-09T04:08:25.134Z"),
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
      updatedAt: new Date("2025-11-27T23:20:10.509Z"),
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