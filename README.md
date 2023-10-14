# Unified-to

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/unified-to/unified-typescript-sdk.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/unified-to/unified-typescript-sdk/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/unified-to/unified-typescript-sdk
```

### Yarn

```bash
yarn add https://github.com/unified-to/unified-typescript-sdk
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { UnifiedTo } from "unified-to";
import { TicketingEmailType, TicketingTelephoneType } from "unified-to/dist/sdk/models/shared";

(async () => {
    const sdk = new UnifiedTo({
        security: {
            jwt: "",
        },
    });

    const res = await sdk.agent.createTicketingAgent({
        ticketingAgent: {
            emails: [
                {
                    email: "Paolo.Cole8@yahoo.com",
                },
            ],
            raw: {},
            telephones: [
                {
                    telephone: "scarcely Soap navigating",
                },
            ],
        },
        connectionId: "smoothly Algeria",
        fields: ["payment"],
    });

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [agent](docs/sdks/agent/README.md)

* [createTicketingAgent](docs/sdks/agent/README.md#createticketingagent) - Create a agent
* [getTicketingAgent](docs/sdks/agent/README.md#getticketingagent) - Retrieve a agent
* [listTicketingAgents](docs/sdks/agent/README.md#listticketingagents) - List all agents
* [listUcAgents](docs/sdks/agent/README.md#listucagents) - List all agents
* [patchTicketingAgent](docs/sdks/agent/README.md#patchticketingagent) - Update a agent
* [removeTicketingAgent](docs/sdks/agent/README.md#removeticketingagent) - Remove a agent
* [updateTicketingAgent](docs/sdks/agent/README.md#updateticketingagent) - Update a agent

### [apicall](docs/sdks/apicall/README.md)

* [getUnifiedApicall](docs/sdks/apicall/README.md#getunifiedapicall) - Retrieve specific API Call by its ID
* [listUnifiedApicalls](docs/sdks/apicall/README.md#listunifiedapicalls) - Returns API Calls

### [application](docs/sdks/application/README.md)

* [createAtsApplication](docs/sdks/application/README.md#createatsapplication) - Create an application
* [getAtsApplication](docs/sdks/application/README.md#getatsapplication) - Retrieve an application
* [listAtsApplications](docs/sdks/application/README.md#listatsapplications) - List all applications
* [patchAtsApplication](docs/sdks/application/README.md#patchatsapplication) - Update an application
* [removeAtsApplication](docs/sdks/application/README.md#removeatsapplication) - Remove an application
* [updateAtsApplication](docs/sdks/application/README.md#updateatsapplication) - Update an application

### [ats](docs/sdks/ats/README.md)

* [createAtsApplication](docs/sdks/ats/README.md#createatsapplication) - Create an application
* [createAtsCandidate](docs/sdks/ats/README.md#createatscandidate) - Create a candidate
* [createAtsInterview](docs/sdks/ats/README.md#createatsinterview) - Create a interview
* [createAtsJob](docs/sdks/ats/README.md#createatsjob) - Create a job
* [createAtsScorecard](docs/sdks/ats/README.md#createatsscorecard) - Create a scorecard
* [getAtsApplication](docs/sdks/ats/README.md#getatsapplication) - Retrieve an application
* [getAtsCandidate](docs/sdks/ats/README.md#getatscandidate) - Retrieve a candidate
* [getAtsInterview](docs/sdks/ats/README.md#getatsinterview) - Retrieve a interview
* [getAtsJob](docs/sdks/ats/README.md#getatsjob) - Retrieve a job
* [getAtsScorecard](docs/sdks/ats/README.md#getatsscorecard) - Retrieve a scorecard
* [listAtsApplications](docs/sdks/ats/README.md#listatsapplications) - List all applications
* [listAtsCandidates](docs/sdks/ats/README.md#listatscandidates) - List all candidates
* [listAtsInterviews](docs/sdks/ats/README.md#listatsinterviews) - List all interviews
* [listAtsJobs](docs/sdks/ats/README.md#listatsjobs) - List all jobs
* [listAtsScorecards](docs/sdks/ats/README.md#listatsscorecards) - List all scorecards
* [patchAtsApplication](docs/sdks/ats/README.md#patchatsapplication) - Update an application
* [patchAtsCandidate](docs/sdks/ats/README.md#patchatscandidate) - Update a candidate
* [patchAtsInterview](docs/sdks/ats/README.md#patchatsinterview) - Update a interview
* [patchAtsJob](docs/sdks/ats/README.md#patchatsjob) - Update a job
* [patchAtsScorecard](docs/sdks/ats/README.md#patchatsscorecard) - Update a scorecard
* [removeAtsApplication](docs/sdks/ats/README.md#removeatsapplication) - Remove an application
* [removeAtsCandidate](docs/sdks/ats/README.md#removeatscandidate) - Remove a candidate
* [removeAtsInterview](docs/sdks/ats/README.md#removeatsinterview) - Remove a interview
* [removeAtsJob](docs/sdks/ats/README.md#removeatsjob) - Remove a job
* [removeAtsScorecard](docs/sdks/ats/README.md#removeatsscorecard) - Remove a scorecard
* [updateAtsApplication](docs/sdks/ats/README.md#updateatsapplication) - Update an application
* [updateAtsCandidate](docs/sdks/ats/README.md#updateatscandidate) - Update a candidate
* [updateAtsInterview](docs/sdks/ats/README.md#updateatsinterview) - Update a interview
* [updateAtsJob](docs/sdks/ats/README.md#updateatsjob) - Update a job
* [updateAtsScorecard](docs/sdks/ats/README.md#updateatsscorecard) - Update a scorecard

### [auth](docs/sdks/auth/README.md)

* [getUnifiedIntegrationAuth](docs/sdks/auth/README.md#getunifiedintegrationauth) - Create connection indirectly
* [getUnifiedIntegrationLogin](docs/sdks/auth/README.md#getunifiedintegrationlogin) - Sign in a user

### [call](docs/sdks/call/README.md)

* [listUcCalls](docs/sdks/call/README.md#listuccalls) - List all calls

### [candidate](docs/sdks/candidate/README.md)

* [createAtsCandidate](docs/sdks/candidate/README.md#createatscandidate) - Create a candidate
* [getAtsCandidate](docs/sdks/candidate/README.md#getatscandidate) - Retrieve a candidate
* [listAtsCandidates](docs/sdks/candidate/README.md#listatscandidates) - List all candidates
* [patchAtsCandidate](docs/sdks/candidate/README.md#patchatscandidate) - Update a candidate
* [removeAtsCandidate](docs/sdks/candidate/README.md#removeatscandidate) - Remove a candidate
* [updateAtsCandidate](docs/sdks/candidate/README.md#updateatscandidate) - Update a candidate

### [company](docs/sdks/company/README.md)

* [createCrmCompany](docs/sdks/company/README.md#createcrmcompany) - Create a company
* [getCrmCompany](docs/sdks/company/README.md#getcrmcompany) - Retrieve a company
* [listCrmCompanies](docs/sdks/company/README.md#listcrmcompanies) - List all companies
* [listEnrichCompanies](docs/sdks/company/README.md#listenrichcompanies) - Retrieve enrichment information for a company
* [patchCrmCompany](docs/sdks/company/README.md#patchcrmcompany) - Update a company
* [removeCrmCompany](docs/sdks/company/README.md#removecrmcompany) - Remove a company
* [updateCrmCompany](docs/sdks/company/README.md#updatecrmcompany) - Update a company

### [connection](docs/sdks/connection/README.md)

* [createUnifiedConnection](docs/sdks/connection/README.md#createunifiedconnection) - Create connection
* [getUnifiedConnection](docs/sdks/connection/README.md#getunifiedconnection) - Retrieve connection
* [listUnifiedConnections](docs/sdks/connection/README.md#listunifiedconnections) - List all connections
* [patchUnifiedConnection](docs/sdks/connection/README.md#patchunifiedconnection) - Update connection
* [removeUnifiedConnection](docs/sdks/connection/README.md#removeunifiedconnection) - Remove connection
* [updateUnifiedConnection](docs/sdks/connection/README.md#updateunifiedconnection) - Update connection

### [contact](docs/sdks/contact/README.md)

* [createCrmContact](docs/sdks/contact/README.md#createcrmcontact) - Create a contact
* [createUcContact](docs/sdks/contact/README.md#createuccontact) - Create a contact
* [getCrmContact](docs/sdks/contact/README.md#getcrmcontact) - Retrieve a contact
* [getUcContact](docs/sdks/contact/README.md#getuccontact) - Retrieve a contact
* [listCrmContacts](docs/sdks/contact/README.md#listcrmcontacts) - List all contacts
* [listUcContacts](docs/sdks/contact/README.md#listuccontacts) - List all contacts
* [patchCrmContact](docs/sdks/contact/README.md#patchcrmcontact) - Update a contact
* [patchUcContact](docs/sdks/contact/README.md#patchuccontact) - Update a contact
* [removeCrmContact](docs/sdks/contact/README.md#removecrmcontact) - Remove a contact
* [removeUcContact](docs/sdks/contact/README.md#removeuccontact) - Remove a contact
* [updateCrmContact](docs/sdks/contact/README.md#updatecrmcontact) - Update a contact
* [updateUcContact](docs/sdks/contact/README.md#updateuccontact) - Update a contact

### [crm](docs/sdks/crm/README.md)

* [createCrmCompany](docs/sdks/crm/README.md#createcrmcompany) - Create a company
* [createCrmContact](docs/sdks/crm/README.md#createcrmcontact) - Create a contact
* [createCrmDeal](docs/sdks/crm/README.md#createcrmdeal) - Create a deal
* [createCrmEvent](docs/sdks/crm/README.md#createcrmevent) - Create a event
* [createCrmFile](docs/sdks/crm/README.md#createcrmfile) - Create a file
* [createCrmLead](docs/sdks/crm/README.md#createcrmlead) - Create a lead
* [createCrmPipeline](docs/sdks/crm/README.md#createcrmpipeline) - Create a pipeline
* [createCrmTeam](docs/sdks/crm/README.md#createcrmteam) - Create a team
* [createCrmUser](docs/sdks/crm/README.md#createcrmuser) - Create a user
* [getCrmCompany](docs/sdks/crm/README.md#getcrmcompany) - Retrieve a company
* [getCrmContact](docs/sdks/crm/README.md#getcrmcontact) - Retrieve a contact
* [getCrmDeal](docs/sdks/crm/README.md#getcrmdeal) - Retrieve a deal
* [getCrmEvent](docs/sdks/crm/README.md#getcrmevent) - Retrieve a event
* [getCrmFile](docs/sdks/crm/README.md#getcrmfile) - Retrieve a file
* [getCrmLead](docs/sdks/crm/README.md#getcrmlead) - Retrieve a lead
* [getCrmPipeline](docs/sdks/crm/README.md#getcrmpipeline) - Retrieve a pipeline
* [getCrmTeam](docs/sdks/crm/README.md#getcrmteam) - Retrieve a team
* [getCrmUser](docs/sdks/crm/README.md#getcrmuser) - Retrieve a user
* [listCrmCompanies](docs/sdks/crm/README.md#listcrmcompanies) - List all companies
* [listCrmContacts](docs/sdks/crm/README.md#listcrmcontacts) - List all contacts
* [listCrmDeals](docs/sdks/crm/README.md#listcrmdeals) - List all deals
* [listCrmEvents](docs/sdks/crm/README.md#listcrmevents) - List all events
* [listCrmFiles](docs/sdks/crm/README.md#listcrmfiles) - List all files
* [listCrmLeads](docs/sdks/crm/README.md#listcrmleads) - List all leads
* [listCrmPipelines](docs/sdks/crm/README.md#listcrmpipelines) - List all pipelines
* [listCrmTeams](docs/sdks/crm/README.md#listcrmteams) - List all teams
* [listCrmUsers](docs/sdks/crm/README.md#listcrmusers) - List all users
* [patchCrmCompany](docs/sdks/crm/README.md#patchcrmcompany) - Update a company
* [patchCrmContact](docs/sdks/crm/README.md#patchcrmcontact) - Update a contact
* [patchCrmDeal](docs/sdks/crm/README.md#patchcrmdeal) - Update a deal
* [patchCrmEvent](docs/sdks/crm/README.md#patchcrmevent) - Update a event
* [patchCrmFile](docs/sdks/crm/README.md#patchcrmfile) - Update a file
* [patchCrmLead](docs/sdks/crm/README.md#patchcrmlead) - Update a lead
* [patchCrmPipeline](docs/sdks/crm/README.md#patchcrmpipeline) - Update a pipeline
* [patchCrmTeam](docs/sdks/crm/README.md#patchcrmteam) - Update a team
* [patchCrmUser](docs/sdks/crm/README.md#patchcrmuser) - Update a user
* [removeCrmCompany](docs/sdks/crm/README.md#removecrmcompany) - Remove a company
* [removeCrmContact](docs/sdks/crm/README.md#removecrmcontact) - Remove a contact
* [removeCrmDeal](docs/sdks/crm/README.md#removecrmdeal) - Remove a deal
* [removeCrmEvent](docs/sdks/crm/README.md#removecrmevent) - Remove a event
* [removeCrmFile](docs/sdks/crm/README.md#removecrmfile) - Remove a file
* [removeCrmLead](docs/sdks/crm/README.md#removecrmlead) - Remove a lead
* [removeCrmPipeline](docs/sdks/crm/README.md#removecrmpipeline) - Remove a pipeline
* [removeCrmTeam](docs/sdks/crm/README.md#removecrmteam) - Remove a team
* [removeCrmUser](docs/sdks/crm/README.md#removecrmuser) - Remove a user
* [updateCrmCompany](docs/sdks/crm/README.md#updatecrmcompany) - Update a company
* [updateCrmContact](docs/sdks/crm/README.md#updatecrmcontact) - Update a contact
* [updateCrmDeal](docs/sdks/crm/README.md#updatecrmdeal) - Update a deal
* [updateCrmEvent](docs/sdks/crm/README.md#updatecrmevent) - Update a event
* [updateCrmFile](docs/sdks/crm/README.md#updatecrmfile) - Update a file
* [updateCrmLead](docs/sdks/crm/README.md#updatecrmlead) - Update a lead
* [updateCrmPipeline](docs/sdks/crm/README.md#updatecrmpipeline) - Update a pipeline
* [updateCrmTeam](docs/sdks/crm/README.md#updatecrmteam) - Update a team
* [updateCrmUser](docs/sdks/crm/README.md#updatecrmuser) - Update a user

### [customer](docs/sdks/customer/README.md)

* [createTicketingCustomer](docs/sdks/customer/README.md#createticketingcustomer) - Create a customer
* [getTicketingCustomer](docs/sdks/customer/README.md#getticketingcustomer) - Retrieve a customer
* [listTicketingCustomers](docs/sdks/customer/README.md#listticketingcustomers) - List all customers
* [patchTicketingCustomer](docs/sdks/customer/README.md#patchticketingcustomer) - Update a customer
* [removeTicketingCustomer](docs/sdks/customer/README.md#removeticketingcustomer) - Remove a customer
* [updateTicketingCustomer](docs/sdks/customer/README.md#updateticketingcustomer) - Update a customer

### [deal](docs/sdks/deal/README.md)

* [createCrmDeal](docs/sdks/deal/README.md#createcrmdeal) - Create a deal
* [getCrmDeal](docs/sdks/deal/README.md#getcrmdeal) - Retrieve a deal
* [listCrmDeals](docs/sdks/deal/README.md#listcrmdeals) - List all deals
* [patchCrmDeal](docs/sdks/deal/README.md#patchcrmdeal) - Update a deal
* [removeCrmDeal](docs/sdks/deal/README.md#removecrmdeal) - Remove a deal
* [updateCrmDeal](docs/sdks/deal/README.md#updatecrmdeal) - Update a deal

### [document](docs/sdks/document/README.md)

* [createAtsScorecard](docs/sdks/document/README.md#createatsscorecard) - Create a scorecard
* [getAtsScorecard](docs/sdks/document/README.md#getatsscorecard) - Retrieve a scorecard
* [listAtsScorecards](docs/sdks/document/README.md#listatsscorecards) - List all scorecards
* [patchAtsScorecard](docs/sdks/document/README.md#patchatsscorecard) - Update a scorecard
* [removeAtsScorecard](docs/sdks/document/README.md#removeatsscorecard) - Remove a scorecard
* [updateAtsScorecard](docs/sdks/document/README.md#updateatsscorecard) - Update a scorecard

### [employee](docs/sdks/employee/README.md)

* [createHrisEmployee](docs/sdks/employee/README.md#createhrisemployee) - Create an employee
* [getHrisEmployee](docs/sdks/employee/README.md#gethrisemployee) - Retrieve an employee
* [listHrisEmployees](docs/sdks/employee/README.md#listhrisemployees) - List all employees
* [patchHrisEmployee](docs/sdks/employee/README.md#patchhrisemployee) - Update an employee
* [removeHrisEmployee](docs/sdks/employee/README.md#removehrisemployee) - Remove an employee
* [updateHrisEmployee](docs/sdks/employee/README.md#updatehrisemployee) - Update an employee

### [enrich](docs/sdks/enrich/README.md)

* [listEnrichCompanies](docs/sdks/enrich/README.md#listenrichcompanies) - Retrieve enrichment information for a company
* [listEnrichPeople](docs/sdks/enrich/README.md#listenrichpeople) - Retrieve enrichment information for a person

### [event](docs/sdks/event/README.md)

* [createCrmEvent](docs/sdks/event/README.md#createcrmevent) - Create a event
* [getCrmEvent](docs/sdks/event/README.md#getcrmevent) - Retrieve a event
* [listCrmEvents](docs/sdks/event/README.md#listcrmevents) - List all events
* [patchCrmEvent](docs/sdks/event/README.md#patchcrmevent) - Update a event
* [removeCrmEvent](docs/sdks/event/README.md#removecrmevent) - Remove a event
* [updateCrmEvent](docs/sdks/event/README.md#updatecrmevent) - Update a event

### [file](docs/sdks/file/README.md)

* [createCrmFile](docs/sdks/file/README.md#createcrmfile) - Create a file
* [getCrmFile](docs/sdks/file/README.md#getcrmfile) - Retrieve a file
* [listCrmFiles](docs/sdks/file/README.md#listcrmfiles) - List all files
* [patchCrmFile](docs/sdks/file/README.md#patchcrmfile) - Update a file
* [removeCrmFile](docs/sdks/file/README.md#removecrmfile) - Remove a file
* [updateCrmFile](docs/sdks/file/README.md#updatecrmfile) - Update a file

### [group](docs/sdks/group/README.md)

* [createHrisGroup](docs/sdks/group/README.md#createhrisgroup) - Create a group
* [getHrisGroup](docs/sdks/group/README.md#gethrisgroup) - Retrieve a group
* [listHrisGroups](docs/sdks/group/README.md#listhrisgroups) - List all groups
* [patchHrisGroup](docs/sdks/group/README.md#patchhrisgroup) - Update a group
* [removeHrisGroup](docs/sdks/group/README.md#removehrisgroup) - Remove a group
* [updateHrisGroup](docs/sdks/group/README.md#updatehrisgroup) - Update a group

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

### [integration](docs/sdks/integration/README.md)

* [getUnifiedIntegration](docs/sdks/integration/README.md#getunifiedintegration) - Retrieve an integration
* [getUnifiedIntegrationAuth](docs/sdks/integration/README.md#getunifiedintegrationauth) - Create connection indirectly
* [listUnifiedIntegrationWorkspaces](docs/sdks/integration/README.md#listunifiedintegrationworkspaces) - Returns all activated integrations in a workspace
* [listUnifiedIntegrations](docs/sdks/integration/README.md#listunifiedintegrations) - Returns all integrations

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

### [lead](docs/sdks/lead/README.md)

* [createCrmLead](docs/sdks/lead/README.md#createcrmlead) - Create a lead
* [getCrmLead](docs/sdks/lead/README.md#getcrmlead) - Retrieve a lead
* [listCrmLeads](docs/sdks/lead/README.md#listcrmleads) - List all leads
* [patchCrmLead](docs/sdks/lead/README.md#patchcrmlead) - Update a lead
* [removeCrmLead](docs/sdks/lead/README.md#removecrmlead) - Remove a lead
* [updateCrmLead](docs/sdks/lead/README.md#updatecrmlead) - Update a lead

### [list](docs/sdks/list/README.md)

* [createMartechList](docs/sdks/list/README.md#createmartechlist) - Create a list
* [getMartechList](docs/sdks/list/README.md#getmartechlist) - Retrieve a list
* [listMartechLists](docs/sdks/list/README.md#listmartechlists) - List all lists
* [patchMartechList](docs/sdks/list/README.md#patchmartechlist) - Update a list
* [removeMartechList](docs/sdks/list/README.md#removemartechlist) - Remove a list
* [updateMartechList](docs/sdks/list/README.md#updatemartechlist) - Update a list

### [login](docs/sdks/login/README.md)

* [getUnifiedIntegrationLogin](docs/sdks/login/README.md#getunifiedintegrationlogin) - Sign in a user

### [martech](docs/sdks/martech/README.md)

* [createMartechList](docs/sdks/martech/README.md#createmartechlist) - Create a list
* [createMartechMember](docs/sdks/martech/README.md#createmartechmember) - Create a member in a list
* [getMartechList](docs/sdks/martech/README.md#getmartechlist) - Retrieve a list
* [getMartechMember](docs/sdks/martech/README.md#getmartechmember) - Retrieve a member from a list
* [listMartechLists](docs/sdks/martech/README.md#listmartechlists) - List all lists
* [listMartechMembers](docs/sdks/martech/README.md#listmartechmembers) - List all members in a list
* [patchMartechList](docs/sdks/martech/README.md#patchmartechlist) - Update a list
* [patchMartechMember](docs/sdks/martech/README.md#patchmartechmember) - Update a member in a list
* [removeMartechList](docs/sdks/martech/README.md#removemartechlist) - Remove a list
* [removeMartechMember](docs/sdks/martech/README.md#removemartechmember) - Remove member from a list
* [updateMartechList](docs/sdks/martech/README.md#updatemartechlist) - Update a list
* [updateMartechMember](docs/sdks/martech/README.md#updatemartechmember) - Update a member in a list

### [member](docs/sdks/member/README.md)

* [createMartechMember](docs/sdks/member/README.md#createmartechmember) - Create a member in a list
* [getMartechMember](docs/sdks/member/README.md#getmartechmember) - Retrieve a member from a list
* [listMartechMembers](docs/sdks/member/README.md#listmartechmembers) - List all members in a list
* [patchMartechMember](docs/sdks/member/README.md#patchmartechmember) - Update a member in a list
* [removeMartechMember](docs/sdks/member/README.md#removemartechmember) - Remove member from a list
* [updateMartechMember](docs/sdks/member/README.md#updatemartechmember) - Update a member in a list

### [note](docs/sdks/note/README.md)

* [createTicketingNote](docs/sdks/note/README.md#createticketingnote) - Create a note
* [getTicketingNote](docs/sdks/note/README.md#getticketingnote) - Retrieve a note
* [listTicketingNotes](docs/sdks/note/README.md#listticketingnotes) - List all notes
* [patchTicketingNote](docs/sdks/note/README.md#patchticketingnote) - Update a note
* [removeTicketingNote](docs/sdks/note/README.md#removeticketingnote) - Remove a note
* [updateTicketingNote](docs/sdks/note/README.md#updateticketingnote) - Update a note

### [passthrough](docs/sdks/passthrough/README.md)

* [createPassthrough](docs/sdks/passthrough/README.md#createpassthrough) - Passthrough POST
* [listPassthroughs](docs/sdks/passthrough/README.md#listpassthroughs) - Passthrough GET
* [patchPassthrough](docs/sdks/passthrough/README.md#patchpassthrough) - Passthrough PUT
* [removePassthrough](docs/sdks/passthrough/README.md#removepassthrough) - Passthrough DELETE
* [updatePassthrough](docs/sdks/passthrough/README.md#updatepassthrough) - Passthrough PUT

### [person](docs/sdks/person/README.md)

* [listEnrichPeople](docs/sdks/person/README.md#listenrichpeople) - Retrieve enrichment information for a person

### [pipeline](docs/sdks/pipeline/README.md)

* [createCrmPipeline](docs/sdks/pipeline/README.md#createcrmpipeline) - Create a pipeline
* [getCrmPipeline](docs/sdks/pipeline/README.md#getcrmpipeline) - Retrieve a pipeline
* [listCrmPipelines](docs/sdks/pipeline/README.md#listcrmpipelines) - List all pipelines
* [patchCrmPipeline](docs/sdks/pipeline/README.md#patchcrmpipeline) - Update a pipeline
* [removeCrmPipeline](docs/sdks/pipeline/README.md#removecrmpipeline) - Remove a pipeline
* [updateCrmPipeline](docs/sdks/pipeline/README.md#updatecrmpipeline) - Update a pipeline

### [team](docs/sdks/team/README.md)

* [createCrmTeam](docs/sdks/team/README.md#createcrmteam) - Create a team
* [getCrmTeam](docs/sdks/team/README.md#getcrmteam) - Retrieve a team
* [listCrmTeams](docs/sdks/team/README.md#listcrmteams) - List all teams
* [patchCrmTeam](docs/sdks/team/README.md#patchcrmteam) - Update a team
* [removeCrmTeam](docs/sdks/team/README.md#removecrmteam) - Remove a team
* [updateCrmTeam](docs/sdks/team/README.md#updatecrmteam) - Update a team

### [ticket](docs/sdks/ticket/README.md)

* [createTicketingTicket](docs/sdks/ticket/README.md#createticketingticket) - Create a ticket
* [getTicketingTicket](docs/sdks/ticket/README.md#getticketingticket) - Retrieve a ticket
* [listTicketingTickets](docs/sdks/ticket/README.md#listticketingtickets) - List all tickets
* [patchTicketingTicket](docs/sdks/ticket/README.md#patchticketingticket) - Update a ticket
* [removeTicketingTicket](docs/sdks/ticket/README.md#removeticketingticket) - Remove a ticket
* [updateTicketingTicket](docs/sdks/ticket/README.md#updateticketingticket) - Update a ticket

### [ticketing](docs/sdks/ticketing/README.md)

* [createTicketingAgent](docs/sdks/ticketing/README.md#createticketingagent) - Create a agent
* [createTicketingCustomer](docs/sdks/ticketing/README.md#createticketingcustomer) - Create a customer
* [createTicketingNote](docs/sdks/ticketing/README.md#createticketingnote) - Create a note
* [createTicketingTicket](docs/sdks/ticketing/README.md#createticketingticket) - Create a ticket
* [getTicketingAgent](docs/sdks/ticketing/README.md#getticketingagent) - Retrieve a agent
* [getTicketingCustomer](docs/sdks/ticketing/README.md#getticketingcustomer) - Retrieve a customer
* [getTicketingNote](docs/sdks/ticketing/README.md#getticketingnote) - Retrieve a note
* [getTicketingTicket](docs/sdks/ticketing/README.md#getticketingticket) - Retrieve a ticket
* [listTicketingAgents](docs/sdks/ticketing/README.md#listticketingagents) - List all agents
* [listTicketingCustomers](docs/sdks/ticketing/README.md#listticketingcustomers) - List all customers
* [listTicketingNotes](docs/sdks/ticketing/README.md#listticketingnotes) - List all notes
* [listTicketingTickets](docs/sdks/ticketing/README.md#listticketingtickets) - List all tickets
* [patchTicketingAgent](docs/sdks/ticketing/README.md#patchticketingagent) - Update a agent
* [patchTicketingCustomer](docs/sdks/ticketing/README.md#patchticketingcustomer) - Update a customer
* [patchTicketingNote](docs/sdks/ticketing/README.md#patchticketingnote) - Update a note
* [patchTicketingTicket](docs/sdks/ticketing/README.md#patchticketingticket) - Update a ticket
* [removeTicketingAgent](docs/sdks/ticketing/README.md#removeticketingagent) - Remove a agent
* [removeTicketingCustomer](docs/sdks/ticketing/README.md#removeticketingcustomer) - Remove a customer
* [removeTicketingNote](docs/sdks/ticketing/README.md#removeticketingnote) - Remove a note
* [removeTicketingTicket](docs/sdks/ticketing/README.md#removeticketingticket) - Remove a ticket
* [updateTicketingAgent](docs/sdks/ticketing/README.md#updateticketingagent) - Update a agent
* [updateTicketingCustomer](docs/sdks/ticketing/README.md#updateticketingcustomer) - Update a customer
* [updateTicketingNote](docs/sdks/ticketing/README.md#updateticketingnote) - Update a note
* [updateTicketingTicket](docs/sdks/ticketing/README.md#updateticketingticket) - Update a ticket

### [uc](docs/sdks/uc/README.md)

* [createUcContact](docs/sdks/uc/README.md#createuccontact) - Create a contact
* [getUcContact](docs/sdks/uc/README.md#getuccontact) - Retrieve a contact
* [listUcAgents](docs/sdks/uc/README.md#listucagents) - List all agents
* [listUcCalls](docs/sdks/uc/README.md#listuccalls) - List all calls
* [listUcContacts](docs/sdks/uc/README.md#listuccontacts) - List all contacts
* [patchUcContact](docs/sdks/uc/README.md#patchuccontact) - Update a contact
* [removeUcContact](docs/sdks/uc/README.md#removeuccontact) - Remove a contact
* [updateUcContact](docs/sdks/uc/README.md#updateuccontact) - Update a contact

### [unified](docs/sdks/unified/README.md)

* [createUnifiedConnection](docs/sdks/unified/README.md#createunifiedconnection) - Create connection
* [createUnifiedWebhook](docs/sdks/unified/README.md#createunifiedwebhook) - Create webhook subscription
* [getUnifiedApicall](docs/sdks/unified/README.md#getunifiedapicall) - Retrieve specific API Call by its ID
* [getUnifiedConnection](docs/sdks/unified/README.md#getunifiedconnection) - Retrieve connection
* [getUnifiedIntegration](docs/sdks/unified/README.md#getunifiedintegration) - Retrieve an integration
* [getUnifiedIntegrationAuth](docs/sdks/unified/README.md#getunifiedintegrationauth) - Create connection indirectly
* [getUnifiedWebhook](docs/sdks/unified/README.md#getunifiedwebhook) - Retrieve webhook by its ID
* [listUnifiedApicalls](docs/sdks/unified/README.md#listunifiedapicalls) - Returns API Calls
* [listUnifiedConnections](docs/sdks/unified/README.md#listunifiedconnections) - List all connections
* [listUnifiedIntegrationWorkspaces](docs/sdks/unified/README.md#listunifiedintegrationworkspaces) - Returns all activated integrations in a workspace
* [listUnifiedIntegrations](docs/sdks/unified/README.md#listunifiedintegrations) - Returns all integrations
* [listUnifiedWebhooks](docs/sdks/unified/README.md#listunifiedwebhooks) - Returns all registered webhooks
* [patchUnifiedConnection](docs/sdks/unified/README.md#patchunifiedconnection) - Update connection
* [removeUnifiedConnection](docs/sdks/unified/README.md#removeunifiedconnection) - Remove connection
* [removeUnifiedWebhook](docs/sdks/unified/README.md#removeunifiedwebhook) - Remove webhook subscription
* [updateUnifiedConnection](docs/sdks/unified/README.md#updateunifiedconnection) - Update connection

### [user](docs/sdks/user/README.md)

* [createCrmUser](docs/sdks/user/README.md#createcrmuser) - Create a user
* [getCrmUser](docs/sdks/user/README.md#getcrmuser) - Retrieve a user
* [listCrmUsers](docs/sdks/user/README.md#listcrmusers) - List all users
* [patchCrmUser](docs/sdks/user/README.md#patchcrmuser) - Update a user
* [removeCrmUser](docs/sdks/user/README.md#removecrmuser) - Remove a user
* [updateCrmUser](docs/sdks/user/README.md#updatecrmuser) - Update a user

### [webhook](docs/sdks/webhook/README.md)

* [createUnifiedWebhook](docs/sdks/webhook/README.md#createunifiedwebhook) - Create webhook subscription
* [getUnifiedWebhook](docs/sdks/webhook/README.md#getunifiedwebhook) - Retrieve webhook by its ID
* [listUnifiedWebhooks](docs/sdks/webhook/README.md#listunifiedwebhooks) - Returns all registered webhooks
* [removeUnifiedWebhook](docs/sdks/webhook/README.md#removeunifiedwebhook) - Remove webhook subscription
<!-- End SDK Available Operations -->

<!-- Start Dev Containers -->

<!-- End Dev Containers -->

<!-- Start Pagination -->
# Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you make your SDK calls as usual, but the
returned response object will have a `next` method that can be called to pull down the next group of results. If the
return value of `next` is `null`, then there are no more pages to be fetched.

Here's an example of one such pagination call:
<!-- End Pagination -->

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
