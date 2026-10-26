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
          id: "4c33290b-2551-4e03-9788-2247aee49cdd",
          mimeType: "application/pdf",
          name: "receipt-9696.pdf",
        },
        {
          downloadUrl: "https://appropriate-smog.biz/",
          id: "2700584f-407e-4e33-9b2e-81745f4562ef",
          mimeType: "application/pdf",
          name: "receipt-9696-1.pdf",
        },
      ],
      categoryIds: [],
      createdAt: new Date("2020-06-11T03:39:37.305Z"),
      currency: "GBP",
      externalNumber: "EXP-38303",
      id: "13120de1-351c-476b-bbd7-2ed2ec8520cd",
      lineitems: [
        {
          id: "2ab6c8cf-5e8d-4380-a360-82923bdb2098",
          itemName: "Client dinner",
          taxAmount: 0,
          totalAmount: 364.74,
          unitAmount: 364.74,
          unitQuantity: 1,
        },
        {
          id: "51b38e0a-6b0c-489a-aa16-c0613fcb132c",
          itemName: "Client dinner",
          taxAmount: 0,
          totalAmount: 258.35,
          unitAmount: 258.35,
          unitQuantity: 1,
        },
        {
          id: "f2a1d64e-e029-4fc6-ae96-a69a8f87cf5e",
          itemName: "Conference ticket",
          notes: "Casus umquam conicio cinis demitto sint.",
          taxAmount: 0,
          totalAmount: 28.14,
          unitAmount: 28.14,
          unitQuantity: 1,
        },
        {
          id: "7c356681-f505-44b3-80cd-949ce9c385a4",
          itemName: "Hotel",
          taxAmount: 0,
          totalAmount: 157.04,
          unitAmount: 157.04,
          unitQuantity: 1,
        },
        {
          id: "be4bd6b7-7d31-4916-8941-dd46dd063500",
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
      updatedAt: new Date("2020-09-02T11:36:03.986Z"),
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
          id: "4c33290b-2551-4e03-9788-2247aee49cdd",
          mimeType: "application/pdf",
          name: "receipt-9696.pdf",
        },
        {
          downloadUrl: "https://appropriate-smog.biz/",
          id: "2700584f-407e-4e33-9b2e-81745f4562ef",
          mimeType: "application/pdf",
          name: "receipt-9696-1.pdf",
        },
      ],
      categoryIds: [],
      createdAt: new Date("2020-06-11T03:39:37.305Z"),
      currency: "GBP",
      externalNumber: "EXP-38303",
      id: "13120de1-351c-476b-bbd7-2ed2ec8520cd",
      lineitems: [
        {
          id: "2ab6c8cf-5e8d-4380-a360-82923bdb2098",
          itemName: "Client dinner",
          taxAmount: 0,
          totalAmount: 364.74,
          unitAmount: 364.74,
          unitQuantity: 1,
        },
        {
          id: "51b38e0a-6b0c-489a-aa16-c0613fcb132c",
          itemName: "Client dinner",
          taxAmount: 0,
          totalAmount: 258.35,
          unitAmount: 258.35,
          unitQuantity: 1,
        },
        {
          id: "f2a1d64e-e029-4fc6-ae96-a69a8f87cf5e",
          itemName: "Conference ticket",
          notes: "Casus umquam conicio cinis demitto sint.",
          taxAmount: 0,
          totalAmount: 28.14,
          unitAmount: 28.14,
          unitQuantity: 1,
        },
        {
          id: "7c356681-f505-44b3-80cd-949ce9c385a4",
          itemName: "Hotel",
          taxAmount: 0,
          totalAmount: 157.04,
          unitAmount: 157.04,
          unitQuantity: 1,
        },
        {
          id: "be4bd6b7-7d31-4916-8941-dd46dd063500",
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
      updatedAt: new Date("2020-09-02T11:36:03.986Z"),
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
      id: "03e864c6-9870-43b2-a8a1-7e716aa0e7bb",
      incurredAt: new Date("2020-11-08T00:41:42.356Z"),
      isBilled: false,
      metadata: [],
      priceAmount: 100,
      quantity: 3,
      totalAmount: 300,
      type: "OTHER",
      updatedAt: new Date("2024-04-02T20:04:18.248Z"),
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
      id: "03e864c6-9870-43b2-a8a1-7e716aa0e7bb",
      incurredAt: new Date("2020-11-08T00:41:42.356Z"),
      isBilled: false,
      metadata: [],
      priceAmount: 100,
      quantity: 3,
      totalAmount: 300,
      type: "OTHER",
      updatedAt: new Date("2024-04-02T20:04:18.248Z"),
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
          id: "5dca9220-c9f5-4384-a70e-e535f1e63fbc",
          mimeType: "application/pdf",
          name: "receipt-9696.pdf",
        },
        {
          downloadUrl: "https://appropriate-smog.biz/",
          id: "95b3621f-4e8e-4f66-9deb-a542c9a930ee",
          mimeType: "application/pdf",
          name: "receipt-9696-1.pdf",
        },
      ],
      categoryIds: [],
      createdAt: new Date("2020-06-11T03:39:37.305Z"),
      currency: "GBP",
      externalNumber: "EXP-38303",
      id: "a723744a-05b6-431f-a350-883c2cd60586",
      lineitems: [
        {
          id: "fd8cd292-6396-47b9-988e-165ae25e4dd7",
          itemName: "Client dinner",
          taxAmount: 0,
          totalAmount: 364.74,
          unitAmount: 364.74,
          unitQuantity: 1,
        },
        {
          id: "ee2128dd-864c-430b-b71f-143c5c787141",
          itemName: "Client dinner",
          taxAmount: 0,
          totalAmount: 258.35,
          unitAmount: 258.35,
          unitQuantity: 1,
        },
        {
          id: "cbb751fa-06a7-469d-bde0-8ea0a6ece2e8",
          itemName: "Conference ticket",
          notes: "Casus umquam conicio cinis demitto sint.",
          taxAmount: 0,
          totalAmount: 28.14,
          unitAmount: 28.14,
          unitQuantity: 1,
        },
        {
          id: "e5472ef0-ab26-45e3-9fa7-0252e9827cfb",
          itemName: "Hotel",
          taxAmount: 0,
          totalAmount: 157.04,
          unitAmount: 157.04,
          unitQuantity: 1,
        },
        {
          id: "647ff3f6-c682-4924-997f-50ea33377e4b",
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
      updatedAt: new Date("2020-09-02T11:36:03.988Z"),
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
          id: "5dca9220-c9f5-4384-a70e-e535f1e63fbc",
          mimeType: "application/pdf",
          name: "receipt-9696.pdf",
        },
        {
          downloadUrl: "https://appropriate-smog.biz/",
          id: "95b3621f-4e8e-4f66-9deb-a542c9a930ee",
          mimeType: "application/pdf",
          name: "receipt-9696-1.pdf",
        },
      ],
      categoryIds: [],
      createdAt: new Date("2020-06-11T03:39:37.305Z"),
      currency: "GBP",
      externalNumber: "EXP-38303",
      id: "a723744a-05b6-431f-a350-883c2cd60586",
      lineitems: [
        {
          id: "fd8cd292-6396-47b9-988e-165ae25e4dd7",
          itemName: "Client dinner",
          taxAmount: 0,
          totalAmount: 364.74,
          unitAmount: 364.74,
          unitQuantity: 1,
        },
        {
          id: "ee2128dd-864c-430b-b71f-143c5c787141",
          itemName: "Client dinner",
          taxAmount: 0,
          totalAmount: 258.35,
          unitAmount: 258.35,
          unitQuantity: 1,
        },
        {
          id: "cbb751fa-06a7-469d-bde0-8ea0a6ece2e8",
          itemName: "Conference ticket",
          notes: "Casus umquam conicio cinis demitto sint.",
          taxAmount: 0,
          totalAmount: 28.14,
          unitAmount: 28.14,
          unitQuantity: 1,
        },
        {
          id: "e5472ef0-ab26-45e3-9fa7-0252e9827cfb",
          itemName: "Hotel",
          taxAmount: 0,
          totalAmount: 157.04,
          unitAmount: 157.04,
          unitQuantity: 1,
        },
        {
          id: "647ff3f6-c682-4924-997f-50ea33377e4b",
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
      updatedAt: new Date("2020-09-02T11:36:03.988Z"),
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
      id: "84461036-4983-4e4f-9a2d-020fa493171c",
      incurredAt: new Date("2020-11-08T00:41:42.356Z"),
      isBilled: false,
      metadata: [],
      priceAmount: 100,
      quantity: 3,
      totalAmount: 300,
      type: "OTHER",
      updatedAt: new Date("2024-04-02T20:04:18.256Z"),
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
      id: "84461036-4983-4e4f-9a2d-020fa493171c",
      incurredAt: new Date("2020-11-08T00:41:42.356Z"),
      isBilled: false,
      metadata: [],
      priceAmount: 100,
      quantity: 3,
      totalAmount: 300,
      type: "OTHER",
      updatedAt: new Date("2024-04-02T20:04:18.256Z"),
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
          id: "5dca9220-c9f5-4384-a70e-e535f1e63fbc",
          mimeType: "application/pdf",
          name: "receipt-9696.pdf",
        },
        {
          downloadUrl: "https://appropriate-smog.biz/",
          id: "95b3621f-4e8e-4f66-9deb-a542c9a930ee",
          mimeType: "application/pdf",
          name: "receipt-9696-1.pdf",
        },
      ],
      categoryIds: [],
      createdAt: new Date("2020-06-11T03:39:37.305Z"),
      currency: "GBP",
      externalNumber: "EXP-38303",
      id: "a723744a-05b6-431f-a350-883c2cd60586",
      lineitems: [
        {
          id: "fd8cd292-6396-47b9-988e-165ae25e4dd7",
          itemName: "Client dinner",
          taxAmount: 0,
          totalAmount: 364.74,
          unitAmount: 364.74,
          unitQuantity: 1,
        },
        {
          id: "ee2128dd-864c-430b-b71f-143c5c787141",
          itemName: "Client dinner",
          taxAmount: 0,
          totalAmount: 258.35,
          unitAmount: 258.35,
          unitQuantity: 1,
        },
        {
          id: "cbb751fa-06a7-469d-bde0-8ea0a6ece2e8",
          itemName: "Conference ticket",
          notes: "Casus umquam conicio cinis demitto sint.",
          taxAmount: 0,
          totalAmount: 28.14,
          unitAmount: 28.14,
          unitQuantity: 1,
        },
        {
          id: "e5472ef0-ab26-45e3-9fa7-0252e9827cfb",
          itemName: "Hotel",
          taxAmount: 0,
          totalAmount: 157.04,
          unitAmount: 157.04,
          unitQuantity: 1,
        },
        {
          id: "647ff3f6-c682-4924-997f-50ea33377e4b",
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
      updatedAt: new Date("2020-09-02T11:36:03.988Z"),
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
          id: "5dca9220-c9f5-4384-a70e-e535f1e63fbc",
          mimeType: "application/pdf",
          name: "receipt-9696.pdf",
        },
        {
          downloadUrl: "https://appropriate-smog.biz/",
          id: "95b3621f-4e8e-4f66-9deb-a542c9a930ee",
          mimeType: "application/pdf",
          name: "receipt-9696-1.pdf",
        },
      ],
      categoryIds: [],
      createdAt: new Date("2020-06-11T03:39:37.305Z"),
      currency: "GBP",
      externalNumber: "EXP-38303",
      id: "a723744a-05b6-431f-a350-883c2cd60586",
      lineitems: [
        {
          id: "fd8cd292-6396-47b9-988e-165ae25e4dd7",
          itemName: "Client dinner",
          taxAmount: 0,
          totalAmount: 364.74,
          unitAmount: 364.74,
          unitQuantity: 1,
        },
        {
          id: "ee2128dd-864c-430b-b71f-143c5c787141",
          itemName: "Client dinner",
          taxAmount: 0,
          totalAmount: 258.35,
          unitAmount: 258.35,
          unitQuantity: 1,
        },
        {
          id: "cbb751fa-06a7-469d-bde0-8ea0a6ece2e8",
          itemName: "Conference ticket",
          notes: "Casus umquam conicio cinis demitto sint.",
          taxAmount: 0,
          totalAmount: 28.14,
          unitAmount: 28.14,
          unitQuantity: 1,
        },
        {
          id: "e5472ef0-ab26-45e3-9fa7-0252e9827cfb",
          itemName: "Hotel",
          taxAmount: 0,
          totalAmount: 157.04,
          unitAmount: 157.04,
          unitQuantity: 1,
        },
        {
          id: "647ff3f6-c682-4924-997f-50ea33377e4b",
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
      updatedAt: new Date("2020-09-02T11:36:03.988Z"),
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
      id: "84461036-4983-4e4f-9a2d-020fa493171c",
      incurredAt: new Date("2020-11-08T00:41:42.356Z"),
      isBilled: false,
      metadata: [],
      priceAmount: 100,
      quantity: 3,
      totalAmount: 300,
      type: "OTHER",
      updatedAt: new Date("2024-04-02T20:04:18.256Z"),
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
      id: "84461036-4983-4e4f-9a2d-020fa493171c",
      incurredAt: new Date("2020-11-08T00:41:42.356Z"),
      isBilled: false,
      metadata: [],
      priceAmount: 100,
      quantity: 3,
      totalAmount: 300,
      type: "OTHER",
      updatedAt: new Date("2024-04-02T20:04:18.256Z"),
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