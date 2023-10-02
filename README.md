# Unified-to

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/unified-to/unified-typescript-sdk.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/bolt-php/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
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
import { UnifiedTo } from "Unified-to";
import { DeleteTicketingConnectionIdAgentIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.agent.deleteTicketingConnectionIdAgentId({
  connectionId: "navigate",
  id: "<ID>",
}).then((res: DeleteTicketingConnectionIdAgentIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [agent](docs/sdks/agent/README.md)

* [deleteTicketingConnectionIdAgentId](docs/sdks/agent/README.md#deleteticketingconnectionidagentid) - Remove a agent
* [getTicketingConnectionIdAgent](docs/sdks/agent/README.md#getticketingconnectionidagent) - List all agents
* [getTicketingConnectionIdAgentId](docs/sdks/agent/README.md#getticketingconnectionidagentid) - Retrieve a agent
* [getUcConnectionIdAgent](docs/sdks/agent/README.md#getucconnectionidagent) - List all agents
* [patchTicketingConnectionIdAgentId](docs/sdks/agent/README.md#patchticketingconnectionidagentid) - Update a agent
* [postTicketingConnectionIdAgent](docs/sdks/agent/README.md#postticketingconnectionidagent) - Create a agent
* [putTicketingConnectionIdAgentId](docs/sdks/agent/README.md#putticketingconnectionidagentid) - Update a agent

### [apicall](docs/sdks/apicall/README.md)

* [getUnifiedApicall](docs/sdks/apicall/README.md#getunifiedapicall) - Returns API Calls
* [getUnifiedApicallId](docs/sdks/apicall/README.md#getunifiedapicallid) - Retrieve specific API Call by its ID

### [application](docs/sdks/application/README.md)

* [deleteAtsConnectionIdApplicationId](docs/sdks/application/README.md#deleteatsconnectionidapplicationid) - Remove an application
* [getAtsConnectionIdApplication](docs/sdks/application/README.md#getatsconnectionidapplication) - List all applications
* [getAtsConnectionIdApplicationId](docs/sdks/application/README.md#getatsconnectionidapplicationid) - Retrieve an application
* [patchAtsConnectionIdApplicationId](docs/sdks/application/README.md#patchatsconnectionidapplicationid) - Update an application
* [postAtsConnectionIdApplication](docs/sdks/application/README.md#postatsconnectionidapplication) - Create an application
* [putAtsConnectionIdApplicationId](docs/sdks/application/README.md#putatsconnectionidapplicationid) - Update an application

### [ats](docs/sdks/ats/README.md)

* [deleteAtsConnectionIdApplicationId](docs/sdks/ats/README.md#deleteatsconnectionidapplicationid) - Remove an application
* [deleteAtsConnectionIdCandidateId](docs/sdks/ats/README.md#deleteatsconnectionidcandidateid) - Remove a candidate
* [deleteAtsConnectionIdInterviewId](docs/sdks/ats/README.md#deleteatsconnectionidinterviewid) - Remove a interview
* [deleteAtsConnectionIdJobId](docs/sdks/ats/README.md#deleteatsconnectionidjobid) - Remove a job
* [deleteAtsConnectionIdScorecardId](docs/sdks/ats/README.md#deleteatsconnectionidscorecardid) - Remove a scorecard
* [getAtsConnectionIdApplication](docs/sdks/ats/README.md#getatsconnectionidapplication) - List all applications
* [getAtsConnectionIdApplicationId](docs/sdks/ats/README.md#getatsconnectionidapplicationid) - Retrieve an application
* [getAtsConnectionIdCandidate](docs/sdks/ats/README.md#getatsconnectionidcandidate) - List all candidates
* [getAtsConnectionIdCandidateId](docs/sdks/ats/README.md#getatsconnectionidcandidateid) - Retrieve a candidate
* [getAtsConnectionIdInterview](docs/sdks/ats/README.md#getatsconnectionidinterview) - List all interviews
* [getAtsConnectionIdInterviewId](docs/sdks/ats/README.md#getatsconnectionidinterviewid) - Retrieve a interview
* [getAtsConnectionIdJob](docs/sdks/ats/README.md#getatsconnectionidjob) - List all jobs
* [getAtsConnectionIdJobId](docs/sdks/ats/README.md#getatsconnectionidjobid) - Retrieve a job
* [getAtsConnectionIdScorecard](docs/sdks/ats/README.md#getatsconnectionidscorecard) - List all scorecards
* [getAtsConnectionIdScorecardId](docs/sdks/ats/README.md#getatsconnectionidscorecardid) - Retrieve a scorecard
* [patchAtsConnectionIdApplicationId](docs/sdks/ats/README.md#patchatsconnectionidapplicationid) - Update an application
* [patchAtsConnectionIdCandidateId](docs/sdks/ats/README.md#patchatsconnectionidcandidateid) - Update a candidate
* [patchAtsConnectionIdInterviewId](docs/sdks/ats/README.md#patchatsconnectionidinterviewid) - Update a interview
* [patchAtsConnectionIdJobId](docs/sdks/ats/README.md#patchatsconnectionidjobid) - Update a job
* [patchAtsConnectionIdScorecardId](docs/sdks/ats/README.md#patchatsconnectionidscorecardid) - Update a scorecard
* [postAtsConnectionIdApplication](docs/sdks/ats/README.md#postatsconnectionidapplication) - Create an application
* [postAtsConnectionIdCandidate](docs/sdks/ats/README.md#postatsconnectionidcandidate) - Create a candidate
* [postAtsConnectionIdInterview](docs/sdks/ats/README.md#postatsconnectionidinterview) - Create a interview
* [postAtsConnectionIdJob](docs/sdks/ats/README.md#postatsconnectionidjob) - Create a job
* [postAtsConnectionIdScorecard](docs/sdks/ats/README.md#postatsconnectionidscorecard) - Create a scorecard
* [putAtsConnectionIdApplicationId](docs/sdks/ats/README.md#putatsconnectionidapplicationid) - Update an application
* [putAtsConnectionIdCandidateId](docs/sdks/ats/README.md#putatsconnectionidcandidateid) - Update a candidate
* [putAtsConnectionIdInterviewId](docs/sdks/ats/README.md#putatsconnectionidinterviewid) - Update a interview
* [putAtsConnectionIdJobId](docs/sdks/ats/README.md#putatsconnectionidjobid) - Update a job
* [putAtsConnectionIdScorecardId](docs/sdks/ats/README.md#putatsconnectionidscorecardid) - Update a scorecard

### [auth](docs/sdks/auth/README.md)

* [getUnifiedIntegrationAuthWorkspaceIdIntegrationType](docs/sdks/auth/README.md#getunifiedintegrationauthworkspaceidintegrationtype) - Create connection indirectly
* [getUnifiedIntegrationLoginWorkspaceIdIntegrationType](docs/sdks/auth/README.md#getunifiedintegrationloginworkspaceidintegrationtype) - Sign in a user

### [call](docs/sdks/call/README.md)

* [getUcConnectionIdCall](docs/sdks/call/README.md#getucconnectionidcall) - List all calls

### [candidate](docs/sdks/candidate/README.md)

* [deleteAtsConnectionIdCandidateId](docs/sdks/candidate/README.md#deleteatsconnectionidcandidateid) - Remove a candidate
* [getAtsConnectionIdCandidate](docs/sdks/candidate/README.md#getatsconnectionidcandidate) - List all candidates
* [getAtsConnectionIdCandidateId](docs/sdks/candidate/README.md#getatsconnectionidcandidateid) - Retrieve a candidate
* [patchAtsConnectionIdCandidateId](docs/sdks/candidate/README.md#patchatsconnectionidcandidateid) - Update a candidate
* [postAtsConnectionIdCandidate](docs/sdks/candidate/README.md#postatsconnectionidcandidate) - Create a candidate
* [putAtsConnectionIdCandidateId](docs/sdks/candidate/README.md#putatsconnectionidcandidateid) - Update a candidate

### [company](docs/sdks/company/README.md)

* [deleteCrmConnectionIdCompanyId](docs/sdks/company/README.md#deletecrmconnectionidcompanyid) - Remove a company
* [getCrmConnectionIdCompany](docs/sdks/company/README.md#getcrmconnectionidcompany) - List all companies
* [getCrmConnectionIdCompanyId](docs/sdks/company/README.md#getcrmconnectionidcompanyid) - Retrieve a company
* [getEnrichConnectionIdCompany](docs/sdks/company/README.md#getenrichconnectionidcompany) - Retrieve enrichment information for a company
* [patchCrmConnectionIdCompanyId](docs/sdks/company/README.md#patchcrmconnectionidcompanyid) - Update a company
* [postCrmConnectionIdCompany](docs/sdks/company/README.md#postcrmconnectionidcompany) - Create a company
* [putCrmConnectionIdCompanyId](docs/sdks/company/README.md#putcrmconnectionidcompanyid) - Update a company

### [connection](docs/sdks/connection/README.md)

* [deleteUnifiedConnectionId](docs/sdks/connection/README.md#deleteunifiedconnectionid) - Remove connection
* [getUnifiedConnection](docs/sdks/connection/README.md#getunifiedconnection) - List all connections
* [getUnifiedConnectionId](docs/sdks/connection/README.md#getunifiedconnectionid) - Retrieve connection
* [patchUnifiedConnectionId](docs/sdks/connection/README.md#patchunifiedconnectionid) - Update connection
* [postUnifiedConnection](docs/sdks/connection/README.md#postunifiedconnection) - Create connection
* [putUnifiedConnectionId](docs/sdks/connection/README.md#putunifiedconnectionid) - Update connection

### [contact](docs/sdks/contact/README.md)

* [deleteCrmConnectionIdContactId](docs/sdks/contact/README.md#deletecrmconnectionidcontactid) - Remove a contact
* [deleteUcConnectionIdContactId](docs/sdks/contact/README.md#deleteucconnectionidcontactid) - Remove a contact
* [getCrmConnectionIdContact](docs/sdks/contact/README.md#getcrmconnectionidcontact) - List all contacts
* [getCrmConnectionIdContactId](docs/sdks/contact/README.md#getcrmconnectionidcontactid) - Retrieve a contact
* [getUcConnectionIdContact](docs/sdks/contact/README.md#getucconnectionidcontact) - List all contacts
* [getUcConnectionIdContactId](docs/sdks/contact/README.md#getucconnectionidcontactid) - Retrieve a contact
* [patchCrmConnectionIdContactId](docs/sdks/contact/README.md#patchcrmconnectionidcontactid) - Update a contact
* [patchUcConnectionIdContactId](docs/sdks/contact/README.md#patchucconnectionidcontactid) - Update a contact
* [postCrmConnectionIdContact](docs/sdks/contact/README.md#postcrmconnectionidcontact) - Create a contact
* [postUcConnectionIdContact](docs/sdks/contact/README.md#postucconnectionidcontact) - Create a contact
* [putCrmConnectionIdContactId](docs/sdks/contact/README.md#putcrmconnectionidcontactid) - Update a contact
* [putUcConnectionIdContactId](docs/sdks/contact/README.md#putucconnectionidcontactid) - Update a contact

### [crm](docs/sdks/crm/README.md)

* [deleteCrmConnectionIdCompanyId](docs/sdks/crm/README.md#deletecrmconnectionidcompanyid) - Remove a company
* [deleteCrmConnectionIdContactId](docs/sdks/crm/README.md#deletecrmconnectionidcontactid) - Remove a contact
* [deleteCrmConnectionIdDealId](docs/sdks/crm/README.md#deletecrmconnectioniddealid) - Remove a deal
* [deleteCrmConnectionIdEventId](docs/sdks/crm/README.md#deletecrmconnectionideventid) - Remove a event
* [deleteCrmConnectionIdFileId](docs/sdks/crm/README.md#deletecrmconnectionidfileid) - Remove a file
* [deleteCrmConnectionIdLeadId](docs/sdks/crm/README.md#deletecrmconnectionidleadid) - Remove a lead
* [deleteCrmConnectionIdPipelineId](docs/sdks/crm/README.md#deletecrmconnectionidpipelineid) - Remove a pipeline
* [deleteCrmConnectionIdTeamId](docs/sdks/crm/README.md#deletecrmconnectionidteamid) - Remove a team
* [deleteCrmConnectionIdUserId](docs/sdks/crm/README.md#deletecrmconnectioniduserid) - Remove a user
* [getCrmConnectionIdCompany](docs/sdks/crm/README.md#getcrmconnectionidcompany) - List all companies
* [getCrmConnectionIdCompanyId](docs/sdks/crm/README.md#getcrmconnectionidcompanyid) - Retrieve a company
* [getCrmConnectionIdContact](docs/sdks/crm/README.md#getcrmconnectionidcontact) - List all contacts
* [getCrmConnectionIdContactId](docs/sdks/crm/README.md#getcrmconnectionidcontactid) - Retrieve a contact
* [getCrmConnectionIdDeal](docs/sdks/crm/README.md#getcrmconnectioniddeal) - List all deals
* [getCrmConnectionIdDealId](docs/sdks/crm/README.md#getcrmconnectioniddealid) - Retrieve a deal
* [getCrmConnectionIdEvent](docs/sdks/crm/README.md#getcrmconnectionidevent) - List all events
* [getCrmConnectionIdEventId](docs/sdks/crm/README.md#getcrmconnectionideventid) - Retrieve a event
* [getCrmConnectionIdFile](docs/sdks/crm/README.md#getcrmconnectionidfile) - List all files
* [getCrmConnectionIdFileId](docs/sdks/crm/README.md#getcrmconnectionidfileid) - Retrieve a file
* [getCrmConnectionIdLead](docs/sdks/crm/README.md#getcrmconnectionidlead) - List all leads
* [getCrmConnectionIdLeadId](docs/sdks/crm/README.md#getcrmconnectionidleadid) - Retrieve a lead
* [getCrmConnectionIdPipeline](docs/sdks/crm/README.md#getcrmconnectionidpipeline) - List all pipelines
* [getCrmConnectionIdPipelineId](docs/sdks/crm/README.md#getcrmconnectionidpipelineid) - Retrieve a pipeline
* [getCrmConnectionIdTeam](docs/sdks/crm/README.md#getcrmconnectionidteam) - List all teams
* [getCrmConnectionIdTeamId](docs/sdks/crm/README.md#getcrmconnectionidteamid) - Retrieve a team
* [getCrmConnectionIdUser](docs/sdks/crm/README.md#getcrmconnectioniduser) - List all users
* [getCrmConnectionIdUserId](docs/sdks/crm/README.md#getcrmconnectioniduserid) - Retrieve a user
* [patchCrmConnectionIdCompanyId](docs/sdks/crm/README.md#patchcrmconnectionidcompanyid) - Update a company
* [patchCrmConnectionIdContactId](docs/sdks/crm/README.md#patchcrmconnectionidcontactid) - Update a contact
* [patchCrmConnectionIdDealId](docs/sdks/crm/README.md#patchcrmconnectioniddealid) - Update a deal
* [patchCrmConnectionIdEventId](docs/sdks/crm/README.md#patchcrmconnectionideventid) - Update a event
* [patchCrmConnectionIdFileId](docs/sdks/crm/README.md#patchcrmconnectionidfileid) - Update a file
* [patchCrmConnectionIdLeadId](docs/sdks/crm/README.md#patchcrmconnectionidleadid) - Update a lead
* [patchCrmConnectionIdPipelineId](docs/sdks/crm/README.md#patchcrmconnectionidpipelineid) - Update a pipeline
* [patchCrmConnectionIdTeamId](docs/sdks/crm/README.md#patchcrmconnectionidteamid) - Update a team
* [patchCrmConnectionIdUserId](docs/sdks/crm/README.md#patchcrmconnectioniduserid) - Update a user
* [postCrmConnectionIdCompany](docs/sdks/crm/README.md#postcrmconnectionidcompany) - Create a company
* [postCrmConnectionIdContact](docs/sdks/crm/README.md#postcrmconnectionidcontact) - Create a contact
* [postCrmConnectionIdDeal](docs/sdks/crm/README.md#postcrmconnectioniddeal) - Create a deal
* [postCrmConnectionIdEvent](docs/sdks/crm/README.md#postcrmconnectionidevent) - Create a event
* [postCrmConnectionIdFile](docs/sdks/crm/README.md#postcrmconnectionidfile) - Create a file
* [postCrmConnectionIdLead](docs/sdks/crm/README.md#postcrmconnectionidlead) - Create a lead
* [postCrmConnectionIdPipeline](docs/sdks/crm/README.md#postcrmconnectionidpipeline) - Create a pipeline
* [postCrmConnectionIdTeam](docs/sdks/crm/README.md#postcrmconnectionidteam) - Create a team
* [postCrmConnectionIdUser](docs/sdks/crm/README.md#postcrmconnectioniduser) - Create a user
* [putCrmConnectionIdCompanyId](docs/sdks/crm/README.md#putcrmconnectionidcompanyid) - Update a company
* [putCrmConnectionIdContactId](docs/sdks/crm/README.md#putcrmconnectionidcontactid) - Update a contact
* [putCrmConnectionIdDealId](docs/sdks/crm/README.md#putcrmconnectioniddealid) - Update a deal
* [putCrmConnectionIdEventId](docs/sdks/crm/README.md#putcrmconnectionideventid) - Update a event
* [putCrmConnectionIdFileId](docs/sdks/crm/README.md#putcrmconnectionidfileid) - Update a file
* [putCrmConnectionIdLeadId](docs/sdks/crm/README.md#putcrmconnectionidleadid) - Update a lead
* [putCrmConnectionIdPipelineId](docs/sdks/crm/README.md#putcrmconnectionidpipelineid) - Update a pipeline
* [putCrmConnectionIdTeamId](docs/sdks/crm/README.md#putcrmconnectionidteamid) - Update a team
* [putCrmConnectionIdUserId](docs/sdks/crm/README.md#putcrmconnectioniduserid) - Update a user

### [customer](docs/sdks/customer/README.md)

* [deleteTicketingConnectionIdCustomerId](docs/sdks/customer/README.md#deleteticketingconnectionidcustomerid) - Remove a customer
* [getTicketingConnectionIdCustomer](docs/sdks/customer/README.md#getticketingconnectionidcustomer) - List all customers
* [getTicketingConnectionIdCustomerId](docs/sdks/customer/README.md#getticketingconnectionidcustomerid) - Retrieve a customer
* [patchTicketingConnectionIdCustomerId](docs/sdks/customer/README.md#patchticketingconnectionidcustomerid) - Update a customer
* [postTicketingConnectionIdCustomer](docs/sdks/customer/README.md#postticketingconnectionidcustomer) - Create a customer
* [putTicketingConnectionIdCustomerId](docs/sdks/customer/README.md#putticketingconnectionidcustomerid) - Update a customer

### [deal](docs/sdks/deal/README.md)

* [deleteCrmConnectionIdDealId](docs/sdks/deal/README.md#deletecrmconnectioniddealid) - Remove a deal
* [getCrmConnectionIdDeal](docs/sdks/deal/README.md#getcrmconnectioniddeal) - List all deals
* [getCrmConnectionIdDealId](docs/sdks/deal/README.md#getcrmconnectioniddealid) - Retrieve a deal
* [patchCrmConnectionIdDealId](docs/sdks/deal/README.md#patchcrmconnectioniddealid) - Update a deal
* [postCrmConnectionIdDeal](docs/sdks/deal/README.md#postcrmconnectioniddeal) - Create a deal
* [putCrmConnectionIdDealId](docs/sdks/deal/README.md#putcrmconnectioniddealid) - Update a deal

### [document](docs/sdks/document/README.md)

* [deleteAtsConnectionIdScorecardId](docs/sdks/document/README.md#deleteatsconnectionidscorecardid) - Remove a scorecard
* [getAtsConnectionIdScorecard](docs/sdks/document/README.md#getatsconnectionidscorecard) - List all scorecards
* [getAtsConnectionIdScorecardId](docs/sdks/document/README.md#getatsconnectionidscorecardid) - Retrieve a scorecard
* [patchAtsConnectionIdScorecardId](docs/sdks/document/README.md#patchatsconnectionidscorecardid) - Update a scorecard
* [postAtsConnectionIdScorecard](docs/sdks/document/README.md#postatsconnectionidscorecard) - Create a scorecard
* [putAtsConnectionIdScorecardId](docs/sdks/document/README.md#putatsconnectionidscorecardid) - Update a scorecard

### [employee](docs/sdks/employee/README.md)

* [deleteHrisConnectionIdEmployeeId](docs/sdks/employee/README.md#deletehrisconnectionidemployeeid) - Remove a Employee
* [getHrisConnectionIdEmployee](docs/sdks/employee/README.md#gethrisconnectionidemployee) - List all Employees
* [getHrisConnectionIdEmployeeId](docs/sdks/employee/README.md#gethrisconnectionidemployeeid) - Retrieve a Employee
* [patchHrisConnectionIdEmployeeId](docs/sdks/employee/README.md#patchhrisconnectionidemployeeid) - Update a Employee
* [postHrisConnectionIdEmployee](docs/sdks/employee/README.md#posthrisconnectionidemployee) - Create a Employee
* [putHrisConnectionIdEmployeeId](docs/sdks/employee/README.md#puthrisconnectionidemployeeid) - Update a Employee

### [enrich](docs/sdks/enrich/README.md)

* [getEnrichConnectionIdCompany](docs/sdks/enrich/README.md#getenrichconnectionidcompany) - Retrieve enrichment information for a company
* [getEnrichConnectionIdPerson](docs/sdks/enrich/README.md#getenrichconnectionidperson) - Retrieve enrichment information for a person

### [event](docs/sdks/event/README.md)

* [deleteCrmConnectionIdEventId](docs/sdks/event/README.md#deletecrmconnectionideventid) - Remove a event
* [getCrmConnectionIdEvent](docs/sdks/event/README.md#getcrmconnectionidevent) - List all events
* [getCrmConnectionIdEventId](docs/sdks/event/README.md#getcrmconnectionideventid) - Retrieve a event
* [patchCrmConnectionIdEventId](docs/sdks/event/README.md#patchcrmconnectionideventid) - Update a event
* [postCrmConnectionIdEvent](docs/sdks/event/README.md#postcrmconnectionidevent) - Create a event
* [putCrmConnectionIdEventId](docs/sdks/event/README.md#putcrmconnectionideventid) - Update a event

### [file](docs/sdks/file/README.md)

* [deleteCrmConnectionIdFileId](docs/sdks/file/README.md#deletecrmconnectionidfileid) - Remove a file
* [getCrmConnectionIdFile](docs/sdks/file/README.md#getcrmconnectionidfile) - List all files
* [getCrmConnectionIdFileId](docs/sdks/file/README.md#getcrmconnectionidfileid) - Retrieve a file
* [patchCrmConnectionIdFileId](docs/sdks/file/README.md#patchcrmconnectionidfileid) - Update a file
* [postCrmConnectionIdFile](docs/sdks/file/README.md#postcrmconnectionidfile) - Create a file
* [putCrmConnectionIdFileId](docs/sdks/file/README.md#putcrmconnectionidfileid) - Update a file

### [group](docs/sdks/group/README.md)

* [deleteHrisConnectionIdGroupId](docs/sdks/group/README.md#deletehrisconnectionidgroupid) - Remove a Group
* [getHrisConnectionIdGroup](docs/sdks/group/README.md#gethrisconnectionidgroup) - List all Groups
* [getHrisConnectionIdGroupId](docs/sdks/group/README.md#gethrisconnectionidgroupid) - Retrieve a Group
* [patchHrisConnectionIdGroupId](docs/sdks/group/README.md#patchhrisconnectionidgroupid) - Update a Group
* [postHrisConnectionIdGroup](docs/sdks/group/README.md#posthrisconnectionidgroup) - Create a Group
* [putHrisConnectionIdGroupId](docs/sdks/group/README.md#puthrisconnectionidgroupid) - Update a Group

### [hris](docs/sdks/hris/README.md)

* [deleteHrisConnectionIdEmployeeId](docs/sdks/hris/README.md#deletehrisconnectionidemployeeid) - Remove a Employee
* [deleteHrisConnectionIdGroupId](docs/sdks/hris/README.md#deletehrisconnectionidgroupid) - Remove a Group
* [getHrisConnectionIdEmployee](docs/sdks/hris/README.md#gethrisconnectionidemployee) - List all Employees
* [getHrisConnectionIdEmployeeId](docs/sdks/hris/README.md#gethrisconnectionidemployeeid) - Retrieve a Employee
* [getHrisConnectionIdGroup](docs/sdks/hris/README.md#gethrisconnectionidgroup) - List all Groups
* [getHrisConnectionIdGroupId](docs/sdks/hris/README.md#gethrisconnectionidgroupid) - Retrieve a Group
* [patchHrisConnectionIdEmployeeId](docs/sdks/hris/README.md#patchhrisconnectionidemployeeid) - Update a Employee
* [patchHrisConnectionIdGroupId](docs/sdks/hris/README.md#patchhrisconnectionidgroupid) - Update a Group
* [postHrisConnectionIdEmployee](docs/sdks/hris/README.md#posthrisconnectionidemployee) - Create a Employee
* [postHrisConnectionIdGroup](docs/sdks/hris/README.md#posthrisconnectionidgroup) - Create a Group
* [putHrisConnectionIdEmployeeId](docs/sdks/hris/README.md#puthrisconnectionidemployeeid) - Update a Employee
* [putHrisConnectionIdGroupId](docs/sdks/hris/README.md#puthrisconnectionidgroupid) - Update a Group

### [integration](docs/sdks/integration/README.md)

* [getUnifiedIntegration](docs/sdks/integration/README.md#getunifiedintegration) - Returns all integrations
* [getUnifiedIntegrationAuthWorkspaceIdIntegrationType](docs/sdks/integration/README.md#getunifiedintegrationauthworkspaceidintegrationtype) - Create connection indirectly
* [getUnifiedIntegrationIntegrationType](docs/sdks/integration/README.md#getunifiedintegrationintegrationtype) - Retrieve an integration
* [getUnifiedIntegrationWorkspaceWorkspaceId](docs/sdks/integration/README.md#getunifiedintegrationworkspaceworkspaceid) - Returns all activated integrations in a workspace

### [interview](docs/sdks/interview/README.md)

* [deleteAtsConnectionIdInterviewId](docs/sdks/interview/README.md#deleteatsconnectionidinterviewid) - Remove a interview
* [getAtsConnectionIdInterview](docs/sdks/interview/README.md#getatsconnectionidinterview) - List all interviews
* [getAtsConnectionIdInterviewId](docs/sdks/interview/README.md#getatsconnectionidinterviewid) - Retrieve a interview
* [patchAtsConnectionIdInterviewId](docs/sdks/interview/README.md#patchatsconnectionidinterviewid) - Update a interview
* [postAtsConnectionIdInterview](docs/sdks/interview/README.md#postatsconnectionidinterview) - Create a interview
* [putAtsConnectionIdInterviewId](docs/sdks/interview/README.md#putatsconnectionidinterviewid) - Update a interview

### [job](docs/sdks/job/README.md)

* [deleteAtsConnectionIdJobId](docs/sdks/job/README.md#deleteatsconnectionidjobid) - Remove a job
* [getAtsConnectionIdJob](docs/sdks/job/README.md#getatsconnectionidjob) - List all jobs
* [getAtsConnectionIdJobId](docs/sdks/job/README.md#getatsconnectionidjobid) - Retrieve a job
* [patchAtsConnectionIdJobId](docs/sdks/job/README.md#patchatsconnectionidjobid) - Update a job
* [postAtsConnectionIdJob](docs/sdks/job/README.md#postatsconnectionidjob) - Create a job
* [putAtsConnectionIdJobId](docs/sdks/job/README.md#putatsconnectionidjobid) - Update a job

### [lead](docs/sdks/lead/README.md)

* [deleteCrmConnectionIdLeadId](docs/sdks/lead/README.md#deletecrmconnectionidleadid) - Remove a lead
* [getCrmConnectionIdLead](docs/sdks/lead/README.md#getcrmconnectionidlead) - List all leads
* [getCrmConnectionIdLeadId](docs/sdks/lead/README.md#getcrmconnectionidleadid) - Retrieve a lead
* [patchCrmConnectionIdLeadId](docs/sdks/lead/README.md#patchcrmconnectionidleadid) - Update a lead
* [postCrmConnectionIdLead](docs/sdks/lead/README.md#postcrmconnectionidlead) - Create a lead
* [putCrmConnectionIdLeadId](docs/sdks/lead/README.md#putcrmconnectionidleadid) - Update a lead

### [list](docs/sdks/list/README.md)

* [deleteMartechConnectionIdListId](docs/sdks/list/README.md#deletemartechconnectionidlistid) - Remove a list
* [getMartechConnectionIdList](docs/sdks/list/README.md#getmartechconnectionidlist) - List all lists
* [getMartechConnectionIdListId](docs/sdks/list/README.md#getmartechconnectionidlistid) - Retrieve a list
* [patchMartechConnectionIdListId](docs/sdks/list/README.md#patchmartechconnectionidlistid) - Update a list
* [postMartechConnectionIdList](docs/sdks/list/README.md#postmartechconnectionidlist) - Create a list
* [putMartechConnectionIdListId](docs/sdks/list/README.md#putmartechconnectionidlistid) - Update a list

### [login](docs/sdks/login/README.md)

* [getUnifiedIntegrationLoginWorkspaceIdIntegrationType](docs/sdks/login/README.md#getunifiedintegrationloginworkspaceidintegrationtype) - Sign in a user

### [martech](docs/sdks/martech/README.md)

* [deleteMartechConnectionIdListId](docs/sdks/martech/README.md#deletemartechconnectionidlistid) - Remove a list
* [deleteMartechConnectionIdListIdMemberId](docs/sdks/martech/README.md#deletemartechconnectionidlistidmemberid) - Remove member from a list
* [getMartechConnectionIdList](docs/sdks/martech/README.md#getmartechconnectionidlist) - List all lists
* [getMartechConnectionIdListId](docs/sdks/martech/README.md#getmartechconnectionidlistid) - Retrieve a list
* [getMartechConnectionIdListIdMember](docs/sdks/martech/README.md#getmartechconnectionidlistidmember) - List all members in a list
* [getMartechConnectionIdListIdMemberId](docs/sdks/martech/README.md#getmartechconnectionidlistidmemberid) - Retrieve a member from a list
* [patchMartechConnectionIdListId](docs/sdks/martech/README.md#patchmartechconnectionidlistid) - Update a list
* [patchMartechConnectionIdListIdMemberId](docs/sdks/martech/README.md#patchmartechconnectionidlistidmemberid) - Update a member in a list
* [postMartechConnectionIdList](docs/sdks/martech/README.md#postmartechconnectionidlist) - Create a list
* [postMartechConnectionIdListIdMember](docs/sdks/martech/README.md#postmartechconnectionidlistidmember) - Create a member in a list
* [putMartechConnectionIdListId](docs/sdks/martech/README.md#putmartechconnectionidlistid) - Update a list
* [putMartechConnectionIdListIdMemberId](docs/sdks/martech/README.md#putmartechconnectionidlistidmemberid) - Update a member in a list

### [member](docs/sdks/member/README.md)

* [deleteMartechConnectionIdListIdMemberId](docs/sdks/member/README.md#deletemartechconnectionidlistidmemberid) - Remove member from a list
* [getMartechConnectionIdListIdMember](docs/sdks/member/README.md#getmartechconnectionidlistidmember) - List all members in a list
* [getMartechConnectionIdListIdMemberId](docs/sdks/member/README.md#getmartechconnectionidlistidmemberid) - Retrieve a member from a list
* [patchMartechConnectionIdListIdMemberId](docs/sdks/member/README.md#patchmartechconnectionidlistidmemberid) - Update a member in a list
* [postMartechConnectionIdListIdMember](docs/sdks/member/README.md#postmartechconnectionidlistidmember) - Create a member in a list
* [putMartechConnectionIdListIdMemberId](docs/sdks/member/README.md#putmartechconnectionidlistidmemberid) - Update a member in a list

### [note](docs/sdks/note/README.md)

* [deleteTicketingConnectionIdNoteTicketIdId](docs/sdks/note/README.md#deleteticketingconnectionidnoteticketidid) - Remove a note
* [getTicketingConnectionIdNoteTicketId](docs/sdks/note/README.md#getticketingconnectionidnoteticketid) - List all notes
* [getTicketingConnectionIdNoteTicketIdId](docs/sdks/note/README.md#getticketingconnectionidnoteticketidid) - Retrieve a note
* [patchTicketingConnectionIdNoteTicketIdId](docs/sdks/note/README.md#patchticketingconnectionidnoteticketidid) - Update a note
* [postTicketingConnectionIdNoteTicketId](docs/sdks/note/README.md#postticketingconnectionidnoteticketid) - Create a note
* [putTicketingConnectionIdNoteTicketIdId](docs/sdks/note/README.md#putticketingconnectionidnoteticketidid) - Update a note

### [passthrough](docs/sdks/passthrough/README.md)

* [deletePassthroughConnectionIdPath](docs/sdks/passthrough/README.md#deletepassthroughconnectionidpath) - Passthrough DELETE
* [getPassthroughConnectionIdPath](docs/sdks/passthrough/README.md#getpassthroughconnectionidpath) - Passthrough GET
* [patchPassthroughConnectionIdPath](docs/sdks/passthrough/README.md#patchpassthroughconnectionidpath) - Passthrough PUT
* [postPassthroughConnectionIdPath](docs/sdks/passthrough/README.md#postpassthroughconnectionidpath) - Passthrough POST
* [putPassthroughConnectionIdPath](docs/sdks/passthrough/README.md#putpassthroughconnectionidpath) - Passthrough PUT

### [person](docs/sdks/person/README.md)

* [getEnrichConnectionIdPerson](docs/sdks/person/README.md#getenrichconnectionidperson) - Retrieve enrichment information for a person

### [pipeline](docs/sdks/pipeline/README.md)

* [deleteCrmConnectionIdPipelineId](docs/sdks/pipeline/README.md#deletecrmconnectionidpipelineid) - Remove a pipeline
* [getCrmConnectionIdPipeline](docs/sdks/pipeline/README.md#getcrmconnectionidpipeline) - List all pipelines
* [getCrmConnectionIdPipelineId](docs/sdks/pipeline/README.md#getcrmconnectionidpipelineid) - Retrieve a pipeline
* [patchCrmConnectionIdPipelineId](docs/sdks/pipeline/README.md#patchcrmconnectionidpipelineid) - Update a pipeline
* [postCrmConnectionIdPipeline](docs/sdks/pipeline/README.md#postcrmconnectionidpipeline) - Create a pipeline
* [putCrmConnectionIdPipelineId](docs/sdks/pipeline/README.md#putcrmconnectionidpipelineid) - Update a pipeline

### [team](docs/sdks/team/README.md)

* [deleteCrmConnectionIdTeamId](docs/sdks/team/README.md#deletecrmconnectionidteamid) - Remove a team
* [getCrmConnectionIdTeam](docs/sdks/team/README.md#getcrmconnectionidteam) - List all teams
* [getCrmConnectionIdTeamId](docs/sdks/team/README.md#getcrmconnectionidteamid) - Retrieve a team
* [patchCrmConnectionIdTeamId](docs/sdks/team/README.md#patchcrmconnectionidteamid) - Update a team
* [postCrmConnectionIdTeam](docs/sdks/team/README.md#postcrmconnectionidteam) - Create a team
* [putCrmConnectionIdTeamId](docs/sdks/team/README.md#putcrmconnectionidteamid) - Update a team

### [ticket](docs/sdks/ticket/README.md)

* [deleteTicketingConnectionIdTicketId](docs/sdks/ticket/README.md#deleteticketingconnectionidticketid) - Remove a ticket
* [getTicketingConnectionIdTicket](docs/sdks/ticket/README.md#getticketingconnectionidticket) - List all tickets
* [getTicketingConnectionIdTicketId](docs/sdks/ticket/README.md#getticketingconnectionidticketid) - Retrieve a ticket
* [patchTicketingConnectionIdTicketId](docs/sdks/ticket/README.md#patchticketingconnectionidticketid) - Update a ticket
* [postTicketingConnectionIdTicket](docs/sdks/ticket/README.md#postticketingconnectionidticket) - Create a ticket
* [putTicketingConnectionIdTicketId](docs/sdks/ticket/README.md#putticketingconnectionidticketid) - Update a ticket

### [ticketing](docs/sdks/ticketing/README.md)

* [deleteTicketingConnectionIdAgentId](docs/sdks/ticketing/README.md#deleteticketingconnectionidagentid) - Remove a agent
* [deleteTicketingConnectionIdCustomerId](docs/sdks/ticketing/README.md#deleteticketingconnectionidcustomerid) - Remove a customer
* [deleteTicketingConnectionIdNoteTicketIdId](docs/sdks/ticketing/README.md#deleteticketingconnectionidnoteticketidid) - Remove a note
* [deleteTicketingConnectionIdTicketId](docs/sdks/ticketing/README.md#deleteticketingconnectionidticketid) - Remove a ticket
* [getTicketingConnectionIdAgent](docs/sdks/ticketing/README.md#getticketingconnectionidagent) - List all agents
* [getTicketingConnectionIdAgentId](docs/sdks/ticketing/README.md#getticketingconnectionidagentid) - Retrieve a agent
* [getTicketingConnectionIdCustomer](docs/sdks/ticketing/README.md#getticketingconnectionidcustomer) - List all customers
* [getTicketingConnectionIdCustomerId](docs/sdks/ticketing/README.md#getticketingconnectionidcustomerid) - Retrieve a customer
* [getTicketingConnectionIdNoteTicketId](docs/sdks/ticketing/README.md#getticketingconnectionidnoteticketid) - List all notes
* [getTicketingConnectionIdNoteTicketIdId](docs/sdks/ticketing/README.md#getticketingconnectionidnoteticketidid) - Retrieve a note
* [getTicketingConnectionIdTicket](docs/sdks/ticketing/README.md#getticketingconnectionidticket) - List all tickets
* [getTicketingConnectionIdTicketId](docs/sdks/ticketing/README.md#getticketingconnectionidticketid) - Retrieve a ticket
* [patchTicketingConnectionIdAgentId](docs/sdks/ticketing/README.md#patchticketingconnectionidagentid) - Update a agent
* [patchTicketingConnectionIdCustomerId](docs/sdks/ticketing/README.md#patchticketingconnectionidcustomerid) - Update a customer
* [patchTicketingConnectionIdNoteTicketIdId](docs/sdks/ticketing/README.md#patchticketingconnectionidnoteticketidid) - Update a note
* [patchTicketingConnectionIdTicketId](docs/sdks/ticketing/README.md#patchticketingconnectionidticketid) - Update a ticket
* [postTicketingConnectionIdAgent](docs/sdks/ticketing/README.md#postticketingconnectionidagent) - Create a agent
* [postTicketingConnectionIdCustomer](docs/sdks/ticketing/README.md#postticketingconnectionidcustomer) - Create a customer
* [postTicketingConnectionIdNoteTicketId](docs/sdks/ticketing/README.md#postticketingconnectionidnoteticketid) - Create a note
* [postTicketingConnectionIdTicket](docs/sdks/ticketing/README.md#postticketingconnectionidticket) - Create a ticket
* [putTicketingConnectionIdAgentId](docs/sdks/ticketing/README.md#putticketingconnectionidagentid) - Update a agent
* [putTicketingConnectionIdCustomerId](docs/sdks/ticketing/README.md#putticketingconnectionidcustomerid) - Update a customer
* [putTicketingConnectionIdNoteTicketIdId](docs/sdks/ticketing/README.md#putticketingconnectionidnoteticketidid) - Update a note
* [putTicketingConnectionIdTicketId](docs/sdks/ticketing/README.md#putticketingconnectionidticketid) - Update a ticket

### [uc](docs/sdks/uc/README.md)

* [deleteUcConnectionIdContactId](docs/sdks/uc/README.md#deleteucconnectionidcontactid) - Remove a contact
* [getUcConnectionIdAgent](docs/sdks/uc/README.md#getucconnectionidagent) - List all agents
* [getUcConnectionIdCall](docs/sdks/uc/README.md#getucconnectionidcall) - List all calls
* [getUcConnectionIdContact](docs/sdks/uc/README.md#getucconnectionidcontact) - List all contacts
* [getUcConnectionIdContactId](docs/sdks/uc/README.md#getucconnectionidcontactid) - Retrieve a contact
* [patchUcConnectionIdContactId](docs/sdks/uc/README.md#patchucconnectionidcontactid) - Update a contact
* [postUcConnectionIdContact](docs/sdks/uc/README.md#postucconnectionidcontact) - Create a contact
* [putUcConnectionIdContactId](docs/sdks/uc/README.md#putucconnectionidcontactid) - Update a contact

### [unified](docs/sdks/unified/README.md)

* [deleteUnifiedConnectionId](docs/sdks/unified/README.md#deleteunifiedconnectionid) - Remove connection
* [deleteUnifiedUser](docs/sdks/unified/README.md#deleteunifieduser) - Delete your user object
* [deleteUnifiedWebhookId](docs/sdks/unified/README.md#deleteunifiedwebhookid) - Remove webhook subscription
* [getUnifiedApicall](docs/sdks/unified/README.md#getunifiedapicall) - Returns API Calls
* [getUnifiedApicallId](docs/sdks/unified/README.md#getunifiedapicallid) - Retrieve specific API Call by its ID
* [getUnifiedConnection](docs/sdks/unified/README.md#getunifiedconnection) - List all connections
* [getUnifiedConnectionId](docs/sdks/unified/README.md#getunifiedconnectionid) - Retrieve connection
* [getUnifiedIntegration](docs/sdks/unified/README.md#getunifiedintegration) - Returns all integrations
* [getUnifiedIntegrationAuthWorkspaceIdIntegrationType](docs/sdks/unified/README.md#getunifiedintegrationauthworkspaceidintegrationtype) - Create connection indirectly
* [getUnifiedIntegrationIntegrationType](docs/sdks/unified/README.md#getunifiedintegrationintegrationtype) - Retrieve an integration
* [getUnifiedIntegrationWorkspaceWorkspaceId](docs/sdks/unified/README.md#getunifiedintegrationworkspaceworkspaceid) - Returns all activated integrations in a workspace
* [getUnifiedUser](docs/sdks/unified/README.md#getunifieduser) - Retrieve your user object
* [getUnifiedUserToken](docs/sdks/unified/README.md#getunifiedusertoken) - Retrieve your user token
* [getUnifiedWebhook](docs/sdks/unified/README.md#getunifiedwebhook) - Returns all registered webhooks
* [getUnifiedWebhookId](docs/sdks/unified/README.md#getunifiedwebhookid) - Retrieve webhook by its ID
* [patchUnifiedConnectionId](docs/sdks/unified/README.md#patchunifiedconnectionid) - Update connection
* [patchUnifiedUser](docs/sdks/unified/README.md#patchunifieduser) - Updates your user object
* [postUnifiedConnection](docs/sdks/unified/README.md#postunifiedconnection) - Create connection
* [postUnifiedWebhookConnectionIdObject](docs/sdks/unified/README.md#postunifiedwebhookconnectionidobject) - Create webhook subscription
* [putUnifiedConnectionId](docs/sdks/unified/README.md#putunifiedconnectionid) - Update connection
* [putUnifiedUser](docs/sdks/unified/README.md#putunifieduser) - Updates your user object

### [user](docs/sdks/user/README.md)

* [deleteCrmConnectionIdUserId](docs/sdks/user/README.md#deletecrmconnectioniduserid) - Remove a user
* [deleteUnifiedUser](docs/sdks/user/README.md#deleteunifieduser) - Delete your user object
* [getCrmConnectionIdUser](docs/sdks/user/README.md#getcrmconnectioniduser) - List all users
* [getCrmConnectionIdUserId](docs/sdks/user/README.md#getcrmconnectioniduserid) - Retrieve a user
* [getUnifiedUser](docs/sdks/user/README.md#getunifieduser) - Retrieve your user object
* [getUnifiedUserToken](docs/sdks/user/README.md#getunifiedusertoken) - Retrieve your user token
* [patchCrmConnectionIdUserId](docs/sdks/user/README.md#patchcrmconnectioniduserid) - Update a user
* [patchUnifiedUser](docs/sdks/user/README.md#patchunifieduser) - Updates your user object
* [postCrmConnectionIdUser](docs/sdks/user/README.md#postcrmconnectioniduser) - Create a user
* [putCrmConnectionIdUserId](docs/sdks/user/README.md#putcrmconnectioniduserid) - Update a user
* [putUnifiedUser](docs/sdks/user/README.md#putunifieduser) - Updates your user object

### [webhook](docs/sdks/webhook/README.md)

* [deleteUnifiedWebhookId](docs/sdks/webhook/README.md#deleteunifiedwebhookid) - Remove webhook subscription
* [getUnifiedWebhook](docs/sdks/webhook/README.md#getunifiedwebhook) - Returns all registered webhooks
* [getUnifiedWebhookId](docs/sdks/webhook/README.md#getunifiedwebhookid) - Retrieve webhook by its ID
* [postUnifiedWebhookConnectionIdObject](docs/sdks/webhook/README.md#postunifiedwebhookconnectionidobject) - Create webhook subscription
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
