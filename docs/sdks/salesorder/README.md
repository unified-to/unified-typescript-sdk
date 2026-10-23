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

Creates a AccountingSalesorder. Provide the unified AccountingSalesorder fields in the request body; they are mapped to the provider's API. Returns the created AccountingSalesorder.

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
      closedAt: new Date("2023-03-26T00:59:53.840Z"),
      createdAt: new Date("2022-01-17T16:11:50.310Z"),
      currency: "USD",
      discountAmount: 0,
      fees: [],
      fulfillmentType: "OTHER",
      id: "ba30a786-cc5a-4a2f-a3ee-ae238fa3f2e6",
      lineitems: [],
      metadata: [],
      orderNumber: "832663",
      payments: [],
      postedAt: new Date("2022-01-17T16:11:50.310Z"),
      refundedAmount: 0,
      salesChannel: "Wholesale",
      serviceChargeAmount: 0,
      shippingAddress: {
        address1: "69878 Bradley Mill",
        city: "Port Matildestad",
        countryCode: "US",
        postalCode: "07989-2148",
        region: "Arkansas",
        regionCode: "AK",
      },
      status: "PAID",
      subtotalAmount: 0,
      taxAmount: 0,
      tipAmount: 0,
      totalAmount: 0,
      updatedAt: new Date("2023-03-26T00:59:53.840Z"),
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
      closedAt: new Date("2023-03-26T00:59:53.840Z"),
      createdAt: new Date("2022-01-17T16:11:50.310Z"),
      currency: "USD",
      discountAmount: 0,
      fees: [],
      fulfillmentType: "OTHER",
      id: "ba30a786-cc5a-4a2f-a3ee-ae238fa3f2e6",
      lineitems: [],
      metadata: [],
      orderNumber: "832663",
      payments: [],
      postedAt: new Date("2022-01-17T16:11:50.310Z"),
      refundedAmount: 0,
      salesChannel: "Wholesale",
      serviceChargeAmount: 0,
      shippingAddress: {
        address1: "69878 Bradley Mill",
        city: "Port Matildestad",
        countryCode: "US",
        postalCode: "07989-2148",
        region: "Arkansas",
        regionCode: "AK",
      },
      status: "PAID",
      subtotalAmount: 0,
      taxAmount: 0,
      tipAmount: 0,
      totalAmount: 0,
      updatedAt: new Date("2023-03-26T00:59:53.840Z"),
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

Retrieves a single AccountingSalesorder by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

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

Returns a list of AccountingSalesorders. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

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

Updates the AccountingSalesorder identified by `id`. Provide the unified AccountingSalesorder fields to change in the request body.

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
      closedAt: new Date("2023-03-26T00:59:53.850Z"),
      createdAt: new Date("2022-01-17T16:11:50.310Z"),
      currency: "USD",
      discountAmount: 0,
      fees: [],
      fulfillmentType: "OTHER",
      id: "5e9a5cb2-e1d4-4a26-b9d2-a2f0d156aa87",
      lineitems: [],
      metadata: [],
      orderNumber: "832663",
      payments: [],
      postedAt: new Date("2022-01-17T16:11:50.310Z"),
      refundedAmount: 0,
      salesChannel: "Wholesale",
      serviceChargeAmount: 0,
      shippingAddress: {
        address1: "69878 Bradley Mill",
        city: "Port Matildestad",
        countryCode: "US",
        postalCode: "07989-2148",
        region: "Arkansas",
        regionCode: "AK",
      },
      status: "PAID",
      subtotalAmount: 0,
      taxAmount: 0,
      tipAmount: 0,
      totalAmount: 0,
      updatedAt: new Date("2023-03-26T00:59:53.850Z"),
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
      closedAt: new Date("2023-03-26T00:59:53.850Z"),
      createdAt: new Date("2022-01-17T16:11:50.310Z"),
      currency: "USD",
      discountAmount: 0,
      fees: [],
      fulfillmentType: "OTHER",
      id: "5e9a5cb2-e1d4-4a26-b9d2-a2f0d156aa87",
      lineitems: [],
      metadata: [],
      orderNumber: "832663",
      payments: [],
      postedAt: new Date("2022-01-17T16:11:50.310Z"),
      refundedAmount: 0,
      salesChannel: "Wholesale",
      serviceChargeAmount: 0,
      shippingAddress: {
        address1: "69878 Bradley Mill",
        city: "Port Matildestad",
        countryCode: "US",
        postalCode: "07989-2148",
        region: "Arkansas",
        regionCode: "AK",
      },
      status: "PAID",
      subtotalAmount: 0,
      taxAmount: 0,
      tipAmount: 0,
      totalAmount: 0,
      updatedAt: new Date("2023-03-26T00:59:53.850Z"),
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

Deletes the AccountingSalesorder identified by `id`.

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

Updates the AccountingSalesorder identified by `id`. Provide the unified AccountingSalesorder fields to change in the request body.

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
      closedAt: new Date("2023-03-26T00:59:53.850Z"),
      createdAt: new Date("2022-01-17T16:11:50.310Z"),
      currency: "USD",
      discountAmount: 0,
      fees: [],
      fulfillmentType: "OTHER",
      id: "5e9a5cb2-e1d4-4a26-b9d2-a2f0d156aa87",
      lineitems: [],
      metadata: [],
      orderNumber: "832663",
      payments: [],
      postedAt: new Date("2022-01-17T16:11:50.310Z"),
      refundedAmount: 0,
      salesChannel: "Wholesale",
      serviceChargeAmount: 0,
      shippingAddress: {
        address1: "69878 Bradley Mill",
        city: "Port Matildestad",
        countryCode: "US",
        postalCode: "07989-2148",
        region: "Arkansas",
        regionCode: "AK",
      },
      status: "PAID",
      subtotalAmount: 0,
      taxAmount: 0,
      tipAmount: 0,
      totalAmount: 0,
      updatedAt: new Date("2023-03-26T00:59:53.850Z"),
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
      closedAt: new Date("2023-03-26T00:59:53.850Z"),
      createdAt: new Date("2022-01-17T16:11:50.310Z"),
      currency: "USD",
      discountAmount: 0,
      fees: [],
      fulfillmentType: "OTHER",
      id: "5e9a5cb2-e1d4-4a26-b9d2-a2f0d156aa87",
      lineitems: [],
      metadata: [],
      orderNumber: "832663",
      payments: [],
      postedAt: new Date("2022-01-17T16:11:50.310Z"),
      refundedAmount: 0,
      salesChannel: "Wholesale",
      serviceChargeAmount: 0,
      shippingAddress: {
        address1: "69878 Bradley Mill",
        city: "Port Matildestad",
        countryCode: "US",
        postalCode: "07989-2148",
        region: "Arkansas",
        regionCode: "AK",
      },
      status: "PAID",
      subtotalAmount: 0,
      taxAmount: 0,
      tipAmount: 0,
      totalAmount: 0,
      updatedAt: new Date("2023-03-26T00:59:53.850Z"),
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