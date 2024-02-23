# Unified-to

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/unified-to/unified-typescript-sdk.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/unified-to/unified-typescript-sdk/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add https://github.com/unified-to/unified-typescript-sdk
```

### Yarn

```bash
yarn add https://github.com/unified-to/unified-typescript-sdk
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { UnifiedTo } from "unified-typescript-sdk";

async function run() {
    const sdk = new UnifiedTo({
        security: {
            jwt: "<YOUR_API_KEY_HERE>",
        },
    });

    const res = await sdk.accounting.createAccountingAccount({
        accountingAccount: {
            name: "<value>",
            raw: {
                key: "<value>",
            },
        },
        connectionId: "<value>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [accounting](docs/sdks/accounting/README.md)

* [createAccountingAccount](docs/sdks/accounting/README.md#createaccountingaccount) - Create an account
* [createAccountingContact](docs/sdks/accounting/README.md#createaccountingcontact) - Create a contact
* [createAccountingInvoice](docs/sdks/accounting/README.md#createaccountinginvoice) - Create a invoice
* [createAccountingPayment](docs/sdks/accounting/README.md#createaccountingpayment) - Create a payment
* [createAccountingTaxrate](docs/sdks/accounting/README.md#createaccountingtaxrate) - Create a taxrate
* [createAccountingTransaction](docs/sdks/accounting/README.md#createaccountingtransaction) - Create a transaction
* [getAccountingAccount](docs/sdks/accounting/README.md#getaccountingaccount) - Retrieve an account
* [getAccountingContact](docs/sdks/accounting/README.md#getaccountingcontact) - Retrieve a contact
* [getAccountingInvoice](docs/sdks/accounting/README.md#getaccountinginvoice) - Retrieve a invoice
* [getAccountingOrganization](docs/sdks/accounting/README.md#getaccountingorganization) - Retrieve an organization
* [getAccountingPayment](docs/sdks/accounting/README.md#getaccountingpayment) - Retrieve a payment
* [getAccountingPayout](docs/sdks/accounting/README.md#getaccountingpayout) - Retrieve a payout
* [getAccountingRefund](docs/sdks/accounting/README.md#getaccountingrefund) - Retrieve a refund
* [getAccountingTaxrate](docs/sdks/accounting/README.md#getaccountingtaxrate) - Retrieve a taxrate
* [getAccountingTransaction](docs/sdks/accounting/README.md#getaccountingtransaction) - Retrieve a transaction
* [listAccountingAccounts](docs/sdks/accounting/README.md#listaccountingaccounts) - List all accounts
* [listAccountingContacts](docs/sdks/accounting/README.md#listaccountingcontacts) - List all contacts
* [listAccountingInvoices](docs/sdks/accounting/README.md#listaccountinginvoices) - List all invoices
* [listAccountingOrganizations](docs/sdks/accounting/README.md#listaccountingorganizations) - List all organizations
* [listAccountingPayments](docs/sdks/accounting/README.md#listaccountingpayments) - List all payments
* [listAccountingPayouts](docs/sdks/accounting/README.md#listaccountingpayouts) - List all payouts
* [listAccountingRefunds](docs/sdks/accounting/README.md#listaccountingrefunds) - List all refunds
* [listAccountingTaxrates](docs/sdks/accounting/README.md#listaccountingtaxrates) - List all taxrates
* [listAccountingTransactions](docs/sdks/accounting/README.md#listaccountingtransactions) - List all transactions
* [patchAccountingAccount](docs/sdks/accounting/README.md#patchaccountingaccount) - Update an account
* [patchAccountingContact](docs/sdks/accounting/README.md#patchaccountingcontact) - Update a contact
* [patchAccountingInvoice](docs/sdks/accounting/README.md#patchaccountinginvoice) - Update a invoice
* [patchAccountingPayment](docs/sdks/accounting/README.md#patchaccountingpayment) - Update a payment
* [patchAccountingTaxrate](docs/sdks/accounting/README.md#patchaccountingtaxrate) - Update a taxrate
* [patchAccountingTransaction](docs/sdks/accounting/README.md#patchaccountingtransaction) - Update a transaction
* [removeAccountingAccount](docs/sdks/accounting/README.md#removeaccountingaccount) - Remove an account
* [removeAccountingContact](docs/sdks/accounting/README.md#removeaccountingcontact) - Remove a contact
* [removeAccountingInvoice](docs/sdks/accounting/README.md#removeaccountinginvoice) - Remove a invoice
* [removeAccountingPayment](docs/sdks/accounting/README.md#removeaccountingpayment) - Remove a payment
* [removeAccountingTaxrate](docs/sdks/accounting/README.md#removeaccountingtaxrate) - Remove a taxrate
* [removeAccountingTransaction](docs/sdks/accounting/README.md#removeaccountingtransaction) - Remove a transaction
* [updateAccountingAccount](docs/sdks/accounting/README.md#updateaccountingaccount) - Update an account
* [updateAccountingContact](docs/sdks/accounting/README.md#updateaccountingcontact) - Update a contact
* [updateAccountingInvoice](docs/sdks/accounting/README.md#updateaccountinginvoice) - Update a invoice
* [updateAccountingPayment](docs/sdks/accounting/README.md#updateaccountingpayment) - Update a payment
* [updateAccountingTaxrate](docs/sdks/accounting/README.md#updateaccountingtaxrate) - Update a taxrate
* [updateAccountingTransaction](docs/sdks/accounting/README.md#updateaccountingtransaction) - Update a transaction

### [account](docs/sdks/account/README.md)

* [createAccountingAccount](docs/sdks/account/README.md#createaccountingaccount) - Create an account
* [getAccountingAccount](docs/sdks/account/README.md#getaccountingaccount) - Retrieve an account
* [listAccountingAccounts](docs/sdks/account/README.md#listaccountingaccounts) - List all accounts
* [patchAccountingAccount](docs/sdks/account/README.md#patchaccountingaccount) - Update an account
* [removeAccountingAccount](docs/sdks/account/README.md#removeaccountingaccount) - Remove an account
* [updateAccountingAccount](docs/sdks/account/README.md#updateaccountingaccount) - Update an account

### [contact](docs/sdks/contact/README.md)

* [createAccountingContact](docs/sdks/contact/README.md#createaccountingcontact) - Create a contact
* [createCrmContact](docs/sdks/contact/README.md#createcrmcontact) - Create a contact
* [createUcContact](docs/sdks/contact/README.md#createuccontact) - Create a contact
* [getAccountingContact](docs/sdks/contact/README.md#getaccountingcontact) - Retrieve a contact
* [getCrmContact](docs/sdks/contact/README.md#getcrmcontact) - Retrieve a contact
* [getUcContact](docs/sdks/contact/README.md#getuccontact) - Retrieve a contact
* [listAccountingContacts](docs/sdks/contact/README.md#listaccountingcontacts) - List all contacts
* [listCrmContacts](docs/sdks/contact/README.md#listcrmcontacts) - List all contacts
* [listUcContacts](docs/sdks/contact/README.md#listuccontacts) - List all contacts
* [patchAccountingContact](docs/sdks/contact/README.md#patchaccountingcontact) - Update a contact
* [patchCrmContact](docs/sdks/contact/README.md#patchcrmcontact) - Update a contact
* [patchUcContact](docs/sdks/contact/README.md#patchuccontact) - Update a contact
* [removeAccountingContact](docs/sdks/contact/README.md#removeaccountingcontact) - Remove a contact
* [removeCrmContact](docs/sdks/contact/README.md#removecrmcontact) - Remove a contact
* [removeUcContact](docs/sdks/contact/README.md#removeuccontact) - Remove a contact
* [updateAccountingContact](docs/sdks/contact/README.md#updateaccountingcontact) - Update a contact
* [updateCrmContact](docs/sdks/contact/README.md#updatecrmcontact) - Update a contact
* [updateUcContact](docs/sdks/contact/README.md#updateuccontact) - Update a contact

### [invoice](docs/sdks/invoice/README.md)

* [createAccountingInvoice](docs/sdks/invoice/README.md#createaccountinginvoice) - Create a invoice
* [getAccountingInvoice](docs/sdks/invoice/README.md#getaccountinginvoice) - Retrieve a invoice
* [listAccountingInvoices](docs/sdks/invoice/README.md#listaccountinginvoices) - List all invoices
* [patchAccountingInvoice](docs/sdks/invoice/README.md#patchaccountinginvoice) - Update a invoice
* [removeAccountingInvoice](docs/sdks/invoice/README.md#removeaccountinginvoice) - Remove a invoice
* [updateAccountingInvoice](docs/sdks/invoice/README.md#updateaccountinginvoice) - Update a invoice

### [organization](docs/sdks/organization/README.md)

* [getAccountingOrganization](docs/sdks/organization/README.md#getaccountingorganization) - Retrieve an organization
* [listAccountingOrganizations](docs/sdks/organization/README.md#listaccountingorganizations) - List all organizations

### [payment](docs/sdks/payment/README.md)

* [createAccountingPayment](docs/sdks/payment/README.md#createaccountingpayment) - Create a payment
* [getAccountingPayment](docs/sdks/payment/README.md#getaccountingpayment) - Retrieve a payment
* [listAccountingPayments](docs/sdks/payment/README.md#listaccountingpayments) - List all payments
* [patchAccountingPayment](docs/sdks/payment/README.md#patchaccountingpayment) - Update a payment
* [removeAccountingPayment](docs/sdks/payment/README.md#removeaccountingpayment) - Remove a payment
* [updateAccountingPayment](docs/sdks/payment/README.md#updateaccountingpayment) - Update a payment

### [payout](docs/sdks/payout/README.md)

* [getAccountingPayout](docs/sdks/payout/README.md#getaccountingpayout) - Retrieve a payout
* [listAccountingPayouts](docs/sdks/payout/README.md#listaccountingpayouts) - List all payouts

### [refund](docs/sdks/refund/README.md)

* [getAccountingRefund](docs/sdks/refund/README.md#getaccountingrefund) - Retrieve a refund
* [listAccountingRefunds](docs/sdks/refund/README.md#listaccountingrefunds) - List all refunds

### [taxrate](docs/sdks/taxrate/README.md)

* [createAccountingTaxrate](docs/sdks/taxrate/README.md#createaccountingtaxrate) - Create a taxrate
* [getAccountingTaxrate](docs/sdks/taxrate/README.md#getaccountingtaxrate) - Retrieve a taxrate
* [listAccountingTaxrates](docs/sdks/taxrate/README.md#listaccountingtaxrates) - List all taxrates
* [patchAccountingTaxrate](docs/sdks/taxrate/README.md#patchaccountingtaxrate) - Update a taxrate
* [removeAccountingTaxrate](docs/sdks/taxrate/README.md#removeaccountingtaxrate) - Remove a taxrate
* [updateAccountingTaxrate](docs/sdks/taxrate/README.md#updateaccountingtaxrate) - Update a taxrate

### [transaction](docs/sdks/transaction/README.md)

* [createAccountingTransaction](docs/sdks/transaction/README.md#createaccountingtransaction) - Create a transaction
* [getAccountingTransaction](docs/sdks/transaction/README.md#getaccountingtransaction) - Retrieve a transaction
* [listAccountingTransactions](docs/sdks/transaction/README.md#listaccountingtransactions) - List all transactions
* [patchAccountingTransaction](docs/sdks/transaction/README.md#patchaccountingtransaction) - Update a transaction
* [removeAccountingTransaction](docs/sdks/transaction/README.md#removeaccountingtransaction) - Remove a transaction
* [updateAccountingTransaction](docs/sdks/transaction/README.md#updateaccountingtransaction) - Update a transaction

### [ats](docs/sdks/ats/README.md)

* [createAtsActivity](docs/sdks/ats/README.md#createatsactivity) - Create an activity
* [createAtsApplication](docs/sdks/ats/README.md#createatsapplication) - Create an application
* [createAtsCandidate](docs/sdks/ats/README.md#createatscandidate) - Create a candidate
* [createAtsDocument](docs/sdks/ats/README.md#createatsdocument) - Create a document
* [createAtsInterview](docs/sdks/ats/README.md#createatsinterview) - Create a interview
* [createAtsJob](docs/sdks/ats/README.md#createatsjob) - Create a job
* [createAtsScorecard](docs/sdks/ats/README.md#createatsscorecard) - Create a scorecard
* [getAtsActivity](docs/sdks/ats/README.md#getatsactivity) - Retrieve an activity
* [getAtsApplication](docs/sdks/ats/README.md#getatsapplication) - Retrieve an application
* [getAtsCandidate](docs/sdks/ats/README.md#getatscandidate) - Retrieve a candidate
* [getAtsCompany](docs/sdks/ats/README.md#getatscompany) - Retrieve a company
* [getAtsDocument](docs/sdks/ats/README.md#getatsdocument) - Retrieve a document
* [getAtsInterview](docs/sdks/ats/README.md#getatsinterview) - Retrieve a interview
* [getAtsJob](docs/sdks/ats/README.md#getatsjob) - Retrieve a job
* [getAtsScorecard](docs/sdks/ats/README.md#getatsscorecard) - Retrieve a scorecard
* [listAtsActivities](docs/sdks/ats/README.md#listatsactivities) - List all activities
* [listAtsApplications](docs/sdks/ats/README.md#listatsapplications) - List all applications
* [listAtsApplicationstatuses](docs/sdks/ats/README.md#listatsapplicationstatuses) - List all application statuses
* [listAtsCandidates](docs/sdks/ats/README.md#listatscandidates) - List all candidates
* [listAtsCompanies](docs/sdks/ats/README.md#listatscompanies) - List all companies
* [listAtsDocuments](docs/sdks/ats/README.md#listatsdocuments) - List all documents
* [listAtsInterviews](docs/sdks/ats/README.md#listatsinterviews) - List all interviews
* [listAtsJobs](docs/sdks/ats/README.md#listatsjobs) - List all jobs
* [listAtsScorecards](docs/sdks/ats/README.md#listatsscorecards) - List all scorecards
* [patchAtsActivity](docs/sdks/ats/README.md#patchatsactivity) - Update an activity
* [patchAtsApplication](docs/sdks/ats/README.md#patchatsapplication) - Update an application
* [patchAtsCandidate](docs/sdks/ats/README.md#patchatscandidate) - Update a candidate
* [patchAtsDocument](docs/sdks/ats/README.md#patchatsdocument) - Update a document
* [patchAtsInterview](docs/sdks/ats/README.md#patchatsinterview) - Update a interview
* [patchAtsJob](docs/sdks/ats/README.md#patchatsjob) - Update a job
* [patchAtsScorecard](docs/sdks/ats/README.md#patchatsscorecard) - Update a scorecard
* [removeAtsActivity](docs/sdks/ats/README.md#removeatsactivity) - Remove an activity
* [removeAtsApplication](docs/sdks/ats/README.md#removeatsapplication) - Remove an application
* [removeAtsCandidate](docs/sdks/ats/README.md#removeatscandidate) - Remove a candidate
* [removeAtsDocument](docs/sdks/ats/README.md#removeatsdocument) - Remove a document
* [removeAtsInterview](docs/sdks/ats/README.md#removeatsinterview) - Remove a interview
* [removeAtsJob](docs/sdks/ats/README.md#removeatsjob) - Remove a job
* [removeAtsScorecard](docs/sdks/ats/README.md#removeatsscorecard) - Remove a scorecard
* [updateAtsActivity](docs/sdks/ats/README.md#updateatsactivity) - Update an activity
* [updateAtsApplication](docs/sdks/ats/README.md#updateatsapplication) - Update an application
* [updateAtsCandidate](docs/sdks/ats/README.md#updateatscandidate) - Update a candidate
* [updateAtsDocument](docs/sdks/ats/README.md#updateatsdocument) - Update a document
* [updateAtsInterview](docs/sdks/ats/README.md#updateatsinterview) - Update a interview
* [updateAtsJob](docs/sdks/ats/README.md#updateatsjob) - Update a job
* [updateAtsScorecard](docs/sdks/ats/README.md#updateatsscorecard) - Update a scorecard

### [activity](docs/sdks/activity/README.md)

* [createAtsActivity](docs/sdks/activity/README.md#createatsactivity) - Create an activity
* [getAtsActivity](docs/sdks/activity/README.md#getatsactivity) - Retrieve an activity
* [listAtsActivities](docs/sdks/activity/README.md#listatsactivities) - List all activities
* [patchAtsActivity](docs/sdks/activity/README.md#patchatsactivity) - Update an activity
* [removeAtsActivity](docs/sdks/activity/README.md#removeatsactivity) - Remove an activity
* [updateAtsActivity](docs/sdks/activity/README.md#updateatsactivity) - Update an activity

### [application](docs/sdks/application/README.md)

* [createAtsApplication](docs/sdks/application/README.md#createatsapplication) - Create an application
* [getAtsApplication](docs/sdks/application/README.md#getatsapplication) - Retrieve an application
* [listAtsApplications](docs/sdks/application/README.md#listatsapplications) - List all applications
* [patchAtsApplication](docs/sdks/application/README.md#patchatsapplication) - Update an application
* [removeAtsApplication](docs/sdks/application/README.md#removeatsapplication) - Remove an application
* [updateAtsApplication](docs/sdks/application/README.md#updateatsapplication) - Update an application

### [applicationstatus](docs/sdks/applicationstatus/README.md)

* [listAtsApplicationstatuses](docs/sdks/applicationstatus/README.md#listatsapplicationstatuses) - List all application statuses

### [candidate](docs/sdks/candidate/README.md)

* [createAtsCandidate](docs/sdks/candidate/README.md#createatscandidate) - Create a candidate
* [getAtsCandidate](docs/sdks/candidate/README.md#getatscandidate) - Retrieve a candidate
* [listAtsCandidates](docs/sdks/candidate/README.md#listatscandidates) - List all candidates
* [patchAtsCandidate](docs/sdks/candidate/README.md#patchatscandidate) - Update a candidate
* [removeAtsCandidate](docs/sdks/candidate/README.md#removeatscandidate) - Remove a candidate
* [updateAtsCandidate](docs/sdks/candidate/README.md#updateatscandidate) - Update a candidate

### [company](docs/sdks/company/README.md)

* [createCrmCompany](docs/sdks/company/README.md#createcrmcompany) - Create a company
* [getAtsCompany](docs/sdks/company/README.md#getatscompany) - Retrieve a company
* [getCrmCompany](docs/sdks/company/README.md#getcrmcompany) - Retrieve a company
* [listAtsCompanies](docs/sdks/company/README.md#listatscompanies) - List all companies
* [listCrmCompanies](docs/sdks/company/README.md#listcrmcompanies) - List all companies
* [listEnrichCompanies](docs/sdks/company/README.md#listenrichcompanies) - Retrieve enrichment information for a company
* [patchCrmCompany](docs/sdks/company/README.md#patchcrmcompany) - Update a company
* [removeCrmCompany](docs/sdks/company/README.md#removecrmcompany) - Remove a company
* [updateCrmCompany](docs/sdks/company/README.md#updatecrmcompany) - Update a company

### [document](docs/sdks/document/README.md)

* [createAtsDocument](docs/sdks/document/README.md#createatsdocument) - Create a document
* [getAtsDocument](docs/sdks/document/README.md#getatsdocument) - Retrieve a document
* [listAtsDocuments](docs/sdks/document/README.md#listatsdocuments) - List all documents
* [patchAtsDocument](docs/sdks/document/README.md#patchatsdocument) - Update a document
* [removeAtsDocument](docs/sdks/document/README.md#removeatsdocument) - Remove a document
* [updateAtsDocument](docs/sdks/document/README.md#updateatsdocument) - Update a document

### [interview](docs/sdks/interview/README.md)

* [createAtsInterview](docs/sdks/interview/README.md#createatsinterview) - Create a interview
* [getAtsInterview](docs/sdks/interview/README.md#getatsinterview) - Retrieve a interview
* [listAtsInterviews](docs/sdks/interview/README.md#listatsinterviews) - List all interviews
* [patchAtsInterview](docs/sdks/interview/README.md#patchatsinterview) - Update a interview
* [removeAtsInterview](docs/sdks/interview/README.md#removeatsinterview) - Remove a interview
* [updateAtsInterview](docs/sdks/interview/README.md#updateatsinterview) - Update a interview

### [job](docs/sdks/job/README.md)

* [createAtsJob](docs/sdks/job/README.md#createatsjob) - Create a job
* [getAtsJob](docs/sdks/job/README.md#getatsjob) - Retrieve a job
* [listAtsJobs](docs/sdks/job/README.md#listatsjobs) - List all jobs
* [patchAtsJob](docs/sdks/job/README.md#patchatsjob) - Update a job
* [removeAtsJob](docs/sdks/job/README.md#removeatsjob) - Remove a job
* [updateAtsJob](docs/sdks/job/README.md#updateatsjob) - Update a job

### [scorecard](docs/sdks/scorecard/README.md)

* [createAtsScorecard](docs/sdks/scorecard/README.md#createatsscorecard) - Create a scorecard
* [getAtsScorecard](docs/sdks/scorecard/README.md#getatsscorecard) - Retrieve a scorecard
* [listAtsScorecards](docs/sdks/scorecard/README.md#listatsscorecards) - List all scorecards
* [patchAtsScorecard](docs/sdks/scorecard/README.md#patchatsscorecard) - Update a scorecard
* [removeAtsScorecard](docs/sdks/scorecard/README.md#removeatsscorecard) - Remove a scorecard
* [updateAtsScorecard](docs/sdks/scorecard/README.md#updateatsscorecard) - Update a scorecard

### [commerce](docs/sdks/commerce/README.md)

* [createCommerceCollection](docs/sdks/commerce/README.md#createcommercecollection) - Create a collection
* [createCommerceInventory](docs/sdks/commerce/README.md#createcommerceinventory) - Create an inventory
* [createCommerceItem](docs/sdks/commerce/README.md#createcommerceitem) - Create an item
* [createCommerceLocation](docs/sdks/commerce/README.md#createcommercelocation) - Create a location
* [getCommerceCollection](docs/sdks/commerce/README.md#getcommercecollection) - Retrieve a collection
* [getCommerceInventory](docs/sdks/commerce/README.md#getcommerceinventory) - Retrieve an inventory
* [getCommerceItem](docs/sdks/commerce/README.md#getcommerceitem) - Retrieve an item
* [getCommerceLocation](docs/sdks/commerce/README.md#getcommercelocation) - Retrieve a location
* [listCommerceCollections](docs/sdks/commerce/README.md#listcommercecollections) - List all collections
* [listCommerceInventories](docs/sdks/commerce/README.md#listcommerceinventories) - List all inventories
* [listCommerceItems](docs/sdks/commerce/README.md#listcommerceitems) - List all items
* [listCommerceLocations](docs/sdks/commerce/README.md#listcommercelocations) - List all locations
* [patchCommerceCollection](docs/sdks/commerce/README.md#patchcommercecollection) - Update a collection
* [patchCommerceInventory](docs/sdks/commerce/README.md#patchcommerceinventory) - Update an inventory
* [patchCommerceItem](docs/sdks/commerce/README.md#patchcommerceitem) - Update an item
* [patchCommerceLocation](docs/sdks/commerce/README.md#patchcommercelocation) - Update a location
* [removeCommerceCollection](docs/sdks/commerce/README.md#removecommercecollection) - Remove a collection
* [removeCommerceInventory](docs/sdks/commerce/README.md#removecommerceinventory) - Remove an inventory
* [removeCommerceItem](docs/sdks/commerce/README.md#removecommerceitem) - Remove an item
* [removeCommerceLocation](docs/sdks/commerce/README.md#removecommercelocation) - Remove a location
* [updateCommerceCollection](docs/sdks/commerce/README.md#updatecommercecollection) - Update a collection
* [updateCommerceInventory](docs/sdks/commerce/README.md#updatecommerceinventory) - Update an inventory
* [updateCommerceItem](docs/sdks/commerce/README.md#updatecommerceitem) - Update an item
* [updateCommerceLocation](docs/sdks/commerce/README.md#updatecommercelocation) - Update a location

### [collection](docs/sdks/collection/README.md)

* [createCommerceCollection](docs/sdks/collection/README.md#createcommercecollection) - Create a collection
* [getCommerceCollection](docs/sdks/collection/README.md#getcommercecollection) - Retrieve a collection
* [listCommerceCollections](docs/sdks/collection/README.md#listcommercecollections) - List all collections
* [patchCommerceCollection](docs/sdks/collection/README.md#patchcommercecollection) - Update a collection
* [removeCommerceCollection](docs/sdks/collection/README.md#removecommercecollection) - Remove a collection
* [updateCommerceCollection](docs/sdks/collection/README.md#updatecommercecollection) - Update a collection

### [inventory](docs/sdks/inventory/README.md)

* [createCommerceInventory](docs/sdks/inventory/README.md#createcommerceinventory) - Create an inventory
* [getCommerceInventory](docs/sdks/inventory/README.md#getcommerceinventory) - Retrieve an inventory
* [listCommerceInventories](docs/sdks/inventory/README.md#listcommerceinventories) - List all inventories
* [patchCommerceInventory](docs/sdks/inventory/README.md#patchcommerceinventory) - Update an inventory
* [removeCommerceInventory](docs/sdks/inventory/README.md#removecommerceinventory) - Remove an inventory
* [updateCommerceInventory](docs/sdks/inventory/README.md#updatecommerceinventory) - Update an inventory

### [item](docs/sdks/item/README.md)

* [createCommerceItem](docs/sdks/item/README.md#createcommerceitem) - Create an item
* [getCommerceItem](docs/sdks/item/README.md#getcommerceitem) - Retrieve an item
* [listCommerceItems](docs/sdks/item/README.md#listcommerceitems) - List all items
* [patchCommerceItem](docs/sdks/item/README.md#patchcommerceitem) - Update an item
* [removeCommerceItem](docs/sdks/item/README.md#removecommerceitem) - Remove an item
* [updateCommerceItem](docs/sdks/item/README.md#updatecommerceitem) - Update an item

### [location](docs/sdks/location/README.md)

* [createCommerceLocation](docs/sdks/location/README.md#createcommercelocation) - Create a location
* [getCommerceLocation](docs/sdks/location/README.md#getcommercelocation) - Retrieve a location
* [listCommerceLocations](docs/sdks/location/README.md#listcommercelocations) - List all locations
* [patchCommerceLocation](docs/sdks/location/README.md#patchcommercelocation) - Update a location
* [removeCommerceLocation](docs/sdks/location/README.md#removecommercelocation) - Remove a location
* [updateCommerceLocation](docs/sdks/location/README.md#updatecommercelocation) - Update a location

### [crm](docs/sdks/crm/README.md)

* [createCrmCompany](docs/sdks/crm/README.md#createcrmcompany) - Create a company
* [createCrmContact](docs/sdks/crm/README.md#createcrmcontact) - Create a contact
* [createCrmDeal](docs/sdks/crm/README.md#createcrmdeal) - Create a deal
* [createCrmEvent](docs/sdks/crm/README.md#createcrmevent) - Create a event
* [createCrmLead](docs/sdks/crm/README.md#createcrmlead) - Create a lead
* [createCrmPipeline](docs/sdks/crm/README.md#createcrmpipeline) - Create a pipeline
* [getCrmCompany](docs/sdks/crm/README.md#getcrmcompany) - Retrieve a company
* [getCrmContact](docs/sdks/crm/README.md#getcrmcontact) - Retrieve a contact
* [getCrmDeal](docs/sdks/crm/README.md#getcrmdeal) - Retrieve a deal
* [getCrmEvent](docs/sdks/crm/README.md#getcrmevent) - Retrieve a event
* [getCrmLead](docs/sdks/crm/README.md#getcrmlead) - Retrieve a lead
* [getCrmPipeline](docs/sdks/crm/README.md#getcrmpipeline) - Retrieve a pipeline
* [listCrmCompanies](docs/sdks/crm/README.md#listcrmcompanies) - List all companies
* [listCrmContacts](docs/sdks/crm/README.md#listcrmcontacts) - List all contacts
* [listCrmDeals](docs/sdks/crm/README.md#listcrmdeals) - List all deals
* [listCrmEvents](docs/sdks/crm/README.md#listcrmevents) - List all events
* [listCrmLeads](docs/sdks/crm/README.md#listcrmleads) - List all leads
* [listCrmPipelines](docs/sdks/crm/README.md#listcrmpipelines) - List all pipelines
* [patchCrmCompany](docs/sdks/crm/README.md#patchcrmcompany) - Update a company
* [patchCrmContact](docs/sdks/crm/README.md#patchcrmcontact) - Update a contact
* [patchCrmDeal](docs/sdks/crm/README.md#patchcrmdeal) - Update a deal
* [patchCrmEvent](docs/sdks/crm/README.md#patchcrmevent) - Update a event
* [patchCrmLead](docs/sdks/crm/README.md#patchcrmlead) - Update a lead
* [patchCrmPipeline](docs/sdks/crm/README.md#patchcrmpipeline) - Update a pipeline
* [removeCrmCompany](docs/sdks/crm/README.md#removecrmcompany) - Remove a company
* [removeCrmContact](docs/sdks/crm/README.md#removecrmcontact) - Remove a contact
* [removeCrmDeal](docs/sdks/crm/README.md#removecrmdeal) - Remove a deal
* [removeCrmEvent](docs/sdks/crm/README.md#removecrmevent) - Remove a event
* [removeCrmLead](docs/sdks/crm/README.md#removecrmlead) - Remove a lead
* [removeCrmPipeline](docs/sdks/crm/README.md#removecrmpipeline) - Remove a pipeline
* [updateCrmCompany](docs/sdks/crm/README.md#updatecrmcompany) - Update a company
* [updateCrmContact](docs/sdks/crm/README.md#updatecrmcontact) - Update a contact
* [updateCrmDeal](docs/sdks/crm/README.md#updatecrmdeal) - Update a deal
* [updateCrmEvent](docs/sdks/crm/README.md#updatecrmevent) - Update a event
* [updateCrmLead](docs/sdks/crm/README.md#updatecrmlead) - Update a lead
* [updateCrmPipeline](docs/sdks/crm/README.md#updatecrmpipeline) - Update a pipeline

### [deal](docs/sdks/deal/README.md)

* [createCrmDeal](docs/sdks/deal/README.md#createcrmdeal) - Create a deal
* [getCrmDeal](docs/sdks/deal/README.md#getcrmdeal) - Retrieve a deal
* [listCrmDeals](docs/sdks/deal/README.md#listcrmdeals) - List all deals
* [patchCrmDeal](docs/sdks/deal/README.md#patchcrmdeal) - Update a deal
* [removeCrmDeal](docs/sdks/deal/README.md#removecrmdeal) - Remove a deal
* [updateCrmDeal](docs/sdks/deal/README.md#updatecrmdeal) - Update a deal

### [event](docs/sdks/event/README.md)

* [createCrmEvent](docs/sdks/event/README.md#createcrmevent) - Create a event
* [getCrmEvent](docs/sdks/event/README.md#getcrmevent) - Retrieve a event
* [listCrmEvents](docs/sdks/event/README.md#listcrmevents) - List all events
* [patchCrmEvent](docs/sdks/event/README.md#patchcrmevent) - Update a event
* [removeCrmEvent](docs/sdks/event/README.md#removecrmevent) - Remove a event
* [updateCrmEvent](docs/sdks/event/README.md#updatecrmevent) - Update a event

### [lead](docs/sdks/lead/README.md)

* [createCrmLead](docs/sdks/lead/README.md#createcrmlead) - Create a lead
* [getCrmLead](docs/sdks/lead/README.md#getcrmlead) - Retrieve a lead
* [listCrmLeads](docs/sdks/lead/README.md#listcrmleads) - List all leads
* [patchCrmLead](docs/sdks/lead/README.md#patchcrmlead) - Update a lead
* [removeCrmLead](docs/sdks/lead/README.md#removecrmlead) - Remove a lead
* [updateCrmLead](docs/sdks/lead/README.md#updatecrmlead) - Update a lead

### [pipeline](docs/sdks/pipeline/README.md)

* [createCrmPipeline](docs/sdks/pipeline/README.md#createcrmpipeline) - Create a pipeline
* [getCrmPipeline](docs/sdks/pipeline/README.md#getcrmpipeline) - Retrieve a pipeline
* [listCrmPipelines](docs/sdks/pipeline/README.md#listcrmpipelines) - List all pipelines
* [patchCrmPipeline](docs/sdks/pipeline/README.md#patchcrmpipeline) - Update a pipeline
* [removeCrmPipeline](docs/sdks/pipeline/README.md#removecrmpipeline) - Remove a pipeline
* [updateCrmPipeline](docs/sdks/pipeline/README.md#updatecrmpipeline) - Update a pipeline

### [enrich](docs/sdks/enrich/README.md)

* [listEnrichCompanies](docs/sdks/enrich/README.md#listenrichcompanies) - Retrieve enrichment information for a company
* [listEnrichPeople](docs/sdks/enrich/README.md#listenrichpeople) - Retrieve enrichment information for a person

### [person](docs/sdks/person/README.md)

* [listEnrichPeople](docs/sdks/person/README.md#listenrichpeople) - Retrieve enrichment information for a person

### [hris](docs/sdks/hris/README.md)

* [createHrisEmployee](docs/sdks/hris/README.md#createhrisemployee) - Create an employee
* [createHrisGroup](docs/sdks/hris/README.md#createhrisgroup) - Create a group
* [getHrisEmployee](docs/sdks/hris/README.md#gethrisemployee) - Retrieve an employee
* [getHrisGroup](docs/sdks/hris/README.md#gethrisgroup) - Retrieve a group
* [listHrisEmployees](docs/sdks/hris/README.md#listhrisemployees) - List all employees
* [listHrisGroups](docs/sdks/hris/README.md#listhrisgroups) - List all groups
* [patchHrisEmployee](docs/sdks/hris/README.md#patchhrisemployee) - Update an employee
* [patchHrisGroup](docs/sdks/hris/README.md#patchhrisgroup) - Update a group
* [removeHrisEmployee](docs/sdks/hris/README.md#removehrisemployee) - Remove an employee
* [removeHrisGroup](docs/sdks/hris/README.md#removehrisgroup) - Remove a group
* [updateHrisEmployee](docs/sdks/hris/README.md#updatehrisemployee) - Update an employee
* [updateHrisGroup](docs/sdks/hris/README.md#updatehrisgroup) - Update a group

### [employee](docs/sdks/employee/README.md)

* [createHrisEmployee](docs/sdks/employee/README.md#createhrisemployee) - Create an employee
* [getHrisEmployee](docs/sdks/employee/README.md#gethrisemployee) - Retrieve an employee
* [listHrisEmployees](docs/sdks/employee/README.md#listhrisemployees) - List all employees
* [patchHrisEmployee](docs/sdks/employee/README.md#patchhrisemployee) - Update an employee
* [removeHrisEmployee](docs/sdks/employee/README.md#removehrisemployee) - Remove an employee
* [updateHrisEmployee](docs/sdks/employee/README.md#updatehrisemployee) - Update an employee

### [group](docs/sdks/group/README.md)

* [createHrisGroup](docs/sdks/group/README.md#createhrisgroup) - Create a group
* [getHrisGroup](docs/sdks/group/README.md#gethrisgroup) - Retrieve a group
* [listHrisGroups](docs/sdks/group/README.md#listhrisgroups) - List all groups
* [patchHrisGroup](docs/sdks/group/README.md#patchhrisgroup) - Update a group
* [removeHrisGroup](docs/sdks/group/README.md#removehrisgroup) - Remove a group
* [updateHrisGroup](docs/sdks/group/README.md#updatehrisgroup) - Update a group

### [martech](docs/sdks/martech/README.md)

* [createMartechList](docs/sdks/martech/README.md#createmartechlist) - Create a list
* [createMartechMember](docs/sdks/martech/README.md#createmartechmember) - Create a member
* [getMartechList](docs/sdks/martech/README.md#getmartechlist) - Retrieve a list
* [getMartechMember](docs/sdks/martech/README.md#getmartechmember) - Retrieve a member
* [listMartechLists](docs/sdks/martech/README.md#listmartechlists) - List all lists
* [listMartechMembers](docs/sdks/martech/README.md#listmartechmembers) - List all members
* [patchMartechList](docs/sdks/martech/README.md#patchmartechlist) - Update a list
* [patchMartechMember](docs/sdks/martech/README.md#patchmartechmember) - Update a member
* [removeMartechList](docs/sdks/martech/README.md#removemartechlist) - Remove a list
* [removeMartechMember](docs/sdks/martech/README.md#removemartechmember) - Remove member
* [updateMartechList](docs/sdks/martech/README.md#updatemartechlist) - Update a list
* [updateMartechMember](docs/sdks/martech/README.md#updatemartechmember) - Update a member

### [list](docs/sdks/list/README.md)

* [createMartechList](docs/sdks/list/README.md#createmartechlist) - Create a list
* [getMartechList](docs/sdks/list/README.md#getmartechlist) - Retrieve a list
* [listMartechLists](docs/sdks/list/README.md#listmartechlists) - List all lists
* [patchMartechList](docs/sdks/list/README.md#patchmartechlist) - Update a list
* [removeMartechList](docs/sdks/list/README.md#removemartechlist) - Remove a list
* [updateMartechList](docs/sdks/list/README.md#updatemartechlist) - Update a list

### [member](docs/sdks/member/README.md)

* [createMartechMember](docs/sdks/member/README.md#createmartechmember) - Create a member
* [getMartechMember](docs/sdks/member/README.md#getmartechmember) - Retrieve a member
* [listMartechMembers](docs/sdks/member/README.md#listmartechmembers) - List all members
* [patchMartechMember](docs/sdks/member/README.md#patchmartechmember) - Update a member
* [removeMartechMember](docs/sdks/member/README.md#removemartechmember) - Remove member
* [updateMartechMember](docs/sdks/member/README.md#updatemartechmember) - Update a member

### [passthrough](docs/sdks/passthrough/README.md)

* [createPassthrough](docs/sdks/passthrough/README.md#createpassthrough) - Passthrough POST
* [listPassthroughs](docs/sdks/passthrough/README.md#listpassthroughs) - Passthrough GET
* [patchPassthrough](docs/sdks/passthrough/README.md#patchpassthrough) - Passthrough PUT
* [removePassthrough](docs/sdks/passthrough/README.md#removepassthrough) - Passthrough DELETE
* [updatePassthrough](docs/sdks/passthrough/README.md#updatepassthrough) - Passthrough PUT

### [storage](docs/sdks/storage/README.md)

* [createStorageFile](docs/sdks/storage/README.md#createstoragefile) - Create a file
* [getStorageFile](docs/sdks/storage/README.md#getstoragefile) - Retrieve a file
* [listStorageFiles](docs/sdks/storage/README.md#liststoragefiles) - List all files
* [patchStorageFile](docs/sdks/storage/README.md#patchstoragefile) - Update a file
* [removeStorageFile](docs/sdks/storage/README.md#removestoragefile) - Remove a file
* [updateStorageFile](docs/sdks/storage/README.md#updatestoragefile) - Update a file

### [file](docs/sdks/file/README.md)

* [createStorageFile](docs/sdks/file/README.md#createstoragefile) - Create a file
* [getStorageFile](docs/sdks/file/README.md#getstoragefile) - Retrieve a file
* [listStorageFiles](docs/sdks/file/README.md#liststoragefiles) - List all files
* [patchStorageFile](docs/sdks/file/README.md#patchstoragefile) - Update a file
* [removeStorageFile](docs/sdks/file/README.md#removestoragefile) - Remove a file
* [updateStorageFile](docs/sdks/file/README.md#updatestoragefile) - Update a file

### [ticketing](docs/sdks/ticketing/README.md)

* [createTicketingCustomer](docs/sdks/ticketing/README.md#createticketingcustomer) - Create a customer
* [createTicketingNote](docs/sdks/ticketing/README.md#createticketingnote) - Create a note
* [createTicketingTicket](docs/sdks/ticketing/README.md#createticketingticket) - Create a ticket
* [getTicketingCustomer](docs/sdks/ticketing/README.md#getticketingcustomer) - Retrieve a customer
* [getTicketingNote](docs/sdks/ticketing/README.md#getticketingnote) - Retrieve a note
* [getTicketingTicket](docs/sdks/ticketing/README.md#getticketingticket) - Retrieve a ticket
* [listTicketingCustomers](docs/sdks/ticketing/README.md#listticketingcustomers) - List all customers
* [listTicketingNotes](docs/sdks/ticketing/README.md#listticketingnotes) - List all notes
* [listTicketingTickets](docs/sdks/ticketing/README.md#listticketingtickets) - List all tickets
* [patchTicketingCustomer](docs/sdks/ticketing/README.md#patchticketingcustomer) - Update a customer
* [patchTicketingNote](docs/sdks/ticketing/README.md#patchticketingnote) - Update a note
* [patchTicketingTicket](docs/sdks/ticketing/README.md#patchticketingticket) - Update a ticket
* [removeTicketingCustomer](docs/sdks/ticketing/README.md#removeticketingcustomer) - Remove a customer
* [removeTicketingNote](docs/sdks/ticketing/README.md#removeticketingnote) - Remove a note
* [removeTicketingTicket](docs/sdks/ticketing/README.md#removeticketingticket) - Remove a ticket
* [updateTicketingCustomer](docs/sdks/ticketing/README.md#updateticketingcustomer) - Update a customer
* [updateTicketingNote](docs/sdks/ticketing/README.md#updateticketingnote) - Update a note
* [updateTicketingTicket](docs/sdks/ticketing/README.md#updateticketingticket) - Update a ticket

### [customer](docs/sdks/customer/README.md)

* [createTicketingCustomer](docs/sdks/customer/README.md#createticketingcustomer) - Create a customer
* [getTicketingCustomer](docs/sdks/customer/README.md#getticketingcustomer) - Retrieve a customer
* [listTicketingCustomers](docs/sdks/customer/README.md#listticketingcustomers) - List all customers
* [patchTicketingCustomer](docs/sdks/customer/README.md#patchticketingcustomer) - Update a customer
* [removeTicketingCustomer](docs/sdks/customer/README.md#removeticketingcustomer) - Remove a customer
* [updateTicketingCustomer](docs/sdks/customer/README.md#updateticketingcustomer) - Update a customer

### [note](docs/sdks/note/README.md)

* [createTicketingNote](docs/sdks/note/README.md#createticketingnote) - Create a note
* [getTicketingNote](docs/sdks/note/README.md#getticketingnote) - Retrieve a note
* [listTicketingNotes](docs/sdks/note/README.md#listticketingnotes) - List all notes
* [patchTicketingNote](docs/sdks/note/README.md#patchticketingnote) - Update a note
* [removeTicketingNote](docs/sdks/note/README.md#removeticketingnote) - Remove a note
* [updateTicketingNote](docs/sdks/note/README.md#updateticketingnote) - Update a note

### [ticket](docs/sdks/ticket/README.md)

* [createTicketingTicket](docs/sdks/ticket/README.md#createticketingticket) - Create a ticket
* [getTicketingTicket](docs/sdks/ticket/README.md#getticketingticket) - Retrieve a ticket
* [listTicketingTickets](docs/sdks/ticket/README.md#listticketingtickets) - List all tickets
* [patchTicketingTicket](docs/sdks/ticket/README.md#patchticketingticket) - Update a ticket
* [removeTicketingTicket](docs/sdks/ticket/README.md#removeticketingticket) - Remove a ticket
* [updateTicketingTicket](docs/sdks/ticket/README.md#updateticketingticket) - Update a ticket

### [uc](docs/sdks/uc/README.md)

* [createUcContact](docs/sdks/uc/README.md#createuccontact) - Create a contact
* [getUcContact](docs/sdks/uc/README.md#getuccontact) - Retrieve a contact
* [listUcCalls](docs/sdks/uc/README.md#listuccalls) - List all calls
* [listUcContacts](docs/sdks/uc/README.md#listuccontacts) - List all contacts
* [patchUcContact](docs/sdks/uc/README.md#patchuccontact) - Update a contact
* [removeUcContact](docs/sdks/uc/README.md#removeuccontact) - Remove a contact
* [updateUcContact](docs/sdks/uc/README.md#updateuccontact) - Update a contact

### [call](docs/sdks/call/README.md)

* [listUcCalls](docs/sdks/call/README.md#listuccalls) - List all calls

### [unified](docs/sdks/unified/README.md)

* [createUnifiedConnection](docs/sdks/unified/README.md#createunifiedconnection) - Create connection
* [createUnifiedWebhook](docs/sdks/unified/README.md#createunifiedwebhook) - Create webhook subscription
* [getUnifiedApicall](docs/sdks/unified/README.md#getunifiedapicall) - Retrieve specific API Call by its ID
* [getUnifiedConnection](docs/sdks/unified/README.md#getunifiedconnection) - Retrieve connection
* [getUnifiedIntegrationAuth](docs/sdks/unified/README.md#getunifiedintegrationauth) - Create connection indirectly
* [getUnifiedWebhook](docs/sdks/unified/README.md#getunifiedwebhook) - Retrieve webhook by its ID
* [listUnifiedApicalls](docs/sdks/unified/README.md#listunifiedapicalls) - Returns API Calls
* [listUnifiedConnections](docs/sdks/unified/README.md#listunifiedconnections) - List all connections
* [listUnifiedIntegrationWorkspaces](docs/sdks/unified/README.md#listunifiedintegrationworkspaces) - Returns all activated integrations in a workspace
* [listUnifiedIntegrations](docs/sdks/unified/README.md#listunifiedintegrations) - Returns all integrations
* [listUnifiedIssues](docs/sdks/unified/README.md#listunifiedissues) - List support issues
* [listUnifiedWebhooks](docs/sdks/unified/README.md#listunifiedwebhooks) - Returns all registered webhooks
* [patchUnifiedConnection](docs/sdks/unified/README.md#patchunifiedconnection) - Update connection
* [patchUnifiedWebhookTrigger](docs/sdks/unified/README.md#patchunifiedwebhooktrigger) - Trigger webhook
* [removeUnifiedConnection](docs/sdks/unified/README.md#removeunifiedconnection) - Remove connection
* [removeUnifiedWebhook](docs/sdks/unified/README.md#removeunifiedwebhook) - Remove webhook subscription
* [updateUnifiedConnection](docs/sdks/unified/README.md#updateunifiedconnection) - Update connection
* [updateUnifiedWebhookTrigger](docs/sdks/unified/README.md#updateunifiedwebhooktrigger) - Trigger webhook

### [apicall](docs/sdks/apicall/README.md)

* [getUnifiedApicall](docs/sdks/apicall/README.md#getunifiedapicall) - Retrieve specific API Call by its ID
* [listUnifiedApicalls](docs/sdks/apicall/README.md#listunifiedapicalls) - Returns API Calls

### [connection](docs/sdks/connection/README.md)

* [createUnifiedConnection](docs/sdks/connection/README.md#createunifiedconnection) - Create connection
* [getUnifiedConnection](docs/sdks/connection/README.md#getunifiedconnection) - Retrieve connection
* [listUnifiedConnections](docs/sdks/connection/README.md#listunifiedconnections) - List all connections
* [patchUnifiedConnection](docs/sdks/connection/README.md#patchunifiedconnection) - Update connection
* [removeUnifiedConnection](docs/sdks/connection/README.md#removeunifiedconnection) - Remove connection
* [updateUnifiedConnection](docs/sdks/connection/README.md#updateunifiedconnection) - Update connection

### [integration](docs/sdks/integration/README.md)

* [getUnifiedIntegrationAuth](docs/sdks/integration/README.md#getunifiedintegrationauth) - Create connection indirectly
* [listUnifiedIntegrationWorkspaces](docs/sdks/integration/README.md#listunifiedintegrationworkspaces) - Returns all activated integrations in a workspace
* [listUnifiedIntegrations](docs/sdks/integration/README.md#listunifiedintegrations) - Returns all integrations

### [auth](docs/sdks/auth/README.md)

* [getUnifiedIntegrationAuth](docs/sdks/auth/README.md#getunifiedintegrationauth) - Create connection indirectly
* [getUnifiedIntegrationLogin](docs/sdks/auth/README.md#getunifiedintegrationlogin) - Sign in a user

### [login](docs/sdks/login/README.md)

* [getUnifiedIntegrationLogin](docs/sdks/login/README.md#getunifiedintegrationlogin) - Sign in a user

### [issue](docs/sdks/issue/README.md)

* [listUnifiedIssues](docs/sdks/issue/README.md#listunifiedissues) - List support issues

### [webhook](docs/sdks/webhook/README.md)

* [createUnifiedWebhook](docs/sdks/webhook/README.md#createunifiedwebhook) - Create webhook subscription
* [getUnifiedWebhook](docs/sdks/webhook/README.md#getunifiedwebhook) - Retrieve webhook by its ID
* [listUnifiedWebhooks](docs/sdks/webhook/README.md#listunifiedwebhooks) - Returns all registered webhooks
* [patchUnifiedWebhookTrigger](docs/sdks/webhook/README.md#patchunifiedwebhooktrigger) - Trigger webhook
* [removeUnifiedWebhook](docs/sdks/webhook/README.md#removeunifiedwebhook) - Remove webhook subscription
* [updateUnifiedWebhookTrigger](docs/sdks/webhook/README.md#updateunifiedwebhooktrigger) - Trigger webhook
<!-- End Available Resources and Operations [operations] -->



<!-- Start Error Handling [errors] -->
## Error Handling

Handling errors in this SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

Example

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { Status, TypeT } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
    const sdk = new UnifiedTo({
        security: {
            jwt: "<YOUR_API_KEY_HERE>",
        },
    });

    let res;
    try {
        res = await sdk.accounting.createAccountingAccount({
            accountingAccount: {
                name: "<value>",
                raw: {
                    key: "<value>",
                },
            },
            connectionId: "<value>",
        });
    } catch (err) {
        if (err instanceof errors.SDKError) {
            console.error(err); // handle exception
            throw err;
        }
    }

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Error Handling [errors] -->



<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.unified.to` | None |
| 1 | `https://api-eu.unified.to` | None |

#### Example

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { Status, TypeT } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
    const sdk = new UnifiedTo({
        serverIdx: 1,
        security: {
            jwt: "<YOUR_API_KEY_HERE>",
        },
    });

    const res = await sdk.accounting.createAccountingAccount({
        accountingAccount: {
            name: "<value>",
            raw: {
                key: "<value>",
            },
        },
        connectionId: "<value>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:
```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { Status, TypeT } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
    const sdk = new UnifiedTo({
        serverURL: "https://api.unified.to",
        security: {
            jwt: "<YOUR_API_KEY_HERE>",
        },
    });

    const res = await sdk.accounting.createAccountingAccount({
        accountingAccount: {
            name: "<value>",
            raw: {
                key: "<value>",
            },
        },
        connectionId: "<value>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Server Selection [server] -->



<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The Typescript SDK makes API calls using the [axios](https://axios-http.com/docs/intro) HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.

For example, you could specify a header for every request that your sdk makes as follows:

```typescript
import { unified-typescript-sdk } from "UnifiedTo";
import axios from "axios";

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})

const sdk = new UnifiedTo({defaultClient: httpClient});
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
import { UnifiedTo } from "unified-typescript-sdk";
import { Status, TypeT } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
    const sdk = new UnifiedTo({
        security: {
            jwt: "<YOUR_API_KEY_HERE>",
        },
    });

    const res = await sdk.accounting.createAccountingAccount({
        accountingAccount: {
            name: "<value>",
            raw: {
                key: "<value>",
            },
        },
        connectionId: "<value>",
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Authentication [security] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
