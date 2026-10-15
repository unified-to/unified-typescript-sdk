# Expensereport

## Overview

### Available Operations

* [createAccountingExpensereport](#createaccountingexpensereport) - Create an expensereport
* [getAccountingExpensereport](#getaccountingexpensereport) - Retrieve an expensereport
* [listAccountingExpensereports](#listaccountingexpensereports) - List all expensereports
* [patchAccountingExpensereport](#patchaccountingexpensereport) - Update an expensereport
* [removeAccountingExpensereport](#removeaccountingexpensereport) - Remove an expensereport
* [updateAccountingExpensereport](#updateaccountingexpensereport) - Update an expensereport

## createAccountingExpensereport

Create an expensereport

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createAccountingExpensereport" method="post" path="/accounting/{connection_id}/expensereport" example="accounting_expensereport" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.expensereport.createAccountingExpensereport({
    accountingExpensereport: {
      approvedAt: new Date("2025-04-09T07:40:37.698Z"),
      attachments: [],
      categoryIds: [],
      createdAt: new Date("2020-05-29T02:04:59.078Z"),
      currency: "BMD",
      externalNumber: "asporto",
      id: "dcfeb1c4-4600-4afb-bd5a-5c3cbbcb4656",
      lineitems: [
        {
          id: "09d19770-5e05-4d1a-a4c4-b0dd3446fb87",
          itemDescription: "The Synchronised motivating software Car offers reliable performance and webbed design",
          itemName: "Intelligent Gold Cheese",
          itemSku: "978-0-6550-0228-4",
          notes: "Utrimque quas vesica spes.",
          taxAmount: 448,
          totalAmount: 10875,
          unitAmount: 4092,
          unitQuantity: 1,
        },
        {
          id: "017dad49-9cb7-4360-8a14-cfd9cfe7d4d9",
          itemDescription: "Ergonomic Bike made with Marble for all-day coordinated support",
          itemName: "Practical Steel Pizza",
          itemSku: "978-1-4129-9332-6",
          notes: "Corrumpo.",
          taxAmount: 875,
          totalAmount: 12363,
          unitAmount: 6783,
          unitQuantity: 1,
        },
      ],
      metadata: [],
      name: "Rustic Aluminum Car",
      postedAt: new Date("2022-10-31T17:31:04.349Z"),
      reimbursedAmount: 6696,
      status: "PAID",
      taxAmount: 983,
      totalAmount: 13931,
      updatedAt: new Date("2025-04-09T07:40:37.698Z"),
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
import { accountingCreateAccountingExpensereport } from "@unified-api/typescript-sdk/funcs/accountingCreateAccountingExpensereport.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingCreateAccountingExpensereport(unifiedTo, {
    accountingExpensereport: {
      approvedAt: new Date("2025-04-09T07:40:37.698Z"),
      attachments: [],
      categoryIds: [],
      createdAt: new Date("2020-05-29T02:04:59.078Z"),
      currency: "BMD",
      externalNumber: "asporto",
      id: "dcfeb1c4-4600-4afb-bd5a-5c3cbbcb4656",
      lineitems: [
        {
          id: "09d19770-5e05-4d1a-a4c4-b0dd3446fb87",
          itemDescription: "The Synchronised motivating software Car offers reliable performance and webbed design",
          itemName: "Intelligent Gold Cheese",
          itemSku: "978-0-6550-0228-4",
          notes: "Utrimque quas vesica spes.",
          taxAmount: 448,
          totalAmount: 10875,
          unitAmount: 4092,
          unitQuantity: 1,
        },
        {
          id: "017dad49-9cb7-4360-8a14-cfd9cfe7d4d9",
          itemDescription: "Ergonomic Bike made with Marble for all-day coordinated support",
          itemName: "Practical Steel Pizza",
          itemSku: "978-1-4129-9332-6",
          notes: "Corrumpo.",
          taxAmount: 875,
          totalAmount: 12363,
          unitAmount: 6783,
          unitQuantity: 1,
        },
      ],
      metadata: [],
      name: "Rustic Aluminum Car",
      postedAt: new Date("2022-10-31T17:31:04.349Z"),
      reimbursedAmount: 6696,
      status: "PAID",
      taxAmount: 983,
      totalAmount: 13931,
      updatedAt: new Date("2025-04-09T07:40:37.698Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingCreateAccountingExpensereport failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateAccountingExpensereportRequest](../../sdk/models/operations/createaccountingexpensereportrequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingExpensereport](../../sdk/models/shared/accountingexpensereport.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getAccountingExpensereport

Retrieve an expensereport

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAccountingExpensereport" method="get" path="/accounting/{connection_id}/expensereport/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.expensereport.getAccountingExpensereport({
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
import { accountingGetAccountingExpensereport } from "@unified-api/typescript-sdk/funcs/accountingGetAccountingExpensereport.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingGetAccountingExpensereport(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingGetAccountingExpensereport failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAccountingExpensereportRequest](../../sdk/models/operations/getaccountingexpensereportrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingExpensereport](../../sdk/models/shared/accountingexpensereport.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listAccountingExpensereports

List all expensereports

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listAccountingExpensereports" method="get" path="/accounting/{connection_id}/expensereport" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.expensereport.listAccountingExpensereports({
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
import { accountingListAccountingExpensereports } from "@unified-api/typescript-sdk/funcs/accountingListAccountingExpensereports.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingListAccountingExpensereports(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingListAccountingExpensereports failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAccountingExpensereportsRequest](../../sdk/models/operations/listaccountingexpensereportsrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingExpensereport[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchAccountingExpensereport

Update an expensereport

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchAccountingExpensereport" method="patch" path="/accounting/{connection_id}/expensereport/{id}" example="accounting_expensereport" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.expensereport.patchAccountingExpensereport({
    accountingExpensereport: {
      approvedAt: new Date("2025-04-09T07:40:37.726Z"),
      attachments: [],
      categoryIds: [],
      createdAt: new Date("2020-05-29T02:04:59.078Z"),
      currency: "BMD",
      externalNumber: "asporto",
      id: "b3a5e05d-728d-4cf8-ae7c-acd705756760",
      lineitems: [
        {
          id: "52586008-7259-4aac-9ca5-5b1ccc809bcf",
          itemDescription: "The Synchronised motivating software Car offers reliable performance and webbed design",
          itemName: "Intelligent Gold Cheese",
          itemSku: "978-0-6550-0228-4",
          notes: "Utrimque quas vesica spes.",
          taxAmount: 448,
          totalAmount: 10875,
          unitAmount: 4092,
          unitQuantity: 1,
        },
        {
          id: "a8c3068d-6af2-4b38-9f56-89aea0828134",
          itemDescription: "Ergonomic Bike made with Marble for all-day coordinated support",
          itemName: "Practical Steel Pizza",
          itemSku: "978-1-4129-9332-6",
          notes: "Corrumpo.",
          taxAmount: 875,
          totalAmount: 12363,
          unitAmount: 6783,
          unitQuantity: 1,
        },
      ],
      metadata: [],
      name: "Rustic Aluminum Car",
      postedAt: new Date("2022-10-31T17:31:04.363Z"),
      reimbursedAmount: 6696,
      status: "PAID",
      taxAmount: 983,
      totalAmount: 13931,
      updatedAt: new Date("2025-04-09T07:40:37.726Z"),
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
import { accountingPatchAccountingExpensereport } from "@unified-api/typescript-sdk/funcs/accountingPatchAccountingExpensereport.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingPatchAccountingExpensereport(unifiedTo, {
    accountingExpensereport: {
      approvedAt: new Date("2025-04-09T07:40:37.726Z"),
      attachments: [],
      categoryIds: [],
      createdAt: new Date("2020-05-29T02:04:59.078Z"),
      currency: "BMD",
      externalNumber: "asporto",
      id: "b3a5e05d-728d-4cf8-ae7c-acd705756760",
      lineitems: [
        {
          id: "52586008-7259-4aac-9ca5-5b1ccc809bcf",
          itemDescription: "The Synchronised motivating software Car offers reliable performance and webbed design",
          itemName: "Intelligent Gold Cheese",
          itemSku: "978-0-6550-0228-4",
          notes: "Utrimque quas vesica spes.",
          taxAmount: 448,
          totalAmount: 10875,
          unitAmount: 4092,
          unitQuantity: 1,
        },
        {
          id: "a8c3068d-6af2-4b38-9f56-89aea0828134",
          itemDescription: "Ergonomic Bike made with Marble for all-day coordinated support",
          itemName: "Practical Steel Pizza",
          itemSku: "978-1-4129-9332-6",
          notes: "Corrumpo.",
          taxAmount: 875,
          totalAmount: 12363,
          unitAmount: 6783,
          unitQuantity: 1,
        },
      ],
      metadata: [],
      name: "Rustic Aluminum Car",
      postedAt: new Date("2022-10-31T17:31:04.363Z"),
      reimbursedAmount: 6696,
      status: "PAID",
      taxAmount: 983,
      totalAmount: 13931,
      updatedAt: new Date("2025-04-09T07:40:37.726Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingPatchAccountingExpensereport failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchAccountingExpensereportRequest](../../sdk/models/operations/patchaccountingexpensereportrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingExpensereport](../../sdk/models/shared/accountingexpensereport.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeAccountingExpensereport

Remove an expensereport

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeAccountingExpensereport" method="delete" path="/accounting/{connection_id}/expensereport/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.expensereport.removeAccountingExpensereport({
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
import { accountingRemoveAccountingExpensereport } from "@unified-api/typescript-sdk/funcs/accountingRemoveAccountingExpensereport.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingRemoveAccountingExpensereport(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingRemoveAccountingExpensereport failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveAccountingExpensereportRequest](../../sdk/models/operations/removeaccountingexpensereportrequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveAccountingExpensereportResponse](../../sdk/models/operations/removeaccountingexpensereportresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateAccountingExpensereport

Update an expensereport

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateAccountingExpensereport" method="put" path="/accounting/{connection_id}/expensereport/{id}" example="accounting_expensereport" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.expensereport.updateAccountingExpensereport({
    accountingExpensereport: {
      approvedAt: new Date("2025-04-09T07:40:37.726Z"),
      attachments: [],
      categoryIds: [],
      createdAt: new Date("2020-05-29T02:04:59.078Z"),
      currency: "BMD",
      externalNumber: "asporto",
      id: "b3a5e05d-728d-4cf8-ae7c-acd705756760",
      lineitems: [
        {
          id: "52586008-7259-4aac-9ca5-5b1ccc809bcf",
          itemDescription: "The Synchronised motivating software Car offers reliable performance and webbed design",
          itemName: "Intelligent Gold Cheese",
          itemSku: "978-0-6550-0228-4",
          notes: "Utrimque quas vesica spes.",
          taxAmount: 448,
          totalAmount: 10875,
          unitAmount: 4092,
          unitQuantity: 1,
        },
        {
          id: "a8c3068d-6af2-4b38-9f56-89aea0828134",
          itemDescription: "Ergonomic Bike made with Marble for all-day coordinated support",
          itemName: "Practical Steel Pizza",
          itemSku: "978-1-4129-9332-6",
          notes: "Corrumpo.",
          taxAmount: 875,
          totalAmount: 12363,
          unitAmount: 6783,
          unitQuantity: 1,
        },
      ],
      metadata: [],
      name: "Rustic Aluminum Car",
      postedAt: new Date("2022-10-31T17:31:04.363Z"),
      reimbursedAmount: 6696,
      status: "PAID",
      taxAmount: 983,
      totalAmount: 13931,
      updatedAt: new Date("2025-04-09T07:40:37.726Z"),
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
import { accountingUpdateAccountingExpensereport } from "@unified-api/typescript-sdk/funcs/accountingUpdateAccountingExpensereport.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingUpdateAccountingExpensereport(unifiedTo, {
    accountingExpensereport: {
      approvedAt: new Date("2025-04-09T07:40:37.726Z"),
      attachments: [],
      categoryIds: [],
      createdAt: new Date("2020-05-29T02:04:59.078Z"),
      currency: "BMD",
      externalNumber: "asporto",
      id: "b3a5e05d-728d-4cf8-ae7c-acd705756760",
      lineitems: [
        {
          id: "52586008-7259-4aac-9ca5-5b1ccc809bcf",
          itemDescription: "The Synchronised motivating software Car offers reliable performance and webbed design",
          itemName: "Intelligent Gold Cheese",
          itemSku: "978-0-6550-0228-4",
          notes: "Utrimque quas vesica spes.",
          taxAmount: 448,
          totalAmount: 10875,
          unitAmount: 4092,
          unitQuantity: 1,
        },
        {
          id: "a8c3068d-6af2-4b38-9f56-89aea0828134",
          itemDescription: "Ergonomic Bike made with Marble for all-day coordinated support",
          itemName: "Practical Steel Pizza",
          itemSku: "978-1-4129-9332-6",
          notes: "Corrumpo.",
          taxAmount: 875,
          totalAmount: 12363,
          unitAmount: 6783,
          unitQuantity: 1,
        },
      ],
      metadata: [],
      name: "Rustic Aluminum Car",
      postedAt: new Date("2022-10-31T17:31:04.363Z"),
      reimbursedAmount: 6696,
      status: "PAID",
      taxAmount: 983,
      totalAmount: 13931,
      updatedAt: new Date("2025-04-09T07:40:37.726Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingUpdateAccountingExpensereport failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateAccountingExpensereportRequest](../../sdk/models/operations/updateaccountingexpensereportrequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingExpensereport](../../sdk/models/shared/accountingexpensereport.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |