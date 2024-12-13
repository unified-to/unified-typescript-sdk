SDK for [Unified.to](https://unified.to) API
</div>

<!-- Start Summary [summary] -->
## Summary

Unified.to API: One API to Rule Them All
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

| #   | Server                      |
| --- | --------------------------- |
| 0   | `https://api.unified.to`    |
| 1   | `https://api-eu.unified.to` |

#### Example

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  serverIdx: 1,
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.accounting.createAccountingAccount({
    connectionId: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  serverURL: "https://api.unified.to",
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.accounting.createAccountingAccount({
    connectionId: "<value>",
  });

  // Handle the result
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

const sdk = new UnifiedTo({ httpClient });
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
    connectionId: "<value>",
  });

  // Handle the result
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

If the request fails due to, for example 4XX or 5XX status codes, it will throw a `SDKError`.

| Error Type      | Status Code | Content Type |
| --------------- | ----------- | ------------ |
| errors.SDKError | 4XX, 5XX    | \*/\*        |

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { SDKValidationError } from "@unified-api/typescript-sdk/sdk/models/errors";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  let result;
  try {
    result = await unifiedTo.accounting.createAccountingAccount({
      connectionId: "<value>",
    });

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError):
        {
          // Pretty-print will provide a human-readable multi-line error message
          console.error(err.pretty());
          // Raw value may also be inspected
          console.error(err.rawValue);
          return;
        }
        sdkerror.js;
      // Server returned an error status code or an unknown content type
      case (err instanceof SDKError): {
        console.error(err.statusCode);
        console.error(err.rawResponse.body);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `sdk/models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
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
    connectionId: "<value>",
    path: "/etc/periodic",
  });

  // Handle the result
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
    connectionId: "<value>",
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

  // Handle the result
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
    connectionId: "<value>",
  });

  // Handle the result
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

- [`accountCreateAccountingAccount`](docs/sdks/account/README.md#createaccountingaccount) - Create an account
- [`accountGetAccountingAccount`](docs/sdks/account/README.md#getaccountingaccount) - Retrieve an account
- [`accountingCreateAccountingAccount`](docs/sdks/accounting/README.md#createaccountingaccount) - Create an account
- [`accountingCreateAccountingContact`](docs/sdks/accounting/README.md#createaccountingcontact) - Create a contact
- [`accountingCreateAccountingInvoice`](docs/sdks/accounting/README.md#createaccountinginvoice) - Create an invoice
- [`accountingCreateAccountingJournal`](docs/sdks/accounting/README.md#createaccountingjournal) - Create a journal
- [`accountingCreateAccountingOrder`](docs/sdks/accounting/README.md#createaccountingorder) - Create an order
- [`accountingCreateAccountingTaxrate`](docs/sdks/accounting/README.md#createaccountingtaxrate) - Create a taxrate
- [`accountingCreateAccountingTransaction`](docs/sdks/accounting/README.md#createaccountingtransaction) - Create a transaction
- [`accountingGetAccountingAccount`](docs/sdks/accounting/README.md#getaccountingaccount) - Retrieve an account
- [`accountingGetAccountingContact`](docs/sdks/accounting/README.md#getaccountingcontact) - Retrieve a contact
- [`accountingGetAccountingInvoice`](docs/sdks/accounting/README.md#getaccountinginvoice) - Retrieve an invoice
- [`accountingGetAccountingJournal`](docs/sdks/accounting/README.md#getaccountingjournal) - Retrieve a journal
- [`accountingGetAccountingOrder`](docs/sdks/accounting/README.md#getaccountingorder) - Retrieve an order
- [`accountingGetAccountingOrganization`](docs/sdks/accounting/README.md#getaccountingorganization) - Retrieve an organization
- [`accountingGetAccountingTaxrate`](docs/sdks/accounting/README.md#getaccountingtaxrate) - Retrieve a taxrate
- [`accountingGetAccountingTransaction`](docs/sdks/accounting/README.md#getaccountingtransaction) - Retrieve a transaction
- [`accountingListAccountingAccounts`](docs/sdks/accounting/README.md#listaccountingaccounts) - List all accounts
- [`accountingListAccountingContacts`](docs/sdks/accounting/README.md#listaccountingcontacts) - List all contacts
- [`accountingListAccountingInvoices`](docs/sdks/accounting/README.md#listaccountinginvoices) - List all invoices
- [`accountingListAccountingJournals`](docs/sdks/accounting/README.md#listaccountingjournals) - List all journals
- [`accountingListAccountingOrders`](docs/sdks/accounting/README.md#listaccountingorders) - List all orders
- [`accountingListAccountingOrganizations`](docs/sdks/accounting/README.md#listaccountingorganizations) - List all organizations
- [`accountingListAccountingTaxrates`](docs/sdks/accounting/README.md#listaccountingtaxrates) - List all taxrates
- [`accountingListAccountingTransactions`](docs/sdks/accounting/README.md#listaccountingtransactions) - List all transactions
- [`accountingPatchAccountingAccount`](docs/sdks/accounting/README.md#patchaccountingaccount) - Update an account
- [`accountingPatchAccountingContact`](docs/sdks/accounting/README.md#patchaccountingcontact) - Update a contact
- [`accountingPatchAccountingInvoice`](docs/sdks/accounting/README.md#patchaccountinginvoice) - Update an invoice
- [`accountingPatchAccountingJournal`](docs/sdks/accounting/README.md#patchaccountingjournal) - Update a journal
- [`accountingPatchAccountingOrder`](docs/sdks/accounting/README.md#patchaccountingorder) - Update an order
- [`accountingPatchAccountingTaxrate`](docs/sdks/accounting/README.md#patchaccountingtaxrate) - Update a taxrate
- [`accountingPatchAccountingTransaction`](docs/sdks/accounting/README.md#patchaccountingtransaction) - Update a transaction
- [`accountingRemoveAccountingAccount`](docs/sdks/accounting/README.md#removeaccountingaccount) - Remove an account
- [`accountingRemoveAccountingContact`](docs/sdks/accounting/README.md#removeaccountingcontact) - Remove a contact
- [`accountingRemoveAccountingInvoice`](docs/sdks/accounting/README.md#removeaccountinginvoice) - Remove an invoice
- [`accountingRemoveAccountingJournal`](docs/sdks/accounting/README.md#removeaccountingjournal) - Remove a journal
- [`accountingRemoveAccountingOrder`](docs/sdks/accounting/README.md#removeaccountingorder) - Remove an order
- [`accountingRemoveAccountingTaxrate`](docs/sdks/accounting/README.md#removeaccountingtaxrate) - Remove a taxrate
- [`accountingRemoveAccountingTransaction`](docs/sdks/accounting/README.md#removeaccountingtransaction) - Remove a transaction
- [`accountingUpdateAccountingAccount`](docs/sdks/accounting/README.md#updateaccountingaccount) - Update an account
- [`accountingUpdateAccountingContact`](docs/sdks/accounting/README.md#updateaccountingcontact) - Update a contact
- [`accountingUpdateAccountingInvoice`](docs/sdks/accounting/README.md#updateaccountinginvoice) - Update an invoice
- [`accountingUpdateAccountingJournal`](docs/sdks/accounting/README.md#updateaccountingjournal) - Update a journal
- [`accountingUpdateAccountingOrder`](docs/sdks/accounting/README.md#updateaccountingorder) - Update an order
- [`accountingUpdateAccountingTaxrate`](docs/sdks/accounting/README.md#updateaccountingtaxrate) - Update a taxrate
- [`accountingUpdateAccountingTransaction`](docs/sdks/accounting/README.md#updateaccountingtransaction) - Update a transaction
- [`accountListAccountingAccounts`](docs/sdks/account/README.md#listaccountingaccounts) - List all accounts
- [`accountPatchAccountingAccount`](docs/sdks/account/README.md#patchaccountingaccount) - Update an account
- [`accountRemoveAccountingAccount`](docs/sdks/account/README.md#removeaccountingaccount) - Remove an account
- [`accountUpdateAccountingAccount`](docs/sdks/account/README.md#updateaccountingaccount) - Update an account
- [`activityCreateAtsActivity`](docs/sdks/activity/README.md#createatsactivity) - Create an activity
- [`activityGetAtsActivity`](docs/sdks/activity/README.md#getatsactivity) - Retrieve an activity
- [`activityListAtsActivities`](docs/sdks/activity/README.md#listatsactivities) - List all activities
- [`activityPatchAtsActivity`](docs/sdks/activity/README.md#patchatsactivity) - Update an activity
- [`activityRemoveAtsActivity`](docs/sdks/activity/README.md#removeatsactivity) - Remove an activity
- [`activityUpdateAtsActivity`](docs/sdks/activity/README.md#updateatsactivity) - Update an activity
- [`apicallGetUnifiedApicall`](docs/sdks/apicall/README.md#getunifiedapicall) - Retrieve specific API Call by its ID
- [`apicallListUnifiedApicalls`](docs/sdks/apicall/README.md#listunifiedapicalls) - Returns API Calls
- [`applicationCreateAtsApplication`](docs/sdks/application/README.md#createatsapplication) - Create an application
- [`applicationGetAtsApplication`](docs/sdks/application/README.md#getatsapplication) - Retrieve an application
- [`applicationListAtsApplications`](docs/sdks/application/README.md#listatsapplications) - List all applications
- [`applicationPatchAtsApplication`](docs/sdks/application/README.md#patchatsapplication) - Update an application
- [`applicationRemoveAtsApplication`](docs/sdks/application/README.md#removeatsapplication) - Remove an application
- [`applicationstatusListAtsApplicationstatuses`](docs/sdks/applicationstatus/README.md#listatsapplicationstatuses) - List all applicationstatuses
- [`applicationUpdateAtsApplication`](docs/sdks/application/README.md#updateatsapplication) - Update an application
- [`atsCreateAtsActivity`](docs/sdks/ats/README.md#createatsactivity) - Create an activity
- [`atsCreateAtsApplication`](docs/sdks/ats/README.md#createatsapplication) - Create an application
- [`atsCreateAtsCandidate`](docs/sdks/ats/README.md#createatscandidate) - Create a candidate
- [`atsCreateAtsDocument`](docs/sdks/ats/README.md#createatsdocument) - Create a document
- [`atsCreateAtsInterview`](docs/sdks/ats/README.md#createatsinterview) - Create an interview
- [`atsCreateAtsJob`](docs/sdks/ats/README.md#createatsjob) - Create a job
- [`atsCreateAtsScorecard`](docs/sdks/ats/README.md#createatsscorecard) - Create a scorecard
- [`atsGetAtsActivity`](docs/sdks/ats/README.md#getatsactivity) - Retrieve an activity
- [`atsGetAtsApplication`](docs/sdks/ats/README.md#getatsapplication) - Retrieve an application
- [`atsGetAtsCandidate`](docs/sdks/ats/README.md#getatscandidate) - Retrieve a candidate
- [`atsGetAtsCompany`](docs/sdks/ats/README.md#getatscompany) - Retrieve a company
- [`atsGetAtsDocument`](docs/sdks/ats/README.md#getatsdocument) - Retrieve a document
- [`atsGetAtsInterview`](docs/sdks/ats/README.md#getatsinterview) - Retrieve an interview
- [`atsGetAtsJob`](docs/sdks/ats/README.md#getatsjob) - Retrieve a job
- [`atsGetAtsScorecard`](docs/sdks/ats/README.md#getatsscorecard) - Retrieve a scorecard
- [`atsListAtsActivities`](docs/sdks/ats/README.md#listatsactivities) - List all activities
- [`atsListAtsApplications`](docs/sdks/ats/README.md#listatsapplications) - List all applications
- [`atsListAtsApplicationstatuses`](docs/sdks/ats/README.md#listatsapplicationstatuses) - List all applicationstatuses
- [`atsListAtsCandidates`](docs/sdks/ats/README.md#listatscandidates) - List all candidates
- [`atsListAtsCompanies`](docs/sdks/ats/README.md#listatscompanies) - List all companies
- [`atsListAtsDocuments`](docs/sdks/ats/README.md#listatsdocuments) - List all documents
- [`atsListAtsInterviews`](docs/sdks/ats/README.md#listatsinterviews) - List all interviews
- [`atsListAtsJobs`](docs/sdks/ats/README.md#listatsjobs) - List all jobs
- [`atsListAtsScorecards`](docs/sdks/ats/README.md#listatsscorecards) - List all scorecards
- [`atsPatchAtsActivity`](docs/sdks/ats/README.md#patchatsactivity) - Update an activity
- [`atsPatchAtsApplication`](docs/sdks/ats/README.md#patchatsapplication) - Update an application
- [`atsPatchAtsCandidate`](docs/sdks/ats/README.md#patchatscandidate) - Update a candidate
- [`atsPatchAtsDocument`](docs/sdks/ats/README.md#patchatsdocument) - Update a document
- [`atsPatchAtsInterview`](docs/sdks/ats/README.md#patchatsinterview) - Update an interview
- [`atsPatchAtsJob`](docs/sdks/ats/README.md#patchatsjob) - Update a job
- [`atsPatchAtsScorecard`](docs/sdks/ats/README.md#patchatsscorecard) - Update a scorecard
- [`atsRemoveAtsActivity`](docs/sdks/ats/README.md#removeatsactivity) - Remove an activity
- [`atsRemoveAtsApplication`](docs/sdks/ats/README.md#removeatsapplication) - Remove an application
- [`atsRemoveAtsCandidate`](docs/sdks/ats/README.md#removeatscandidate) - Remove a candidate
- [`atsRemoveAtsDocument`](docs/sdks/ats/README.md#removeatsdocument) - Remove a document
- [`atsRemoveAtsInterview`](docs/sdks/ats/README.md#removeatsinterview) - Remove an interview
- [`atsRemoveAtsJob`](docs/sdks/ats/README.md#removeatsjob) - Remove a job
- [`atsRemoveAtsScorecard`](docs/sdks/ats/README.md#removeatsscorecard) - Remove a scorecard
- [`atsUpdateAtsActivity`](docs/sdks/ats/README.md#updateatsactivity) - Update an activity
- [`atsUpdateAtsApplication`](docs/sdks/ats/README.md#updateatsapplication) - Update an application
- [`atsUpdateAtsCandidate`](docs/sdks/ats/README.md#updateatscandidate) - Update a candidate
- [`atsUpdateAtsDocument`](docs/sdks/ats/README.md#updateatsdocument) - Update a document
- [`atsUpdateAtsInterview`](docs/sdks/ats/README.md#updateatsinterview) - Update an interview
- [`atsUpdateAtsJob`](docs/sdks/ats/README.md#updateatsjob) - Update a job
- [`atsUpdateAtsScorecard`](docs/sdks/ats/README.md#updateatsscorecard) - Update a scorecard
- [`authGetUnifiedIntegrationAuth`](docs/sdks/auth/README.md#getunifiedintegrationauth) - Create connection indirectly
- [`authGetUnifiedIntegrationLogin`](docs/sdks/auth/README.md#getunifiedintegrationlogin) - Sign in a user
- [`branchCreateRepoBranch`](docs/sdks/branch/README.md#createrepobranch) - Create a branch
- [`branchGetRepoBranch`](docs/sdks/branch/README.md#getrepobranch) - Retrieve a branch
- [`branchListRepoBranches`](docs/sdks/branch/README.md#listrepobranches) - List all branches
- [`branchPatchRepoBranch`](docs/sdks/branch/README.md#patchrepobranch) - Update a branch
- [`branchRemoveRepoBranch`](docs/sdks/branch/README.md#removerepobranch) - Remove a branch
- [`branchUpdateRepoBranch`](docs/sdks/branch/README.md#updaterepobranch) - Update a branch
- [`callListUcCalls`](docs/sdks/call/README.md#listuccalls) - List all calls
- [`candidateCreateAtsCandidate`](docs/sdks/candidate/README.md#createatscandidate) - Create a candidate
- [`candidateGetAtsCandidate`](docs/sdks/candidate/README.md#getatscandidate) - Retrieve a candidate
- [`candidateListAtsCandidates`](docs/sdks/candidate/README.md#listatscandidates) - List all candidates
- [`candidatePatchAtsCandidate`](docs/sdks/candidate/README.md#patchatscandidate) - Update a candidate
- [`candidateRemoveAtsCandidate`](docs/sdks/candidate/README.md#removeatscandidate) - Remove a candidate
- [`candidateUpdateAtsCandidate`](docs/sdks/candidate/README.md#updateatscandidate) - Update a candidate
- [`channelGetMessagingChannel`](docs/sdks/channel/README.md#getmessagingchannel) - Retrieve a channel
- [`channelListMessagingChannels`](docs/sdks/channel/README.md#listmessagingchannels) - List all channels
- [`classCreateLmsClass`](docs/sdks/class/README.md#createlmsclass) - Create a class
- [`classGetLmsClass`](docs/sdks/class/README.md#getlmsclass) - Retrieve a class
- [`classListLmsClasses`](docs/sdks/class/README.md#listlmsclasses) - List all classes
- [`classPatchLmsClass`](docs/sdks/class/README.md#patchlmsclass) - Update a class
- [`classRemoveLmsClass`](docs/sdks/class/README.md#removelmsclass) - Remove a class
- [`classUpdateLmsClass`](docs/sdks/class/README.md#updatelmsclass) - Update a class
- [`collectionCreateCommerceCollection`](docs/sdks/collection/README.md#createcommercecollection) - Create a collection
- [`collectionGetCommerceCollection`](docs/sdks/collection/README.md#getcommercecollection) - Retrieve a collection
- [`collectionListCommerceCollections`](docs/sdks/collection/README.md#listcommercecollections) - List all collections
- [`collectionPatchCommerceCollection`](docs/sdks/collection/README.md#patchcommercecollection) - Update a collection
- [`collectionRemoveCommerceCollection`](docs/sdks/collection/README.md#removecommercecollection) - Remove a collection
- [`collectionUpdateCommerceCollection`](docs/sdks/collection/README.md#updatecommercecollection) - Update a collection
- [`commerceCreateCommerceCollection`](docs/sdks/commerce/README.md#createcommercecollection) - Create a collection
- [`commerceCreateCommerceInventory`](docs/sdks/commerce/README.md#createcommerceinventory) - Create an inventory
- [`commerceCreateCommerceItem`](docs/sdks/commerce/README.md#createcommerceitem) - Create an item
- [`commerceCreateCommerceLocation`](docs/sdks/commerce/README.md#createcommercelocation) - Create a location
- [`commerceGetCommerceCollection`](docs/sdks/commerce/README.md#getcommercecollection) - Retrieve a collection
- [`commerceGetCommerceInventory`](docs/sdks/commerce/README.md#getcommerceinventory) - Retrieve an inventory
- [`commerceGetCommerceItem`](docs/sdks/commerce/README.md#getcommerceitem) - Retrieve an item
- [`commerceGetCommerceLocation`](docs/sdks/commerce/README.md#getcommercelocation) - Retrieve a location
- [`commerceListCommerceCollections`](docs/sdks/commerce/README.md#listcommercecollections) - List all collections
- [`commerceListCommerceInventories`](docs/sdks/commerce/README.md#listcommerceinventories) - List all inventories
- [`commerceListCommerceItems`](docs/sdks/commerce/README.md#listcommerceitems) - List all items
- [`commerceListCommerceLocations`](docs/sdks/commerce/README.md#listcommercelocations) - List all locations
- [`commercePatchCommerceCollection`](docs/sdks/commerce/README.md#patchcommercecollection) - Update a collection
- [`commercePatchCommerceInventory`](docs/sdks/commerce/README.md#patchcommerceinventory) - Update an inventory
- [`commercePatchCommerceItem`](docs/sdks/commerce/README.md#patchcommerceitem) - Update an item
- [`commercePatchCommerceLocation`](docs/sdks/commerce/README.md#patchcommercelocation) - Update a location
- [`commerceRemoveCommerceCollection`](docs/sdks/commerce/README.md#removecommercecollection) - Remove a collection
- [`commerceRemoveCommerceInventory`](docs/sdks/commerce/README.md#removecommerceinventory) - Remove an inventory
- [`commerceRemoveCommerceItem`](docs/sdks/commerce/README.md#removecommerceitem) - Remove an item
- [`commerceRemoveCommerceLocation`](docs/sdks/commerce/README.md#removecommercelocation) - Remove a location
- [`commerceUpdateCommerceCollection`](docs/sdks/commerce/README.md#updatecommercecollection) - Update a collection
- [`commerceUpdateCommerceInventory`](docs/sdks/commerce/README.md#updatecommerceinventory) - Update an inventory
- [`commerceUpdateCommerceItem`](docs/sdks/commerce/README.md#updatecommerceitem) - Update an item
- [`commerceUpdateCommerceLocation`](docs/sdks/commerce/README.md#updatecommercelocation) - Update a location
- [`commitCreateRepoCommit`](docs/sdks/commit/README.md#createrepocommit) - Create a commit
- [`commitGetRepoCommit`](docs/sdks/commit/README.md#getrepocommit) - Retrieve a commit
- [`commitListRepoCommits`](docs/sdks/commit/README.md#listrepocommits) - List all commits
- [`commitPatchRepoCommit`](docs/sdks/commit/README.md#patchrepocommit) - Update a commit
- [`commitRemoveRepoCommit`](docs/sdks/commit/README.md#removerepocommit) - Remove a commit
- [`commitUpdateRepoCommit`](docs/sdks/commit/README.md#updaterepocommit) - Update a commit
- [`companyCreateCrmCompany`](docs/sdks/company/README.md#createcrmcompany) - Create a company
- [`companyCreateHrisCompany`](docs/sdks/company/README.md#createhriscompany) - Create a company
- [`companyGetAtsCompany`](docs/sdks/company/README.md#getatscompany) - Retrieve a company
- [`companyGetCrmCompany`](docs/sdks/company/README.md#getcrmcompany) - Retrieve a company
- [`companyGetHrisCompany`](docs/sdks/company/README.md#gethriscompany) - Retrieve a company
- [`companyListAtsCompanies`](docs/sdks/company/README.md#listatscompanies) - List all companies
- [`companyListCrmCompanies`](docs/sdks/company/README.md#listcrmcompanies) - List all companies
- [`companyListEnrichCompanies`](docs/sdks/company/README.md#listenrichcompanies) - Retrieve enrichment information for a company
- [`companyListHrisCompanies`](docs/sdks/company/README.md#listhriscompanies) - List all companies
- [`companyPatchCrmCompany`](docs/sdks/company/README.md#patchcrmcompany) - Update a company
- [`companyPatchHrisCompany`](docs/sdks/company/README.md#patchhriscompany) - Update a company
- [`companyRemoveCrmCompany`](docs/sdks/company/README.md#removecrmcompany) - Remove a company
- [`companyRemoveHrisCompany`](docs/sdks/company/README.md#removehriscompany) - Remove a company
- [`companyUpdateCrmCompany`](docs/sdks/company/README.md#updatecrmcompany) - Update a company
- [`companyUpdateHrisCompany`](docs/sdks/company/README.md#updatehriscompany) - Update a company
- [`connectionCreateUnifiedConnection`](docs/sdks/connection/README.md#createunifiedconnection) - Create connection
- [`connectionGetUnifiedConnection`](docs/sdks/connection/README.md#getunifiedconnection) - Retrieve connection
- [`connectionListUnifiedConnections`](docs/sdks/connection/README.md#listunifiedconnections) - List all connections
- [`connectionPatchUnifiedConnection`](docs/sdks/connection/README.md#patchunifiedconnection) - Update connection
- [`connectionRemoveUnifiedConnection`](docs/sdks/connection/README.md#removeunifiedconnection) - Remove connection
- [`connectionUpdateUnifiedConnection`](docs/sdks/connection/README.md#updateunifiedconnection) - Update connection
- [`contactCreateAccountingContact`](docs/sdks/contact/README.md#createaccountingcontact) - Create a contact
- [`contactCreateCrmContact`](docs/sdks/contact/README.md#createcrmcontact) - Create a contact
- [`contactCreateUcContact`](docs/sdks/contact/README.md#createuccontact) - Create a contact
- [`contactGetAccountingContact`](docs/sdks/contact/README.md#getaccountingcontact) - Retrieve a contact
- [`contactGetCrmContact`](docs/sdks/contact/README.md#getcrmcontact) - Retrieve a contact
- [`contactGetUcContact`](docs/sdks/contact/README.md#getuccontact) - Retrieve a contact
- [`contactListAccountingContacts`](docs/sdks/contact/README.md#listaccountingcontacts) - List all contacts
- [`contactListCrmContacts`](docs/sdks/contact/README.md#listcrmcontacts) - List all contacts
- [`contactListUcContacts`](docs/sdks/contact/README.md#listuccontacts) - List all contacts
- [`contactPatchAccountingContact`](docs/sdks/contact/README.md#patchaccountingcontact) - Update a contact
- [`contactPatchCrmContact`](docs/sdks/contact/README.md#patchcrmcontact) - Update a contact
- [`contactPatchUcContact`](docs/sdks/contact/README.md#patchuccontact) - Update a contact
- [`contactRemoveAccountingContact`](docs/sdks/contact/README.md#removeaccountingcontact) - Remove a contact
- [`contactRemoveCrmContact`](docs/sdks/contact/README.md#removecrmcontact) - Remove a contact
- [`contactRemoveUcContact`](docs/sdks/contact/README.md#removeuccontact) - Remove a contact
- [`contactUpdateAccountingContact`](docs/sdks/contact/README.md#updateaccountingcontact) - Update a contact
- [`contactUpdateCrmContact`](docs/sdks/contact/README.md#updatecrmcontact) - Update a contact
- [`contactUpdateUcContact`](docs/sdks/contact/README.md#updateuccontact) - Update a contact
- [`courseCreateLmsCourse`](docs/sdks/course/README.md#createlmscourse) - Create a course
- [`courseGetLmsCourse`](docs/sdks/course/README.md#getlmscourse) - Retrieve a course
- [`courseListLmsCourses`](docs/sdks/course/README.md#listlmscourses) - List all courses
- [`coursePatchLmsCourse`](docs/sdks/course/README.md#patchlmscourse) - Update a course
- [`courseRemoveLmsCourse`](docs/sdks/course/README.md#removelmscourse) - Remove a course
- [`courseUpdateLmsCourse`](docs/sdks/course/README.md#updatelmscourse) - Update a course
- [`crmCreateCrmCompany`](docs/sdks/crm/README.md#createcrmcompany) - Create a company
- [`crmCreateCrmContact`](docs/sdks/crm/README.md#createcrmcontact) - Create a contact
- [`crmCreateCrmDeal`](docs/sdks/crm/README.md#createcrmdeal) - Create a deal
- [`crmCreateCrmEvent`](docs/sdks/crm/README.md#createcrmevent) - Create an event
- [`crmCreateCrmLead`](docs/sdks/crm/README.md#createcrmlead) - Create a lead
- [`crmCreateCrmPipeline`](docs/sdks/crm/README.md#createcrmpipeline) - Create a pipeline
- [`crmGetCrmCompany`](docs/sdks/crm/README.md#getcrmcompany) - Retrieve a company
- [`crmGetCrmContact`](docs/sdks/crm/README.md#getcrmcontact) - Retrieve a contact
- [`crmGetCrmDeal`](docs/sdks/crm/README.md#getcrmdeal) - Retrieve a deal
- [`crmGetCrmEvent`](docs/sdks/crm/README.md#getcrmevent) - Retrieve an event
- [`crmGetCrmLead`](docs/sdks/crm/README.md#getcrmlead) - Retrieve a lead
- [`crmGetCrmPipeline`](docs/sdks/crm/README.md#getcrmpipeline) - Retrieve a pipeline
- [`crmListCrmCompanies`](docs/sdks/crm/README.md#listcrmcompanies) - List all companies
- [`crmListCrmContacts`](docs/sdks/crm/README.md#listcrmcontacts) - List all contacts
- [`crmListCrmDeals`](docs/sdks/crm/README.md#listcrmdeals) - List all deals
- [`crmListCrmEvents`](docs/sdks/crm/README.md#listcrmevents) - List all events
- [`crmListCrmLeads`](docs/sdks/crm/README.md#listcrmleads) - List all leads
- [`crmListCrmPipelines`](docs/sdks/crm/README.md#listcrmpipelines) - List all pipelines
- [`crmPatchCrmCompany`](docs/sdks/crm/README.md#patchcrmcompany) - Update a company
- [`crmPatchCrmContact`](docs/sdks/crm/README.md#patchcrmcontact) - Update a contact
- [`crmPatchCrmDeal`](docs/sdks/crm/README.md#patchcrmdeal) - Update a deal
- [`crmPatchCrmEvent`](docs/sdks/crm/README.md#patchcrmevent) - Update an event
- [`crmPatchCrmLead`](docs/sdks/crm/README.md#patchcrmlead) - Update a lead
- [`crmPatchCrmPipeline`](docs/sdks/crm/README.md#patchcrmpipeline) - Update a pipeline
- [`crmRemoveCrmCompany`](docs/sdks/crm/README.md#removecrmcompany) - Remove a company
- [`crmRemoveCrmContact`](docs/sdks/crm/README.md#removecrmcontact) - Remove a contact
- [`crmRemoveCrmDeal`](docs/sdks/crm/README.md#removecrmdeal) - Remove a deal
- [`crmRemoveCrmEvent`](docs/sdks/crm/README.md#removecrmevent) - Remove an event
- [`crmRemoveCrmLead`](docs/sdks/crm/README.md#removecrmlead) - Remove a lead
- [`crmRemoveCrmPipeline`](docs/sdks/crm/README.md#removecrmpipeline) - Remove a pipeline
- [`crmUpdateCrmCompany`](docs/sdks/crm/README.md#updatecrmcompany) - Update a company
- [`crmUpdateCrmContact`](docs/sdks/crm/README.md#updatecrmcontact) - Update a contact
- [`crmUpdateCrmDeal`](docs/sdks/crm/README.md#updatecrmdeal) - Update a deal
- [`crmUpdateCrmEvent`](docs/sdks/crm/README.md#updatecrmevent) - Update an event
- [`crmUpdateCrmLead`](docs/sdks/crm/README.md#updatecrmlead) - Update a lead
- [`crmUpdateCrmPipeline`](docs/sdks/crm/README.md#updatecrmpipeline) - Update a pipeline
- [`customerCreateTicketingCustomer`](docs/sdks/customer/README.md#createticketingcustomer) - Create a customer
- [`customerGetTicketingCustomer`](docs/sdks/customer/README.md#getticketingcustomer) - Retrieve a customer
- [`customerListTicketingCustomers`](docs/sdks/customer/README.md#listticketingcustomers) - List all customers
- [`customerPatchTicketingCustomer`](docs/sdks/customer/README.md#patchticketingcustomer) - Update a customer
- [`customerRemoveTicketingCustomer`](docs/sdks/customer/README.md#removeticketingcustomer) - Remove a customer
- [`customerUpdateTicketingCustomer`](docs/sdks/customer/README.md#updateticketingcustomer) - Update a customer
- [`dealCreateCrmDeal`](docs/sdks/deal/README.md#createcrmdeal) - Create a deal
- [`dealGetCrmDeal`](docs/sdks/deal/README.md#getcrmdeal) - Retrieve a deal
- [`dealListCrmDeals`](docs/sdks/deal/README.md#listcrmdeals) - List all deals
- [`dealPatchCrmDeal`](docs/sdks/deal/README.md#patchcrmdeal) - Update a deal
- [`dealRemoveCrmDeal`](docs/sdks/deal/README.md#removecrmdeal) - Remove a deal
- [`dealUpdateCrmDeal`](docs/sdks/deal/README.md#updatecrmdeal) - Update a deal
- [`documentCreateAtsDocument`](docs/sdks/document/README.md#createatsdocument) - Create a document
- [`documentGetAtsDocument`](docs/sdks/document/README.md#getatsdocument) - Retrieve a document
- [`documentListAtsDocuments`](docs/sdks/document/README.md#listatsdocuments) - List all documents
- [`documentPatchAtsDocument`](docs/sdks/document/README.md#patchatsdocument) - Update a document
- [`documentRemoveAtsDocument`](docs/sdks/document/README.md#removeatsdocument) - Remove a document
- [`documentUpdateAtsDocument`](docs/sdks/document/README.md#updateatsdocument) - Update a document
- [`employeeCreateHrisEmployee`](docs/sdks/employee/README.md#createhrisemployee) - Create an employee
- [`employeeGetHrisEmployee`](docs/sdks/employee/README.md#gethrisemployee) - Retrieve an employee
- [`employeeListHrisEmployees`](docs/sdks/employee/README.md#listhrisemployees) - List all employees
- [`employeePatchHrisEmployee`](docs/sdks/employee/README.md#patchhrisemployee) - Update an employee
- [`employeeRemoveHrisEmployee`](docs/sdks/employee/README.md#removehrisemployee) - Remove an employee
- [`employeeUpdateHrisEmployee`](docs/sdks/employee/README.md#updatehrisemployee) - Update an employee
- [`enrichListEnrichCompanies`](docs/sdks/enrich/README.md#listenrichcompanies) - Retrieve enrichment information for a company
- [`enrichListEnrichPeople`](docs/sdks/enrich/README.md#listenrichpeople) - Retrieve enrichment information for a person
- [`eventCreateCrmEvent`](docs/sdks/event/README.md#createcrmevent) - Create an event
- [`eventGetCrmEvent`](docs/sdks/event/README.md#getcrmevent) - Retrieve an event
- [`eventListCrmEvents`](docs/sdks/event/README.md#listcrmevents) - List all events
- [`eventPatchCrmEvent`](docs/sdks/event/README.md#patchcrmevent) - Update an event
- [`eventRemoveCrmEvent`](docs/sdks/event/README.md#removecrmevent) - Remove an event
- [`eventUpdateCrmEvent`](docs/sdks/event/README.md#updatecrmevent) - Update an event
- [`fileCreateStorageFile`](docs/sdks/file/README.md#createstoragefile) - Create a file
- [`fileGetStorageFile`](docs/sdks/file/README.md#getstoragefile) - Retrieve a file
- [`fileListStorageFiles`](docs/sdks/file/README.md#liststoragefiles) - List all files
- [`filePatchStorageFile`](docs/sdks/file/README.md#patchstoragefile) - Update a file
- [`fileRemoveStorageFile`](docs/sdks/file/README.md#removestoragefile) - Remove a file
- [`fileUpdateStorageFile`](docs/sdks/file/README.md#updatestoragefile) - Update a file
- [`genaiCreateGenaiPrompt`](docs/sdks/genai/README.md#creategenaiprompt) - Create a prompt
- [`genaiListGenaiModels`](docs/sdks/genai/README.md#listgenaimodels) - List all models
- [`groupCreateHrisGroup`](docs/sdks/group/README.md#createhrisgroup) - Create a group
- [`groupCreateScimGroups`](docs/sdks/group/README.md#createscimgroups) - Create group
- [`groupGetHrisGroup`](docs/sdks/group/README.md#gethrisgroup) - Retrieve a group
- [`groupGetScimGroups`](docs/sdks/group/README.md#getscimgroups) - Get group
- [`groupListHrisGroups`](docs/sdks/group/README.md#listhrisgroups) - List all groups
- [`groupListScimGroups`](docs/sdks/group/README.md#listscimgroups) - List groups
- [`groupPatchHrisGroup`](docs/sdks/group/README.md#patchhrisgroup) - Update a group
- [`groupPatchScimGroups`](docs/sdks/group/README.md#patchscimgroups) - Update group
- [`groupRemoveHrisGroup`](docs/sdks/group/README.md#removehrisgroup) - Remove a group
- [`groupRemoveScimGroups`](docs/sdks/group/README.md#removescimgroups) - Delete group
- [`groupUpdateHrisGroup`](docs/sdks/group/README.md#updatehrisgroup) - Update a group
- [`groupUpdateScimGroups`](docs/sdks/group/README.md#updatescimgroups) - Update group
- [`hrisCreateHrisCompany`](docs/sdks/hris/README.md#createhriscompany) - Create a company
- [`hrisCreateHrisEmployee`](docs/sdks/hris/README.md#createhrisemployee) - Create an employee
- [`hrisCreateHrisGroup`](docs/sdks/hris/README.md#createhrisgroup) - Create a group
- [`hrisCreateHrisLocation`](docs/sdks/hris/README.md#createhrislocation) - Create a location
- [`hrisGetHrisCompany`](docs/sdks/hris/README.md#gethriscompany) - Retrieve a company
- [`hrisGetHrisEmployee`](docs/sdks/hris/README.md#gethrisemployee) - Retrieve an employee
- [`hrisGetHrisGroup`](docs/sdks/hris/README.md#gethrisgroup) - Retrieve a group
- [`hrisGetHrisLocation`](docs/sdks/hris/README.md#gethrislocation) - Retrieve a location
- [`hrisGetHrisPayslip`](docs/sdks/hris/README.md#gethrispayslip) - Retrieve a payslip
- [`hrisGetHrisTimeoff`](docs/sdks/hris/README.md#gethristimeoff) - Retrieve a timeoff
- [`hrisListHrisCompanies`](docs/sdks/hris/README.md#listhriscompanies) - List all companies
- [`hrisListHrisEmployees`](docs/sdks/hris/README.md#listhrisemployees) - List all employees
- [`hrisListHrisGroups`](docs/sdks/hris/README.md#listhrisgroups) - List all groups
- [`hrisListHrisLocations`](docs/sdks/hris/README.md#listhrislocations) - List all locations
- [`hrisListHrisPayslips`](docs/sdks/hris/README.md#listhrispayslips) - List all payslips
- [`hrisListHrisTimeoffs`](docs/sdks/hris/README.md#listhristimeoffs) - List all timeoffs
- [`hrisPatchHrisCompany`](docs/sdks/hris/README.md#patchhriscompany) - Update a company
- [`hrisPatchHrisEmployee`](docs/sdks/hris/README.md#patchhrisemployee) - Update an employee
- [`hrisPatchHrisGroup`](docs/sdks/hris/README.md#patchhrisgroup) - Update a group
- [`hrisPatchHrisLocation`](docs/sdks/hris/README.md#patchhrislocation) - Update a location
- [`hrisRemoveHrisCompany`](docs/sdks/hris/README.md#removehriscompany) - Remove a company
- [`hrisRemoveHrisEmployee`](docs/sdks/hris/README.md#removehrisemployee) - Remove an employee
- [`hrisRemoveHrisGroup`](docs/sdks/hris/README.md#removehrisgroup) - Remove a group
- [`hrisRemoveHrisLocation`](docs/sdks/hris/README.md#removehrislocation) - Remove a location
- [`hrisUpdateHrisCompany`](docs/sdks/hris/README.md#updatehriscompany) - Update a company
- [`hrisUpdateHrisEmployee`](docs/sdks/hris/README.md#updatehrisemployee) - Update an employee
- [`hrisUpdateHrisGroup`](docs/sdks/hris/README.md#updatehrisgroup) - Update a group
- [`hrisUpdateHrisLocation`](docs/sdks/hris/README.md#updatehrislocation) - Update a location
- [`instructorCreateLmsInstructor`](docs/sdks/instructor/README.md#createlmsinstructor) - Create an instructor
- [`instructorGetLmsInstructor`](docs/sdks/instructor/README.md#getlmsinstructor) - Retrieve an instructor
- [`instructorListLmsInstructors`](docs/sdks/instructor/README.md#listlmsinstructors) - List all instructors
- [`instructorPatchLmsInstructor`](docs/sdks/instructor/README.md#patchlmsinstructor) - Update an instructor
- [`instructorRemoveLmsInstructor`](docs/sdks/instructor/README.md#removelmsinstructor) - Remove an instructor
- [`instructorUpdateLmsInstructor`](docs/sdks/instructor/README.md#updatelmsinstructor) - Update an instructor
- [`integrationGetUnifiedIntegrationAuth`](docs/sdks/integration/README.md#getunifiedintegrationauth) - Create connection indirectly
- [`integrationListUnifiedIntegrations`](docs/sdks/integration/README.md#listunifiedintegrations) - Returns all integrations
- [`integrationListUnifiedIntegrationWorkspaces`](docs/sdks/integration/README.md#listunifiedintegrationworkspaces) - Returns all activated integrations in a workspace
- [`interviewCreateAtsInterview`](docs/sdks/interview/README.md#createatsinterview) - Create an interview
- [`interviewGetAtsInterview`](docs/sdks/interview/README.md#getatsinterview) - Retrieve an interview
- [`interviewListAtsInterviews`](docs/sdks/interview/README.md#listatsinterviews) - List all interviews
- [`interviewPatchAtsInterview`](docs/sdks/interview/README.md#patchatsinterview) - Update an interview
- [`interviewRemoveAtsInterview`](docs/sdks/interview/README.md#removeatsinterview) - Remove an interview
- [`interviewUpdateAtsInterview`](docs/sdks/interview/README.md#updateatsinterview) - Update an interview
- [`inventoryCreateCommerceInventory`](docs/sdks/inventory/README.md#createcommerceinventory) - Create an inventory
- [`inventoryGetCommerceInventory`](docs/sdks/inventory/README.md#getcommerceinventory) - Retrieve an inventory
- [`inventoryListCommerceInventories`](docs/sdks/inventory/README.md#listcommerceinventories) - List all inventories
- [`inventoryPatchCommerceInventory`](docs/sdks/inventory/README.md#patchcommerceinventory) - Update an inventory
- [`inventoryRemoveCommerceInventory`](docs/sdks/inventory/README.md#removecommerceinventory) - Remove an inventory
- [`inventoryUpdateCommerceInventory`](docs/sdks/inventory/README.md#updatecommerceinventory) - Update an inventory
- [`invoiceCreateAccountingInvoice`](docs/sdks/invoice/README.md#createaccountinginvoice) - Create an invoice
- [`invoiceGetAccountingInvoice`](docs/sdks/invoice/README.md#getaccountinginvoice) - Retrieve an invoice
- [`invoiceListAccountingInvoices`](docs/sdks/invoice/README.md#listaccountinginvoices) - List all invoices
- [`invoicePatchAccountingInvoice`](docs/sdks/invoice/README.md#patchaccountinginvoice) - Update an invoice
- [`invoiceRemoveAccountingInvoice`](docs/sdks/invoice/README.md#removeaccountinginvoice) - Remove an invoice
- [`invoiceUpdateAccountingInvoice`](docs/sdks/invoice/README.md#updateaccountinginvoice) - Update an invoice
- [`issueListUnifiedIssues`](docs/sdks/issue/README.md#listunifiedissues) - List support issues
- [`itemCreateCommerceItem`](docs/sdks/item/README.md#createcommerceitem) - Create an item
- [`itemGetCommerceItem`](docs/sdks/item/README.md#getcommerceitem) - Retrieve an item
- [`itemListCommerceItems`](docs/sdks/item/README.md#listcommerceitems) - List all items
- [`itemPatchCommerceItem`](docs/sdks/item/README.md#patchcommerceitem) - Update an item
- [`itemRemoveCommerceItem`](docs/sdks/item/README.md#removecommerceitem) - Remove an item
- [`itemUpdateCommerceItem`](docs/sdks/item/README.md#updatecommerceitem) - Update an item
- [`jobCreateAtsJob`](docs/sdks/job/README.md#createatsjob) - Create a job
- [`jobGetAtsJob`](docs/sdks/job/README.md#getatsjob) - Retrieve a job
- [`jobListAtsJobs`](docs/sdks/job/README.md#listatsjobs) - List all jobs
- [`jobPatchAtsJob`](docs/sdks/job/README.md#patchatsjob) - Update a job
- [`jobRemoveAtsJob`](docs/sdks/job/README.md#removeatsjob) - Remove a job
- [`jobUpdateAtsJob`](docs/sdks/job/README.md#updateatsjob) - Update a job
- [`journalCreateAccountingJournal`](docs/sdks/journal/README.md#createaccountingjournal) - Create a journal
- [`journalGetAccountingJournal`](docs/sdks/journal/README.md#getaccountingjournal) - Retrieve a journal
- [`journalListAccountingJournals`](docs/sdks/journal/README.md#listaccountingjournals) - List all journals
- [`journalPatchAccountingJournal`](docs/sdks/journal/README.md#patchaccountingjournal) - Update a journal
- [`journalRemoveAccountingJournal`](docs/sdks/journal/README.md#removeaccountingjournal) - Remove a journal
- [`journalUpdateAccountingJournal`](docs/sdks/journal/README.md#updateaccountingjournal) - Update a journal
- [`kmsCreateKmsPage`](docs/sdks/kms/README.md#createkmspage) - Create a page
- [`kmsCreateKmsSpace`](docs/sdks/kms/README.md#createkmsspace) - Create a space
- [`kmsGetKmsPage`](docs/sdks/kms/README.md#getkmspage) - Retrieve a page
- [`kmsGetKmsSpace`](docs/sdks/kms/README.md#getkmsspace) - Retrieve a space
- [`kmsListKmsPages`](docs/sdks/kms/README.md#listkmspages) - List all pages
- [`kmsListKmsSpaces`](docs/sdks/kms/README.md#listkmsspaces) - List all spaces
- [`kmsPatchKmsPage`](docs/sdks/kms/README.md#patchkmspage) - Update a page
- [`kmsPatchKmsSpace`](docs/sdks/kms/README.md#patchkmsspace) - Update a space
- [`kmsRemoveKmsPage`](docs/sdks/kms/README.md#removekmspage) - Remove a page
- [`kmsRemoveKmsSpace`](docs/sdks/kms/README.md#removekmsspace) - Remove a space
- [`kmsUpdateKmsPage`](docs/sdks/kms/README.md#updatekmspage) - Update a page
- [`kmsUpdateKmsSpace`](docs/sdks/kms/README.md#updatekmsspace) - Update a space
- [`leadCreateCrmLead`](docs/sdks/lead/README.md#createcrmlead) - Create a lead
- [`leadGetCrmLead`](docs/sdks/lead/README.md#getcrmlead) - Retrieve a lead
- [`leadListCrmLeads`](docs/sdks/lead/README.md#listcrmleads) - List all leads
- [`leadPatchCrmLead`](docs/sdks/lead/README.md#patchcrmlead) - Update a lead
- [`leadRemoveCrmLead`](docs/sdks/lead/README.md#removecrmlead) - Remove a lead
- [`leadUpdateCrmLead`](docs/sdks/lead/README.md#updatecrmlead) - Update a lead
- [`linkCreatePaymentLink`](docs/sdks/link/README.md#createpaymentlink) - Create a link
- [`linkGetPaymentLink`](docs/sdks/link/README.md#getpaymentlink) - Retrieve a link
- [`linkListPaymentLinks`](docs/sdks/link/README.md#listpaymentlinks) - List all links
- [`linkPatchPaymentLink`](docs/sdks/link/README.md#patchpaymentlink) - Update a link
- [`linkRemovePaymentLink`](docs/sdks/link/README.md#removepaymentlink) - Remove a link
- [`linkUpdatePaymentLink`](docs/sdks/link/README.md#updatepaymentlink) - Update a link
- [`listCreateMartechList`](docs/sdks/list/README.md#createmartechlist) - Create a list
- [`listGetMartechList`](docs/sdks/list/README.md#getmartechlist) - Retrieve a list
- [`listListMartechLists`](docs/sdks/list/README.md#listmartechlists) - List all lists
- [`listPatchMartechList`](docs/sdks/list/README.md#patchmartechlist) - Update a list
- [`listRemoveMartechList`](docs/sdks/list/README.md#removemartechlist) - Remove a list
- [`listUpdateMartechList`](docs/sdks/list/README.md#updatemartechlist) - Update a list
- [`lmsCreateLmsClass`](docs/sdks/lms/README.md#createlmsclass) - Create a class
- [`lmsCreateLmsCourse`](docs/sdks/lms/README.md#createlmscourse) - Create a course
- [`lmsCreateLmsInstructor`](docs/sdks/lms/README.md#createlmsinstructor) - Create an instructor
- [`lmsCreateLmsStudent`](docs/sdks/lms/README.md#createlmsstudent) - Create a student
- [`lmsGetLmsClass`](docs/sdks/lms/README.md#getlmsclass) - Retrieve a class
- [`lmsGetLmsCourse`](docs/sdks/lms/README.md#getlmscourse) - Retrieve a course
- [`lmsGetLmsInstructor`](docs/sdks/lms/README.md#getlmsinstructor) - Retrieve an instructor
- [`lmsGetLmsStudent`](docs/sdks/lms/README.md#getlmsstudent) - Retrieve a student
- [`lmsListLmsClasses`](docs/sdks/lms/README.md#listlmsclasses) - List all classes
- [`lmsListLmsCourses`](docs/sdks/lms/README.md#listlmscourses) - List all courses
- [`lmsListLmsInstructors`](docs/sdks/lms/README.md#listlmsinstructors) - List all instructors
- [`lmsListLmsStudents`](docs/sdks/lms/README.md#listlmsstudents) - List all students
- [`lmsPatchLmsClass`](docs/sdks/lms/README.md#patchlmsclass) - Update a class
- [`lmsPatchLmsCourse`](docs/sdks/lms/README.md#patchlmscourse) - Update a course
- [`lmsPatchLmsInstructor`](docs/sdks/lms/README.md#patchlmsinstructor) - Update an instructor
- [`lmsPatchLmsStudent`](docs/sdks/lms/README.md#patchlmsstudent) - Update a student
- [`lmsRemoveLmsClass`](docs/sdks/lms/README.md#removelmsclass) - Remove a class
- [`lmsRemoveLmsCourse`](docs/sdks/lms/README.md#removelmscourse) - Remove a course
- [`lmsRemoveLmsInstructor`](docs/sdks/lms/README.md#removelmsinstructor) - Remove an instructor
- [`lmsRemoveLmsStudent`](docs/sdks/lms/README.md#removelmsstudent) - Remove a student
- [`lmsUpdateLmsClass`](docs/sdks/lms/README.md#updatelmsclass) - Update a class
- [`lmsUpdateLmsCourse`](docs/sdks/lms/README.md#updatelmscourse) - Update a course
- [`lmsUpdateLmsInstructor`](docs/sdks/lms/README.md#updatelmsinstructor) - Update an instructor
- [`lmsUpdateLmsStudent`](docs/sdks/lms/README.md#updatelmsstudent) - Update a student
- [`locationCreateCommerceLocation`](docs/sdks/location/README.md#createcommercelocation) - Create a location
- [`locationCreateHrisLocation`](docs/sdks/location/README.md#createhrislocation) - Create a location
- [`locationGetCommerceLocation`](docs/sdks/location/README.md#getcommercelocation) - Retrieve a location
- [`locationGetHrisLocation`](docs/sdks/location/README.md#gethrislocation) - Retrieve a location
- [`locationListCommerceLocations`](docs/sdks/location/README.md#listcommercelocations) - List all locations
- [`locationListHrisLocations`](docs/sdks/location/README.md#listhrislocations) - List all locations
- [`locationPatchCommerceLocation`](docs/sdks/location/README.md#patchcommercelocation) - Update a location
- [`locationPatchHrisLocation`](docs/sdks/location/README.md#patchhrislocation) - Update a location
- [`locationRemoveCommerceLocation`](docs/sdks/location/README.md#removecommercelocation) - Remove a location
- [`locationRemoveHrisLocation`](docs/sdks/location/README.md#removehrislocation) - Remove a location
- [`locationUpdateCommerceLocation`](docs/sdks/location/README.md#updatecommercelocation) - Update a location
- [`locationUpdateHrisLocation`](docs/sdks/location/README.md#updatehrislocation) - Update a location
- [`loginGetUnifiedIntegrationLogin`](docs/sdks/login/README.md#getunifiedintegrationlogin) - Sign in a user
- [`martechCreateMartechList`](docs/sdks/martech/README.md#createmartechlist) - Create a list
- [`martechCreateMartechMember`](docs/sdks/martech/README.md#createmartechmember) - Create a member
- [`martechGetMartechList`](docs/sdks/martech/README.md#getmartechlist) - Retrieve a list
- [`martechGetMartechMember`](docs/sdks/martech/README.md#getmartechmember) - Retrieve a member
- [`martechListMartechLists`](docs/sdks/martech/README.md#listmartechlists) - List all lists
- [`martechListMartechMembers`](docs/sdks/martech/README.md#listmartechmembers) - List all members
- [`martechPatchMartechList`](docs/sdks/martech/README.md#patchmartechlist) - Update a list
- [`martechPatchMartechMember`](docs/sdks/martech/README.md#patchmartechmember) - Update a member
- [`martechRemoveMartechList`](docs/sdks/martech/README.md#removemartechlist) - Remove a list
- [`martechRemoveMartechMember`](docs/sdks/martech/README.md#removemartechmember) - Remove a member
- [`martechUpdateMartechList`](docs/sdks/martech/README.md#updatemartechlist) - Update a list
- [`martechUpdateMartechMember`](docs/sdks/martech/README.md#updatemartechmember) - Update a member
- [`memberCreateMartechMember`](docs/sdks/member/README.md#createmartechmember) - Create a member
- [`memberGetMartechMember`](docs/sdks/member/README.md#getmartechmember) - Retrieve a member
- [`memberListMartechMembers`](docs/sdks/member/README.md#listmartechmembers) - List all members
- [`memberPatchMartechMember`](docs/sdks/member/README.md#patchmartechmember) - Update a member
- [`memberRemoveMartechMember`](docs/sdks/member/README.md#removemartechmember) - Remove a member
- [`memberUpdateMartechMember`](docs/sdks/member/README.md#updatemartechmember) - Update a member
- [`messageCreateMessagingMessage`](docs/sdks/message/README.md#createmessagingmessage) - Create a message
- [`messageGetMessagingMessage`](docs/sdks/message/README.md#getmessagingmessage) - Retrieve a message
- [`messageListMessagingMessages`](docs/sdks/message/README.md#listmessagingmessages) - List all messages
- [`messagePatchMessagingMessage`](docs/sdks/message/README.md#patchmessagingmessage) - Update a message
- [`messageRemoveMessagingMessage`](docs/sdks/message/README.md#removemessagingmessage) - Remove a message
- [`messageUpdateMessagingMessage`](docs/sdks/message/README.md#updatemessagingmessage) - Update a message
- [`messagingCreateMessagingMessage`](docs/sdks/messaging/README.md#createmessagingmessage) - Create a message
- [`messagingGetMessagingChannel`](docs/sdks/messaging/README.md#getmessagingchannel) - Retrieve a channel
- [`messagingGetMessagingMessage`](docs/sdks/messaging/README.md#getmessagingmessage) - Retrieve a message
- [`messagingListMessagingChannels`](docs/sdks/messaging/README.md#listmessagingchannels) - List all channels
- [`messagingListMessagingMessages`](docs/sdks/messaging/README.md#listmessagingmessages) - List all messages
- [`messagingPatchMessagingMessage`](docs/sdks/messaging/README.md#patchmessagingmessage) - Update a message
- [`messagingRemoveMessagingMessage`](docs/sdks/messaging/README.md#removemessagingmessage) - Remove a message
- [`messagingUpdateMessagingMessage`](docs/sdks/messaging/README.md#updatemessagingmessage) - Update a message
- [`metadataCreateMetadataMetadata`](docs/sdks/metadata/README.md#createmetadatametadata) - Create a metadata
- [`metadataGetMetadataMetadata`](docs/sdks/metadata/README.md#getmetadatametadata) - Retrieve a metadata
- [`metadataListMetadataMetadatas`](docs/sdks/metadata/README.md#listmetadatametadatas) - List all metadatas
- [`metadataPatchMetadataMetadata`](docs/sdks/metadata/README.md#patchmetadatametadata) - Update a metadata
- [`metadataRemoveMetadataMetadata`](docs/sdks/metadata/README.md#removemetadatametadata) - Remove a metadata
- [`metadataUpdateMetadataMetadata`](docs/sdks/metadata/README.md#updatemetadatametadata) - Update a metadata
- [`modelListGenaiModels`](docs/sdks/model/README.md#listgenaimodels) - List all models
- [`noteCreateTicketingNote`](docs/sdks/note/README.md#createticketingnote) - Create a note
- [`noteGetTicketingNote`](docs/sdks/note/README.md#getticketingnote) - Retrieve a note
- [`noteListTicketingNotes`](docs/sdks/note/README.md#listticketingnotes) - List all notes
- [`notePatchTicketingNote`](docs/sdks/note/README.md#patchticketingnote) - Update a note
- [`noteRemoveTicketingNote`](docs/sdks/note/README.md#removeticketingnote) - Remove a note
- [`noteUpdateTicketingNote`](docs/sdks/note/README.md#updateticketingnote) - Update a note
- [`orderCreateAccountingOrder`](docs/sdks/order/README.md#createaccountingorder) - Create an order
- [`orderGetAccountingOrder`](docs/sdks/order/README.md#getaccountingorder) - Retrieve an order
- [`orderListAccountingOrders`](docs/sdks/order/README.md#listaccountingorders) - List all orders
- [`orderPatchAccountingOrder`](docs/sdks/order/README.md#patchaccountingorder) - Update an order
- [`orderRemoveAccountingOrder`](docs/sdks/order/README.md#removeaccountingorder) - Remove an order
- [`orderUpdateAccountingOrder`](docs/sdks/order/README.md#updateaccountingorder) - Update an order
- [`organizationCreateRepoOrganization`](docs/sdks/organization/README.md#createrepoorganization) - Create an organization
- [`organizationGetAccountingOrganization`](docs/sdks/organization/README.md#getaccountingorganization) - Retrieve an organization
- [`organizationGetRepoOrganization`](docs/sdks/organization/README.md#getrepoorganization) - Retrieve an organization
- [`organizationListAccountingOrganizations`](docs/sdks/organization/README.md#listaccountingorganizations) - List all organizations
- [`organizationListRepoOrganizations`](docs/sdks/organization/README.md#listrepoorganizations) - List all organizations
- [`organizationPatchRepoOrganization`](docs/sdks/organization/README.md#patchrepoorganization) - Update an organization
- [`organizationRemoveRepoOrganization`](docs/sdks/organization/README.md#removerepoorganization) - Remove an organization
- [`organizationUpdateRepoOrganization`](docs/sdks/organization/README.md#updaterepoorganization) - Update an organization
- [`pageCreateKmsPage`](docs/sdks/page/README.md#createkmspage) - Create a page
- [`pageGetKmsPage`](docs/sdks/page/README.md#getkmspage) - Retrieve a page
- [`pageListKmsPages`](docs/sdks/page/README.md#listkmspages) - List all pages
- [`pagePatchKmsPage`](docs/sdks/page/README.md#patchkmspage) - Update a page
- [`pageRemoveKmsPage`](docs/sdks/page/README.md#removekmspage) - Remove a page
- [`pageUpdateKmsPage`](docs/sdks/page/README.md#updatekmspage) - Update a page
- [`passthroughCreatePassthroughJson`](docs/sdks/passthrough/README.md#createpassthroughjson) - Passthrough POST
- [`passthroughCreatePassthroughRaw`](docs/sdks/passthrough/README.md#createpassthroughraw) - Passthrough POST
- [`passthroughListPassthroughs`](docs/sdks/passthrough/README.md#listpassthroughs) - Passthrough GET
- [`passthroughPatchPassthroughJson`](docs/sdks/passthrough/README.md#patchpassthroughjson) - Passthrough PUT
- [`passthroughPatchPassthroughRaw`](docs/sdks/passthrough/README.md#patchpassthroughraw) - Passthrough PUT
- [`passthroughRemovePassthrough`](docs/sdks/passthrough/README.md#removepassthrough) - Passthrough DELETE
- [`passthroughUpdatePassthroughJson`](docs/sdks/passthrough/README.md#updatepassthroughjson) - Passthrough PUT
- [`passthroughUpdatePassthroughRaw`](docs/sdks/passthrough/README.md#updatepassthroughraw) - Passthrough PUT
- [`paymentCreatePaymentLink`](docs/sdks/payment/README.md#createpaymentlink) - Create a link
- [`paymentCreatePaymentPayment`](docs/sdks/payment/README.md#createpaymentpayment) - Create a payment
- [`paymentGetPaymentLink`](docs/sdks/payment/README.md#getpaymentlink) - Retrieve a link
- [`paymentGetPaymentPayment`](docs/sdks/payment/README.md#getpaymentpayment) - Retrieve a payment
- [`paymentGetPaymentPayout`](docs/sdks/payment/README.md#getpaymentpayout) - Retrieve a payout
- [`paymentGetPaymentRefund`](docs/sdks/payment/README.md#getpaymentrefund) - Retrieve a refund
- [`paymentListPaymentLinks`](docs/sdks/payment/README.md#listpaymentlinks) - List all links
- [`paymentListPaymentPayments`](docs/sdks/payment/README.md#listpaymentpayments) - List all payments
- [`paymentListPaymentPayouts`](docs/sdks/payment/README.md#listpaymentpayouts) - List all payouts
- [`paymentListPaymentRefunds`](docs/sdks/payment/README.md#listpaymentrefunds) - List all refunds
- [`paymentPatchPaymentLink`](docs/sdks/payment/README.md#patchpaymentlink) - Update a link
- [`paymentPatchPaymentPayment`](docs/sdks/payment/README.md#patchpaymentpayment) - Update a payment
- [`paymentRemovePaymentLink`](docs/sdks/payment/README.md#removepaymentlink) - Remove a link
- [`paymentRemovePaymentPayment`](docs/sdks/payment/README.md#removepaymentpayment) - Remove a payment
- [`paymentUpdatePaymentLink`](docs/sdks/payment/README.md#updatepaymentlink) - Update a link
- [`paymentUpdatePaymentPayment`](docs/sdks/payment/README.md#updatepaymentpayment) - Update a payment
- [`payoutGetPaymentPayout`](docs/sdks/payout/README.md#getpaymentpayout) - Retrieve a payout
- [`payoutListPaymentPayouts`](docs/sdks/payout/README.md#listpaymentpayouts) - List all payouts
- [`payslipGetHrisPayslip`](docs/sdks/payslip/README.md#gethrispayslip) - Retrieve a payslip
- [`payslipListHrisPayslips`](docs/sdks/payslip/README.md#listhrispayslips) - List all payslips
- [`personListEnrichPeople`](docs/sdks/person/README.md#listenrichpeople) - Retrieve enrichment information for a person
- [`pipelineCreateCrmPipeline`](docs/sdks/pipeline/README.md#createcrmpipeline) - Create a pipeline
- [`pipelineGetCrmPipeline`](docs/sdks/pipeline/README.md#getcrmpipeline) - Retrieve a pipeline
- [`pipelineListCrmPipelines`](docs/sdks/pipeline/README.md#listcrmpipelines) - List all pipelines
- [`pipelinePatchCrmPipeline`](docs/sdks/pipeline/README.md#patchcrmpipeline) - Update a pipeline
- [`pipelineRemoveCrmPipeline`](docs/sdks/pipeline/README.md#removecrmpipeline) - Remove a pipeline
- [`pipelineUpdateCrmPipeline`](docs/sdks/pipeline/README.md#updatecrmpipeline) - Update a pipeline
- [`projectCreateTaskProject`](docs/sdks/project/README.md#createtaskproject) - Create a project
- [`projectGetTaskProject`](docs/sdks/project/README.md#gettaskproject) - Retrieve a project
- [`projectListTaskProjects`](docs/sdks/project/README.md#listtaskprojects) - List all projects
- [`projectPatchTaskProject`](docs/sdks/project/README.md#patchtaskproject) - Update a project
- [`projectRemoveTaskProject`](docs/sdks/project/README.md#removetaskproject) - Remove a project
- [`projectUpdateTaskProject`](docs/sdks/project/README.md#updatetaskproject) - Update a project
- [`promptCreateGenaiPrompt`](docs/sdks/prompt/README.md#creategenaiprompt) - Create a prompt
- [`pullrequestCreateRepoPullrequest`](docs/sdks/pullrequest/README.md#createrepopullrequest) - Create a pullrequest
- [`pullrequestGetRepoPullrequest`](docs/sdks/pullrequest/README.md#getrepopullrequest) - Retrieve a pullrequest
- [`pullrequestListRepoPullrequests`](docs/sdks/pullrequest/README.md#listrepopullrequests) - List all pullrequests
- [`pullrequestPatchRepoPullrequest`](docs/sdks/pullrequest/README.md#patchrepopullrequest) - Update a pullrequest
- [`pullrequestRemoveRepoPullrequest`](docs/sdks/pullrequest/README.md#removerepopullrequest) - Remove a pullrequest
- [`pullrequestUpdateRepoPullrequest`](docs/sdks/pullrequest/README.md#updaterepopullrequest) - Update a pullrequest
- [`refundGetPaymentRefund`](docs/sdks/refund/README.md#getpaymentrefund) - Retrieve a refund
- [`refundListPaymentRefunds`](docs/sdks/refund/README.md#listpaymentrefunds) - List all refunds
- [`repoCreateRepoBranch`](docs/sdks/repo/README.md#createrepobranch) - Create a branch
- [`repoCreateRepoCommit`](docs/sdks/repo/README.md#createrepocommit) - Create a commit
- [`repoCreateRepoOrganization`](docs/sdks/repo/README.md#createrepoorganization) - Create an organization
- [`repoCreateRepoPullrequest`](docs/sdks/repo/README.md#createrepopullrequest) - Create a pullrequest
- [`repoCreateRepoRepository`](docs/sdks/repo/README.md#createreporepository) - Create a repository
- [`repoGetRepoBranch`](docs/sdks/repo/README.md#getrepobranch) - Retrieve a branch
- [`repoGetRepoCommit`](docs/sdks/repo/README.md#getrepocommit) - Retrieve a commit
- [`repoGetRepoOrganization`](docs/sdks/repo/README.md#getrepoorganization) - Retrieve an organization
- [`repoGetRepoPullrequest`](docs/sdks/repo/README.md#getrepopullrequest) - Retrieve a pullrequest
- [`repoGetRepoRepository`](docs/sdks/repo/README.md#getreporepository) - Retrieve a repository
- [`repoListRepoBranches`](docs/sdks/repo/README.md#listrepobranches) - List all branches
- [`repoListRepoCommits`](docs/sdks/repo/README.md#listrepocommits) - List all commits
- [`repoListRepoOrganizations`](docs/sdks/repo/README.md#listrepoorganizations) - List all organizations
- [`repoListRepoPullrequests`](docs/sdks/repo/README.md#listrepopullrequests) - List all pullrequests
- [`repoListRepoRepositories`](docs/sdks/repo/README.md#listreporepositories) - List all repositories
- [`repoPatchRepoBranch`](docs/sdks/repo/README.md#patchrepobranch) - Update a branch
- [`repoPatchRepoCommit`](docs/sdks/repo/README.md#patchrepocommit) - Update a commit
- [`repoPatchRepoOrganization`](docs/sdks/repo/README.md#patchrepoorganization) - Update an organization
- [`repoPatchRepoPullrequest`](docs/sdks/repo/README.md#patchrepopullrequest) - Update a pullrequest
- [`repoPatchRepoRepository`](docs/sdks/repo/README.md#patchreporepository) - Update a repository
- [`repoRemoveRepoBranch`](docs/sdks/repo/README.md#removerepobranch) - Remove a branch
- [`repoRemoveRepoCommit`](docs/sdks/repo/README.md#removerepocommit) - Remove a commit
- [`repoRemoveRepoOrganization`](docs/sdks/repo/README.md#removerepoorganization) - Remove an organization
- [`repoRemoveRepoPullrequest`](docs/sdks/repo/README.md#removerepopullrequest) - Remove a pullrequest
- [`repoRemoveRepoRepository`](docs/sdks/repo/README.md#removereporepository) - Remove a repository
- [`repositoryCreateRepoRepository`](docs/sdks/repository/README.md#createreporepository) - Create a repository
- [`repositoryGetRepoRepository`](docs/sdks/repository/README.md#getreporepository) - Retrieve a repository
- [`repositoryListRepoRepositories`](docs/sdks/repository/README.md#listreporepositories) - List all repositories
- [`repositoryPatchRepoRepository`](docs/sdks/repository/README.md#patchreporepository) - Update a repository
- [`repositoryRemoveRepoRepository`](docs/sdks/repository/README.md#removereporepository) - Remove a repository
- [`repositoryUpdateRepoRepository`](docs/sdks/repository/README.md#updatereporepository) - Update a repository
- [`repoUpdateRepoBranch`](docs/sdks/repo/README.md#updaterepobranch) - Update a branch
- [`repoUpdateRepoCommit`](docs/sdks/repo/README.md#updaterepocommit) - Update a commit
- [`repoUpdateRepoOrganization`](docs/sdks/repo/README.md#updaterepoorganization) - Update an organization
- [`repoUpdateRepoPullrequest`](docs/sdks/repo/README.md#updaterepopullrequest) - Update a pullrequest
- [`repoUpdateRepoRepository`](docs/sdks/repo/README.md#updatereporepository) - Update a repository
- [`scimCreateScimGroups`](docs/sdks/scim/README.md#createscimgroups) - Create group
- [`scimCreateScimUsers`](docs/sdks/scim/README.md#createscimusers) - Create user
- [`scimGetScimGroups`](docs/sdks/scim/README.md#getscimgroups) - Get group
- [`scimGetScimUsers`](docs/sdks/scim/README.md#getscimusers) - Get user
- [`scimListScimGroups`](docs/sdks/scim/README.md#listscimgroups) - List groups
- [`scimListScimUsers`](docs/sdks/scim/README.md#listscimusers) - List users
- [`scimPatchScimGroups`](docs/sdks/scim/README.md#patchscimgroups) - Update group
- [`scimPatchScimUsers`](docs/sdks/scim/README.md#patchscimusers) - Update user
- [`scimRemoveScimGroups`](docs/sdks/scim/README.md#removescimgroups) - Delete group
- [`scimRemoveScimUsers`](docs/sdks/scim/README.md#removescimusers) - Delete user
- [`scimUpdateScimGroups`](docs/sdks/scim/README.md#updatescimgroups) - Update group
- [`scimUpdateScimUsers`](docs/sdks/scim/README.md#updatescimusers) - Update user
- [`scorecardCreateAtsScorecard`](docs/sdks/scorecard/README.md#createatsscorecard) - Create a scorecard
- [`scorecardGetAtsScorecard`](docs/sdks/scorecard/README.md#getatsscorecard) - Retrieve a scorecard
- [`scorecardListAtsScorecards`](docs/sdks/scorecard/README.md#listatsscorecards) - List all scorecards
- [`scorecardPatchAtsScorecard`](docs/sdks/scorecard/README.md#patchatsscorecard) - Update a scorecard
- [`scorecardRemoveAtsScorecard`](docs/sdks/scorecard/README.md#removeatsscorecard) - Remove a scorecard
- [`scorecardUpdateAtsScorecard`](docs/sdks/scorecard/README.md#updateatsscorecard) - Update a scorecard
- [`spaceCreateKmsSpace`](docs/sdks/space/README.md#createkmsspace) - Create a space
- [`spaceGetKmsSpace`](docs/sdks/space/README.md#getkmsspace) - Retrieve a space
- [`spaceListKmsSpaces`](docs/sdks/space/README.md#listkmsspaces) - List all spaces
- [`spacePatchKmsSpace`](docs/sdks/space/README.md#patchkmsspace) - Update a space
- [`spaceRemoveKmsSpace`](docs/sdks/space/README.md#removekmsspace) - Remove a space
- [`spaceUpdateKmsSpace`](docs/sdks/space/README.md#updatekmsspace) - Update a space
- [`storageCreateStorageFile`](docs/sdks/storage/README.md#createstoragefile) - Create a file
- [`storageGetStorageFile`](docs/sdks/storage/README.md#getstoragefile) - Retrieve a file
- [`storageListStorageFiles`](docs/sdks/storage/README.md#liststoragefiles) - List all files
- [`storagePatchStorageFile`](docs/sdks/storage/README.md#patchstoragefile) - Update a file
- [`storageRemoveStorageFile`](docs/sdks/storage/README.md#removestoragefile) - Remove a file
- [`storageUpdateStorageFile`](docs/sdks/storage/README.md#updatestoragefile) - Update a file
- [`studentCreateLmsStudent`](docs/sdks/student/README.md#createlmsstudent) - Create a student
- [`studentGetLmsStudent`](docs/sdks/student/README.md#getlmsstudent) - Retrieve a student
- [`studentListLmsStudents`](docs/sdks/student/README.md#listlmsstudents) - List all students
- [`studentPatchLmsStudent`](docs/sdks/student/README.md#patchlmsstudent) - Update a student
- [`studentRemoveLmsStudent`](docs/sdks/student/README.md#removelmsstudent) - Remove a student
- [`studentUpdateLmsStudent`](docs/sdks/student/README.md#updatelmsstudent) - Update a student
- [`taskCreateTaskProject`](docs/sdks/task/README.md#createtaskproject) - Create a project
- [`taskCreateTaskTask`](docs/sdks/task/README.md#createtasktask) - Create a task
- [`taskGetTaskProject`](docs/sdks/task/README.md#gettaskproject) - Retrieve a project
- [`taskGetTaskTask`](docs/sdks/task/README.md#gettasktask) - Retrieve a task
- [`taskListTaskProjects`](docs/sdks/task/README.md#listtaskprojects) - List all projects
- [`taskListTaskTasks`](docs/sdks/task/README.md#listtasktasks) - List all tasks
- [`taskPatchTaskProject`](docs/sdks/task/README.md#patchtaskproject) - Update a project
- [`taskPatchTaskTask`](docs/sdks/task/README.md#patchtasktask) - Update a task
- [`taskRemoveTaskProject`](docs/sdks/task/README.md#removetaskproject) - Remove a project
- [`taskRemoveTaskTask`](docs/sdks/task/README.md#removetasktask) - Remove a task
- [`taskUpdateTaskProject`](docs/sdks/task/README.md#updatetaskproject) - Update a project
- [`taskUpdateTaskTask`](docs/sdks/task/README.md#updatetasktask) - Update a task
- [`taxrateCreateAccountingTaxrate`](docs/sdks/taxrate/README.md#createaccountingtaxrate) - Create a taxrate
- [`taxrateGetAccountingTaxrate`](docs/sdks/taxrate/README.md#getaccountingtaxrate) - Retrieve a taxrate
- [`taxrateListAccountingTaxrates`](docs/sdks/taxrate/README.md#listaccountingtaxrates) - List all taxrates
- [`taxratePatchAccountingTaxrate`](docs/sdks/taxrate/README.md#patchaccountingtaxrate) - Update a taxrate
- [`taxrateRemoveAccountingTaxrate`](docs/sdks/taxrate/README.md#removeaccountingtaxrate) - Remove a taxrate
- [`taxrateUpdateAccountingTaxrate`](docs/sdks/taxrate/README.md#updateaccountingtaxrate) - Update a taxrate
- [`ticketCreateTicketingTicket`](docs/sdks/ticket/README.md#createticketingticket) - Create a ticket
- [`ticketGetTicketingTicket`](docs/sdks/ticket/README.md#getticketingticket) - Retrieve a ticket
- [`ticketingCreateTicketingCustomer`](docs/sdks/ticketing/README.md#createticketingcustomer) - Create a customer
- [`ticketingCreateTicketingNote`](docs/sdks/ticketing/README.md#createticketingnote) - Create a note
- [`ticketingCreateTicketingTicket`](docs/sdks/ticketing/README.md#createticketingticket) - Create a ticket
- [`ticketingGetTicketingCustomer`](docs/sdks/ticketing/README.md#getticketingcustomer) - Retrieve a customer
- [`ticketingGetTicketingNote`](docs/sdks/ticketing/README.md#getticketingnote) - Retrieve a note
- [`ticketingGetTicketingTicket`](docs/sdks/ticketing/README.md#getticketingticket) - Retrieve a ticket
- [`ticketingListTicketingCustomers`](docs/sdks/ticketing/README.md#listticketingcustomers) - List all customers
- [`ticketingListTicketingNotes`](docs/sdks/ticketing/README.md#listticketingnotes) - List all notes
- [`ticketingListTicketingTickets`](docs/sdks/ticketing/README.md#listticketingtickets) - List all tickets
- [`ticketingPatchTicketingCustomer`](docs/sdks/ticketing/README.md#patchticketingcustomer) - Update a customer
- [`ticketingPatchTicketingNote`](docs/sdks/ticketing/README.md#patchticketingnote) - Update a note
- [`ticketingPatchTicketingTicket`](docs/sdks/ticketing/README.md#patchticketingticket) - Update a ticket
- [`ticketingRemoveTicketingCustomer`](docs/sdks/ticketing/README.md#removeticketingcustomer) - Remove a customer
- [`ticketingRemoveTicketingNote`](docs/sdks/ticketing/README.md#removeticketingnote) - Remove a note
- [`ticketingRemoveTicketingTicket`](docs/sdks/ticketing/README.md#removeticketingticket) - Remove a ticket
- [`ticketingUpdateTicketingCustomer`](docs/sdks/ticketing/README.md#updateticketingcustomer) - Update a customer
- [`ticketingUpdateTicketingNote`](docs/sdks/ticketing/README.md#updateticketingnote) - Update a note
- [`ticketingUpdateTicketingTicket`](docs/sdks/ticketing/README.md#updateticketingticket) - Update a ticket
- [`ticketListTicketingTickets`](docs/sdks/ticket/README.md#listticketingtickets) - List all tickets
- [`ticketPatchTicketingTicket`](docs/sdks/ticket/README.md#patchticketingticket) - Update a ticket
- [`ticketRemoveTicketingTicket`](docs/sdks/ticket/README.md#removeticketingticket) - Remove a ticket
- [`ticketUpdateTicketingTicket`](docs/sdks/ticket/README.md#updateticketingticket) - Update a ticket
- [`timeoffGetHrisTimeoff`](docs/sdks/timeoff/README.md#gethristimeoff) - Retrieve a timeoff
- [`timeoffListHrisTimeoffs`](docs/sdks/timeoff/README.md#listhristimeoffs) - List all timeoffs
- [`transactionCreateAccountingTransaction`](docs/sdks/transaction/README.md#createaccountingtransaction) - Create a transaction
- [`transactionGetAccountingTransaction`](docs/sdks/transaction/README.md#getaccountingtransaction) - Retrieve a transaction
- [`transactionListAccountingTransactions`](docs/sdks/transaction/README.md#listaccountingtransactions) - List all transactions
- [`transactionPatchAccountingTransaction`](docs/sdks/transaction/README.md#patchaccountingtransaction) - Update a transaction
- [`transactionRemoveAccountingTransaction`](docs/sdks/transaction/README.md#removeaccountingtransaction) - Remove a transaction
- [`transactionUpdateAccountingTransaction`](docs/sdks/transaction/README.md#updateaccountingtransaction) - Update a transaction
- [`ucCreateUcContact`](docs/sdks/uc/README.md#createuccontact) - Create a contact
- [`ucGetUcContact`](docs/sdks/uc/README.md#getuccontact) - Retrieve a contact
- [`ucListUcCalls`](docs/sdks/uc/README.md#listuccalls) - List all calls
- [`ucListUcContacts`](docs/sdks/uc/README.md#listuccontacts) - List all contacts
- [`ucPatchUcContact`](docs/sdks/uc/README.md#patchuccontact) - Update a contact
- [`ucRemoveUcContact`](docs/sdks/uc/README.md#removeuccontact) - Remove a contact
- [`ucUpdateUcContact`](docs/sdks/uc/README.md#updateuccontact) - Update a contact
- [`unifiedCreateUnifiedConnection`](docs/sdks/unified/README.md#createunifiedconnection) - Create connection
- [`unifiedCreateUnifiedWebhook`](docs/sdks/unified/README.md#createunifiedwebhook) - Create webhook subscription
- [`unifiedGetUnifiedApicall`](docs/sdks/unified/README.md#getunifiedapicall) - Retrieve specific API Call by its ID
- [`unifiedGetUnifiedConnection`](docs/sdks/unified/README.md#getunifiedconnection) - Retrieve connection
- [`unifiedGetUnifiedIntegrationAuth`](docs/sdks/unified/README.md#getunifiedintegrationauth) - Create connection indirectly
- [`unifiedGetUnifiedWebhook`](docs/sdks/unified/README.md#getunifiedwebhook) - Retrieve webhook by its ID
- [`unifiedListUnifiedApicalls`](docs/sdks/unified/README.md#listunifiedapicalls) - Returns API Calls
- [`unifiedListUnifiedConnections`](docs/sdks/unified/README.md#listunifiedconnections) - List all connections
- [`unifiedListUnifiedIntegrations`](docs/sdks/unified/README.md#listunifiedintegrations) - Returns all integrations
- [`unifiedListUnifiedIntegrationWorkspaces`](docs/sdks/unified/README.md#listunifiedintegrationworkspaces) - Returns all activated integrations in a workspace
- [`unifiedListUnifiedIssues`](docs/sdks/unified/README.md#listunifiedissues) - List support issues
- [`unifiedListUnifiedWebhooks`](docs/sdks/unified/README.md#listunifiedwebhooks) - Returns all registered webhooks
- [`unifiedPatchUnifiedConnection`](docs/sdks/unified/README.md#patchunifiedconnection) - Update connection
- [`unifiedPatchUnifiedWebhook`](docs/sdks/unified/README.md#patchunifiedwebhook) - Update webhook subscription
- [`unifiedPatchUnifiedWebhookTrigger`](docs/sdks/unified/README.md#patchunifiedwebhooktrigger) - Trigger webhook
- [`unifiedRemoveUnifiedConnection`](docs/sdks/unified/README.md#removeunifiedconnection) - Remove connection
- [`unifiedRemoveUnifiedWebhook`](docs/sdks/unified/README.md#removeunifiedwebhook) - Remove webhook subscription
- [`unifiedUpdateUnifiedConnection`](docs/sdks/unified/README.md#updateunifiedconnection) - Update connection
- [`unifiedUpdateUnifiedWebhook`](docs/sdks/unified/README.md#updateunifiedwebhook) - Update webhook subscription
- [`unifiedUpdateUnifiedWebhookTrigger`](docs/sdks/unified/README.md#updateunifiedwebhooktrigger) - Trigger webhook
- [`userCreateScimUsers`](docs/sdks/user/README.md#createscimusers) - Create user
- [`userGetScimUsers`](docs/sdks/user/README.md#getscimusers) - Get user
- [`userListScimUsers`](docs/sdks/user/README.md#listscimusers) - List users
- [`userPatchScimUsers`](docs/sdks/user/README.md#patchscimusers) - Update user
- [`userRemoveScimUsers`](docs/sdks/user/README.md#removescimusers) - Delete user
- [`userUpdateScimUsers`](docs/sdks/user/README.md#updatescimusers) - Update user
- [`webhookCreateUnifiedWebhook`](docs/sdks/webhook/README.md#createunifiedwebhook) - Create webhook subscription
- [`webhookGetUnifiedWebhook`](docs/sdks/webhook/README.md#getunifiedwebhook) - Retrieve webhook by its ID
- [`webhookListUnifiedWebhooks`](docs/sdks/webhook/README.md#listunifiedwebhooks) - Returns all registered webhooks
- [`webhookPatchUnifiedWebhook`](docs/sdks/webhook/README.md#patchunifiedwebhook) - Update webhook subscription
- [`webhookPatchUnifiedWebhookTrigger`](docs/sdks/webhook/README.md#patchunifiedwebhooktrigger) - Trigger webhook
- [`webhookRemoveUnifiedWebhook`](docs/sdks/webhook/README.md#removeunifiedwebhook) - Remove webhook subscription
- [`webhookUpdateUnifiedWebhook`](docs/sdks/webhook/README.md#updateunifiedwebhook) - Update webhook subscription
- [`webhookUpdateUnifiedWebhookTrigger`](docs/sdks/webhook/README.md#updateunifiedwebhooktrigger) - Trigger webhook

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->


