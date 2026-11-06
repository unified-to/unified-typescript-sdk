# Expense

## Overview

### Available Operations

* [createAccountingExpense](#createaccountingexpense) - Create an expense
* [createLegalExpense](#createlegalexpense) - Create an expense
* [getAccountingExpense](#getaccountingexpense) - Retrieve an expense
* [getLegalExpense](#getlegalexpense) - Retrieve an expense
* [listAccountingExpenses](#listaccountingexpenses) - List all expenses
* [listLegalExpenses](#listlegalexpenses) - List all expenses
* [patchAccountingExpense](#patchaccountingexpense) - Update an expense
* [patchLegalExpense](#patchlegalexpense) - Update an expense
* [removeAccountingExpense](#removeaccountingexpense) - Remove an expense
* [removeLegalExpense](#removelegalexpense) - Remove an expense
* [updateAccountingExpense](#updateaccountingexpense) - Update an expense
* [updateLegalExpense](#updatelegalexpense) - Update an expense

## createAccountingExpense

Creates a AccountingExpense. Provide the unified AccountingExpense fields in the request body; they are mapped to the provider's API. Returns the created AccountingExpense.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createAccountingExpense" method="post" path="/accounting/{connection_id}/expense" example="accounting_expense" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.expense.createAccountingExpense({
    accountingExpense: {
      attachments: [
        {
          downloadUrl: "https://rubbery-couch.biz/",
          id: "09ef69ea-86ec-4959-8358-be8cdd0970a6",
          mimeType: "application/pdf",
          name: "receipt-9696.pdf",
        },
        {
          downloadUrl: "https://appropriate-smog.biz/",
          id: "f3c08c78-d690-42ba-bb6e-e0feda60e4c5",
          mimeType: "application/pdf",
          name: "receipt-9696-1.pdf",
        },
      ],
      categoryIds: [],
      createdAt: new Date("2020-06-11T03:39:37.305Z"),
      currency: "GBP",
      externalNumber: "EXP-38303",
      id: "c737fff9-6765-4f73-b9ae-6a5227444a85",
      lineitems: [
        {
          id: "d865edae-9ac6-44b3-8b52-f1ec70dba8bb",
          itemName: "Client dinner",
          taxAmount: 0,
          totalAmount: 364.74,
          unitAmount: 364.74,
          unitQuantity: 1,
        },
        {
          id: "7724687e-416c-4531-948c-54287971dc0a",
          itemName: "Client dinner",
          taxAmount: 0,
          totalAmount: 258.35,
          unitAmount: 258.35,
          unitQuantity: 1,
        },
        {
          id: "8d8e637e-ecb6-442e-ae46-8b03ed0aa2e1",
          itemName: "Conference ticket",
          notes: "Casus umquam conicio cinis demitto sint.",
          taxAmount: 0,
          totalAmount: 28.14,
          unitAmount: 28.14,
          unitQuantity: 1,
        },
        {
          id: "84942bcb-268c-4a7f-bbbe-9e352055c4c6",
          itemName: "Hotel",
          taxAmount: 0,
          totalAmount: 157.04,
          unitAmount: 157.04,
          unitQuantity: 1,
        },
        {
          id: "e946bcf2-ea58-4366-b845-901e678da8d1",
          itemName: "Hotel",
          taxAmount: 0,
          totalAmount: 164.02,
          unitAmount: 164.02,
          unitQuantity: 1,
        },
      ],
      metadata: [],
      name: "A payment of XPF 714.84 occurred at Bins, Barrows and Koch using a card ending in ****8422 for account ***4614.",
      paymentMethod: "CASH",
      postedAt: new Date("2020-06-11T03:39:37.305Z"),
      status: "SUBMITTED",
      taxAmount: 0,
      totalAmount: 972.29,
      type: "COMPANY",
      updatedAt: new Date("2020-09-02T21:02:08.175Z"),
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
import { accountingCreateAccountingExpense } from "@unified-api/typescript-sdk/funcs/accountingCreateAccountingExpense.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingCreateAccountingExpense(unifiedTo, {
    accountingExpense: {
      attachments: [
        {
          downloadUrl: "https://rubbery-couch.biz/",
          id: "09ef69ea-86ec-4959-8358-be8cdd0970a6",
          mimeType: "application/pdf",
          name: "receipt-9696.pdf",
        },
        {
          downloadUrl: "https://appropriate-smog.biz/",
          id: "f3c08c78-d690-42ba-bb6e-e0feda60e4c5",
          mimeType: "application/pdf",
          name: "receipt-9696-1.pdf",
        },
      ],
      categoryIds: [],
      createdAt: new Date("2020-06-11T03:39:37.305Z"),
      currency: "GBP",
      externalNumber: "EXP-38303",
      id: "c737fff9-6765-4f73-b9ae-6a5227444a85",
      lineitems: [
        {
          id: "d865edae-9ac6-44b3-8b52-f1ec70dba8bb",
          itemName: "Client dinner",
          taxAmount: 0,
          totalAmount: 364.74,
          unitAmount: 364.74,
          unitQuantity: 1,
        },
        {
          id: "7724687e-416c-4531-948c-54287971dc0a",
          itemName: "Client dinner",
          taxAmount: 0,
          totalAmount: 258.35,
          unitAmount: 258.35,
          unitQuantity: 1,
        },
        {
          id: "8d8e637e-ecb6-442e-ae46-8b03ed0aa2e1",
          itemName: "Conference ticket",
          notes: "Casus umquam conicio cinis demitto sint.",
          taxAmount: 0,
          totalAmount: 28.14,
          unitAmount: 28.14,
          unitQuantity: 1,
        },
        {
          id: "84942bcb-268c-4a7f-bbbe-9e352055c4c6",
          itemName: "Hotel",
          taxAmount: 0,
          totalAmount: 157.04,
          unitAmount: 157.04,
          unitQuantity: 1,
        },
        {
          id: "e946bcf2-ea58-4366-b845-901e678da8d1",
          itemName: "Hotel",
          taxAmount: 0,
          totalAmount: 164.02,
          unitAmount: 164.02,
          unitQuantity: 1,
        },
      ],
      metadata: [],
      name: "A payment of XPF 714.84 occurred at Bins, Barrows and Koch using a card ending in ****8422 for account ***4614.",
      paymentMethod: "CASH",
      postedAt: new Date("2020-06-11T03:39:37.305Z"),
      status: "SUBMITTED",
      taxAmount: 0,
      totalAmount: 972.29,
      type: "COMPANY",
      updatedAt: new Date("2020-09-02T21:02:08.175Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingCreateAccountingExpense failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateAccountingExpenseRequest](../../sdk/models/operations/createaccountingexpenserequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingExpense](../../sdk/models/shared/accountingexpense.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createLegalExpense

Creates a LegalExpense. Provide the unified LegalExpense fields in the request body; they are mapped to the provider's API. Returns the created LegalExpense.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createLegalExpense" method="post" path="/legal/{connection_id}/expense" example="legal_expense" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.expense.createLegalExpense({
    legalExpense: {
      category: "Kids",
      createdAt: new Date("2020-11-08T00:41:42.356Z"),
      currency: "MVR",
      description: "Temporibus agnitio sui.",
      id: "2c573181-cd3b-4afb-97e2-6ccb117d9bfb",
      incurredAt: new Date("2020-11-08T00:41:42.356Z"),
      isBilled: false,
      metadata: [],
      priceAmount: 100,
      quantity: 3,
      totalAmount: 300,
      type: "OTHER",
      updatedAt: new Date("2024-04-09T02:20:26.510Z"),
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
import { expenseCreateLegalExpense } from "@unified-api/typescript-sdk/funcs/expenseCreateLegalExpense.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await expenseCreateLegalExpense(unifiedTo, {
    legalExpense: {
      category: "Kids",
      createdAt: new Date("2020-11-08T00:41:42.356Z"),
      currency: "MVR",
      description: "Temporibus agnitio sui.",
      id: "2c573181-cd3b-4afb-97e2-6ccb117d9bfb",
      incurredAt: new Date("2020-11-08T00:41:42.356Z"),
      isBilled: false,
      metadata: [],
      priceAmount: 100,
      quantity: 3,
      totalAmount: 300,
      type: "OTHER",
      updatedAt: new Date("2024-04-09T02:20:26.510Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("expenseCreateLegalExpense failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateLegalExpenseRequest](../../sdk/models/operations/createlegalexpenserequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LegalExpense](../../sdk/models/shared/legalexpense.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getAccountingExpense

Retrieves a single AccountingExpense by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAccountingExpense" method="get" path="/accounting/{connection_id}/expense/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.expense.getAccountingExpense({
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
import { accountingGetAccountingExpense } from "@unified-api/typescript-sdk/funcs/accountingGetAccountingExpense.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingGetAccountingExpense(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingGetAccountingExpense failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAccountingExpenseRequest](../../sdk/models/operations/getaccountingexpenserequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingExpense](../../sdk/models/shared/accountingexpense.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getLegalExpense

Retrieves a single LegalExpense by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getLegalExpense" method="get" path="/legal/{connection_id}/expense/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.expense.getLegalExpense({
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
import { expenseGetLegalExpense } from "@unified-api/typescript-sdk/funcs/expenseGetLegalExpense.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await expenseGetLegalExpense(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("expenseGetLegalExpense failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetLegalExpenseRequest](../../sdk/models/operations/getlegalexpenserequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LegalExpense](../../sdk/models/shared/legalexpense.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listAccountingExpenses

Returns a list of AccountingExpenses. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listAccountingExpenses" method="get" path="/accounting/{connection_id}/expense" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.expense.listAccountingExpenses({
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
import { accountingListAccountingExpenses } from "@unified-api/typescript-sdk/funcs/accountingListAccountingExpenses.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingListAccountingExpenses(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingListAccountingExpenses failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAccountingExpensesRequest](../../sdk/models/operations/listaccountingexpensesrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingExpense[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listLegalExpenses

Returns a list of LegalExpenses. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listLegalExpenses" method="get" path="/legal/{connection_id}/expense" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.expense.listLegalExpenses({
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
import { expenseListLegalExpenses } from "@unified-api/typescript-sdk/funcs/expenseListLegalExpenses.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await expenseListLegalExpenses(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("expenseListLegalExpenses failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListLegalExpensesRequest](../../sdk/models/operations/listlegalexpensesrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LegalExpense[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchAccountingExpense

Updates the AccountingExpense identified by `id`. Provide the unified AccountingExpense fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchAccountingExpense" method="patch" path="/accounting/{connection_id}/expense/{id}" example="accounting_expense" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.expense.patchAccountingExpense({
    accountingExpense: {
      attachments: [
        {
          downloadUrl: "https://rubbery-couch.biz/",
          id: "ba4bc4be-625c-44a1-8258-80551b2b94e8",
          mimeType: "application/pdf",
          name: "receipt-9696.pdf",
        },
        {
          downloadUrl: "https://appropriate-smog.biz/",
          id: "c6fcf0f3-472d-4363-a2ef-54c4cd69bae9",
          mimeType: "application/pdf",
          name: "receipt-9696-1.pdf",
        },
      ],
      categoryIds: [],
      createdAt: new Date("2020-06-11T03:39:37.305Z"),
      currency: "GBP",
      externalNumber: "EXP-38303",
      id: "bfef77b3-aebc-4447-89e4-de414ed5546b",
      lineitems: [
        {
          id: "5fc1d7f9-6c69-4d09-8d26-cb0b81e30781",
          itemName: "Client dinner",
          taxAmount: 0,
          totalAmount: 364.74,
          unitAmount: 364.74,
          unitQuantity: 1,
        },
        {
          id: "e535e4b2-8800-4a3c-86b4-ceb153c38052",
          itemName: "Client dinner",
          taxAmount: 0,
          totalAmount: 258.35,
          unitAmount: 258.35,
          unitQuantity: 1,
        },
        {
          id: "8bca3042-5fac-428e-9341-32c1e16d7207",
          itemName: "Conference ticket",
          notes: "Casus umquam conicio cinis demitto sint.",
          taxAmount: 0,
          totalAmount: 28.14,
          unitAmount: 28.14,
          unitQuantity: 1,
        },
        {
          id: "3ef87022-dc10-422b-8beb-0e279e40ef94",
          itemName: "Hotel",
          taxAmount: 0,
          totalAmount: 157.04,
          unitAmount: 157.04,
          unitQuantity: 1,
        },
        {
          id: "9ab1f266-5956-4694-90a6-107a333fea6e",
          itemName: "Hotel",
          taxAmount: 0,
          totalAmount: 164.02,
          unitAmount: 164.02,
          unitQuantity: 1,
        },
      ],
      metadata: [],
      name: "A payment of XPF 714.84 occurred at Bins, Barrows and Koch using a card ending in ****8422 for account ***4614.",
      paymentMethod: "CASH",
      postedAt: new Date("2020-06-11T03:39:37.305Z"),
      status: "SUBMITTED",
      taxAmount: 0,
      totalAmount: 972.29,
      type: "COMPANY",
      updatedAt: new Date("2020-09-02T21:02:08.176Z"),
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
import { accountingPatchAccountingExpense } from "@unified-api/typescript-sdk/funcs/accountingPatchAccountingExpense.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingPatchAccountingExpense(unifiedTo, {
    accountingExpense: {
      attachments: [
        {
          downloadUrl: "https://rubbery-couch.biz/",
          id: "ba4bc4be-625c-44a1-8258-80551b2b94e8",
          mimeType: "application/pdf",
          name: "receipt-9696.pdf",
        },
        {
          downloadUrl: "https://appropriate-smog.biz/",
          id: "c6fcf0f3-472d-4363-a2ef-54c4cd69bae9",
          mimeType: "application/pdf",
          name: "receipt-9696-1.pdf",
        },
      ],
      categoryIds: [],
      createdAt: new Date("2020-06-11T03:39:37.305Z"),
      currency: "GBP",
      externalNumber: "EXP-38303",
      id: "bfef77b3-aebc-4447-89e4-de414ed5546b",
      lineitems: [
        {
          id: "5fc1d7f9-6c69-4d09-8d26-cb0b81e30781",
          itemName: "Client dinner",
          taxAmount: 0,
          totalAmount: 364.74,
          unitAmount: 364.74,
          unitQuantity: 1,
        },
        {
          id: "e535e4b2-8800-4a3c-86b4-ceb153c38052",
          itemName: "Client dinner",
          taxAmount: 0,
          totalAmount: 258.35,
          unitAmount: 258.35,
          unitQuantity: 1,
        },
        {
          id: "8bca3042-5fac-428e-9341-32c1e16d7207",
          itemName: "Conference ticket",
          notes: "Casus umquam conicio cinis demitto sint.",
          taxAmount: 0,
          totalAmount: 28.14,
          unitAmount: 28.14,
          unitQuantity: 1,
        },
        {
          id: "3ef87022-dc10-422b-8beb-0e279e40ef94",
          itemName: "Hotel",
          taxAmount: 0,
          totalAmount: 157.04,
          unitAmount: 157.04,
          unitQuantity: 1,
        },
        {
          id: "9ab1f266-5956-4694-90a6-107a333fea6e",
          itemName: "Hotel",
          taxAmount: 0,
          totalAmount: 164.02,
          unitAmount: 164.02,
          unitQuantity: 1,
        },
      ],
      metadata: [],
      name: "A payment of XPF 714.84 occurred at Bins, Barrows and Koch using a card ending in ****8422 for account ***4614.",
      paymentMethod: "CASH",
      postedAt: new Date("2020-06-11T03:39:37.305Z"),
      status: "SUBMITTED",
      taxAmount: 0,
      totalAmount: 972.29,
      type: "COMPANY",
      updatedAt: new Date("2020-09-02T21:02:08.176Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingPatchAccountingExpense failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchAccountingExpenseRequest](../../sdk/models/operations/patchaccountingexpenserequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingExpense](../../sdk/models/shared/accountingexpense.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchLegalExpense

Updates the LegalExpense identified by `id`. Provide the unified LegalExpense fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchLegalExpense" method="patch" path="/legal/{connection_id}/expense/{id}" example="legal_expense" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.expense.patchLegalExpense({
    legalExpense: {
      category: "Kids",
      createdAt: new Date("2020-11-08T00:41:42.356Z"),
      currency: "MVR",
      description: "Temporibus agnitio sui.",
      id: "fc41cabd-a022-4e58-ab9b-3d0af6a2bad3",
      incurredAt: new Date("2020-11-08T00:41:42.356Z"),
      isBilled: false,
      metadata: [],
      priceAmount: 100,
      quantity: 3,
      totalAmount: 300,
      type: "OTHER",
      updatedAt: new Date("2024-04-09T02:20:26.518Z"),
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
import { expensePatchLegalExpense } from "@unified-api/typescript-sdk/funcs/expensePatchLegalExpense.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await expensePatchLegalExpense(unifiedTo, {
    legalExpense: {
      category: "Kids",
      createdAt: new Date("2020-11-08T00:41:42.356Z"),
      currency: "MVR",
      description: "Temporibus agnitio sui.",
      id: "fc41cabd-a022-4e58-ab9b-3d0af6a2bad3",
      incurredAt: new Date("2020-11-08T00:41:42.356Z"),
      isBilled: false,
      metadata: [],
      priceAmount: 100,
      quantity: 3,
      totalAmount: 300,
      type: "OTHER",
      updatedAt: new Date("2024-04-09T02:20:26.518Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("expensePatchLegalExpense failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchLegalExpenseRequest](../../sdk/models/operations/patchlegalexpenserequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LegalExpense](../../sdk/models/shared/legalexpense.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeAccountingExpense

Deletes the AccountingExpense identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeAccountingExpense" method="delete" path="/accounting/{connection_id}/expense/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.expense.removeAccountingExpense({
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
import { accountingRemoveAccountingExpense } from "@unified-api/typescript-sdk/funcs/accountingRemoveAccountingExpense.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingRemoveAccountingExpense(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingRemoveAccountingExpense failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveAccountingExpenseRequest](../../sdk/models/operations/removeaccountingexpenserequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveAccountingExpenseResponse](../../sdk/models/operations/removeaccountingexpenseresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeLegalExpense

Deletes the LegalExpense identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeLegalExpense" method="delete" path="/legal/{connection_id}/expense/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.expense.removeLegalExpense({
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
import { expenseRemoveLegalExpense } from "@unified-api/typescript-sdk/funcs/expenseRemoveLegalExpense.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await expenseRemoveLegalExpense(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("expenseRemoveLegalExpense failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveLegalExpenseRequest](../../sdk/models/operations/removelegalexpenserequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveLegalExpenseResponse](../../sdk/models/operations/removelegalexpenseresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateAccountingExpense

Updates the AccountingExpense identified by `id`. Provide the unified AccountingExpense fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateAccountingExpense" method="put" path="/accounting/{connection_id}/expense/{id}" example="accounting_expense" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.expense.updateAccountingExpense({
    accountingExpense: {
      attachments: [
        {
          downloadUrl: "https://rubbery-couch.biz/",
          id: "ba4bc4be-625c-44a1-8258-80551b2b94e8",
          mimeType: "application/pdf",
          name: "receipt-9696.pdf",
        },
        {
          downloadUrl: "https://appropriate-smog.biz/",
          id: "c6fcf0f3-472d-4363-a2ef-54c4cd69bae9",
          mimeType: "application/pdf",
          name: "receipt-9696-1.pdf",
        },
      ],
      categoryIds: [],
      createdAt: new Date("2020-06-11T03:39:37.305Z"),
      currency: "GBP",
      externalNumber: "EXP-38303",
      id: "bfef77b3-aebc-4447-89e4-de414ed5546b",
      lineitems: [
        {
          id: "5fc1d7f9-6c69-4d09-8d26-cb0b81e30781",
          itemName: "Client dinner",
          taxAmount: 0,
          totalAmount: 364.74,
          unitAmount: 364.74,
          unitQuantity: 1,
        },
        {
          id: "e535e4b2-8800-4a3c-86b4-ceb153c38052",
          itemName: "Client dinner",
          taxAmount: 0,
          totalAmount: 258.35,
          unitAmount: 258.35,
          unitQuantity: 1,
        },
        {
          id: "8bca3042-5fac-428e-9341-32c1e16d7207",
          itemName: "Conference ticket",
          notes: "Casus umquam conicio cinis demitto sint.",
          taxAmount: 0,
          totalAmount: 28.14,
          unitAmount: 28.14,
          unitQuantity: 1,
        },
        {
          id: "3ef87022-dc10-422b-8beb-0e279e40ef94",
          itemName: "Hotel",
          taxAmount: 0,
          totalAmount: 157.04,
          unitAmount: 157.04,
          unitQuantity: 1,
        },
        {
          id: "9ab1f266-5956-4694-90a6-107a333fea6e",
          itemName: "Hotel",
          taxAmount: 0,
          totalAmount: 164.02,
          unitAmount: 164.02,
          unitQuantity: 1,
        },
      ],
      metadata: [],
      name: "A payment of XPF 714.84 occurred at Bins, Barrows and Koch using a card ending in ****8422 for account ***4614.",
      paymentMethod: "CASH",
      postedAt: new Date("2020-06-11T03:39:37.305Z"),
      status: "SUBMITTED",
      taxAmount: 0,
      totalAmount: 972.29,
      type: "COMPANY",
      updatedAt: new Date("2020-09-02T21:02:08.176Z"),
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
import { accountingUpdateAccountingExpense } from "@unified-api/typescript-sdk/funcs/accountingUpdateAccountingExpense.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingUpdateAccountingExpense(unifiedTo, {
    accountingExpense: {
      attachments: [
        {
          downloadUrl: "https://rubbery-couch.biz/",
          id: "ba4bc4be-625c-44a1-8258-80551b2b94e8",
          mimeType: "application/pdf",
          name: "receipt-9696.pdf",
        },
        {
          downloadUrl: "https://appropriate-smog.biz/",
          id: "c6fcf0f3-472d-4363-a2ef-54c4cd69bae9",
          mimeType: "application/pdf",
          name: "receipt-9696-1.pdf",
        },
      ],
      categoryIds: [],
      createdAt: new Date("2020-06-11T03:39:37.305Z"),
      currency: "GBP",
      externalNumber: "EXP-38303",
      id: "bfef77b3-aebc-4447-89e4-de414ed5546b",
      lineitems: [
        {
          id: "5fc1d7f9-6c69-4d09-8d26-cb0b81e30781",
          itemName: "Client dinner",
          taxAmount: 0,
          totalAmount: 364.74,
          unitAmount: 364.74,
          unitQuantity: 1,
        },
        {
          id: "e535e4b2-8800-4a3c-86b4-ceb153c38052",
          itemName: "Client dinner",
          taxAmount: 0,
          totalAmount: 258.35,
          unitAmount: 258.35,
          unitQuantity: 1,
        },
        {
          id: "8bca3042-5fac-428e-9341-32c1e16d7207",
          itemName: "Conference ticket",
          notes: "Casus umquam conicio cinis demitto sint.",
          taxAmount: 0,
          totalAmount: 28.14,
          unitAmount: 28.14,
          unitQuantity: 1,
        },
        {
          id: "3ef87022-dc10-422b-8beb-0e279e40ef94",
          itemName: "Hotel",
          taxAmount: 0,
          totalAmount: 157.04,
          unitAmount: 157.04,
          unitQuantity: 1,
        },
        {
          id: "9ab1f266-5956-4694-90a6-107a333fea6e",
          itemName: "Hotel",
          taxAmount: 0,
          totalAmount: 164.02,
          unitAmount: 164.02,
          unitQuantity: 1,
        },
      ],
      metadata: [],
      name: "A payment of XPF 714.84 occurred at Bins, Barrows and Koch using a card ending in ****8422 for account ***4614.",
      paymentMethod: "CASH",
      postedAt: new Date("2020-06-11T03:39:37.305Z"),
      status: "SUBMITTED",
      taxAmount: 0,
      totalAmount: 972.29,
      type: "COMPANY",
      updatedAt: new Date("2020-09-02T21:02:08.176Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingUpdateAccountingExpense failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateAccountingExpenseRequest](../../sdk/models/operations/updateaccountingexpenserequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingExpense](../../sdk/models/shared/accountingexpense.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateLegalExpense

Updates the LegalExpense identified by `id`. Provide the unified LegalExpense fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateLegalExpense" method="put" path="/legal/{connection_id}/expense/{id}" example="legal_expense" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.expense.updateLegalExpense({
    legalExpense: {
      category: "Kids",
      createdAt: new Date("2020-11-08T00:41:42.356Z"),
      currency: "MVR",
      description: "Temporibus agnitio sui.",
      id: "fc41cabd-a022-4e58-ab9b-3d0af6a2bad3",
      incurredAt: new Date("2020-11-08T00:41:42.356Z"),
      isBilled: false,
      metadata: [],
      priceAmount: 100,
      quantity: 3,
      totalAmount: 300,
      type: "OTHER",
      updatedAt: new Date("2024-04-09T02:20:26.518Z"),
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
import { expenseUpdateLegalExpense } from "@unified-api/typescript-sdk/funcs/expenseUpdateLegalExpense.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await expenseUpdateLegalExpense(unifiedTo, {
    legalExpense: {
      category: "Kids",
      createdAt: new Date("2020-11-08T00:41:42.356Z"),
      currency: "MVR",
      description: "Temporibus agnitio sui.",
      id: "fc41cabd-a022-4e58-ab9b-3d0af6a2bad3",
      incurredAt: new Date("2020-11-08T00:41:42.356Z"),
      isBilled: false,
      metadata: [],
      priceAmount: 100,
      quantity: 3,
      totalAmount: 300,
      type: "OTHER",
      updatedAt: new Date("2024-04-09T02:20:26.518Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("expenseUpdateLegalExpense failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateLegalExpenseRequest](../../sdk/models/operations/updatelegalexpenserequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.LegalExpense](../../sdk/models/shared/legalexpense.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |