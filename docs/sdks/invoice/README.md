# Invoice

## Overview

### Available Operations

* [createAccountingInvoice](#createaccountinginvoice) - Create an invoice
* [getAccountingInvoice](#getaccountinginvoice) - Retrieve an invoice
* [listAccountingInvoices](#listaccountinginvoices) - List all invoices
* [patchAccountingInvoice](#patchaccountinginvoice) - Update an invoice
* [removeAccountingInvoice](#removeaccountinginvoice) - Remove an invoice
* [updateAccountingInvoice](#updateaccountinginvoice) - Update an invoice

## createAccountingInvoice

Create an invoice

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createAccountingInvoice" method="post" path="/accounting/{connection_id}/invoice" example="accounting_invoice" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.invoice.createAccountingInvoice({
    accountingInvoice: {
      attachments: [
        {
          downloadUrl: "https://glossy-markup.net/",
          id: "720cfefc-dfb8-46db-a34b-226a951b025b",
          mimeType: "benevolentia",
          name: "vespillo",
        },
      ],
      balanceAmount: -1,
      categoryIds: [],
      createdAt: new Date("2022-11-07T14:17:29.587Z"),
      currency: "RWF",
      discountAmount: 0,
      dueAt: new Date("2022-11-27T21:25:37.363Z"),
      extendedNotes: [],
      id: "c7482333-8e4b-492a-b3c1-22f980f5f81b",
      invoiceNumber: "vinco",
      isInclusiveOfTax: true,
      lineitems: [],
      metadata: [],
      notes: "Auctus comburo clarus ubi.",
      paidAmount: 0,
      paidAt: new Date("2022-11-25T15:00:28.871Z"),
      paymentCollectionMethod: "send_invoice",
      payments: [],
      postedAt: new Date("2026-04-17T13:28:32.322Z"),
      reference: "adinventitias",
      salesorderIds: [],
      send: true,
      status: "DELETED",
      subTotalAmount: 0,
      taxAmount: 0,
      term: "NET_45",
      totalAmount: 0,
      type: "CREDITMEMO",
      updatedAt: new Date("2023-02-07T20:53:25.593Z"),
      url: "https://gifted-yarmulke.info/",
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
import { accountingCreateAccountingInvoice } from "@unified-api/typescript-sdk/funcs/accountingCreateAccountingInvoice.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingCreateAccountingInvoice(unifiedTo, {
    accountingInvoice: {
      attachments: [
        {
          downloadUrl: "https://glossy-markup.net/",
          id: "720cfefc-dfb8-46db-a34b-226a951b025b",
          mimeType: "benevolentia",
          name: "vespillo",
        },
      ],
      balanceAmount: -1,
      categoryIds: [],
      createdAt: new Date("2022-11-07T14:17:29.587Z"),
      currency: "RWF",
      discountAmount: 0,
      dueAt: new Date("2022-11-27T21:25:37.363Z"),
      extendedNotes: [],
      id: "c7482333-8e4b-492a-b3c1-22f980f5f81b",
      invoiceNumber: "vinco",
      isInclusiveOfTax: true,
      lineitems: [],
      metadata: [],
      notes: "Auctus comburo clarus ubi.",
      paidAmount: 0,
      paidAt: new Date("2022-11-25T15:00:28.871Z"),
      paymentCollectionMethod: "send_invoice",
      payments: [],
      postedAt: new Date("2026-04-17T13:28:32.322Z"),
      reference: "adinventitias",
      salesorderIds: [],
      send: true,
      status: "DELETED",
      subTotalAmount: 0,
      taxAmount: 0,
      term: "NET_45",
      totalAmount: 0,
      type: "CREDITMEMO",
      updatedAt: new Date("2023-02-07T20:53:25.593Z"),
      url: "https://gifted-yarmulke.info/",
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingCreateAccountingInvoice failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateAccountingInvoiceRequest](../../sdk/models/operations/createaccountinginvoicerequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingInvoice](../../sdk/models/shared/accountinginvoice.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getAccountingInvoice

Retrieve an invoice

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAccountingInvoice" method="get" path="/accounting/{connection_id}/invoice/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.invoice.getAccountingInvoice({
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
import { accountingGetAccountingInvoice } from "@unified-api/typescript-sdk/funcs/accountingGetAccountingInvoice.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingGetAccountingInvoice(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingGetAccountingInvoice failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAccountingInvoiceRequest](../../sdk/models/operations/getaccountinginvoicerequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingInvoice](../../sdk/models/shared/accountinginvoice.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listAccountingInvoices

List all invoices

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listAccountingInvoices" method="get" path="/accounting/{connection_id}/invoice" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.invoice.listAccountingInvoices({
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
import { accountingListAccountingInvoices } from "@unified-api/typescript-sdk/funcs/accountingListAccountingInvoices.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingListAccountingInvoices(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingListAccountingInvoices failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAccountingInvoicesRequest](../../sdk/models/operations/listaccountinginvoicesrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingInvoice[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchAccountingInvoice

Update an invoice

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchAccountingInvoice" method="patch" path="/accounting/{connection_id}/invoice/{id}" example="accounting_invoice" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.invoice.patchAccountingInvoice({
    accountingInvoice: {
      attachments: [
        {
          downloadUrl: "https://glossy-markup.net/",
          id: "c85b2ce8-5534-4bab-be6b-5f90a61d5eb8",
          mimeType: "benevolentia",
          name: "vespillo",
        },
      ],
      balanceAmount: -1,
      categoryIds: [],
      createdAt: new Date("2022-11-07T14:17:29.587Z"),
      currency: "RWF",
      discountAmount: 0,
      dueAt: new Date("2022-11-27T21:25:37.363Z"),
      extendedNotes: [],
      id: "34c7cd28-b53f-45cd-ada3-94ed2bd02f42",
      invoiceNumber: "vinco",
      isInclusiveOfTax: true,
      lineitems: [],
      metadata: [],
      notes: "Auctus comburo clarus ubi.",
      paidAmount: 0,
      paidAt: new Date("2022-11-25T15:00:28.871Z"),
      paymentCollectionMethod: "send_invoice",
      payments: [],
      postedAt: new Date("2026-04-17T13:28:32.381Z"),
      reference: "adinventitias",
      salesorderIds: [],
      send: true,
      status: "DELETED",
      subTotalAmount: 0,
      taxAmount: 0,
      term: "NET_45",
      totalAmount: 0,
      type: "CREDITMEMO",
      updatedAt: new Date("2023-02-07T20:53:25.598Z"),
      url: "https://gifted-yarmulke.info/",
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
import { accountingPatchAccountingInvoice } from "@unified-api/typescript-sdk/funcs/accountingPatchAccountingInvoice.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingPatchAccountingInvoice(unifiedTo, {
    accountingInvoice: {
      attachments: [
        {
          downloadUrl: "https://glossy-markup.net/",
          id: "c85b2ce8-5534-4bab-be6b-5f90a61d5eb8",
          mimeType: "benevolentia",
          name: "vespillo",
        },
      ],
      balanceAmount: -1,
      categoryIds: [],
      createdAt: new Date("2022-11-07T14:17:29.587Z"),
      currency: "RWF",
      discountAmount: 0,
      dueAt: new Date("2022-11-27T21:25:37.363Z"),
      extendedNotes: [],
      id: "34c7cd28-b53f-45cd-ada3-94ed2bd02f42",
      invoiceNumber: "vinco",
      isInclusiveOfTax: true,
      lineitems: [],
      metadata: [],
      notes: "Auctus comburo clarus ubi.",
      paidAmount: 0,
      paidAt: new Date("2022-11-25T15:00:28.871Z"),
      paymentCollectionMethod: "send_invoice",
      payments: [],
      postedAt: new Date("2026-04-17T13:28:32.381Z"),
      reference: "adinventitias",
      salesorderIds: [],
      send: true,
      status: "DELETED",
      subTotalAmount: 0,
      taxAmount: 0,
      term: "NET_45",
      totalAmount: 0,
      type: "CREDITMEMO",
      updatedAt: new Date("2023-02-07T20:53:25.598Z"),
      url: "https://gifted-yarmulke.info/",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingPatchAccountingInvoice failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchAccountingInvoiceRequest](../../sdk/models/operations/patchaccountinginvoicerequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingInvoice](../../sdk/models/shared/accountinginvoice.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeAccountingInvoice

Remove an invoice

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeAccountingInvoice" method="delete" path="/accounting/{connection_id}/invoice/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.invoice.removeAccountingInvoice({
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
import { accountingRemoveAccountingInvoice } from "@unified-api/typescript-sdk/funcs/accountingRemoveAccountingInvoice.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingRemoveAccountingInvoice(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingRemoveAccountingInvoice failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveAccountingInvoiceRequest](../../sdk/models/operations/removeaccountinginvoicerequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveAccountingInvoiceResponse](../../sdk/models/operations/removeaccountinginvoiceresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateAccountingInvoice

Update an invoice

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateAccountingInvoice" method="put" path="/accounting/{connection_id}/invoice/{id}" example="accounting_invoice" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.invoice.updateAccountingInvoice({
    accountingInvoice: {
      attachments: [
        {
          downloadUrl: "https://glossy-markup.net/",
          id: "c85b2ce8-5534-4bab-be6b-5f90a61d5eb8",
          mimeType: "benevolentia",
          name: "vespillo",
        },
      ],
      balanceAmount: -1,
      categoryIds: [],
      createdAt: new Date("2022-11-07T14:17:29.587Z"),
      currency: "RWF",
      discountAmount: 0,
      dueAt: new Date("2022-11-27T21:25:37.363Z"),
      extendedNotes: [],
      id: "34c7cd28-b53f-45cd-ada3-94ed2bd02f42",
      invoiceNumber: "vinco",
      isInclusiveOfTax: true,
      lineitems: [],
      metadata: [],
      notes: "Auctus comburo clarus ubi.",
      paidAmount: 0,
      paidAt: new Date("2022-11-25T15:00:28.871Z"),
      paymentCollectionMethod: "send_invoice",
      payments: [],
      postedAt: new Date("2026-04-17T13:28:32.381Z"),
      reference: "adinventitias",
      salesorderIds: [],
      send: true,
      status: "DELETED",
      subTotalAmount: 0,
      taxAmount: 0,
      term: "NET_45",
      totalAmount: 0,
      type: "CREDITMEMO",
      updatedAt: new Date("2023-02-07T20:53:25.598Z"),
      url: "https://gifted-yarmulke.info/",
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
import { accountingUpdateAccountingInvoice } from "@unified-api/typescript-sdk/funcs/accountingUpdateAccountingInvoice.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingUpdateAccountingInvoice(unifiedTo, {
    accountingInvoice: {
      attachments: [
        {
          downloadUrl: "https://glossy-markup.net/",
          id: "c85b2ce8-5534-4bab-be6b-5f90a61d5eb8",
          mimeType: "benevolentia",
          name: "vespillo",
        },
      ],
      balanceAmount: -1,
      categoryIds: [],
      createdAt: new Date("2022-11-07T14:17:29.587Z"),
      currency: "RWF",
      discountAmount: 0,
      dueAt: new Date("2022-11-27T21:25:37.363Z"),
      extendedNotes: [],
      id: "34c7cd28-b53f-45cd-ada3-94ed2bd02f42",
      invoiceNumber: "vinco",
      isInclusiveOfTax: true,
      lineitems: [],
      metadata: [],
      notes: "Auctus comburo clarus ubi.",
      paidAmount: 0,
      paidAt: new Date("2022-11-25T15:00:28.871Z"),
      paymentCollectionMethod: "send_invoice",
      payments: [],
      postedAt: new Date("2026-04-17T13:28:32.381Z"),
      reference: "adinventitias",
      salesorderIds: [],
      send: true,
      status: "DELETED",
      subTotalAmount: 0,
      taxAmount: 0,
      term: "NET_45",
      totalAmount: 0,
      type: "CREDITMEMO",
      updatedAt: new Date("2023-02-07T20:53:25.598Z"),
      url: "https://gifted-yarmulke.info/",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingUpdateAccountingInvoice failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateAccountingInvoiceRequest](../../sdk/models/operations/updateaccountinginvoicerequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingInvoice](../../sdk/models/shared/accountinginvoice.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |