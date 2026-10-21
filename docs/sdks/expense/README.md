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

Create an expense

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
          id: "5385bee4-22ed-480e-bd34-ebdbda0540f5",
          mimeType: "application/pdf",
          name: "receipt-9696.pdf",
        },
        {
          downloadUrl: "https://appropriate-smog.biz/",
          id: "f1166735-eeed-45c6-857a-146bc375faf5",
          mimeType: "application/pdf",
          name: "receipt-9696-1.pdf",
        },
      ],
      categoryIds: [],
      createdAt: new Date("2020-06-11T03:39:37.305Z"),
      currency: "GBP",
      externalNumber: "EXP-38303",
      id: "86781ed4-1ebc-4056-a7ea-be0b4699c28b",
      lineitems: [
        {
          id: "efb58bee-323b-4e9e-8dab-e80c6dd9ae9e",
          itemName: "Client dinner",
          taxAmount: 0,
          totalAmount: 364.74,
          unitAmount: 364.74,
          unitQuantity: 1,
        },
        {
          id: "5cbd2ee7-41c0-4f0f-9134-2b045ea229f3",
          itemName: "Client dinner",
          taxAmount: 0,
          totalAmount: 258.35,
          unitAmount: 258.35,
          unitQuantity: 1,
        },
        {
          id: "08a8b664-f362-47b7-84a9-5cd0026e20b6",
          itemName: "Conference ticket",
          notes: "Casus umquam conicio cinis demitto sint.",
          taxAmount: 0,
          totalAmount: 28.14,
          unitAmount: 28.14,
          unitQuantity: 1,
        },
        {
          id: "7e85f4bb-ce5a-44b9-a7b4-c83dd6457c1a",
          itemName: "Hotel",
          taxAmount: 0,
          totalAmount: 157.04,
          unitAmount: 157.04,
          unitQuantity: 1,
        },
        {
          id: "7c383768-2b34-4b93-aa24-959667b409cb",
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
      updatedAt: new Date("2020-09-02T07:18:24.229Z"),
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
          id: "5385bee4-22ed-480e-bd34-ebdbda0540f5",
          mimeType: "application/pdf",
          name: "receipt-9696.pdf",
        },
        {
          downloadUrl: "https://appropriate-smog.biz/",
          id: "f1166735-eeed-45c6-857a-146bc375faf5",
          mimeType: "application/pdf",
          name: "receipt-9696-1.pdf",
        },
      ],
      categoryIds: [],
      createdAt: new Date("2020-06-11T03:39:37.305Z"),
      currency: "GBP",
      externalNumber: "EXP-38303",
      id: "86781ed4-1ebc-4056-a7ea-be0b4699c28b",
      lineitems: [
        {
          id: "efb58bee-323b-4e9e-8dab-e80c6dd9ae9e",
          itemName: "Client dinner",
          taxAmount: 0,
          totalAmount: 364.74,
          unitAmount: 364.74,
          unitQuantity: 1,
        },
        {
          id: "5cbd2ee7-41c0-4f0f-9134-2b045ea229f3",
          itemName: "Client dinner",
          taxAmount: 0,
          totalAmount: 258.35,
          unitAmount: 258.35,
          unitQuantity: 1,
        },
        {
          id: "08a8b664-f362-47b7-84a9-5cd0026e20b6",
          itemName: "Conference ticket",
          notes: "Casus umquam conicio cinis demitto sint.",
          taxAmount: 0,
          totalAmount: 28.14,
          unitAmount: 28.14,
          unitQuantity: 1,
        },
        {
          id: "7e85f4bb-ce5a-44b9-a7b4-c83dd6457c1a",
          itemName: "Hotel",
          taxAmount: 0,
          totalAmount: 157.04,
          unitAmount: 157.04,
          unitQuantity: 1,
        },
        {
          id: "7c383768-2b34-4b93-aa24-959667b409cb",
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
      updatedAt: new Date("2020-09-02T07:18:24.229Z"),
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

Create an expense

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
      id: "cefa9fac-bb59-4ea3-9b34-76e523d93c3b",
      incurredAt: new Date("2020-11-08T00:41:42.356Z"),
      isBilled: false,
      metadata: [],
      priceAmount: 100,
      quantity: 3,
      totalAmount: 300,
      type: "OTHER",
      updatedAt: new Date("2024-03-30T23:40:22.107Z"),
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
      id: "cefa9fac-bb59-4ea3-9b34-76e523d93c3b",
      incurredAt: new Date("2020-11-08T00:41:42.356Z"),
      isBilled: false,
      metadata: [],
      priceAmount: 100,
      quantity: 3,
      totalAmount: 300,
      type: "OTHER",
      updatedAt: new Date("2024-03-30T23:40:22.107Z"),
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

Retrieve an expense

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

Retrieve an expense

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

List all expenses

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

List all expenses

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

Update an expense

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
          id: "81a7dae5-8771-4aa2-bcf0-84875bbc2770",
          mimeType: "application/pdf",
          name: "receipt-9696.pdf",
        },
        {
          downloadUrl: "https://appropriate-smog.biz/",
          id: "265d556a-da66-4224-ae17-6b9d80ffe1a7",
          mimeType: "application/pdf",
          name: "receipt-9696-1.pdf",
        },
      ],
      categoryIds: [],
      createdAt: new Date("2020-06-11T03:39:37.305Z"),
      currency: "GBP",
      externalNumber: "EXP-38303",
      id: "ccfbf340-431a-4b33-b4be-25f8e395de3b",
      lineitems: [
        {
          id: "5e0c796a-0815-4019-9447-453810cc1a56",
          itemName: "Client dinner",
          taxAmount: 0,
          totalAmount: 364.74,
          unitAmount: 364.74,
          unitQuantity: 1,
        },
        {
          id: "848125e2-cc30-4ff1-853b-4cd2a8061999",
          itemName: "Client dinner",
          taxAmount: 0,
          totalAmount: 258.35,
          unitAmount: 258.35,
          unitQuantity: 1,
        },
        {
          id: "7f9b26a9-e680-4024-a89c-03a7fdfc6ac8",
          itemName: "Conference ticket",
          notes: "Casus umquam conicio cinis demitto sint.",
          taxAmount: 0,
          totalAmount: 28.14,
          unitAmount: 28.14,
          unitQuantity: 1,
        },
        {
          id: "d2be378b-c80b-424d-88c0-40d37776c01b",
          itemName: "Hotel",
          taxAmount: 0,
          totalAmount: 157.04,
          unitAmount: 157.04,
          unitQuantity: 1,
        },
        {
          id: "4bbe22ac-d68b-4a3c-ae62-694e91f810cb",
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
      updatedAt: new Date("2020-09-02T07:18:24.231Z"),
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
          id: "81a7dae5-8771-4aa2-bcf0-84875bbc2770",
          mimeType: "application/pdf",
          name: "receipt-9696.pdf",
        },
        {
          downloadUrl: "https://appropriate-smog.biz/",
          id: "265d556a-da66-4224-ae17-6b9d80ffe1a7",
          mimeType: "application/pdf",
          name: "receipt-9696-1.pdf",
        },
      ],
      categoryIds: [],
      createdAt: new Date("2020-06-11T03:39:37.305Z"),
      currency: "GBP",
      externalNumber: "EXP-38303",
      id: "ccfbf340-431a-4b33-b4be-25f8e395de3b",
      lineitems: [
        {
          id: "5e0c796a-0815-4019-9447-453810cc1a56",
          itemName: "Client dinner",
          taxAmount: 0,
          totalAmount: 364.74,
          unitAmount: 364.74,
          unitQuantity: 1,
        },
        {
          id: "848125e2-cc30-4ff1-853b-4cd2a8061999",
          itemName: "Client dinner",
          taxAmount: 0,
          totalAmount: 258.35,
          unitAmount: 258.35,
          unitQuantity: 1,
        },
        {
          id: "7f9b26a9-e680-4024-a89c-03a7fdfc6ac8",
          itemName: "Conference ticket",
          notes: "Casus umquam conicio cinis demitto sint.",
          taxAmount: 0,
          totalAmount: 28.14,
          unitAmount: 28.14,
          unitQuantity: 1,
        },
        {
          id: "d2be378b-c80b-424d-88c0-40d37776c01b",
          itemName: "Hotel",
          taxAmount: 0,
          totalAmount: 157.04,
          unitAmount: 157.04,
          unitQuantity: 1,
        },
        {
          id: "4bbe22ac-d68b-4a3c-ae62-694e91f810cb",
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
      updatedAt: new Date("2020-09-02T07:18:24.231Z"),
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

Update an expense

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
      id: "3fc90bf9-2d8b-4448-b0f1-c50cccc341cf",
      incurredAt: new Date("2020-11-08T00:41:42.356Z"),
      isBilled: false,
      metadata: [],
      priceAmount: 100,
      quantity: 3,
      totalAmount: 300,
      type: "OTHER",
      updatedAt: new Date("2024-03-30T23:40:22.116Z"),
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
      id: "3fc90bf9-2d8b-4448-b0f1-c50cccc341cf",
      incurredAt: new Date("2020-11-08T00:41:42.356Z"),
      isBilled: false,
      metadata: [],
      priceAmount: 100,
      quantity: 3,
      totalAmount: 300,
      type: "OTHER",
      updatedAt: new Date("2024-03-30T23:40:22.116Z"),
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

Remove an expense

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

Remove an expense

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

Update an expense

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
          id: "81a7dae5-8771-4aa2-bcf0-84875bbc2770",
          mimeType: "application/pdf",
          name: "receipt-9696.pdf",
        },
        {
          downloadUrl: "https://appropriate-smog.biz/",
          id: "265d556a-da66-4224-ae17-6b9d80ffe1a7",
          mimeType: "application/pdf",
          name: "receipt-9696-1.pdf",
        },
      ],
      categoryIds: [],
      createdAt: new Date("2020-06-11T03:39:37.305Z"),
      currency: "GBP",
      externalNumber: "EXP-38303",
      id: "ccfbf340-431a-4b33-b4be-25f8e395de3b",
      lineitems: [
        {
          id: "5e0c796a-0815-4019-9447-453810cc1a56",
          itemName: "Client dinner",
          taxAmount: 0,
          totalAmount: 364.74,
          unitAmount: 364.74,
          unitQuantity: 1,
        },
        {
          id: "848125e2-cc30-4ff1-853b-4cd2a8061999",
          itemName: "Client dinner",
          taxAmount: 0,
          totalAmount: 258.35,
          unitAmount: 258.35,
          unitQuantity: 1,
        },
        {
          id: "7f9b26a9-e680-4024-a89c-03a7fdfc6ac8",
          itemName: "Conference ticket",
          notes: "Casus umquam conicio cinis demitto sint.",
          taxAmount: 0,
          totalAmount: 28.14,
          unitAmount: 28.14,
          unitQuantity: 1,
        },
        {
          id: "d2be378b-c80b-424d-88c0-40d37776c01b",
          itemName: "Hotel",
          taxAmount: 0,
          totalAmount: 157.04,
          unitAmount: 157.04,
          unitQuantity: 1,
        },
        {
          id: "4bbe22ac-d68b-4a3c-ae62-694e91f810cb",
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
      updatedAt: new Date("2020-09-02T07:18:24.231Z"),
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
          id: "81a7dae5-8771-4aa2-bcf0-84875bbc2770",
          mimeType: "application/pdf",
          name: "receipt-9696.pdf",
        },
        {
          downloadUrl: "https://appropriate-smog.biz/",
          id: "265d556a-da66-4224-ae17-6b9d80ffe1a7",
          mimeType: "application/pdf",
          name: "receipt-9696-1.pdf",
        },
      ],
      categoryIds: [],
      createdAt: new Date("2020-06-11T03:39:37.305Z"),
      currency: "GBP",
      externalNumber: "EXP-38303",
      id: "ccfbf340-431a-4b33-b4be-25f8e395de3b",
      lineitems: [
        {
          id: "5e0c796a-0815-4019-9447-453810cc1a56",
          itemName: "Client dinner",
          taxAmount: 0,
          totalAmount: 364.74,
          unitAmount: 364.74,
          unitQuantity: 1,
        },
        {
          id: "848125e2-cc30-4ff1-853b-4cd2a8061999",
          itemName: "Client dinner",
          taxAmount: 0,
          totalAmount: 258.35,
          unitAmount: 258.35,
          unitQuantity: 1,
        },
        {
          id: "7f9b26a9-e680-4024-a89c-03a7fdfc6ac8",
          itemName: "Conference ticket",
          notes: "Casus umquam conicio cinis demitto sint.",
          taxAmount: 0,
          totalAmount: 28.14,
          unitAmount: 28.14,
          unitQuantity: 1,
        },
        {
          id: "d2be378b-c80b-424d-88c0-40d37776c01b",
          itemName: "Hotel",
          taxAmount: 0,
          totalAmount: 157.04,
          unitAmount: 157.04,
          unitQuantity: 1,
        },
        {
          id: "4bbe22ac-d68b-4a3c-ae62-694e91f810cb",
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
      updatedAt: new Date("2020-09-02T07:18:24.231Z"),
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

Update an expense

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
      id: "3fc90bf9-2d8b-4448-b0f1-c50cccc341cf",
      incurredAt: new Date("2020-11-08T00:41:42.356Z"),
      isBilled: false,
      metadata: [],
      priceAmount: 100,
      quantity: 3,
      totalAmount: 300,
      type: "OTHER",
      updatedAt: new Date("2024-03-30T23:40:22.116Z"),
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
      id: "3fc90bf9-2d8b-4448-b0f1-c50cccc341cf",
      incurredAt: new Date("2020-11-08T00:41:42.356Z"),
      isBilled: false,
      metadata: [],
      priceAmount: 100,
      quantity: 3,
      totalAmount: 300,
      type: "OTHER",
      updatedAt: new Date("2024-03-30T23:40:22.116Z"),
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