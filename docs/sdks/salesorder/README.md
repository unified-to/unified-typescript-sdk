# Salesorder

## Overview

### Available Operations

* [createAccountingSalesorder](#createaccountingsalesorder) - Create a salesorder
* [getAccountingSalesorder](#getaccountingsalesorder) - Retrieve a salesorder
* [listAccountingSalesorders](#listaccountingsalesorders) - List all salesorders
* [patchAccountingSalesorder](#patchaccountingsalesorder) - Update a salesorder
* [removeAccountingSalesorder](#removeaccountingsalesorder) - Remove a salesorder
* [updateAccountingSalesorder](#updateaccountingsalesorder) - Update a salesorder

## createAccountingSalesorder

Create a salesorder

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createAccountingSalesorder" method="post" path="/accounting/{connection_id}/salesorder" example="accounting_salesorder" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.salesorder.createAccountingSalesorder({
    accountingSalesorder: {
      billingAddress: {
        address1: "26530 Stroman Rest",
        address2: "Suite 801",
        city: "Pocatello",
        countryCode: "US",
        postalCode: "05015-8546",
        region: "Louisiana",
        regionCode: "MO",
      },
      categoryIds: [],
      closedAt: new Date("2023-08-16T21:47:45.013Z"),
      createdAt: new Date("2022-01-17T16:11:50.310Z"),
      currency: "ANG",
      discountAmount: 99,
      employeeUserId: "4a6b8990-c85a-499f-82d0-5011c3c95a0b",
      fees: [
        {
          amount: 519,
          currency: "XCD",
          type: "PROMOTION",
        },
      ],
      fulfillmentType: "TAKEOUT",
      guestCount: 8,
      id: "4b4b8374-641e-4c7b-84dc-48bb2da0c7fe",
      lineitems: [],
      metadata: [],
      orderNumber: "988187",
      payments: [],
      postedAt: new Date("2026-01-11T02:11:41.222Z"),
      refundedAmount: 0,
      salesChannel: "Harvey, Collier and Weimann",
      serviceChargeAmount: 63,
      shippingAddress: {
        address1: "9878 Bradley Mill",
        address2: "Apt. 215",
        city: "Port Matildestad",
        countryCode: "US",
        postalCode: "07989-2148",
        region: "Arkansas",
        regionCode: "AK",
      },
      status: "REFUNDED",
      subtotalAmount: 0,
      taxAmount: 63,
      tipAmount: 34,
      totalAmount: 0,
      updatedAt: new Date("2022-02-10T18:49:09.489Z"),
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
import { accountingCreateAccountingSalesorder } from "@unified-api/typescript-sdk/funcs/accountingCreateAccountingSalesorder.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingCreateAccountingSalesorder(unifiedTo, {
    accountingSalesorder: {
      billingAddress: {
        address1: "26530 Stroman Rest",
        address2: "Suite 801",
        city: "Pocatello",
        countryCode: "US",
        postalCode: "05015-8546",
        region: "Louisiana",
        regionCode: "MO",
      },
      categoryIds: [],
      closedAt: new Date("2023-08-16T21:47:45.013Z"),
      createdAt: new Date("2022-01-17T16:11:50.310Z"),
      currency: "ANG",
      discountAmount: 99,
      employeeUserId: "4a6b8990-c85a-499f-82d0-5011c3c95a0b",
      fees: [
        {
          amount: 519,
          currency: "XCD",
          type: "PROMOTION",
        },
      ],
      fulfillmentType: "TAKEOUT",
      guestCount: 8,
      id: "4b4b8374-641e-4c7b-84dc-48bb2da0c7fe",
      lineitems: [],
      metadata: [],
      orderNumber: "988187",
      payments: [],
      postedAt: new Date("2026-01-11T02:11:41.222Z"),
      refundedAmount: 0,
      salesChannel: "Harvey, Collier and Weimann",
      serviceChargeAmount: 63,
      shippingAddress: {
        address1: "9878 Bradley Mill",
        address2: "Apt. 215",
        city: "Port Matildestad",
        countryCode: "US",
        postalCode: "07989-2148",
        region: "Arkansas",
        regionCode: "AK",
      },
      status: "REFUNDED",
      subtotalAmount: 0,
      taxAmount: 63,
      tipAmount: 34,
      totalAmount: 0,
      updatedAt: new Date("2022-02-10T18:49:09.489Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingCreateAccountingSalesorder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateAccountingSalesorderRequest](../../sdk/models/operations/createaccountingsalesorderrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingSalesorder](../../sdk/models/shared/accountingsalesorder.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getAccountingSalesorder

Retrieve a salesorder

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAccountingSalesorder" method="get" path="/accounting/{connection_id}/salesorder/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.salesorder.getAccountingSalesorder({
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
import { accountingGetAccountingSalesorder } from "@unified-api/typescript-sdk/funcs/accountingGetAccountingSalesorder.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingGetAccountingSalesorder(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingGetAccountingSalesorder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAccountingSalesorderRequest](../../sdk/models/operations/getaccountingsalesorderrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingSalesorder](../../sdk/models/shared/accountingsalesorder.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listAccountingSalesorders

List all salesorders

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listAccountingSalesorders" method="get" path="/accounting/{connection_id}/salesorder" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.salesorder.listAccountingSalesorders({
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
import { accountingListAccountingSalesorders } from "@unified-api/typescript-sdk/funcs/accountingListAccountingSalesorders.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingListAccountingSalesorders(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingListAccountingSalesorders failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAccountingSalesordersRequest](../../sdk/models/operations/listaccountingsalesordersrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingSalesorder[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchAccountingSalesorder

Update a salesorder

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchAccountingSalesorder" method="patch" path="/accounting/{connection_id}/salesorder/{id}" example="accounting_salesorder" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.salesorder.patchAccountingSalesorder({
    accountingSalesorder: {
      billingAddress: {
        address1: "26530 Stroman Rest",
        address2: "Suite 801",
        city: "Pocatello",
        countryCode: "US",
        postalCode: "05015-8546",
        region: "Louisiana",
        regionCode: "MO",
      },
      categoryIds: [],
      closedAt: new Date("2023-08-16T21:47:45.033Z"),
      createdAt: new Date("2022-01-17T16:11:50.310Z"),
      currency: "ANG",
      discountAmount: 99,
      employeeUserId: "4a6b8990-c85a-499f-82d0-5011c3c95a0b",
      fees: [
        {
          amount: 519,
          currency: "XCD",
          type: "PROMOTION",
        },
      ],
      fulfillmentType: "TAKEOUT",
      guestCount: 8,
      id: "7a2572c0-20e2-47d3-9ebd-99ebd81b6655",
      lineitems: [],
      metadata: [],
      orderNumber: "988187",
      payments: [],
      postedAt: new Date("2026-01-11T02:11:41.271Z"),
      refundedAmount: 0,
      salesChannel: "Harvey, Collier and Weimann",
      serviceChargeAmount: 63,
      shippingAddress: {
        address1: "9878 Bradley Mill",
        address2: "Apt. 215",
        city: "Port Matildestad",
        countryCode: "US",
        postalCode: "07989-2148",
        region: "Arkansas",
        regionCode: "AK",
      },
      status: "REFUNDED",
      subtotalAmount: 0,
      taxAmount: 63,
      tipAmount: 34,
      totalAmount: 0,
      updatedAt: new Date("2022-02-10T18:49:09.490Z"),
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
import { accountingPatchAccountingSalesorder } from "@unified-api/typescript-sdk/funcs/accountingPatchAccountingSalesorder.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingPatchAccountingSalesorder(unifiedTo, {
    accountingSalesorder: {
      billingAddress: {
        address1: "26530 Stroman Rest",
        address2: "Suite 801",
        city: "Pocatello",
        countryCode: "US",
        postalCode: "05015-8546",
        region: "Louisiana",
        regionCode: "MO",
      },
      categoryIds: [],
      closedAt: new Date("2023-08-16T21:47:45.033Z"),
      createdAt: new Date("2022-01-17T16:11:50.310Z"),
      currency: "ANG",
      discountAmount: 99,
      employeeUserId: "4a6b8990-c85a-499f-82d0-5011c3c95a0b",
      fees: [
        {
          amount: 519,
          currency: "XCD",
          type: "PROMOTION",
        },
      ],
      fulfillmentType: "TAKEOUT",
      guestCount: 8,
      id: "7a2572c0-20e2-47d3-9ebd-99ebd81b6655",
      lineitems: [],
      metadata: [],
      orderNumber: "988187",
      payments: [],
      postedAt: new Date("2026-01-11T02:11:41.271Z"),
      refundedAmount: 0,
      salesChannel: "Harvey, Collier and Weimann",
      serviceChargeAmount: 63,
      shippingAddress: {
        address1: "9878 Bradley Mill",
        address2: "Apt. 215",
        city: "Port Matildestad",
        countryCode: "US",
        postalCode: "07989-2148",
        region: "Arkansas",
        regionCode: "AK",
      },
      status: "REFUNDED",
      subtotalAmount: 0,
      taxAmount: 63,
      tipAmount: 34,
      totalAmount: 0,
      updatedAt: new Date("2022-02-10T18:49:09.490Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingPatchAccountingSalesorder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchAccountingSalesorderRequest](../../sdk/models/operations/patchaccountingsalesorderrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingSalesorder](../../sdk/models/shared/accountingsalesorder.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeAccountingSalesorder

Remove a salesorder

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeAccountingSalesorder" method="delete" path="/accounting/{connection_id}/salesorder/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.salesorder.removeAccountingSalesorder({
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
import { accountingRemoveAccountingSalesorder } from "@unified-api/typescript-sdk/funcs/accountingRemoveAccountingSalesorder.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingRemoveAccountingSalesorder(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingRemoveAccountingSalesorder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveAccountingSalesorderRequest](../../sdk/models/operations/removeaccountingsalesorderrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveAccountingSalesorderResponse](../../sdk/models/operations/removeaccountingsalesorderresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateAccountingSalesorder

Update a salesorder

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateAccountingSalesorder" method="put" path="/accounting/{connection_id}/salesorder/{id}" example="accounting_salesorder" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.salesorder.updateAccountingSalesorder({
    accountingSalesorder: {
      billingAddress: {
        address1: "26530 Stroman Rest",
        address2: "Suite 801",
        city: "Pocatello",
        countryCode: "US",
        postalCode: "05015-8546",
        region: "Louisiana",
        regionCode: "MO",
      },
      categoryIds: [],
      closedAt: new Date("2023-08-16T21:47:45.033Z"),
      createdAt: new Date("2022-01-17T16:11:50.310Z"),
      currency: "ANG",
      discountAmount: 99,
      employeeUserId: "4a6b8990-c85a-499f-82d0-5011c3c95a0b",
      fees: [
        {
          amount: 519,
          currency: "XCD",
          type: "PROMOTION",
        },
      ],
      fulfillmentType: "TAKEOUT",
      guestCount: 8,
      id: "7a2572c0-20e2-47d3-9ebd-99ebd81b6655",
      lineitems: [],
      metadata: [],
      orderNumber: "988187",
      payments: [],
      postedAt: new Date("2026-01-11T02:11:41.271Z"),
      refundedAmount: 0,
      salesChannel: "Harvey, Collier and Weimann",
      serviceChargeAmount: 63,
      shippingAddress: {
        address1: "9878 Bradley Mill",
        address2: "Apt. 215",
        city: "Port Matildestad",
        countryCode: "US",
        postalCode: "07989-2148",
        region: "Arkansas",
        regionCode: "AK",
      },
      status: "REFUNDED",
      subtotalAmount: 0,
      taxAmount: 63,
      tipAmount: 34,
      totalAmount: 0,
      updatedAt: new Date("2022-02-10T18:49:09.490Z"),
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
import { accountingUpdateAccountingSalesorder } from "@unified-api/typescript-sdk/funcs/accountingUpdateAccountingSalesorder.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingUpdateAccountingSalesorder(unifiedTo, {
    accountingSalesorder: {
      billingAddress: {
        address1: "26530 Stroman Rest",
        address2: "Suite 801",
        city: "Pocatello",
        countryCode: "US",
        postalCode: "05015-8546",
        region: "Louisiana",
        regionCode: "MO",
      },
      categoryIds: [],
      closedAt: new Date("2023-08-16T21:47:45.033Z"),
      createdAt: new Date("2022-01-17T16:11:50.310Z"),
      currency: "ANG",
      discountAmount: 99,
      employeeUserId: "4a6b8990-c85a-499f-82d0-5011c3c95a0b",
      fees: [
        {
          amount: 519,
          currency: "XCD",
          type: "PROMOTION",
        },
      ],
      fulfillmentType: "TAKEOUT",
      guestCount: 8,
      id: "7a2572c0-20e2-47d3-9ebd-99ebd81b6655",
      lineitems: [],
      metadata: [],
      orderNumber: "988187",
      payments: [],
      postedAt: new Date("2026-01-11T02:11:41.271Z"),
      refundedAmount: 0,
      salesChannel: "Harvey, Collier and Weimann",
      serviceChargeAmount: 63,
      shippingAddress: {
        address1: "9878 Bradley Mill",
        address2: "Apt. 215",
        city: "Port Matildestad",
        countryCode: "US",
        postalCode: "07989-2148",
        region: "Arkansas",
        regionCode: "AK",
      },
      status: "REFUNDED",
      subtotalAmount: 0,
      taxAmount: 63,
      tipAmount: 34,
      totalAmount: 0,
      updatedAt: new Date("2022-02-10T18:49:09.490Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingUpdateAccountingSalesorder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateAccountingSalesorderRequest](../../sdk/models/operations/updateaccountingsalesorderrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingSalesorder](../../sdk/models/shared/accountingsalesorder.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |