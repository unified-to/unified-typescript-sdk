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
          id: "07e89019-b050-433d-82b5-479bf4f10682",
          mimeType: "application/pdf",
          name: "INV-77705.pdf",
        },
        {
          downloadUrl: "https://earnest-giggle.net",
          id: "49440b66-cdba-4c5e-b08c-5d5d5bc4e697",
          mimeType: "application/pdf",
          name: "INV-77705-1.pdf",
        },
      ],
      balanceAmount: 0,
      categoryIds: [],
      createdAt: new Date("2022-11-07T14:17:29.587Z"),
      currency: "GBP",
      discountAmount: 0,
      dueAt: new Date("2022-12-07T14:17:29.587Z"),
      extendedNotes: [],
      id: "0a6b9f6c-792f-493d-97ea-7c3a22a756ca",
      invoiceNumber: "INV-77705",
      isInclusiveOfTax: false,
      lineitems: [],
      metadata: [],
      notes: "Adinventitias sursum temptatio auctus comburo clarus ubi deprimo.",
      paymentCollectionMethod: "charge_automatically",
      payments: [],
      postedAt: new Date("2022-11-07T14:17:29.587Z"),
      reference: "PO-2331",
      salesorderIds: [],
      send: true,
      status: "OVERDUE",
      subTotalAmount: 0,
      taxAmount: 0,
      term: "NET_25",
      totalAmount: 0,
      type: "INVOICE",
      updatedAt: new Date("2026-04-23T13:33:04.671Z"),
      url: "https://gifted-yarmulke.info/invoices/INV-77705",
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
          id: "07e89019-b050-433d-82b5-479bf4f10682",
          mimeType: "application/pdf",
          name: "INV-77705.pdf",
        },
        {
          downloadUrl: "https://earnest-giggle.net",
          id: "49440b66-cdba-4c5e-b08c-5d5d5bc4e697",
          mimeType: "application/pdf",
          name: "INV-77705-1.pdf",
        },
      ],
      balanceAmount: 0,
      categoryIds: [],
      createdAt: new Date("2022-11-07T14:17:29.587Z"),
      currency: "GBP",
      discountAmount: 0,
      dueAt: new Date("2022-12-07T14:17:29.587Z"),
      extendedNotes: [],
      id: "0a6b9f6c-792f-493d-97ea-7c3a22a756ca",
      invoiceNumber: "INV-77705",
      isInclusiveOfTax: false,
      lineitems: [],
      metadata: [],
      notes: "Adinventitias sursum temptatio auctus comburo clarus ubi deprimo.",
      paymentCollectionMethod: "charge_automatically",
      payments: [],
      postedAt: new Date("2022-11-07T14:17:29.587Z"),
      reference: "PO-2331",
      salesorderIds: [],
      send: true,
      status: "OVERDUE",
      subTotalAmount: 0,
      taxAmount: 0,
      term: "NET_25",
      totalAmount: 0,
      type: "INVOICE",
      updatedAt: new Date("2026-04-23T13:33:04.671Z"),
      url: "https://gifted-yarmulke.info/invoices/INV-77705",
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
          id: "1ae1bfb4-4280-4891-9021-531ba9201dde",
          mimeType: "application/pdf",
          name: "INV-77705.pdf",
        },
        {
          downloadUrl: "https://earnest-giggle.net",
          id: "241135c1-bbbe-4eed-9883-54ac8c473d21",
          mimeType: "application/pdf",
          name: "INV-77705-1.pdf",
        },
      ],
      balanceAmount: 0,
      categoryIds: [],
      createdAt: new Date("2022-11-07T14:17:29.587Z"),
      currency: "GBP",
      discountAmount: 0,
      dueAt: new Date("2022-12-07T14:17:29.587Z"),
      extendedNotes: [],
      id: "3f2214cc-3623-4852-a478-7595ea510721",
      invoiceNumber: "INV-77705",
      isInclusiveOfTax: false,
      lineitems: [],
      metadata: [],
      notes: "Adinventitias sursum temptatio auctus comburo clarus ubi deprimo.",
      paymentCollectionMethod: "charge_automatically",
      payments: [],
      postedAt: new Date("2022-11-07T14:17:29.587Z"),
      reference: "PO-2331",
      salesorderIds: [],
      send: true,
      status: "OVERDUE",
      subTotalAmount: 0,
      taxAmount: 0,
      term: "NET_25",
      totalAmount: 0,
      type: "INVOICE",
      updatedAt: new Date("2026-04-23T13:33:04.728Z"),
      url: "https://gifted-yarmulke.info/invoices/INV-77705",
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
          id: "1ae1bfb4-4280-4891-9021-531ba9201dde",
          mimeType: "application/pdf",
          name: "INV-77705.pdf",
        },
        {
          downloadUrl: "https://earnest-giggle.net",
          id: "241135c1-bbbe-4eed-9883-54ac8c473d21",
          mimeType: "application/pdf",
          name: "INV-77705-1.pdf",
        },
      ],
      balanceAmount: 0,
      categoryIds: [],
      createdAt: new Date("2022-11-07T14:17:29.587Z"),
      currency: "GBP",
      discountAmount: 0,
      dueAt: new Date("2022-12-07T14:17:29.587Z"),
      extendedNotes: [],
      id: "3f2214cc-3623-4852-a478-7595ea510721",
      invoiceNumber: "INV-77705",
      isInclusiveOfTax: false,
      lineitems: [],
      metadata: [],
      notes: "Adinventitias sursum temptatio auctus comburo clarus ubi deprimo.",
      paymentCollectionMethod: "charge_automatically",
      payments: [],
      postedAt: new Date("2022-11-07T14:17:29.587Z"),
      reference: "PO-2331",
      salesorderIds: [],
      send: true,
      status: "OVERDUE",
      subTotalAmount: 0,
      taxAmount: 0,
      term: "NET_25",
      totalAmount: 0,
      type: "INVOICE",
      updatedAt: new Date("2026-04-23T13:33:04.728Z"),
      url: "https://gifted-yarmulke.info/invoices/INV-77705",
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
          id: "1ae1bfb4-4280-4891-9021-531ba9201dde",
          mimeType: "application/pdf",
          name: "INV-77705.pdf",
        },
        {
          downloadUrl: "https://earnest-giggle.net",
          id: "241135c1-bbbe-4eed-9883-54ac8c473d21",
          mimeType: "application/pdf",
          name: "INV-77705-1.pdf",
        },
      ],
      balanceAmount: 0,
      categoryIds: [],
      createdAt: new Date("2022-11-07T14:17:29.587Z"),
      currency: "GBP",
      discountAmount: 0,
      dueAt: new Date("2022-12-07T14:17:29.587Z"),
      extendedNotes: [],
      id: "3f2214cc-3623-4852-a478-7595ea510721",
      invoiceNumber: "INV-77705",
      isInclusiveOfTax: false,
      lineitems: [],
      metadata: [],
      notes: "Adinventitias sursum temptatio auctus comburo clarus ubi deprimo.",
      paymentCollectionMethod: "charge_automatically",
      payments: [],
      postedAt: new Date("2022-11-07T14:17:29.587Z"),
      reference: "PO-2331",
      salesorderIds: [],
      send: true,
      status: "OVERDUE",
      subTotalAmount: 0,
      taxAmount: 0,
      term: "NET_25",
      totalAmount: 0,
      type: "INVOICE",
      updatedAt: new Date("2026-04-23T13:33:04.728Z"),
      url: "https://gifted-yarmulke.info/invoices/INV-77705",
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
          id: "1ae1bfb4-4280-4891-9021-531ba9201dde",
          mimeType: "application/pdf",
          name: "INV-77705.pdf",
        },
        {
          downloadUrl: "https://earnest-giggle.net",
          id: "241135c1-bbbe-4eed-9883-54ac8c473d21",
          mimeType: "application/pdf",
          name: "INV-77705-1.pdf",
        },
      ],
      balanceAmount: 0,
      categoryIds: [],
      createdAt: new Date("2022-11-07T14:17:29.587Z"),
      currency: "GBP",
      discountAmount: 0,
      dueAt: new Date("2022-12-07T14:17:29.587Z"),
      extendedNotes: [],
      id: "3f2214cc-3623-4852-a478-7595ea510721",
      invoiceNumber: "INV-77705",
      isInclusiveOfTax: false,
      lineitems: [],
      metadata: [],
      notes: "Adinventitias sursum temptatio auctus comburo clarus ubi deprimo.",
      paymentCollectionMethod: "charge_automatically",
      payments: [],
      postedAt: new Date("2022-11-07T14:17:29.587Z"),
      reference: "PO-2331",
      salesorderIds: [],
      send: true,
      status: "OVERDUE",
      subTotalAmount: 0,
      taxAmount: 0,
      term: "NET_25",
      totalAmount: 0,
      type: "INVOICE",
      updatedAt: new Date("2026-04-23T13:33:04.728Z"),
      url: "https://gifted-yarmulke.info/invoices/INV-77705",
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