SDK for [Unified.to](https://unified.to) API
</div>

<!-- Start Summary [summary] -->
## Summary

Unified.to  API: One API to Rule Them All

For more information about the API: [API Documentation](https://docs.unified.to)
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
  * [Installation](#installation)
  * [SDK Example Usage](#sdk-example-usage)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Authentication](#authentication)
  * [Error Handling](#error-handling)
  * [Requirements](#requirements)
  * [File uploads](#file-uploads)
  * [Retries](#retries)
  * [Debugging](#debugging)
  * [Standalone functions](#standalone-functions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## Installation

### NPM

```bash
npm add @unified-api/typescript-sdk
```

### Yarn

```bash
yarn add @unified-api/typescript-sdk
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

async function run() {
    const sdk = new UnifiedTo({
        security: {
            jwt: "<YOUR_API_KEY_HERE>",
        },
    });

    const res = await sdk.accounting.listAccountingAccounts({
        connectionId: "<value>",
    });

    if (res.statusCode == 200) {
        // handle response
        console.log(res.accountingAccounts);
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| #   | Server                      | Description                |
| --- | --------------------------- | -------------------------- |
| 0   | `https://api.unified.to`    | North American data region |
| 1   | `https://api-eu.unified.to` | European data region       |
| 2   | `https://api-au.unified.to` | Australian data region     |

#### Example

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  serverIdx: 0,
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.accounting.createAccountingAccount({
    accountingAccount: {},
    connectionId: "<id>",
  });

  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  serverURL: "https://api-au.unified.to",
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.accounting.createAccountingAccount({
    accountingAccount: {},
    connectionId: "<id>",
  });

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->



<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { HTTPClient } from "@unified-api/typescript-sdk/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new UnifiedTo({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->



<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name  | Type   | Scheme  |
| ----- | ------ | ------- |
| `jwt` | apiKey | API key |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. For example:
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.accounting.createAccountingAccount({
    accountingAccount: {},
    connectionId: "<id>",
  });

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- No SDK Installation -->
<!-- No SDK Example Usage -->
<!-- No SDK Available Operations -->
<!-- Start Error Handling [errors] -->
## Error Handling

[`UnifiedToError`](./src/sdk/models/errors/unifiedtoerror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                            |
| ------------------- | ---------- | ------------------------------------------------------ |
| `error.message`     | `string`   | Error message                                          |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                     |
| `error.headers`     | `Headers`  | HTTP response headers                                  |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned. |
| `error.rawResponse` | `Response` | Raw HTTP response                                      |

### Example
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import * as errors from "@unified-api/typescript-sdk/sdk/models/errors";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  try {
    const result = await unifiedTo.accounting.createAccountingAccount({
      accountingAccount: {},
      connectionId: "<id>",
    });

    console.log(result);
  } catch (error) {
    if (error instanceof errors.UnifiedToError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);
    }
  }
}

run();

```

### Error Classes
**Primary error:**
* [`UnifiedToError`](./src/sdk/models/errors/unifiedtoerror.ts): The base class for HTTP error responses.

<details><summary>Less common errors (6)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/sdk/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/sdk/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/sdk/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/sdk/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/sdk/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`UnifiedToError`](./src/sdk/models/errors/unifiedtoerror.ts)**:
* [`ResponseValidationError`](./src/sdk/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>
<!-- End Error Handling [errors] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.passthrough.createPassthroughRaw({
    connectionId: "<id>",
    path: "/var/log",
  });

  console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.accounting.createAccountingAccount({
    accountingAccount: {},
    connectionId: "<id>",
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.accounting.createAccountingAccount({
    accountingAccount: {},
    connectionId: "<id>",
  });

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const sdk = new UnifiedTo({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`accountingCreateAccountingAccount`](docs/sdks/account/README.md#createaccountingaccount) - Create an account
- [`accountingCreateAccountingAccount`](docs/sdks/accounting/README.md#createaccountingaccount) - Create an account
- [`accountingCreateAccountingBill`](docs/sdks/accounting/README.md#createaccountingbill) - Create a bill
- [`accountingCreateAccountingBill`](docs/sdks/bill/README.md#createaccountingbill) - Create a bill
- [`accountingCreateAccountingCategory`](docs/sdks/accounting/README.md#createaccountingcategory) - Create a category
- [`accountingCreateAccountingCategory`](docs/sdks/category/README.md#createaccountingcategory) - Create a category
- [`accountingCreateAccountingContact`](docs/sdks/accounting/README.md#createaccountingcontact) - Create a contact
- [`accountingCreateAccountingContact`](docs/sdks/contact/README.md#createaccountingcontact) - Create a contact
- [`accountingCreateAccountingCreditmemo`](docs/sdks/accounting/README.md#createaccountingcreditmemo) - Create a creditmemo
- [`accountingCreateAccountingCreditmemo`](docs/sdks/creditmemo/README.md#createaccountingcreditmemo) - Create a creditmemo
- [`accountingCreateAccountingExpense`](docs/sdks/accounting/README.md#createaccountingexpense) - Create an expense
- [`accountingCreateAccountingExpense`](docs/sdks/expense/README.md#createaccountingexpense) - Create an expense
- [`accountingCreateAccountingInvoice`](docs/sdks/accounting/README.md#createaccountinginvoice) - Create an invoice
- [`accountingCreateAccountingInvoice`](docs/sdks/invoice/README.md#createaccountinginvoice) - Create an invoice
- [`accountingCreateAccountingJournal`](docs/sdks/accounting/README.md#createaccountingjournal) - Create a journal
- [`accountingCreateAccountingJournal`](docs/sdks/journal/README.md#createaccountingjournal) - Create a journal
- [`accountingCreateAccountingOrder`](docs/sdks/accounting/README.md#createaccountingorder) - Create an order
- [`accountingCreateAccountingOrder`](docs/sdks/order/README.md#createaccountingorder) - Create an order
- [`accountingCreateAccountingPurchaseorder`](docs/sdks/accounting/README.md#createaccountingpurchaseorder) - Create a purchaseorder
- [`accountingCreateAccountingPurchaseorder`](docs/sdks/purchaseorder/README.md#createaccountingpurchaseorder) - Create a purchaseorder
- [`accountingCreateAccountingSalesorder`](docs/sdks/accounting/README.md#createaccountingsalesorder) - Create a salesorder
- [`accountingCreateAccountingSalesorder`](docs/sdks/salesorder/README.md#createaccountingsalesorder) - Create a salesorder
- [`accountingCreateAccountingTaxrate`](docs/sdks/accounting/README.md#createaccountingtaxrate) - Create a taxrate
- [`accountingCreateAccountingTaxrate`](docs/sdks/taxrate/README.md#createaccountingtaxrate) - Create a taxrate
- [`accountingCreateAccountingTransaction`](docs/sdks/accounting/README.md#createaccountingtransaction) - Create a transaction
- [`accountingCreateAccountingTransaction`](docs/sdks/transaction/README.md#createaccountingtransaction) - Create a transaction
- [`accountingGetAccountingAccount`](docs/sdks/account/README.md#getaccountingaccount) - Retrieve an account
- [`accountingGetAccountingAccount`](docs/sdks/accounting/README.md#getaccountingaccount) - Retrieve an account
- [`accountingGetAccountingBalancesheet`](docs/sdks/accounting/README.md#getaccountingbalancesheet) - Retrieve a balancesheet
- [`accountingGetAccountingBalancesheet`](docs/sdks/balancesheet/README.md#getaccountingbalancesheet) - Retrieve a balancesheet
- [`accountingGetAccountingBill`](docs/sdks/accounting/README.md#getaccountingbill) - Retrieve a bill
- [`accountingGetAccountingBill`](docs/sdks/bill/README.md#getaccountingbill) - Retrieve a bill
- [`accountingGetAccountingCashflow`](docs/sdks/accounting/README.md#getaccountingcashflow) - Retrieve a cashflow
- [`accountingGetAccountingCashflow`](docs/sdks/cashflow/README.md#getaccountingcashflow) - Retrieve a cashflow
- [`accountingGetAccountingCategory`](docs/sdks/accounting/README.md#getaccountingcategory) - Retrieve a category
- [`accountingGetAccountingCategory`](docs/sdks/category/README.md#getaccountingcategory) - Retrieve a category
- [`accountingGetAccountingContact`](docs/sdks/accounting/README.md#getaccountingcontact) - Retrieve a contact
- [`accountingGetAccountingContact`](docs/sdks/contact/README.md#getaccountingcontact) - Retrieve a contact
- [`accountingGetAccountingCreditmemo`](docs/sdks/accounting/README.md#getaccountingcreditmemo) - Retrieve a creditmemo
- [`accountingGetAccountingCreditmemo`](docs/sdks/creditmemo/README.md#getaccountingcreditmemo) - Retrieve a creditmemo
- [`accountingGetAccountingExpense`](docs/sdks/accounting/README.md#getaccountingexpense) - Retrieve an expense
- [`accountingGetAccountingExpense`](docs/sdks/expense/README.md#getaccountingexpense) - Retrieve an expense
- [`accountingGetAccountingInvoice`](docs/sdks/accounting/README.md#getaccountinginvoice) - Retrieve an invoice
- [`accountingGetAccountingInvoice`](docs/sdks/invoice/README.md#getaccountinginvoice) - Retrieve an invoice
- [`accountingGetAccountingJournal`](docs/sdks/accounting/README.md#getaccountingjournal) - Retrieve a journal
- [`accountingGetAccountingJournal`](docs/sdks/journal/README.md#getaccountingjournal) - Retrieve a journal
- [`accountingGetAccountingOrder`](docs/sdks/accounting/README.md#getaccountingorder) - Retrieve an order
- [`accountingGetAccountingOrder`](docs/sdks/order/README.md#getaccountingorder) - Retrieve an order
- [`accountingGetAccountingOrganization`](docs/sdks/accounting/README.md#getaccountingorganization) - Retrieve an organization
- [`accountingGetAccountingOrganization`](docs/sdks/organization/README.md#getaccountingorganization) - Retrieve an organization
- [`accountingGetAccountingProfitloss`](docs/sdks/accounting/README.md#getaccountingprofitloss) - Retrieve a profitloss
- [`accountingGetAccountingProfitloss`](docs/sdks/profitloss/README.md#getaccountingprofitloss) - Retrieve a profitloss
- [`accountingGetAccountingPurchaseorder`](docs/sdks/accounting/README.md#getaccountingpurchaseorder) - Retrieve a purchaseorder
- [`accountingGetAccountingPurchaseorder`](docs/sdks/purchaseorder/README.md#getaccountingpurchaseorder) - Retrieve a purchaseorder
- [`accountingGetAccountingReport`](docs/sdks/accounting/README.md#getaccountingreport) - Retrieve a report
- [`accountingGetAccountingReport`](docs/sdks/report/README.md#getaccountingreport) - Retrieve a report
- [`accountingGetAccountingSalesorder`](docs/sdks/accounting/README.md#getaccountingsalesorder) - Retrieve a salesorder
- [`accountingGetAccountingSalesorder`](docs/sdks/salesorder/README.md#getaccountingsalesorder) - Retrieve a salesorder
- [`accountingGetAccountingTaxrate`](docs/sdks/accounting/README.md#getaccountingtaxrate) - Retrieve a taxrate
- [`accountingGetAccountingTaxrate`](docs/sdks/taxrate/README.md#getaccountingtaxrate) - Retrieve a taxrate
- [`accountingGetAccountingTransaction`](docs/sdks/accounting/README.md#getaccountingtransaction) - Retrieve a transaction
- [`accountingGetAccountingTransaction`](docs/sdks/transaction/README.md#getaccountingtransaction) - Retrieve a transaction
- [`accountingGetAccountingTrialbalance`](docs/sdks/accounting/README.md#getaccountingtrialbalance) - Retrieve a trialbalance
- [`accountingGetAccountingTrialbalance`](docs/sdks/trialbalance/README.md#getaccountingtrialbalance) - Retrieve a trialbalance
- [`accountingListAccountingAccounts`](docs/sdks/account/README.md#listaccountingaccounts) - List all accounts
- [`accountingListAccountingAccounts`](docs/sdks/accounting/README.md#listaccountingaccounts) - List all accounts
- [`accountingListAccountingBalancesheets`](docs/sdks/accounting/README.md#listaccountingbalancesheets) - List all balancesheets
- [`accountingListAccountingBalancesheets`](docs/sdks/balancesheet/README.md#listaccountingbalancesheets) - List all balancesheets
- [`accountingListAccountingBills`](docs/sdks/accounting/README.md#listaccountingbills) - List all bills
- [`accountingListAccountingBills`](docs/sdks/bill/README.md#listaccountingbills) - List all bills
- [`accountingListAccountingCashflows`](docs/sdks/accounting/README.md#listaccountingcashflows) - List all cashflows
- [`accountingListAccountingCashflows`](docs/sdks/cashflow/README.md#listaccountingcashflows) - List all cashflows
- [`accountingListAccountingCategories`](docs/sdks/accounting/README.md#listaccountingcategories) - List all categories
- [`accountingListAccountingCategories`](docs/sdks/category/README.md#listaccountingcategories) - List all categories
- [`accountingListAccountingContacts`](docs/sdks/accounting/README.md#listaccountingcontacts) - List all contacts
- [`accountingListAccountingContacts`](docs/sdks/contact/README.md#listaccountingcontacts) - List all contacts
- [`accountingListAccountingCreditmemoes`](docs/sdks/accounting/README.md#listaccountingcreditmemoes) - List all creditmemoes
- [`accountingListAccountingCreditmemoes`](docs/sdks/creditmemo/README.md#listaccountingcreditmemoes) - List all creditmemoes
- [`accountingListAccountingExpenses`](docs/sdks/accounting/README.md#listaccountingexpenses) - List all expenses
- [`accountingListAccountingExpenses`](docs/sdks/expense/README.md#listaccountingexpenses) - List all expenses
- [`accountingListAccountingInvoices`](docs/sdks/accounting/README.md#listaccountinginvoices) - List all invoices
- [`accountingListAccountingInvoices`](docs/sdks/invoice/README.md#listaccountinginvoices) - List all invoices
- [`accountingListAccountingJournals`](docs/sdks/accounting/README.md#listaccountingjournals) - List all journals
- [`accountingListAccountingJournals`](docs/sdks/journal/README.md#listaccountingjournals) - List all journals
- [`accountingListAccountingOrders`](docs/sdks/accounting/README.md#listaccountingorders) - List all orders
- [`accountingListAccountingOrders`](docs/sdks/order/README.md#listaccountingorders) - List all orders
- [`accountingListAccountingOrganizations`](docs/sdks/accounting/README.md#listaccountingorganizations) - List all organizations
- [`accountingListAccountingOrganizations`](docs/sdks/organization/README.md#listaccountingorganizations) - List all organizations
- [`accountingListAccountingProfitlosses`](docs/sdks/accounting/README.md#listaccountingprofitlosses) - List all profitlosses
- [`accountingListAccountingProfitlosses`](docs/sdks/profitloss/README.md#listaccountingprofitlosses) - List all profitlosses
- [`accountingListAccountingPurchaseorders`](docs/sdks/accounting/README.md#listaccountingpurchaseorders) - List all purchaseorders
- [`accountingListAccountingPurchaseorders`](docs/sdks/purchaseorder/README.md#listaccountingpurchaseorders) - List all purchaseorders
- [`accountingListAccountingReports`](docs/sdks/accounting/README.md#listaccountingreports) - List all reports
- [`accountingListAccountingReports`](docs/sdks/report/README.md#listaccountingreports) - List all reports
- [`accountingListAccountingSalesorders`](docs/sdks/accounting/README.md#listaccountingsalesorders) - List all salesorders
- [`accountingListAccountingSalesorders`](docs/sdks/salesorder/README.md#listaccountingsalesorders) - List all salesorders
- [`accountingListAccountingTaxrates`](docs/sdks/accounting/README.md#listaccountingtaxrates) - List all taxrates
- [`accountingListAccountingTaxrates`](docs/sdks/taxrate/README.md#listaccountingtaxrates) - List all taxrates
- [`accountingListAccountingTransactions`](docs/sdks/accounting/README.md#listaccountingtransactions) - List all transactions
- [`accountingListAccountingTransactions`](docs/sdks/transaction/README.md#listaccountingtransactions) - List all transactions
- [`accountingListAccountingTrialbalances`](docs/sdks/accounting/README.md#listaccountingtrialbalances) - List all trialbalances
- [`accountingListAccountingTrialbalances`](docs/sdks/trialbalance/README.md#listaccountingtrialbalances) - List all trialbalances
- [`accountingPatchAccountingAccount`](docs/sdks/account/README.md#patchaccountingaccount) - Update an account
- [`accountingPatchAccountingAccount`](docs/sdks/accounting/README.md#patchaccountingaccount) - Update an account
- [`accountingPatchAccountingBill`](docs/sdks/accounting/README.md#patchaccountingbill) - Update a bill
- [`accountingPatchAccountingBill`](docs/sdks/bill/README.md#patchaccountingbill) - Update a bill
- [`accountingPatchAccountingCategory`](docs/sdks/accounting/README.md#patchaccountingcategory) - Update a category
- [`accountingPatchAccountingCategory`](docs/sdks/category/README.md#patchaccountingcategory) - Update a category
- [`accountingPatchAccountingContact`](docs/sdks/accounting/README.md#patchaccountingcontact) - Update a contact
- [`accountingPatchAccountingContact`](docs/sdks/contact/README.md#patchaccountingcontact) - Update a contact
- [`accountingPatchAccountingCreditmemo`](docs/sdks/accounting/README.md#patchaccountingcreditmemo) - Update a creditmemo
- [`accountingPatchAccountingCreditmemo`](docs/sdks/creditmemo/README.md#patchaccountingcreditmemo) - Update a creditmemo
- [`accountingPatchAccountingExpense`](docs/sdks/accounting/README.md#patchaccountingexpense) - Update an expense
- [`accountingPatchAccountingExpense`](docs/sdks/expense/README.md#patchaccountingexpense) - Update an expense
- [`accountingPatchAccountingInvoice`](docs/sdks/accounting/README.md#patchaccountinginvoice) - Update an invoice
- [`accountingPatchAccountingInvoice`](docs/sdks/invoice/README.md#patchaccountinginvoice) - Update an invoice
- [`accountingPatchAccountingJournal`](docs/sdks/accounting/README.md#patchaccountingjournal) - Update a journal
- [`accountingPatchAccountingJournal`](docs/sdks/journal/README.md#patchaccountingjournal) - Update a journal
- [`accountingPatchAccountingOrder`](docs/sdks/accounting/README.md#patchaccountingorder) - Update an order
- [`accountingPatchAccountingOrder`](docs/sdks/order/README.md#patchaccountingorder) - Update an order
- [`accountingPatchAccountingPurchaseorder`](docs/sdks/accounting/README.md#patchaccountingpurchaseorder) - Update a purchaseorder
- [`accountingPatchAccountingPurchaseorder`](docs/sdks/purchaseorder/README.md#patchaccountingpurchaseorder) - Update a purchaseorder
- [`accountingPatchAccountingSalesorder`](docs/sdks/accounting/README.md#patchaccountingsalesorder) - Update a salesorder
- [`accountingPatchAccountingSalesorder`](docs/sdks/salesorder/README.md#patchaccountingsalesorder) - Update a salesorder
- [`accountingPatchAccountingTaxrate`](docs/sdks/accounting/README.md#patchaccountingtaxrate) - Update a taxrate
- [`accountingPatchAccountingTaxrate`](docs/sdks/taxrate/README.md#patchaccountingtaxrate) - Update a taxrate
- [`accountingPatchAccountingTransaction`](docs/sdks/accounting/README.md#patchaccountingtransaction) - Update a transaction
- [`accountingPatchAccountingTransaction`](docs/sdks/transaction/README.md#patchaccountingtransaction) - Update a transaction
- [`accountingRemoveAccountingAccount`](docs/sdks/account/README.md#removeaccountingaccount) - Remove an account
- [`accountingRemoveAccountingAccount`](docs/sdks/accounting/README.md#removeaccountingaccount) - Remove an account
- [`accountingRemoveAccountingBill`](docs/sdks/accounting/README.md#removeaccountingbill) - Remove a bill
- [`accountingRemoveAccountingBill`](docs/sdks/bill/README.md#removeaccountingbill) - Remove a bill
- [`accountingRemoveAccountingCategory`](docs/sdks/accounting/README.md#removeaccountingcategory) - Remove a category
- [`accountingRemoveAccountingCategory`](docs/sdks/category/README.md#removeaccountingcategory) - Remove a category
- [`accountingRemoveAccountingContact`](docs/sdks/accounting/README.md#removeaccountingcontact) - Remove a contact
- [`accountingRemoveAccountingContact`](docs/sdks/contact/README.md#removeaccountingcontact) - Remove a contact
- [`accountingRemoveAccountingCreditmemo`](docs/sdks/accounting/README.md#removeaccountingcreditmemo) - Remove a creditmemo
- [`accountingRemoveAccountingCreditmemo`](docs/sdks/creditmemo/README.md#removeaccountingcreditmemo) - Remove a creditmemo
- [`accountingRemoveAccountingExpense`](docs/sdks/accounting/README.md#removeaccountingexpense) - Remove an expense
- [`accountingRemoveAccountingExpense`](docs/sdks/expense/README.md#removeaccountingexpense) - Remove an expense
- [`accountingRemoveAccountingInvoice`](docs/sdks/accounting/README.md#removeaccountinginvoice) - Remove an invoice
- [`accountingRemoveAccountingInvoice`](docs/sdks/invoice/README.md#removeaccountinginvoice) - Remove an invoice
- [`accountingRemoveAccountingJournal`](docs/sdks/accounting/README.md#removeaccountingjournal) - Remove a journal
- [`accountingRemoveAccountingJournal`](docs/sdks/journal/README.md#removeaccountingjournal) - Remove a journal
- [`accountingRemoveAccountingOrder`](docs/sdks/accounting/README.md#removeaccountingorder) - Remove an order
- [`accountingRemoveAccountingOrder`](docs/sdks/order/README.md#removeaccountingorder) - Remove an order
- [`accountingRemoveAccountingPurchaseorder`](docs/sdks/accounting/README.md#removeaccountingpurchaseorder) - Remove a purchaseorder
- [`accountingRemoveAccountingPurchaseorder`](docs/sdks/purchaseorder/README.md#removeaccountingpurchaseorder) - Remove a purchaseorder
- [`accountingRemoveAccountingSalesorder`](docs/sdks/accounting/README.md#removeaccountingsalesorder) - Remove a salesorder
- [`accountingRemoveAccountingSalesorder`](docs/sdks/salesorder/README.md#removeaccountingsalesorder) - Remove a salesorder
- [`accountingRemoveAccountingTaxrate`](docs/sdks/accounting/README.md#removeaccountingtaxrate) - Remove a taxrate
- [`accountingRemoveAccountingTaxrate`](docs/sdks/taxrate/README.md#removeaccountingtaxrate) - Remove a taxrate
- [`accountingRemoveAccountingTransaction`](docs/sdks/accounting/README.md#removeaccountingtransaction) - Remove a transaction
- [`accountingRemoveAccountingTransaction`](docs/sdks/transaction/README.md#removeaccountingtransaction) - Remove a transaction
- [`accountingUpdateAccountingAccount`](docs/sdks/account/README.md#updateaccountingaccount) - Update an account
- [`accountingUpdateAccountingAccount`](docs/sdks/accounting/README.md#updateaccountingaccount) - Update an account
- [`accountingUpdateAccountingBill`](docs/sdks/accounting/README.md#updateaccountingbill) - Update a bill
- [`accountingUpdateAccountingBill`](docs/sdks/bill/README.md#updateaccountingbill) - Update a bill
- [`accountingUpdateAccountingCategory`](docs/sdks/accounting/README.md#updateaccountingcategory) - Update a category
- [`accountingUpdateAccountingCategory`](docs/sdks/category/README.md#updateaccountingcategory) - Update a category
- [`accountingUpdateAccountingContact`](docs/sdks/accounting/README.md#updateaccountingcontact) - Update a contact
- [`accountingUpdateAccountingContact`](docs/sdks/contact/README.md#updateaccountingcontact) - Update a contact
- [`accountingUpdateAccountingCreditmemo`](docs/sdks/accounting/README.md#updateaccountingcreditmemo) - Update a creditmemo
- [`accountingUpdateAccountingCreditmemo`](docs/sdks/creditmemo/README.md#updateaccountingcreditmemo) - Update a creditmemo
- [`accountingUpdateAccountingExpense`](docs/sdks/accounting/README.md#updateaccountingexpense) - Update an expense
- [`accountingUpdateAccountingExpense`](docs/sdks/expense/README.md#updateaccountingexpense) - Update an expense
- [`accountingUpdateAccountingInvoice`](docs/sdks/accounting/README.md#updateaccountinginvoice) - Update an invoice
- [`accountingUpdateAccountingInvoice`](docs/sdks/invoice/README.md#updateaccountinginvoice) - Update an invoice
- [`accountingUpdateAccountingJournal`](docs/sdks/accounting/README.md#updateaccountingjournal) - Update a journal
- [`accountingUpdateAccountingJournal`](docs/sdks/journal/README.md#updateaccountingjournal) - Update a journal
- [`accountingUpdateAccountingOrder`](docs/sdks/accounting/README.md#updateaccountingorder) - Update an order
- [`accountingUpdateAccountingOrder`](docs/sdks/order/README.md#updateaccountingorder) - Update an order
- [`accountingUpdateAccountingPurchaseorder`](docs/sdks/accounting/README.md#updateaccountingpurchaseorder) - Update a purchaseorder
- [`accountingUpdateAccountingPurchaseorder`](docs/sdks/purchaseorder/README.md#updateaccountingpurchaseorder) - Update a purchaseorder
- [`accountingUpdateAccountingSalesorder`](docs/sdks/accounting/README.md#updateaccountingsalesorder) - Update a salesorder
- [`accountingUpdateAccountingSalesorder`](docs/sdks/salesorder/README.md#updateaccountingsalesorder) - Update a salesorder
- [`accountingUpdateAccountingTaxrate`](docs/sdks/accounting/README.md#updateaccountingtaxrate) - Update a taxrate
- [`accountingUpdateAccountingTaxrate`](docs/sdks/taxrate/README.md#updateaccountingtaxrate) - Update a taxrate
- [`accountingUpdateAccountingTransaction`](docs/sdks/accounting/README.md#updateaccountingtransaction) - Update a transaction
- [`accountingUpdateAccountingTransaction`](docs/sdks/transaction/README.md#updateaccountingtransaction) - Update a transaction
- [`adsCreateAdsAd`](docs/sdks/ad/README.md#createadsad) - Create an ad
- [`adsCreateAdsAd`](docs/sdks/ads/README.md#createadsad) - Create an ad
- [`adsCreateAdsCampaign`](docs/sdks/ads/README.md#createadscampaign) - Create a campaign
- [`adsCreateAdsCampaign`](docs/sdks/campaign/README.md#createadscampaign) - Create a campaign
- [`adsCreateAdsCreative`](docs/sdks/ads/README.md#createadscreative) - Create a creative
- [`adsCreateAdsCreative`](docs/sdks/creative/README.md#createadscreative) - Create a creative
- [`adsCreateAdsGroup`](docs/sdks/ads/README.md#createadsgroup) - Create a group
- [`adsCreateAdsGroup`](docs/sdks/group/README.md#createadsgroup) - Create a group
- [`adsCreateAdsInsertionorder`](docs/sdks/ads/README.md#createadsinsertionorder) - Create an insertionorder
- [`adsCreateAdsInsertionorder`](docs/sdks/insertionorder/README.md#createadsinsertionorder) - Create an insertionorder
- [`adsGetAdsAd`](docs/sdks/ad/README.md#getadsad) - Retrieve an ad
- [`adsGetAdsAd`](docs/sdks/ads/README.md#getadsad) - Retrieve an ad
- [`adsGetAdsCampaign`](docs/sdks/ads/README.md#getadscampaign) - Retrieve a campaign
- [`adsGetAdsCampaign`](docs/sdks/campaign/README.md#getadscampaign) - Retrieve a campaign
- [`adsGetAdsCreative`](docs/sdks/ads/README.md#getadscreative) - Retrieve a creative
- [`adsGetAdsCreative`](docs/sdks/creative/README.md#getadscreative) - Retrieve a creative
- [`adsGetAdsGroup`](docs/sdks/ads/README.md#getadsgroup) - Retrieve a group
- [`adsGetAdsGroup`](docs/sdks/group/README.md#getadsgroup) - Retrieve a group
- [`adsGetAdsInsertionorder`](docs/sdks/ads/README.md#getadsinsertionorder) - Retrieve an insertionorder
- [`adsGetAdsInsertionorder`](docs/sdks/insertionorder/README.md#getadsinsertionorder) - Retrieve an insertionorder
- [`adsListAdsAds`](docs/sdks/ad/README.md#listadsads) - List all ads
- [`adsListAdsAds`](docs/sdks/ads/README.md#listadsads) - List all ads
- [`adsListAdsCampaigns`](docs/sdks/ads/README.md#listadscampaigns) - List all campaigns
- [`adsListAdsCampaigns`](docs/sdks/campaign/README.md#listadscampaigns) - List all campaigns
- [`adsListAdsCreatives`](docs/sdks/ads/README.md#listadscreatives) - List all creatives
- [`adsListAdsCreatives`](docs/sdks/creative/README.md#listadscreatives) - List all creatives
- [`adsListAdsGroups`](docs/sdks/ads/README.md#listadsgroups) - List all groups
- [`adsListAdsGroups`](docs/sdks/group/README.md#listadsgroups) - List all groups
- [`adsListAdsInsertionorders`](docs/sdks/ads/README.md#listadsinsertionorders) - List all insertionorders
- [`adsListAdsInsertionorders`](docs/sdks/insertionorder/README.md#listadsinsertionorders) - List all insertionorders
- [`adsPatchAdsAd`](docs/sdks/ad/README.md#patchadsad) - Update an ad
- [`adsPatchAdsAd`](docs/sdks/ads/README.md#patchadsad) - Update an ad
- [`adsPatchAdsCampaign`](docs/sdks/ads/README.md#patchadscampaign) - Update a campaign
- [`adsPatchAdsCampaign`](docs/sdks/campaign/README.md#patchadscampaign) - Update a campaign
- [`adsPatchAdsCreative`](docs/sdks/ads/README.md#patchadscreative) - Update a creative
- [`adsPatchAdsCreative`](docs/sdks/creative/README.md#patchadscreative) - Update a creative
- [`adsPatchAdsGroup`](docs/sdks/ads/README.md#patchadsgroup) - Update a group
- [`adsPatchAdsGroup`](docs/sdks/group/README.md#patchadsgroup) - Update a group
- [`adsPatchAdsInsertionorder`](docs/sdks/ads/README.md#patchadsinsertionorder) - Update an insertionorder
- [`adsPatchAdsInsertionorder`](docs/sdks/insertionorder/README.md#patchadsinsertionorder) - Update an insertionorder
- [`adsRemoveAdsAd`](docs/sdks/ad/README.md#removeadsad) - Remove an ad
- [`adsRemoveAdsAd`](docs/sdks/ads/README.md#removeadsad) - Remove an ad
- [`adsRemoveAdsCampaign`](docs/sdks/ads/README.md#removeadscampaign) - Remove a campaign
- [`adsRemoveAdsCampaign`](docs/sdks/campaign/README.md#removeadscampaign) - Remove a campaign
- [`adsRemoveAdsCreative`](docs/sdks/ads/README.md#removeadscreative) - Remove a creative
- [`adsRemoveAdsCreative`](docs/sdks/creative/README.md#removeadscreative) - Remove a creative
- [`adsRemoveAdsGroup`](docs/sdks/ads/README.md#removeadsgroup) - Remove a group
- [`adsRemoveAdsGroup`](docs/sdks/group/README.md#removeadsgroup) - Remove a group
- [`adsRemoveAdsInsertionorder`](docs/sdks/ads/README.md#removeadsinsertionorder) - Remove an insertionorder
- [`adsRemoveAdsInsertionorder`](docs/sdks/insertionorder/README.md#removeadsinsertionorder) - Remove an insertionorder
- [`adsUpdateAdsAd`](docs/sdks/ad/README.md#updateadsad) - Update an ad
- [`adsUpdateAdsAd`](docs/sdks/ads/README.md#updateadsad) - Update an ad
- [`adsUpdateAdsCampaign`](docs/sdks/ads/README.md#updateadscampaign) - Update a campaign
- [`adsUpdateAdsCampaign`](docs/sdks/campaign/README.md#updateadscampaign) - Update a campaign
- [`adsUpdateAdsCreative`](docs/sdks/ads/README.md#updateadscreative) - Update a creative
- [`adsUpdateAdsCreative`](docs/sdks/creative/README.md#updateadscreative) - Update a creative
- [`adsUpdateAdsGroup`](docs/sdks/ads/README.md#updateadsgroup) - Update a group
- [`adsUpdateAdsGroup`](docs/sdks/group/README.md#updateadsgroup) - Update a group
- [`adsUpdateAdsInsertionorder`](docs/sdks/ads/README.md#updateadsinsertionorder) - Update an insertionorder
- [`adsUpdateAdsInsertionorder`](docs/sdks/insertionorder/README.md#updateadsinsertionorder) - Update an insertionorder
- [`atsCreateAtsActivity`](docs/sdks/activity/README.md#createatsactivity) - Create an activity
- [`atsCreateAtsActivity`](docs/sdks/ats/README.md#createatsactivity) - Create an activity
- [`atsCreateAtsApplication`](docs/sdks/application/README.md#createatsapplication) - Create an application
- [`atsCreateAtsApplication`](docs/sdks/ats/README.md#createatsapplication) - Create an application
- [`atsCreateAtsCandidate`](docs/sdks/ats/README.md#createatscandidate) - Create a candidate
- [`atsCreateAtsCandidate`](docs/sdks/candidate/README.md#createatscandidate) - Create a candidate
- [`atsCreateAtsCompany`](docs/sdks/ats/README.md#createatscompany) - Create a company
- [`atsCreateAtsCompany`](docs/sdks/company/README.md#createatscompany) - Create a company
- [`atsCreateAtsDocument`](docs/sdks/ats/README.md#createatsdocument) - Create a document
- [`atsCreateAtsDocument`](docs/sdks/document/README.md#createatsdocument) - Create a document
- [`atsCreateAtsInterview`](docs/sdks/ats/README.md#createatsinterview) - Create an interview
- [`atsCreateAtsInterview`](docs/sdks/interview/README.md#createatsinterview) - Create an interview
- [`atsCreateAtsJob`](docs/sdks/ats/README.md#createatsjob) - Create a job
- [`atsCreateAtsJob`](docs/sdks/job/README.md#createatsjob) - Create a job
- [`atsCreateAtsScorecard`](docs/sdks/ats/README.md#createatsscorecard) - Create a scorecard
- [`atsCreateAtsScorecard`](docs/sdks/scorecard/README.md#createatsscorecard) - Create a scorecard
- [`atsGetAtsActivity`](docs/sdks/activity/README.md#getatsactivity) - Retrieve an activity
- [`atsGetAtsActivity`](docs/sdks/ats/README.md#getatsactivity) - Retrieve an activity
- [`atsGetAtsApplication`](docs/sdks/application/README.md#getatsapplication) - Retrieve an application
- [`atsGetAtsApplication`](docs/sdks/ats/README.md#getatsapplication) - Retrieve an application
- [`atsGetAtsCandidate`](docs/sdks/ats/README.md#getatscandidate) - Retrieve a candidate
- [`atsGetAtsCandidate`](docs/sdks/candidate/README.md#getatscandidate) - Retrieve a candidate
- [`atsGetAtsCompany`](docs/sdks/ats/README.md#getatscompany) - Retrieve a company
- [`atsGetAtsCompany`](docs/sdks/company/README.md#getatscompany) - Retrieve a company
- [`atsGetAtsDocument`](docs/sdks/ats/README.md#getatsdocument) - Retrieve a document
- [`atsGetAtsDocument`](docs/sdks/document/README.md#getatsdocument) - Retrieve a document
- [`atsGetAtsInterview`](docs/sdks/ats/README.md#getatsinterview) - Retrieve an interview
- [`atsGetAtsInterview`](docs/sdks/interview/README.md#getatsinterview) - Retrieve an interview
- [`atsGetAtsJob`](docs/sdks/ats/README.md#getatsjob) - Retrieve a job
- [`atsGetAtsJob`](docs/sdks/job/README.md#getatsjob) - Retrieve a job
- [`atsGetAtsScorecard`](docs/sdks/ats/README.md#getatsscorecard) - Retrieve a scorecard
- [`atsGetAtsScorecard`](docs/sdks/scorecard/README.md#getatsscorecard) - Retrieve a scorecard
- [`atsListAtsActivities`](docs/sdks/activity/README.md#listatsactivities) - List all activities
- [`atsListAtsActivities`](docs/sdks/ats/README.md#listatsactivities) - List all activities
- [`atsListAtsApplications`](docs/sdks/application/README.md#listatsapplications) - List all applications
- [`atsListAtsApplications`](docs/sdks/ats/README.md#listatsapplications) - List all applications
- [`atsListAtsApplicationstatuses`](docs/sdks/applicationstatus/README.md#listatsapplicationstatuses) - List all applicationstatuses
- [`atsListAtsApplicationstatuses`](docs/sdks/ats/README.md#listatsapplicationstatuses) - List all applicationstatuses
- [`atsListAtsCandidates`](docs/sdks/ats/README.md#listatscandidates) - List all candidates
- [`atsListAtsCandidates`](docs/sdks/candidate/README.md#listatscandidates) - List all candidates
- [`atsListAtsCompanies`](docs/sdks/ats/README.md#listatscompanies) - List all companies
- [`atsListAtsCompanies`](docs/sdks/company/README.md#listatscompanies) - List all companies
- [`atsListAtsDocuments`](docs/sdks/ats/README.md#listatsdocuments) - List all documents
- [`atsListAtsDocuments`](docs/sdks/document/README.md#listatsdocuments) - List all documents
- [`atsListAtsInterviews`](docs/sdks/ats/README.md#listatsinterviews) - List all interviews
- [`atsListAtsInterviews`](docs/sdks/interview/README.md#listatsinterviews) - List all interviews
- [`atsListAtsJobs`](docs/sdks/ats/README.md#listatsjobs) - List all jobs
- [`atsListAtsJobs`](docs/sdks/job/README.md#listatsjobs) - List all jobs
- [`atsListAtsScorecards`](docs/sdks/ats/README.md#listatsscorecards) - List all scorecards
- [`atsListAtsScorecards`](docs/sdks/scorecard/README.md#listatsscorecards) - List all scorecards
- [`atsPatchAtsActivity`](docs/sdks/activity/README.md#patchatsactivity) - Update an activity
- [`atsPatchAtsActivity`](docs/sdks/ats/README.md#patchatsactivity) - Update an activity
- [`atsPatchAtsApplication`](docs/sdks/application/README.md#patchatsapplication) - Update an application
- [`atsPatchAtsApplication`](docs/sdks/ats/README.md#patchatsapplication) - Update an application
- [`atsPatchAtsCandidate`](docs/sdks/ats/README.md#patchatscandidate) - Update a candidate
- [`atsPatchAtsCandidate`](docs/sdks/candidate/README.md#patchatscandidate) - Update a candidate
- [`atsPatchAtsCompany`](docs/sdks/ats/README.md#patchatscompany) - Update a company
- [`atsPatchAtsCompany`](docs/sdks/company/README.md#patchatscompany) - Update a company
- [`atsPatchAtsDocument`](docs/sdks/ats/README.md#patchatsdocument) - Update a document
- [`atsPatchAtsDocument`](docs/sdks/document/README.md#patchatsdocument) - Update a document
- [`atsPatchAtsInterview`](docs/sdks/ats/README.md#patchatsinterview) - Update an interview
- [`atsPatchAtsInterview`](docs/sdks/interview/README.md#patchatsinterview) - Update an interview
- [`atsPatchAtsJob`](docs/sdks/ats/README.md#patchatsjob) - Update a job
- [`atsPatchAtsJob`](docs/sdks/job/README.md#patchatsjob) - Update a job
- [`atsPatchAtsScorecard`](docs/sdks/ats/README.md#patchatsscorecard) - Update a scorecard
- [`atsPatchAtsScorecard`](docs/sdks/scorecard/README.md#patchatsscorecard) - Update a scorecard
- [`atsRemoveAtsActivity`](docs/sdks/activity/README.md#removeatsactivity) - Remove an activity
- [`atsRemoveAtsActivity`](docs/sdks/ats/README.md#removeatsactivity) - Remove an activity
- [`atsRemoveAtsApplication`](docs/sdks/application/README.md#removeatsapplication) - Remove an application
- [`atsRemoveAtsApplication`](docs/sdks/ats/README.md#removeatsapplication) - Remove an application
- [`atsRemoveAtsCandidate`](docs/sdks/ats/README.md#removeatscandidate) - Remove a candidate
- [`atsRemoveAtsCandidate`](docs/sdks/candidate/README.md#removeatscandidate) - Remove a candidate
- [`atsRemoveAtsCompany`](docs/sdks/ats/README.md#removeatscompany) - Remove a company
- [`atsRemoveAtsCompany`](docs/sdks/company/README.md#removeatscompany) - Remove a company
- [`atsRemoveAtsDocument`](docs/sdks/ats/README.md#removeatsdocument) - Remove a document
- [`atsRemoveAtsDocument`](docs/sdks/document/README.md#removeatsdocument) - Remove a document
- [`atsRemoveAtsInterview`](docs/sdks/ats/README.md#removeatsinterview) - Remove an interview
- [`atsRemoveAtsInterview`](docs/sdks/interview/README.md#removeatsinterview) - Remove an interview
- [`atsRemoveAtsJob`](docs/sdks/ats/README.md#removeatsjob) - Remove a job
- [`atsRemoveAtsJob`](docs/sdks/job/README.md#removeatsjob) - Remove a job
- [`atsRemoveAtsScorecard`](docs/sdks/ats/README.md#removeatsscorecard) - Remove a scorecard
- [`atsRemoveAtsScorecard`](docs/sdks/scorecard/README.md#removeatsscorecard) - Remove a scorecard
- [`atsUpdateAtsActivity`](docs/sdks/activity/README.md#updateatsactivity) - Update an activity
- [`atsUpdateAtsActivity`](docs/sdks/ats/README.md#updateatsactivity) - Update an activity
- [`atsUpdateAtsApplication`](docs/sdks/application/README.md#updateatsapplication) - Update an application
- [`atsUpdateAtsApplication`](docs/sdks/ats/README.md#updateatsapplication) - Update an application
- [`atsUpdateAtsCandidate`](docs/sdks/ats/README.md#updateatscandidate) - Update a candidate
- [`atsUpdateAtsCandidate`](docs/sdks/candidate/README.md#updateatscandidate) - Update a candidate
- [`atsUpdateAtsCompany`](docs/sdks/ats/README.md#updateatscompany) - Update a company
- [`atsUpdateAtsCompany`](docs/sdks/company/README.md#updateatscompany) - Update a company
- [`atsUpdateAtsDocument`](docs/sdks/ats/README.md#updateatsdocument) - Update a document
- [`atsUpdateAtsDocument`](docs/sdks/document/README.md#updateatsdocument) - Update a document
- [`atsUpdateAtsInterview`](docs/sdks/ats/README.md#updateatsinterview) - Update an interview
- [`atsUpdateAtsInterview`](docs/sdks/interview/README.md#updateatsinterview) - Update an interview
- [`atsUpdateAtsJob`](docs/sdks/ats/README.md#updateatsjob) - Update a job
- [`atsUpdateAtsJob`](docs/sdks/job/README.md#updateatsjob) - Update a job
- [`atsUpdateAtsScorecard`](docs/sdks/ats/README.md#updateatsscorecard) - Update a scorecard
- [`atsUpdateAtsScorecard`](docs/sdks/scorecard/README.md#updateatsscorecard) - Update a scorecard
- [`authGetUnifiedIntegrationLogin`](docs/sdks/auth/README.md#getunifiedintegrationlogin) - Sign in a user
- [`authGetUnifiedIntegrationLogin`](docs/sdks/login/README.md#getunifiedintegrationlogin) - Sign in a user
- [`calendarCreateCalendarCalendar`](docs/sdks/calendar/README.md#createcalendarcalendar) - Create a calendar
- [`calendarCreateCalendarEvent`](docs/sdks/calendar/README.md#createcalendarevent) - Create an event
- [`calendarCreateCalendarEvent`](docs/sdks/event/README.md#createcalendarevent) - Create an event
- [`calendarCreateCalendarLink`](docs/sdks/calendar/README.md#createcalendarlink) - Create a link
- [`calendarCreateCalendarLink`](docs/sdks/link/README.md#createcalendarlink) - Create a link
- [`calendarGetCalendarCalendar`](docs/sdks/calendar/README.md#getcalendarcalendar) - Retrieve a calendar
- [`calendarGetCalendarEvent`](docs/sdks/calendar/README.md#getcalendarevent) - Retrieve an event
- [`calendarGetCalendarEvent`](docs/sdks/event/README.md#getcalendarevent) - Retrieve an event
- [`calendarGetCalendarLink`](docs/sdks/calendar/README.md#getcalendarlink) - Retrieve a link
- [`calendarGetCalendarLink`](docs/sdks/link/README.md#getcalendarlink) - Retrieve a link
- [`calendarGetCalendarRecording`](docs/sdks/calendar/README.md#getcalendarrecording) - Retrieve a recording
- [`calendarGetCalendarRecording`](docs/sdks/recording/README.md#getcalendarrecording) - Retrieve a recording
- [`calendarListCalendarBusies`](docs/sdks/busy/README.md#listcalendarbusies) - List all busies
- [`calendarListCalendarBusies`](docs/sdks/calendar/README.md#listcalendarbusies) - List all busies
- [`calendarListCalendarCalendars`](docs/sdks/calendar/README.md#listcalendarcalendars) - List all calendars
- [`calendarListCalendarEvents`](docs/sdks/calendar/README.md#listcalendarevents) - List all events
- [`calendarListCalendarEvents`](docs/sdks/event/README.md#listcalendarevents) - List all events
- [`calendarListCalendarLinks`](docs/sdks/calendar/README.md#listcalendarlinks) - List all links
- [`calendarListCalendarLinks`](docs/sdks/link/README.md#listcalendarlinks) - List all links
- [`calendarListCalendarRecordings`](docs/sdks/calendar/README.md#listcalendarrecordings) - List all recordings
- [`calendarListCalendarRecordings`](docs/sdks/recording/README.md#listcalendarrecordings) - List all recordings
- [`calendarPatchCalendarCalendar`](docs/sdks/calendar/README.md#patchcalendarcalendar) - Update a calendar
- [`calendarPatchCalendarEvent`](docs/sdks/calendar/README.md#patchcalendarevent) - Update an event
- [`calendarPatchCalendarEvent`](docs/sdks/event/README.md#patchcalendarevent) - Update an event
- [`calendarPatchCalendarLink`](docs/sdks/calendar/README.md#patchcalendarlink) - Update a link
- [`calendarPatchCalendarLink`](docs/sdks/link/README.md#patchcalendarlink) - Update a link
- [`calendarRemoveCalendarCalendar`](docs/sdks/calendar/README.md#removecalendarcalendar) - Remove a calendar
- [`calendarRemoveCalendarEvent`](docs/sdks/calendar/README.md#removecalendarevent) - Remove an event
- [`calendarRemoveCalendarEvent`](docs/sdks/event/README.md#removecalendarevent) - Remove an event
- [`calendarRemoveCalendarLink`](docs/sdks/calendar/README.md#removecalendarlink) - Remove a link
- [`calendarRemoveCalendarLink`](docs/sdks/link/README.md#removecalendarlink) - Remove a link
- [`calendarUpdateCalendarCalendar`](docs/sdks/calendar/README.md#updatecalendarcalendar) - Update a calendar
- [`calendarUpdateCalendarEvent`](docs/sdks/calendar/README.md#updatecalendarevent) - Update an event
- [`calendarUpdateCalendarEvent`](docs/sdks/event/README.md#updatecalendarevent) - Update an event
- [`calendarUpdateCalendarLink`](docs/sdks/calendar/README.md#updatecalendarlink) - Update a link
- [`calendarUpdateCalendarLink`](docs/sdks/link/README.md#updatecalendarlink) - Update a link
- [`categoryCreateTicketingCategory`](docs/sdks/category/README.md#createticketingcategory) - Create a category
- [`categoryCreateTicketingCategory`](docs/sdks/ticketing/README.md#createticketingcategory) - Create a category
- [`categoryGetTicketingCategory`](docs/sdks/category/README.md#getticketingcategory) - Retrieve a category
- [`categoryGetTicketingCategory`](docs/sdks/ticketing/README.md#getticketingcategory) - Retrieve a category
- [`categoryListTicketingCategories`](docs/sdks/category/README.md#listticketingcategories) - List all categories
- [`categoryListTicketingCategories`](docs/sdks/ticketing/README.md#listticketingcategories) - List all categories
- [`categoryPatchTicketingCategory`](docs/sdks/category/README.md#patchticketingcategory) - Update a category
- [`categoryPatchTicketingCategory`](docs/sdks/ticketing/README.md#patchticketingcategory) - Update a category
- [`categoryRemoveTicketingCategory`](docs/sdks/category/README.md#removeticketingcategory) - Remove a category
- [`categoryRemoveTicketingCategory`](docs/sdks/ticketing/README.md#removeticketingcategory) - Remove a category
- [`categoryUpdateTicketingCategory`](docs/sdks/category/README.md#updateticketingcategory) - Update a category
- [`categoryUpdateTicketingCategory`](docs/sdks/ticketing/README.md#updateticketingcategory) - Update a category
- [`commentCreateTaskComment`](docs/sdks/comment/README.md#createtaskcomment) - Create a comment
- [`commentCreateTaskComment`](docs/sdks/task/README.md#createtaskcomment) - Create a comment
- [`commentCreateUcComment`](docs/sdks/comment/README.md#createuccomment) - Create a comment
- [`commentCreateUcComment`](docs/sdks/uc/README.md#createuccomment) - Create a comment
- [`commentGetTaskComment`](docs/sdks/comment/README.md#gettaskcomment) - Retrieve a comment
- [`commentGetTaskComment`](docs/sdks/task/README.md#gettaskcomment) - Retrieve a comment
- [`commentGetUcComment`](docs/sdks/comment/README.md#getuccomment) - Retrieve a comment
- [`commentGetUcComment`](docs/sdks/uc/README.md#getuccomment) - Retrieve a comment
- [`commentListTaskComments`](docs/sdks/comment/README.md#listtaskcomments) - List all comments
- [`commentListTaskComments`](docs/sdks/task/README.md#listtaskcomments) - List all comments
- [`commentListUcComments`](docs/sdks/comment/README.md#listuccomments) - List all comments
- [`commentListUcComments`](docs/sdks/uc/README.md#listuccomments) - List all comments
- [`commentPatchTaskComment`](docs/sdks/comment/README.md#patchtaskcomment) - Update a comment
- [`commentPatchTaskComment`](docs/sdks/task/README.md#patchtaskcomment) - Update a comment
- [`commentPatchUcComment`](docs/sdks/comment/README.md#patchuccomment) - Update a comment
- [`commentPatchUcComment`](docs/sdks/uc/README.md#patchuccomment) - Update a comment
- [`commentRemoveTaskComment`](docs/sdks/comment/README.md#removetaskcomment) - Remove a comment
- [`commentRemoveTaskComment`](docs/sdks/task/README.md#removetaskcomment) - Remove a comment
- [`commentRemoveUcComment`](docs/sdks/comment/README.md#removeuccomment) - Remove a comment
- [`commentRemoveUcComment`](docs/sdks/uc/README.md#removeuccomment) - Remove a comment
- [`commentUpdateTaskComment`](docs/sdks/comment/README.md#updatetaskcomment) - Update a comment
- [`commentUpdateTaskComment`](docs/sdks/task/README.md#updatetaskcomment) - Update a comment
- [`commentUpdateUcComment`](docs/sdks/comment/README.md#updateuccomment) - Update a comment
- [`commentUpdateUcComment`](docs/sdks/uc/README.md#updateuccomment) - Update a comment
- [`commerceCreateCommerceCollection`](docs/sdks/collection/README.md#createcommercecollection) - Create a collection
- [`commerceCreateCommerceCollection`](docs/sdks/commerce/README.md#createcommercecollection) - Create a collection
- [`commerceCreateCommerceInventory`](docs/sdks/commerce/README.md#createcommerceinventory) - Create an inventory
- [`commerceCreateCommerceInventory`](docs/sdks/inventory/README.md#createcommerceinventory) - Create an inventory
- [`commerceCreateCommerceItem`](docs/sdks/commerce/README.md#createcommerceitem) - Create an item
- [`commerceCreateCommerceItem`](docs/sdks/item/README.md#createcommerceitem) - Create an item
- [`commerceCreateCommerceItemvariant`](docs/sdks/commerce/README.md#createcommerceitemvariant) - Create an itemvariant
- [`commerceCreateCommerceItemvariant`](docs/sdks/itemvariant/README.md#createcommerceitemvariant) - Create an itemvariant
- [`commerceCreateCommerceLocation`](docs/sdks/commerce/README.md#createcommercelocation) - Create a location
- [`commerceCreateCommerceLocation`](docs/sdks/location/README.md#createcommercelocation) - Create a location
- [`commerceCreateCommerceReview`](docs/sdks/commerce/README.md#createcommercereview) - Create a review
- [`commerceCreateCommerceReview`](docs/sdks/review/README.md#createcommercereview) - Create a review
- [`commerceCreateCommerceSaleschannel`](docs/sdks/commerce/README.md#createcommercesaleschannel) - Create a saleschannel
- [`commerceCreateCommerceSaleschannel`](docs/sdks/saleschannel/README.md#createcommercesaleschannel) - Create a saleschannel
- [`commerceGetCommerceCollection`](docs/sdks/collection/README.md#getcommercecollection) - Retrieve a collection
- [`commerceGetCommerceCollection`](docs/sdks/commerce/README.md#getcommercecollection) - Retrieve a collection
- [`commerceGetCommerceInventory`](docs/sdks/commerce/README.md#getcommerceinventory) - Retrieve an inventory
- [`commerceGetCommerceInventory`](docs/sdks/inventory/README.md#getcommerceinventory) - Retrieve an inventory
- [`commerceGetCommerceItem`](docs/sdks/commerce/README.md#getcommerceitem) - Retrieve an item
- [`commerceGetCommerceItem`](docs/sdks/item/README.md#getcommerceitem) - Retrieve an item
- [`commerceGetCommerceItemvariant`](docs/sdks/commerce/README.md#getcommerceitemvariant) - Retrieve an itemvariant
- [`commerceGetCommerceItemvariant`](docs/sdks/itemvariant/README.md#getcommerceitemvariant) - Retrieve an itemvariant
- [`commerceGetCommerceLocation`](docs/sdks/commerce/README.md#getcommercelocation) - Retrieve a location
- [`commerceGetCommerceLocation`](docs/sdks/location/README.md#getcommercelocation) - Retrieve a location
- [`commerceGetCommerceReview`](docs/sdks/commerce/README.md#getcommercereview) - Retrieve a review
- [`commerceGetCommerceReview`](docs/sdks/review/README.md#getcommercereview) - Retrieve a review
- [`commerceGetCommerceSaleschannel`](docs/sdks/commerce/README.md#getcommercesaleschannel) - Retrieve a saleschannel
- [`commerceGetCommerceSaleschannel`](docs/sdks/saleschannel/README.md#getcommercesaleschannel) - Retrieve a saleschannel
- [`commerceListCommerceCollections`](docs/sdks/collection/README.md#listcommercecollections) - List all collections
- [`commerceListCommerceCollections`](docs/sdks/commerce/README.md#listcommercecollections) - List all collections
- [`commerceListCommerceInventories`](docs/sdks/commerce/README.md#listcommerceinventories) - List all inventories
- [`commerceListCommerceInventories`](docs/sdks/inventory/README.md#listcommerceinventories) - List all inventories
- [`commerceListCommerceItems`](docs/sdks/commerce/README.md#listcommerceitems) - List all items
- [`commerceListCommerceItems`](docs/sdks/item/README.md#listcommerceitems) - List all items
- [`commerceListCommerceItemvariants`](docs/sdks/commerce/README.md#listcommerceitemvariants) - List all itemvariants
- [`commerceListCommerceItemvariants`](docs/sdks/itemvariant/README.md#listcommerceitemvariants) - List all itemvariants
- [`commerceListCommerceLocations`](docs/sdks/commerce/README.md#listcommercelocations) - List all locations
- [`commerceListCommerceLocations`](docs/sdks/location/README.md#listcommercelocations) - List all locations
- [`commerceListCommerceReviews`](docs/sdks/commerce/README.md#listcommercereviews) - List all reviews
- [`commerceListCommerceReviews`](docs/sdks/review/README.md#listcommercereviews) - List all reviews
- [`commerceListCommerceSaleschannels`](docs/sdks/commerce/README.md#listcommercesaleschannels) - List all saleschannels
- [`commerceListCommerceSaleschannels`](docs/sdks/saleschannel/README.md#listcommercesaleschannels) - List all saleschannels
- [`commercePatchCommerceCollection`](docs/sdks/collection/README.md#patchcommercecollection) - Update a collection
- [`commercePatchCommerceCollection`](docs/sdks/commerce/README.md#patchcommercecollection) - Update a collection
- [`commercePatchCommerceInventory`](docs/sdks/commerce/README.md#patchcommerceinventory) - Update an inventory
- [`commercePatchCommerceInventory`](docs/sdks/inventory/README.md#patchcommerceinventory) - Update an inventory
- [`commercePatchCommerceItem`](docs/sdks/commerce/README.md#patchcommerceitem) - Update an item
- [`commercePatchCommerceItem`](docs/sdks/item/README.md#patchcommerceitem) - Update an item
- [`commercePatchCommerceItemvariant`](docs/sdks/commerce/README.md#patchcommerceitemvariant) - Update an itemvariant
- [`commercePatchCommerceItemvariant`](docs/sdks/itemvariant/README.md#patchcommerceitemvariant) - Update an itemvariant
- [`commercePatchCommerceLocation`](docs/sdks/commerce/README.md#patchcommercelocation) - Update a location
- [`commercePatchCommerceLocation`](docs/sdks/location/README.md#patchcommercelocation) - Update a location
- [`commercePatchCommerceReview`](docs/sdks/commerce/README.md#patchcommercereview) - Update a review
- [`commercePatchCommerceReview`](docs/sdks/review/README.md#patchcommercereview) - Update a review
- [`commercePatchCommerceSaleschannel`](docs/sdks/commerce/README.md#patchcommercesaleschannel) - Update a saleschannel
- [`commercePatchCommerceSaleschannel`](docs/sdks/saleschannel/README.md#patchcommercesaleschannel) - Update a saleschannel
- [`commerceRemoveCommerceCollection`](docs/sdks/collection/README.md#removecommercecollection) - Remove a collection
- [`commerceRemoveCommerceCollection`](docs/sdks/commerce/README.md#removecommercecollection) - Remove a collection
- [`commerceRemoveCommerceInventory`](docs/sdks/commerce/README.md#removecommerceinventory) - Remove an inventory
- [`commerceRemoveCommerceInventory`](docs/sdks/inventory/README.md#removecommerceinventory) - Remove an inventory
- [`commerceRemoveCommerceItem`](docs/sdks/commerce/README.md#removecommerceitem) - Remove an item
- [`commerceRemoveCommerceItem`](docs/sdks/item/README.md#removecommerceitem) - Remove an item
- [`commerceRemoveCommerceItemvariant`](docs/sdks/commerce/README.md#removecommerceitemvariant) - Remove an itemvariant
- [`commerceRemoveCommerceItemvariant`](docs/sdks/itemvariant/README.md#removecommerceitemvariant) - Remove an itemvariant
- [`commerceRemoveCommerceLocation`](docs/sdks/commerce/README.md#removecommercelocation) - Remove a location
- [`commerceRemoveCommerceLocation`](docs/sdks/location/README.md#removecommercelocation) - Remove a location
- [`commerceRemoveCommerceReview`](docs/sdks/commerce/README.md#removecommercereview) - Remove a review
- [`commerceRemoveCommerceReview`](docs/sdks/review/README.md#removecommercereview) - Remove a review
- [`commerceRemoveCommerceSaleschannel`](docs/sdks/commerce/README.md#removecommercesaleschannel) - Remove a saleschannel
- [`commerceRemoveCommerceSaleschannel`](docs/sdks/saleschannel/README.md#removecommercesaleschannel) - Remove a saleschannel
- [`commerceUpdateCommerceCollection`](docs/sdks/collection/README.md#updatecommercecollection) - Update a collection
- [`commerceUpdateCommerceCollection`](docs/sdks/commerce/README.md#updatecommercecollection) - Update a collection
- [`commerceUpdateCommerceInventory`](docs/sdks/commerce/README.md#updatecommerceinventory) - Update an inventory
- [`commerceUpdateCommerceInventory`](docs/sdks/inventory/README.md#updatecommerceinventory) - Update an inventory
- [`commerceUpdateCommerceItem`](docs/sdks/commerce/README.md#updatecommerceitem) - Update an item
- [`commerceUpdateCommerceItem`](docs/sdks/item/README.md#updatecommerceitem) - Update an item
- [`commerceUpdateCommerceItemvariant`](docs/sdks/commerce/README.md#updatecommerceitemvariant) - Update an itemvariant
- [`commerceUpdateCommerceItemvariant`](docs/sdks/itemvariant/README.md#updatecommerceitemvariant) - Update an itemvariant
- [`commerceUpdateCommerceLocation`](docs/sdks/commerce/README.md#updatecommercelocation) - Update a location
- [`commerceUpdateCommerceLocation`](docs/sdks/location/README.md#updatecommercelocation) - Update a location
- [`commerceUpdateCommerceReview`](docs/sdks/commerce/README.md#updatecommercereview) - Update a review
- [`commerceUpdateCommerceReview`](docs/sdks/review/README.md#updatecommercereview) - Update a review
- [`commerceUpdateCommerceSaleschannel`](docs/sdks/commerce/README.md#updatecommercesaleschannel) - Update a saleschannel
- [`commerceUpdateCommerceSaleschannel`](docs/sdks/saleschannel/README.md#updatecommercesaleschannel) - Update a saleschannel
- [`companyCreateCrmCompany`](docs/sdks/company/README.md#createcrmcompany) - Create a company
- [`companyCreateCrmCompany`](docs/sdks/crm/README.md#createcrmcompany) - Create a company
- [`companyCreateHrisCompany`](docs/sdks/company/README.md#createhriscompany) - Create a company
- [`companyCreateHrisCompany`](docs/sdks/hris/README.md#createhriscompany) - Create a company
- [`companyGetCrmCompany`](docs/sdks/company/README.md#getcrmcompany) - Retrieve a company
- [`companyGetCrmCompany`](docs/sdks/crm/README.md#getcrmcompany) - Retrieve a company
- [`companyGetHrisCompany`](docs/sdks/company/README.md#gethriscompany) - Retrieve a company
- [`companyGetHrisCompany`](docs/sdks/hris/README.md#gethriscompany) - Retrieve a company
- [`companyListCrmCompanies`](docs/sdks/company/README.md#listcrmcompanies) - List all companies
- [`companyListCrmCompanies`](docs/sdks/crm/README.md#listcrmcompanies) - List all companies
- [`companyListEnrichCompanies`](docs/sdks/company/README.md#listenrichcompanies) - Retrieve enrichment information for a company
- [`companyListEnrichCompanies`](docs/sdks/enrich/README.md#listenrichcompanies) - Retrieve enrichment information for a company
- [`companyListHrisCompanies`](docs/sdks/company/README.md#listhriscompanies) - List all companies
- [`companyListHrisCompanies`](docs/sdks/hris/README.md#listhriscompanies) - List all companies
- [`companyPatchCrmCompany`](docs/sdks/company/README.md#patchcrmcompany) - Update a company
- [`companyPatchCrmCompany`](docs/sdks/crm/README.md#patchcrmcompany) - Update a company
- [`companyPatchHrisCompany`](docs/sdks/company/README.md#patchhriscompany) - Update a company
- [`companyPatchHrisCompany`](docs/sdks/hris/README.md#patchhriscompany) - Update a company
- [`companyRemoveCrmCompany`](docs/sdks/company/README.md#removecrmcompany) - Remove a company
- [`companyRemoveCrmCompany`](docs/sdks/crm/README.md#removecrmcompany) - Remove a company
- [`companyRemoveHrisCompany`](docs/sdks/company/README.md#removehriscompany) - Remove a company
- [`companyRemoveHrisCompany`](docs/sdks/hris/README.md#removehriscompany) - Remove a company
- [`companyUpdateCrmCompany`](docs/sdks/company/README.md#updatecrmcompany) - Update a company
- [`companyUpdateCrmCompany`](docs/sdks/crm/README.md#updatecrmcompany) - Update a company
- [`companyUpdateHrisCompany`](docs/sdks/company/README.md#updatehriscompany) - Update a company
- [`companyUpdateHrisCompany`](docs/sdks/hris/README.md#updatehriscompany) - Update a company
- [`contactCreateCrmContact`](docs/sdks/contact/README.md#createcrmcontact) - Create a contact
- [`contactCreateCrmContact`](docs/sdks/crm/README.md#createcrmcontact) - Create a contact
- [`contactCreateUcContact`](docs/sdks/contact/README.md#createuccontact) - Create a contact
- [`contactCreateUcContact`](docs/sdks/uc/README.md#createuccontact) - Create a contact
- [`contactGetCrmContact`](docs/sdks/contact/README.md#getcrmcontact) - Retrieve a contact
- [`contactGetCrmContact`](docs/sdks/crm/README.md#getcrmcontact) - Retrieve a contact
- [`contactGetUcContact`](docs/sdks/contact/README.md#getuccontact) - Retrieve a contact
- [`contactGetUcContact`](docs/sdks/uc/README.md#getuccontact) - Retrieve a contact
- [`contactListCrmContacts`](docs/sdks/contact/README.md#listcrmcontacts) - List all contacts
- [`contactListCrmContacts`](docs/sdks/crm/README.md#listcrmcontacts) - List all contacts
- [`contactListUcContacts`](docs/sdks/contact/README.md#listuccontacts) - List all contacts
- [`contactListUcContacts`](docs/sdks/uc/README.md#listuccontacts) - List all contacts
- [`contactPatchCrmContact`](docs/sdks/contact/README.md#patchcrmcontact) - Update a contact
- [`contactPatchCrmContact`](docs/sdks/crm/README.md#patchcrmcontact) - Update a contact
- [`contactPatchUcContact`](docs/sdks/contact/README.md#patchuccontact) - Update a contact
- [`contactPatchUcContact`](docs/sdks/uc/README.md#patchuccontact) - Update a contact
- [`contactRemoveCrmContact`](docs/sdks/contact/README.md#removecrmcontact) - Remove a contact
- [`contactRemoveCrmContact`](docs/sdks/crm/README.md#removecrmcontact) - Remove a contact
- [`contactRemoveUcContact`](docs/sdks/contact/README.md#removeuccontact) - Remove a contact
- [`contactRemoveUcContact`](docs/sdks/uc/README.md#removeuccontact) - Remove a contact
- [`contactUpdateCrmContact`](docs/sdks/contact/README.md#updatecrmcontact) - Update a contact
- [`contactUpdateCrmContact`](docs/sdks/crm/README.md#updatecrmcontact) - Update a contact
- [`contactUpdateUcContact`](docs/sdks/contact/README.md#updateuccontact) - Update a contact
- [`contactUpdateUcContact`](docs/sdks/uc/README.md#updateuccontact) - Update a contact
- [`crmCreateCrmDeal`](docs/sdks/crm/README.md#createcrmdeal) - Create a deal
- [`crmCreateCrmDeal`](docs/sdks/deal/README.md#createcrmdeal) - Create a deal
- [`crmCreateCrmLead`](docs/sdks/crm/README.md#createcrmlead) - Create a lead
- [`crmCreateCrmLead`](docs/sdks/lead/README.md#createcrmlead) - Create a lead
- [`crmCreateCrmPipeline`](docs/sdks/crm/README.md#createcrmpipeline) - Create a pipeline
- [`crmCreateCrmPipeline`](docs/sdks/pipeline/README.md#createcrmpipeline) - Create a pipeline
- [`crmGetCrmDeal`](docs/sdks/crm/README.md#getcrmdeal) - Retrieve a deal
- [`crmGetCrmDeal`](docs/sdks/deal/README.md#getcrmdeal) - Retrieve a deal
- [`crmGetCrmLead`](docs/sdks/crm/README.md#getcrmlead) - Retrieve a lead
- [`crmGetCrmLead`](docs/sdks/lead/README.md#getcrmlead) - Retrieve a lead
- [`crmGetCrmPipeline`](docs/sdks/crm/README.md#getcrmpipeline) - Retrieve a pipeline
- [`crmGetCrmPipeline`](docs/sdks/pipeline/README.md#getcrmpipeline) - Retrieve a pipeline
- [`crmListCrmDeals`](docs/sdks/crm/README.md#listcrmdeals) - List all deals
- [`crmListCrmDeals`](docs/sdks/deal/README.md#listcrmdeals) - List all deals
- [`crmListCrmLeads`](docs/sdks/crm/README.md#listcrmleads) - List all leads
- [`crmListCrmLeads`](docs/sdks/lead/README.md#listcrmleads) - List all leads
- [`crmListCrmPipelines`](docs/sdks/crm/README.md#listcrmpipelines) - List all pipelines
- [`crmListCrmPipelines`](docs/sdks/pipeline/README.md#listcrmpipelines) - List all pipelines
- [`crmPatchCrmDeal`](docs/sdks/crm/README.md#patchcrmdeal) - Update a deal
- [`crmPatchCrmDeal`](docs/sdks/deal/README.md#patchcrmdeal) - Update a deal
- [`crmPatchCrmLead`](docs/sdks/crm/README.md#patchcrmlead) - Update a lead
- [`crmPatchCrmLead`](docs/sdks/lead/README.md#patchcrmlead) - Update a lead
- [`crmPatchCrmPipeline`](docs/sdks/crm/README.md#patchcrmpipeline) - Update a pipeline
- [`crmPatchCrmPipeline`](docs/sdks/pipeline/README.md#patchcrmpipeline) - Update a pipeline
- [`crmRemoveCrmDeal`](docs/sdks/crm/README.md#removecrmdeal) - Remove a deal
- [`crmRemoveCrmDeal`](docs/sdks/deal/README.md#removecrmdeal) - Remove a deal
- [`crmRemoveCrmLead`](docs/sdks/crm/README.md#removecrmlead) - Remove a lead
- [`crmRemoveCrmLead`](docs/sdks/lead/README.md#removecrmlead) - Remove a lead
- [`crmRemoveCrmPipeline`](docs/sdks/crm/README.md#removecrmpipeline) - Remove a pipeline
- [`crmRemoveCrmPipeline`](docs/sdks/pipeline/README.md#removecrmpipeline) - Remove a pipeline
- [`crmUpdateCrmDeal`](docs/sdks/crm/README.md#updatecrmdeal) - Update a deal
- [`crmUpdateCrmDeal`](docs/sdks/deal/README.md#updatecrmdeal) - Update a deal
- [`crmUpdateCrmLead`](docs/sdks/crm/README.md#updatecrmlead) - Update a lead
- [`crmUpdateCrmLead`](docs/sdks/lead/README.md#updatecrmlead) - Update a lead
- [`crmUpdateCrmPipeline`](docs/sdks/crm/README.md#updatecrmpipeline) - Update a pipeline
- [`crmUpdateCrmPipeline`](docs/sdks/pipeline/README.md#updatecrmpipeline) - Update a pipeline
- [`enrichListEnrichPeople`](docs/sdks/enrich/README.md#listenrichpeople) - Retrieve enrichment information for a person
- [`enrichListEnrichPeople`](docs/sdks/person/README.md#listenrichpeople) - Retrieve enrichment information for a person
- [`eventCreateCrmEvent`](docs/sdks/crm/README.md#createcrmevent) - Create an event
- [`eventCreateCrmEvent`](docs/sdks/event/README.md#createcrmevent) - Create an event
- [`eventGetCrmEvent`](docs/sdks/crm/README.md#getcrmevent) - Retrieve an event
- [`eventGetCrmEvent`](docs/sdks/event/README.md#getcrmevent) - Retrieve an event
- [`eventListCrmEvents`](docs/sdks/crm/README.md#listcrmevents) - List all events
- [`eventListCrmEvents`](docs/sdks/event/README.md#listcrmevents) - List all events
- [`eventPatchCrmEvent`](docs/sdks/crm/README.md#patchcrmevent) - Update an event
- [`eventPatchCrmEvent`](docs/sdks/event/README.md#patchcrmevent) - Update an event
- [`eventPatchMessagingEvent`](docs/sdks/event/README.md#patchmessagingevent) - Update an event
- [`eventPatchMessagingEvent`](docs/sdks/messaging/README.md#patchmessagingevent) - Update an event
- [`eventRemoveCrmEvent`](docs/sdks/crm/README.md#removecrmevent) - Remove an event
- [`eventRemoveCrmEvent`](docs/sdks/event/README.md#removecrmevent) - Remove an event
- [`eventUpdateCrmEvent`](docs/sdks/crm/README.md#updatecrmevent) - Update an event
- [`eventUpdateCrmEvent`](docs/sdks/event/README.md#updatecrmevent) - Update an event
- [`eventUpdateMessagingEvent`](docs/sdks/event/README.md#updatemessagingevent) - Update an event
- [`eventUpdateMessagingEvent`](docs/sdks/messaging/README.md#updatemessagingevent) - Update an event
- [`formsCreateFormsForm`](docs/sdks/form/README.md#createformsform) - Create a form
- [`formsCreateFormsForm`](docs/sdks/forms/README.md#createformsform) - Create a form
- [`formsGetFormsForm`](docs/sdks/form/README.md#getformsform) - Retrieve a form
- [`formsGetFormsForm`](docs/sdks/forms/README.md#getformsform) - Retrieve a form
- [`formsGetFormsSubmission`](docs/sdks/forms/README.md#getformssubmission) - Retrieve a submission
- [`formsGetFormsSubmission`](docs/sdks/submission/README.md#getformssubmission) - Retrieve a submission
- [`formsListFormsForms`](docs/sdks/form/README.md#listformsforms) - List all forms
- [`formsListFormsForms`](docs/sdks/forms/README.md#listformsforms) - List all forms
- [`formsListFormsSubmissions`](docs/sdks/forms/README.md#listformssubmissions) - List all submissions
- [`formsListFormsSubmissions`](docs/sdks/submission/README.md#listformssubmissions) - List all submissions
- [`formsPatchFormsForm`](docs/sdks/form/README.md#patchformsform) - Update a form
- [`formsPatchFormsForm`](docs/sdks/forms/README.md#patchformsform) - Update a form
- [`formsRemoveFormsForm`](docs/sdks/form/README.md#removeformsform) - Remove a form
- [`formsRemoveFormsForm`](docs/sdks/forms/README.md#removeformsform) - Remove a form
- [`formsUpdateFormsForm`](docs/sdks/form/README.md#updateformsform) - Update a form
- [`formsUpdateFormsForm`](docs/sdks/forms/README.md#updateformsform) - Update a form
- [`genaiCreateGenaiEmbedding`](docs/sdks/embedding/README.md#creategenaiembedding) - Create an embedding
- [`genaiCreateGenaiEmbedding`](docs/sdks/genai/README.md#creategenaiembedding) - Create an embedding
- [`genaiCreateGenaiPrompt`](docs/sdks/genai/README.md#creategenaiprompt) - Create a prompt
- [`genaiCreateGenaiPrompt`](docs/sdks/prompt/README.md#creategenaiprompt) - Create a prompt
- [`genaiGetGenaiModel`](docs/sdks/genai/README.md#getgenaimodel) - Retrieve a model
- [`genaiGetGenaiModel`](docs/sdks/model/README.md#getgenaimodel) - Retrieve a model
- [`genaiListGenaiModels`](docs/sdks/genai/README.md#listgenaimodels) - List all models
- [`genaiListGenaiModels`](docs/sdks/model/README.md#listgenaimodels) - List all models
- [`groupCreateHrisGroup`](docs/sdks/group/README.md#createhrisgroup) - Create a group
- [`groupCreateHrisGroup`](docs/sdks/hris/README.md#createhrisgroup) - Create a group
- [`groupCreateScimGroups`](docs/sdks/group/README.md#createscimgroups) - Create group
- [`groupCreateScimGroups`](docs/sdks/scim/README.md#createscimgroups) - Create group
- [`groupGetHrisGroup`](docs/sdks/group/README.md#gethrisgroup) - Retrieve a group
- [`groupGetHrisGroup`](docs/sdks/hris/README.md#gethrisgroup) - Retrieve a group
- [`groupGetScimGroups`](docs/sdks/group/README.md#getscimgroups) - Get group
- [`groupGetScimGroups`](docs/sdks/scim/README.md#getscimgroups) - Get group
- [`groupListHrisGroups`](docs/sdks/group/README.md#listhrisgroups) - List all groups
- [`groupListHrisGroups`](docs/sdks/hris/README.md#listhrisgroups) - List all groups
- [`groupListScimGroups`](docs/sdks/group/README.md#listscimgroups) - List groups
- [`groupListScimGroups`](docs/sdks/scim/README.md#listscimgroups) - List groups
- [`groupPatchHrisGroup`](docs/sdks/group/README.md#patchhrisgroup) - Update a group
- [`groupPatchHrisGroup`](docs/sdks/hris/README.md#patchhrisgroup) - Update a group
- [`groupPatchScimGroups`](docs/sdks/group/README.md#patchscimgroups) - Update group
- [`groupPatchScimGroups`](docs/sdks/scim/README.md#patchscimgroups) - Update group
- [`groupRemoveHrisGroup`](docs/sdks/group/README.md#removehrisgroup) - Remove a group
- [`groupRemoveHrisGroup`](docs/sdks/hris/README.md#removehrisgroup) - Remove a group
- [`groupRemoveScimGroups`](docs/sdks/group/README.md#removescimgroups) - Delete group
- [`groupRemoveScimGroups`](docs/sdks/scim/README.md#removescimgroups) - Delete group
- [`groupUpdateHrisGroup`](docs/sdks/group/README.md#updatehrisgroup) - Update a group
- [`groupUpdateHrisGroup`](docs/sdks/hris/README.md#updatehrisgroup) - Update a group
- [`groupUpdateScimGroups`](docs/sdks/group/README.md#updatescimgroups) - Update group
- [`groupUpdateScimGroups`](docs/sdks/scim/README.md#updatescimgroups) - Update group
- [`hrisCreateHrisBenefit`](docs/sdks/benefit/README.md#createhrisbenefit) - Create a benefit
- [`hrisCreateHrisBenefit`](docs/sdks/hris/README.md#createhrisbenefit) - Create a benefit
- [`hrisCreateHrisDeduction`](docs/sdks/deduction/README.md#createhrisdeduction) - Create a deduction
- [`hrisCreateHrisDeduction`](docs/sdks/hris/README.md#createhrisdeduction) - Create a deduction
- [`hrisCreateHrisDevice`](docs/sdks/device/README.md#createhrisdevice) - Create a device
- [`hrisCreateHrisDevice`](docs/sdks/hris/README.md#createhrisdevice) - Create a device
- [`hrisCreateHrisEmployee`](docs/sdks/employee/README.md#createhrisemployee) - Create an employee
- [`hrisCreateHrisEmployee`](docs/sdks/hris/README.md#createhrisemployee) - Create an employee
- [`hrisCreateHrisTimeshift`](docs/sdks/hris/README.md#createhristimeshift) - Create a timeshift
- [`hrisCreateHrisTimeshift`](docs/sdks/timeshift/README.md#createhristimeshift) - Create a timeshift
- [`hrisGetHrisBenefit`](docs/sdks/benefit/README.md#gethrisbenefit) - Retrieve a benefit
- [`hrisGetHrisBenefit`](docs/sdks/hris/README.md#gethrisbenefit) - Retrieve a benefit
- [`hrisGetHrisDeduction`](docs/sdks/deduction/README.md#gethrisdeduction) - Retrieve a deduction
- [`hrisGetHrisDeduction`](docs/sdks/hris/README.md#gethrisdeduction) - Retrieve a deduction
- [`hrisGetHrisDevice`](docs/sdks/device/README.md#gethrisdevice) - Retrieve a device
- [`hrisGetHrisDevice`](docs/sdks/hris/README.md#gethrisdevice) - Retrieve a device
- [`hrisGetHrisEmployee`](docs/sdks/employee/README.md#gethrisemployee) - Retrieve an employee
- [`hrisGetHrisEmployee`](docs/sdks/hris/README.md#gethrisemployee) - Retrieve an employee
- [`hrisGetHrisPayslip`](docs/sdks/hris/README.md#gethrispayslip) - Retrieve a payslip
- [`hrisGetHrisPayslip`](docs/sdks/payslip/README.md#gethrispayslip) - Retrieve a payslip
- [`hrisGetHrisTimeoff`](docs/sdks/hris/README.md#gethristimeoff) - Retrieve a timeoff
- [`hrisGetHrisTimeoff`](docs/sdks/timeoff/README.md#gethristimeoff) - Retrieve a timeoff
- [`hrisGetHrisTimeshift`](docs/sdks/hris/README.md#gethristimeshift) - Retrieve a timeshift
- [`hrisGetHrisTimeshift`](docs/sdks/timeshift/README.md#gethristimeshift) - Retrieve a timeshift
- [`hrisListHrisBenefits`](docs/sdks/benefit/README.md#listhrisbenefits) - List all benefits
- [`hrisListHrisBenefits`](docs/sdks/hris/README.md#listhrisbenefits) - List all benefits
- [`hrisListHrisDeductions`](docs/sdks/deduction/README.md#listhrisdeductions) - List all deductions
- [`hrisListHrisDeductions`](docs/sdks/hris/README.md#listhrisdeductions) - List all deductions
- [`hrisListHrisDevices`](docs/sdks/device/README.md#listhrisdevices) - List all devices
- [`hrisListHrisDevices`](docs/sdks/hris/README.md#listhrisdevices) - List all devices
- [`hrisListHrisEmployees`](docs/sdks/employee/README.md#listhrisemployees) - List all employees
- [`hrisListHrisEmployees`](docs/sdks/hris/README.md#listhrisemployees) - List all employees
- [`hrisListHrisPayslips`](docs/sdks/hris/README.md#listhrispayslips) - List all payslips
- [`hrisListHrisPayslips`](docs/sdks/payslip/README.md#listhrispayslips) - List all payslips
- [`hrisListHrisTimeoffs`](docs/sdks/hris/README.md#listhristimeoffs) - List all timeoffs
- [`hrisListHrisTimeoffs`](docs/sdks/timeoff/README.md#listhristimeoffs) - List all timeoffs
- [`hrisListHrisTimeshifts`](docs/sdks/hris/README.md#listhristimeshifts) - List all timeshifts
- [`hrisListHrisTimeshifts`](docs/sdks/timeshift/README.md#listhristimeshifts) - List all timeshifts
- [`hrisPatchHrisBenefit`](docs/sdks/benefit/README.md#patchhrisbenefit) - Update a benefit
- [`hrisPatchHrisBenefit`](docs/sdks/hris/README.md#patchhrisbenefit) - Update a benefit
- [`hrisPatchHrisDeduction`](docs/sdks/deduction/README.md#patchhrisdeduction) - Update a deduction
- [`hrisPatchHrisDeduction`](docs/sdks/hris/README.md#patchhrisdeduction) - Update a deduction
- [`hrisPatchHrisDevice`](docs/sdks/device/README.md#patchhrisdevice) - Update a device
- [`hrisPatchHrisDevice`](docs/sdks/hris/README.md#patchhrisdevice) - Update a device
- [`hrisPatchHrisEmployee`](docs/sdks/employee/README.md#patchhrisemployee) - Update an employee
- [`hrisPatchHrisEmployee`](docs/sdks/hris/README.md#patchhrisemployee) - Update an employee
- [`hrisPatchHrisTimeshift`](docs/sdks/hris/README.md#patchhristimeshift) - Update a timeshift
- [`hrisPatchHrisTimeshift`](docs/sdks/timeshift/README.md#patchhristimeshift) - Update a timeshift
- [`hrisRemoveHrisBenefit`](docs/sdks/benefit/README.md#removehrisbenefit) - Remove a benefit
- [`hrisRemoveHrisBenefit`](docs/sdks/hris/README.md#removehrisbenefit) - Remove a benefit
- [`hrisRemoveHrisDeduction`](docs/sdks/deduction/README.md#removehrisdeduction) - Remove a deduction
- [`hrisRemoveHrisDeduction`](docs/sdks/hris/README.md#removehrisdeduction) - Remove a deduction
- [`hrisRemoveHrisDevice`](docs/sdks/device/README.md#removehrisdevice) - Remove a device
- [`hrisRemoveHrisDevice`](docs/sdks/hris/README.md#removehrisdevice) - Remove a device
- [`hrisRemoveHrisEmployee`](docs/sdks/employee/README.md#removehrisemployee) - Remove an employee
- [`hrisRemoveHrisEmployee`](docs/sdks/hris/README.md#removehrisemployee) - Remove an employee
- [`hrisRemoveHrisTimeshift`](docs/sdks/hris/README.md#removehristimeshift) - Remove a timeshift
- [`hrisRemoveHrisTimeshift`](docs/sdks/timeshift/README.md#removehristimeshift) - Remove a timeshift
- [`hrisUpdateHrisBenefit`](docs/sdks/benefit/README.md#updatehrisbenefit) - Update a benefit
- [`hrisUpdateHrisBenefit`](docs/sdks/hris/README.md#updatehrisbenefit) - Update a benefit
- [`hrisUpdateHrisDeduction`](docs/sdks/deduction/README.md#updatehrisdeduction) - Update a deduction
- [`hrisUpdateHrisDeduction`](docs/sdks/hris/README.md#updatehrisdeduction) - Update a deduction
- [`hrisUpdateHrisDevice`](docs/sdks/device/README.md#updatehrisdevice) - Update a device
- [`hrisUpdateHrisDevice`](docs/sdks/hris/README.md#updatehrisdevice) - Update a device
- [`hrisUpdateHrisEmployee`](docs/sdks/employee/README.md#updatehrisemployee) - Update an employee
- [`hrisUpdateHrisEmployee`](docs/sdks/hris/README.md#updatehrisemployee) - Update an employee
- [`hrisUpdateHrisTimeshift`](docs/sdks/hris/README.md#updatehristimeshift) - Update a timeshift
- [`hrisUpdateHrisTimeshift`](docs/sdks/timeshift/README.md#updatehristimeshift) - Update a timeshift
- [`kmsCreateKmsComment`](docs/sdks/comment/README.md#createkmscomment) - Create a comment
- [`kmsCreateKmsComment`](docs/sdks/kms/README.md#createkmscomment) - Create a comment
- [`kmsCreateKmsPage`](docs/sdks/kms/README.md#createkmspage) - Create a page
- [`kmsCreateKmsPage`](docs/sdks/page/README.md#createkmspage) - Create a page
- [`kmsCreateKmsSpace`](docs/sdks/kms/README.md#createkmsspace) - Create a space
- [`kmsCreateKmsSpace`](docs/sdks/space/README.md#createkmsspace) - Create a space
- [`kmsGetKmsComment`](docs/sdks/comment/README.md#getkmscomment) - Retrieve a comment
- [`kmsGetKmsComment`](docs/sdks/kms/README.md#getkmscomment) - Retrieve a comment
- [`kmsGetKmsPage`](docs/sdks/kms/README.md#getkmspage) - Retrieve a page
- [`kmsGetKmsPage`](docs/sdks/page/README.md#getkmspage) - Retrieve a page
- [`kmsGetKmsSpace`](docs/sdks/kms/README.md#getkmsspace) - Retrieve a space
- [`kmsGetKmsSpace`](docs/sdks/space/README.md#getkmsspace) - Retrieve a space
- [`kmsListKmsComments`](docs/sdks/comment/README.md#listkmscomments) - List all comments
- [`kmsListKmsComments`](docs/sdks/kms/README.md#listkmscomments) - List all comments
- [`kmsListKmsPages`](docs/sdks/kms/README.md#listkmspages) - List all pages
- [`kmsListKmsPages`](docs/sdks/page/README.md#listkmspages) - List all pages
- [`kmsListKmsSpaces`](docs/sdks/kms/README.md#listkmsspaces) - List all spaces
- [`kmsListKmsSpaces`](docs/sdks/space/README.md#listkmsspaces) - List all spaces
- [`kmsPatchKmsComment`](docs/sdks/comment/README.md#patchkmscomment) - Update a comment
- [`kmsPatchKmsComment`](docs/sdks/kms/README.md#patchkmscomment) - Update a comment
- [`kmsPatchKmsPage`](docs/sdks/kms/README.md#patchkmspage) - Update a page
- [`kmsPatchKmsPage`](docs/sdks/page/README.md#patchkmspage) - Update a page
- [`kmsPatchKmsSpace`](docs/sdks/kms/README.md#patchkmsspace) - Update a space
- [`kmsPatchKmsSpace`](docs/sdks/space/README.md#patchkmsspace) - Update a space
- [`kmsRemoveKmsComment`](docs/sdks/comment/README.md#removekmscomment) - Remove a comment
- [`kmsRemoveKmsComment`](docs/sdks/kms/README.md#removekmscomment) - Remove a comment
- [`kmsRemoveKmsPage`](docs/sdks/kms/README.md#removekmspage) - Remove a page
- [`kmsRemoveKmsPage`](docs/sdks/page/README.md#removekmspage) - Remove a page
- [`kmsRemoveKmsSpace`](docs/sdks/kms/README.md#removekmsspace) - Remove a space
- [`kmsRemoveKmsSpace`](docs/sdks/space/README.md#removekmsspace) - Remove a space
- [`kmsUpdateKmsComment`](docs/sdks/comment/README.md#updatekmscomment) - Update a comment
- [`kmsUpdateKmsComment`](docs/sdks/kms/README.md#updatekmscomment) - Update a comment
- [`kmsUpdateKmsPage`](docs/sdks/kms/README.md#updatekmspage) - Update a page
- [`kmsUpdateKmsPage`](docs/sdks/page/README.md#updatekmspage) - Update a page
- [`kmsUpdateKmsSpace`](docs/sdks/kms/README.md#updatekmsspace) - Update a space
- [`kmsUpdateKmsSpace`](docs/sdks/space/README.md#updatekmsspace) - Update a space
- [`linkCreatePaymentLink`](docs/sdks/link/README.md#createpaymentlink) - Create a link
- [`linkCreatePaymentLink`](docs/sdks/payment/README.md#createpaymentlink) - Create a link
- [`linkGetPaymentLink`](docs/sdks/link/README.md#getpaymentlink) - Retrieve a link
- [`linkGetPaymentLink`](docs/sdks/payment/README.md#getpaymentlink) - Retrieve a link
- [`linkListPaymentLinks`](docs/sdks/link/README.md#listpaymentlinks) - List all links
- [`linkListPaymentLinks`](docs/sdks/payment/README.md#listpaymentlinks) - List all links
- [`linkPatchPaymentLink`](docs/sdks/link/README.md#patchpaymentlink) - Update a link
- [`linkPatchPaymentLink`](docs/sdks/payment/README.md#patchpaymentlink) - Update a link
- [`linkRemovePaymentLink`](docs/sdks/link/README.md#removepaymentlink) - Remove a link
- [`linkRemovePaymentLink`](docs/sdks/payment/README.md#removepaymentlink) - Remove a link
- [`linkUpdatePaymentLink`](docs/sdks/link/README.md#updatepaymentlink) - Update a link
- [`linkUpdatePaymentLink`](docs/sdks/payment/README.md#updatepaymentlink) - Update a link
- [`lmsCreateLmsClass`](docs/sdks/class/README.md#createlmsclass) - Create a class
- [`lmsCreateLmsClass`](docs/sdks/lms/README.md#createlmsclass) - Create a class
- [`lmsCreateLmsCourse`](docs/sdks/course/README.md#createlmscourse) - Create a course
- [`lmsCreateLmsCourse`](docs/sdks/lms/README.md#createlmscourse) - Create a course
- [`lmsCreateLmsInstructor`](docs/sdks/instructor/README.md#createlmsinstructor) - Create an instructor
- [`lmsCreateLmsInstructor`](docs/sdks/lms/README.md#createlmsinstructor) - Create an instructor
- [`lmsCreateLmsStudent`](docs/sdks/lms/README.md#createlmsstudent) - Create a student
- [`lmsCreateLmsStudent`](docs/sdks/student/README.md#createlmsstudent) - Create a student
- [`lmsGetLmsClass`](docs/sdks/class/README.md#getlmsclass) - Retrieve a class
- [`lmsGetLmsClass`](docs/sdks/lms/README.md#getlmsclass) - Retrieve a class
- [`lmsGetLmsCourse`](docs/sdks/course/README.md#getlmscourse) - Retrieve a course
- [`lmsGetLmsCourse`](docs/sdks/lms/README.md#getlmscourse) - Retrieve a course
- [`lmsGetLmsInstructor`](docs/sdks/instructor/README.md#getlmsinstructor) - Retrieve an instructor
- [`lmsGetLmsInstructor`](docs/sdks/lms/README.md#getlmsinstructor) - Retrieve an instructor
- [`lmsGetLmsStudent`](docs/sdks/lms/README.md#getlmsstudent) - Retrieve a student
- [`lmsGetLmsStudent`](docs/sdks/student/README.md#getlmsstudent) - Retrieve a student
- [`lmsListLmsClasses`](docs/sdks/class/README.md#listlmsclasses) - List all classes
- [`lmsListLmsClasses`](docs/sdks/lms/README.md#listlmsclasses) - List all classes
- [`lmsListLmsCourses`](docs/sdks/course/README.md#listlmscourses) - List all courses
- [`lmsListLmsCourses`](docs/sdks/lms/README.md#listlmscourses) - List all courses
- [`lmsListLmsInstructors`](docs/sdks/instructor/README.md#listlmsinstructors) - List all instructors
- [`lmsListLmsInstructors`](docs/sdks/lms/README.md#listlmsinstructors) - List all instructors
- [`lmsListLmsStudents`](docs/sdks/lms/README.md#listlmsstudents) - List all students
- [`lmsListLmsStudents`](docs/sdks/student/README.md#listlmsstudents) - List all students
- [`lmsPatchLmsClass`](docs/sdks/class/README.md#patchlmsclass) - Update a class
- [`lmsPatchLmsClass`](docs/sdks/lms/README.md#patchlmsclass) - Update a class
- [`lmsPatchLmsCourse`](docs/sdks/course/README.md#patchlmscourse) - Update a course
- [`lmsPatchLmsCourse`](docs/sdks/lms/README.md#patchlmscourse) - Update a course
- [`lmsPatchLmsInstructor`](docs/sdks/instructor/README.md#patchlmsinstructor) - Update an instructor
- [`lmsPatchLmsInstructor`](docs/sdks/lms/README.md#patchlmsinstructor) - Update an instructor
- [`lmsPatchLmsStudent`](docs/sdks/lms/README.md#patchlmsstudent) - Update a student
- [`lmsPatchLmsStudent`](docs/sdks/student/README.md#patchlmsstudent) - Update a student
- [`lmsRemoveLmsClass`](docs/sdks/class/README.md#removelmsclass) - Remove a class
- [`lmsRemoveLmsClass`](docs/sdks/lms/README.md#removelmsclass) - Remove a class
- [`lmsRemoveLmsCourse`](docs/sdks/course/README.md#removelmscourse) - Remove a course
- [`lmsRemoveLmsCourse`](docs/sdks/lms/README.md#removelmscourse) - Remove a course
- [`lmsRemoveLmsInstructor`](docs/sdks/instructor/README.md#removelmsinstructor) - Remove an instructor
- [`lmsRemoveLmsInstructor`](docs/sdks/lms/README.md#removelmsinstructor) - Remove an instructor
- [`lmsRemoveLmsStudent`](docs/sdks/lms/README.md#removelmsstudent) - Remove a student
- [`lmsRemoveLmsStudent`](docs/sdks/student/README.md#removelmsstudent) - Remove a student
- [`lmsUpdateLmsClass`](docs/sdks/class/README.md#updatelmsclass) - Update a class
- [`lmsUpdateLmsClass`](docs/sdks/lms/README.md#updatelmsclass) - Update a class
- [`lmsUpdateLmsCourse`](docs/sdks/course/README.md#updatelmscourse) - Update a course
- [`lmsUpdateLmsCourse`](docs/sdks/lms/README.md#updatelmscourse) - Update a course
- [`lmsUpdateLmsInstructor`](docs/sdks/instructor/README.md#updatelmsinstructor) - Update an instructor
- [`lmsUpdateLmsInstructor`](docs/sdks/lms/README.md#updatelmsinstructor) - Update an instructor
- [`lmsUpdateLmsStudent`](docs/sdks/lms/README.md#updatelmsstudent) - Update a student
- [`lmsUpdateLmsStudent`](docs/sdks/student/README.md#updatelmsstudent) - Update a student
- [`locationCreateHrisLocation`](docs/sdks/hris/README.md#createhrislocation) - Create a location
- [`locationCreateHrisLocation`](docs/sdks/location/README.md#createhrislocation) - Create a location
- [`locationGetHrisLocation`](docs/sdks/hris/README.md#gethrislocation) - Retrieve a location
- [`locationGetHrisLocation`](docs/sdks/location/README.md#gethrislocation) - Retrieve a location
- [`locationListHrisLocations`](docs/sdks/hris/README.md#listhrislocations) - List all locations
- [`locationListHrisLocations`](docs/sdks/location/README.md#listhrislocations) - List all locations
- [`locationPatchHrisLocation`](docs/sdks/hris/README.md#patchhrislocation) - Update a location
- [`locationPatchHrisLocation`](docs/sdks/location/README.md#patchhrislocation) - Update a location
- [`locationRemoveHrisLocation`](docs/sdks/hris/README.md#removehrislocation) - Remove a location
- [`locationRemoveHrisLocation`](docs/sdks/location/README.md#removehrislocation) - Remove a location
- [`locationUpdateHrisLocation`](docs/sdks/hris/README.md#updatehrislocation) - Update a location
- [`locationUpdateHrisLocation`](docs/sdks/location/README.md#updatehrislocation) - Update a location
- [`martechCreateMartechList`](docs/sdks/list/README.md#createmartechlist) - Create a list
- [`martechCreateMartechList`](docs/sdks/martech/README.md#createmartechlist) - Create a list
- [`martechCreateMartechMember`](docs/sdks/martech/README.md#createmartechmember) - Create a member
- [`martechCreateMartechMember`](docs/sdks/member/README.md#createmartechmember) - Create a member
- [`martechGetMartechList`](docs/sdks/list/README.md#getmartechlist) - Retrieve a list
- [`martechGetMartechList`](docs/sdks/martech/README.md#getmartechlist) - Retrieve a list
- [`martechGetMartechMember`](docs/sdks/martech/README.md#getmartechmember) - Retrieve a member
- [`martechGetMartechMember`](docs/sdks/member/README.md#getmartechmember) - Retrieve a member
- [`martechListMartechLists`](docs/sdks/list/README.md#listmartechlists) - List all lists
- [`martechListMartechLists`](docs/sdks/martech/README.md#listmartechlists) - List all lists
- [`martechListMartechMembers`](docs/sdks/martech/README.md#listmartechmembers) - List all members
- [`martechListMartechMembers`](docs/sdks/member/README.md#listmartechmembers) - List all members
- [`martechPatchMartechList`](docs/sdks/list/README.md#patchmartechlist) - Update a list
- [`martechPatchMartechList`](docs/sdks/martech/README.md#patchmartechlist) - Update a list
- [`martechPatchMartechMember`](docs/sdks/martech/README.md#patchmartechmember) - Update a member
- [`martechPatchMartechMember`](docs/sdks/member/README.md#patchmartechmember) - Update a member
- [`martechRemoveMartechList`](docs/sdks/list/README.md#removemartechlist) - Remove a list
- [`martechRemoveMartechList`](docs/sdks/martech/README.md#removemartechlist) - Remove a list
- [`martechRemoveMartechMember`](docs/sdks/martech/README.md#removemartechmember) - Remove a member
- [`martechRemoveMartechMember`](docs/sdks/member/README.md#removemartechmember) - Remove a member
- [`martechUpdateMartechList`](docs/sdks/list/README.md#updatemartechlist) - Update a list
- [`martechUpdateMartechList`](docs/sdks/martech/README.md#updatemartechlist) - Update a list
- [`martechUpdateMartechMember`](docs/sdks/martech/README.md#updatemartechmember) - Update a member
- [`martechUpdateMartechMember`](docs/sdks/member/README.md#updatemartechmember) - Update a member
- [`messagingCreateMessagingMessage`](docs/sdks/message/README.md#createmessagingmessage) - Create a message
- [`messagingCreateMessagingMessage`](docs/sdks/messaging/README.md#createmessagingmessage) - Create a message
- [`messagingGetMessagingChannel`](docs/sdks/channel/README.md#getmessagingchannel) - Retrieve a channel
- [`messagingGetMessagingChannel`](docs/sdks/messaging/README.md#getmessagingchannel) - Retrieve a channel
- [`messagingGetMessagingMessage`](docs/sdks/message/README.md#getmessagingmessage) - Retrieve a message
- [`messagingGetMessagingMessage`](docs/sdks/messaging/README.md#getmessagingmessage) - Retrieve a message
- [`messagingListMessagingChannels`](docs/sdks/channel/README.md#listmessagingchannels) - List all channels
- [`messagingListMessagingChannels`](docs/sdks/messaging/README.md#listmessagingchannels) - List all channels
- [`messagingListMessagingMessages`](docs/sdks/message/README.md#listmessagingmessages) - List all messages
- [`messagingListMessagingMessages`](docs/sdks/messaging/README.md#listmessagingmessages) - List all messages
- [`messagingPatchMessagingMessage`](docs/sdks/message/README.md#patchmessagingmessage) - Update a message
- [`messagingPatchMessagingMessage`](docs/sdks/messaging/README.md#patchmessagingmessage) - Update a message
- [`messagingRemoveMessagingMessage`](docs/sdks/message/README.md#removemessagingmessage) - Remove a message
- [`messagingRemoveMessagingMessage`](docs/sdks/messaging/README.md#removemessagingmessage) - Remove a message
- [`messagingUpdateMessagingMessage`](docs/sdks/message/README.md#updatemessagingmessage) - Update a message
- [`messagingUpdateMessagingMessage`](docs/sdks/messaging/README.md#updatemessagingmessage) - Update a message
- [`metadataCreateMetadataMetadata`](docs/sdks/metadata/README.md#createmetadatametadata) - Create a metadata
- [`metadataGetMetadataMetadata`](docs/sdks/metadata/README.md#getmetadatametadata) - Retrieve a metadata
- [`metadataListMetadataMetadatas`](docs/sdks/metadata/README.md#listmetadatametadatas) - List all metadatas
- [`metadataPatchMetadataMetadata`](docs/sdks/metadata/README.md#patchmetadatametadata) - Update a metadata
- [`metadataRemoveMetadataMetadata`](docs/sdks/metadata/README.md#removemetadatametadata) - Remove a metadata
- [`metadataUpdateMetadataMetadata`](docs/sdks/metadata/README.md#updatemetadatametadata) - Update a metadata
- [`organizationCreateAdsOrganization`](docs/sdks/ads/README.md#createadsorganization) - Create an organization
- [`organizationCreateAdsOrganization`](docs/sdks/organization/README.md#createadsorganization) - Create an organization
- [`organizationCreateRepoOrganization`](docs/sdks/organization/README.md#createrepoorganization) - Create an organization
- [`organizationCreateRepoOrganization`](docs/sdks/repo/README.md#createrepoorganization) - Create an organization
- [`organizationGetAdsOrganization`](docs/sdks/ads/README.md#getadsorganization) - Retrieve an organization
- [`organizationGetAdsOrganization`](docs/sdks/organization/README.md#getadsorganization) - Retrieve an organization
- [`organizationGetRepoOrganization`](docs/sdks/organization/README.md#getrepoorganization) - Retrieve an organization
- [`organizationGetRepoOrganization`](docs/sdks/repo/README.md#getrepoorganization) - Retrieve an organization
- [`organizationListAdsOrganizations`](docs/sdks/ads/README.md#listadsorganizations) - List all organizations
- [`organizationListAdsOrganizations`](docs/sdks/organization/README.md#listadsorganizations) - List all organizations
- [`organizationListRepoOrganizations`](docs/sdks/organization/README.md#listrepoorganizations) - List all organizations
- [`organizationListRepoOrganizations`](docs/sdks/repo/README.md#listrepoorganizations) - List all organizations
- [`organizationPatchAdsOrganization`](docs/sdks/ads/README.md#patchadsorganization) - Update an organization
- [`organizationPatchAdsOrganization`](docs/sdks/organization/README.md#patchadsorganization) - Update an organization
- [`organizationPatchRepoOrganization`](docs/sdks/organization/README.md#patchrepoorganization) - Update an organization
- [`organizationPatchRepoOrganization`](docs/sdks/repo/README.md#patchrepoorganization) - Update an organization
- [`organizationRemoveAdsOrganization`](docs/sdks/ads/README.md#removeadsorganization) - Remove an organization
- [`organizationRemoveAdsOrganization`](docs/sdks/organization/README.md#removeadsorganization) - Remove an organization
- [`organizationRemoveRepoOrganization`](docs/sdks/organization/README.md#removerepoorganization) - Remove an organization
- [`organizationRemoveRepoOrganization`](docs/sdks/repo/README.md#removerepoorganization) - Remove an organization
- [`organizationUpdateAdsOrganization`](docs/sdks/ads/README.md#updateadsorganization) - Update an organization
- [`organizationUpdateAdsOrganization`](docs/sdks/organization/README.md#updateadsorganization) - Update an organization
- [`organizationUpdateRepoOrganization`](docs/sdks/organization/README.md#updaterepoorganization) - Update an organization
- [`organizationUpdateRepoOrganization`](docs/sdks/repo/README.md#updaterepoorganization) - Update an organization
- [`passthroughCreatePassthroughJson`](docs/sdks/passthrough/README.md#createpassthroughjson) - Passthrough POST
- [`passthroughCreatePassthroughRaw`](docs/sdks/passthrough/README.md#createpassthroughraw) - Passthrough POST
- [`passthroughListPassthroughs`](docs/sdks/passthrough/README.md#listpassthroughs) - Passthrough GET
- [`passthroughPatchPassthroughJson`](docs/sdks/passthrough/README.md#patchpassthroughjson) - Passthrough PUT
- [`passthroughPatchPassthroughRaw`](docs/sdks/passthrough/README.md#patchpassthroughraw) - Passthrough PUT
- [`passthroughRemovePassthrough`](docs/sdks/passthrough/README.md#removepassthrough) - Passthrough DELETE
- [`passthroughUpdatePassthroughJson`](docs/sdks/passthrough/README.md#updatepassthroughjson) - Passthrough PUT
- [`passthroughUpdatePassthroughRaw`](docs/sdks/passthrough/README.md#updatepassthroughraw) - Passthrough PUT
- [`paymentCreatePaymentPayment`](docs/sdks/payment/README.md#createpaymentpayment) - Create a payment
- [`paymentCreatePaymentSubscription`](docs/sdks/payment/README.md#createpaymentsubscription) - Create a subscription
- [`paymentCreatePaymentSubscription`](docs/sdks/subscription/README.md#createpaymentsubscription) - Create a subscription
- [`paymentGetPaymentPayment`](docs/sdks/payment/README.md#getpaymentpayment) - Retrieve a payment
- [`paymentGetPaymentPayout`](docs/sdks/payment/README.md#getpaymentpayout) - Retrieve a payout
- [`paymentGetPaymentPayout`](docs/sdks/payout/README.md#getpaymentpayout) - Retrieve a payout
- [`paymentGetPaymentRefund`](docs/sdks/payment/README.md#getpaymentrefund) - Retrieve a refund
- [`paymentGetPaymentRefund`](docs/sdks/refund/README.md#getpaymentrefund) - Retrieve a refund
- [`paymentGetPaymentSubscription`](docs/sdks/payment/README.md#getpaymentsubscription) - Retrieve a subscription
- [`paymentGetPaymentSubscription`](docs/sdks/subscription/README.md#getpaymentsubscription) - Retrieve a subscription
- [`paymentListPaymentPayments`](docs/sdks/payment/README.md#listpaymentpayments) - List all payments
- [`paymentListPaymentPayouts`](docs/sdks/payment/README.md#listpaymentpayouts) - List all payouts
- [`paymentListPaymentPayouts`](docs/sdks/payout/README.md#listpaymentpayouts) - List all payouts
- [`paymentListPaymentRefunds`](docs/sdks/payment/README.md#listpaymentrefunds) - List all refunds
- [`paymentListPaymentRefunds`](docs/sdks/refund/README.md#listpaymentrefunds) - List all refunds
- [`paymentListPaymentSubscriptions`](docs/sdks/payment/README.md#listpaymentsubscriptions) - List all subscriptions
- [`paymentListPaymentSubscriptions`](docs/sdks/subscription/README.md#listpaymentsubscriptions) - List all subscriptions
- [`paymentPatchPaymentPayment`](docs/sdks/payment/README.md#patchpaymentpayment) - Update a payment
- [`paymentPatchPaymentSubscription`](docs/sdks/payment/README.md#patchpaymentsubscription) - Update a subscription
- [`paymentPatchPaymentSubscription`](docs/sdks/subscription/README.md#patchpaymentsubscription) - Update a subscription
- [`paymentRemovePaymentPayment`](docs/sdks/payment/README.md#removepaymentpayment) - Remove a payment
- [`paymentRemovePaymentSubscription`](docs/sdks/payment/README.md#removepaymentsubscription) - Remove a subscription
- [`paymentRemovePaymentSubscription`](docs/sdks/subscription/README.md#removepaymentsubscription) - Remove a subscription
- [`paymentUpdatePaymentPayment`](docs/sdks/payment/README.md#updatepaymentpayment) - Update a payment
- [`paymentUpdatePaymentSubscription`](docs/sdks/payment/README.md#updatepaymentsubscription) - Update a subscription
- [`paymentUpdatePaymentSubscription`](docs/sdks/subscription/README.md#updatepaymentsubscription) - Update a subscription
- [`recordingCreateUcRecording`](docs/sdks/recording/README.md#createucrecording) - Create a recording
- [`recordingCreateUcRecording`](docs/sdks/uc/README.md#createucrecording) - Create a recording
- [`recordingGetUcRecording`](docs/sdks/recording/README.md#getucrecording) - Retrieve a recording
- [`recordingGetUcRecording`](docs/sdks/uc/README.md#getucrecording) - Retrieve a recording
- [`recordingListUcRecordings`](docs/sdks/recording/README.md#listucrecordings) - List all recordings
- [`recordingListUcRecordings`](docs/sdks/uc/README.md#listucrecordings) - List all recordings
- [`recordingPatchUcRecording`](docs/sdks/recording/README.md#patchucrecording) - Update a recording
- [`recordingPatchUcRecording`](docs/sdks/uc/README.md#patchucrecording) - Update a recording
- [`recordingRemoveUcRecording`](docs/sdks/recording/README.md#removeucrecording) - Remove a recording
- [`recordingRemoveUcRecording`](docs/sdks/uc/README.md#removeucrecording) - Remove a recording
- [`recordingUpdateUcRecording`](docs/sdks/recording/README.md#updateucrecording) - Update a recording
- [`recordingUpdateUcRecording`](docs/sdks/uc/README.md#updateucrecording) - Update a recording
- [`repoCreateRepoBranch`](docs/sdks/branch/README.md#createrepobranch) - Create a branch
- [`repoCreateRepoBranch`](docs/sdks/repo/README.md#createrepobranch) - Create a branch
- [`repoCreateRepoCommit`](docs/sdks/commit/README.md#createrepocommit) - Create a commit
- [`repoCreateRepoCommit`](docs/sdks/repo/README.md#createrepocommit) - Create a commit
- [`repoCreateRepoPullrequest`](docs/sdks/pullrequest/README.md#createrepopullrequest) - Create a pullrequest
- [`repoCreateRepoPullrequest`](docs/sdks/repo/README.md#createrepopullrequest) - Create a pullrequest
- [`repoCreateRepoRepository`](docs/sdks/repo/README.md#createreporepository) - Create a repository
- [`repoCreateRepoRepository`](docs/sdks/repository/README.md#createreporepository) - Create a repository
- [`repoGetRepoBranch`](docs/sdks/branch/README.md#getrepobranch) - Retrieve a branch
- [`repoGetRepoBranch`](docs/sdks/repo/README.md#getrepobranch) - Retrieve a branch
- [`repoGetRepoCommit`](docs/sdks/commit/README.md#getrepocommit) - Retrieve a commit
- [`repoGetRepoCommit`](docs/sdks/repo/README.md#getrepocommit) - Retrieve a commit
- [`repoGetRepoPullrequest`](docs/sdks/pullrequest/README.md#getrepopullrequest) - Retrieve a pullrequest
- [`repoGetRepoPullrequest`](docs/sdks/repo/README.md#getrepopullrequest) - Retrieve a pullrequest
- [`repoGetRepoRepository`](docs/sdks/repo/README.md#getreporepository) - Retrieve a repository
- [`repoGetRepoRepository`](docs/sdks/repository/README.md#getreporepository) - Retrieve a repository
- [`repoListRepoBranches`](docs/sdks/branch/README.md#listrepobranches) - List all branches
- [`repoListRepoBranches`](docs/sdks/repo/README.md#listrepobranches) - List all branches
- [`repoListRepoCommits`](docs/sdks/commit/README.md#listrepocommits) - List all commits
- [`repoListRepoCommits`](docs/sdks/repo/README.md#listrepocommits) - List all commits
- [`repoListRepoPullrequests`](docs/sdks/pullrequest/README.md#listrepopullrequests) - List all pullrequests
- [`repoListRepoPullrequests`](docs/sdks/repo/README.md#listrepopullrequests) - List all pullrequests
- [`repoListRepoRepositories`](docs/sdks/repo/README.md#listreporepositories) - List all repositories
- [`repoListRepoRepositories`](docs/sdks/repository/README.md#listreporepositories) - List all repositories
- [`repoPatchRepoBranch`](docs/sdks/branch/README.md#patchrepobranch) - Update a branch
- [`repoPatchRepoBranch`](docs/sdks/repo/README.md#patchrepobranch) - Update a branch
- [`repoPatchRepoCommit`](docs/sdks/commit/README.md#patchrepocommit) - Update a commit
- [`repoPatchRepoCommit`](docs/sdks/repo/README.md#patchrepocommit) - Update a commit
- [`repoPatchRepoPullrequest`](docs/sdks/pullrequest/README.md#patchrepopullrequest) - Update a pullrequest
- [`repoPatchRepoPullrequest`](docs/sdks/repo/README.md#patchrepopullrequest) - Update a pullrequest
- [`repoPatchRepoRepository`](docs/sdks/repo/README.md#patchreporepository) - Update a repository
- [`repoPatchRepoRepository`](docs/sdks/repository/README.md#patchreporepository) - Update a repository
- [`repoRemoveRepoBranch`](docs/sdks/branch/README.md#removerepobranch) - Remove a branch
- [`repoRemoveRepoBranch`](docs/sdks/repo/README.md#removerepobranch) - Remove a branch
- [`repoRemoveRepoCommit`](docs/sdks/commit/README.md#removerepocommit) - Remove a commit
- [`repoRemoveRepoCommit`](docs/sdks/repo/README.md#removerepocommit) - Remove a commit
- [`repoRemoveRepoPullrequest`](docs/sdks/pullrequest/README.md#removerepopullrequest) - Remove a pullrequest
- [`repoRemoveRepoPullrequest`](docs/sdks/repo/README.md#removerepopullrequest) - Remove a pullrequest
- [`repoRemoveRepoRepository`](docs/sdks/repo/README.md#removereporepository) - Remove a repository
- [`repoRemoveRepoRepository`](docs/sdks/repository/README.md#removereporepository) - Remove a repository
- [`reportListAdsReports`](docs/sdks/ads/README.md#listadsreports) - List all reports
- [`reportListAdsReports`](docs/sdks/report/README.md#listadsreports) - List all reports
- [`repoUpdateRepoBranch`](docs/sdks/branch/README.md#updaterepobranch) - Update a branch
- [`repoUpdateRepoBranch`](docs/sdks/repo/README.md#updaterepobranch) - Update a branch
- [`repoUpdateRepoCommit`](docs/sdks/commit/README.md#updaterepocommit) - Update a commit
- [`repoUpdateRepoCommit`](docs/sdks/repo/README.md#updaterepocommit) - Update a commit
- [`repoUpdateRepoPullrequest`](docs/sdks/pullrequest/README.md#updaterepopullrequest) - Update a pullrequest
- [`repoUpdateRepoPullrequest`](docs/sdks/repo/README.md#updaterepopullrequest) - Update a pullrequest
- [`repoUpdateRepoRepository`](docs/sdks/repo/README.md#updatereporepository) - Update a repository
- [`repoUpdateRepoRepository`](docs/sdks/repository/README.md#updatereporepository) - Update a repository
- [`scimCreateScimUsers`](docs/sdks/scim/README.md#createscimusers) - Create user
- [`scimCreateScimUsers`](docs/sdks/user/README.md#createscimusers) - Create user
- [`scimGetScimUsers`](docs/sdks/scim/README.md#getscimusers) - Get user
- [`scimGetScimUsers`](docs/sdks/user/README.md#getscimusers) - Get user
- [`scimListScimUsers`](docs/sdks/scim/README.md#listscimusers) - List users
- [`scimListScimUsers`](docs/sdks/user/README.md#listscimusers) - List users
- [`scimPatchScimUsers`](docs/sdks/scim/README.md#patchscimusers) - Update user
- [`scimPatchScimUsers`](docs/sdks/user/README.md#patchscimusers) - Update user
- [`scimRemoveScimUsers`](docs/sdks/scim/README.md#removescimusers) - Delete user
- [`scimRemoveScimUsers`](docs/sdks/user/README.md#removescimusers) - Delete user
- [`scimUpdateScimUsers`](docs/sdks/scim/README.md#updatescimusers) - Update user
- [`scimUpdateScimUsers`](docs/sdks/user/README.md#updatescimusers) - Update user
- [`shippingCreateShippingLabel`](docs/sdks/label/README.md#createshippinglabel) - Create a label
- [`shippingCreateShippingLabel`](docs/sdks/shipping/README.md#createshippinglabel) - Create a label
- [`shippingCreateShippingRate`](docs/sdks/rate/README.md#createshippingrate) - Create a rate
- [`shippingCreateShippingRate`](docs/sdks/shipping/README.md#createshippingrate) - Create a rate
- [`shippingCreateShippingShipment`](docs/sdks/shipment/README.md#createshippingshipment) - Create a shipment
- [`shippingCreateShippingShipment`](docs/sdks/shipping/README.md#createshippingshipment) - Create a shipment
- [`shippingGetShippingCarrier`](docs/sdks/carrier/README.md#getshippingcarrier) - Retrieve a carrier
- [`shippingGetShippingCarrier`](docs/sdks/shipping/README.md#getshippingcarrier) - Retrieve a carrier
- [`shippingGetShippingLabel`](docs/sdks/label/README.md#getshippinglabel) - Retrieve a label
- [`shippingGetShippingLabel`](docs/sdks/shipping/README.md#getshippinglabel) - Retrieve a label
- [`shippingGetShippingShipment`](docs/sdks/shipment/README.md#getshippingshipment) - Retrieve a shipment
- [`shippingGetShippingShipment`](docs/sdks/shipping/README.md#getshippingshipment) - Retrieve a shipment
- [`shippingGetShippingTracking`](docs/sdks/shipping/README.md#getshippingtracking) - Retrieve a tracking
- [`shippingGetShippingTracking`](docs/sdks/tracking/README.md#getshippingtracking) - Retrieve a tracking
- [`shippingListShippingCarriers`](docs/sdks/carrier/README.md#listshippingcarriers) - List all carriers
- [`shippingListShippingCarriers`](docs/sdks/shipping/README.md#listshippingcarriers) - List all carriers
- [`shippingListShippingLabels`](docs/sdks/label/README.md#listshippinglabels) - List all labels
- [`shippingListShippingLabels`](docs/sdks/shipping/README.md#listshippinglabels) - List all labels
- [`shippingListShippingShipments`](docs/sdks/shipment/README.md#listshippingshipments) - List all shipments
- [`shippingListShippingShipments`](docs/sdks/shipping/README.md#listshippingshipments) - List all shipments
- [`shippingPatchShippingLabel`](docs/sdks/label/README.md#patchshippinglabel) - Update a label
- [`shippingPatchShippingLabel`](docs/sdks/shipping/README.md#patchshippinglabel) - Update a label
- [`shippingPatchShippingShipment`](docs/sdks/shipment/README.md#patchshippingshipment) - Update a shipment
- [`shippingPatchShippingShipment`](docs/sdks/shipping/README.md#patchshippingshipment) - Update a shipment
- [`shippingRemoveShippingLabel`](docs/sdks/label/README.md#removeshippinglabel) - Remove a label
- [`shippingRemoveShippingLabel`](docs/sdks/shipping/README.md#removeshippinglabel) - Remove a label
- [`shippingRemoveShippingShipment`](docs/sdks/shipment/README.md#removeshippingshipment) - Remove a shipment
- [`shippingRemoveShippingShipment`](docs/sdks/shipping/README.md#removeshippingshipment) - Remove a shipment
- [`shippingUpdateShippingLabel`](docs/sdks/label/README.md#updateshippinglabel) - Update a label
- [`shippingUpdateShippingLabel`](docs/sdks/shipping/README.md#updateshippinglabel) - Update a label
- [`shippingUpdateShippingShipment`](docs/sdks/shipment/README.md#updateshippingshipment) - Update a shipment
- [`shippingUpdateShippingShipment`](docs/sdks/shipping/README.md#updateshippingshipment) - Update a shipment
- [`storageCreateStorageFile`](docs/sdks/file/README.md#createstoragefile) - Create a file
- [`storageCreateStorageFile`](docs/sdks/storage/README.md#createstoragefile) - Create a file
- [`storageGetStorageFile`](docs/sdks/file/README.md#getstoragefile) - Retrieve a file
- [`storageGetStorageFile`](docs/sdks/storage/README.md#getstoragefile) - Retrieve a file
- [`storageListStorageFiles`](docs/sdks/file/README.md#liststoragefiles) - List all files
- [`storageListStorageFiles`](docs/sdks/storage/README.md#liststoragefiles) - List all files
- [`storagePatchStorageFile`](docs/sdks/file/README.md#patchstoragefile) - Update a file
- [`storagePatchStorageFile`](docs/sdks/storage/README.md#patchstoragefile) - Update a file
- [`storageRemoveStorageFile`](docs/sdks/file/README.md#removestoragefile) - Remove a file
- [`storageRemoveStorageFile`](docs/sdks/storage/README.md#removestoragefile) - Remove a file
- [`storageUpdateStorageFile`](docs/sdks/file/README.md#updatestoragefile) - Update a file
- [`storageUpdateStorageFile`](docs/sdks/storage/README.md#updatestoragefile) - Update a file
- [`taskCreateTaskProject`](docs/sdks/project/README.md#createtaskproject) - Create a project
- [`taskCreateTaskProject`](docs/sdks/task/README.md#createtaskproject) - Create a project
- [`taskCreateTaskTask`](docs/sdks/task/README.md#createtasktask) - Create a task
- [`taskGetTaskChange`](docs/sdks/change/README.md#gettaskchange) - Retrieve a change
- [`taskGetTaskChange`](docs/sdks/task/README.md#gettaskchange) - Retrieve a change
- [`taskGetTaskProject`](docs/sdks/project/README.md#gettaskproject) - Retrieve a project
- [`taskGetTaskProject`](docs/sdks/task/README.md#gettaskproject) - Retrieve a project
- [`taskGetTaskTask`](docs/sdks/task/README.md#gettasktask) - Retrieve a task
- [`taskListTaskChanges`](docs/sdks/change/README.md#listtaskchanges) - List all changes
- [`taskListTaskChanges`](docs/sdks/task/README.md#listtaskchanges) - List all changes
- [`taskListTaskProjects`](docs/sdks/project/README.md#listtaskprojects) - List all projects
- [`taskListTaskProjects`](docs/sdks/task/README.md#listtaskprojects) - List all projects
- [`taskListTaskTasks`](docs/sdks/task/README.md#listtasktasks) - List all tasks
- [`taskPatchTaskProject`](docs/sdks/project/README.md#patchtaskproject) - Update a project
- [`taskPatchTaskProject`](docs/sdks/task/README.md#patchtaskproject) - Update a project
- [`taskPatchTaskTask`](docs/sdks/task/README.md#patchtasktask) - Update a task
- [`taskRemoveTaskProject`](docs/sdks/project/README.md#removetaskproject) - Remove a project
- [`taskRemoveTaskProject`](docs/sdks/task/README.md#removetaskproject) - Remove a project
- [`taskRemoveTaskTask`](docs/sdks/task/README.md#removetasktask) - Remove a task
- [`taskUpdateTaskProject`](docs/sdks/project/README.md#updatetaskproject) - Update a project
- [`taskUpdateTaskProject`](docs/sdks/task/README.md#updatetaskproject) - Update a project
- [`taskUpdateTaskTask`](docs/sdks/task/README.md#updatetasktask) - Update a task
- [`ticketingCreateTicketingCustomer`](docs/sdks/customer/README.md#createticketingcustomer) - Create a customer
- [`ticketingCreateTicketingCustomer`](docs/sdks/ticketing/README.md#createticketingcustomer) - Create a customer
- [`ticketingCreateTicketingNote`](docs/sdks/note/README.md#createticketingnote) - Create a note
- [`ticketingCreateTicketingNote`](docs/sdks/ticketing/README.md#createticketingnote) - Create a note
- [`ticketingCreateTicketingTicket`](docs/sdks/ticket/README.md#createticketingticket) - Create a ticket
- [`ticketingCreateTicketingTicket`](docs/sdks/ticketing/README.md#createticketingticket) - Create a ticket
- [`ticketingGetTicketingCustomer`](docs/sdks/customer/README.md#getticketingcustomer) - Retrieve a customer
- [`ticketingGetTicketingCustomer`](docs/sdks/ticketing/README.md#getticketingcustomer) - Retrieve a customer
- [`ticketingGetTicketingNote`](docs/sdks/note/README.md#getticketingnote) - Retrieve a note
- [`ticketingGetTicketingNote`](docs/sdks/ticketing/README.md#getticketingnote) - Retrieve a note
- [`ticketingGetTicketingTicket`](docs/sdks/ticket/README.md#getticketingticket) - Retrieve a ticket
- [`ticketingGetTicketingTicket`](docs/sdks/ticketing/README.md#getticketingticket) - Retrieve a ticket
- [`ticketingListTicketingCustomers`](docs/sdks/customer/README.md#listticketingcustomers) - List all customers
- [`ticketingListTicketingCustomers`](docs/sdks/ticketing/README.md#listticketingcustomers) - List all customers
- [`ticketingListTicketingNotes`](docs/sdks/note/README.md#listticketingnotes) - List all notes
- [`ticketingListTicketingNotes`](docs/sdks/ticketing/README.md#listticketingnotes) - List all notes
- [`ticketingListTicketingTickets`](docs/sdks/ticket/README.md#listticketingtickets) - List all tickets
- [`ticketingListTicketingTickets`](docs/sdks/ticketing/README.md#listticketingtickets) - List all tickets
- [`ticketingPatchTicketingCustomer`](docs/sdks/customer/README.md#patchticketingcustomer) - Update a customer
- [`ticketingPatchTicketingCustomer`](docs/sdks/ticketing/README.md#patchticketingcustomer) - Update a customer
- [`ticketingPatchTicketingNote`](docs/sdks/note/README.md#patchticketingnote) - Update a note
- [`ticketingPatchTicketingNote`](docs/sdks/ticketing/README.md#patchticketingnote) - Update a note
- [`ticketingPatchTicketingTicket`](docs/sdks/ticket/README.md#patchticketingticket) - Update a ticket
- [`ticketingPatchTicketingTicket`](docs/sdks/ticketing/README.md#patchticketingticket) - Update a ticket
- [`ticketingRemoveTicketingCustomer`](docs/sdks/customer/README.md#removeticketingcustomer) - Remove a customer
- [`ticketingRemoveTicketingCustomer`](docs/sdks/ticketing/README.md#removeticketingcustomer) - Remove a customer
- [`ticketingRemoveTicketingNote`](docs/sdks/note/README.md#removeticketingnote) - Remove a note
- [`ticketingRemoveTicketingNote`](docs/sdks/ticketing/README.md#removeticketingnote) - Remove a note
- [`ticketingRemoveTicketingTicket`](docs/sdks/ticket/README.md#removeticketingticket) - Remove a ticket
- [`ticketingRemoveTicketingTicket`](docs/sdks/ticketing/README.md#removeticketingticket) - Remove a ticket
- [`ticketingUpdateTicketingCustomer`](docs/sdks/customer/README.md#updateticketingcustomer) - Update a customer
- [`ticketingUpdateTicketingCustomer`](docs/sdks/ticketing/README.md#updateticketingcustomer) - Update a customer
- [`ticketingUpdateTicketingNote`](docs/sdks/note/README.md#updateticketingnote) - Update a note
- [`ticketingUpdateTicketingNote`](docs/sdks/ticketing/README.md#updateticketingnote) - Update a note
- [`ticketingUpdateTicketingTicket`](docs/sdks/ticket/README.md#updateticketingticket) - Update a ticket
- [`ticketingUpdateTicketingTicket`](docs/sdks/ticketing/README.md#updateticketingticket) - Update a ticket
- [`ucGetUcCall`](docs/sdks/call/README.md#getuccall) - Retrieve a call
- [`ucGetUcCall`](docs/sdks/uc/README.md#getuccall) - Retrieve a call
- [`ucListUcCalls`](docs/sdks/call/README.md#listuccalls) - List all calls
- [`ucListUcCalls`](docs/sdks/uc/README.md#listuccalls) - List all calls
- [`unifiedCreateUnifiedConnection`](docs/sdks/connection/README.md#createunifiedconnection) - Create connection
- [`unifiedCreateUnifiedConnection`](docs/sdks/unified/README.md#createunifiedconnection) - Create connection
- [`unifiedCreateUnifiedEnvironment`](docs/sdks/environment/README.md#createunifiedenvironment) - Create new environments
- [`unifiedCreateUnifiedEnvironment`](docs/sdks/unified/README.md#createunifiedenvironment) - Create new environments
- [`unifiedCreateUnifiedWebhook`](docs/sdks/unified/README.md#createunifiedwebhook) - Create webhook subscription
- [`unifiedCreateUnifiedWebhook`](docs/sdks/webhook/README.md#createunifiedwebhook) - Create webhook subscription
- [`unifiedGetUnifiedApicall`](docs/sdks/apicall/README.md#getunifiedapicall) - Retrieve specific API Call by its ID
- [`unifiedGetUnifiedApicall`](docs/sdks/unified/README.md#getunifiedapicall) - Retrieve specific API Call by its ID
- [`unifiedGetUnifiedConnection`](docs/sdks/connection/README.md#getunifiedconnection) - Retrieve connection
- [`unifiedGetUnifiedConnection`](docs/sdks/unified/README.md#getunifiedconnection) - Retrieve connection
- [`unifiedGetUnifiedIntegrationAuth`](docs/sdks/auth/README.md#getunifiedintegrationauth) - Authorize new connection
- [`unifiedGetUnifiedIntegrationAuth`](docs/sdks/integration/README.md#getunifiedintegrationauth) - Authorize new connection
- [`unifiedGetUnifiedIntegrationAuth`](docs/sdks/unified/README.md#getunifiedintegrationauth) - Authorize new connection
- [`unifiedGetUnifiedIssue`](docs/sdks/issue/README.md#getunifiedissue) - Retrieve support issue
- [`unifiedGetUnifiedIssue`](docs/sdks/unified/README.md#getunifiedissue) - Retrieve support issue
- [`unifiedGetUnifiedWebhook`](docs/sdks/unified/README.md#getunifiedwebhook) - Retrieve webhook by its ID
- [`unifiedGetUnifiedWebhook`](docs/sdks/webhook/README.md#getunifiedwebhook) - Retrieve webhook by its ID
- [`unifiedListUnifiedApicalls`](docs/sdks/apicall/README.md#listunifiedapicalls) - Returns API Calls
- [`unifiedListUnifiedApicalls`](docs/sdks/unified/README.md#listunifiedapicalls) - Returns API Calls
- [`unifiedListUnifiedConnections`](docs/sdks/connection/README.md#listunifiedconnections) - List all connections
- [`unifiedListUnifiedConnections`](docs/sdks/unified/README.md#listunifiedconnections) - List all connections
- [`unifiedListUnifiedEnvironments`](docs/sdks/environment/README.md#listunifiedenvironments) - Returns all environments
- [`unifiedListUnifiedEnvironments`](docs/sdks/unified/README.md#listunifiedenvironments) - Returns all environments
- [`unifiedListUnifiedIntegrations`](docs/sdks/integration/README.md#listunifiedintegrations) - Returns all integrations
- [`unifiedListUnifiedIntegrations`](docs/sdks/unified/README.md#listunifiedintegrations) - Returns all integrations
- [`unifiedListUnifiedIntegrationWorkspaces`](docs/sdks/integration/README.md#listunifiedintegrationworkspaces) - Returns all activated integrations in a workspace
- [`unifiedListUnifiedIntegrationWorkspaces`](docs/sdks/unified/README.md#listunifiedintegrationworkspaces) - Returns all activated integrations in a workspace
- [`unifiedListUnifiedIssues`](docs/sdks/issue/README.md#listunifiedissues) - List support issues
- [`unifiedListUnifiedIssues`](docs/sdks/unified/README.md#listunifiedissues) - List support issues
- [`unifiedListUnifiedWebhooks`](docs/sdks/unified/README.md#listunifiedwebhooks) - Returns all registered webhooks
- [`unifiedListUnifiedWebhooks`](docs/sdks/webhook/README.md#listunifiedwebhooks) - Returns all registered webhooks
- [`unifiedPatchUnifiedConnection`](docs/sdks/connection/README.md#patchunifiedconnection) - Update connection
- [`unifiedPatchUnifiedConnection`](docs/sdks/unified/README.md#patchunifiedconnection) - Update connection
- [`unifiedPatchUnifiedWebhook`](docs/sdks/unified/README.md#patchunifiedwebhook) - Update webhook subscription
- [`unifiedPatchUnifiedWebhook`](docs/sdks/webhook/README.md#patchunifiedwebhook) - Update webhook subscription
- [`unifiedPatchUnifiedWebhookTrigger`](docs/sdks/unified/README.md#patchunifiedwebhooktrigger) - Trigger webhook
- [`unifiedPatchUnifiedWebhookTrigger`](docs/sdks/webhook/README.md#patchunifiedwebhooktrigger) - Trigger webhook
- [`unifiedRemoveUnifiedConnection`](docs/sdks/connection/README.md#removeunifiedconnection) - Remove connection
- [`unifiedRemoveUnifiedConnection`](docs/sdks/unified/README.md#removeunifiedconnection) - Remove connection
- [`unifiedRemoveUnifiedEnvironment`](docs/sdks/environment/README.md#removeunifiedenvironment) - Remove an environment
- [`unifiedRemoveUnifiedEnvironment`](docs/sdks/unified/README.md#removeunifiedenvironment) - Remove an environment
- [`unifiedRemoveUnifiedWebhook`](docs/sdks/unified/README.md#removeunifiedwebhook) - Remove webhook subscription
- [`unifiedRemoveUnifiedWebhook`](docs/sdks/webhook/README.md#removeunifiedwebhook) - Remove webhook subscription
- [`unifiedUpdateUnifiedConnection`](docs/sdks/connection/README.md#updateunifiedconnection) - Update connection
- [`unifiedUpdateUnifiedConnection`](docs/sdks/unified/README.md#updateunifiedconnection) - Update connection
- [`unifiedUpdateUnifiedWebhook`](docs/sdks/unified/README.md#updateunifiedwebhook) - Update webhook subscription
- [`unifiedUpdateUnifiedWebhook`](docs/sdks/webhook/README.md#updateunifiedwebhook) - Update webhook subscription
- [`unifiedUpdateUnifiedWebhookTrigger`](docs/sdks/unified/README.md#updateunifiedwebhooktrigger) - Trigger webhook
- [`unifiedUpdateUnifiedWebhookTrigger`](docs/sdks/webhook/README.md#updateunifiedwebhooktrigger) - Trigger webhook
- [`verificationCreateVerificationRequest`](docs/sdks/request/README.md#createverificationrequest) - Create a request
- [`verificationCreateVerificationRequest`](docs/sdks/verification/README.md#createverificationrequest) - Create a request
- [`verificationGetVerificationPackage`](docs/sdks/package/README.md#getverificationpackage) - Retrieve a package
- [`verificationGetVerificationPackage`](docs/sdks/verification/README.md#getverificationpackage) - Retrieve a package
- [`verificationGetVerificationRequest`](docs/sdks/request/README.md#getverificationrequest) - Retrieve a request
- [`verificationGetVerificationRequest`](docs/sdks/verification/README.md#getverificationrequest) - Retrieve a request
- [`verificationListVerificationPackages`](docs/sdks/package/README.md#listverificationpackages) - List all packages
- [`verificationListVerificationPackages`](docs/sdks/verification/README.md#listverificationpackages) - List all packages
- [`verificationListVerificationRequests`](docs/sdks/request/README.md#listverificationrequests) - List all requests
- [`verificationListVerificationRequests`](docs/sdks/verification/README.md#listverificationrequests) - List all requests
- [`verificationPatchVerificationRequest`](docs/sdks/request/README.md#patchverificationrequest) - Update a request
- [`verificationPatchVerificationRequest`](docs/sdks/verification/README.md#patchverificationrequest) - Update a request
- [`verificationRemoveVerificationRequest`](docs/sdks/request/README.md#removeverificationrequest) - Remove a request
- [`verificationRemoveVerificationRequest`](docs/sdks/verification/README.md#removeverificationrequest) - Remove a request
- [`verificationUpdateVerificationRequest`](docs/sdks/request/README.md#updateverificationrequest) - Update a request
- [`verificationUpdateVerificationRequest`](docs/sdks/verification/README.md#updateverificationrequest) - Update a request

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->


