# Partsale

## Overview

### Available Operations

* [createDmsPartsale](#createdmspartsale) - Create a partsale
* [getDmsPartsale](#getdmspartsale) - Retrieve a partsale
* [listDmsPartsales](#listdmspartsales) - List all partsales
* [patchDmsPartsale](#patchdmspartsale) - Update a partsale
* [updateDmsPartsale](#updatedmspartsale) - Update a partsale

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
  const result = await unifiedTo.partsale.createDmsPartsale({
    dmsPartsale: {
      costAmount: 0,
      createdAt: new Date("2023-05-22T03:39:30.335Z"),
      currency: "USD",
      discountAmount: 0,
      freightAmount: 0,
      id: "97921a42-6505-403d-8173-9262ee6573e1",
      lines: [
        {
          id: "e0b46a4b-ff0d-46db-94a6-b59776b3a0ed",
          payType: "CUSTOMER",
          quantity: 5,
          quantityOrdered: 5,
          totalAmount: 491.45,
          unitPriceAmount: 98.29,
        },
        {
          id: "08b2908d-2bc6-4812-b17a-d20c6fc7df46",
          payType: "CUSTOMER",
          quantity: 2,
          quantityOrdered: 2,
          totalAmount: 240.9,
          unitPriceAmount: 120.45,
        },
        {
          id: "5a0a26ae-0451-46d8-af9a-889695b86df0",
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
      updatedAt: new Date("2026-04-17T17:24:41.103Z"),
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
      id: "97921a42-6505-403d-8173-9262ee6573e1",
      lines: [
        {
          id: "e0b46a4b-ff0d-46db-94a6-b59776b3a0ed",
          payType: "CUSTOMER",
          quantity: 5,
          quantityOrdered: 5,
          totalAmount: 491.45,
          unitPriceAmount: 98.29,
        },
        {
          id: "08b2908d-2bc6-4812-b17a-d20c6fc7df46",
          payType: "CUSTOMER",
          quantity: 2,
          quantityOrdered: 2,
          totalAmount: 240.9,
          unitPriceAmount: 120.45,
        },
        {
          id: "5a0a26ae-0451-46d8-af9a-889695b86df0",
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
      updatedAt: new Date("2026-04-17T17:24:41.103Z"),
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
  const result = await unifiedTo.partsale.getDmsPartsale({
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
  const result = await unifiedTo.partsale.listDmsPartsales({
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
  const result = await unifiedTo.partsale.patchDmsPartsale({
    dmsPartsale: {
      costAmount: 0,
      createdAt: new Date("2023-05-22T03:39:30.335Z"),
      currency: "USD",
      discountAmount: 0,
      freightAmount: 0,
      id: "88571a0e-8322-4324-965b-c599a9d1a8fc",
      lines: [
        {
          id: "2355f928-6085-42f7-b689-e9ce4d71e717",
          payType: "CUSTOMER",
          quantity: 5,
          quantityOrdered: 5,
          totalAmount: 491.45,
          unitPriceAmount: 98.29,
        },
        {
          id: "df815b49-1ba2-4b91-a3d0-0a7adb95daad",
          payType: "CUSTOMER",
          quantity: 2,
          quantityOrdered: 2,
          totalAmount: 240.9,
          unitPriceAmount: 120.45,
        },
        {
          id: "66346300-3bf1-43bf-b597-65490dbc06c7",
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
      updatedAt: new Date("2026-04-17T17:24:41.134Z"),
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
      id: "88571a0e-8322-4324-965b-c599a9d1a8fc",
      lines: [
        {
          id: "2355f928-6085-42f7-b689-e9ce4d71e717",
          payType: "CUSTOMER",
          quantity: 5,
          quantityOrdered: 5,
          totalAmount: 491.45,
          unitPriceAmount: 98.29,
        },
        {
          id: "df815b49-1ba2-4b91-a3d0-0a7adb95daad",
          payType: "CUSTOMER",
          quantity: 2,
          quantityOrdered: 2,
          totalAmount: 240.9,
          unitPriceAmount: 120.45,
        },
        {
          id: "66346300-3bf1-43bf-b597-65490dbc06c7",
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
      updatedAt: new Date("2026-04-17T17:24:41.134Z"),
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
  const result = await unifiedTo.partsale.updateDmsPartsale({
    dmsPartsale: {
      costAmount: 0,
      createdAt: new Date("2023-05-22T03:39:30.335Z"),
      currency: "USD",
      discountAmount: 0,
      freightAmount: 0,
      id: "88571a0e-8322-4324-965b-c599a9d1a8fc",
      lines: [
        {
          id: "2355f928-6085-42f7-b689-e9ce4d71e717",
          payType: "CUSTOMER",
          quantity: 5,
          quantityOrdered: 5,
          totalAmount: 491.45,
          unitPriceAmount: 98.29,
        },
        {
          id: "df815b49-1ba2-4b91-a3d0-0a7adb95daad",
          payType: "CUSTOMER",
          quantity: 2,
          quantityOrdered: 2,
          totalAmount: 240.9,
          unitPriceAmount: 120.45,
        },
        {
          id: "66346300-3bf1-43bf-b597-65490dbc06c7",
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
      updatedAt: new Date("2026-04-17T17:24:41.134Z"),
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
      id: "88571a0e-8322-4324-965b-c599a9d1a8fc",
      lines: [
        {
          id: "2355f928-6085-42f7-b689-e9ce4d71e717",
          payType: "CUSTOMER",
          quantity: 5,
          quantityOrdered: 5,
          totalAmount: 491.45,
          unitPriceAmount: 98.29,
        },
        {
          id: "df815b49-1ba2-4b91-a3d0-0a7adb95daad",
          payType: "CUSTOMER",
          quantity: 2,
          quantityOrdered: 2,
          totalAmount: 240.9,
          unitPriceAmount: 120.45,
        },
        {
          id: "66346300-3bf1-43bf-b597-65490dbc06c7",
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
      updatedAt: new Date("2026-04-17T17:24:41.134Z"),
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