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
      approvedAt: new Date("2026-05-12T09:40:54.236Z"),
      attachments: [
        {
          downloadUrl: "https://ripe-napkin.biz/",
          id: "fef67b87-0957-42c3-adcf-43c0c46d6107",
          mimeType: "annus",
          name: "cohibeo",
        },
      ],
      categoryIds: [],
      createdAt: new Date("2020-06-11T03:39:37.305Z"),
      currency: "SSP",
      externalNumber: "necessitatibus",
      id: "ffa6e9c7-9193-4696-85f6-b19d35be2a3b",
      lineitems: [
        {
          id: "271f95a7-bbfc-403d-919c-785e59b3c427",
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
      postedAt: new Date("2021-06-04T15:33:50.453Z"),
      reimbursedAmount: 1833,
      status: "SUBMITTED",
      taxAmount: 2602,
      totalAmount: 3580,
      updatedAt: new Date("2026-05-12T09:40:54.236Z"),
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
      approvedAt: new Date("2026-05-12T09:40:54.236Z"),
      attachments: [
        {
          downloadUrl: "https://ripe-napkin.biz/",
          id: "fef67b87-0957-42c3-adcf-43c0c46d6107",
          mimeType: "annus",
          name: "cohibeo",
        },
      ],
      categoryIds: [],
      createdAt: new Date("2020-06-11T03:39:37.305Z"),
      currency: "SSP",
      externalNumber: "necessitatibus",
      id: "ffa6e9c7-9193-4696-85f6-b19d35be2a3b",
      lineitems: [
        {
          id: "271f95a7-bbfc-403d-919c-785e59b3c427",
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
      postedAt: new Date("2021-06-04T15:33:50.453Z"),
      reimbursedAmount: 1833,
      status: "SUBMITTED",
      taxAmount: 2602,
      totalAmount: 3580,
      updatedAt: new Date("2026-05-12T09:40:54.236Z"),
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
      approvedAt: new Date("2026-05-12T09:40:54.291Z"),
      attachments: [
        {
          downloadUrl: "https://ripe-napkin.biz/",
          id: "952638a5-c054-405a-9014-96aef0753c77",
          mimeType: "annus",
          name: "cohibeo",
        },
      ],
      categoryIds: [],
      createdAt: new Date("2020-06-11T03:39:37.305Z"),
      currency: "SSP",
      externalNumber: "necessitatibus",
      id: "fa30c86b-1dc7-447f-99a5-bb2137a4e4c2",
      lineitems: [
        {
          id: "8b534c2b-fe41-4494-86df-02ef8117de50",
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
      postedAt: new Date("2021-06-04T15:33:50.462Z"),
      reimbursedAmount: 1833,
      status: "SUBMITTED",
      taxAmount: 2602,
      totalAmount: 3580,
      updatedAt: new Date("2026-05-12T09:40:54.291Z"),
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
      approvedAt: new Date("2026-05-12T09:40:54.291Z"),
      attachments: [
        {
          downloadUrl: "https://ripe-napkin.biz/",
          id: "952638a5-c054-405a-9014-96aef0753c77",
          mimeType: "annus",
          name: "cohibeo",
        },
      ],
      categoryIds: [],
      createdAt: new Date("2020-06-11T03:39:37.305Z"),
      currency: "SSP",
      externalNumber: "necessitatibus",
      id: "fa30c86b-1dc7-447f-99a5-bb2137a4e4c2",
      lineitems: [
        {
          id: "8b534c2b-fe41-4494-86df-02ef8117de50",
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
      postedAt: new Date("2021-06-04T15:33:50.462Z"),
      reimbursedAmount: 1833,
      status: "SUBMITTED",
      taxAmount: 2602,
      totalAmount: 3580,
      updatedAt: new Date("2026-05-12T09:40:54.291Z"),
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
      approvedAt: new Date("2026-05-12T09:40:54.291Z"),
      attachments: [
        {
          downloadUrl: "https://ripe-napkin.biz/",
          id: "952638a5-c054-405a-9014-96aef0753c77",
          mimeType: "annus",
          name: "cohibeo",
        },
      ],
      categoryIds: [],
      createdAt: new Date("2020-06-11T03:39:37.305Z"),
      currency: "SSP",
      externalNumber: "necessitatibus",
      id: "fa30c86b-1dc7-447f-99a5-bb2137a4e4c2",
      lineitems: [
        {
          id: "8b534c2b-fe41-4494-86df-02ef8117de50",
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
      postedAt: new Date("2021-06-04T15:33:50.462Z"),
      reimbursedAmount: 1833,
      status: "SUBMITTED",
      taxAmount: 2602,
      totalAmount: 3580,
      updatedAt: new Date("2026-05-12T09:40:54.291Z"),
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
      approvedAt: new Date("2026-05-12T09:40:54.291Z"),
      attachments: [
        {
          downloadUrl: "https://ripe-napkin.biz/",
          id: "952638a5-c054-405a-9014-96aef0753c77",
          mimeType: "annus",
          name: "cohibeo",
        },
      ],
      categoryIds: [],
      createdAt: new Date("2020-06-11T03:39:37.305Z"),
      currency: "SSP",
      externalNumber: "necessitatibus",
      id: "fa30c86b-1dc7-447f-99a5-bb2137a4e4c2",
      lineitems: [
        {
          id: "8b534c2b-fe41-4494-86df-02ef8117de50",
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
      postedAt: new Date("2021-06-04T15:33:50.462Z"),
      reimbursedAmount: 1833,
      status: "SUBMITTED",
      taxAmount: 2602,
      totalAmount: 3580,
      updatedAt: new Date("2026-05-12T09:40:54.291Z"),
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