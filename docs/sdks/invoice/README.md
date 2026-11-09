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

Creates a AccountingInvoice. Provide the unified AccountingInvoice fields in the request body; they are mapped to the provider's API. Returns the created AccountingInvoice.

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
          id: "75d0808e-8df8-483f-9899-759b4676876e",
          mimeType: "application/pdf",
          name: "INV-77705.pdf",
        },
        {
          downloadUrl: "https://earnest-giggle.net",
          id: "0b32b2a5-b051-443c-a186-586cf9ebb1ef",
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
      id: "f96d4cd4-56cb-4b46-aafb-bce02e296e9e",
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
      updatedAt: new Date("2026-05-10T04:15:03.994Z"),
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
          id: "75d0808e-8df8-483f-9899-759b4676876e",
          mimeType: "application/pdf",
          name: "INV-77705.pdf",
        },
        {
          downloadUrl: "https://earnest-giggle.net",
          id: "0b32b2a5-b051-443c-a186-586cf9ebb1ef",
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
      id: "f96d4cd4-56cb-4b46-aafb-bce02e296e9e",
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
      updatedAt: new Date("2026-05-10T04:15:03.994Z"),
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

Retrieves a single AccountingInvoice by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

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

Returns a list of AccountingInvoices. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

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

Updates the AccountingInvoice identified by `id`. Provide the unified AccountingInvoice fields to change in the request body.

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
          id: "36bf85d6-fd5f-4c7e-a9b3-84721345579b",
          mimeType: "application/pdf",
          name: "INV-77705.pdf",
        },
        {
          downloadUrl: "https://earnest-giggle.net",
          id: "27c4dfde-febc-4568-b259-0e9c949648f9",
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
      id: "1b91f3da-0b86-4b35-8195-311c86536737",
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
      updatedAt: new Date("2026-05-10T04:15:04.045Z"),
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
          id: "36bf85d6-fd5f-4c7e-a9b3-84721345579b",
          mimeType: "application/pdf",
          name: "INV-77705.pdf",
        },
        {
          downloadUrl: "https://earnest-giggle.net",
          id: "27c4dfde-febc-4568-b259-0e9c949648f9",
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
      id: "1b91f3da-0b86-4b35-8195-311c86536737",
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
      updatedAt: new Date("2026-05-10T04:15:04.045Z"),
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

Deletes the AccountingInvoice identified by `id`.

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

Updates the AccountingInvoice identified by `id`. Provide the unified AccountingInvoice fields to change in the request body.

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
          id: "36bf85d6-fd5f-4c7e-a9b3-84721345579b",
          mimeType: "application/pdf",
          name: "INV-77705.pdf",
        },
        {
          downloadUrl: "https://earnest-giggle.net",
          id: "27c4dfde-febc-4568-b259-0e9c949648f9",
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
      id: "1b91f3da-0b86-4b35-8195-311c86536737",
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
      updatedAt: new Date("2026-05-10T04:15:04.045Z"),
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
          id: "36bf85d6-fd5f-4c7e-a9b3-84721345579b",
          mimeType: "application/pdf",
          name: "INV-77705.pdf",
        },
        {
          downloadUrl: "https://earnest-giggle.net",
          id: "27c4dfde-febc-4568-b259-0e9c949648f9",
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
      id: "1b91f3da-0b86-4b35-8195-311c86536737",
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
      updatedAt: new Date("2026-05-10T04:15:04.045Z"),
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