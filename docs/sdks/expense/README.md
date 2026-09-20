# Expense

## Overview

### Available Operations

* [createAccountingExpense](#createaccountingexpense) - Create an expense
* [getAccountingExpense](#getaccountingexpense) - Retrieve an expense
* [listAccountingExpenses](#listaccountingexpenses) - List all expenses
* [patchAccountingExpense](#patchaccountingexpense) - Update an expense
* [removeAccountingExpense](#removeaccountingexpense) - Remove an expense
* [updateAccountingExpense](#updateaccountingexpense) - Update an expense

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
      approvedAt: new Date("2026-05-11T00:08:47.017Z"),
      attachments: [
        {
          downloadUrl: "https://ripe-napkin.biz/",
          id: "9e7c9cd9-96ea-4a4a-9d08-db99db03e59c",
          mimeType: "annus",
          name: "cohibeo",
        },
      ],
      categoryIds: [],
      createdAt: new Date("2020-06-11T03:39:37.305Z"),
      currency: "SSP",
      externalNumber: "necessitatibus",
      id: "c34eb515-b181-43c9-963a-fccbe0f2aedd",
      lineitems: [
        {
          id: "0b3b5379-03be-47cd-920a-49a89de4509f",
          itemDescription: "Innovative Table featuring left technology and Rubber construction",
          itemName: "Luxurious Cotton Pizza",
          itemSku: "978-0-8324-6620-5",
          notes: "Degusto conventus defendo valetudo.",
          taxAmount: 2501,
          totalAmount: 168,
          unitAmount: 3059,
          unitQuantity: 1,
        },
      ],
      metadata: [],
      name: "Refined Steel Shoes",
      paymentMethod: "CASH",
      postedAt: new Date("2021-06-04T10:00:04.909Z"),
      reimbursedAmount: 1833,
      status: "SUBMITTED",
      taxAmount: 2602,
      totalAmount: 3580,
      updatedAt: new Date("2026-05-11T00:08:47.017Z"),
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
      approvedAt: new Date("2026-05-11T00:08:47.017Z"),
      attachments: [
        {
          downloadUrl: "https://ripe-napkin.biz/",
          id: "9e7c9cd9-96ea-4a4a-9d08-db99db03e59c",
          mimeType: "annus",
          name: "cohibeo",
        },
      ],
      categoryIds: [],
      createdAt: new Date("2020-06-11T03:39:37.305Z"),
      currency: "SSP",
      externalNumber: "necessitatibus",
      id: "c34eb515-b181-43c9-963a-fccbe0f2aedd",
      lineitems: [
        {
          id: "0b3b5379-03be-47cd-920a-49a89de4509f",
          itemDescription: "Innovative Table featuring left technology and Rubber construction",
          itemName: "Luxurious Cotton Pizza",
          itemSku: "978-0-8324-6620-5",
          notes: "Degusto conventus defendo valetudo.",
          taxAmount: 2501,
          totalAmount: 168,
          unitAmount: 3059,
          unitQuantity: 1,
        },
      ],
      metadata: [],
      name: "Refined Steel Shoes",
      paymentMethod: "CASH",
      postedAt: new Date("2021-06-04T10:00:04.909Z"),
      reimbursedAmount: 1833,
      status: "SUBMITTED",
      taxAmount: 2602,
      totalAmount: 3580,
      updatedAt: new Date("2026-05-11T00:08:47.017Z"),
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
      approvedAt: new Date("2026-05-11T00:08:47.047Z"),
      attachments: [
        {
          downloadUrl: "https://ripe-napkin.biz/",
          id: "6ac72314-0e40-44cd-8754-96b54e356b9a",
          mimeType: "annus",
          name: "cohibeo",
        },
      ],
      categoryIds: [],
      createdAt: new Date("2020-06-11T03:39:37.305Z"),
      currency: "SSP",
      externalNumber: "necessitatibus",
      id: "b1394df6-f1b0-4e61-ac58-dd884a516770",
      lineitems: [
        {
          id: "454ec30c-536a-4e24-bc86-a99b87923017",
          itemDescription: "Innovative Table featuring left technology and Rubber construction",
          itemName: "Luxurious Cotton Pizza",
          itemSku: "978-0-8324-6620-5",
          notes: "Degusto conventus defendo valetudo.",
          taxAmount: 2501,
          totalAmount: 168,
          unitAmount: 3059,
          unitQuantity: 1,
        },
      ],
      metadata: [],
      name: "Refined Steel Shoes",
      paymentMethod: "CASH",
      postedAt: new Date("2021-06-04T10:00:04.914Z"),
      reimbursedAmount: 1833,
      status: "SUBMITTED",
      taxAmount: 2602,
      totalAmount: 3580,
      updatedAt: new Date("2026-05-11T00:08:47.047Z"),
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
      approvedAt: new Date("2026-05-11T00:08:47.047Z"),
      attachments: [
        {
          downloadUrl: "https://ripe-napkin.biz/",
          id: "6ac72314-0e40-44cd-8754-96b54e356b9a",
          mimeType: "annus",
          name: "cohibeo",
        },
      ],
      categoryIds: [],
      createdAt: new Date("2020-06-11T03:39:37.305Z"),
      currency: "SSP",
      externalNumber: "necessitatibus",
      id: "b1394df6-f1b0-4e61-ac58-dd884a516770",
      lineitems: [
        {
          id: "454ec30c-536a-4e24-bc86-a99b87923017",
          itemDescription: "Innovative Table featuring left technology and Rubber construction",
          itemName: "Luxurious Cotton Pizza",
          itemSku: "978-0-8324-6620-5",
          notes: "Degusto conventus defendo valetudo.",
          taxAmount: 2501,
          totalAmount: 168,
          unitAmount: 3059,
          unitQuantity: 1,
        },
      ],
      metadata: [],
      name: "Refined Steel Shoes",
      paymentMethod: "CASH",
      postedAt: new Date("2021-06-04T10:00:04.914Z"),
      reimbursedAmount: 1833,
      status: "SUBMITTED",
      taxAmount: 2602,
      totalAmount: 3580,
      updatedAt: new Date("2026-05-11T00:08:47.047Z"),
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
      approvedAt: new Date("2026-05-11T00:08:47.047Z"),
      attachments: [
        {
          downloadUrl: "https://ripe-napkin.biz/",
          id: "6ac72314-0e40-44cd-8754-96b54e356b9a",
          mimeType: "annus",
          name: "cohibeo",
        },
      ],
      categoryIds: [],
      createdAt: new Date("2020-06-11T03:39:37.305Z"),
      currency: "SSP",
      externalNumber: "necessitatibus",
      id: "b1394df6-f1b0-4e61-ac58-dd884a516770",
      lineitems: [
        {
          id: "454ec30c-536a-4e24-bc86-a99b87923017",
          itemDescription: "Innovative Table featuring left technology and Rubber construction",
          itemName: "Luxurious Cotton Pizza",
          itemSku: "978-0-8324-6620-5",
          notes: "Degusto conventus defendo valetudo.",
          taxAmount: 2501,
          totalAmount: 168,
          unitAmount: 3059,
          unitQuantity: 1,
        },
      ],
      metadata: [],
      name: "Refined Steel Shoes",
      paymentMethod: "CASH",
      postedAt: new Date("2021-06-04T10:00:04.914Z"),
      reimbursedAmount: 1833,
      status: "SUBMITTED",
      taxAmount: 2602,
      totalAmount: 3580,
      updatedAt: new Date("2026-05-11T00:08:47.047Z"),
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
      approvedAt: new Date("2026-05-11T00:08:47.047Z"),
      attachments: [
        {
          downloadUrl: "https://ripe-napkin.biz/",
          id: "6ac72314-0e40-44cd-8754-96b54e356b9a",
          mimeType: "annus",
          name: "cohibeo",
        },
      ],
      categoryIds: [],
      createdAt: new Date("2020-06-11T03:39:37.305Z"),
      currency: "SSP",
      externalNumber: "necessitatibus",
      id: "b1394df6-f1b0-4e61-ac58-dd884a516770",
      lineitems: [
        {
          id: "454ec30c-536a-4e24-bc86-a99b87923017",
          itemDescription: "Innovative Table featuring left technology and Rubber construction",
          itemName: "Luxurious Cotton Pizza",
          itemSku: "978-0-8324-6620-5",
          notes: "Degusto conventus defendo valetudo.",
          taxAmount: 2501,
          totalAmount: 168,
          unitAmount: 3059,
          unitQuantity: 1,
        },
      ],
      metadata: [],
      name: "Refined Steel Shoes",
      paymentMethod: "CASH",
      postedAt: new Date("2021-06-04T10:00:04.914Z"),
      reimbursedAmount: 1833,
      status: "SUBMITTED",
      taxAmount: 2602,
      totalAmount: 3580,
      updatedAt: new Date("2026-05-11T00:08:47.047Z"),
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