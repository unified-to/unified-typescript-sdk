# Bill

## Overview

### Available Operations

* [createAccountingBill](#createaccountingbill) - Create a bill
* [getAccountingBill](#getaccountingbill) - Retrieve a bill
* [listAccountingBills](#listaccountingbills) - List all bills
* [patchAccountingBill](#patchaccountingbill) - Update a bill
* [removeAccountingBill](#removeaccountingbill) - Remove a bill
* [updateAccountingBill](#updateaccountingbill) - Update a bill

## createAccountingBill

Creates a AccountingBill. Provide the unified AccountingBill fields in the request body; they are mapped to the provider's API. Returns the created AccountingBill.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createAccountingBill" method="post" path="/accounting/{connection_id}/bill" example="accounting_bill" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.bill.createAccountingBill({
    accountingBill: {
      attachments: [
        {
          downloadUrl: "https://puny-foodstuffs.name",
          id: "8c616d1c-076c-43d3-babb-7101ccacd9fa",
          mimeType: "application/pdf",
          name: "BILL-2466.pdf",
        },
        {
          downloadUrl: "https://grimy-characterization.net",
          id: "e7cb344a-cec9-4b2d-b147-bcbbfa4293eb",
          mimeType: "application/pdf",
          name: "BILL-2466-1.pdf",
        },
      ],
      balanceAmount: 0,
      billNumber: "BILL-2466",
      categoryIds: [],
      createdAt: new Date("2019-08-08T23:03:14.104Z"),
      currency: "USD",
      discountAmount: 0,
      dueAt: new Date("2019-09-07T23:03:14.104Z"),
      extendedNotes: [],
      id: "9d0d4631-524e-4077-b07c-f7229e173d52",
      lineitems: [],
      metadata: [],
      notes: "Admiratio deporto tutamen cilicium infit amissio ante demulceo.",
      paidAmount: 0,
      paidAt: new Date("2019-08-15T17:24:28.313Z"),
      paymentCollectionMethod: "charge_automatically",
      payments: [],
      postedAt: new Date("2019-08-08T23:03:14.104Z"),
      purchaseorderIds: [],
      send: true,
      status: "PARTIALLY_PAID",
      subTotalAmount: 0,
      taxAmount: 0,
      term: "NET_90",
      totalAmount: 0,
      updatedAt: new Date("2020-06-02T00:17:55.165Z"),
      url: "https://cluttered-importance.org/bills/BILL-2466",
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
import { accountingCreateAccountingBill } from "@unified-api/typescript-sdk/funcs/accountingCreateAccountingBill.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingCreateAccountingBill(unifiedTo, {
    accountingBill: {
      attachments: [
        {
          downloadUrl: "https://puny-foodstuffs.name",
          id: "8c616d1c-076c-43d3-babb-7101ccacd9fa",
          mimeType: "application/pdf",
          name: "BILL-2466.pdf",
        },
        {
          downloadUrl: "https://grimy-characterization.net",
          id: "e7cb344a-cec9-4b2d-b147-bcbbfa4293eb",
          mimeType: "application/pdf",
          name: "BILL-2466-1.pdf",
        },
      ],
      balanceAmount: 0,
      billNumber: "BILL-2466",
      categoryIds: [],
      createdAt: new Date("2019-08-08T23:03:14.104Z"),
      currency: "USD",
      discountAmount: 0,
      dueAt: new Date("2019-09-07T23:03:14.104Z"),
      extendedNotes: [],
      id: "9d0d4631-524e-4077-b07c-f7229e173d52",
      lineitems: [],
      metadata: [],
      notes: "Admiratio deporto tutamen cilicium infit amissio ante demulceo.",
      paidAmount: 0,
      paidAt: new Date("2019-08-15T17:24:28.313Z"),
      paymentCollectionMethod: "charge_automatically",
      payments: [],
      postedAt: new Date("2019-08-08T23:03:14.104Z"),
      purchaseorderIds: [],
      send: true,
      status: "PARTIALLY_PAID",
      subTotalAmount: 0,
      taxAmount: 0,
      term: "NET_90",
      totalAmount: 0,
      updatedAt: new Date("2020-06-02T00:17:55.165Z"),
      url: "https://cluttered-importance.org/bills/BILL-2466",
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingCreateAccountingBill failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateAccountingBillRequest](../../sdk/models/operations/createaccountingbillrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingBill](../../sdk/models/shared/accountingbill.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getAccountingBill

Retrieves a single AccountingBill by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAccountingBill" method="get" path="/accounting/{connection_id}/bill/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.bill.getAccountingBill({
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
import { accountingGetAccountingBill } from "@unified-api/typescript-sdk/funcs/accountingGetAccountingBill.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingGetAccountingBill(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingGetAccountingBill failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAccountingBillRequest](../../sdk/models/operations/getaccountingbillrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingBill](../../sdk/models/shared/accountingbill.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listAccountingBills

Returns a list of AccountingBills. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listAccountingBills" method="get" path="/accounting/{connection_id}/bill" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.bill.listAccountingBills({
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
import { accountingListAccountingBills } from "@unified-api/typescript-sdk/funcs/accountingListAccountingBills.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingListAccountingBills(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingListAccountingBills failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAccountingBillsRequest](../../sdk/models/operations/listaccountingbillsrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingBill[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchAccountingBill

Updates the AccountingBill identified by `id`. Provide the unified AccountingBill fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchAccountingBill" method="patch" path="/accounting/{connection_id}/bill/{id}" example="accounting_bill" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.bill.patchAccountingBill({
    accountingBill: {
      attachments: [
        {
          downloadUrl: "https://puny-foodstuffs.name",
          id: "541c3d27-9879-4e01-ae29-18f5e0ff1f7f",
          mimeType: "application/pdf",
          name: "BILL-2466.pdf",
        },
        {
          downloadUrl: "https://grimy-characterization.net",
          id: "77583990-f1ff-4126-901a-9224af353c74",
          mimeType: "application/pdf",
          name: "BILL-2466-1.pdf",
        },
      ],
      balanceAmount: 0,
      billNumber: "BILL-2466",
      categoryIds: [],
      createdAt: new Date("2019-08-08T23:03:14.104Z"),
      currency: "USD",
      discountAmount: 0,
      dueAt: new Date("2019-09-07T23:03:14.104Z"),
      extendedNotes: [],
      id: "b7c7392c-6986-4f74-8b4e-878dd80e4cbb",
      lineitems: [],
      metadata: [],
      notes: "Admiratio deporto tutamen cilicium infit amissio ante demulceo.",
      paidAmount: 0,
      paidAt: new Date("2019-08-15T17:24:28.313Z"),
      paymentCollectionMethod: "charge_automatically",
      payments: [],
      postedAt: new Date("2019-08-08T23:03:14.104Z"),
      purchaseorderIds: [],
      send: true,
      status: "PARTIALLY_PAID",
      subTotalAmount: 0,
      taxAmount: 0,
      term: "NET_90",
      totalAmount: 0,
      updatedAt: new Date("2020-06-02T00:17:55.170Z"),
      url: "https://cluttered-importance.org/bills/BILL-2466",
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
import { accountingPatchAccountingBill } from "@unified-api/typescript-sdk/funcs/accountingPatchAccountingBill.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingPatchAccountingBill(unifiedTo, {
    accountingBill: {
      attachments: [
        {
          downloadUrl: "https://puny-foodstuffs.name",
          id: "541c3d27-9879-4e01-ae29-18f5e0ff1f7f",
          mimeType: "application/pdf",
          name: "BILL-2466.pdf",
        },
        {
          downloadUrl: "https://grimy-characterization.net",
          id: "77583990-f1ff-4126-901a-9224af353c74",
          mimeType: "application/pdf",
          name: "BILL-2466-1.pdf",
        },
      ],
      balanceAmount: 0,
      billNumber: "BILL-2466",
      categoryIds: [],
      createdAt: new Date("2019-08-08T23:03:14.104Z"),
      currency: "USD",
      discountAmount: 0,
      dueAt: new Date("2019-09-07T23:03:14.104Z"),
      extendedNotes: [],
      id: "b7c7392c-6986-4f74-8b4e-878dd80e4cbb",
      lineitems: [],
      metadata: [],
      notes: "Admiratio deporto tutamen cilicium infit amissio ante demulceo.",
      paidAmount: 0,
      paidAt: new Date("2019-08-15T17:24:28.313Z"),
      paymentCollectionMethod: "charge_automatically",
      payments: [],
      postedAt: new Date("2019-08-08T23:03:14.104Z"),
      purchaseorderIds: [],
      send: true,
      status: "PARTIALLY_PAID",
      subTotalAmount: 0,
      taxAmount: 0,
      term: "NET_90",
      totalAmount: 0,
      updatedAt: new Date("2020-06-02T00:17:55.170Z"),
      url: "https://cluttered-importance.org/bills/BILL-2466",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingPatchAccountingBill failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchAccountingBillRequest](../../sdk/models/operations/patchaccountingbillrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingBill](../../sdk/models/shared/accountingbill.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeAccountingBill

Deletes the AccountingBill identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeAccountingBill" method="delete" path="/accounting/{connection_id}/bill/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.bill.removeAccountingBill({
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
import { accountingRemoveAccountingBill } from "@unified-api/typescript-sdk/funcs/accountingRemoveAccountingBill.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingRemoveAccountingBill(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingRemoveAccountingBill failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveAccountingBillRequest](../../sdk/models/operations/removeaccountingbillrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveAccountingBillResponse](../../sdk/models/operations/removeaccountingbillresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateAccountingBill

Updates the AccountingBill identified by `id`. Provide the unified AccountingBill fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateAccountingBill" method="put" path="/accounting/{connection_id}/bill/{id}" example="accounting_bill" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.bill.updateAccountingBill({
    accountingBill: {
      attachments: [
        {
          downloadUrl: "https://puny-foodstuffs.name",
          id: "541c3d27-9879-4e01-ae29-18f5e0ff1f7f",
          mimeType: "application/pdf",
          name: "BILL-2466.pdf",
        },
        {
          downloadUrl: "https://grimy-characterization.net",
          id: "77583990-f1ff-4126-901a-9224af353c74",
          mimeType: "application/pdf",
          name: "BILL-2466-1.pdf",
        },
      ],
      balanceAmount: 0,
      billNumber: "BILL-2466",
      categoryIds: [],
      createdAt: new Date("2019-08-08T23:03:14.104Z"),
      currency: "USD",
      discountAmount: 0,
      dueAt: new Date("2019-09-07T23:03:14.104Z"),
      extendedNotes: [],
      id: "b7c7392c-6986-4f74-8b4e-878dd80e4cbb",
      lineitems: [],
      metadata: [],
      notes: "Admiratio deporto tutamen cilicium infit amissio ante demulceo.",
      paidAmount: 0,
      paidAt: new Date("2019-08-15T17:24:28.313Z"),
      paymentCollectionMethod: "charge_automatically",
      payments: [],
      postedAt: new Date("2019-08-08T23:03:14.104Z"),
      purchaseorderIds: [],
      send: true,
      status: "PARTIALLY_PAID",
      subTotalAmount: 0,
      taxAmount: 0,
      term: "NET_90",
      totalAmount: 0,
      updatedAt: new Date("2020-06-02T00:17:55.170Z"),
      url: "https://cluttered-importance.org/bills/BILL-2466",
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
import { accountingUpdateAccountingBill } from "@unified-api/typescript-sdk/funcs/accountingUpdateAccountingBill.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingUpdateAccountingBill(unifiedTo, {
    accountingBill: {
      attachments: [
        {
          downloadUrl: "https://puny-foodstuffs.name",
          id: "541c3d27-9879-4e01-ae29-18f5e0ff1f7f",
          mimeType: "application/pdf",
          name: "BILL-2466.pdf",
        },
        {
          downloadUrl: "https://grimy-characterization.net",
          id: "77583990-f1ff-4126-901a-9224af353c74",
          mimeType: "application/pdf",
          name: "BILL-2466-1.pdf",
        },
      ],
      balanceAmount: 0,
      billNumber: "BILL-2466",
      categoryIds: [],
      createdAt: new Date("2019-08-08T23:03:14.104Z"),
      currency: "USD",
      discountAmount: 0,
      dueAt: new Date("2019-09-07T23:03:14.104Z"),
      extendedNotes: [],
      id: "b7c7392c-6986-4f74-8b4e-878dd80e4cbb",
      lineitems: [],
      metadata: [],
      notes: "Admiratio deporto tutamen cilicium infit amissio ante demulceo.",
      paidAmount: 0,
      paidAt: new Date("2019-08-15T17:24:28.313Z"),
      paymentCollectionMethod: "charge_automatically",
      payments: [],
      postedAt: new Date("2019-08-08T23:03:14.104Z"),
      purchaseorderIds: [],
      send: true,
      status: "PARTIALLY_PAID",
      subTotalAmount: 0,
      taxAmount: 0,
      term: "NET_90",
      totalAmount: 0,
      updatedAt: new Date("2020-06-02T00:17:55.170Z"),
      url: "https://cluttered-importance.org/bills/BILL-2466",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingUpdateAccountingBill failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateAccountingBillRequest](../../sdk/models/operations/updateaccountingbillrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingBill](../../sdk/models/shared/accountingbill.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |