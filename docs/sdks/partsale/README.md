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