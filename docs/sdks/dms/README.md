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
      endAt: new Date("2026-05-08T02:16:50.592Z"),
      id: "1dbc3d3e-302b-49e6-a7ba-f54c9072b39c",
      metadata: [],
      notes: "Soluta conitor timidus confero.",
      number: "A541909",
      services: [
        {
          id: "7e42e9f3-11a5-4d27-a621-8c742f90dc6e",
          name: "Customer concern",
          payType: "WARRANTY",
          technicianUserIds: [],
        },
        {
          complaint: "Check engine light on",
          id: "dd8f2ad8-7a69-4526-b318-8f41a5f4cc22",
          name: "Customer concern",
          payType: "CUSTOMER",
          technicianUserIds: [],
        },
        {
          complaint: "Due for service",
          id: "425563b4-296e-43db-a00e-f2b58717e22a",
          name: "Customer concern",
          payType: "CUSTOMER",
          technicianUserIds: [],
        },
      ],
      startAt: new Date("2026-05-07T19:16:50.592Z"),
      status: "CANCELLED",
      transportType: "LOANER",
      updatedAt: new Date("2025-04-06T16:17:04.826Z"),
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
      endAt: new Date("2026-05-08T02:16:50.592Z"),
      id: "1dbc3d3e-302b-49e6-a7ba-f54c9072b39c",
      metadata: [],
      notes: "Soluta conitor timidus confero.",
      number: "A541909",
      services: [
        {
          id: "7e42e9f3-11a5-4d27-a621-8c742f90dc6e",
          name: "Customer concern",
          payType: "WARRANTY",
          technicianUserIds: [],
        },
        {
          complaint: "Check engine light on",
          id: "dd8f2ad8-7a69-4526-b318-8f41a5f4cc22",
          name: "Customer concern",
          payType: "CUSTOMER",
          technicianUserIds: [],
        },
        {
          complaint: "Due for service",
          id: "425563b4-296e-43db-a00e-f2b58717e22a",
          name: "Customer concern",
          payType: "CUSTOMER",
          technicianUserIds: [],
        },
      ],
      startAt: new Date("2026-05-07T19:16:50.592Z"),
      status: "CANCELLED",
      transportType: "LOANER",
      updatedAt: new Date("2025-04-06T16:17:04.826Z"),
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
      id: "90900cfa-bc33-4b44-a263-3557781ee6ab",
      isActive: true,
      laborRateAmount: 216,
      metadata: [],
      oemCode: "05604A3",
      parts: [],
      payType: "CUSTOMER",
      skillCode: "A",
      type: "LABOR",
      updatedAt: new Date("2021-11-03T15:45:08.459Z"),
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
      id: "90900cfa-bc33-4b44-a263-3557781ee6ab",
      isActive: true,
      laborRateAmount: 216,
      metadata: [],
      oemCode: "05604A3",
      parts: [],
      payType: "CUSTOMER",
      skillCode: "A",
      type: "LABOR",
      updatedAt: new Date("2021-11-03T15:45:08.459Z"),
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
      id: "14862038-0383-437f-9ecb-91ede4ac9c5d",
      lastSoldAt: new Date("2020-11-23T04:31:30.749Z"),
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
      updatedAt: new Date("2023-11-23T06:51:11.713Z"),
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
      id: "14862038-0383-437f-9ecb-91ede4ac9c5d",
      lastSoldAt: new Date("2020-11-23T04:31:30.749Z"),
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
      updatedAt: new Date("2023-11-23T06:51:11.713Z"),
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
      id: "987464ab-addb-4093-b90e-4c0abcc5d48f",
      lines: [
        {
          id: "323b56f3-25c6-483a-ba41-f5a21f5b4835",
          payType: "CUSTOMER",
          quantity: 5,
          quantityOrdered: 5,
          totalAmount: 491.45,
          unitPriceAmount: 98.29,
        },
        {
          id: "d68d719b-7d63-4f00-9a4d-9bf0cd875b38",
          payType: "CUSTOMER",
          quantity: 2,
          quantityOrdered: 2,
          totalAmount: 240.9,
          unitPriceAmount: 120.45,
        },
        {
          id: "ac72bc01-bf3a-4452-8303-102647bb698d",
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
      updatedAt: new Date("2026-04-18T12:53:30.871Z"),
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
      id: "987464ab-addb-4093-b90e-4c0abcc5d48f",
      lines: [
        {
          id: "323b56f3-25c6-483a-ba41-f5a21f5b4835",
          payType: "CUSTOMER",
          quantity: 5,
          quantityOrdered: 5,
          totalAmount: 491.45,
          unitPriceAmount: 98.29,
        },
        {
          id: "d68d719b-7d63-4f00-9a4d-9bf0cd875b38",
          payType: "CUSTOMER",
          quantity: 2,
          quantityOrdered: 2,
          totalAmount: 240.9,
          unitPriceAmount: 120.45,
        },
        {
          id: "ac72bc01-bf3a-4452-8303-102647bb698d",
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
      updatedAt: new Date("2026-04-18T12:53:30.871Z"),
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
      id: "369482c0-27f4-47b9-acae-ab5c3049b432",
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
      updatedAt: new Date("2023-11-03T13:37:20.561Z"),
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
      id: "369482c0-27f4-47b9-acae-ab5c3049b432",
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
      updatedAt: new Date("2023-11-03T13:37:20.561Z"),
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
        firstPaymentAt: new Date("2022-08-16T11:26:38.815Z"),
        interestRate: 6.68,
        lenderName: "Mueller, Yundt and Murray Financial",
        paymentAmount: 339,
        paymentFrequency: "MONTHLY",
        termMonths: 72,
      },
      financeType: "FINANCE",
      id: "9f26ffcb-bbdd-401a-a4e1-8d2a763650a4",
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
      soldAt: new Date("2022-08-14T20:11:04.528Z"),
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
      updatedAt: new Date("2025-04-16T21:30:27.313Z"),
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
        firstPaymentAt: new Date("2022-08-16T11:26:38.815Z"),
        interestRate: 6.68,
        lenderName: "Mueller, Yundt and Murray Financial",
        paymentAmount: 339,
        paymentFrequency: "MONTHLY",
        termMonths: 72,
      },
      financeType: "FINANCE",
      id: "9f26ffcb-bbdd-401a-a4e1-8d2a763650a4",
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
      soldAt: new Date("2022-08-14T20:11:04.528Z"),
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
      updatedAt: new Date("2025-04-16T21:30:27.313Z"),
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
      endAt: new Date("2026-05-08T02:16:50.605Z"),
      id: "a13c7cf2-2c6f-4743-ac95-908fd5573ffe",
      metadata: [],
      notes: "Soluta conitor timidus confero.",
      number: "A541909",
      services: [
        {
          id: "904230e4-8789-4a53-b455-4342f179125b",
          name: "Customer concern",
          payType: "WARRANTY",
          technicianUserIds: [],
        },
        {
          complaint: "Check engine light on",
          id: "bc340b69-0f2a-4b02-ba52-21e380583374",
          name: "Customer concern",
          payType: "CUSTOMER",
          technicianUserIds: [],
        },
        {
          complaint: "Due for service",
          id: "0eb7e144-9f9d-410f-8965-6c9650aa13a3",
          name: "Customer concern",
          payType: "CUSTOMER",
          technicianUserIds: [],
        },
      ],
      startAt: new Date("2026-05-07T19:16:50.605Z"),
      status: "CANCELLED",
      transportType: "LOANER",
      updatedAt: new Date("2025-04-06T16:17:04.834Z"),
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
      endAt: new Date("2026-05-08T02:16:50.605Z"),
      id: "a13c7cf2-2c6f-4743-ac95-908fd5573ffe",
      metadata: [],
      notes: "Soluta conitor timidus confero.",
      number: "A541909",
      services: [
        {
          id: "904230e4-8789-4a53-b455-4342f179125b",
          name: "Customer concern",
          payType: "WARRANTY",
          technicianUserIds: [],
        },
        {
          complaint: "Check engine light on",
          id: "bc340b69-0f2a-4b02-ba52-21e380583374",
          name: "Customer concern",
          payType: "CUSTOMER",
          technicianUserIds: [],
        },
        {
          complaint: "Due for service",
          id: "0eb7e144-9f9d-410f-8965-6c9650aa13a3",
          name: "Customer concern",
          payType: "CUSTOMER",
          technicianUserIds: [],
        },
      ],
      startAt: new Date("2026-05-07T19:16:50.605Z"),
      status: "CANCELLED",
      transportType: "LOANER",
      updatedAt: new Date("2025-04-06T16:17:04.834Z"),
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
      id: "e7f56275-e9f4-4c4f-ac3b-5bd2c25949d5",
      isActive: true,
      laborRateAmount: 216,
      metadata: [],
      oemCode: "05604A3",
      parts: [],
      payType: "CUSTOMER",
      skillCode: "A",
      type: "LABOR",
      updatedAt: new Date("2021-11-03T15:45:08.461Z"),
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
      id: "e7f56275-e9f4-4c4f-ac3b-5bd2c25949d5",
      isActive: true,
      laborRateAmount: 216,
      metadata: [],
      oemCode: "05604A3",
      parts: [],
      payType: "CUSTOMER",
      skillCode: "A",
      type: "LABOR",
      updatedAt: new Date("2021-11-03T15:45:08.461Z"),
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
      id: "4e019493-0539-46dd-8d07-aa1269dda984",
      lastSoldAt: new Date("2020-11-23T04:31:30.750Z"),
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
      updatedAt: new Date("2023-11-23T06:51:11.720Z"),
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
      id: "4e019493-0539-46dd-8d07-aa1269dda984",
      lastSoldAt: new Date("2020-11-23T04:31:30.750Z"),
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
      updatedAt: new Date("2023-11-23T06:51:11.720Z"),
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
      id: "2648e7f5-6e02-4529-8d0d-2f99a23ceb17",
      lines: [
        {
          id: "3e4fee90-9e0e-400c-9d1b-40b6e388a687",
          payType: "CUSTOMER",
          quantity: 5,
          quantityOrdered: 5,
          totalAmount: 491.45,
          unitPriceAmount: 98.29,
        },
        {
          id: "213de574-d4d5-4491-a4cb-a11b0e7e748b",
          payType: "CUSTOMER",
          quantity: 2,
          quantityOrdered: 2,
          totalAmount: 240.9,
          unitPriceAmount: 120.45,
        },
        {
          id: "7491e294-3949-4b96-99db-176461ba132b",
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
      updatedAt: new Date("2026-04-18T12:53:30.891Z"),
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
      id: "2648e7f5-6e02-4529-8d0d-2f99a23ceb17",
      lines: [
        {
          id: "3e4fee90-9e0e-400c-9d1b-40b6e388a687",
          payType: "CUSTOMER",
          quantity: 5,
          quantityOrdered: 5,
          totalAmount: 491.45,
          unitPriceAmount: 98.29,
        },
        {
          id: "213de574-d4d5-4491-a4cb-a11b0e7e748b",
          payType: "CUSTOMER",
          quantity: 2,
          quantityOrdered: 2,
          totalAmount: 240.9,
          unitPriceAmount: 120.45,
        },
        {
          id: "7491e294-3949-4b96-99db-176461ba132b",
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
      updatedAt: new Date("2026-04-18T12:53:30.891Z"),
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
      id: "95686cb5-37dc-4766-94cf-ad9a6b5e44c1",
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
      updatedAt: new Date("2023-11-03T13:37:20.573Z"),
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
      id: "95686cb5-37dc-4766-94cf-ad9a6b5e44c1",
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
      updatedAt: new Date("2023-11-03T13:37:20.573Z"),
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
        firstPaymentAt: new Date("2022-08-16T11:26:38.827Z"),
        interestRate: 6.68,
        lenderName: "Mueller, Yundt and Murray Financial",
        paymentAmount: 339,
        paymentFrequency: "MONTHLY",
        termMonths: 72,
      },
      financeType: "FINANCE",
      id: "59aa99e3-bfd0-4b25-99f4-5228a7964f20",
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
      soldAt: new Date("2022-08-14T20:11:04.540Z"),
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
      updatedAt: new Date("2025-04-16T21:30:27.339Z"),
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
        firstPaymentAt: new Date("2022-08-16T11:26:38.827Z"),
        interestRate: 6.68,
        lenderName: "Mueller, Yundt and Murray Financial",
        paymentAmount: 339,
        paymentFrequency: "MONTHLY",
        termMonths: 72,
      },
      financeType: "FINANCE",
      id: "59aa99e3-bfd0-4b25-99f4-5228a7964f20",
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
      soldAt: new Date("2022-08-14T20:11:04.540Z"),
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
      updatedAt: new Date("2025-04-16T21:30:27.339Z"),
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
      endAt: new Date("2026-05-08T02:16:50.605Z"),
      id: "a13c7cf2-2c6f-4743-ac95-908fd5573ffe",
      metadata: [],
      notes: "Soluta conitor timidus confero.",
      number: "A541909",
      services: [
        {
          id: "904230e4-8789-4a53-b455-4342f179125b",
          name: "Customer concern",
          payType: "WARRANTY",
          technicianUserIds: [],
        },
        {
          complaint: "Check engine light on",
          id: "bc340b69-0f2a-4b02-ba52-21e380583374",
          name: "Customer concern",
          payType: "CUSTOMER",
          technicianUserIds: [],
        },
        {
          complaint: "Due for service",
          id: "0eb7e144-9f9d-410f-8965-6c9650aa13a3",
          name: "Customer concern",
          payType: "CUSTOMER",
          technicianUserIds: [],
        },
      ],
      startAt: new Date("2026-05-07T19:16:50.605Z"),
      status: "CANCELLED",
      transportType: "LOANER",
      updatedAt: new Date("2025-04-06T16:17:04.834Z"),
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
      endAt: new Date("2026-05-08T02:16:50.605Z"),
      id: "a13c7cf2-2c6f-4743-ac95-908fd5573ffe",
      metadata: [],
      notes: "Soluta conitor timidus confero.",
      number: "A541909",
      services: [
        {
          id: "904230e4-8789-4a53-b455-4342f179125b",
          name: "Customer concern",
          payType: "WARRANTY",
          technicianUserIds: [],
        },
        {
          complaint: "Check engine light on",
          id: "bc340b69-0f2a-4b02-ba52-21e380583374",
          name: "Customer concern",
          payType: "CUSTOMER",
          technicianUserIds: [],
        },
        {
          complaint: "Due for service",
          id: "0eb7e144-9f9d-410f-8965-6c9650aa13a3",
          name: "Customer concern",
          payType: "CUSTOMER",
          technicianUserIds: [],
        },
      ],
      startAt: new Date("2026-05-07T19:16:50.605Z"),
      status: "CANCELLED",
      transportType: "LOANER",
      updatedAt: new Date("2025-04-06T16:17:04.834Z"),
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
      id: "e7f56275-e9f4-4c4f-ac3b-5bd2c25949d5",
      isActive: true,
      laborRateAmount: 216,
      metadata: [],
      oemCode: "05604A3",
      parts: [],
      payType: "CUSTOMER",
      skillCode: "A",
      type: "LABOR",
      updatedAt: new Date("2021-11-03T15:45:08.461Z"),
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
      id: "e7f56275-e9f4-4c4f-ac3b-5bd2c25949d5",
      isActive: true,
      laborRateAmount: 216,
      metadata: [],
      oemCode: "05604A3",
      parts: [],
      payType: "CUSTOMER",
      skillCode: "A",
      type: "LABOR",
      updatedAt: new Date("2021-11-03T15:45:08.461Z"),
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
      id: "4e019493-0539-46dd-8d07-aa1269dda984",
      lastSoldAt: new Date("2020-11-23T04:31:30.750Z"),
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
      updatedAt: new Date("2023-11-23T06:51:11.720Z"),
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
      id: "4e019493-0539-46dd-8d07-aa1269dda984",
      lastSoldAt: new Date("2020-11-23T04:31:30.750Z"),
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
      updatedAt: new Date("2023-11-23T06:51:11.720Z"),
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
      id: "2648e7f5-6e02-4529-8d0d-2f99a23ceb17",
      lines: [
        {
          id: "3e4fee90-9e0e-400c-9d1b-40b6e388a687",
          payType: "CUSTOMER",
          quantity: 5,
          quantityOrdered: 5,
          totalAmount: 491.45,
          unitPriceAmount: 98.29,
        },
        {
          id: "213de574-d4d5-4491-a4cb-a11b0e7e748b",
          payType: "CUSTOMER",
          quantity: 2,
          quantityOrdered: 2,
          totalAmount: 240.9,
          unitPriceAmount: 120.45,
        },
        {
          id: "7491e294-3949-4b96-99db-176461ba132b",
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
      updatedAt: new Date("2026-04-18T12:53:30.891Z"),
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
      id: "2648e7f5-6e02-4529-8d0d-2f99a23ceb17",
      lines: [
        {
          id: "3e4fee90-9e0e-400c-9d1b-40b6e388a687",
          payType: "CUSTOMER",
          quantity: 5,
          quantityOrdered: 5,
          totalAmount: 491.45,
          unitPriceAmount: 98.29,
        },
        {
          id: "213de574-d4d5-4491-a4cb-a11b0e7e748b",
          payType: "CUSTOMER",
          quantity: 2,
          quantityOrdered: 2,
          totalAmount: 240.9,
          unitPriceAmount: 120.45,
        },
        {
          id: "7491e294-3949-4b96-99db-176461ba132b",
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
      updatedAt: new Date("2026-04-18T12:53:30.891Z"),
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
      id: "95686cb5-37dc-4766-94cf-ad9a6b5e44c1",
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
      updatedAt: new Date("2023-11-03T13:37:20.573Z"),
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
      id: "95686cb5-37dc-4766-94cf-ad9a6b5e44c1",
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
      updatedAt: new Date("2023-11-03T13:37:20.573Z"),
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
        firstPaymentAt: new Date("2022-08-16T11:26:38.827Z"),
        interestRate: 6.68,
        lenderName: "Mueller, Yundt and Murray Financial",
        paymentAmount: 339,
        paymentFrequency: "MONTHLY",
        termMonths: 72,
      },
      financeType: "FINANCE",
      id: "59aa99e3-bfd0-4b25-99f4-5228a7964f20",
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
      soldAt: new Date("2022-08-14T20:11:04.540Z"),
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
      updatedAt: new Date("2025-04-16T21:30:27.339Z"),
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
        firstPaymentAt: new Date("2022-08-16T11:26:38.827Z"),
        interestRate: 6.68,
        lenderName: "Mueller, Yundt and Murray Financial",
        paymentAmount: 339,
        paymentFrequency: "MONTHLY",
        termMonths: 72,
      },
      financeType: "FINANCE",
      id: "59aa99e3-bfd0-4b25-99f4-5228a7964f20",
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
      soldAt: new Date("2022-08-14T20:11:04.540Z"),
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
      updatedAt: new Date("2025-04-16T21:30:27.339Z"),
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