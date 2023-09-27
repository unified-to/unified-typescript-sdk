# Crm
(*crm*)

### Available Operations

* [deleteCrmConnectionIdCompanyId](#deletecrmconnectionidcompanyid) - Remove a company
* [deleteCrmConnectionIdCompanyIdDealDealId](#deletecrmconnectionidcompanyiddealdealid) - Remove deal association from a company
* [deleteCrmConnectionIdContactId](#deletecrmconnectionidcontactid) - Remove a contact
* [deleteCrmConnectionIdContactIdCompanyCompanyId](#deletecrmconnectionidcontactidcompanycompanyid) - Remove company association from a contact
* [deleteCrmConnectionIdContactIdDealDealId](#deletecrmconnectionidcontactiddealdealid) - Remove deal association from a contact
* [deleteCrmConnectionIdDealId](#deletecrmconnectioniddealid) - Remove a deal
* [deleteCrmConnectionIdEventId](#deletecrmconnectionideventid) - Remove a event
* [deleteCrmConnectionIdEventIdCompanyCompanyId](#deletecrmconnectionideventidcompanycompanyid) - Remove company association from an event
* [deleteCrmConnectionIdEventIdContactContactId](#deletecrmconnectionideventidcontactcontactid) - Remove contact association from an event
* [deleteCrmConnectionIdEventIdDealDealId](#deletecrmconnectionideventiddealdealid) - Remove deal association from an event
* [deleteCrmConnectionIdFileId](#deletecrmconnectionidfileid) - Remove a file
* [deleteCrmConnectionIdLeadId](#deletecrmconnectionidleadid) - Remove a lead
* [deleteCrmConnectionIdPipelineId](#deletecrmconnectionidpipelineid) - Remove a pipeline
* [deleteCrmConnectionIdTeamId](#deletecrmconnectionidteamid) - Remove a team
* [deleteCrmConnectionIdUserId](#deletecrmconnectioniduserid) - Remove a user
* [getCrmConnectionIdCompany](#getcrmconnectionidcompany) - List all companies
* [getCrmConnectionIdCompanyId](#getcrmconnectionidcompanyid) - Retrieve a company
* [getCrmConnectionIdContact](#getcrmconnectionidcontact) - List all contacts
* [getCrmConnectionIdContactId](#getcrmconnectionidcontactid) - Retrieve a contact
* [getCrmConnectionIdDeal](#getcrmconnectioniddeal) - List all deals
* [getCrmConnectionIdDealId](#getcrmconnectioniddealid) - Retrieve a deal
* [getCrmConnectionIdEvent](#getcrmconnectionidevent) - List all events
* [getCrmConnectionIdEventId](#getcrmconnectionideventid) - Retrieve a event
* [getCrmConnectionIdFile](#getcrmconnectionidfile) - List all files
* [getCrmConnectionIdFileId](#getcrmconnectionidfileid) - Retrieve a file
* [getCrmConnectionIdLead](#getcrmconnectionidlead) - List all leads
* [getCrmConnectionIdLeadId](#getcrmconnectionidleadid) - Retrieve a lead
* [getCrmConnectionIdPipeline](#getcrmconnectionidpipeline) - List all pipelines
* [getCrmConnectionIdPipelineId](#getcrmconnectionidpipelineid) - Retrieve a pipeline
* [getCrmConnectionIdTeam](#getcrmconnectionidteam) - List all teams
* [getCrmConnectionIdTeamId](#getcrmconnectionidteamid) - Retrieve a team
* [getCrmConnectionIdUser](#getcrmconnectioniduser) - List all users
* [getCrmConnectionIdUserId](#getcrmconnectioniduserid) - Retrieve a user
* [patchCrmConnectionIdCompanyId](#patchcrmconnectionidcompanyid) - Update a company
* [patchCrmConnectionIdCompanyIdDealDealId](#patchcrmconnectionidcompanyiddealdealid) - Associate a deal with a company
* [patchCrmConnectionIdContactId](#patchcrmconnectionidcontactid) - Update a contact
* [patchCrmConnectionIdContactIdCompanyCompanyId](#patchcrmconnectionidcontactidcompanycompanyid) - Associate a company with a contact
* [patchCrmConnectionIdContactIdDealDealId](#patchcrmconnectionidcontactiddealdealid) - Associate a deal with a contact
* [patchCrmConnectionIdDealId](#patchcrmconnectioniddealid) - Update a deal
* [patchCrmConnectionIdEventId](#patchcrmconnectionideventid) - Update a event
* [patchCrmConnectionIdEventIdCompanyCompanyId](#patchcrmconnectionideventidcompanycompanyid) - Associate a company with an event
* [patchCrmConnectionIdEventIdContactContactId](#patchcrmconnectionideventidcontactcontactid) - Associate a contact with an event
* [patchCrmConnectionIdEventIdDealDealId](#patchcrmconnectionideventiddealdealid) - Associate a deal with an event
* [patchCrmConnectionIdFileId](#patchcrmconnectionidfileid) - Update a file
* [patchCrmConnectionIdLeadId](#patchcrmconnectionidleadid) - Update a lead
* [patchCrmConnectionIdPipelineId](#patchcrmconnectionidpipelineid) - Update a pipeline
* [patchCrmConnectionIdTeamId](#patchcrmconnectionidteamid) - Update a team
* [patchCrmConnectionIdUserId](#patchcrmconnectioniduserid) - Update a user
* [postCrmConnectionIdCompany](#postcrmconnectionidcompany) - Create a company
* [postCrmConnectionIdContact](#postcrmconnectionidcontact) - Create a contact
* [postCrmConnectionIdDeal](#postcrmconnectioniddeal) - Create a deal
* [postCrmConnectionIdEvent](#postcrmconnectionidevent) - Create a event
* [postCrmConnectionIdFile](#postcrmconnectionidfile) - Create a file
* [postCrmConnectionIdLead](#postcrmconnectionidlead) - Create a lead
* [postCrmConnectionIdPipeline](#postcrmconnectionidpipeline) - Create a pipeline
* [postCrmConnectionIdTeam](#postcrmconnectionidteam) - Create a team
* [postCrmConnectionIdUser](#postcrmconnectioniduser) - Create a user
* [putCrmConnectionIdCompanyId](#putcrmconnectionidcompanyid) - Update a company
* [putCrmConnectionIdCompanyIdDealDealId](#putcrmconnectionidcompanyiddealdealid) - Associate a deal with a company
* [putCrmConnectionIdContactId](#putcrmconnectionidcontactid) - Update a contact
* [putCrmConnectionIdContactIdCompanyCompanyId](#putcrmconnectionidcontactidcompanycompanyid) - Associate a company with a contact
* [putCrmConnectionIdContactIdDealDealId](#putcrmconnectionidcontactiddealdealid) - Associate a deal with a contact
* [putCrmConnectionIdDealId](#putcrmconnectioniddealid) - Update a deal
* [putCrmConnectionIdEventId](#putcrmconnectionideventid) - Update a event
* [putCrmConnectionIdEventIdCompanyCompanyId](#putcrmconnectionideventidcompanycompanyid) - Associate a company with an event
* [putCrmConnectionIdEventIdContactContactId](#putcrmconnectionideventidcontactcontactid) - Associate a contact with an event
* [putCrmConnectionIdEventIdDealDealId](#putcrmconnectionideventiddealdealid) - Associate a deal with an event
* [putCrmConnectionIdFileId](#putcrmconnectionidfileid) - Update a file
* [putCrmConnectionIdLeadId](#putcrmconnectionidleadid) - Update a lead
* [putCrmConnectionIdPipelineId](#putcrmconnectionidpipelineid) - Update a pipeline
* [putCrmConnectionIdTeamId](#putcrmconnectionidteamid) - Update a team
* [putCrmConnectionIdUserId](#putcrmconnectioniduserid) - Update a user

## deleteCrmConnectionIdCompanyId

Remove a company

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteCrmConnectionIdCompanyIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.deleteCrmConnectionIdCompanyId({
  connectionId: "amet",
  id: "352f7453-3994-4d78-9e3b-6e9389f5abb7",
}).then((res: DeleteCrmConnectionIdCompanyIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.DeleteCrmConnectionIdCompanyIdRequest](../../models/operations/deletecrmconnectionidcompanyidrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.DeleteCrmConnectionIdCompanyIdResponse](../../models/operations/deletecrmconnectionidcompanyidresponse.md)>**


## deleteCrmConnectionIdCompanyIdDealDealId

Remove deal association from a company

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteCrmConnectionIdCompanyIdDealDealIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.deleteCrmConnectionIdCompanyIdDealDealId({
  connectionId: "delectus",
  dealId: "commodi",
  id: "62550a28-382a-4c48-bafd-2315bba65016",
}).then((res: DeleteCrmConnectionIdCompanyIdDealDealIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                | [operations.DeleteCrmConnectionIdCompanyIdDealDealIdRequest](../../models/operations/deletecrmconnectionidcompanyiddealdealidrequest.md) | :heavy_check_mark:                                                                                                                       | The request object to use for the request.                                                                                               |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.DeleteCrmConnectionIdCompanyIdDealDealIdResponse](../../models/operations/deletecrmconnectionidcompanyiddealdealidresponse.md)>**


## deleteCrmConnectionIdContactId

Remove a contact

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteCrmConnectionIdContactIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.deleteCrmConnectionIdContactId({
  connectionId: "incidunt",
  id: "e06f5bf6-ae59-41bc-8bde-f3612b63c205",
}).then((res: DeleteCrmConnectionIdContactIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.DeleteCrmConnectionIdContactIdRequest](../../models/operations/deletecrmconnectionidcontactidrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.DeleteCrmConnectionIdContactIdResponse](../../models/operations/deletecrmconnectionidcontactidresponse.md)>**


## deleteCrmConnectionIdContactIdCompanyCompanyId

Remove company association from a contact

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteCrmConnectionIdContactIdCompanyCompanyIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.deleteCrmConnectionIdContactIdCompanyCompanyId({
  companyId: "a",
  connectionId: "facere",
  id: "a840774a-68a9-4a35-9086-b6f66fef020e",
}).then((res: DeleteCrmConnectionIdContactIdCompanyCompanyIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                            | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                            | [operations.DeleteCrmConnectionIdContactIdCompanyCompanyIdRequest](../../models/operations/deletecrmconnectionidcontactidcompanycompanyidrequest.md) | :heavy_check_mark:                                                                                                                                   | The request object to use for the request.                                                                                                           |
| `config`                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                         | :heavy_minus_sign:                                                                                                                                   | Available config options for making requests.                                                                                                        |


### Response

**Promise<[operations.DeleteCrmConnectionIdContactIdCompanyCompanyIdResponse](../../models/operations/deletecrmconnectionidcontactidcompanycompanyidresponse.md)>**


## deleteCrmConnectionIdContactIdDealDealId

Remove deal association from a contact

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteCrmConnectionIdContactIdDealDealIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.deleteCrmConnectionIdContactIdDealDealId({
  connectionId: "provident",
  dealId: "maiores",
  id: "443b4257-b992-4c8d-bda6-a61efa219825",
}).then((res: DeleteCrmConnectionIdContactIdDealDealIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                | [operations.DeleteCrmConnectionIdContactIdDealDealIdRequest](../../models/operations/deletecrmconnectionidcontactiddealdealidrequest.md) | :heavy_check_mark:                                                                                                                       | The request object to use for the request.                                                                                               |
| `config`                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                             | :heavy_minus_sign:                                                                                                                       | Available config options for making requests.                                                                                            |


### Response

**Promise<[operations.DeleteCrmConnectionIdContactIdDealDealIdResponse](../../models/operations/deletecrmconnectionidcontactiddealdealidresponse.md)>**


## deleteCrmConnectionIdDealId

Remove a deal

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteCrmConnectionIdDealIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.deleteCrmConnectionIdDealId({
  connectionId: "atque",
  id: "fd0a9eba-47f7-4d3e-b049-640d6a1831c8",
}).then((res: DeleteCrmConnectionIdDealIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.DeleteCrmConnectionIdDealIdRequest](../../models/operations/deletecrmconnectioniddealidrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.DeleteCrmConnectionIdDealIdResponse](../../models/operations/deletecrmconnectioniddealidresponse.md)>**


## deleteCrmConnectionIdEventId

Remove a event

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteCrmConnectionIdEventIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.deleteCrmConnectionIdEventId({
  connectionId: "nihil",
  id: "adf596fd-f1ad-4837-ae80-c1c19c95ba99",
}).then((res: DeleteCrmConnectionIdEventIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.DeleteCrmConnectionIdEventIdRequest](../../models/operations/deletecrmconnectionideventidrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.DeleteCrmConnectionIdEventIdResponse](../../models/operations/deletecrmconnectionideventidresponse.md)>**


## deleteCrmConnectionIdEventIdCompanyCompanyId

Remove company association from an event

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteCrmConnectionIdEventIdCompanyCompanyIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.deleteCrmConnectionIdEventIdCompanyCompanyId({
  companyId: "quas",
  connectionId: "laboriosam",
  id: "78fa3f69-6991-4af3-88ce-03614448c797",
}).then((res: DeleteCrmConnectionIdEventIdCompanyCompanyIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                        | [operations.DeleteCrmConnectionIdEventIdCompanyCompanyIdRequest](../../models/operations/deletecrmconnectionideventidcompanycompanyidrequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.DeleteCrmConnectionIdEventIdCompanyCompanyIdResponse](../../models/operations/deletecrmconnectionideventidcompanycompanyidresponse.md)>**


## deleteCrmConnectionIdEventIdContactContactId

Remove contact association from an event

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteCrmConnectionIdEventIdContactContactIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.deleteCrmConnectionIdEventIdContactContactId({
  connectionId: "reprehenderit",
  contactId: "animi",
  id: "0ef2f536-028e-4fee-b934-152ed7e253f4",
}).then((res: DeleteCrmConnectionIdEventIdContactContactIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                        | [operations.DeleteCrmConnectionIdEventIdContactContactIdRequest](../../models/operations/deletecrmconnectionideventidcontactcontactidrequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.DeleteCrmConnectionIdEventIdContactContactIdResponse](../../models/operations/deletecrmconnectionideventidcontactcontactidresponse.md)>**


## deleteCrmConnectionIdEventIdDealDealId

Remove deal association from an event

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteCrmConnectionIdEventIdDealDealIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.deleteCrmConnectionIdEventIdDealDealId({
  connectionId: "quod",
  dealId: "sunt",
  id: "57deaa71-70f4-445a-8cf6-67aaf9bbad18",
}).then((res: DeleteCrmConnectionIdEventIdDealDealIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.DeleteCrmConnectionIdEventIdDealDealIdRequest](../../models/operations/deletecrmconnectionideventiddealdealidrequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.DeleteCrmConnectionIdEventIdDealDealIdResponse](../../models/operations/deletecrmconnectionideventiddealdealidresponse.md)>**


## deleteCrmConnectionIdFileId

Remove a file

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteCrmConnectionIdFileIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.deleteCrmConnectionIdFileId({
  connectionId: "ad",
  id: "fe431d6b-f5c8-438f-bb8c-20cb67fc4b42",
}).then((res: DeleteCrmConnectionIdFileIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.DeleteCrmConnectionIdFileIdRequest](../../models/operations/deletecrmconnectionidfileidrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.DeleteCrmConnectionIdFileIdResponse](../../models/operations/deletecrmconnectionidfileidresponse.md)>**


## deleteCrmConnectionIdLeadId

Remove a lead

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteCrmConnectionIdLeadIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.deleteCrmConnectionIdLeadId({
  connectionId: "veniam",
  id: "e99e6234-c9f7-4b79-9feb-77a5c38d4baf",
}).then((res: DeleteCrmConnectionIdLeadIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.DeleteCrmConnectionIdLeadIdRequest](../../models/operations/deletecrmconnectionidleadidrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.DeleteCrmConnectionIdLeadIdResponse](../../models/operations/deletecrmconnectionidleadidresponse.md)>**


## deleteCrmConnectionIdPipelineId

Remove a pipeline

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteCrmConnectionIdPipelineIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.deleteCrmConnectionIdPipelineId({
  connectionId: "cupiditate",
  id: "1e506ef8-90a5-44b4-b5f1-6f56d385a3c4",
}).then((res: DeleteCrmConnectionIdPipelineIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.DeleteCrmConnectionIdPipelineIdRequest](../../models/operations/deletecrmconnectionidpipelineidrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.DeleteCrmConnectionIdPipelineIdResponse](../../models/operations/deletecrmconnectionidpipelineidresponse.md)>**


## deleteCrmConnectionIdTeamId

Remove a team

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteCrmConnectionIdTeamIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.deleteCrmConnectionIdTeamId({
  connectionId: "laborum",
  id: "c631b99e-26ce-4d8f-9fdb-9410f63bbf81",
}).then((res: DeleteCrmConnectionIdTeamIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.DeleteCrmConnectionIdTeamIdRequest](../../models/operations/deletecrmconnectionidteamidrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.DeleteCrmConnectionIdTeamIdResponse](../../models/operations/deletecrmconnectionidteamidresponse.md)>**


## deleteCrmConnectionIdUserId

Remove a user

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteCrmConnectionIdUserIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.deleteCrmConnectionIdUserId({
  connectionId: "iusto",
  id: "837b01af-dd78-4862-8189-eb44873f5033",
}).then((res: DeleteCrmConnectionIdUserIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.DeleteCrmConnectionIdUserIdRequest](../../models/operations/deletecrmconnectioniduseridrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.DeleteCrmConnectionIdUserIdResponse](../../models/operations/deletecrmconnectioniduseridresponse.md)>**


## getCrmConnectionIdCompany

List all companies

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetCrmConnectionIdCompanyResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.getCrmConnectionIdCompany({
  connectionId: "asperiores",
  contactId: "architecto",
  dealId: "sint",
  limit: 8219.93,
  offset: 7328.15,
  order: "asperiores",
  query: "quasi",
  sort: "consequuntur",
  updatedGte: new Date("2022-04-01T13:20:52.869Z"),
}).then((res: GetCrmConnectionIdCompanyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.GetCrmConnectionIdCompanyRequest](../../models/operations/getcrmconnectionidcompanyrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.GetCrmConnectionIdCompanyResponse](../../models/operations/getcrmconnectionidcompanyresponse.md)>**


## getCrmConnectionIdCompanyId

Retrieve a company

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetCrmConnectionIdCompanyIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.getCrmConnectionIdCompanyId({
  connectionId: "debitis",
  id: "4152eab9-cd7e-4522-8a6a-0e123b7847ec",
}).then((res: GetCrmConnectionIdCompanyIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.GetCrmConnectionIdCompanyIdRequest](../../models/operations/getcrmconnectionidcompanyidrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.GetCrmConnectionIdCompanyIdResponse](../../models/operations/getcrmconnectionidcompanyidresponse.md)>**


## getCrmConnectionIdContact

List all contacts

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetCrmConnectionIdContactResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.getCrmConnectionIdContact({
  companyId: "minima",
  connectionId: "omnis",
  dealId: "recusandae",
  limit: 1027.54,
  offset: 9747.88,
  order: "autem",
  query: "in",
  sort: "repellat",
  updatedGte: new Date("2022-03-26T20:12:58.127Z"),
}).then((res: GetCrmConnectionIdContactResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.GetCrmConnectionIdContactRequest](../../models/operations/getcrmconnectionidcontactrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.GetCrmConnectionIdContactResponse](../../models/operations/getcrmconnectionidcontactresponse.md)>**


## getCrmConnectionIdContactId

Retrieve a contact

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetCrmConnectionIdContactIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.getCrmConnectionIdContactId({
  connectionId: "dolore",
  id: "cce4b6d7-696f-4f3c-9747-501357e44f51",
}).then((res: GetCrmConnectionIdContactIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.GetCrmConnectionIdContactIdRequest](../../models/operations/getcrmconnectionidcontactidrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.GetCrmConnectionIdContactIdResponse](../../models/operations/getcrmconnectionidcontactidresponse.md)>**


## getCrmConnectionIdDeal

List all deals

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetCrmConnectionIdDealResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.getCrmConnectionIdDeal({
  companyId: "hic",
  connectionId: "praesentium",
  contactId: "libero",
  limit: 99.12,
  offset: 5167.39,
  order: "tempora",
  query: "quo",
  sort: "dolor",
  updatedGte: new Date("2022-05-25T03:25:02.542Z"),
}).then((res: GetCrmConnectionIdDealResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetCrmConnectionIdDealRequest](../../models/operations/getcrmconnectioniddealrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetCrmConnectionIdDealResponse](../../models/operations/getcrmconnectioniddealresponse.md)>**


## getCrmConnectionIdDealId

Retrieve a deal

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetCrmConnectionIdDealIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.getCrmConnectionIdDealId({
  connectionId: "quam",
  id: "e193a245-467f-4948-b4c2-d5cc4972233e",
}).then((res: GetCrmConnectionIdDealIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.GetCrmConnectionIdDealIdRequest](../../models/operations/getcrmconnectioniddealidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GetCrmConnectionIdDealIdResponse](../../models/operations/getcrmconnectioniddealidresponse.md)>**


## getCrmConnectionIdEvent

List all events

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetCrmConnectionIdEventResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.getCrmConnectionIdEvent({
  companyId: "iure",
  connectionId: "aliquid",
  contactId: "cum",
  dealId: "fugiat",
  limit: 5265.84,
  offset: 9774.72,
  order: "officiis",
  query: "corporis",
  sort: "repellendus",
  updatedGte: new Date("2022-12-20T11:08:09.767Z"),
}).then((res: GetCrmConnectionIdEventResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.GetCrmConnectionIdEventRequest](../../models/operations/getcrmconnectionideventrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetCrmConnectionIdEventResponse](../../models/operations/getcrmconnectionideventresponse.md)>**


## getCrmConnectionIdEventId

Retrieve a event

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetCrmConnectionIdEventIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.getCrmConnectionIdEventId({
  connectionId: "libero",
  id: "979ef203-8732-4059-8ccc-1096400313b3",
}).then((res: GetCrmConnectionIdEventIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.GetCrmConnectionIdEventIdRequest](../../models/operations/getcrmconnectionideventidrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.GetCrmConnectionIdEventIdResponse](../../models/operations/getcrmconnectionideventidresponse.md)>**


## getCrmConnectionIdFile

List all files

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetCrmConnectionIdFileResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.getCrmConnectionIdFile({
  companyId: "debitis",
  connectionId: "quis",
  contactId: "eaque",
  dealId: "incidunt",
  limit: 2814.36,
  offset: 9622.8,
  order: "aliquid",
  query: "ullam",
  sort: "maiores",
  updatedGte: new Date("2021-09-03T06:41:09.902Z"),
}).then((res: GetCrmConnectionIdFileResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetCrmConnectionIdFileRequest](../../models/operations/getcrmconnectionidfilerequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetCrmConnectionIdFileResponse](../../models/operations/getcrmconnectionidfileresponse.md)>**


## getCrmConnectionIdFileId

Retrieve a file

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetCrmConnectionIdFileIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.getCrmConnectionIdFileId({
  connectionId: "eos",
  id: "dc4077d0-cc3f-4408-afc1-5ceb4d6e1eae",
}).then((res: GetCrmConnectionIdFileIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.GetCrmConnectionIdFileIdRequest](../../models/operations/getcrmconnectionidfileidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GetCrmConnectionIdFileIdResponse](../../models/operations/getcrmconnectionidfileidresponse.md)>**


## getCrmConnectionIdLead

List all leads

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetCrmConnectionIdLeadResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.getCrmConnectionIdLead({
  connectionId: "voluptatem",
  limit: 9807.05,
  offset: 4849.05,
  order: "veniam",
  query: "fuga",
  sort: "itaque",
  updatedGte: new Date("2020-02-28T10:06:53.730Z"),
}).then((res: GetCrmConnectionIdLeadResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetCrmConnectionIdLeadRequest](../../models/operations/getcrmconnectionidleadrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetCrmConnectionIdLeadResponse](../../models/operations/getcrmconnectionidleadresponse.md)>**


## getCrmConnectionIdLeadId

Retrieve a lead

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetCrmConnectionIdLeadIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.getCrmConnectionIdLeadId({
  connectionId: "sed",
  id: "acab58b9-91c9-426d-9b58-9461e7421cbe",
}).then((res: GetCrmConnectionIdLeadIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.GetCrmConnectionIdLeadIdRequest](../../models/operations/getcrmconnectionidleadidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GetCrmConnectionIdLeadIdResponse](../../models/operations/getcrmconnectionidleadidresponse.md)>**


## getCrmConnectionIdPipeline

List all pipelines

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetCrmConnectionIdPipelineResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.getCrmConnectionIdPipeline({
  connectionId: "commodi",
  limit: 8203.22,
  offset: 5890.98,
  order: "veniam",
  query: "sit",
  sort: "fugit",
  updatedGte: new Date("2022-12-23T08:02:22.075Z"),
}).then((res: GetCrmConnectionIdPipelineResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.GetCrmConnectionIdPipelineRequest](../../models/operations/getcrmconnectionidpipelinerequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.GetCrmConnectionIdPipelineResponse](../../models/operations/getcrmconnectionidpipelineresponse.md)>**


## getCrmConnectionIdPipelineId

Retrieve a pipeline

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetCrmConnectionIdPipelineIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.getCrmConnectionIdPipelineId({
  connectionId: "vero",
  id: "a930b69f-7ac2-4f72-b885-009049116082",
}).then((res: GetCrmConnectionIdPipelineIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.GetCrmConnectionIdPipelineIdRequest](../../models/operations/getcrmconnectionidpipelineidrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.GetCrmConnectionIdPipelineIdResponse](../../models/operations/getcrmconnectionidpipelineidresponse.md)>**


## getCrmConnectionIdTeam

List all teams

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetCrmConnectionIdTeamResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.getCrmConnectionIdTeam({
  connectionId: "perferendis",
  limit: 4598.65,
  offset: 5590.47,
  order: "blanditiis",
  query: "laudantium",
  sort: "voluptates",
  updatedGte: new Date("2021-09-28T11:05:37.357Z"),
}).then((res: GetCrmConnectionIdTeamResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetCrmConnectionIdTeamRequest](../../models/operations/getcrmconnectionidteamrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetCrmConnectionIdTeamResponse](../../models/operations/getcrmconnectionidteamresponse.md)>**


## getCrmConnectionIdTeamId

Retrieve a team

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetCrmConnectionIdTeamIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.getCrmConnectionIdTeamId({
  connectionId: "vel",
  id: "183bfe96-59eb-440e-816f-af75b0b532a4",
}).then((res: GetCrmConnectionIdTeamIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.GetCrmConnectionIdTeamIdRequest](../../models/operations/getcrmconnectionidteamidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GetCrmConnectionIdTeamIdResponse](../../models/operations/getcrmconnectionidteamidresponse.md)>**


## getCrmConnectionIdUser

List all users

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetCrmConnectionIdUserResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.getCrmConnectionIdUser({
  connectionId: "illum",
  limit: 6256.83,
  offset: 2355.67,
  order: "reprehenderit",
  query: "eligendi",
  sort: "cum",
  updatedGte: new Date("2021-09-22T23:06:39.878Z"),
}).then((res: GetCrmConnectionIdUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetCrmConnectionIdUserRequest](../../models/operations/getcrmconnectioniduserrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetCrmConnectionIdUserResponse](../../models/operations/getcrmconnectioniduserresponse.md)>**


## getCrmConnectionIdUserId

Retrieve a user

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetCrmConnectionIdUserIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.getCrmConnectionIdUserId({
  connectionId: "a",
  id: "4452c484-2c9b-42ad-b2da-fe81a88f4444",
}).then((res: GetCrmConnectionIdUserIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.GetCrmConnectionIdUserIdRequest](../../models/operations/getcrmconnectioniduseridrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GetCrmConnectionIdUserIdResponse](../../models/operations/getcrmconnectioniduseridresponse.md)>**


## patchCrmConnectionIdCompanyId

Update a company

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PatchCrmConnectionIdCompanyIdResponse } from "Unified-to/dist/sdk/models/operations";
import { CrmEmailType, CrmTelephoneType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.patchCrmConnectionIdCompanyId({
  crmCompany: {
    active: false,
    address: {
      address1: "enim",
      address2: "nihil",
      city: "Fort Stephonfield",
      country: "Sweden",
      countryCode: "ES",
      postalCode: "23194",
      region: "dolor",
      regionCode: "placeat",
    },
    createdAt: new Date("2022-09-11T19:39:54.311Z"),
    dealIds: [
      "eaque",
    ],
    emails: [
      {
        email: "Claud_Kozey@yahoo.com",
        type: CrmEmailType.Home,
      },
    ],
    id: "69cd5fbc-f79d-4a18-a782-2bf95894e686",
    name: "Lynda Schuppe",
    raw: {},
    tags: [
      "quaerat",
    ],
    telephones: [
      {
        telephone: "maiores",
        type: CrmTelephoneType.Fax,
      },
    ],
    updatedAt: new Date("2021-11-21T10:33:51.138Z"),
    websites: [
      "fugiat",
    ],
  },
  connectionId: "odio",
  id: "51c9fe8f-7502-4bfd-8345-0841f1764456",
}).then((res: PatchCrmConnectionIdCompanyIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.PatchCrmConnectionIdCompanyIdRequest](../../models/operations/patchcrmconnectionidcompanyidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.PatchCrmConnectionIdCompanyIdResponse](../../models/operations/patchcrmconnectionidcompanyidresponse.md)>**


## patchCrmConnectionIdCompanyIdDealDealId

Associate a deal with a company

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PatchCrmConnectionIdCompanyIdDealDealIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.patchCrmConnectionIdCompanyIdDealDealId({
  connectionId: "amet",
  dealId: "voluptate",
  id: "9f3fb27e-21f8-4626-97b3-6fc6b9f587ce",
}).then((res: PatchCrmConnectionIdCompanyIdDealDealIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.PatchCrmConnectionIdCompanyIdDealDealIdRequest](../../models/operations/patchcrmconnectionidcompanyiddealdealidrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.PatchCrmConnectionIdCompanyIdDealDealIdResponse](../../models/operations/patchcrmconnectionidcompanyiddealdealidresponse.md)>**


## patchCrmConnectionIdContactId

Update a contact

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PatchCrmConnectionIdContactIdResponse } from "Unified-to/dist/sdk/models/operations";
import { CrmEmailType, CrmTelephoneType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.patchCrmConnectionIdContactId({
  crmContact: {
    address: {
      address1: "ad",
      address2: "magni",
      city: "Port Gregorio",
      country: "Kiribati",
      countryCode: "IL",
      postalCode: "16520",
      region: "sed",
      regionCode: "officiis",
    },
    company: "Berge and Sons",
    companyIds: [
      "in",
    ],
    createdAt: new Date("2022-06-07T04:09:35.137Z"),
    dealIds: [
      "cumque",
    ],
    emails: [
      {
        email: "Benjamin_Sawayn25@gmail.com",
        type: CrmEmailType.Work,
      },
    ],
    id: "3abcdc91-faab-4dd8-8e71-f6c48252d777",
    name: "Olive Klocko",
    raw: {},
    telephones: [
      {
        telephone: "perferendis",
        type: CrmTelephoneType.Other,
      },
    ],
    title: "Mrs.",
    updatedAt: new Date("2022-12-28T22:00:41.509Z"),
  },
  connectionId: "iste",
  id: "ef8d29de-1dd7-4097-b5da-08c57fa6c78a",
}).then((res: PatchCrmConnectionIdContactIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.PatchCrmConnectionIdContactIdRequest](../../models/operations/patchcrmconnectionidcontactidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.PatchCrmConnectionIdContactIdResponse](../../models/operations/patchcrmconnectionidcontactidresponse.md)>**


## patchCrmConnectionIdContactIdCompanyCompanyId

Associate a company with a contact

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PatchCrmConnectionIdContactIdCompanyCompanyIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.patchCrmConnectionIdContactIdCompanyCompanyId({
  companyId: "quia",
  connectionId: "architecto",
  id: "6e19bafe-ca61-4914-9814-0b64ff8ae170",
}).then((res: PatchCrmConnectionIdContactIdCompanyCompanyIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                          | [operations.PatchCrmConnectionIdContactIdCompanyCompanyIdRequest](../../models/operations/patchcrmconnectionidcontactidcompanycompanyidrequest.md) | :heavy_check_mark:                                                                                                                                 | The request object to use for the request.                                                                                                         |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.PatchCrmConnectionIdContactIdCompanyCompanyIdResponse](../../models/operations/patchcrmconnectionidcontactidcompanycompanyidresponse.md)>**


## patchCrmConnectionIdContactIdDealDealId

Associate a deal with a contact

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PatchCrmConnectionIdContactIdDealDealIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.patchCrmConnectionIdContactIdDealDealId({
  connectionId: "itaque",
  dealId: "repellat",
  id: "03b5f37e-4aa8-4685-9596-6732aa5dcb66",
}).then((res: PatchCrmConnectionIdContactIdDealDealIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.PatchCrmConnectionIdContactIdDealDealIdRequest](../../models/operations/patchcrmconnectionidcontactiddealdealidrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.PatchCrmConnectionIdContactIdDealDealIdResponse](../../models/operations/patchcrmconnectionidcontactiddealdealidresponse.md)>**


## patchCrmConnectionIdDealId

Update a deal

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PatchCrmConnectionIdDealIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.patchCrmConnectionIdDealId({
  crmDeal: {
    amount: 5082.71,
    closedAt: new Date("2022-03-19T13:47:36.994Z"),
    createdAt: new Date("2022-02-08T01:10:32.381Z"),
    currency: "eaque",
    id: "f8cfd5fb-6e91-4b9a-9f74-846e2c3309db",
    lostReason: "aut",
    name: "Grace Kerluke",
    pipeline: "voluptates",
    probability: 4671.09,
    raw: {},
    source: "ad",
    stage: "eligendi",
    tags: [
      "fuga",
    ],
    updatedAt: new Date("2022-12-22T07:55:07.552Z"),
    wonReason: "iure",
  },
  connectionId: "earum",
  id: "5392c11a-25a8-4bf9-af97-428ad9a9f8bf",
}).then((res: PatchCrmConnectionIdDealIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.PatchCrmConnectionIdDealIdRequest](../../models/operations/patchcrmconnectioniddealidrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.PatchCrmConnectionIdDealIdResponse](../../models/operations/patchcrmconnectioniddealidresponse.md)>**


## patchCrmConnectionIdEventId

Update a event

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PatchCrmConnectionIdEventIdResponse } from "Unified-to/dist/sdk/models/operations";
import { CrmEventType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.patchCrmConnectionIdEventId({
  crmEvent: {
    call: {
      description: "praesentium",
      duration: 1291.56,
    },
    companyIds: [
      "odit",
    ],
    contactIds: [
      "illo",
    ],
    createdAt: new Date("2022-11-05T17:56:00.169Z"),
    dealIds: [
      "ad",
    ],
    email: {
      body: "velit",
      cc: [
        "ullam",
      ],
      from: "provident",
      subject: "possimus",
      to: [
        "iste",
      ],
    },
    id: "8387f7a7-9cd7-42cd-a484-da21729f2ac4",
    meeting: {
      description: "inventore",
      endAt: new Date("2020-02-29T16:12:01.549Z"),
      startAt: new Date("2022-07-14T02:22:46.250Z"),
      title: "Mr.",
    },
    note: {
      description: "quis",
    },
    raw: {},
    task: {
      description: "maiores",
      name: "Jean Kemmer",
      status: "nobis",
    },
    type: CrmEventType.Note,
    updatedAt: new Date("2022-01-30T15:14:52.146Z"),
  },
  connectionId: "vitae",
  id: "d8a23c23-e34f-42df-a4a1-97f6de922151",
}).then((res: PatchCrmConnectionIdEventIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.PatchCrmConnectionIdEventIdRequest](../../models/operations/patchcrmconnectionideventidrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.PatchCrmConnectionIdEventIdResponse](../../models/operations/patchcrmconnectionideventidresponse.md)>**


## patchCrmConnectionIdEventIdCompanyCompanyId

Associate a company with an event

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PatchCrmConnectionIdEventIdCompanyCompanyIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.patchCrmConnectionIdEventIdCompanyCompanyId({
  companyId: "delectus",
  connectionId: "saepe",
  id: "17120998-53e9-4f54-bd85-4439ee224460",
}).then((res: PatchCrmConnectionIdEventIdCompanyCompanyIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                      | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                      | [operations.PatchCrmConnectionIdEventIdCompanyCompanyIdRequest](../../models/operations/patchcrmconnectionideventidcompanycompanyidrequest.md) | :heavy_check_mark:                                                                                                                             | The request object to use for the request.                                                                                                     |
| `config`                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                   | :heavy_minus_sign:                                                                                                                             | Available config options for making requests.                                                                                                  |


### Response

**Promise<[operations.PatchCrmConnectionIdEventIdCompanyCompanyIdResponse](../../models/operations/patchcrmconnectionideventidcompanycompanyidresponse.md)>**


## patchCrmConnectionIdEventIdContactContactId

Associate a contact with an event

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PatchCrmConnectionIdEventIdContactContactIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.patchCrmConnectionIdEventIdContactContactId({
  connectionId: "tempora",
  contactId: "aliquam",
  id: "3bc15418-8c2f-456e-85da-7832eabd617c",
}).then((res: PatchCrmConnectionIdEventIdContactContactIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                      | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                      | [operations.PatchCrmConnectionIdEventIdContactContactIdRequest](../../models/operations/patchcrmconnectionideventidcontactcontactidrequest.md) | :heavy_check_mark:                                                                                                                             | The request object to use for the request.                                                                                                     |
| `config`                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                   | :heavy_minus_sign:                                                                                                                             | Available config options for making requests.                                                                                                  |


### Response

**Promise<[operations.PatchCrmConnectionIdEventIdContactContactIdResponse](../../models/operations/patchcrmconnectionideventidcontactcontactidresponse.md)>**


## patchCrmConnectionIdEventIdDealDealId

Associate a deal with an event

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PatchCrmConnectionIdEventIdDealDealIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.patchCrmConnectionIdEventIdDealDealId({
  connectionId: "nesciunt",
  dealId: "harum",
  id: "0d51a44b-f01b-4ad8-b06d-46082bfbdc41",
}).then((res: PatchCrmConnectionIdEventIdDealDealIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.PatchCrmConnectionIdEventIdDealDealIdRequest](../../models/operations/patchcrmconnectionideventiddealdealidrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.PatchCrmConnectionIdEventIdDealDealIdResponse](../../models/operations/patchcrmconnectionideventiddealdealidresponse.md)>**


## patchCrmConnectionIdFileId

Update a file

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PatchCrmConnectionIdFileIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.patchCrmConnectionIdFileId({
  crmFile: {
    active: false,
    activityId: "delectus",
    companyId: "delectus",
    contactId: "nemo",
    createdAt: new Date("2022-02-09T03:27:22.633Z"),
    dealId: "officiis",
    description: "sed",
    fileName: "mollitia",
    fileSize: 9016.11,
    fileType: "labore",
    fileUrl: "doloribus",
    id: "b5cb35d1-7638-4f1e-9b78-359ecc5cb860",
    leadId: "delectus",
    raw: {},
    updatedAt: new Date("2021-06-17T05:07:46.601Z"),
    userId: "illum",
  },
  connectionId: "ullam",
  id: "80ba7381-0e4f-4e44-8729-7cd3b1dd3bbc",
}).then((res: PatchCrmConnectionIdFileIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.PatchCrmConnectionIdFileIdRequest](../../models/operations/patchcrmconnectionidfileidrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.PatchCrmConnectionIdFileIdResponse](../../models/operations/patchcrmconnectionidfileidresponse.md)>**


## patchCrmConnectionIdLeadId

Update a lead

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PatchCrmConnectionIdLeadIdResponse } from "Unified-to/dist/sdk/models/operations";
import { CrmEmailType, CrmTelephoneType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.patchCrmConnectionIdLeadId({
  crmLead: {
    active: false,
    address: {
      address1: "repudiandae",
      address2: "dolores",
      city: "South Maryse",
      country: "Kenya",
      countryCode: "HU",
      postalCode: "29993-0113",
      region: "temporibus",
      regionCode: "in",
    },
    companyId: "veritatis",
    contactId: "nobis",
    createdAt: new Date("2020-02-25T20:15:10.950Z"),
    creatorUserId: "facilis",
    emails: [
      {
        email: "Aditya.Waters30@hotmail.com",
        type: CrmEmailType.Other,
      },
    ],
    id: "8421953b-44bd-43c4-b159-d33e5953c001",
    name: "Victoria Mayert",
    raw: {},
    telephones: [
      {
        telephone: "sequi",
        type: CrmTelephoneType.Fax,
      },
    ],
    updatedAt: new Date("2022-06-20T11:35:53.638Z"),
    userId: "et",
  },
  connectionId: "eveniet",
  id: "6c31cc2f-1fcb-451c-9a41-ffbe9cbd795e",
}).then((res: PatchCrmConnectionIdLeadIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.PatchCrmConnectionIdLeadIdRequest](../../models/operations/patchcrmconnectionidleadidrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.PatchCrmConnectionIdLeadIdResponse](../../models/operations/patchcrmconnectionidleadidresponse.md)>**


## patchCrmConnectionIdPipelineId

Update a pipeline

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PatchCrmConnectionIdPipelineIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.patchCrmConnectionIdPipelineId({
  crmPipeline: {
    active: false,
    createdAt: new Date("2021-10-02T17:06:14.043Z"),
    dealProbability: false,
    displayOrder: 3319.27,
    id: "e076cc7a-bf61-46ea-9c71-641934b90f2e",
    name: "Miss Violet Stiedemann",
    raw: {},
    updatedAt: new Date("2022-01-18T15:41:52.837Z"),
  },
  connectionId: "cumque",
  id: "2f9e2e10-5944-4b93-9d23-7a72f90849d6",
}).then((res: PatchCrmConnectionIdPipelineIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.PatchCrmConnectionIdPipelineIdRequest](../../models/operations/patchcrmconnectionidpipelineidrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.PatchCrmConnectionIdPipelineIdResponse](../../models/operations/patchcrmconnectionidpipelineidresponse.md)>**


## patchCrmConnectionIdTeamId

Update a team

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PatchCrmConnectionIdTeamIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.patchCrmConnectionIdTeamId({
  crmTeam: {
    createdAt: new Date("2021-02-20T21:02:37.274Z"),
    description: "assumenda",
    id: "4aecb753-7cd9-4222-89ff-57491aabfa2e",
    name: "Agnes Boyle DDS",
    raw: {},
    updatedAt: new Date("2022-06-14T19:35:26.505Z"),
    userIds: [
      "pariatur",
    ],
  },
  connectionId: "labore",
  id: "56ef1031-e689-49f0-8200-1e22cd55cc05",
}).then((res: PatchCrmConnectionIdTeamIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.PatchCrmConnectionIdTeamIdRequest](../../models/operations/patchcrmconnectionidteamidrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.PatchCrmConnectionIdTeamIdResponse](../../models/operations/patchcrmconnectionidteamidresponse.md)>**


## patchCrmConnectionIdUserId

Update a user

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PatchCrmConnectionIdUserIdResponse } from "Unified-to/dist/sdk/models/operations";
import { CrmEmailType, CrmTelephoneType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.patchCrmConnectionIdUserId({
  crmUser: {
    active: false,
    address: {
      address1: "molestias",
      address2: "modi",
      city: "Botsfordmouth",
      country: "Falkland Islands (Malvinas)",
      countryCode: "SN",
      postalCode: "38641",
      region: "reiciendis",
      regionCode: "cumque",
    },
    createdAt: new Date("2022-09-30T11:37:32.563Z"),
    currency: "sit",
    department: "eligendi",
    division: "commodi",
    emails: [
      {
        email: "Marty44@gmail.com",
        type: CrmEmailType.Other,
      },
    ],
    id: "b8e0cc88-5187-4e4d-a04a-f28c5dddb46a",
    imageUrl: "similique",
    languageLocale: "quasi",
    name: "Courtney Stark",
    raw: {},
    telephones: [
      {
        telephone: "corrupti",
        type: CrmTelephoneType.Work,
      },
    ],
    timezone: "blanditiis",
    title: "Dr.",
    updatedAt: new Date("2022-11-19T04:49:06.712Z"),
  },
  connectionId: "inventore",
  id: "31911296-4664-45c1-981f-29042f569b7a",
}).then((res: PatchCrmConnectionIdUserIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.PatchCrmConnectionIdUserIdRequest](../../models/operations/patchcrmconnectioniduseridrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.PatchCrmConnectionIdUserIdResponse](../../models/operations/patchcrmconnectioniduseridresponse.md)>**


## postCrmConnectionIdCompany

Create a company

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PostCrmConnectionIdCompanyResponse } from "Unified-to/dist/sdk/models/operations";
import { CrmEmailType, CrmTelephoneType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.postCrmConnectionIdCompany({
  crmCompany: {
    active: false,
    address: {
      address1: "reiciendis",
      address2: "a",
      city: "Fort Marianoville",
      country: "China",
      countryCode: "BG",
      postalCode: "87904",
      region: "veritatis",
      regionCode: "harum",
    },
    createdAt: new Date("2022-10-16T13:57:49.107Z"),
    dealIds: [
      "ex",
    ],
    emails: [
      {
        email: "Shayna_Cormier@gmail.com",
        type: CrmEmailType.Other,
      },
    ],
    id: "3b084da9-9257-4d04-b408-47a742d84496",
    name: "Garry Schultz",
    raw: {},
    tags: [
      "impedit",
    ],
    telephones: [
      {
        telephone: "reiciendis",
        type: CrmTelephoneType.Other,
      },
    ],
    updatedAt: new Date("2021-10-25T02:03:33.706Z"),
    websites: [
      "provident",
    ],
  },
  connectionId: "soluta",
}).then((res: PostCrmConnectionIdCompanyResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.PostCrmConnectionIdCompanyRequest](../../models/operations/postcrmconnectionidcompanyrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.PostCrmConnectionIdCompanyResponse](../../models/operations/postcrmconnectionidcompanyresponse.md)>**


## postCrmConnectionIdContact

Create a contact

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PostCrmConnectionIdContactResponse } from "Unified-to/dist/sdk/models/operations";
import { CrmEmailType, CrmTelephoneType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.postCrmConnectionIdContact({
  crmContact: {
    address: {
      address1: "maxime",
      address2: "commodi",
      city: "West Giuseppe",
      country: "Bulgaria",
      countryCode: "TV",
      postalCode: "98933-7162",
      region: "porro",
      regionCode: "eaque",
    },
    company: "Adams - Rogahn",
    companyIds: [
      "accusantium",
    ],
    createdAt: new Date("2022-04-30T21:37:44.867Z"),
    dealIds: [
      "et",
    ],
    emails: [
      {
        email: "Kathryn.Kreiger@gmail.com",
        type: CrmEmailType.Work,
      },
    ],
    id: "eef6d0c6-d6ed-49c7-bdd6-34571509a8e8",
    name: "Michelle Sporer",
    raw: {},
    telephones: [
      {
        telephone: "veniam",
        type: CrmTelephoneType.Fax,
      },
    ],
    title: "Mr.",
    updatedAt: new Date("2021-03-16T15:30:19.890Z"),
  },
  connectionId: "quod",
}).then((res: PostCrmConnectionIdContactResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.PostCrmConnectionIdContactRequest](../../models/operations/postcrmconnectionidcontactrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.PostCrmConnectionIdContactResponse](../../models/operations/postcrmconnectionidcontactresponse.md)>**


## postCrmConnectionIdDeal

Create a deal

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PostCrmConnectionIdDealResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.postCrmConnectionIdDeal({
  crmDeal: {
    amount: 1690.72,
    closedAt: new Date("2022-11-09T02:01:22.662Z"),
    createdAt: new Date("2021-07-16T06:20:50.729Z"),
    currency: "quidem",
    id: "66a1f30c-73df-45b6-b198-90f42a4bb438",
    lostReason: "at",
    name: "Greg Renner",
    pipeline: "aperiam",
    probability: 3268.94,
    raw: {},
    source: "perspiciatis",
    stage: "dicta",
    tags: [
      "assumenda",
    ],
    updatedAt: new Date("2022-09-23T01:34:19.767Z"),
    wonReason: "ad",
  },
  connectionId: "voluptates",
}).then((res: PostCrmConnectionIdDealResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.PostCrmConnectionIdDealRequest](../../models/operations/postcrmconnectioniddealrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.PostCrmConnectionIdDealResponse](../../models/operations/postcrmconnectioniddealresponse.md)>**


## postCrmConnectionIdEvent

Create a event

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PostCrmConnectionIdEventResponse } from "Unified-to/dist/sdk/models/operations";
import { CrmEventType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.postCrmConnectionIdEvent({
  crmEvent: {
    call: {
      description: "sequi",
      duration: 7577.35,
    },
    companyIds: [
      "consequuntur",
    ],
    contactIds: [
      "quae",
    ],
    createdAt: new Date("2022-06-05T23:44:05.370Z"),
    dealIds: [
      "minus",
    ],
    email: {
      body: "excepturi",
      cc: [
        "porro",
      ],
      from: "nesciunt",
      subject: "maiores",
      to: [
        "veniam",
      ],
    },
    id: "67e0e252-765b-41d6-afcd-ace1f01216ce",
    meeting: {
      description: "consequuntur",
      endAt: new Date("2022-10-21T23:31:37.125Z"),
      startAt: new Date("2021-03-28T02:43:50.266Z"),
      title: "Ms.",
    },
    note: {
      description: "earum",
    },
    raw: {},
    task: {
      description: "consequuntur",
      name: "Dr. Brooke Spinka V",
      status: "quibusdam",
    },
    type: CrmEventType.Task,
    updatedAt: new Date("2022-06-04T19:39:19.733Z"),
  },
  connectionId: "doloribus",
}).then((res: PostCrmConnectionIdEventResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.PostCrmConnectionIdEventRequest](../../models/operations/postcrmconnectionideventrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.PostCrmConnectionIdEventResponse](../../models/operations/postcrmconnectionideventresponse.md)>**


## postCrmConnectionIdFile

Create a file

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PostCrmConnectionIdFileResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.postCrmConnectionIdFile({
  crmFile: {
    active: false,
    activityId: "magnam",
    companyId: "adipisci",
    contactId: "natus",
    createdAt: new Date("2022-04-09T06:42:37.007Z"),
    dealId: "sint",
    description: "eos",
    fileName: "nisi",
    fileSize: 4129.5,
    fileType: "impedit",
    fileUrl: "facilis",
    id: "d95f7aa2-b241-4136-95d1-e6698fcc4596",
    leadId: "dolores",
    raw: {},
    updatedAt: new Date("2022-07-11T01:30:23.421Z"),
    userId: "maxime",
  },
  connectionId: "dolores",
}).then((res: PostCrmConnectionIdFileResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.PostCrmConnectionIdFileRequest](../../models/operations/postcrmconnectionidfilerequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.PostCrmConnectionIdFileResponse](../../models/operations/postcrmconnectionidfileresponse.md)>**


## postCrmConnectionIdLead

Create a lead

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PostCrmConnectionIdLeadResponse } from "Unified-to/dist/sdk/models/operations";
import { CrmEmailType, CrmTelephoneType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.postCrmConnectionIdLead({
  crmLead: {
    active: false,
    address: {
      address1: "molestias",
      address2: "quam",
      city: "Gracielaport",
      country: "Italy",
      countryCode: "DJ",
      postalCode: "21320",
      region: "adipisci",
      regionCode: "atque",
    },
    companyId: "tempore",
    contactId: "asperiores",
    createdAt: new Date("2022-05-06T09:37:57.408Z"),
    creatorUserId: "cupiditate",
    emails: [
      {
        email: "Audie_Thompson@yahoo.com",
        type: CrmEmailType.Work,
      },
    ],
    id: "90557389-cedb-4ac7-bda3-9594d66bc2ae",
    name: "Tracey Ankunding",
    raw: {},
    telephones: [
      {
        telephone: "explicabo",
        type: CrmTelephoneType.Fax,
      },
    ],
    updatedAt: new Date("2021-11-03T19:49:32.351Z"),
    userId: "enim",
  },
  connectionId: "tempora",
}).then((res: PostCrmConnectionIdLeadResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.PostCrmConnectionIdLeadRequest](../../models/operations/postcrmconnectionidleadrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.PostCrmConnectionIdLeadResponse](../../models/operations/postcrmconnectionidleadresponse.md)>**


## postCrmConnectionIdPipeline

Create a pipeline

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PostCrmConnectionIdPipelineResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.postCrmConnectionIdPipeline({
  crmPipeline: {
    active: false,
    createdAt: new Date("2022-02-17T23:01:14.241Z"),
    dealProbability: false,
    displayOrder: 9762.31,
    id: "a2206369-8285-453c-b100-06bef4921ec2",
    name: "Melanie Dooley",
    raw: {},
    updatedAt: new Date("2022-05-27T12:59:44.654Z"),
  },
  connectionId: "amet",
}).then((res: PostCrmConnectionIdPipelineResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.PostCrmConnectionIdPipelineRequest](../../models/operations/postcrmconnectionidpipelinerequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.PostCrmConnectionIdPipelineResponse](../../models/operations/postcrmconnectionidpipelineresponse.md)>**


## postCrmConnectionIdTeam

Create a team

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PostCrmConnectionIdTeamResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.postCrmConnectionIdTeam({
  crmTeam: {
    createdAt: new Date("2022-08-08T20:26:05.563Z"),
    description: "officia",
    id: "c8ee0f2b-f195-488d-80d0-3f3deba297be",
    name: "Miss Kellie McGlynn",
    raw: {},
    updatedAt: new Date("2022-12-29T17:21:24.774Z"),
    userIds: [
      "temporibus",
    ],
  },
  connectionId: "doloribus",
}).then((res: PostCrmConnectionIdTeamResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.PostCrmConnectionIdTeamRequest](../../models/operations/postcrmconnectionidteamrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.PostCrmConnectionIdTeamResponse](../../models/operations/postcrmconnectionidteamresponse.md)>**


## postCrmConnectionIdUser

Create a user

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PostCrmConnectionIdUserResponse } from "Unified-to/dist/sdk/models/operations";
import { CrmEmailType, CrmTelephoneType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.postCrmConnectionIdUser({
  crmUser: {
    active: false,
    address: {
      address1: "quos",
      address2: "commodi",
      city: "Waylonhaven",
      country: "Guinea-Bissau",
      countryCode: "CM",
      postalCode: "03772",
      region: "nesciunt",
      regionCode: "vitae",
    },
    createdAt: new Date("2022-03-29T14:23:12.944Z"),
    currency: "provident",
    department: "quia",
    division: "reiciendis",
    emails: [
      {
        email: "Xander48@gmail.com",
        type: CrmEmailType.Other,
      },
    ],
    id: "b0e0bf1f-8217-4978-90ac-ca77aeb7b702",
    imageUrl: "architecto",
    languageLocale: "est",
    name: "Anne Beier",
    raw: {},
    telephones: [
      {
        telephone: "rerum",
        type: CrmTelephoneType.Home,
      },
    ],
    timezone: "aliquam",
    title: "Dr.",
    updatedAt: new Date("2021-11-13T00:54:03.818Z"),
  },
  connectionId: "voluptatibus",
}).then((res: PostCrmConnectionIdUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.PostCrmConnectionIdUserRequest](../../models/operations/postcrmconnectioniduserrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.PostCrmConnectionIdUserResponse](../../models/operations/postcrmconnectioniduserresponse.md)>**


## putCrmConnectionIdCompanyId

Update a company

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PutCrmConnectionIdCompanyIdResponse } from "Unified-to/dist/sdk/models/operations";
import { CrmEmailType, CrmTelephoneType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.putCrmConnectionIdCompanyId({
  crmCompany: {
    active: false,
    address: {
      address1: "facilis",
      address2: "doloremque",
      city: "Hicksville",
      country: "Japan",
      countryCode: "TR",
      postalCode: "52989",
      region: "saepe",
      regionCode: "assumenda",
    },
    createdAt: new Date("2022-08-27T00:13:35.019Z"),
    dealIds: [
      "dolore",
    ],
    emails: [
      {
        email: "Thurman.Wilkinson@gmail.com",
        type: CrmEmailType.Home,
      },
    ],
    id: "34a1b8fe-9973-41ad-805d-85ae2dfb70fb",
    name: "Leona Kub",
    raw: {},
    tags: [
      "sint",
    ],
    telephones: [
      {
        telephone: "consequatur",
        type: CrmTelephoneType.Mobile,
      },
    ],
    updatedAt: new Date("2022-10-16T02:41:29.464Z"),
    websites: [
      "ex",
    ],
  },
  connectionId: "quis",
  id: "61eca16e-f894-451b-976e-eeb518c4da1f",
}).then((res: PutCrmConnectionIdCompanyIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.PutCrmConnectionIdCompanyIdRequest](../../models/operations/putcrmconnectionidcompanyidrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.PutCrmConnectionIdCompanyIdResponse](../../models/operations/putcrmconnectionidcompanyidresponse.md)>**


## putCrmConnectionIdCompanyIdDealDealId

Associate a deal with a company

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PutCrmConnectionIdCompanyIdDealDealIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.putCrmConnectionIdCompanyIdDealDealId({
  connectionId: "est",
  dealId: "repellendus",
  id: "35512f06-d4e5-4b72-b0f5-48568a0424e0",
}).then((res: PutCrmConnectionIdCompanyIdDealDealIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.PutCrmConnectionIdCompanyIdDealDealIdRequest](../../models/operations/putcrmconnectionidcompanyiddealdealidrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.PutCrmConnectionIdCompanyIdDealDealIdResponse](../../models/operations/putcrmconnectionidcompanyiddealdealidresponse.md)>**


## putCrmConnectionIdContactId

Update a contact

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PutCrmConnectionIdContactIdResponse } from "Unified-to/dist/sdk/models/operations";
import { CrmEmailType, CrmTelephoneType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.putCrmConnectionIdContactId({
  crmContact: {
    address: {
      address1: "voluptatem",
      address2: "officia",
      city: "Port Helenashire",
      country: "Romania",
      countryCode: "MN",
      postalCode: "13433",
      region: "at",
      regionCode: "ipsa",
    },
    company: "Ankunding LLC",
    companyIds: [
      "quaerat",
    ],
    createdAt: new Date("2020-11-15T07:36:34.212Z"),
    dealIds: [
      "libero",
    ],
    emails: [
      {
        email: "Ethel_Runolfsdottir95@yahoo.com",
        type: CrmEmailType.Other,
      },
    ],
    id: "5cb01fe5-1e52-48a4-9ac8-2b85f8bc2cab",
    name: "Dave Shanahan",
    raw: {},
    telephones: [
      {
        telephone: "veritatis",
        type: CrmTelephoneType.Work,
      },
    ],
    title: "Ms.",
    updatedAt: new Date("2020-06-03T03:25:43.201Z"),
  },
  connectionId: "nemo",
  id: "97ff4711-aa1b-4c74-b86c-ecc74f77b484",
}).then((res: PutCrmConnectionIdContactIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.PutCrmConnectionIdContactIdRequest](../../models/operations/putcrmconnectionidcontactidrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.PutCrmConnectionIdContactIdResponse](../../models/operations/putcrmconnectionidcontactidresponse.md)>**


## putCrmConnectionIdContactIdCompanyCompanyId

Associate a company with a contact

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PutCrmConnectionIdContactIdCompanyCompanyIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.putCrmConnectionIdContactIdCompanyCompanyId({
  companyId: "totam",
  connectionId: "soluta",
  id: "d6a6f044-1d2c-43b8-8809-4373e060459b",
}).then((res: PutCrmConnectionIdContactIdCompanyCompanyIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                      | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                      | [operations.PutCrmConnectionIdContactIdCompanyCompanyIdRequest](../../models/operations/putcrmconnectionidcontactidcompanycompanyidrequest.md) | :heavy_check_mark:                                                                                                                             | The request object to use for the request.                                                                                                     |
| `config`                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                   | :heavy_minus_sign:                                                                                                                             | Available config options for making requests.                                                                                                  |


### Response

**Promise<[operations.PutCrmConnectionIdContactIdCompanyCompanyIdResponse](../../models/operations/putcrmconnectionidcontactidcompanycompanyidresponse.md)>**


## putCrmConnectionIdContactIdDealDealId

Associate a deal with a contact

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PutCrmConnectionIdContactIdDealDealIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.putCrmConnectionIdContactIdDealDealId({
  connectionId: "voluptates",
  dealId: "rerum",
  id: "bad02f25-86bc-4f15-a558-daa95be6cd02",
}).then((res: PutCrmConnectionIdContactIdDealDealIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.PutCrmConnectionIdContactIdDealDealIdRequest](../../models/operations/putcrmconnectionidcontactiddealdealidrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.PutCrmConnectionIdContactIdDealDealIdResponse](../../models/operations/putcrmconnectionidcontactiddealdealidresponse.md)>**


## putCrmConnectionIdDealId

Update a deal

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PutCrmConnectionIdDealIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.putCrmConnectionIdDealId({
  crmDeal: {
    amount: 4502.9,
    closedAt: new Date("2022-07-29T20:23:21.998Z"),
    createdAt: new Date("2022-04-18T00:26:00.845Z"),
    currency: "quis",
    id: "4aa432b4-7e17-463c-9208-c23e9802d82f",
    lostReason: "alias",
    name: "Oscar Hayes",
    pipeline: "eius",
    probability: 6864.48,
    raw: {},
    source: "blanditiis",
    stage: "nobis",
    tags: [
      "ea",
    ],
    updatedAt: new Date("2022-09-15T14:22:34.731Z"),
    wonReason: "repudiandae",
  },
  connectionId: "recusandae",
  id: "5cfc18ed-c7f7-487e-b2e0-4b3d3ed0c567",
}).then((res: PutCrmConnectionIdDealIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.PutCrmConnectionIdDealIdRequest](../../models/operations/putcrmconnectioniddealidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.PutCrmConnectionIdDealIdResponse](../../models/operations/putcrmconnectioniddealidresponse.md)>**


## putCrmConnectionIdEventId

Update a event

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PutCrmConnectionIdEventIdResponse } from "Unified-to/dist/sdk/models/operations";
import { CrmEventType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.putCrmConnectionIdEventId({
  crmEvent: {
    call: {
      description: "aut",
      duration: 9262.25,
    },
    companyIds: [
      "voluptatibus",
    ],
    contactIds: [
      "dolore",
    ],
    createdAt: new Date("2022-04-24T17:49:43.208Z"),
    dealIds: [
      "illum",
    ],
    email: {
      body: "dolor",
      cc: [
        "porro",
      ],
      from: "iste",
      subject: "earum",
      to: [
        "vitae",
      ],
    },
    id: "cc503f6c-39bc-4d0a-a290-f957f385189a",
    meeting: {
      description: "possimus",
      endAt: new Date("2022-02-11T04:42:06.535Z"),
      startAt: new Date("2021-05-31T22:12:13.308Z"),
      title: "Mr.",
    },
    note: {
      description: "reprehenderit",
    },
    raw: {},
    task: {
      description: "animi",
      name: "Ramiro Berge",
      status: "dolorem",
    },
    type: CrmEventType.Email,
    updatedAt: new Date("2021-02-13T00:37:19.915Z"),
  },
  connectionId: "odio",
  id: "9fb9de40-32ba-426f-9368-ba9216bcb415",
}).then((res: PutCrmConnectionIdEventIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.PutCrmConnectionIdEventIdRequest](../../models/operations/putcrmconnectionideventidrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.PutCrmConnectionIdEventIdResponse](../../models/operations/putcrmconnectionideventidresponse.md)>**


## putCrmConnectionIdEventIdCompanyCompanyId

Associate a company with an event

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PutCrmConnectionIdEventIdCompanyCompanyIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.putCrmConnectionIdEventIdCompanyCompanyId({
  companyId: "molestias",
  connectionId: "neque",
  id: "5c736417-2313-43ed-8046-bc5163bbca49",
}).then((res: PutCrmConnectionIdEventIdCompanyCompanyIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.PutCrmConnectionIdEventIdCompanyCompanyIdRequest](../../models/operations/putcrmconnectionideventidcompanycompanyidrequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.PutCrmConnectionIdEventIdCompanyCompanyIdResponse](../../models/operations/putcrmconnectionideventidcompanycompanyidresponse.md)>**


## putCrmConnectionIdEventIdContactContactId

Associate a contact with an event

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PutCrmConnectionIdEventIdContactContactIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.putCrmConnectionIdEventIdContactContactId({
  connectionId: "dolores",
  contactId: "dolores",
  id: "7c42c22c-5535-4049-9c5d-bb3c57c1e498",
}).then((res: PutCrmConnectionIdEventIdContactContactIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.PutCrmConnectionIdEventIdContactContactIdRequest](../../models/operations/putcrmconnectionideventidcontactcontactidrequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.PutCrmConnectionIdEventIdContactContactIdResponse](../../models/operations/putcrmconnectionideventidcontactcontactidresponse.md)>**


## putCrmConnectionIdEventIdDealDealId

Associate a deal with an event

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PutCrmConnectionIdEventIdDealDealIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.putCrmConnectionIdEventIdDealDealId({
  connectionId: "beatae",
  dealId: "itaque",
  id: "8aa257dd-c191-42eb-9e64-bfcc5469d401",
}).then((res: PutCrmConnectionIdEventIdDealDealIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.PutCrmConnectionIdEventIdDealDealIdRequest](../../models/operations/putcrmconnectionideventiddealdealidrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.PutCrmConnectionIdEventIdDealDealIdResponse](../../models/operations/putcrmconnectionideventiddealdealidresponse.md)>**


## putCrmConnectionIdFileId

Update a file

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PutCrmConnectionIdFileIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.putCrmConnectionIdFileId({
  crmFile: {
    active: false,
    activityId: "quis",
    companyId: "possimus",
    contactId: "reiciendis",
    createdAt: new Date("2022-01-31T11:59:12.250Z"),
    dealId: "iste",
    description: "ex",
    fileName: "odit",
    fileSize: 325.45,
    fileType: "voluptas",
    fileUrl: "libero",
    id: "ef2b0a3e-42c1-4aa0-90e9-aac2e9135586",
    leadId: "fugiat",
    raw: {},
    updatedAt: new Date("2022-06-12T01:32:42.693Z"),
    userId: "delectus",
  },
  connectionId: "sint",
  id: "f97a4bfa-d2bf-47d6-bca8-4ad99b41d612",
}).then((res: PutCrmConnectionIdFileIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.PutCrmConnectionIdFileIdRequest](../../models/operations/putcrmconnectionidfileidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.PutCrmConnectionIdFileIdResponse](../../models/operations/putcrmconnectionidfileidresponse.md)>**


## putCrmConnectionIdLeadId

Update a lead

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PutCrmConnectionIdLeadIdResponse } from "Unified-to/dist/sdk/models/operations";
import { CrmEmailType, CrmTelephoneType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.putCrmConnectionIdLeadId({
  crmLead: {
    active: false,
    address: {
      address1: "numquam",
      address2: "velit",
      city: "East Bradley",
      country: "Libyan Arab Jamahiriya",
      countryCode: "KG",
      postalCode: "79456",
      region: "eaque",
      regionCode: "sequi",
    },
    companyId: "fuga",
    contactId: "assumenda",
    createdAt: new Date("2022-10-30T18:31:55.664Z"),
    creatorUserId: "beatae",
    emails: [
      {
        email: "Rick81@hotmail.com",
        type: CrmEmailType.Work,
      },
    ],
    id: "f0cb0a00-03eb-422d-9b3a-70d94faa741c",
    name: "Dr. Lydia Spencer",
    raw: {},
    telephones: [
      {
        telephone: "quibusdam",
        type: CrmTelephoneType.Mobile,
      },
    ],
    updatedAt: new Date("2022-12-22T05:54:49.594Z"),
    userId: "nostrum",
  },
  connectionId: "doloremque",
  id: "d38dc3ce-1854-472f-9ee6-9166a8be3444",
}).then((res: PutCrmConnectionIdLeadIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.PutCrmConnectionIdLeadIdRequest](../../models/operations/putcrmconnectionidleadidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.PutCrmConnectionIdLeadIdResponse](../../models/operations/putcrmconnectionidleadidresponse.md)>**


## putCrmConnectionIdPipelineId

Update a pipeline

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PutCrmConnectionIdPipelineIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.putCrmConnectionIdPipelineId({
  crmPipeline: {
    active: false,
    createdAt: new Date("2021-02-13T05:37:28.481Z"),
    dealProbability: false,
    displayOrder: 7807.03,
    id: "8b3a2875-c6c1-4fe6-86d0-7d2a9c87ae50",
    name: "Gerald Keebler",
    raw: {},
    updatedAt: new Date("2022-05-17T08:54:26.898Z"),
  },
  connectionId: "veritatis",
  id: "d9136a7e-8d53-4213-b3f6-58752db764c5",
}).then((res: PutCrmConnectionIdPipelineIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.PutCrmConnectionIdPipelineIdRequest](../../models/operations/putcrmconnectionidpipelineidrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.PutCrmConnectionIdPipelineIdResponse](../../models/operations/putcrmconnectionidpipelineidresponse.md)>**


## putCrmConnectionIdTeamId

Update a team

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PutCrmConnectionIdTeamIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.putCrmConnectionIdTeamId({
  crmTeam: {
    createdAt: new Date("2021-01-08T19:51:30.319Z"),
    description: "doloremque",
    id: "a56cebca-da29-4ca7-9181-c95671663c53",
    name: "Candice Hane",
    raw: {},
    updatedAt: new Date("2022-11-27T21:57:18.105Z"),
    userIds: [
      "autem",
    ],
  },
  connectionId: "dolor",
  id: "a3638512-ab25-421b-9f2e-072467b8a40b",
}).then((res: PutCrmConnectionIdTeamIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.PutCrmConnectionIdTeamIdRequest](../../models/operations/putcrmconnectionidteamidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.PutCrmConnectionIdTeamIdResponse](../../models/operations/putcrmconnectionidteamidresponse.md)>**


## putCrmConnectionIdUserId

Update a user

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PutCrmConnectionIdUserIdResponse } from "Unified-to/dist/sdk/models/operations";
import { CrmEmailType, CrmTelephoneType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.crm.putCrmConnectionIdUserId({
  crmUser: {
    active: false,
    address: {
      address1: "minus",
      address2: "sit",
      city: "Fort Marilie",
      country: "Reunion",
      countryCode: "AQ",
      postalCode: "33098-9116",
      region: "sint",
      regionCode: "incidunt",
    },
    createdAt: new Date("2022-08-05T18:58:20.416Z"),
    currency: "aperiam",
    department: "itaque",
    division: "quo",
    emails: [
      {
        email: "Alfonso.Toy@yahoo.com",
        type: CrmEmailType.Work,
      },
    ],
    id: "d1f465e8-5156-4fff-b3fd-f54fdd5ea954",
    imageUrl: "sequi",
    languageLocale: "sequi",
    name: "Wallace Stark",
    raw: {},
    telephones: [
      {
        telephone: "soluta",
        type: CrmTelephoneType.Home,
      },
    ],
    timezone: "dolores",
    title: "Miss",
    updatedAt: new Date("2021-05-08T11:32:15.746Z"),
  },
  connectionId: "iure",
  id: "3388e4d8-039e-4a5f-9b18-a244fd619039",
}).then((res: PutCrmConnectionIdUserIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.PutCrmConnectionIdUserIdRequest](../../models/operations/putcrmconnectioniduseridrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.PutCrmConnectionIdUserIdResponse](../../models/operations/putcrmconnectioniduseridresponse.md)>**

