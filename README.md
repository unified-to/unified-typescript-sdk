SDK for [Unified.to](https://unified.to) API
</div>

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

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.unified.to` | None |
| 1 | `https://api-eu.unified.to` | None |

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
    serverIdx: 1,
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

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
    serverURL: "https://api.unified.to",
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

| Name    | Type    | Scheme  |
| ------- | ------- | ------- |
| `jwt`   | apiKey  | API key |

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

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { SDKValidationError } from "@unified-api/typescript-sdk/sdk/models/errors";

const unifiedTo = new UnifiedTo();

async function run() {
    let result;
    try {
        result = await unifiedTo.accounting.createAccountingAccount({
            connectionId: "<value>",
        });
    } catch (err) {
        switch (true) {
            case err instanceof SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
            default: {
                throw err;
            }
        }
    }

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo();

async function run() {
    const result = await unifiedTo.accounting.createAccountingAccount(
        {
            connectionId: "<value>",
        },
        {
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
        }
    );

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

To log HTTP requests and responses, you can pass a logger that matches `console`'s interface as an SDK option.

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

- [accountCreateAccountingAccount](docs/sdks/account/README.md#createaccountingaccount)
- [accountGetAccountingAccount](docs/sdks/account/README.md#getaccountingaccount)
- [accountListAccountingAccounts](docs/sdks/account/README.md#listaccountingaccounts)
- [accountPatchAccountingAccount](docs/sdks/account/README.md#patchaccountingaccount)
- [accountRemoveAccountingAccount](docs/sdks/account/README.md#removeaccountingaccount)
- [accountUpdateAccountingAccount](docs/sdks/account/README.md#updateaccountingaccount)
- [accountingCreateAccountingAccount](docs/sdks/accounting/README.md#createaccountingaccount)
- [accountingCreateAccountingContact](docs/sdks/accounting/README.md#createaccountingcontact)
- [accountingCreateAccountingInvoice](docs/sdks/accounting/README.md#createaccountinginvoice)
- [accountingCreateAccountingJournal](docs/sdks/accounting/README.md#createaccountingjournal)
- [accountingCreateAccountingTaxrate](docs/sdks/accounting/README.md#createaccountingtaxrate)
- [accountingCreateAccountingTransaction](docs/sdks/accounting/README.md#createaccountingtransaction)
- [accountingGetAccountingAccount](docs/sdks/accounting/README.md#getaccountingaccount)
- [accountingGetAccountingContact](docs/sdks/accounting/README.md#getaccountingcontact)
- [accountingGetAccountingInvoice](docs/sdks/accounting/README.md#getaccountinginvoice)
- [accountingGetAccountingJournal](docs/sdks/accounting/README.md#getaccountingjournal)
- [accountingGetAccountingOrganization](docs/sdks/accounting/README.md#getaccountingorganization)
- [accountingGetAccountingTaxrate](docs/sdks/accounting/README.md#getaccountingtaxrate)
- [accountingGetAccountingTransaction](docs/sdks/accounting/README.md#getaccountingtransaction)
- [accountingListAccountingAccounts](docs/sdks/accounting/README.md#listaccountingaccounts)
- [accountingListAccountingContacts](docs/sdks/accounting/README.md#listaccountingcontacts)
- [accountingListAccountingInvoices](docs/sdks/accounting/README.md#listaccountinginvoices)
- [accountingListAccountingJournals](docs/sdks/accounting/README.md#listaccountingjournals)
- [accountingListAccountingOrganizations](docs/sdks/accounting/README.md#listaccountingorganizations)
- [accountingListAccountingTaxrates](docs/sdks/accounting/README.md#listaccountingtaxrates)
- [accountingListAccountingTransactions](docs/sdks/accounting/README.md#listaccountingtransactions)
- [accountingPatchAccountingAccount](docs/sdks/accounting/README.md#patchaccountingaccount)
- [accountingPatchAccountingContact](docs/sdks/accounting/README.md#patchaccountingcontact)
- [accountingPatchAccountingInvoice](docs/sdks/accounting/README.md#patchaccountinginvoice)
- [accountingPatchAccountingJournal](docs/sdks/accounting/README.md#patchaccountingjournal)
- [accountingPatchAccountingTaxrate](docs/sdks/accounting/README.md#patchaccountingtaxrate)
- [accountingPatchAccountingTransaction](docs/sdks/accounting/README.md#patchaccountingtransaction)
- [accountingRemoveAccountingAccount](docs/sdks/accounting/README.md#removeaccountingaccount)
- [accountingRemoveAccountingContact](docs/sdks/accounting/README.md#removeaccountingcontact)
- [accountingRemoveAccountingInvoice](docs/sdks/accounting/README.md#removeaccountinginvoice)
- [accountingRemoveAccountingJournal](docs/sdks/accounting/README.md#removeaccountingjournal)
- [accountingRemoveAccountingTaxrate](docs/sdks/accounting/README.md#removeaccountingtaxrate)
- [accountingRemoveAccountingTransaction](docs/sdks/accounting/README.md#removeaccountingtransaction)
- [accountingUpdateAccountingAccount](docs/sdks/accounting/README.md#updateaccountingaccount)
- [accountingUpdateAccountingContact](docs/sdks/accounting/README.md#updateaccountingcontact)
- [accountingUpdateAccountingInvoice](docs/sdks/accounting/README.md#updateaccountinginvoice)
- [accountingUpdateAccountingJournal](docs/sdks/accounting/README.md#updateaccountingjournal)
- [accountingUpdateAccountingTaxrate](docs/sdks/accounting/README.md#updateaccountingtaxrate)
- [accountingUpdateAccountingTransaction](docs/sdks/accounting/README.md#updateaccountingtransaction)
- [activityCreateAtsActivity](docs/sdks/activity/README.md#createatsactivity)
- [activityGetAtsActivity](docs/sdks/activity/README.md#getatsactivity)
- [activityListAtsActivities](docs/sdks/activity/README.md#listatsactivities)
- [activityPatchAtsActivity](docs/sdks/activity/README.md#patchatsactivity)
- [activityRemoveAtsActivity](docs/sdks/activity/README.md#removeatsactivity)
- [activityUpdateAtsActivity](docs/sdks/activity/README.md#updateatsactivity)
- [apicallGetUnifiedApicall](docs/sdks/apicall/README.md#getunifiedapicall)
- [apicallListUnifiedApicalls](docs/sdks/apicall/README.md#listunifiedapicalls)
- [applicationCreateAtsApplication](docs/sdks/application/README.md#createatsapplication)
- [applicationGetAtsApplication](docs/sdks/application/README.md#getatsapplication)
- [applicationListAtsApplications](docs/sdks/application/README.md#listatsapplications)
- [applicationPatchAtsApplication](docs/sdks/application/README.md#patchatsapplication)
- [applicationRemoveAtsApplication](docs/sdks/application/README.md#removeatsapplication)
- [applicationUpdateAtsApplication](docs/sdks/application/README.md#updateatsapplication)
- [applicationstatusListAtsApplicationstatuses](docs/sdks/applicationstatus/README.md#listatsapplicationstatuses)
- [atsCreateAtsActivity](docs/sdks/ats/README.md#createatsactivity)
- [atsCreateAtsApplication](docs/sdks/ats/README.md#createatsapplication)
- [atsCreateAtsCandidate](docs/sdks/ats/README.md#createatscandidate)
- [atsCreateAtsDocument](docs/sdks/ats/README.md#createatsdocument)
- [atsCreateAtsInterview](docs/sdks/ats/README.md#createatsinterview)
- [atsCreateAtsJob](docs/sdks/ats/README.md#createatsjob)
- [atsCreateAtsScorecard](docs/sdks/ats/README.md#createatsscorecard)
- [atsGetAtsActivity](docs/sdks/ats/README.md#getatsactivity)
- [atsGetAtsApplication](docs/sdks/ats/README.md#getatsapplication)
- [atsGetAtsCandidate](docs/sdks/ats/README.md#getatscandidate)
- [atsGetAtsCompany](docs/sdks/ats/README.md#getatscompany)
- [atsGetAtsDocument](docs/sdks/ats/README.md#getatsdocument)
- [atsGetAtsInterview](docs/sdks/ats/README.md#getatsinterview)
- [atsGetAtsJob](docs/sdks/ats/README.md#getatsjob)
- [atsGetAtsScorecard](docs/sdks/ats/README.md#getatsscorecard)
- [atsListAtsActivities](docs/sdks/ats/README.md#listatsactivities)
- [atsListAtsApplications](docs/sdks/ats/README.md#listatsapplications)
- [atsListAtsApplicationstatuses](docs/sdks/ats/README.md#listatsapplicationstatuses)
- [atsListAtsCandidates](docs/sdks/ats/README.md#listatscandidates)
- [atsListAtsCompanies](docs/sdks/ats/README.md#listatscompanies)
- [atsListAtsDocuments](docs/sdks/ats/README.md#listatsdocuments)
- [atsListAtsInterviews](docs/sdks/ats/README.md#listatsinterviews)
- [atsListAtsJobs](docs/sdks/ats/README.md#listatsjobs)
- [atsListAtsScorecards](docs/sdks/ats/README.md#listatsscorecards)
- [atsPatchAtsActivity](docs/sdks/ats/README.md#patchatsactivity)
- [atsPatchAtsApplication](docs/sdks/ats/README.md#patchatsapplication)
- [atsPatchAtsCandidate](docs/sdks/ats/README.md#patchatscandidate)
- [atsPatchAtsDocument](docs/sdks/ats/README.md#patchatsdocument)
- [atsPatchAtsInterview](docs/sdks/ats/README.md#patchatsinterview)
- [atsPatchAtsJob](docs/sdks/ats/README.md#patchatsjob)
- [atsPatchAtsScorecard](docs/sdks/ats/README.md#patchatsscorecard)
- [atsRemoveAtsActivity](docs/sdks/ats/README.md#removeatsactivity)
- [atsRemoveAtsApplication](docs/sdks/ats/README.md#removeatsapplication)
- [atsRemoveAtsCandidate](docs/sdks/ats/README.md#removeatscandidate)
- [atsRemoveAtsDocument](docs/sdks/ats/README.md#removeatsdocument)
- [atsRemoveAtsInterview](docs/sdks/ats/README.md#removeatsinterview)
- [atsRemoveAtsJob](docs/sdks/ats/README.md#removeatsjob)
- [atsRemoveAtsScorecard](docs/sdks/ats/README.md#removeatsscorecard)
- [atsUpdateAtsActivity](docs/sdks/ats/README.md#updateatsactivity)
- [atsUpdateAtsApplication](docs/sdks/ats/README.md#updateatsapplication)
- [atsUpdateAtsCandidate](docs/sdks/ats/README.md#updateatscandidate)
- [atsUpdateAtsDocument](docs/sdks/ats/README.md#updateatsdocument)
- [atsUpdateAtsInterview](docs/sdks/ats/README.md#updateatsinterview)
- [atsUpdateAtsJob](docs/sdks/ats/README.md#updateatsjob)
- [atsUpdateAtsScorecard](docs/sdks/ats/README.md#updateatsscorecard)
- [authGetUnifiedIntegrationAuth](docs/sdks/auth/README.md#getunifiedintegrationauth)
- [authGetUnifiedIntegrationLogin](docs/sdks/auth/README.md#getunifiedintegrationlogin)
- [callListUcCalls](docs/sdks/call/README.md#listuccalls)
- [candidateCreateAtsCandidate](docs/sdks/candidate/README.md#createatscandidate)
- [candidateGetAtsCandidate](docs/sdks/candidate/README.md#getatscandidate)
- [candidateListAtsCandidates](docs/sdks/candidate/README.md#listatscandidates)
- [candidatePatchAtsCandidate](docs/sdks/candidate/README.md#patchatscandidate)
- [candidateRemoveAtsCandidate](docs/sdks/candidate/README.md#removeatscandidate)
- [candidateUpdateAtsCandidate](docs/sdks/candidate/README.md#updateatscandidate)
- [channelGetMessagingChannel](docs/sdks/channel/README.md#getmessagingchannel)
- [channelListMessagingChannels](docs/sdks/channel/README.md#listmessagingchannels)
- [collectionCreateCommerceCollection](docs/sdks/collection/README.md#createcommercecollection)
- [collectionGetCommerceCollection](docs/sdks/collection/README.md#getcommercecollection)
- [collectionListCommerceCollections](docs/sdks/collection/README.md#listcommercecollections)
- [collectionPatchCommerceCollection](docs/sdks/collection/README.md#patchcommercecollection)
- [collectionRemoveCommerceCollection](docs/sdks/collection/README.md#removecommercecollection)
- [collectionUpdateCommerceCollection](docs/sdks/collection/README.md#updatecommercecollection)
- [commerceCreateCommerceCollection](docs/sdks/commerce/README.md#createcommercecollection)
- [commerceCreateCommerceInventory](docs/sdks/commerce/README.md#createcommerceinventory)
- [commerceCreateCommerceItem](docs/sdks/commerce/README.md#createcommerceitem)
- [commerceCreateCommerceLocation](docs/sdks/commerce/README.md#createcommercelocation)
- [commerceGetCommerceCollection](docs/sdks/commerce/README.md#getcommercecollection)
- [commerceGetCommerceInventory](docs/sdks/commerce/README.md#getcommerceinventory)
- [commerceGetCommerceItem](docs/sdks/commerce/README.md#getcommerceitem)
- [commerceGetCommerceLocation](docs/sdks/commerce/README.md#getcommercelocation)
- [commerceListCommerceCollections](docs/sdks/commerce/README.md#listcommercecollections)
- [commerceListCommerceInventories](docs/sdks/commerce/README.md#listcommerceinventories)
- [commerceListCommerceItems](docs/sdks/commerce/README.md#listcommerceitems)
- [commerceListCommerceLocations](docs/sdks/commerce/README.md#listcommercelocations)
- [commercePatchCommerceCollection](docs/sdks/commerce/README.md#patchcommercecollection)
- [commercePatchCommerceInventory](docs/sdks/commerce/README.md#patchcommerceinventory)
- [commercePatchCommerceItem](docs/sdks/commerce/README.md#patchcommerceitem)
- [commercePatchCommerceLocation](docs/sdks/commerce/README.md#patchcommercelocation)
- [commerceRemoveCommerceCollection](docs/sdks/commerce/README.md#removecommercecollection)
- [commerceRemoveCommerceInventory](docs/sdks/commerce/README.md#removecommerceinventory)
- [commerceRemoveCommerceItem](docs/sdks/commerce/README.md#removecommerceitem)
- [commerceRemoveCommerceLocation](docs/sdks/commerce/README.md#removecommercelocation)
- [commerceUpdateCommerceCollection](docs/sdks/commerce/README.md#updatecommercecollection)
- [commerceUpdateCommerceInventory](docs/sdks/commerce/README.md#updatecommerceinventory)
- [commerceUpdateCommerceItem](docs/sdks/commerce/README.md#updatecommerceitem)
- [commerceUpdateCommerceLocation](docs/sdks/commerce/README.md#updatecommercelocation)
- [companyCreateCrmCompany](docs/sdks/company/README.md#createcrmcompany)
- [companyCreateHrisCompany](docs/sdks/company/README.md#createhriscompany)
- [companyGetAtsCompany](docs/sdks/company/README.md#getatscompany)
- [companyGetCrmCompany](docs/sdks/company/README.md#getcrmcompany)
- [companyGetHrisCompany](docs/sdks/company/README.md#gethriscompany)
- [companyListAtsCompanies](docs/sdks/company/README.md#listatscompanies)
- [companyListCrmCompanies](docs/sdks/company/README.md#listcrmcompanies)
- [companyListEnrichCompanies](docs/sdks/company/README.md#listenrichcompanies)
- [companyListHrisCompanies](docs/sdks/company/README.md#listhriscompanies)
- [companyPatchCrmCompany](docs/sdks/company/README.md#patchcrmcompany)
- [companyPatchHrisCompany](docs/sdks/company/README.md#patchhriscompany)
- [companyRemoveCrmCompany](docs/sdks/company/README.md#removecrmcompany)
- [companyRemoveHrisCompany](docs/sdks/company/README.md#removehriscompany)
- [companyUpdateCrmCompany](docs/sdks/company/README.md#updatecrmcompany)
- [companyUpdateHrisCompany](docs/sdks/company/README.md#updatehriscompany)
- [connectionCreateUnifiedConnection](docs/sdks/connection/README.md#createunifiedconnection)
- [connectionGetUnifiedConnection](docs/sdks/connection/README.md#getunifiedconnection)
- [connectionListUnifiedConnections](docs/sdks/connection/README.md#listunifiedconnections)
- [connectionPatchUnifiedConnection](docs/sdks/connection/README.md#patchunifiedconnection)
- [connectionRemoveUnifiedConnection](docs/sdks/connection/README.md#removeunifiedconnection)
- [connectionUpdateUnifiedConnection](docs/sdks/connection/README.md#updateunifiedconnection)
- [contactCreateAccountingContact](docs/sdks/contact/README.md#createaccountingcontact)
- [contactCreateCrmContact](docs/sdks/contact/README.md#createcrmcontact)
- [contactCreateUcContact](docs/sdks/contact/README.md#createuccontact)
- [contactGetAccountingContact](docs/sdks/contact/README.md#getaccountingcontact)
- [contactGetCrmContact](docs/sdks/contact/README.md#getcrmcontact)
- [contactGetUcContact](docs/sdks/contact/README.md#getuccontact)
- [contactListAccountingContacts](docs/sdks/contact/README.md#listaccountingcontacts)
- [contactListCrmContacts](docs/sdks/contact/README.md#listcrmcontacts)
- [contactListUcContacts](docs/sdks/contact/README.md#listuccontacts)
- [contactPatchAccountingContact](docs/sdks/contact/README.md#patchaccountingcontact)
- [contactPatchCrmContact](docs/sdks/contact/README.md#patchcrmcontact)
- [contactPatchUcContact](docs/sdks/contact/README.md#patchuccontact)
- [contactRemoveAccountingContact](docs/sdks/contact/README.md#removeaccountingcontact)
- [contactRemoveCrmContact](docs/sdks/contact/README.md#removecrmcontact)
- [contactRemoveUcContact](docs/sdks/contact/README.md#removeuccontact)
- [contactUpdateAccountingContact](docs/sdks/contact/README.md#updateaccountingcontact)
- [contactUpdateCrmContact](docs/sdks/contact/README.md#updatecrmcontact)
- [contactUpdateUcContact](docs/sdks/contact/README.md#updateuccontact)
- [crmCreateCrmCompany](docs/sdks/crm/README.md#createcrmcompany)
- [crmCreateCrmContact](docs/sdks/crm/README.md#createcrmcontact)
- [crmCreateCrmDeal](docs/sdks/crm/README.md#createcrmdeal)
- [crmCreateCrmEvent](docs/sdks/crm/README.md#createcrmevent)
- [crmCreateCrmLead](docs/sdks/crm/README.md#createcrmlead)
- [crmCreateCrmPipeline](docs/sdks/crm/README.md#createcrmpipeline)
- [crmGetCrmCompany](docs/sdks/crm/README.md#getcrmcompany)
- [crmGetCrmContact](docs/sdks/crm/README.md#getcrmcontact)
- [crmGetCrmDeal](docs/sdks/crm/README.md#getcrmdeal)
- [crmGetCrmEvent](docs/sdks/crm/README.md#getcrmevent)
- [crmGetCrmLead](docs/sdks/crm/README.md#getcrmlead)
- [crmGetCrmPipeline](docs/sdks/crm/README.md#getcrmpipeline)
- [crmListCrmCompanies](docs/sdks/crm/README.md#listcrmcompanies)
- [crmListCrmContacts](docs/sdks/crm/README.md#listcrmcontacts)
- [crmListCrmDeals](docs/sdks/crm/README.md#listcrmdeals)
- [crmListCrmEvents](docs/sdks/crm/README.md#listcrmevents)
- [crmListCrmLeads](docs/sdks/crm/README.md#listcrmleads)
- [crmListCrmPipelines](docs/sdks/crm/README.md#listcrmpipelines)
- [crmPatchCrmCompany](docs/sdks/crm/README.md#patchcrmcompany)
- [crmPatchCrmContact](docs/sdks/crm/README.md#patchcrmcontact)
- [crmPatchCrmDeal](docs/sdks/crm/README.md#patchcrmdeal)
- [crmPatchCrmEvent](docs/sdks/crm/README.md#patchcrmevent)
- [crmPatchCrmLead](docs/sdks/crm/README.md#patchcrmlead)
- [crmPatchCrmPipeline](docs/sdks/crm/README.md#patchcrmpipeline)
- [crmRemoveCrmCompany](docs/sdks/crm/README.md#removecrmcompany)
- [crmRemoveCrmContact](docs/sdks/crm/README.md#removecrmcontact)
- [crmRemoveCrmDeal](docs/sdks/crm/README.md#removecrmdeal)
- [crmRemoveCrmEvent](docs/sdks/crm/README.md#removecrmevent)
- [crmRemoveCrmLead](docs/sdks/crm/README.md#removecrmlead)
- [crmRemoveCrmPipeline](docs/sdks/crm/README.md#removecrmpipeline)
- [crmUpdateCrmCompany](docs/sdks/crm/README.md#updatecrmcompany)
- [crmUpdateCrmContact](docs/sdks/crm/README.md#updatecrmcontact)
- [crmUpdateCrmDeal](docs/sdks/crm/README.md#updatecrmdeal)
- [crmUpdateCrmEvent](docs/sdks/crm/README.md#updatecrmevent)
- [crmUpdateCrmLead](docs/sdks/crm/README.md#updatecrmlead)
- [crmUpdateCrmPipeline](docs/sdks/crm/README.md#updatecrmpipeline)
- [customerCreateTicketingCustomer](docs/sdks/customer/README.md#createticketingcustomer)
- [customerGetTicketingCustomer](docs/sdks/customer/README.md#getticketingcustomer)
- [customerListTicketingCustomers](docs/sdks/customer/README.md#listticketingcustomers)
- [customerPatchTicketingCustomer](docs/sdks/customer/README.md#patchticketingcustomer)
- [customerRemoveTicketingCustomer](docs/sdks/customer/README.md#removeticketingcustomer)
- [customerUpdateTicketingCustomer](docs/sdks/customer/README.md#updateticketingcustomer)
- [dealCreateCrmDeal](docs/sdks/deal/README.md#createcrmdeal)
- [dealGetCrmDeal](docs/sdks/deal/README.md#getcrmdeal)
- [dealListCrmDeals](docs/sdks/deal/README.md#listcrmdeals)
- [dealPatchCrmDeal](docs/sdks/deal/README.md#patchcrmdeal)
- [dealRemoveCrmDeal](docs/sdks/deal/README.md#removecrmdeal)
- [dealUpdateCrmDeal](docs/sdks/deal/README.md#updatecrmdeal)
- [documentCreateAtsDocument](docs/sdks/document/README.md#createatsdocument)
- [documentGetAtsDocument](docs/sdks/document/README.md#getatsdocument)
- [documentListAtsDocuments](docs/sdks/document/README.md#listatsdocuments)
- [documentPatchAtsDocument](docs/sdks/document/README.md#patchatsdocument)
- [documentRemoveAtsDocument](docs/sdks/document/README.md#removeatsdocument)
- [documentUpdateAtsDocument](docs/sdks/document/README.md#updateatsdocument)
- [employeeCreateHrisEmployee](docs/sdks/employee/README.md#createhrisemployee)
- [employeeGetHrisEmployee](docs/sdks/employee/README.md#gethrisemployee)
- [employeeListHrisEmployees](docs/sdks/employee/README.md#listhrisemployees)
- [employeePatchHrisEmployee](docs/sdks/employee/README.md#patchhrisemployee)
- [employeeRemoveHrisEmployee](docs/sdks/employee/README.md#removehrisemployee)
- [employeeUpdateHrisEmployee](docs/sdks/employee/README.md#updatehrisemployee)
- [enrichListEnrichCompanies](docs/sdks/enrich/README.md#listenrichcompanies)
- [enrichListEnrichPeople](docs/sdks/enrich/README.md#listenrichpeople)
- [eventCreateCrmEvent](docs/sdks/event/README.md#createcrmevent)
- [eventGetCrmEvent](docs/sdks/event/README.md#getcrmevent)
- [eventListCrmEvents](docs/sdks/event/README.md#listcrmevents)
- [eventPatchCrmEvent](docs/sdks/event/README.md#patchcrmevent)
- [eventRemoveCrmEvent](docs/sdks/event/README.md#removecrmevent)
- [eventUpdateCrmEvent](docs/sdks/event/README.md#updatecrmevent)
- [fileCreateStorageFile](docs/sdks/file/README.md#createstoragefile)
- [fileGetStorageFile](docs/sdks/file/README.md#getstoragefile)
- [fileListStorageFiles](docs/sdks/file/README.md#liststoragefiles)
- [filePatchStorageFile](docs/sdks/file/README.md#patchstoragefile)
- [fileRemoveStorageFile](docs/sdks/file/README.md#removestoragefile)
- [fileUpdateStorageFile](docs/sdks/file/README.md#updatestoragefile)
- [genaiCreateGenaiPrompt](docs/sdks/genai/README.md#creategenaiprompt)
- [genaiListGenaiModels](docs/sdks/genai/README.md#listgenaimodels)
- [groupCreateHrisGroup](docs/sdks/group/README.md#createhrisgroup)
- [groupGetHrisGroup](docs/sdks/group/README.md#gethrisgroup)
- [groupListHrisGroups](docs/sdks/group/README.md#listhrisgroups)
- [groupPatchHrisGroup](docs/sdks/group/README.md#patchhrisgroup)
- [groupRemoveHrisGroup](docs/sdks/group/README.md#removehrisgroup)
- [groupUpdateHrisGroup](docs/sdks/group/README.md#updatehrisgroup)
- [hrisCreateHrisCompany](docs/sdks/hris/README.md#createhriscompany)
- [hrisCreateHrisEmployee](docs/sdks/hris/README.md#createhrisemployee)
- [hrisCreateHrisGroup](docs/sdks/hris/README.md#createhrisgroup)
- [hrisCreateHrisLocation](docs/sdks/hris/README.md#createhrislocation)
- [hrisGetHrisCompany](docs/sdks/hris/README.md#gethriscompany)
- [hrisGetHrisEmployee](docs/sdks/hris/README.md#gethrisemployee)
- [hrisGetHrisGroup](docs/sdks/hris/README.md#gethrisgroup)
- [hrisGetHrisLocation](docs/sdks/hris/README.md#gethrislocation)
- [hrisGetHrisPayslip](docs/sdks/hris/README.md#gethrispayslip)
- [hrisGetHrisTimeoff](docs/sdks/hris/README.md#gethristimeoff)
- [hrisListHrisCompanies](docs/sdks/hris/README.md#listhriscompanies)
- [hrisListHrisEmployees](docs/sdks/hris/README.md#listhrisemployees)
- [hrisListHrisGroups](docs/sdks/hris/README.md#listhrisgroups)
- [hrisListHrisLocations](docs/sdks/hris/README.md#listhrislocations)
- [hrisListHrisPayslips](docs/sdks/hris/README.md#listhrispayslips)
- [hrisListHrisTimeoffs](docs/sdks/hris/README.md#listhristimeoffs)
- [hrisPatchHrisCompany](docs/sdks/hris/README.md#patchhriscompany)
- [hrisPatchHrisEmployee](docs/sdks/hris/README.md#patchhrisemployee)
- [hrisPatchHrisGroup](docs/sdks/hris/README.md#patchhrisgroup)
- [hrisPatchHrisLocation](docs/sdks/hris/README.md#patchhrislocation)
- [hrisRemoveHrisCompany](docs/sdks/hris/README.md#removehriscompany)
- [hrisRemoveHrisEmployee](docs/sdks/hris/README.md#removehrisemployee)
- [hrisRemoveHrisGroup](docs/sdks/hris/README.md#removehrisgroup)
- [hrisRemoveHrisLocation](docs/sdks/hris/README.md#removehrislocation)
- [hrisUpdateHrisCompany](docs/sdks/hris/README.md#updatehriscompany)
- [hrisUpdateHrisEmployee](docs/sdks/hris/README.md#updatehrisemployee)
- [hrisUpdateHrisGroup](docs/sdks/hris/README.md#updatehrisgroup)
- [hrisUpdateHrisLocation](docs/sdks/hris/README.md#updatehrislocation)
- [integrationGetUnifiedIntegrationAuth](docs/sdks/integration/README.md#getunifiedintegrationauth)
- [integrationListUnifiedIntegrationWorkspaces](docs/sdks/integration/README.md#listunifiedintegrationworkspaces)
- [integrationListUnifiedIntegrations](docs/sdks/integration/README.md#listunifiedintegrations)
- [interviewCreateAtsInterview](docs/sdks/interview/README.md#createatsinterview)
- [interviewGetAtsInterview](docs/sdks/interview/README.md#getatsinterview)
- [interviewListAtsInterviews](docs/sdks/interview/README.md#listatsinterviews)
- [interviewPatchAtsInterview](docs/sdks/interview/README.md#patchatsinterview)
- [interviewRemoveAtsInterview](docs/sdks/interview/README.md#removeatsinterview)
- [interviewUpdateAtsInterview](docs/sdks/interview/README.md#updateatsinterview)
- [inventoryCreateCommerceInventory](docs/sdks/inventory/README.md#createcommerceinventory)
- [inventoryGetCommerceInventory](docs/sdks/inventory/README.md#getcommerceinventory)
- [inventoryListCommerceInventories](docs/sdks/inventory/README.md#listcommerceinventories)
- [inventoryPatchCommerceInventory](docs/sdks/inventory/README.md#patchcommerceinventory)
- [inventoryRemoveCommerceInventory](docs/sdks/inventory/README.md#removecommerceinventory)
- [inventoryUpdateCommerceInventory](docs/sdks/inventory/README.md#updatecommerceinventory)
- [invoiceCreateAccountingInvoice](docs/sdks/invoice/README.md#createaccountinginvoice)
- [invoiceGetAccountingInvoice](docs/sdks/invoice/README.md#getaccountinginvoice)
- [invoiceListAccountingInvoices](docs/sdks/invoice/README.md#listaccountinginvoices)
- [invoicePatchAccountingInvoice](docs/sdks/invoice/README.md#patchaccountinginvoice)
- [invoiceRemoveAccountingInvoice](docs/sdks/invoice/README.md#removeaccountinginvoice)
- [invoiceUpdateAccountingInvoice](docs/sdks/invoice/README.md#updateaccountinginvoice)
- [issueListUnifiedIssues](docs/sdks/issue/README.md#listunifiedissues)
- [itemCreateCommerceItem](docs/sdks/item/README.md#createcommerceitem)
- [itemGetCommerceItem](docs/sdks/item/README.md#getcommerceitem)
- [itemListCommerceItems](docs/sdks/item/README.md#listcommerceitems)
- [itemPatchCommerceItem](docs/sdks/item/README.md#patchcommerceitem)
- [itemRemoveCommerceItem](docs/sdks/item/README.md#removecommerceitem)
- [itemUpdateCommerceItem](docs/sdks/item/README.md#updatecommerceitem)
- [jobCreateAtsJob](docs/sdks/job/README.md#createatsjob)
- [jobGetAtsJob](docs/sdks/job/README.md#getatsjob)
- [jobListAtsJobs](docs/sdks/job/README.md#listatsjobs)
- [jobPatchAtsJob](docs/sdks/job/README.md#patchatsjob)
- [jobRemoveAtsJob](docs/sdks/job/README.md#removeatsjob)
- [jobUpdateAtsJob](docs/sdks/job/README.md#updateatsjob)
- [journalCreateAccountingJournal](docs/sdks/journal/README.md#createaccountingjournal)
- [journalGetAccountingJournal](docs/sdks/journal/README.md#getaccountingjournal)
- [journalListAccountingJournals](docs/sdks/journal/README.md#listaccountingjournals)
- [journalPatchAccountingJournal](docs/sdks/journal/README.md#patchaccountingjournal)
- [journalRemoveAccountingJournal](docs/sdks/journal/README.md#removeaccountingjournal)
- [journalUpdateAccountingJournal](docs/sdks/journal/README.md#updateaccountingjournal)
- [kmsCreateKmsPage](docs/sdks/kms/README.md#createkmspage)
- [kmsCreateKmsSpace](docs/sdks/kms/README.md#createkmsspace)
- [kmsGetKmsPage](docs/sdks/kms/README.md#getkmspage)
- [kmsGetKmsSpace](docs/sdks/kms/README.md#getkmsspace)
- [kmsListKmsPages](docs/sdks/kms/README.md#listkmspages)
- [kmsListKmsSpaces](docs/sdks/kms/README.md#listkmsspaces)
- [kmsPatchKmsPage](docs/sdks/kms/README.md#patchkmspage)
- [kmsPatchKmsSpace](docs/sdks/kms/README.md#patchkmsspace)
- [kmsRemoveKmsPage](docs/sdks/kms/README.md#removekmspage)
- [kmsRemoveKmsSpace](docs/sdks/kms/README.md#removekmsspace)
- [kmsUpdateKmsPage](docs/sdks/kms/README.md#updatekmspage)
- [kmsUpdateKmsSpace](docs/sdks/kms/README.md#updatekmsspace)
- [leadCreateCrmLead](docs/sdks/lead/README.md#createcrmlead)
- [leadGetCrmLead](docs/sdks/lead/README.md#getcrmlead)
- [leadListCrmLeads](docs/sdks/lead/README.md#listcrmleads)
- [leadPatchCrmLead](docs/sdks/lead/README.md#patchcrmlead)
- [leadRemoveCrmLead](docs/sdks/lead/README.md#removecrmlead)
- [leadUpdateCrmLead](docs/sdks/lead/README.md#updatecrmlead)
- [linkCreatePaymentLink](docs/sdks/link/README.md#createpaymentlink)
- [linkGetPaymentLink](docs/sdks/link/README.md#getpaymentlink)
- [linkListPaymentLinks](docs/sdks/link/README.md#listpaymentlinks)
- [linkPatchPaymentLink](docs/sdks/link/README.md#patchpaymentlink)
- [linkRemovePaymentLink](docs/sdks/link/README.md#removepaymentlink)
- [linkUpdatePaymentLink](docs/sdks/link/README.md#updatepaymentlink)
- [listCreateMartechList](docs/sdks/list/README.md#createmartechlist)
- [listGetMartechList](docs/sdks/list/README.md#getmartechlist)
- [listListMartechLists](docs/sdks/list/README.md#listmartechlists)
- [listPatchMartechList](docs/sdks/list/README.md#patchmartechlist)
- [listRemoveMartechList](docs/sdks/list/README.md#removemartechlist)
- [listUpdateMartechList](docs/sdks/list/README.md#updatemartechlist)
- [locationCreateCommerceLocation](docs/sdks/location/README.md#createcommercelocation)
- [locationCreateHrisLocation](docs/sdks/location/README.md#createhrislocation)
- [locationGetCommerceLocation](docs/sdks/location/README.md#getcommercelocation)
- [locationGetHrisLocation](docs/sdks/location/README.md#gethrislocation)
- [locationListCommerceLocations](docs/sdks/location/README.md#listcommercelocations)
- [locationListHrisLocations](docs/sdks/location/README.md#listhrislocations)
- [locationPatchCommerceLocation](docs/sdks/location/README.md#patchcommercelocation)
- [locationPatchHrisLocation](docs/sdks/location/README.md#patchhrislocation)
- [locationRemoveCommerceLocation](docs/sdks/location/README.md#removecommercelocation)
- [locationRemoveHrisLocation](docs/sdks/location/README.md#removehrislocation)
- [locationUpdateCommerceLocation](docs/sdks/location/README.md#updatecommercelocation)
- [locationUpdateHrisLocation](docs/sdks/location/README.md#updatehrislocation)
- [loginGetUnifiedIntegrationLogin](docs/sdks/login/README.md#getunifiedintegrationlogin)
- [martechCreateMartechList](docs/sdks/martech/README.md#createmartechlist)
- [martechCreateMartechMember](docs/sdks/martech/README.md#createmartechmember)
- [martechGetMartechList](docs/sdks/martech/README.md#getmartechlist)
- [martechGetMartechMember](docs/sdks/martech/README.md#getmartechmember)
- [martechListMartechLists](docs/sdks/martech/README.md#listmartechlists)
- [martechListMartechMembers](docs/sdks/martech/README.md#listmartechmembers)
- [martechPatchMartechList](docs/sdks/martech/README.md#patchmartechlist)
- [martechPatchMartechMember](docs/sdks/martech/README.md#patchmartechmember)
- [martechRemoveMartechList](docs/sdks/martech/README.md#removemartechlist)
- [martechRemoveMartechMember](docs/sdks/martech/README.md#removemartechmember)
- [martechUpdateMartechList](docs/sdks/martech/README.md#updatemartechlist)
- [martechUpdateMartechMember](docs/sdks/martech/README.md#updatemartechmember)
- [memberCreateMartechMember](docs/sdks/member/README.md#createmartechmember)
- [memberGetMartechMember](docs/sdks/member/README.md#getmartechmember)
- [memberListMartechMembers](docs/sdks/member/README.md#listmartechmembers)
- [memberPatchMartechMember](docs/sdks/member/README.md#patchmartechmember)
- [memberRemoveMartechMember](docs/sdks/member/README.md#removemartechmember)
- [memberUpdateMartechMember](docs/sdks/member/README.md#updatemartechmember)
- [messageCreateMessagingMessage](docs/sdks/message/README.md#createmessagingmessage)
- [messageGetMessagingMessage](docs/sdks/message/README.md#getmessagingmessage)
- [messageListMessagingMessages](docs/sdks/message/README.md#listmessagingmessages)
- [messagePatchMessagingMessage](docs/sdks/message/README.md#patchmessagingmessage)
- [messageRemoveMessagingMessage](docs/sdks/message/README.md#removemessagingmessage)
- [messageUpdateMessagingMessage](docs/sdks/message/README.md#updatemessagingmessage)
- [messagingCreateMessagingMessage](docs/sdks/messaging/README.md#createmessagingmessage)
- [messagingGetMessagingChannel](docs/sdks/messaging/README.md#getmessagingchannel)
- [messagingGetMessagingMessage](docs/sdks/messaging/README.md#getmessagingmessage)
- [messagingListMessagingChannels](docs/sdks/messaging/README.md#listmessagingchannels)
- [messagingListMessagingMessages](docs/sdks/messaging/README.md#listmessagingmessages)
- [messagingPatchMessagingMessage](docs/sdks/messaging/README.md#patchmessagingmessage)
- [messagingRemoveMessagingMessage](docs/sdks/messaging/README.md#removemessagingmessage)
- [messagingUpdateMessagingMessage](docs/sdks/messaging/README.md#updatemessagingmessage)
- [modelListGenaiModels](docs/sdks/model/README.md#listgenaimodels)
- [noteCreateTicketingNote](docs/sdks/note/README.md#createticketingnote)
- [noteGetTicketingNote](docs/sdks/note/README.md#getticketingnote)
- [noteListTicketingNotes](docs/sdks/note/README.md#listticketingnotes)
- [notePatchTicketingNote](docs/sdks/note/README.md#patchticketingnote)
- [noteRemoveTicketingNote](docs/sdks/note/README.md#removeticketingnote)
- [noteUpdateTicketingNote](docs/sdks/note/README.md#updateticketingnote)
- [organizationGetAccountingOrganization](docs/sdks/organization/README.md#getaccountingorganization)
- [organizationListAccountingOrganizations](docs/sdks/organization/README.md#listaccountingorganizations)
- [pageCreateKmsPage](docs/sdks/page/README.md#createkmspage)
- [pageGetKmsPage](docs/sdks/page/README.md#getkmspage)
- [pageListKmsPages](docs/sdks/page/README.md#listkmspages)
- [pagePatchKmsPage](docs/sdks/page/README.md#patchkmspage)
- [pageRemoveKmsPage](docs/sdks/page/README.md#removekmspage)
- [pageUpdateKmsPage](docs/sdks/page/README.md#updatekmspage)
- [passthroughCreatePassthrough](docs/sdks/passthrough/README.md#createpassthrough)
- [passthroughListPassthroughs](docs/sdks/passthrough/README.md#listpassthroughs)
- [passthroughPatchPassthrough](docs/sdks/passthrough/README.md#patchpassthrough)
- [passthroughRemovePassthrough](docs/sdks/passthrough/README.md#removepassthrough)
- [passthroughUpdatePassthrough](docs/sdks/passthrough/README.md#updatepassthrough)
- [paymentCreatePaymentLink](docs/sdks/payment/README.md#createpaymentlink)
- [paymentCreatePaymentPayment](docs/sdks/payment/README.md#createpaymentpayment)
- [paymentGetPaymentLink](docs/sdks/payment/README.md#getpaymentlink)
- [paymentGetPaymentPayment](docs/sdks/payment/README.md#getpaymentpayment)
- [paymentGetPaymentPayout](docs/sdks/payment/README.md#getpaymentpayout)
- [paymentGetPaymentRefund](docs/sdks/payment/README.md#getpaymentrefund)
- [paymentListPaymentLinks](docs/sdks/payment/README.md#listpaymentlinks)
- [paymentListPaymentPayments](docs/sdks/payment/README.md#listpaymentpayments)
- [paymentListPaymentPayouts](docs/sdks/payment/README.md#listpaymentpayouts)
- [paymentListPaymentRefunds](docs/sdks/payment/README.md#listpaymentrefunds)
- [paymentPatchPaymentLink](docs/sdks/payment/README.md#patchpaymentlink)
- [paymentPatchPaymentPayment](docs/sdks/payment/README.md#patchpaymentpayment)
- [paymentRemovePaymentLink](docs/sdks/payment/README.md#removepaymentlink)
- [paymentRemovePaymentPayment](docs/sdks/payment/README.md#removepaymentpayment)
- [paymentUpdatePaymentLink](docs/sdks/payment/README.md#updatepaymentlink)
- [paymentUpdatePaymentPayment](docs/sdks/payment/README.md#updatepaymentpayment)
- [payoutGetPaymentPayout](docs/sdks/payout/README.md#getpaymentpayout)
- [payoutListPaymentPayouts](docs/sdks/payout/README.md#listpaymentpayouts)
- [payslipGetHrisPayslip](docs/sdks/payslip/README.md#gethrispayslip)
- [payslipListHrisPayslips](docs/sdks/payslip/README.md#listhrispayslips)
- [personListEnrichPeople](docs/sdks/person/README.md#listenrichpeople)
- [pipelineCreateCrmPipeline](docs/sdks/pipeline/README.md#createcrmpipeline)
- [pipelineGetCrmPipeline](docs/sdks/pipeline/README.md#getcrmpipeline)
- [pipelineListCrmPipelines](docs/sdks/pipeline/README.md#listcrmpipelines)
- [pipelinePatchCrmPipeline](docs/sdks/pipeline/README.md#patchcrmpipeline)
- [pipelineRemoveCrmPipeline](docs/sdks/pipeline/README.md#removecrmpipeline)
- [pipelineUpdateCrmPipeline](docs/sdks/pipeline/README.md#updatecrmpipeline)
- [projectCreateTaskProject](docs/sdks/project/README.md#createtaskproject)
- [projectGetTaskProject](docs/sdks/project/README.md#gettaskproject)
- [projectListTaskProjects](docs/sdks/project/README.md#listtaskprojects)
- [projectPatchTaskProject](docs/sdks/project/README.md#patchtaskproject)
- [projectRemoveTaskProject](docs/sdks/project/README.md#removetaskproject)
- [projectUpdateTaskProject](docs/sdks/project/README.md#updatetaskproject)
- [promptCreateGenaiPrompt](docs/sdks/prompt/README.md#creategenaiprompt)
- [refundGetPaymentRefund](docs/sdks/refund/README.md#getpaymentrefund)
- [refundListPaymentRefunds](docs/sdks/refund/README.md#listpaymentrefunds)
- [scorecardCreateAtsScorecard](docs/sdks/scorecard/README.md#createatsscorecard)
- [scorecardGetAtsScorecard](docs/sdks/scorecard/README.md#getatsscorecard)
- [scorecardListAtsScorecards](docs/sdks/scorecard/README.md#listatsscorecards)
- [scorecardPatchAtsScorecard](docs/sdks/scorecard/README.md#patchatsscorecard)
- [scorecardRemoveAtsScorecard](docs/sdks/scorecard/README.md#removeatsscorecard)
- [scorecardUpdateAtsScorecard](docs/sdks/scorecard/README.md#updateatsscorecard)
- [spaceCreateKmsSpace](docs/sdks/space/README.md#createkmsspace)
- [spaceGetKmsSpace](docs/sdks/space/README.md#getkmsspace)
- [spaceListKmsSpaces](docs/sdks/space/README.md#listkmsspaces)
- [spacePatchKmsSpace](docs/sdks/space/README.md#patchkmsspace)
- [spaceRemoveKmsSpace](docs/sdks/space/README.md#removekmsspace)
- [spaceUpdateKmsSpace](docs/sdks/space/README.md#updatekmsspace)
- [storageCreateStorageFile](docs/sdks/storage/README.md#createstoragefile)
- [storageGetStorageFile](docs/sdks/storage/README.md#getstoragefile)
- [storageListStorageFiles](docs/sdks/storage/README.md#liststoragefiles)
- [storagePatchStorageFile](docs/sdks/storage/README.md#patchstoragefile)
- [storageRemoveStorageFile](docs/sdks/storage/README.md#removestoragefile)
- [storageUpdateStorageFile](docs/sdks/storage/README.md#updatestoragefile)
- [taskCreateTaskProject](docs/sdks/task/README.md#createtaskproject)
- [taskCreateTaskTask](docs/sdks/task/README.md#createtasktask)
- [taskGetTaskProject](docs/sdks/task/README.md#gettaskproject)
- [taskGetTaskTask](docs/sdks/task/README.md#gettasktask)
- [taskListTaskProjects](docs/sdks/task/README.md#listtaskprojects)
- [taskListTaskTasks](docs/sdks/task/README.md#listtasktasks)
- [taskPatchTaskProject](docs/sdks/task/README.md#patchtaskproject)
- [taskPatchTaskTask](docs/sdks/task/README.md#patchtasktask)
- [taskRemoveTaskProject](docs/sdks/task/README.md#removetaskproject)
- [taskRemoveTaskTask](docs/sdks/task/README.md#removetasktask)
- [taskUpdateTaskProject](docs/sdks/task/README.md#updatetaskproject)
- [taskUpdateTaskTask](docs/sdks/task/README.md#updatetasktask)
- [taxrateCreateAccountingTaxrate](docs/sdks/taxrate/README.md#createaccountingtaxrate)
- [taxrateGetAccountingTaxrate](docs/sdks/taxrate/README.md#getaccountingtaxrate)
- [taxrateListAccountingTaxrates](docs/sdks/taxrate/README.md#listaccountingtaxrates)
- [taxratePatchAccountingTaxrate](docs/sdks/taxrate/README.md#patchaccountingtaxrate)
- [taxrateRemoveAccountingTaxrate](docs/sdks/taxrate/README.md#removeaccountingtaxrate)
- [taxrateUpdateAccountingTaxrate](docs/sdks/taxrate/README.md#updateaccountingtaxrate)
- [ticketCreateTicketingTicket](docs/sdks/ticket/README.md#createticketingticket)
- [ticketGetTicketingTicket](docs/sdks/ticket/README.md#getticketingticket)
- [ticketListTicketingTickets](docs/sdks/ticket/README.md#listticketingtickets)
- [ticketPatchTicketingTicket](docs/sdks/ticket/README.md#patchticketingticket)
- [ticketRemoveTicketingTicket](docs/sdks/ticket/README.md#removeticketingticket)
- [ticketUpdateTicketingTicket](docs/sdks/ticket/README.md#updateticketingticket)
- [ticketingCreateTicketingCustomer](docs/sdks/ticketing/README.md#createticketingcustomer)
- [ticketingCreateTicketingNote](docs/sdks/ticketing/README.md#createticketingnote)
- [ticketingCreateTicketingTicket](docs/sdks/ticketing/README.md#createticketingticket)
- [ticketingGetTicketingCustomer](docs/sdks/ticketing/README.md#getticketingcustomer)
- [ticketingGetTicketingNote](docs/sdks/ticketing/README.md#getticketingnote)
- [ticketingGetTicketingTicket](docs/sdks/ticketing/README.md#getticketingticket)
- [ticketingListTicketingCustomers](docs/sdks/ticketing/README.md#listticketingcustomers)
- [ticketingListTicketingNotes](docs/sdks/ticketing/README.md#listticketingnotes)
- [ticketingListTicketingTickets](docs/sdks/ticketing/README.md#listticketingtickets)
- [ticketingPatchTicketingCustomer](docs/sdks/ticketing/README.md#patchticketingcustomer)
- [ticketingPatchTicketingNote](docs/sdks/ticketing/README.md#patchticketingnote)
- [ticketingPatchTicketingTicket](docs/sdks/ticketing/README.md#patchticketingticket)
- [ticketingRemoveTicketingCustomer](docs/sdks/ticketing/README.md#removeticketingcustomer)
- [ticketingRemoveTicketingNote](docs/sdks/ticketing/README.md#removeticketingnote)
- [ticketingRemoveTicketingTicket](docs/sdks/ticketing/README.md#removeticketingticket)
- [ticketingUpdateTicketingCustomer](docs/sdks/ticketing/README.md#updateticketingcustomer)
- [ticketingUpdateTicketingNote](docs/sdks/ticketing/README.md#updateticketingnote)
- [ticketingUpdateTicketingTicket](docs/sdks/ticketing/README.md#updateticketingticket)
- [timeoffGetHrisTimeoff](docs/sdks/timeoff/README.md#gethristimeoff)
- [timeoffListHrisTimeoffs](docs/sdks/timeoff/README.md#listhristimeoffs)
- [transactionCreateAccountingTransaction](docs/sdks/transaction/README.md#createaccountingtransaction)
- [transactionGetAccountingTransaction](docs/sdks/transaction/README.md#getaccountingtransaction)
- [transactionListAccountingTransactions](docs/sdks/transaction/README.md#listaccountingtransactions)
- [transactionPatchAccountingTransaction](docs/sdks/transaction/README.md#patchaccountingtransaction)
- [transactionRemoveAccountingTransaction](docs/sdks/transaction/README.md#removeaccountingtransaction)
- [transactionUpdateAccountingTransaction](docs/sdks/transaction/README.md#updateaccountingtransaction)
- [ucCreateUcContact](docs/sdks/uc/README.md#createuccontact)
- [ucGetUcContact](docs/sdks/uc/README.md#getuccontact)
- [ucListUcCalls](docs/sdks/uc/README.md#listuccalls)
- [ucListUcContacts](docs/sdks/uc/README.md#listuccontacts)
- [ucPatchUcContact](docs/sdks/uc/README.md#patchuccontact)
- [ucRemoveUcContact](docs/sdks/uc/README.md#removeuccontact)
- [ucUpdateUcContact](docs/sdks/uc/README.md#updateuccontact)
- [unifiedCreateUnifiedConnection](docs/sdks/unified/README.md#createunifiedconnection)
- [unifiedCreateUnifiedWebhook](docs/sdks/unified/README.md#createunifiedwebhook)
- [unifiedGetUnifiedApicall](docs/sdks/unified/README.md#getunifiedapicall)
- [unifiedGetUnifiedConnection](docs/sdks/unified/README.md#getunifiedconnection)
- [unifiedGetUnifiedIntegrationAuth](docs/sdks/unified/README.md#getunifiedintegrationauth)
- [unifiedGetUnifiedWebhook](docs/sdks/unified/README.md#getunifiedwebhook)
- [unifiedListUnifiedApicalls](docs/sdks/unified/README.md#listunifiedapicalls)
- [unifiedListUnifiedConnections](docs/sdks/unified/README.md#listunifiedconnections)
- [unifiedListUnifiedIntegrationWorkspaces](docs/sdks/unified/README.md#listunifiedintegrationworkspaces)
- [unifiedListUnifiedIntegrations](docs/sdks/unified/README.md#listunifiedintegrations)
- [unifiedListUnifiedIssues](docs/sdks/unified/README.md#listunifiedissues)
- [unifiedListUnifiedWebhooks](docs/sdks/unified/README.md#listunifiedwebhooks)
- [unifiedPatchUnifiedConnection](docs/sdks/unified/README.md#patchunifiedconnection)
- [unifiedPatchUnifiedWebhookTrigger](docs/sdks/unified/README.md#patchunifiedwebhooktrigger)
- [unifiedRemoveUnifiedConnection](docs/sdks/unified/README.md#removeunifiedconnection)
- [unifiedRemoveUnifiedWebhook](docs/sdks/unified/README.md#removeunifiedwebhook)
- [unifiedUpdateUnifiedConnection](docs/sdks/unified/README.md#updateunifiedconnection)
- [unifiedUpdateUnifiedWebhookTrigger](docs/sdks/unified/README.md#updateunifiedwebhooktrigger)
- [webhookCreateUnifiedWebhook](docs/sdks/webhook/README.md#createunifiedwebhook)
- [webhookGetUnifiedWebhook](docs/sdks/webhook/README.md#getunifiedwebhook)
- [webhookListUnifiedWebhooks](docs/sdks/webhook/README.md#listunifiedwebhooks)
- [webhookPatchUnifiedWebhookTrigger](docs/sdks/webhook/README.md#patchunifiedwebhooktrigger)
- [webhookRemoveUnifiedWebhook](docs/sdks/webhook/README.md#removeunifiedwebhook)
- [webhookUpdateUnifiedWebhookTrigger](docs/sdks/webhook/README.md#updateunifiedwebhooktrigger)


</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->


