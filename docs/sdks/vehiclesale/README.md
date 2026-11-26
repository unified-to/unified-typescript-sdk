# Vehiclesale

## Overview

### Available Operations

* [createDmsVehiclesale](#createdmsvehiclesale) - Create a vehiclesale
* [getDmsVehiclesale](#getdmsvehiclesale) - Retrieve a vehiclesale
* [listDmsVehiclesales](#listdmsvehiclesales) - List all vehiclesales
* [patchDmsVehiclesale](#patchdmsvehiclesale) - Update a vehiclesale
* [updateDmsVehiclesale](#updatedmsvehiclesale) - Update a vehiclesale

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
  const result = await unifiedTo.vehiclesale.createDmsVehiclesale({
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
        firstPaymentAt: new Date("2022-08-16T03:03:40.923Z"),
        interestRate: 6.68,
        lenderName: "Mueller, Yundt and Murray Financial",
        paymentAmount: 339,
        paymentFrequency: "MONTHLY",
        termMonths: 72,
      },
      financeType: "FINANCE",
      id: "eeb1af1d-1aa5-4a3d-8b9d-d972409b6efd",
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
      soldAt: new Date("2022-08-14T11:48:06.636Z"),
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
      updatedAt: new Date("2025-04-16T03:39:37.268Z"),
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
        firstPaymentAt: new Date("2022-08-16T03:03:40.923Z"),
        interestRate: 6.68,
        lenderName: "Mueller, Yundt and Murray Financial",
        paymentAmount: 339,
        paymentFrequency: "MONTHLY",
        termMonths: 72,
      },
      financeType: "FINANCE",
      id: "eeb1af1d-1aa5-4a3d-8b9d-d972409b6efd",
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
      soldAt: new Date("2022-08-14T11:48:06.636Z"),
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
      updatedAt: new Date("2025-04-16T03:39:37.268Z"),
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
  const result = await unifiedTo.vehiclesale.getDmsVehiclesale({
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
  const result = await unifiedTo.vehiclesale.listDmsVehiclesales({
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
  const result = await unifiedTo.vehiclesale.patchDmsVehiclesale({
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
        firstPaymentAt: new Date("2022-08-16T03:03:40.939Z"),
        interestRate: 6.68,
        lenderName: "Mueller, Yundt and Murray Financial",
        paymentAmount: 339,
        paymentFrequency: "MONTHLY",
        termMonths: 72,
      },
      financeType: "FINANCE",
      id: "0e6b7af9-37a1-4b4a-826e-be6c77f6fc2f",
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
      soldAt: new Date("2022-08-14T11:48:06.652Z"),
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
      updatedAt: new Date("2025-04-16T03:39:37.302Z"),
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
        firstPaymentAt: new Date("2022-08-16T03:03:40.939Z"),
        interestRate: 6.68,
        lenderName: "Mueller, Yundt and Murray Financial",
        paymentAmount: 339,
        paymentFrequency: "MONTHLY",
        termMonths: 72,
      },
      financeType: "FINANCE",
      id: "0e6b7af9-37a1-4b4a-826e-be6c77f6fc2f",
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
      soldAt: new Date("2022-08-14T11:48:06.652Z"),
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
      updatedAt: new Date("2025-04-16T03:39:37.302Z"),
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
  const result = await unifiedTo.vehiclesale.updateDmsVehiclesale({
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
        firstPaymentAt: new Date("2022-08-16T03:03:40.939Z"),
        interestRate: 6.68,
        lenderName: "Mueller, Yundt and Murray Financial",
        paymentAmount: 339,
        paymentFrequency: "MONTHLY",
        termMonths: 72,
      },
      financeType: "FINANCE",
      id: "0e6b7af9-37a1-4b4a-826e-be6c77f6fc2f",
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
      soldAt: new Date("2022-08-14T11:48:06.652Z"),
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
      updatedAt: new Date("2025-04-16T03:39:37.302Z"),
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
        firstPaymentAt: new Date("2022-08-16T03:03:40.939Z"),
        interestRate: 6.68,
        lenderName: "Mueller, Yundt and Murray Financial",
        paymentAmount: 339,
        paymentFrequency: "MONTHLY",
        termMonths: 72,
      },
      financeType: "FINANCE",
      id: "0e6b7af9-37a1-4b4a-826e-be6c77f6fc2f",
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
      soldAt: new Date("2022-08-14T11:48:06.652Z"),
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
      updatedAt: new Date("2025-04-16T03:39:37.302Z"),
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