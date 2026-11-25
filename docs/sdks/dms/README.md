# Dms

## Overview

### Available Operations

* [createDmsAppointment](#createdmsappointment) - Create an appointment
* [createDmsOpcode](#createdmsopcode) - Create an opcode
* [createDmsPart](#createdmspart) - Create a part
* [createDmsPartsale](#createdmspartsale) - Create a partsale
* [createDmsRepairorder](#createdmsrepairorder) - Create a repairorder
* [createDmsVehicle](#createdmsvehicle) - Create a vehicle
* [createDmsVehiclesale](#createdmsvehiclesale) - Create a vehiclesale
* [getDmsAppointment](#getdmsappointment) - Retrieve an appointment
* [getDmsOpcode](#getdmsopcode) - Retrieve an opcode
* [getDmsPart](#getdmspart) - Retrieve a part
* [getDmsPartsale](#getdmspartsale) - Retrieve a partsale
* [getDmsRepairorder](#getdmsrepairorder) - Retrieve a repairorder
* [getDmsVehicle](#getdmsvehicle) - Retrieve a vehicle
* [getDmsVehiclesale](#getdmsvehiclesale) - Retrieve a vehiclesale
* [listDmsAppointments](#listdmsappointments) - List all appointments
* [listDmsOpcodes](#listdmsopcodes) - List all opcodes
* [listDmsParts](#listdmsparts) - List all parts
* [listDmsPartsales](#listdmspartsales) - List all partsales
* [listDmsRepairorders](#listdmsrepairorders) - List all repairorders
* [listDmsVehicles](#listdmsvehicles) - List all vehicles
* [listDmsVehiclesales](#listdmsvehiclesales) - List all vehiclesales
* [patchDmsAppointment](#patchdmsappointment) - Update an appointment
* [patchDmsOpcode](#patchdmsopcode) - Update an opcode
* [patchDmsPart](#patchdmspart) - Update a part
* [patchDmsPartsale](#patchdmspartsale) - Update a partsale
* [patchDmsRepairorder](#patchdmsrepairorder) - Update a repairorder
* [patchDmsVehicle](#patchdmsvehicle) - Update a vehicle
* [patchDmsVehiclesale](#patchdmsvehiclesale) - Update a vehiclesale
* [removeDmsAppointment](#removedmsappointment) - Remove an appointment
* [updateDmsAppointment](#updatedmsappointment) - Update an appointment
* [updateDmsOpcode](#updatedmsopcode) - Update an opcode
* [updateDmsPart](#updatedmspart) - Update a part
* [updateDmsPartsale](#updatedmspartsale) - Update a partsale
* [updateDmsRepairorder](#updatedmsrepairorder) - Update a repairorder
* [updateDmsVehicle](#updatedmsvehicle) - Update a vehicle
* [updateDmsVehiclesale](#updatedmsvehiclesale) - Update a vehiclesale

## createDmsAppointment

Creates a DmsAppointment. Provide the unified DmsAppointment fields in the request body; they are mapped to the provider's API. Returns the created DmsAppointment.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createDmsAppointment" method="post" path="/dms/{connection_id}/appointment" example="dms_appointment" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.dms.createDmsAppointment({
    dmsAppointment: {
      createdAt: new Date("2023-10-16T02:56:45.127Z"),
      endAt: new Date("2026-05-07T04:22:24.171Z"),
      id: "ad5c2edf-7471-4cb6-9773-599a69eb49a2",
      metadata: [],
      notes: "Soluta conitor timidus confero.",
      number: "A541909",
      services: [
        {
          id: "6e6d2540-4f8e-4b6f-9f46-5eb272c39c73",
          name: "Customer concern",
          payType: "WARRANTY",
          technicianUserIds: [],
        },
        {
          complaint: "Check engine light on",
          id: "1ef6093c-4f3c-4592-b595-a26a2c6535e7",
          name: "Customer concern",
          payType: "CUSTOMER",
          technicianUserIds: [],
        },
        {
          complaint: "Due for service",
          id: "cc356a44-59b6-4855-81f2-67754b2baf56",
          name: "Customer concern",
          payType: "CUSTOMER",
          technicianUserIds: [],
        },
      ],
      startAt: new Date("2026-05-06T21:22:24.171Z"),
      status: "CANCELLED",
      transportType: "LOANER",
      updatedAt: new Date("2025-04-06T03:39:42.601Z"),
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
import { dmsCreateDmsAppointment } from "@unified-api/typescript-sdk/funcs/dmsCreateDmsAppointment.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsCreateDmsAppointment(unifiedTo, {
    dmsAppointment: {
      createdAt: new Date("2023-10-16T02:56:45.127Z"),
      endAt: new Date("2026-05-07T04:22:24.171Z"),
      id: "ad5c2edf-7471-4cb6-9773-599a69eb49a2",
      metadata: [],
      notes: "Soluta conitor timidus confero.",
      number: "A541909",
      services: [
        {
          id: "6e6d2540-4f8e-4b6f-9f46-5eb272c39c73",
          name: "Customer concern",
          payType: "WARRANTY",
          technicianUserIds: [],
        },
        {
          complaint: "Check engine light on",
          id: "1ef6093c-4f3c-4592-b595-a26a2c6535e7",
          name: "Customer concern",
          payType: "CUSTOMER",
          technicianUserIds: [],
        },
        {
          complaint: "Due for service",
          id: "cc356a44-59b6-4855-81f2-67754b2baf56",
          name: "Customer concern",
          payType: "CUSTOMER",
          technicianUserIds: [],
        },
      ],
      startAt: new Date("2026-05-06T21:22:24.171Z"),
      status: "CANCELLED",
      transportType: "LOANER",
      updatedAt: new Date("2025-04-06T03:39:42.601Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsCreateDmsAppointment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateDmsAppointmentRequest](../../sdk/models/operations/createdmsappointmentrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsAppointment](../../sdk/models/shared/dmsappointment.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createDmsOpcode

Creates a DmsOpcode. Provide the unified DmsOpcode fields in the request body; they are mapped to the provider's API. Returns the created DmsOpcode.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createDmsOpcode" method="post" path="/dms/{connection_id}/opcode" example="dms_opcode" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.dms.createDmsOpcode({
    dmsOpcode: {
      category: "Electrical",
      code: "02AUS",
      createdAt: new Date("2021-01-12T19:03:17.545Z"),
      currency: "USD",
      description: "Oil and filter change",
      estimatedHours: 3.2,
      flatRateHours: 3.5,
      id: "4ec54aed-5daf-427e-a696-5cd04a9ed54e",
      isActive: true,
      laborRateAmount: 216,
      metadata: [],
      oemCode: "05604A3",
      parts: [],
      payType: "CUSTOMER",
      skillCode: "A",
      type: "LABOR",
      updatedAt: new Date("2021-11-03T12:05:05.411Z"),
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
import { dmsCreateDmsOpcode } from "@unified-api/typescript-sdk/funcs/dmsCreateDmsOpcode.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsCreateDmsOpcode(unifiedTo, {
    dmsOpcode: {
      category: "Electrical",
      code: "02AUS",
      createdAt: new Date("2021-01-12T19:03:17.545Z"),
      currency: "USD",
      description: "Oil and filter change",
      estimatedHours: 3.2,
      flatRateHours: 3.5,
      id: "4ec54aed-5daf-427e-a696-5cd04a9ed54e",
      isActive: true,
      laborRateAmount: 216,
      metadata: [],
      oemCode: "05604A3",
      parts: [],
      payType: "CUSTOMER",
      skillCode: "A",
      type: "LABOR",
      updatedAt: new Date("2021-11-03T12:05:05.411Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsCreateDmsOpcode failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateDmsOpcodeRequest](../../sdk/models/operations/createdmsopcoderequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsOpcode](../../sdk/models/shared/dmsopcode.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createDmsPart

Creates a DmsPart. Provide the unified DmsPart fields in the request body; they are mapped to the provider's API. Returns the created DmsPart.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createDmsPart" method="post" path="/dms/{connection_id}/part" example="dms_part" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.dms.createDmsPart({
    dmsPart: {
      binLocations: [
        "S18-6",
      ],
      category: "Ignition",
      costAmount: 25.26,
      createdAt: new Date("2020-07-02T08:18:03.858Z"),
      currency: "USD",
      description: "Cabin filter",
      id: "3946a982-fb8f-48d4-abf7-4f3f1a6110b1",
      lastSoldAt: new Date("2020-11-23T02:53:05.438Z"),
      listPriceAmount: 39.61,
      manufacturerCode: "TOY",
      maxStockQuantity: 21,
      metadata: [],
      minStockQuantity: 3,
      packQuantity: 1,
      partNumber: "73992-IM3FI",
      quantityAvailable: 13,
      quantityOnHand: 15,
      quantityOnOrder: 14,
      sourceCode: "30",
      tradePriceAmount: 29.05,
      updatedAt: new Date("2023-11-22T16:43:28.331Z"),
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
import { dmsCreateDmsPart } from "@unified-api/typescript-sdk/funcs/dmsCreateDmsPart.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsCreateDmsPart(unifiedTo, {
    dmsPart: {
      binLocations: [
        "S18-6",
      ],
      category: "Ignition",
      costAmount: 25.26,
      createdAt: new Date("2020-07-02T08:18:03.858Z"),
      currency: "USD",
      description: "Cabin filter",
      id: "3946a982-fb8f-48d4-abf7-4f3f1a6110b1",
      lastSoldAt: new Date("2020-11-23T02:53:05.438Z"),
      listPriceAmount: 39.61,
      manufacturerCode: "TOY",
      maxStockQuantity: 21,
      metadata: [],
      minStockQuantity: 3,
      packQuantity: 1,
      partNumber: "73992-IM3FI",
      quantityAvailable: 13,
      quantityOnHand: 15,
      quantityOnOrder: 14,
      sourceCode: "30",
      tradePriceAmount: 29.05,
      updatedAt: new Date("2023-11-22T16:43:28.331Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsCreateDmsPart failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateDmsPartRequest](../../sdk/models/operations/createdmspartrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsPart](../../sdk/models/shared/dmspart.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createDmsPartsale

Creates a DmsPartsale. Provide the unified DmsPartsale fields in the request body; they are mapped to the provider's API. Returns the created DmsPartsale.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createDmsPartsale" method="post" path="/dms/{connection_id}/partsale" example="dms_partsale" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.dms.createDmsPartsale({
    dmsPartsale: {
      costAmount: 0,
      createdAt: new Date("2023-05-22T03:39:30.335Z"),
      currency: "USD",
      discountAmount: 0,
      freightAmount: 0,
      id: "bf384265-6442-4ca6-ba6f-f87f73463e0b",
      lines: [
        {
          id: "1de62517-9133-4346-8e67-992cc2b2d8b4",
          payType: "CUSTOMER",
          quantity: 5,
          quantityOrdered: 5,
          totalAmount: 491.45,
          unitPriceAmount: 98.29,
        },
        {
          id: "81f3ad45-ab01-4c01-ae54-ef8cfce09fe6",
          payType: "CUSTOMER",
          quantity: 2,
          quantityOrdered: 2,
          totalAmount: 240.9,
          unitPriceAmount: 120.45,
        },
        {
          id: "d54a830c-c03c-471e-9995-dc655767894c",
          payType: "CUSTOMER",
          quantity: 3,
          quantityOrdered: 3,
          totalAmount: 249.54,
          unitPriceAmount: 83.18,
        },
      ],
      metadata: [],
      number: "P292867",
      payType: "CUSTOMER",
      status: "VOIDED",
      subtotalAmount: 981.89,
      taxAmount: 68.73,
      totalAmount: 1050.62,
      type: "SALE",
      updatedAt: new Date("2026-04-17T14:50:23.073Z"),
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
import { dmsCreateDmsPartsale } from "@unified-api/typescript-sdk/funcs/dmsCreateDmsPartsale.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsCreateDmsPartsale(unifiedTo, {
    dmsPartsale: {
      costAmount: 0,
      createdAt: new Date("2023-05-22T03:39:30.335Z"),
      currency: "USD",
      discountAmount: 0,
      freightAmount: 0,
      id: "bf384265-6442-4ca6-ba6f-f87f73463e0b",
      lines: [
        {
          id: "1de62517-9133-4346-8e67-992cc2b2d8b4",
          payType: "CUSTOMER",
          quantity: 5,
          quantityOrdered: 5,
          totalAmount: 491.45,
          unitPriceAmount: 98.29,
        },
        {
          id: "81f3ad45-ab01-4c01-ae54-ef8cfce09fe6",
          payType: "CUSTOMER",
          quantity: 2,
          quantityOrdered: 2,
          totalAmount: 240.9,
          unitPriceAmount: 120.45,
        },
        {
          id: "d54a830c-c03c-471e-9995-dc655767894c",
          payType: "CUSTOMER",
          quantity: 3,
          quantityOrdered: 3,
          totalAmount: 249.54,
          unitPriceAmount: 83.18,
        },
      ],
      metadata: [],
      number: "P292867",
      payType: "CUSTOMER",
      status: "VOIDED",
      subtotalAmount: 981.89,
      taxAmount: 68.73,
      totalAmount: 1050.62,
      type: "SALE",
      updatedAt: new Date("2026-04-17T14:50:23.073Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsCreateDmsPartsale failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateDmsPartsaleRequest](../../sdk/models/operations/createdmspartsalerequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsPartsale](../../sdk/models/shared/dmspartsale.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

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
  const result = await unifiedTo.dms.createDmsRepairorder({
    dmsRepairorder: {
      balanceAmount: 3193.86,
      completedAt: new Date("2026-11-12T17:50:17.559Z"),
      createdAt: new Date("2022-10-25T15:50:48.007Z"),
      currency: "USD",
      discountAmount: 0,
      estimateAmount: 3264,
      id: "adc0e7a8-10ec-4bba-913a-7853932a9925",
      jobs: [
        {
          actualHours: 3.6,
          cause: "Scheduled maintenance",
          complaint: "Due for service",
          correction: "Aufero cumque vicinus aptus assumenda quis aptus.",
          id: "d56e76d0-4208-4c5b-ae0a-51271b764e58",
          laborAmount: 681.6,
          labors: [
            {
              id: "5590e328-c126-4a89-811a-a2ac7ea8978f",
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
          id: "2169814b-751b-4f14-8226-1363871d5101",
          laborAmount: 446.4,
          labors: [
            {
              id: "0954f951-c0fb-4e86-a2e7-bb88a956e3eb",
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
              id: "77539137-2ac5-47fe-a05f-1fb5bfd7cd8d",
              payType: "WARRANTY",
              quantity: 4,
              quantityOrdered: 4,
              totalAmount: 890.44,
              unitPriceAmount: 222.61,
            },
            {
              id: "d95fde76-7ac7-4acf-9f28-1ae7413cdd30",
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
          id: "725489db-c992-4d99-8c3d-0a4ff3246324",
          laborAmount: 232.4,
          labors: [
            {
              id: "d5408672-ba07-4e73-88f4-93ebc4749ac9",
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
              id: "b7f99464-8744-4dae-9f6b-8e073273e222",
              payType: "CUSTOMER",
              quantity: 1,
              quantityOrdered: 1,
              totalAmount: 216.02,
              unitPriceAmount: 216.02,
            },
            {
              id: "5605791c-d4b8-434e-994e-dcd7262208e8",
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
      openedAt: new Date("2025-02-07T18:23:51.566Z"),
      partsAmount: 1680.8000000000002,
      payType: "WARRANTY",
      promisedAt: new Date("2025-02-09T02:23:51.566Z"),
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
      updatedAt: new Date("2025-11-27T20:58:57.661Z"),
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
      completedAt: new Date("2026-11-12T17:50:17.559Z"),
      createdAt: new Date("2022-10-25T15:50:48.007Z"),
      currency: "USD",
      discountAmount: 0,
      estimateAmount: 3264,
      id: "adc0e7a8-10ec-4bba-913a-7853932a9925",
      jobs: [
        {
          actualHours: 3.6,
          cause: "Scheduled maintenance",
          complaint: "Due for service",
          correction: "Aufero cumque vicinus aptus assumenda quis aptus.",
          id: "d56e76d0-4208-4c5b-ae0a-51271b764e58",
          laborAmount: 681.6,
          labors: [
            {
              id: "5590e328-c126-4a89-811a-a2ac7ea8978f",
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
          id: "2169814b-751b-4f14-8226-1363871d5101",
          laborAmount: 446.4,
          labors: [
            {
              id: "0954f951-c0fb-4e86-a2e7-bb88a956e3eb",
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
              id: "77539137-2ac5-47fe-a05f-1fb5bfd7cd8d",
              payType: "WARRANTY",
              quantity: 4,
              quantityOrdered: 4,
              totalAmount: 890.44,
              unitPriceAmount: 222.61,
            },
            {
              id: "d95fde76-7ac7-4acf-9f28-1ae7413cdd30",
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
          id: "725489db-c992-4d99-8c3d-0a4ff3246324",
          laborAmount: 232.4,
          labors: [
            {
              id: "d5408672-ba07-4e73-88f4-93ebc4749ac9",
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
              id: "b7f99464-8744-4dae-9f6b-8e073273e222",
              payType: "CUSTOMER",
              quantity: 1,
              quantityOrdered: 1,
              totalAmount: 216.02,
              unitPriceAmount: 216.02,
            },
            {
              id: "5605791c-d4b8-434e-994e-dcd7262208e8",
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
      openedAt: new Date("2025-02-07T18:23:51.566Z"),
      partsAmount: 1680.8000000000002,
      payType: "WARRANTY",
      promisedAt: new Date("2025-02-09T02:23:51.566Z"),
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
      updatedAt: new Date("2025-11-27T20:58:57.661Z"),
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

## createDmsVehicle

Creates a DmsVehicle. Provide the unified DmsVehicle fields in the request body; they are mapped to the provider's API. Returns the created DmsVehicle.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createDmsVehicle" method="post" path="/dms/{connection_id}/vehicle" example="dms_vehicle" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.dms.createDmsVehicle({
    dmsVehicle: {
      bodyStyle: "Pickup",
      condition: "NEW",
      costAmount: 26498,
      createdAt: new Date("2021-02-03T08:01:58.559Z"),
      currency: "USD",
      description: "2023 Citroën Silverado",
      exteriorColor: "lavender",
      fuelType: "ELECTRIC",
      id: "1553a44f-1f12-47c4-bb07-fb2d039acf68",
      imageUrls: [
        "https://picsum.photos/seed/tOUr5K/1358/1877",
      ],
      interiorColor: "Black",
      internetPriceAmount: 29526,
      isActive: true,
      isCertified: false,
      isInventory: true,
      isPublished: false,
      make: "Citroën",
      metadata: [],
      model: "Silverado",
      modelCode: "PMU8KI",
      msrpAmount: 33100,
      odometer: 1,
      odometerUnit: "MILES",
      options: [
        {
          code: "SXE",
          costAmount: 250,
          description: "Tow package",
          priceAmount: 1400,
          type: "DEALER",
        },
        {
          code: "458",
          costAmount: 700,
          description: "Tow package",
          priceAmount: 600,
          type: "DEALER",
        },
      ],
      priceAmount: 29926,
      receivedAt: new Date("2021-02-03T08:01:58.559Z"),
      status: "OTHER",
      stockNumber: "N24959",
      transmission: "Manual",
      trim: "Base",
      type: "SUV",
      updatedAt: new Date("2023-11-03T01:01:02.943Z"),
      vin: "C29ZDU474DDR70955",
      warrantyExpiresAt: new Date("2022-03-28T09:10:09.889Z"),
      year: 2023,
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
import { dmsCreateDmsVehicle } from "@unified-api/typescript-sdk/funcs/dmsCreateDmsVehicle.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsCreateDmsVehicle(unifiedTo, {
    dmsVehicle: {
      bodyStyle: "Pickup",
      condition: "NEW",
      costAmount: 26498,
      createdAt: new Date("2021-02-03T08:01:58.559Z"),
      currency: "USD",
      description: "2023 Citroën Silverado",
      exteriorColor: "lavender",
      fuelType: "ELECTRIC",
      id: "1553a44f-1f12-47c4-bb07-fb2d039acf68",
      imageUrls: [
        "https://picsum.photos/seed/tOUr5K/1358/1877",
      ],
      interiorColor: "Black",
      internetPriceAmount: 29526,
      isActive: true,
      isCertified: false,
      isInventory: true,
      isPublished: false,
      make: "Citroën",
      metadata: [],
      model: "Silverado",
      modelCode: "PMU8KI",
      msrpAmount: 33100,
      odometer: 1,
      odometerUnit: "MILES",
      options: [
        {
          code: "SXE",
          costAmount: 250,
          description: "Tow package",
          priceAmount: 1400,
          type: "DEALER",
        },
        {
          code: "458",
          costAmount: 700,
          description: "Tow package",
          priceAmount: 600,
          type: "DEALER",
        },
      ],
      priceAmount: 29926,
      receivedAt: new Date("2021-02-03T08:01:58.559Z"),
      status: "OTHER",
      stockNumber: "N24959",
      transmission: "Manual",
      trim: "Base",
      type: "SUV",
      updatedAt: new Date("2023-11-03T01:01:02.943Z"),
      vin: "C29ZDU474DDR70955",
      warrantyExpiresAt: new Date("2022-03-28T09:10:09.889Z"),
      year: 2023,
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsCreateDmsVehicle failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateDmsVehicleRequest](../../sdk/models/operations/createdmsvehiclerequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsVehicle](../../sdk/models/shared/dmsvehicle.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createDmsVehiclesale

Creates a DmsVehiclesale. Provide the unified DmsVehiclesale fields in the request body; they are mapped to the provider's API. Returns the created DmsVehiclesale.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createDmsVehiclesale" method="post" path="/dms/{connection_id}/vehiclesale" example="dms_vehiclesale" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.dms.createDmsVehiclesale({
    dmsVehiclesale: {
      backGrossAmount: 4565,
      createdAt: new Date("2020-04-02T08:14:56.150Z"),
      currency: "USD",
      downPaymentAmount: 6700,
      fees: [
        {
          costAmount: 0,
          isCapitalized: true,
          name: "Documentation fee",
          priceAmount: 499,
        },
        {
          isCapitalized: false,
          name: "Title and registration",
          priceAmount: 392,
        },
      ],
      finance: {
        financedAmount: 0,
        firstPaymentAt: new Date("2022-08-16T01:57:17.084Z"),
        interestRate: 6.68,
        lenderName: "Mueller, Yundt and Murray Financial",
        paymentAmount: 339,
        paymentFrequency: "MONTHLY",
        termMonths: 72,
      },
      financeType: "FINANCE",
      id: "b27d8691-24f7-42b1-b647-5c4a2568e7bd",
      metadata: [],
      number: "D84591",
      products: [
        {
          contractNumber: "B7JN10GVB7",
          costAmount: 1320,
          name: "Tire & Wheel",
          priceAmount: 3300,
          provider: "Renner and Sons",
          termMonths: 60,
          type: "PROTECTION",
        },
        {
          contractNumber: "VIZU7K3VRU",
          costAmount: 1115,
          deductibleAmount: 100,
          name: "Platinum Vehicle Service Contract",
          priceAmount: 3700,
          provider: "Frami, Wisozk and Gleichner",
          termMonths: 72,
          type: "SERVICE_CONTRACT",
        },
      ],
      rebateAmount: 500,
      soldAt: new Date("2022-08-14T10:41:42.797Z"),
      source: "Website",
      status: "SOLD",
      taxAmount: 0,
      taxes: [
        {
          name: "State sales tax",
          rate: 8.25,
          totalAmount: 0,
        },
      ],
      totalAmount: 7891,
      tradeIns: [],
      type: "RETAIL",
      updatedAt: new Date("2025-04-16T01:18:15.501Z"),
      vehicles: [],
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
import { dmsCreateDmsVehiclesale } from "@unified-api/typescript-sdk/funcs/dmsCreateDmsVehiclesale.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsCreateDmsVehiclesale(unifiedTo, {
    dmsVehiclesale: {
      backGrossAmount: 4565,
      createdAt: new Date("2020-04-02T08:14:56.150Z"),
      currency: "USD",
      downPaymentAmount: 6700,
      fees: [
        {
          costAmount: 0,
          isCapitalized: true,
          name: "Documentation fee",
          priceAmount: 499,
        },
        {
          isCapitalized: false,
          name: "Title and registration",
          priceAmount: 392,
        },
      ],
      finance: {
        financedAmount: 0,
        firstPaymentAt: new Date("2022-08-16T01:57:17.084Z"),
        interestRate: 6.68,
        lenderName: "Mueller, Yundt and Murray Financial",
        paymentAmount: 339,
        paymentFrequency: "MONTHLY",
        termMonths: 72,
      },
      financeType: "FINANCE",
      id: "b27d8691-24f7-42b1-b647-5c4a2568e7bd",
      metadata: [],
      number: "D84591",
      products: [
        {
          contractNumber: "B7JN10GVB7",
          costAmount: 1320,
          name: "Tire & Wheel",
          priceAmount: 3300,
          provider: "Renner and Sons",
          termMonths: 60,
          type: "PROTECTION",
        },
        {
          contractNumber: "VIZU7K3VRU",
          costAmount: 1115,
          deductibleAmount: 100,
          name: "Platinum Vehicle Service Contract",
          priceAmount: 3700,
          provider: "Frami, Wisozk and Gleichner",
          termMonths: 72,
          type: "SERVICE_CONTRACT",
        },
      ],
      rebateAmount: 500,
      soldAt: new Date("2022-08-14T10:41:42.797Z"),
      source: "Website",
      status: "SOLD",
      taxAmount: 0,
      taxes: [
        {
          name: "State sales tax",
          rate: 8.25,
          totalAmount: 0,
        },
      ],
      totalAmount: 7891,
      tradeIns: [],
      type: "RETAIL",
      updatedAt: new Date("2025-04-16T01:18:15.501Z"),
      vehicles: [],
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsCreateDmsVehiclesale failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateDmsVehiclesaleRequest](../../sdk/models/operations/createdmsvehiclesalerequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsVehiclesale](../../sdk/models/shared/dmsvehiclesale.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getDmsAppointment

Retrieves a single DmsAppointment by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getDmsAppointment" method="get" path="/dms/{connection_id}/appointment/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.dms.getDmsAppointment({
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
import { dmsGetDmsAppointment } from "@unified-api/typescript-sdk/funcs/dmsGetDmsAppointment.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsGetDmsAppointment(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsGetDmsAppointment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetDmsAppointmentRequest](../../sdk/models/operations/getdmsappointmentrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsAppointment](../../sdk/models/shared/dmsappointment.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getDmsOpcode

Retrieves a single DmsOpcode by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getDmsOpcode" method="get" path="/dms/{connection_id}/opcode/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.dms.getDmsOpcode({
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
import { dmsGetDmsOpcode } from "@unified-api/typescript-sdk/funcs/dmsGetDmsOpcode.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsGetDmsOpcode(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsGetDmsOpcode failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetDmsOpcodeRequest](../../sdk/models/operations/getdmsopcoderequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsOpcode](../../sdk/models/shared/dmsopcode.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getDmsPart

Retrieves a single DmsPart by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getDmsPart" method="get" path="/dms/{connection_id}/part/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.dms.getDmsPart({
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
import { dmsGetDmsPart } from "@unified-api/typescript-sdk/funcs/dmsGetDmsPart.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsGetDmsPart(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsGetDmsPart failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetDmsPartRequest](../../sdk/models/operations/getdmspartrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsPart](../../sdk/models/shared/dmspart.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getDmsPartsale

Retrieves a single DmsPartsale by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getDmsPartsale" method="get" path="/dms/{connection_id}/partsale/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.dms.getDmsPartsale({
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
import { dmsGetDmsPartsale } from "@unified-api/typescript-sdk/funcs/dmsGetDmsPartsale.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsGetDmsPartsale(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsGetDmsPartsale failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetDmsPartsaleRequest](../../sdk/models/operations/getdmspartsalerequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsPartsale](../../sdk/models/shared/dmspartsale.md)\>**

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
  const result = await unifiedTo.dms.getDmsRepairorder({
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

## getDmsVehicle

Retrieves a single DmsVehicle by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getDmsVehicle" method="get" path="/dms/{connection_id}/vehicle/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.dms.getDmsVehicle({
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
import { dmsGetDmsVehicle } from "@unified-api/typescript-sdk/funcs/dmsGetDmsVehicle.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsGetDmsVehicle(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsGetDmsVehicle failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetDmsVehicleRequest](../../sdk/models/operations/getdmsvehiclerequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsVehicle](../../sdk/models/shared/dmsvehicle.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getDmsVehiclesale

Retrieves a single DmsVehiclesale by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getDmsVehiclesale" method="get" path="/dms/{connection_id}/vehiclesale/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.dms.getDmsVehiclesale({
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
import { dmsGetDmsVehiclesale } from "@unified-api/typescript-sdk/funcs/dmsGetDmsVehiclesale.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsGetDmsVehiclesale(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsGetDmsVehiclesale failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetDmsVehiclesaleRequest](../../sdk/models/operations/getdmsvehiclesalerequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsVehiclesale](../../sdk/models/shared/dmsvehiclesale.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listDmsAppointments

Returns a list of DmsAppointments. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listDmsAppointments" method="get" path="/dms/{connection_id}/appointment" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.dms.listDmsAppointments({
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
import { dmsListDmsAppointments } from "@unified-api/typescript-sdk/funcs/dmsListDmsAppointments.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsListDmsAppointments(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsListDmsAppointments failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListDmsAppointmentsRequest](../../sdk/models/operations/listdmsappointmentsrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsAppointment[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listDmsOpcodes

Returns a list of DmsOpcodes. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listDmsOpcodes" method="get" path="/dms/{connection_id}/opcode" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.dms.listDmsOpcodes({
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
import { dmsListDmsOpcodes } from "@unified-api/typescript-sdk/funcs/dmsListDmsOpcodes.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsListDmsOpcodes(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsListDmsOpcodes failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListDmsOpcodesRequest](../../sdk/models/operations/listdmsopcodesrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsOpcode[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listDmsParts

Returns a list of DmsParts. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listDmsParts" method="get" path="/dms/{connection_id}/part" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.dms.listDmsParts({
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
import { dmsListDmsParts } from "@unified-api/typescript-sdk/funcs/dmsListDmsParts.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsListDmsParts(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsListDmsParts failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListDmsPartsRequest](../../sdk/models/operations/listdmspartsrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsPart[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listDmsPartsales

Returns a list of DmsPartsales. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listDmsPartsales" method="get" path="/dms/{connection_id}/partsale" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.dms.listDmsPartsales({
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
import { dmsListDmsPartsales } from "@unified-api/typescript-sdk/funcs/dmsListDmsPartsales.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsListDmsPartsales(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsListDmsPartsales failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListDmsPartsalesRequest](../../sdk/models/operations/listdmspartsalesrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsPartsale[]](../../models/.md)\>**

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
  const result = await unifiedTo.dms.listDmsRepairorders({
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

## listDmsVehicles

Returns a list of DmsVehicles. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listDmsVehicles" method="get" path="/dms/{connection_id}/vehicle" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.dms.listDmsVehicles({
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
import { dmsListDmsVehicles } from "@unified-api/typescript-sdk/funcs/dmsListDmsVehicles.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsListDmsVehicles(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsListDmsVehicles failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListDmsVehiclesRequest](../../sdk/models/operations/listdmsvehiclesrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsVehicle[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listDmsVehiclesales

Returns a list of DmsVehiclesales. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listDmsVehiclesales" method="get" path="/dms/{connection_id}/vehiclesale" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.dms.listDmsVehiclesales({
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
import { dmsListDmsVehiclesales } from "@unified-api/typescript-sdk/funcs/dmsListDmsVehiclesales.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsListDmsVehiclesales(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsListDmsVehiclesales failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListDmsVehiclesalesRequest](../../sdk/models/operations/listdmsvehiclesalesrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsVehiclesale[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchDmsAppointment

Updates the DmsAppointment identified by `id`. Provide the unified DmsAppointment fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchDmsAppointment" method="patch" path="/dms/{connection_id}/appointment/{id}" example="dms_appointment" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.dms.patchDmsAppointment({
    dmsAppointment: {
      createdAt: new Date("2023-10-16T02:56:45.127Z"),
      endAt: new Date("2026-05-07T04:22:24.187Z"),
      id: "94faf89d-4274-46ae-9a97-d3499f143ae5",
      metadata: [],
      notes: "Soluta conitor timidus confero.",
      number: "A541909",
      services: [
        {
          id: "a88fa9e8-8218-4ad9-b3e1-358bd02e06de",
          name: "Customer concern",
          payType: "WARRANTY",
          technicianUserIds: [],
        },
        {
          complaint: "Check engine light on",
          id: "28da2d95-0e44-4632-afb2-36967c88ffbe",
          name: "Customer concern",
          payType: "CUSTOMER",
          technicianUserIds: [],
        },
        {
          complaint: "Due for service",
          id: "de74802c-ffae-46b0-8307-b665617754af",
          name: "Customer concern",
          payType: "CUSTOMER",
          technicianUserIds: [],
        },
      ],
      startAt: new Date("2026-05-06T21:22:24.187Z"),
      status: "CANCELLED",
      transportType: "LOANER",
      updatedAt: new Date("2025-04-06T03:39:42.610Z"),
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
import { dmsPatchDmsAppointment } from "@unified-api/typescript-sdk/funcs/dmsPatchDmsAppointment.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsPatchDmsAppointment(unifiedTo, {
    dmsAppointment: {
      createdAt: new Date("2023-10-16T02:56:45.127Z"),
      endAt: new Date("2026-05-07T04:22:24.187Z"),
      id: "94faf89d-4274-46ae-9a97-d3499f143ae5",
      metadata: [],
      notes: "Soluta conitor timidus confero.",
      number: "A541909",
      services: [
        {
          id: "a88fa9e8-8218-4ad9-b3e1-358bd02e06de",
          name: "Customer concern",
          payType: "WARRANTY",
          technicianUserIds: [],
        },
        {
          complaint: "Check engine light on",
          id: "28da2d95-0e44-4632-afb2-36967c88ffbe",
          name: "Customer concern",
          payType: "CUSTOMER",
          technicianUserIds: [],
        },
        {
          complaint: "Due for service",
          id: "de74802c-ffae-46b0-8307-b665617754af",
          name: "Customer concern",
          payType: "CUSTOMER",
          technicianUserIds: [],
        },
      ],
      startAt: new Date("2026-05-06T21:22:24.187Z"),
      status: "CANCELLED",
      transportType: "LOANER",
      updatedAt: new Date("2025-04-06T03:39:42.610Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsPatchDmsAppointment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchDmsAppointmentRequest](../../sdk/models/operations/patchdmsappointmentrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsAppointment](../../sdk/models/shared/dmsappointment.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchDmsOpcode

Updates the DmsOpcode identified by `id`. Provide the unified DmsOpcode fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchDmsOpcode" method="patch" path="/dms/{connection_id}/opcode/{id}" example="dms_opcode" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.dms.patchDmsOpcode({
    dmsOpcode: {
      category: "Electrical",
      code: "02AUS",
      createdAt: new Date("2021-01-12T19:03:17.545Z"),
      currency: "USD",
      description: "Oil and filter change",
      estimatedHours: 3.2,
      flatRateHours: 3.5,
      id: "db773125-d95f-4a72-a2a6-86aed6ef34a9",
      isActive: true,
      laborRateAmount: 216,
      metadata: [],
      oemCode: "05604A3",
      parts: [],
      payType: "CUSTOMER",
      skillCode: "A",
      type: "LABOR",
      updatedAt: new Date("2021-11-03T12:05:05.413Z"),
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
import { dmsPatchDmsOpcode } from "@unified-api/typescript-sdk/funcs/dmsPatchDmsOpcode.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsPatchDmsOpcode(unifiedTo, {
    dmsOpcode: {
      category: "Electrical",
      code: "02AUS",
      createdAt: new Date("2021-01-12T19:03:17.545Z"),
      currency: "USD",
      description: "Oil and filter change",
      estimatedHours: 3.2,
      flatRateHours: 3.5,
      id: "db773125-d95f-4a72-a2a6-86aed6ef34a9",
      isActive: true,
      laborRateAmount: 216,
      metadata: [],
      oemCode: "05604A3",
      parts: [],
      payType: "CUSTOMER",
      skillCode: "A",
      type: "LABOR",
      updatedAt: new Date("2021-11-03T12:05:05.413Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsPatchDmsOpcode failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchDmsOpcodeRequest](../../sdk/models/operations/patchdmsopcoderequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsOpcode](../../sdk/models/shared/dmsopcode.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchDmsPart

Updates the DmsPart identified by `id`. Provide the unified DmsPart fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchDmsPart" method="patch" path="/dms/{connection_id}/part/{id}" example="dms_part" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.dms.patchDmsPart({
    dmsPart: {
      binLocations: [
        "S18-6",
      ],
      category: "Ignition",
      costAmount: 25.26,
      createdAt: new Date("2020-07-02T08:18:03.858Z"),
      currency: "USD",
      description: "Cabin filter",
      id: "0bc25bd2-8392-4d0a-8893-ac45a6536697",
      lastSoldAt: new Date("2020-11-23T02:53:05.439Z"),
      listPriceAmount: 39.61,
      manufacturerCode: "TOY",
      maxStockQuantity: 21,
      metadata: [],
      minStockQuantity: 3,
      packQuantity: 1,
      partNumber: "73992-IM3FI",
      quantityAvailable: 13,
      quantityOnHand: 15,
      quantityOnOrder: 14,
      sourceCode: "30",
      tradePriceAmount: 29.05,
      updatedAt: new Date("2023-11-22T16:43:28.339Z"),
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
import { dmsPatchDmsPart } from "@unified-api/typescript-sdk/funcs/dmsPatchDmsPart.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsPatchDmsPart(unifiedTo, {
    dmsPart: {
      binLocations: [
        "S18-6",
      ],
      category: "Ignition",
      costAmount: 25.26,
      createdAt: new Date("2020-07-02T08:18:03.858Z"),
      currency: "USD",
      description: "Cabin filter",
      id: "0bc25bd2-8392-4d0a-8893-ac45a6536697",
      lastSoldAt: new Date("2020-11-23T02:53:05.439Z"),
      listPriceAmount: 39.61,
      manufacturerCode: "TOY",
      maxStockQuantity: 21,
      metadata: [],
      minStockQuantity: 3,
      packQuantity: 1,
      partNumber: "73992-IM3FI",
      quantityAvailable: 13,
      quantityOnHand: 15,
      quantityOnOrder: 14,
      sourceCode: "30",
      tradePriceAmount: 29.05,
      updatedAt: new Date("2023-11-22T16:43:28.339Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsPatchDmsPart failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchDmsPartRequest](../../sdk/models/operations/patchdmspartrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsPart](../../sdk/models/shared/dmspart.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchDmsPartsale

Updates the DmsPartsale identified by `id`. Provide the unified DmsPartsale fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchDmsPartsale" method="patch" path="/dms/{connection_id}/partsale/{id}" example="dms_partsale" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.dms.patchDmsPartsale({
    dmsPartsale: {
      costAmount: 0,
      createdAt: new Date("2023-05-22T03:39:30.335Z"),
      currency: "USD",
      discountAmount: 0,
      freightAmount: 0,
      id: "4b1c25cb-28f3-4b1c-bea1-6d0ea70fc3a2",
      lines: [
        {
          id: "29a564fa-e384-4b74-861a-bbbc720b81fe",
          payType: "CUSTOMER",
          quantity: 5,
          quantityOrdered: 5,
          totalAmount: 491.45,
          unitPriceAmount: 98.29,
        },
        {
          id: "1510a9b5-b11c-451e-847d-d599d41a213f",
          payType: "CUSTOMER",
          quantity: 2,
          quantityOrdered: 2,
          totalAmount: 240.9,
          unitPriceAmount: 120.45,
        },
        {
          id: "f975fc4c-7207-4616-8a68-0c5a5bf59f95",
          payType: "CUSTOMER",
          quantity: 3,
          quantityOrdered: 3,
          totalAmount: 249.54,
          unitPriceAmount: 83.18,
        },
      ],
      metadata: [],
      number: "P292867",
      payType: "CUSTOMER",
      status: "VOIDED",
      subtotalAmount: 981.89,
      taxAmount: 68.73,
      totalAmount: 1050.62,
      type: "SALE",
      updatedAt: new Date("2026-04-17T14:50:23.093Z"),
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
import { dmsPatchDmsPartsale } from "@unified-api/typescript-sdk/funcs/dmsPatchDmsPartsale.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsPatchDmsPartsale(unifiedTo, {
    dmsPartsale: {
      costAmount: 0,
      createdAt: new Date("2023-05-22T03:39:30.335Z"),
      currency: "USD",
      discountAmount: 0,
      freightAmount: 0,
      id: "4b1c25cb-28f3-4b1c-bea1-6d0ea70fc3a2",
      lines: [
        {
          id: "29a564fa-e384-4b74-861a-bbbc720b81fe",
          payType: "CUSTOMER",
          quantity: 5,
          quantityOrdered: 5,
          totalAmount: 491.45,
          unitPriceAmount: 98.29,
        },
        {
          id: "1510a9b5-b11c-451e-847d-d599d41a213f",
          payType: "CUSTOMER",
          quantity: 2,
          quantityOrdered: 2,
          totalAmount: 240.9,
          unitPriceAmount: 120.45,
        },
        {
          id: "f975fc4c-7207-4616-8a68-0c5a5bf59f95",
          payType: "CUSTOMER",
          quantity: 3,
          quantityOrdered: 3,
          totalAmount: 249.54,
          unitPriceAmount: 83.18,
        },
      ],
      metadata: [],
      number: "P292867",
      payType: "CUSTOMER",
      status: "VOIDED",
      subtotalAmount: 981.89,
      taxAmount: 68.73,
      totalAmount: 1050.62,
      type: "SALE",
      updatedAt: new Date("2026-04-17T14:50:23.093Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsPatchDmsPartsale failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchDmsPartsaleRequest](../../sdk/models/operations/patchdmspartsalerequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsPartsale](../../sdk/models/shared/dmspartsale.md)\>**

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
  const result = await unifiedTo.dms.patchDmsRepairorder({
    dmsRepairorder: {
      balanceAmount: 3193.86,
      completedAt: new Date("2026-11-12T17:50:17.598Z"),
      createdAt: new Date("2022-10-25T15:50:48.007Z"),
      currency: "USD",
      discountAmount: 0,
      estimateAmount: 3264,
      id: "43efba83-e6d9-4f92-98b9-7c23deb09748",
      jobs: [
        {
          actualHours: 3.6,
          cause: "Scheduled maintenance",
          complaint: "Due for service",
          correction: "Aufero cumque vicinus aptus assumenda quis aptus.",
          id: "9b237ea4-61e9-4a23-b119-008116d1866d",
          laborAmount: 681.6,
          labors: [
            {
              id: "e17ca241-ad8a-46eb-8a2f-f66e71ed1d17",
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
          id: "2870d3a3-d2eb-4af8-b26d-1d9b99cc235b",
          laborAmount: 446.4,
          labors: [
            {
              id: "b4b549f0-1aad-423c-8005-9796847cf756",
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
              id: "133c7b20-2ca2-4f09-b3e8-ca35f4f2330a",
              payType: "WARRANTY",
              quantity: 4,
              quantityOrdered: 4,
              totalAmount: 890.44,
              unitPriceAmount: 222.61,
            },
            {
              id: "5b6777f0-7ccb-4589-b6e5-98d8947819e4",
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
          id: "e7790642-7d7a-466b-894b-aac132f267a5",
          laborAmount: 232.4,
          labors: [
            {
              id: "8057a498-908e-4990-8e04-25b4011030c8",
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
              id: "47b5de9e-f927-4743-a113-4ed8a8d42fcf",
              payType: "CUSTOMER",
              quantity: 1,
              quantityOrdered: 1,
              totalAmount: 216.02,
              unitPriceAmount: 216.02,
            },
            {
              id: "d3b253e9-0d18-4a25-94a0-9a1c40915515",
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
      openedAt: new Date("2025-02-07T18:23:51.588Z"),
      partsAmount: 1680.8000000000002,
      payType: "WARRANTY",
      promisedAt: new Date("2025-02-09T02:23:51.588Z"),
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
      updatedAt: new Date("2025-11-27T20:58:57.692Z"),
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
      completedAt: new Date("2026-11-12T17:50:17.598Z"),
      createdAt: new Date("2022-10-25T15:50:48.007Z"),
      currency: "USD",
      discountAmount: 0,
      estimateAmount: 3264,
      id: "43efba83-e6d9-4f92-98b9-7c23deb09748",
      jobs: [
        {
          actualHours: 3.6,
          cause: "Scheduled maintenance",
          complaint: "Due for service",
          correction: "Aufero cumque vicinus aptus assumenda quis aptus.",
          id: "9b237ea4-61e9-4a23-b119-008116d1866d",
          laborAmount: 681.6,
          labors: [
            {
              id: "e17ca241-ad8a-46eb-8a2f-f66e71ed1d17",
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
          id: "2870d3a3-d2eb-4af8-b26d-1d9b99cc235b",
          laborAmount: 446.4,
          labors: [
            {
              id: "b4b549f0-1aad-423c-8005-9796847cf756",
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
              id: "133c7b20-2ca2-4f09-b3e8-ca35f4f2330a",
              payType: "WARRANTY",
              quantity: 4,
              quantityOrdered: 4,
              totalAmount: 890.44,
              unitPriceAmount: 222.61,
            },
            {
              id: "5b6777f0-7ccb-4589-b6e5-98d8947819e4",
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
          id: "e7790642-7d7a-466b-894b-aac132f267a5",
          laborAmount: 232.4,
          labors: [
            {
              id: "8057a498-908e-4990-8e04-25b4011030c8",
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
              id: "47b5de9e-f927-4743-a113-4ed8a8d42fcf",
              payType: "CUSTOMER",
              quantity: 1,
              quantityOrdered: 1,
              totalAmount: 216.02,
              unitPriceAmount: 216.02,
            },
            {
              id: "d3b253e9-0d18-4a25-94a0-9a1c40915515",
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
      openedAt: new Date("2025-02-07T18:23:51.588Z"),
      partsAmount: 1680.8000000000002,
      payType: "WARRANTY",
      promisedAt: new Date("2025-02-09T02:23:51.588Z"),
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
      updatedAt: new Date("2025-11-27T20:58:57.692Z"),
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

## patchDmsVehicle

Updates the DmsVehicle identified by `id`. Provide the unified DmsVehicle fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchDmsVehicle" method="patch" path="/dms/{connection_id}/vehicle/{id}" example="dms_vehicle" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.dms.patchDmsVehicle({
    dmsVehicle: {
      bodyStyle: "Pickup",
      condition: "NEW",
      costAmount: 26498,
      createdAt: new Date("2021-02-03T08:01:58.559Z"),
      currency: "USD",
      description: "2023 Citroën Silverado",
      exteriorColor: "lavender",
      fuelType: "ELECTRIC",
      id: "63a2cbde-78f0-46f3-80e2-2e734ab98da5",
      imageUrls: [
        "https://picsum.photos/seed/tOUr5K/1358/1877",
      ],
      interiorColor: "Black",
      internetPriceAmount: 29526,
      isActive: true,
      isCertified: false,
      isInventory: true,
      isPublished: false,
      make: "Citroën",
      metadata: [],
      model: "Silverado",
      modelCode: "PMU8KI",
      msrpAmount: 33100,
      odometer: 1,
      odometerUnit: "MILES",
      options: [
        {
          code: "SXE",
          costAmount: 250,
          description: "Tow package",
          priceAmount: 1400,
          type: "DEALER",
        },
        {
          code: "458",
          costAmount: 700,
          description: "Tow package",
          priceAmount: 600,
          type: "DEALER",
        },
      ],
      priceAmount: 29926,
      receivedAt: new Date("2021-02-03T08:01:58.559Z"),
      status: "OTHER",
      stockNumber: "N24959",
      transmission: "Manual",
      trim: "Base",
      type: "SUV",
      updatedAt: new Date("2023-11-03T01:01:02.954Z"),
      vin: "C29ZDU474DDR70955",
      warrantyExpiresAt: new Date("2022-03-28T09:10:09.889Z"),
      year: 2023,
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
import { dmsPatchDmsVehicle } from "@unified-api/typescript-sdk/funcs/dmsPatchDmsVehicle.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsPatchDmsVehicle(unifiedTo, {
    dmsVehicle: {
      bodyStyle: "Pickup",
      condition: "NEW",
      costAmount: 26498,
      createdAt: new Date("2021-02-03T08:01:58.559Z"),
      currency: "USD",
      description: "2023 Citroën Silverado",
      exteriorColor: "lavender",
      fuelType: "ELECTRIC",
      id: "63a2cbde-78f0-46f3-80e2-2e734ab98da5",
      imageUrls: [
        "https://picsum.photos/seed/tOUr5K/1358/1877",
      ],
      interiorColor: "Black",
      internetPriceAmount: 29526,
      isActive: true,
      isCertified: false,
      isInventory: true,
      isPublished: false,
      make: "Citroën",
      metadata: [],
      model: "Silverado",
      modelCode: "PMU8KI",
      msrpAmount: 33100,
      odometer: 1,
      odometerUnit: "MILES",
      options: [
        {
          code: "SXE",
          costAmount: 250,
          description: "Tow package",
          priceAmount: 1400,
          type: "DEALER",
        },
        {
          code: "458",
          costAmount: 700,
          description: "Tow package",
          priceAmount: 600,
          type: "DEALER",
        },
      ],
      priceAmount: 29926,
      receivedAt: new Date("2021-02-03T08:01:58.559Z"),
      status: "OTHER",
      stockNumber: "N24959",
      transmission: "Manual",
      trim: "Base",
      type: "SUV",
      updatedAt: new Date("2023-11-03T01:01:02.954Z"),
      vin: "C29ZDU474DDR70955",
      warrantyExpiresAt: new Date("2022-03-28T09:10:09.889Z"),
      year: 2023,
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsPatchDmsVehicle failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchDmsVehicleRequest](../../sdk/models/operations/patchdmsvehiclerequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsVehicle](../../sdk/models/shared/dmsvehicle.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchDmsVehiclesale

Updates the DmsVehiclesale identified by `id`. Provide the unified DmsVehiclesale fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchDmsVehiclesale" method="patch" path="/dms/{connection_id}/vehiclesale/{id}" example="dms_vehiclesale" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.dms.patchDmsVehiclesale({
    dmsVehiclesale: {
      backGrossAmount: 4565,
      createdAt: new Date("2020-04-02T08:14:56.150Z"),
      currency: "USD",
      downPaymentAmount: 6700,
      fees: [
        {
          costAmount: 0,
          isCapitalized: true,
          name: "Documentation fee",
          priceAmount: 499,
        },
        {
          isCapitalized: false,
          name: "Title and registration",
          priceAmount: 392,
        },
      ],
      finance: {
        financedAmount: 0,
        firstPaymentAt: new Date("2022-08-16T01:57:17.096Z"),
        interestRate: 6.68,
        lenderName: "Mueller, Yundt and Murray Financial",
        paymentAmount: 339,
        paymentFrequency: "MONTHLY",
        termMonths: 72,
      },
      financeType: "FINANCE",
      id: "7a4c9b71-e55b-47e2-a552-afda25e91f3c",
      metadata: [],
      number: "D84591",
      products: [
        {
          contractNumber: "B7JN10GVB7",
          costAmount: 1320,
          name: "Tire & Wheel",
          priceAmount: 3300,
          provider: "Renner and Sons",
          termMonths: 60,
          type: "PROTECTION",
        },
        {
          contractNumber: "VIZU7K3VRU",
          costAmount: 1115,
          deductibleAmount: 100,
          name: "Platinum Vehicle Service Contract",
          priceAmount: 3700,
          provider: "Frami, Wisozk and Gleichner",
          termMonths: 72,
          type: "SERVICE_CONTRACT",
        },
      ],
      rebateAmount: 500,
      soldAt: new Date("2022-08-14T10:41:42.809Z"),
      source: "Website",
      status: "SOLD",
      taxAmount: 0,
      taxes: [
        {
          name: "State sales tax",
          rate: 8.25,
          totalAmount: 0,
        },
      ],
      totalAmount: 7891,
      tradeIns: [],
      type: "RETAIL",
      updatedAt: new Date("2025-04-16T01:18:15.526Z"),
      vehicles: [],
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
import { dmsPatchDmsVehiclesale } from "@unified-api/typescript-sdk/funcs/dmsPatchDmsVehiclesale.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsPatchDmsVehiclesale(unifiedTo, {
    dmsVehiclesale: {
      backGrossAmount: 4565,
      createdAt: new Date("2020-04-02T08:14:56.150Z"),
      currency: "USD",
      downPaymentAmount: 6700,
      fees: [
        {
          costAmount: 0,
          isCapitalized: true,
          name: "Documentation fee",
          priceAmount: 499,
        },
        {
          isCapitalized: false,
          name: "Title and registration",
          priceAmount: 392,
        },
      ],
      finance: {
        financedAmount: 0,
        firstPaymentAt: new Date("2022-08-16T01:57:17.096Z"),
        interestRate: 6.68,
        lenderName: "Mueller, Yundt and Murray Financial",
        paymentAmount: 339,
        paymentFrequency: "MONTHLY",
        termMonths: 72,
      },
      financeType: "FINANCE",
      id: "7a4c9b71-e55b-47e2-a552-afda25e91f3c",
      metadata: [],
      number: "D84591",
      products: [
        {
          contractNumber: "B7JN10GVB7",
          costAmount: 1320,
          name: "Tire & Wheel",
          priceAmount: 3300,
          provider: "Renner and Sons",
          termMonths: 60,
          type: "PROTECTION",
        },
        {
          contractNumber: "VIZU7K3VRU",
          costAmount: 1115,
          deductibleAmount: 100,
          name: "Platinum Vehicle Service Contract",
          priceAmount: 3700,
          provider: "Frami, Wisozk and Gleichner",
          termMonths: 72,
          type: "SERVICE_CONTRACT",
        },
      ],
      rebateAmount: 500,
      soldAt: new Date("2022-08-14T10:41:42.809Z"),
      source: "Website",
      status: "SOLD",
      taxAmount: 0,
      taxes: [
        {
          name: "State sales tax",
          rate: 8.25,
          totalAmount: 0,
        },
      ],
      totalAmount: 7891,
      tradeIns: [],
      type: "RETAIL",
      updatedAt: new Date("2025-04-16T01:18:15.526Z"),
      vehicles: [],
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsPatchDmsVehiclesale failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchDmsVehiclesaleRequest](../../sdk/models/operations/patchdmsvehiclesalerequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsVehiclesale](../../sdk/models/shared/dmsvehiclesale.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeDmsAppointment

Deletes the DmsAppointment identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeDmsAppointment" method="delete" path="/dms/{connection_id}/appointment/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.dms.removeDmsAppointment({
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
import { dmsRemoveDmsAppointment } from "@unified-api/typescript-sdk/funcs/dmsRemoveDmsAppointment.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsRemoveDmsAppointment(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsRemoveDmsAppointment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveDmsAppointmentRequest](../../sdk/models/operations/removedmsappointmentrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveDmsAppointmentResponse](../../sdk/models/operations/removedmsappointmentresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateDmsAppointment

Updates the DmsAppointment identified by `id`. Provide the unified DmsAppointment fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateDmsAppointment" method="put" path="/dms/{connection_id}/appointment/{id}" example="dms_appointment" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.dms.updateDmsAppointment({
    dmsAppointment: {
      createdAt: new Date("2023-10-16T02:56:45.127Z"),
      endAt: new Date("2026-05-07T04:22:24.187Z"),
      id: "94faf89d-4274-46ae-9a97-d3499f143ae5",
      metadata: [],
      notes: "Soluta conitor timidus confero.",
      number: "A541909",
      services: [
        {
          id: "a88fa9e8-8218-4ad9-b3e1-358bd02e06de",
          name: "Customer concern",
          payType: "WARRANTY",
          technicianUserIds: [],
        },
        {
          complaint: "Check engine light on",
          id: "28da2d95-0e44-4632-afb2-36967c88ffbe",
          name: "Customer concern",
          payType: "CUSTOMER",
          technicianUserIds: [],
        },
        {
          complaint: "Due for service",
          id: "de74802c-ffae-46b0-8307-b665617754af",
          name: "Customer concern",
          payType: "CUSTOMER",
          technicianUserIds: [],
        },
      ],
      startAt: new Date("2026-05-06T21:22:24.187Z"),
      status: "CANCELLED",
      transportType: "LOANER",
      updatedAt: new Date("2025-04-06T03:39:42.610Z"),
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
import { dmsUpdateDmsAppointment } from "@unified-api/typescript-sdk/funcs/dmsUpdateDmsAppointment.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsUpdateDmsAppointment(unifiedTo, {
    dmsAppointment: {
      createdAt: new Date("2023-10-16T02:56:45.127Z"),
      endAt: new Date("2026-05-07T04:22:24.187Z"),
      id: "94faf89d-4274-46ae-9a97-d3499f143ae5",
      metadata: [],
      notes: "Soluta conitor timidus confero.",
      number: "A541909",
      services: [
        {
          id: "a88fa9e8-8218-4ad9-b3e1-358bd02e06de",
          name: "Customer concern",
          payType: "WARRANTY",
          technicianUserIds: [],
        },
        {
          complaint: "Check engine light on",
          id: "28da2d95-0e44-4632-afb2-36967c88ffbe",
          name: "Customer concern",
          payType: "CUSTOMER",
          technicianUserIds: [],
        },
        {
          complaint: "Due for service",
          id: "de74802c-ffae-46b0-8307-b665617754af",
          name: "Customer concern",
          payType: "CUSTOMER",
          technicianUserIds: [],
        },
      ],
      startAt: new Date("2026-05-06T21:22:24.187Z"),
      status: "CANCELLED",
      transportType: "LOANER",
      updatedAt: new Date("2025-04-06T03:39:42.610Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsUpdateDmsAppointment failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateDmsAppointmentRequest](../../sdk/models/operations/updatedmsappointmentrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsAppointment](../../sdk/models/shared/dmsappointment.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateDmsOpcode

Updates the DmsOpcode identified by `id`. Provide the unified DmsOpcode fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateDmsOpcode" method="put" path="/dms/{connection_id}/opcode/{id}" example="dms_opcode" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.dms.updateDmsOpcode({
    dmsOpcode: {
      category: "Electrical",
      code: "02AUS",
      createdAt: new Date("2021-01-12T19:03:17.545Z"),
      currency: "USD",
      description: "Oil and filter change",
      estimatedHours: 3.2,
      flatRateHours: 3.5,
      id: "db773125-d95f-4a72-a2a6-86aed6ef34a9",
      isActive: true,
      laborRateAmount: 216,
      metadata: [],
      oemCode: "05604A3",
      parts: [],
      payType: "CUSTOMER",
      skillCode: "A",
      type: "LABOR",
      updatedAt: new Date("2021-11-03T12:05:05.413Z"),
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
import { dmsUpdateDmsOpcode } from "@unified-api/typescript-sdk/funcs/dmsUpdateDmsOpcode.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsUpdateDmsOpcode(unifiedTo, {
    dmsOpcode: {
      category: "Electrical",
      code: "02AUS",
      createdAt: new Date("2021-01-12T19:03:17.545Z"),
      currency: "USD",
      description: "Oil and filter change",
      estimatedHours: 3.2,
      flatRateHours: 3.5,
      id: "db773125-d95f-4a72-a2a6-86aed6ef34a9",
      isActive: true,
      laborRateAmount: 216,
      metadata: [],
      oemCode: "05604A3",
      parts: [],
      payType: "CUSTOMER",
      skillCode: "A",
      type: "LABOR",
      updatedAt: new Date("2021-11-03T12:05:05.413Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsUpdateDmsOpcode failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateDmsOpcodeRequest](../../sdk/models/operations/updatedmsopcoderequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsOpcode](../../sdk/models/shared/dmsopcode.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateDmsPart

Updates the DmsPart identified by `id`. Provide the unified DmsPart fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateDmsPart" method="put" path="/dms/{connection_id}/part/{id}" example="dms_part" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.dms.updateDmsPart({
    dmsPart: {
      binLocations: [
        "S18-6",
      ],
      category: "Ignition",
      costAmount: 25.26,
      createdAt: new Date("2020-07-02T08:18:03.858Z"),
      currency: "USD",
      description: "Cabin filter",
      id: "0bc25bd2-8392-4d0a-8893-ac45a6536697",
      lastSoldAt: new Date("2020-11-23T02:53:05.439Z"),
      listPriceAmount: 39.61,
      manufacturerCode: "TOY",
      maxStockQuantity: 21,
      metadata: [],
      minStockQuantity: 3,
      packQuantity: 1,
      partNumber: "73992-IM3FI",
      quantityAvailable: 13,
      quantityOnHand: 15,
      quantityOnOrder: 14,
      sourceCode: "30",
      tradePriceAmount: 29.05,
      updatedAt: new Date("2023-11-22T16:43:28.339Z"),
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
import { dmsUpdateDmsPart } from "@unified-api/typescript-sdk/funcs/dmsUpdateDmsPart.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsUpdateDmsPart(unifiedTo, {
    dmsPart: {
      binLocations: [
        "S18-6",
      ],
      category: "Ignition",
      costAmount: 25.26,
      createdAt: new Date("2020-07-02T08:18:03.858Z"),
      currency: "USD",
      description: "Cabin filter",
      id: "0bc25bd2-8392-4d0a-8893-ac45a6536697",
      lastSoldAt: new Date("2020-11-23T02:53:05.439Z"),
      listPriceAmount: 39.61,
      manufacturerCode: "TOY",
      maxStockQuantity: 21,
      metadata: [],
      minStockQuantity: 3,
      packQuantity: 1,
      partNumber: "73992-IM3FI",
      quantityAvailable: 13,
      quantityOnHand: 15,
      quantityOnOrder: 14,
      sourceCode: "30",
      tradePriceAmount: 29.05,
      updatedAt: new Date("2023-11-22T16:43:28.339Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsUpdateDmsPart failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateDmsPartRequest](../../sdk/models/operations/updatedmspartrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsPart](../../sdk/models/shared/dmspart.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateDmsPartsale

Updates the DmsPartsale identified by `id`. Provide the unified DmsPartsale fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateDmsPartsale" method="put" path="/dms/{connection_id}/partsale/{id}" example="dms_partsale" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.dms.updateDmsPartsale({
    dmsPartsale: {
      costAmount: 0,
      createdAt: new Date("2023-05-22T03:39:30.335Z"),
      currency: "USD",
      discountAmount: 0,
      freightAmount: 0,
      id: "4b1c25cb-28f3-4b1c-bea1-6d0ea70fc3a2",
      lines: [
        {
          id: "29a564fa-e384-4b74-861a-bbbc720b81fe",
          payType: "CUSTOMER",
          quantity: 5,
          quantityOrdered: 5,
          totalAmount: 491.45,
          unitPriceAmount: 98.29,
        },
        {
          id: "1510a9b5-b11c-451e-847d-d599d41a213f",
          payType: "CUSTOMER",
          quantity: 2,
          quantityOrdered: 2,
          totalAmount: 240.9,
          unitPriceAmount: 120.45,
        },
        {
          id: "f975fc4c-7207-4616-8a68-0c5a5bf59f95",
          payType: "CUSTOMER",
          quantity: 3,
          quantityOrdered: 3,
          totalAmount: 249.54,
          unitPriceAmount: 83.18,
        },
      ],
      metadata: [],
      number: "P292867",
      payType: "CUSTOMER",
      status: "VOIDED",
      subtotalAmount: 981.89,
      taxAmount: 68.73,
      totalAmount: 1050.62,
      type: "SALE",
      updatedAt: new Date("2026-04-17T14:50:23.093Z"),
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
import { dmsUpdateDmsPartsale } from "@unified-api/typescript-sdk/funcs/dmsUpdateDmsPartsale.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsUpdateDmsPartsale(unifiedTo, {
    dmsPartsale: {
      costAmount: 0,
      createdAt: new Date("2023-05-22T03:39:30.335Z"),
      currency: "USD",
      discountAmount: 0,
      freightAmount: 0,
      id: "4b1c25cb-28f3-4b1c-bea1-6d0ea70fc3a2",
      lines: [
        {
          id: "29a564fa-e384-4b74-861a-bbbc720b81fe",
          payType: "CUSTOMER",
          quantity: 5,
          quantityOrdered: 5,
          totalAmount: 491.45,
          unitPriceAmount: 98.29,
        },
        {
          id: "1510a9b5-b11c-451e-847d-d599d41a213f",
          payType: "CUSTOMER",
          quantity: 2,
          quantityOrdered: 2,
          totalAmount: 240.9,
          unitPriceAmount: 120.45,
        },
        {
          id: "f975fc4c-7207-4616-8a68-0c5a5bf59f95",
          payType: "CUSTOMER",
          quantity: 3,
          quantityOrdered: 3,
          totalAmount: 249.54,
          unitPriceAmount: 83.18,
        },
      ],
      metadata: [],
      number: "P292867",
      payType: "CUSTOMER",
      status: "VOIDED",
      subtotalAmount: 981.89,
      taxAmount: 68.73,
      totalAmount: 1050.62,
      type: "SALE",
      updatedAt: new Date("2026-04-17T14:50:23.093Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsUpdateDmsPartsale failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateDmsPartsaleRequest](../../sdk/models/operations/updatedmspartsalerequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsPartsale](../../sdk/models/shared/dmspartsale.md)\>**

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
  const result = await unifiedTo.dms.updateDmsRepairorder({
    dmsRepairorder: {
      balanceAmount: 3193.86,
      completedAt: new Date("2026-11-12T17:50:17.598Z"),
      createdAt: new Date("2022-10-25T15:50:48.007Z"),
      currency: "USD",
      discountAmount: 0,
      estimateAmount: 3264,
      id: "43efba83-e6d9-4f92-98b9-7c23deb09748",
      jobs: [
        {
          actualHours: 3.6,
          cause: "Scheduled maintenance",
          complaint: "Due for service",
          correction: "Aufero cumque vicinus aptus assumenda quis aptus.",
          id: "9b237ea4-61e9-4a23-b119-008116d1866d",
          laborAmount: 681.6,
          labors: [
            {
              id: "e17ca241-ad8a-46eb-8a2f-f66e71ed1d17",
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
          id: "2870d3a3-d2eb-4af8-b26d-1d9b99cc235b",
          laborAmount: 446.4,
          labors: [
            {
              id: "b4b549f0-1aad-423c-8005-9796847cf756",
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
              id: "133c7b20-2ca2-4f09-b3e8-ca35f4f2330a",
              payType: "WARRANTY",
              quantity: 4,
              quantityOrdered: 4,
              totalAmount: 890.44,
              unitPriceAmount: 222.61,
            },
            {
              id: "5b6777f0-7ccb-4589-b6e5-98d8947819e4",
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
          id: "e7790642-7d7a-466b-894b-aac132f267a5",
          laborAmount: 232.4,
          labors: [
            {
              id: "8057a498-908e-4990-8e04-25b4011030c8",
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
              id: "47b5de9e-f927-4743-a113-4ed8a8d42fcf",
              payType: "CUSTOMER",
              quantity: 1,
              quantityOrdered: 1,
              totalAmount: 216.02,
              unitPriceAmount: 216.02,
            },
            {
              id: "d3b253e9-0d18-4a25-94a0-9a1c40915515",
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
      openedAt: new Date("2025-02-07T18:23:51.588Z"),
      partsAmount: 1680.8000000000002,
      payType: "WARRANTY",
      promisedAt: new Date("2025-02-09T02:23:51.588Z"),
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
      updatedAt: new Date("2025-11-27T20:58:57.692Z"),
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
      completedAt: new Date("2026-11-12T17:50:17.598Z"),
      createdAt: new Date("2022-10-25T15:50:48.007Z"),
      currency: "USD",
      discountAmount: 0,
      estimateAmount: 3264,
      id: "43efba83-e6d9-4f92-98b9-7c23deb09748",
      jobs: [
        {
          actualHours: 3.6,
          cause: "Scheduled maintenance",
          complaint: "Due for service",
          correction: "Aufero cumque vicinus aptus assumenda quis aptus.",
          id: "9b237ea4-61e9-4a23-b119-008116d1866d",
          laborAmount: 681.6,
          labors: [
            {
              id: "e17ca241-ad8a-46eb-8a2f-f66e71ed1d17",
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
          id: "2870d3a3-d2eb-4af8-b26d-1d9b99cc235b",
          laborAmount: 446.4,
          labors: [
            {
              id: "b4b549f0-1aad-423c-8005-9796847cf756",
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
              id: "133c7b20-2ca2-4f09-b3e8-ca35f4f2330a",
              payType: "WARRANTY",
              quantity: 4,
              quantityOrdered: 4,
              totalAmount: 890.44,
              unitPriceAmount: 222.61,
            },
            {
              id: "5b6777f0-7ccb-4589-b6e5-98d8947819e4",
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
          id: "e7790642-7d7a-466b-894b-aac132f267a5",
          laborAmount: 232.4,
          labors: [
            {
              id: "8057a498-908e-4990-8e04-25b4011030c8",
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
              id: "47b5de9e-f927-4743-a113-4ed8a8d42fcf",
              payType: "CUSTOMER",
              quantity: 1,
              quantityOrdered: 1,
              totalAmount: 216.02,
              unitPriceAmount: 216.02,
            },
            {
              id: "d3b253e9-0d18-4a25-94a0-9a1c40915515",
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
      openedAt: new Date("2025-02-07T18:23:51.588Z"),
      partsAmount: 1680.8000000000002,
      payType: "WARRANTY",
      promisedAt: new Date("2025-02-09T02:23:51.588Z"),
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
      updatedAt: new Date("2025-11-27T20:58:57.692Z"),
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

## updateDmsVehicle

Updates the DmsVehicle identified by `id`. Provide the unified DmsVehicle fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateDmsVehicle" method="put" path="/dms/{connection_id}/vehicle/{id}" example="dms_vehicle" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.dms.updateDmsVehicle({
    dmsVehicle: {
      bodyStyle: "Pickup",
      condition: "NEW",
      costAmount: 26498,
      createdAt: new Date("2021-02-03T08:01:58.559Z"),
      currency: "USD",
      description: "2023 Citroën Silverado",
      exteriorColor: "lavender",
      fuelType: "ELECTRIC",
      id: "63a2cbde-78f0-46f3-80e2-2e734ab98da5",
      imageUrls: [
        "https://picsum.photos/seed/tOUr5K/1358/1877",
      ],
      interiorColor: "Black",
      internetPriceAmount: 29526,
      isActive: true,
      isCertified: false,
      isInventory: true,
      isPublished: false,
      make: "Citroën",
      metadata: [],
      model: "Silverado",
      modelCode: "PMU8KI",
      msrpAmount: 33100,
      odometer: 1,
      odometerUnit: "MILES",
      options: [
        {
          code: "SXE",
          costAmount: 250,
          description: "Tow package",
          priceAmount: 1400,
          type: "DEALER",
        },
        {
          code: "458",
          costAmount: 700,
          description: "Tow package",
          priceAmount: 600,
          type: "DEALER",
        },
      ],
      priceAmount: 29926,
      receivedAt: new Date("2021-02-03T08:01:58.559Z"),
      status: "OTHER",
      stockNumber: "N24959",
      transmission: "Manual",
      trim: "Base",
      type: "SUV",
      updatedAt: new Date("2023-11-03T01:01:02.954Z"),
      vin: "C29ZDU474DDR70955",
      warrantyExpiresAt: new Date("2022-03-28T09:10:09.889Z"),
      year: 2023,
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
import { dmsUpdateDmsVehicle } from "@unified-api/typescript-sdk/funcs/dmsUpdateDmsVehicle.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsUpdateDmsVehicle(unifiedTo, {
    dmsVehicle: {
      bodyStyle: "Pickup",
      condition: "NEW",
      costAmount: 26498,
      createdAt: new Date("2021-02-03T08:01:58.559Z"),
      currency: "USD",
      description: "2023 Citroën Silverado",
      exteriorColor: "lavender",
      fuelType: "ELECTRIC",
      id: "63a2cbde-78f0-46f3-80e2-2e734ab98da5",
      imageUrls: [
        "https://picsum.photos/seed/tOUr5K/1358/1877",
      ],
      interiorColor: "Black",
      internetPriceAmount: 29526,
      isActive: true,
      isCertified: false,
      isInventory: true,
      isPublished: false,
      make: "Citroën",
      metadata: [],
      model: "Silverado",
      modelCode: "PMU8KI",
      msrpAmount: 33100,
      odometer: 1,
      odometerUnit: "MILES",
      options: [
        {
          code: "SXE",
          costAmount: 250,
          description: "Tow package",
          priceAmount: 1400,
          type: "DEALER",
        },
        {
          code: "458",
          costAmount: 700,
          description: "Tow package",
          priceAmount: 600,
          type: "DEALER",
        },
      ],
      priceAmount: 29926,
      receivedAt: new Date("2021-02-03T08:01:58.559Z"),
      status: "OTHER",
      stockNumber: "N24959",
      transmission: "Manual",
      trim: "Base",
      type: "SUV",
      updatedAt: new Date("2023-11-03T01:01:02.954Z"),
      vin: "C29ZDU474DDR70955",
      warrantyExpiresAt: new Date("2022-03-28T09:10:09.889Z"),
      year: 2023,
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsUpdateDmsVehicle failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateDmsVehicleRequest](../../sdk/models/operations/updatedmsvehiclerequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsVehicle](../../sdk/models/shared/dmsvehicle.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateDmsVehiclesale

Updates the DmsVehiclesale identified by `id`. Provide the unified DmsVehiclesale fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateDmsVehiclesale" method="put" path="/dms/{connection_id}/vehiclesale/{id}" example="dms_vehiclesale" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.dms.updateDmsVehiclesale({
    dmsVehiclesale: {
      backGrossAmount: 4565,
      createdAt: new Date("2020-04-02T08:14:56.150Z"),
      currency: "USD",
      downPaymentAmount: 6700,
      fees: [
        {
          costAmount: 0,
          isCapitalized: true,
          name: "Documentation fee",
          priceAmount: 499,
        },
        {
          isCapitalized: false,
          name: "Title and registration",
          priceAmount: 392,
        },
      ],
      finance: {
        financedAmount: 0,
        firstPaymentAt: new Date("2022-08-16T01:57:17.096Z"),
        interestRate: 6.68,
        lenderName: "Mueller, Yundt and Murray Financial",
        paymentAmount: 339,
        paymentFrequency: "MONTHLY",
        termMonths: 72,
      },
      financeType: "FINANCE",
      id: "7a4c9b71-e55b-47e2-a552-afda25e91f3c",
      metadata: [],
      number: "D84591",
      products: [
        {
          contractNumber: "B7JN10GVB7",
          costAmount: 1320,
          name: "Tire & Wheel",
          priceAmount: 3300,
          provider: "Renner and Sons",
          termMonths: 60,
          type: "PROTECTION",
        },
        {
          contractNumber: "VIZU7K3VRU",
          costAmount: 1115,
          deductibleAmount: 100,
          name: "Platinum Vehicle Service Contract",
          priceAmount: 3700,
          provider: "Frami, Wisozk and Gleichner",
          termMonths: 72,
          type: "SERVICE_CONTRACT",
        },
      ],
      rebateAmount: 500,
      soldAt: new Date("2022-08-14T10:41:42.809Z"),
      source: "Website",
      status: "SOLD",
      taxAmount: 0,
      taxes: [
        {
          name: "State sales tax",
          rate: 8.25,
          totalAmount: 0,
        },
      ],
      totalAmount: 7891,
      tradeIns: [],
      type: "RETAIL",
      updatedAt: new Date("2025-04-16T01:18:15.526Z"),
      vehicles: [],
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
import { dmsUpdateDmsVehiclesale } from "@unified-api/typescript-sdk/funcs/dmsUpdateDmsVehiclesale.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await dmsUpdateDmsVehiclesale(unifiedTo, {
    dmsVehiclesale: {
      backGrossAmount: 4565,
      createdAt: new Date("2020-04-02T08:14:56.150Z"),
      currency: "USD",
      downPaymentAmount: 6700,
      fees: [
        {
          costAmount: 0,
          isCapitalized: true,
          name: "Documentation fee",
          priceAmount: 499,
        },
        {
          isCapitalized: false,
          name: "Title and registration",
          priceAmount: 392,
        },
      ],
      finance: {
        financedAmount: 0,
        firstPaymentAt: new Date("2022-08-16T01:57:17.096Z"),
        interestRate: 6.68,
        lenderName: "Mueller, Yundt and Murray Financial",
        paymentAmount: 339,
        paymentFrequency: "MONTHLY",
        termMonths: 72,
      },
      financeType: "FINANCE",
      id: "7a4c9b71-e55b-47e2-a552-afda25e91f3c",
      metadata: [],
      number: "D84591",
      products: [
        {
          contractNumber: "B7JN10GVB7",
          costAmount: 1320,
          name: "Tire & Wheel",
          priceAmount: 3300,
          provider: "Renner and Sons",
          termMonths: 60,
          type: "PROTECTION",
        },
        {
          contractNumber: "VIZU7K3VRU",
          costAmount: 1115,
          deductibleAmount: 100,
          name: "Platinum Vehicle Service Contract",
          priceAmount: 3700,
          provider: "Frami, Wisozk and Gleichner",
          termMonths: 72,
          type: "SERVICE_CONTRACT",
        },
      ],
      rebateAmount: 500,
      soldAt: new Date("2022-08-14T10:41:42.809Z"),
      source: "Website",
      status: "SOLD",
      taxAmount: 0,
      taxes: [
        {
          name: "State sales tax",
          rate: 8.25,
          totalAmount: 0,
        },
      ],
      totalAmount: 7891,
      tradeIns: [],
      type: "RETAIL",
      updatedAt: new Date("2025-04-16T01:18:15.526Z"),
      vehicles: [],
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("dmsUpdateDmsVehiclesale failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateDmsVehiclesaleRequest](../../sdk/models/operations/updatedmsvehiclesalerequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.DmsVehiclesale](../../sdk/models/shared/dmsvehiclesale.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |