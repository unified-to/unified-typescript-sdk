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

Creates a AccountingExpensereport. Provide the unified AccountingExpensereport fields in the request body; they are mapped to the provider's API. Returns the created AccountingExpensereport.

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
      approvedAt: new Date("2021-04-22T09:22:34.608Z"),
      attachments: [],
      categoryIds: [],
      createdAt: new Date("2020-05-29T02:04:59.078Z"),
      currency: "GBP",
      externalNumber: "ER-31240",
      id: "73ff85ab-a6b3-41ce-b8f3-f8b5fa54d10d",
      lineitems: [
        {
          id: "d97331b5-b484-4960-ae2d-642f28234077",
          itemName: "Conference ticket",
          taxAmount: 0,
          totalAmount: 39.9,
          unitAmount: 39.9,
          unitQuantity: 1,
        },
        {
          id: "1ecbcbfb-be5f-44c1-81e0-379750e1165f",
          itemName: "Flight",
          notes: "Soluta omnis dolor.",
          taxAmount: 0,
          totalAmount: 193.17,
          unitAmount: 193.17,
          unitQuantity: 1,
        },
        {
          id: "cf961f6c-2d04-458d-be91-bf724bfc7e6a",
          itemName: "Client dinner",
          notes: "Altus caveo capio.",
          taxAmount: 0,
          totalAmount: 230.12,
          unitAmount: 230.12,
          unitQuantity: 1,
        },
        {
          id: "15410697-5ae9-49b5-a66e-44a1044e5c6e",
          itemName: "Flight",
          taxAmount: 0,
          totalAmount: 445.27,
          unitAmount: 445.27,
          unitQuantity: 1,
        },
      ],
      metadata: [],
      name: "Lolita Kunde - October expenses",
      postedAt: new Date("2020-05-29T02:04:59.078Z"),
      reimbursedAmount: 908.46,
      reimbursedAt: new Date("2021-04-22T09:22:34.608Z"),
      status: "PAID",
      taxAmount: 0,
      totalAmount: 908.46,
      updatedAt: new Date("2021-04-22T09:22:34.608Z"),
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
      approvedAt: new Date("2021-04-22T09:22:34.608Z"),
      attachments: [],
      categoryIds: [],
      createdAt: new Date("2020-05-29T02:04:59.078Z"),
      currency: "GBP",
      externalNumber: "ER-31240",
      id: "73ff85ab-a6b3-41ce-b8f3-f8b5fa54d10d",
      lineitems: [
        {
          id: "d97331b5-b484-4960-ae2d-642f28234077",
          itemName: "Conference ticket",
          taxAmount: 0,
          totalAmount: 39.9,
          unitAmount: 39.9,
          unitQuantity: 1,
        },
        {
          id: "1ecbcbfb-be5f-44c1-81e0-379750e1165f",
          itemName: "Flight",
          notes: "Soluta omnis dolor.",
          taxAmount: 0,
          totalAmount: 193.17,
          unitAmount: 193.17,
          unitQuantity: 1,
        },
        {
          id: "cf961f6c-2d04-458d-be91-bf724bfc7e6a",
          itemName: "Client dinner",
          notes: "Altus caveo capio.",
          taxAmount: 0,
          totalAmount: 230.12,
          unitAmount: 230.12,
          unitQuantity: 1,
        },
        {
          id: "15410697-5ae9-49b5-a66e-44a1044e5c6e",
          itemName: "Flight",
          taxAmount: 0,
          totalAmount: 445.27,
          unitAmount: 445.27,
          unitQuantity: 1,
        },
      ],
      metadata: [],
      name: "Lolita Kunde - October expenses",
      postedAt: new Date("2020-05-29T02:04:59.078Z"),
      reimbursedAmount: 908.46,
      reimbursedAt: new Date("2021-04-22T09:22:34.608Z"),
      status: "PAID",
      taxAmount: 0,
      totalAmount: 908.46,
      updatedAt: new Date("2021-04-22T09:22:34.608Z"),
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

Retrieves a single AccountingExpensereport by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

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

Returns a list of AccountingExpensereports. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

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

Updates the AccountingExpensereport identified by `id`. Provide the unified AccountingExpensereport fields to change in the request body.

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
      approvedAt: new Date("2021-04-22T09:22:34.613Z"),
      attachments: [],
      categoryIds: [],
      createdAt: new Date("2020-05-29T02:04:59.078Z"),
      currency: "GBP",
      externalNumber: "ER-31240",
      id: "a7780ab4-601a-47b6-9035-784c2affd621",
      lineitems: [
        {
          id: "869607c6-98a1-4c5e-96e0-2c6f032f90a3",
          itemName: "Conference ticket",
          taxAmount: 0,
          totalAmount: 39.9,
          unitAmount: 39.9,
          unitQuantity: 1,
        },
        {
          id: "ed5965a7-adc0-42a7-8c56-d41e4d74afa5",
          itemName: "Flight",
          notes: "Soluta omnis dolor.",
          taxAmount: 0,
          totalAmount: 193.17,
          unitAmount: 193.17,
          unitQuantity: 1,
        },
        {
          id: "87c6f108-65e8-4ad2-96e1-ff5b99c5e4d6",
          itemName: "Client dinner",
          notes: "Altus caveo capio.",
          taxAmount: 0,
          totalAmount: 230.12,
          unitAmount: 230.12,
          unitQuantity: 1,
        },
        {
          id: "a4b26eb5-dd97-445d-b6f4-7b6375e3a3e2",
          itemName: "Flight",
          taxAmount: 0,
          totalAmount: 445.27,
          unitAmount: 445.27,
          unitQuantity: 1,
        },
      ],
      metadata: [],
      name: "Lolita Kunde - October expenses",
      postedAt: new Date("2020-05-29T02:04:59.078Z"),
      reimbursedAmount: 908.46,
      reimbursedAt: new Date("2021-04-22T09:22:34.613Z"),
      status: "PAID",
      taxAmount: 0,
      totalAmount: 908.46,
      updatedAt: new Date("2021-04-22T09:22:34.613Z"),
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
      approvedAt: new Date("2021-04-22T09:22:34.613Z"),
      attachments: [],
      categoryIds: [],
      createdAt: new Date("2020-05-29T02:04:59.078Z"),
      currency: "GBP",
      externalNumber: "ER-31240",
      id: "a7780ab4-601a-47b6-9035-784c2affd621",
      lineitems: [
        {
          id: "869607c6-98a1-4c5e-96e0-2c6f032f90a3",
          itemName: "Conference ticket",
          taxAmount: 0,
          totalAmount: 39.9,
          unitAmount: 39.9,
          unitQuantity: 1,
        },
        {
          id: "ed5965a7-adc0-42a7-8c56-d41e4d74afa5",
          itemName: "Flight",
          notes: "Soluta omnis dolor.",
          taxAmount: 0,
          totalAmount: 193.17,
          unitAmount: 193.17,
          unitQuantity: 1,
        },
        {
          id: "87c6f108-65e8-4ad2-96e1-ff5b99c5e4d6",
          itemName: "Client dinner",
          notes: "Altus caveo capio.",
          taxAmount: 0,
          totalAmount: 230.12,
          unitAmount: 230.12,
          unitQuantity: 1,
        },
        {
          id: "a4b26eb5-dd97-445d-b6f4-7b6375e3a3e2",
          itemName: "Flight",
          taxAmount: 0,
          totalAmount: 445.27,
          unitAmount: 445.27,
          unitQuantity: 1,
        },
      ],
      metadata: [],
      name: "Lolita Kunde - October expenses",
      postedAt: new Date("2020-05-29T02:04:59.078Z"),
      reimbursedAmount: 908.46,
      reimbursedAt: new Date("2021-04-22T09:22:34.613Z"),
      status: "PAID",
      taxAmount: 0,
      totalAmount: 908.46,
      updatedAt: new Date("2021-04-22T09:22:34.613Z"),
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

Deletes the AccountingExpensereport identified by `id`.

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

Updates the AccountingExpensereport identified by `id`. Provide the unified AccountingExpensereport fields to change in the request body.

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
      approvedAt: new Date("2021-04-22T09:22:34.613Z"),
      attachments: [],
      categoryIds: [],
      createdAt: new Date("2020-05-29T02:04:59.078Z"),
      currency: "GBP",
      externalNumber: "ER-31240",
      id: "a7780ab4-601a-47b6-9035-784c2affd621",
      lineitems: [
        {
          id: "869607c6-98a1-4c5e-96e0-2c6f032f90a3",
          itemName: "Conference ticket",
          taxAmount: 0,
          totalAmount: 39.9,
          unitAmount: 39.9,
          unitQuantity: 1,
        },
        {
          id: "ed5965a7-adc0-42a7-8c56-d41e4d74afa5",
          itemName: "Flight",
          notes: "Soluta omnis dolor.",
          taxAmount: 0,
          totalAmount: 193.17,
          unitAmount: 193.17,
          unitQuantity: 1,
        },
        {
          id: "87c6f108-65e8-4ad2-96e1-ff5b99c5e4d6",
          itemName: "Client dinner",
          notes: "Altus caveo capio.",
          taxAmount: 0,
          totalAmount: 230.12,
          unitAmount: 230.12,
          unitQuantity: 1,
        },
        {
          id: "a4b26eb5-dd97-445d-b6f4-7b6375e3a3e2",
          itemName: "Flight",
          taxAmount: 0,
          totalAmount: 445.27,
          unitAmount: 445.27,
          unitQuantity: 1,
        },
      ],
      metadata: [],
      name: "Lolita Kunde - October expenses",
      postedAt: new Date("2020-05-29T02:04:59.078Z"),
      reimbursedAmount: 908.46,
      reimbursedAt: new Date("2021-04-22T09:22:34.613Z"),
      status: "PAID",
      taxAmount: 0,
      totalAmount: 908.46,
      updatedAt: new Date("2021-04-22T09:22:34.613Z"),
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
      approvedAt: new Date("2021-04-22T09:22:34.613Z"),
      attachments: [],
      categoryIds: [],
      createdAt: new Date("2020-05-29T02:04:59.078Z"),
      currency: "GBP",
      externalNumber: "ER-31240",
      id: "a7780ab4-601a-47b6-9035-784c2affd621",
      lineitems: [
        {
          id: "869607c6-98a1-4c5e-96e0-2c6f032f90a3",
          itemName: "Conference ticket",
          taxAmount: 0,
          totalAmount: 39.9,
          unitAmount: 39.9,
          unitQuantity: 1,
        },
        {
          id: "ed5965a7-adc0-42a7-8c56-d41e4d74afa5",
          itemName: "Flight",
          notes: "Soluta omnis dolor.",
          taxAmount: 0,
          totalAmount: 193.17,
          unitAmount: 193.17,
          unitQuantity: 1,
        },
        {
          id: "87c6f108-65e8-4ad2-96e1-ff5b99c5e4d6",
          itemName: "Client dinner",
          notes: "Altus caveo capio.",
          taxAmount: 0,
          totalAmount: 230.12,
          unitAmount: 230.12,
          unitQuantity: 1,
        },
        {
          id: "a4b26eb5-dd97-445d-b6f4-7b6375e3a3e2",
          itemName: "Flight",
          taxAmount: 0,
          totalAmount: 445.27,
          unitAmount: 445.27,
          unitQuantity: 1,
        },
      ],
      metadata: [],
      name: "Lolita Kunde - October expenses",
      postedAt: new Date("2020-05-29T02:04:59.078Z"),
      reimbursedAmount: 908.46,
      reimbursedAt: new Date("2021-04-22T09:22:34.613Z"),
      status: "PAID",
      taxAmount: 0,
      totalAmount: 908.46,
      updatedAt: new Date("2021-04-22T09:22:34.613Z"),
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