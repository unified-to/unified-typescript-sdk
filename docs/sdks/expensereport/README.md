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
      approvedAt: new Date("2021-04-22T16:22:49.143Z"),
      attachments: [],
      categoryIds: [],
      createdAt: new Date("2020-05-29T02:04:59.078Z"),
      currency: "GBP",
      externalNumber: "ER-31240",
      id: "9570545e-42f4-4d51-8895-2355d7c61e57",
      lineitems: [
        {
          id: "de40d9ee-c7ca-415c-b2ac-8e44f43f53bd",
          itemName: "Conference ticket",
          taxAmount: 0,
          totalAmount: 39.9,
          unitAmount: 39.9,
          unitQuantity: 1,
        },
        {
          id: "f731704d-10b0-4383-843b-0f08c61bc38a",
          itemName: "Flight",
          notes: "Soluta omnis dolor.",
          taxAmount: 0,
          totalAmount: 193.17,
          unitAmount: 193.17,
          unitQuantity: 1,
        },
        {
          id: "42ddcb58-034b-4990-832d-6a1a633013ad",
          itemName: "Client dinner",
          notes: "Altus caveo capio.",
          taxAmount: 0,
          totalAmount: 230.12,
          unitAmount: 230.12,
          unitQuantity: 1,
        },
        {
          id: "c0d8c3dd-c2c3-4c1f-ad83-8b30d814e3b0",
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
      reimbursedAt: new Date("2021-04-22T16:22:49.143Z"),
      status: "PAID",
      taxAmount: 0,
      totalAmount: 908.46,
      updatedAt: new Date("2021-04-22T16:22:49.143Z"),
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
      approvedAt: new Date("2021-04-22T16:22:49.143Z"),
      attachments: [],
      categoryIds: [],
      createdAt: new Date("2020-05-29T02:04:59.078Z"),
      currency: "GBP",
      externalNumber: "ER-31240",
      id: "9570545e-42f4-4d51-8895-2355d7c61e57",
      lineitems: [
        {
          id: "de40d9ee-c7ca-415c-b2ac-8e44f43f53bd",
          itemName: "Conference ticket",
          taxAmount: 0,
          totalAmount: 39.9,
          unitAmount: 39.9,
          unitQuantity: 1,
        },
        {
          id: "f731704d-10b0-4383-843b-0f08c61bc38a",
          itemName: "Flight",
          notes: "Soluta omnis dolor.",
          taxAmount: 0,
          totalAmount: 193.17,
          unitAmount: 193.17,
          unitQuantity: 1,
        },
        {
          id: "42ddcb58-034b-4990-832d-6a1a633013ad",
          itemName: "Client dinner",
          notes: "Altus caveo capio.",
          taxAmount: 0,
          totalAmount: 230.12,
          unitAmount: 230.12,
          unitQuantity: 1,
        },
        {
          id: "c0d8c3dd-c2c3-4c1f-ad83-8b30d814e3b0",
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
      reimbursedAt: new Date("2021-04-22T16:22:49.143Z"),
      status: "PAID",
      taxAmount: 0,
      totalAmount: 908.46,
      updatedAt: new Date("2021-04-22T16:22:49.143Z"),
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
      approvedAt: new Date("2021-04-22T16:22:49.149Z"),
      attachments: [],
      categoryIds: [],
      createdAt: new Date("2020-05-29T02:04:59.078Z"),
      currency: "GBP",
      externalNumber: "ER-31240",
      id: "b304eeb3-e9db-4740-9e6e-c0fe439c018f",
      lineitems: [
        {
          id: "79f566a3-7236-4614-ba3b-93db028ba2e9",
          itemName: "Conference ticket",
          taxAmount: 0,
          totalAmount: 39.9,
          unitAmount: 39.9,
          unitQuantity: 1,
        },
        {
          id: "b5c70302-1548-4ecf-95be-42b1c61398a7",
          itemName: "Flight",
          notes: "Soluta omnis dolor.",
          taxAmount: 0,
          totalAmount: 193.17,
          unitAmount: 193.17,
          unitQuantity: 1,
        },
        {
          id: "f248c324-2ced-4add-b6f0-1cf11dc47d5a",
          itemName: "Client dinner",
          notes: "Altus caveo capio.",
          taxAmount: 0,
          totalAmount: 230.12,
          unitAmount: 230.12,
          unitQuantity: 1,
        },
        {
          id: "a2fd5b5d-147f-4a82-b10f-a7dedcf37e77",
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
      reimbursedAt: new Date("2021-04-22T16:22:49.149Z"),
      status: "PAID",
      taxAmount: 0,
      totalAmount: 908.46,
      updatedAt: new Date("2021-04-22T16:22:49.149Z"),
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
      approvedAt: new Date("2021-04-22T16:22:49.149Z"),
      attachments: [],
      categoryIds: [],
      createdAt: new Date("2020-05-29T02:04:59.078Z"),
      currency: "GBP",
      externalNumber: "ER-31240",
      id: "b304eeb3-e9db-4740-9e6e-c0fe439c018f",
      lineitems: [
        {
          id: "79f566a3-7236-4614-ba3b-93db028ba2e9",
          itemName: "Conference ticket",
          taxAmount: 0,
          totalAmount: 39.9,
          unitAmount: 39.9,
          unitQuantity: 1,
        },
        {
          id: "b5c70302-1548-4ecf-95be-42b1c61398a7",
          itemName: "Flight",
          notes: "Soluta omnis dolor.",
          taxAmount: 0,
          totalAmount: 193.17,
          unitAmount: 193.17,
          unitQuantity: 1,
        },
        {
          id: "f248c324-2ced-4add-b6f0-1cf11dc47d5a",
          itemName: "Client dinner",
          notes: "Altus caveo capio.",
          taxAmount: 0,
          totalAmount: 230.12,
          unitAmount: 230.12,
          unitQuantity: 1,
        },
        {
          id: "a2fd5b5d-147f-4a82-b10f-a7dedcf37e77",
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
      reimbursedAt: new Date("2021-04-22T16:22:49.149Z"),
      status: "PAID",
      taxAmount: 0,
      totalAmount: 908.46,
      updatedAt: new Date("2021-04-22T16:22:49.149Z"),
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
      approvedAt: new Date("2021-04-22T16:22:49.149Z"),
      attachments: [],
      categoryIds: [],
      createdAt: new Date("2020-05-29T02:04:59.078Z"),
      currency: "GBP",
      externalNumber: "ER-31240",
      id: "b304eeb3-e9db-4740-9e6e-c0fe439c018f",
      lineitems: [
        {
          id: "79f566a3-7236-4614-ba3b-93db028ba2e9",
          itemName: "Conference ticket",
          taxAmount: 0,
          totalAmount: 39.9,
          unitAmount: 39.9,
          unitQuantity: 1,
        },
        {
          id: "b5c70302-1548-4ecf-95be-42b1c61398a7",
          itemName: "Flight",
          notes: "Soluta omnis dolor.",
          taxAmount: 0,
          totalAmount: 193.17,
          unitAmount: 193.17,
          unitQuantity: 1,
        },
        {
          id: "f248c324-2ced-4add-b6f0-1cf11dc47d5a",
          itemName: "Client dinner",
          notes: "Altus caveo capio.",
          taxAmount: 0,
          totalAmount: 230.12,
          unitAmount: 230.12,
          unitQuantity: 1,
        },
        {
          id: "a2fd5b5d-147f-4a82-b10f-a7dedcf37e77",
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
      reimbursedAt: new Date("2021-04-22T16:22:49.149Z"),
      status: "PAID",
      taxAmount: 0,
      totalAmount: 908.46,
      updatedAt: new Date("2021-04-22T16:22:49.149Z"),
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
      approvedAt: new Date("2021-04-22T16:22:49.149Z"),
      attachments: [],
      categoryIds: [],
      createdAt: new Date("2020-05-29T02:04:59.078Z"),
      currency: "GBP",
      externalNumber: "ER-31240",
      id: "b304eeb3-e9db-4740-9e6e-c0fe439c018f",
      lineitems: [
        {
          id: "79f566a3-7236-4614-ba3b-93db028ba2e9",
          itemName: "Conference ticket",
          taxAmount: 0,
          totalAmount: 39.9,
          unitAmount: 39.9,
          unitQuantity: 1,
        },
        {
          id: "b5c70302-1548-4ecf-95be-42b1c61398a7",
          itemName: "Flight",
          notes: "Soluta omnis dolor.",
          taxAmount: 0,
          totalAmount: 193.17,
          unitAmount: 193.17,
          unitQuantity: 1,
        },
        {
          id: "f248c324-2ced-4add-b6f0-1cf11dc47d5a",
          itemName: "Client dinner",
          notes: "Altus caveo capio.",
          taxAmount: 0,
          totalAmount: 230.12,
          unitAmount: 230.12,
          unitQuantity: 1,
        },
        {
          id: "a2fd5b5d-147f-4a82-b10f-a7dedcf37e77",
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
      reimbursedAt: new Date("2021-04-22T16:22:49.149Z"),
      status: "PAID",
      taxAmount: 0,
      totalAmount: 908.46,
      updatedAt: new Date("2021-04-22T16:22:49.149Z"),
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