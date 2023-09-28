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
  connectionId: "hertz morph",
  id: "<ID>",
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
  connectionId: "Carolina",
  dealId: "Technician",
  id: "<ID>",
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
  connectionId: "chargesheet",
  id: "<ID>",
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
  companyId: "unaware",
  connectionId: "Nissan",
  id: "<ID>",
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
  connectionId: "auxiliary ew",
  dealId: "foreground Electronics Northeast",
  id: "<ID>",
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
  connectionId: "Fresh",
  id: "<ID>",
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
  connectionId: "Wooden Latin",
  id: "<ID>",
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
  companyId: "Gasoline gentle Japan",
  connectionId: "Outdoors",
  id: "<ID>",
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
  connectionId: "lecture Funk",
  contactId: "Bedfordshire Genderqueer",
  id: "<ID>",
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
  connectionId: "Southeast",
  dealId: "Granite gah Dysprosium",
  id: "<ID>",
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
  connectionId: "Bicycle",
  id: "<ID>",
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
  connectionId: "Senior azure",
  id: "<ID>",
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
  connectionId: "Customer",
  id: "<ID>",
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
  connectionId: "Diverse",
  id: "<ID>",
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
  connectionId: "Intranet Data",
  id: "<ID>",
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
  connectionId: "indexing",
  contactId: "Porsche firewall",
  dealId: "Hafnium Computers",
  limit: 902.85,
  offset: 2893.88,
  order: "Interactions relationships juxtapose",
  query: "newton Luxembourg",
  sort: "Dakota quantifying Actinium",
  updatedGte: new Date("2022-09-27T07:42:48.074Z"),
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
  connectionId: "Netherlands",
  id: "<ID>",
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
  companyId: "Southeast Human Southeast",
  connectionId: "magenta loose",
  dealId: "intuitive",
  limit: 9605,
  offset: 8572.44,
  order: "Music Electronics",
  query: "Elegant",
  sort: "North Analyst Otis",
  updatedGte: new Date("2022-09-18T15:42:24.943Z"),
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
  connectionId: "Account fountain visionary",
  id: "<ID>",
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
  companyId: "Tools Card copying",
  connectionId: "Renminbi",
  contactId: "till payment World",
  limit: 8656.16,
  offset: 4455.8,
  order: "global",
  query: "Program Bespoke Wisconsin",
  sort: "Netherlands under",
  updatedGte: new Date("2022-12-23T01:47:21.816Z"),
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
  connectionId: "Concrete Director",
  id: "<ID>",
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
  companyId: "Zirconium Avon Bedfordshire",
  connectionId: "Hybrid grey Ferrari",
  contactId: "Checking Southeast",
  dealId: "Graham till Caesium",
  limit: 2928.84,
  offset: 5904.77,
  order: "furthermore Tricycle Hop",
  query: "auxiliary",
  sort: "Southeast Bicycle Gorgeous",
  updatedGte: new Date("2023-01-15T23:49:53.643Z"),
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
  connectionId: "Future equalise",
  id: "<ID>",
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
  companyId: "reboot",
  connectionId: "customise far",
  contactId: "Electronic proactive",
  dealId: "withdrawal deposit Gloves",
  limit: 1588.79,
  offset: 3754.81,
  order: "Implemented fairly meh",
  query: "FTP Producer",
  sort: "soprano deliverables",
  updatedGte: new Date("2022-03-02T03:00:09.711Z"),
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
  connectionId: "Bicycle",
  id: "<ID>",
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
  connectionId: "Computer Hop",
  limit: 7411.81,
  offset: 9004.32,
  order: "Operations candela Integration",
  query: "impactful transform",
  sort: "Tala defense Southwest",
  updatedGte: new Date("2021-09-29T00:37:32.184Z"),
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
  connectionId: "users Minnesota Bypass",
  id: "<ID>",
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
  connectionId: "dirty Awesome Checking",
  limit: 9055.88,
  offset: 3443.76,
  order: "glom",
  query: "panel",
  sort: "Latin tightly",
  updatedGte: new Date("2022-03-01T15:47:43.244Z"),
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
  connectionId: "Tricycle roughly markets",
  id: "<ID>",
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
  connectionId: "bath Lamborghini",
  limit: 1042.31,
  offset: 1586.42,
  order: "Diesel Bike virtual",
  query: "bakery",
  sort: "Senior",
  updatedGte: new Date("2021-12-04T23:56:00.028Z"),
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
  connectionId: "Intelligent invoice Tesla",
  id: "<ID>",
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
  connectionId: "suit Electronic Tampa",
  limit: 2883.34,
  offset: 8886.55,
  order: "despite",
  query: "frightfully Fitness",
  sort: "success servant",
  updatedGte: new Date("2023-02-23T05:53:04.259Z"),
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
  connectionId: "connecting Program",
  id: "<ID>",
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
      address1: "invoice",
      address2: "indexing Ford",
      city: "McAllen",
      country: "Netherlands",
      countryCode: "PF",
      postalCode: "93486",
      region: "Steel impactful",
      regionCode: "Dong",
    },
    createdAt: new Date("2023-07-25T08:43:38.995Z"),
    dealIds: [
      "usefully",
    ],
    emails: [
      {
        email: "Annabel31@gmail.com",
        type: CrmEmailType.Work,
      },
    ],
    id: "<ID>",
    name: "Toys Vermont Astatine",
    raw: {},
    tags: [
      "Trigender",
    ],
    telephones: [
      {
        telephone: "female",
        type: CrmTelephoneType.Home,
      },
    ],
    updatedAt: new Date("2021-12-22T11:39:56.432Z"),
    websites: [
      "Latin",
    ],
  },
  connectionId: "North kilogram connecting",
  id: "<ID>",
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
  connectionId: "virtual BMX Tuna",
  dealId: "frightened quia generating",
  id: "<ID>",
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
      address1: "until instantly Taiwan",
      address2: "disintermediate ah Southwest",
      city: "San Antonio",
      country: "Djibouti",
      countryCode: "LA",
      postalCode: "23695",
      region: "grey around",
      regionCode: "Folding",
    },
    company: "Johnson - Gerlach",
    companyIds: [
      "Personal",
    ],
    createdAt: new Date("2022-07-24T05:16:20.203Z"),
    dealIds: [
      "generation",
    ],
    emails: [
      {
        email: "Leora_Konopelski27@hotmail.com",
        type: CrmEmailType.Other,
      },
    ],
    id: "<ID>",
    name: "Innovative indeed brand",
    raw: {},
    telephones: [
      {
        telephone: "unsung Borders",
        type: CrmTelephoneType.Home,
      },
    ],
    title: "withdrawal",
    updatedAt: new Date("2022-05-05T23:37:21.563Z"),
  },
  connectionId: "markets radian",
  id: "<ID>",
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
  companyId: "Folsom Selenium methodologies",
  connectionId: "Platinum seamless Southwest",
  id: "<ID>",
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
  connectionId: "pascal Genderflux Metal",
  dealId: "line",
  id: "<ID>",
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
    amount: 7725.78,
    closedAt: new Date("2021-10-28T08:42:49.591Z"),
    createdAt: new Date("2023-04-23T15:03:53.999Z"),
    currency: "Afghani",
    id: "<ID>",
    lostReason: "North",
    name: "midnight",
    pipeline: "envisioneer Functionality Loan",
    probability: 7051.73,
    raw: {},
    source: "Krone",
    stage: "pascal aliquam gripping",
    tags: [
      "where",
    ],
    updatedAt: new Date("2022-04-05T10:21:22.505Z"),
    wonReason: "Savings kilogram",
  },
  connectionId: "Chair weber silver",
  id: "<ID>",
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
      description: "Optional zero defect function",
      duration: 5434.61,
    },
    companyIds: [
      "silver",
    ],
    contactIds: [
      "redefine",
    ],
    createdAt: new Date("2021-07-21T06:46:42.528Z"),
    dealIds: [
      "Solutions",
    ],
    email: {
      body: "French",
      cc: [
        "Checking",
      ],
      from: "SDD Toyota Northeast",
      subject: "Convertible",
      to: [
        "Electronics",
      ],
    },
    id: "<ID>",
    meeting: {
      description: "Monitored mission-critical customer loyalty",
      endAt: new Date("2022-09-22T17:43:00.863Z"),
      startAt: new Date("2023-04-24T06:40:04.926Z"),
      title: "Kip Switchable Chicken",
    },
    note: {
      description: "Cross-group high-level functionalities",
    },
    raw: {},
    task: {
      description: "Horizontal empowering forecast",
      name: "Principal extremely Jast",
      status: "striped Concrete Bronze",
    },
    type: CrmEventType.Note,
    updatedAt: new Date("2021-02-18T21:34:24.992Z"),
  },
  connectionId: "Dinar benchmark till",
  id: "<ID>",
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
  companyId: "quis Operations",
  connectionId: "convergence programming",
  id: "<ID>",
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
  connectionId: "gosh",
  contactId: "North Guilder",
  id: "<ID>",
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
  connectionId: "nobis Developer withdrawal",
  dealId: "male connect",
  id: "<ID>",
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
    activityId: "duh Handmade harness",
    companyId: "CFP",
    contactId: "unaware yellow generating",
    createdAt: new Date("2021-05-04T04:54:33.785Z"),
    dealId: "channels SUV",
    description: "De-engineered didactic hardware",
    fileName: "metical_silver_yellow.html",
    fileSize: 6861.53,
    fileType: "video",
    fileUrl: "navigate Funk",
    id: "<ID>",
    leadId: "internal",
    raw: {},
    updatedAt: new Date("2023-02-21T13:46:42.012Z"),
    userId: "Interactions",
  },
  connectionId: "Handcrafted",
  id: "<ID>",
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
      address1: "Cambridgeshire",
      address2: "Oriental farad male",
      city: "D'Amorebury",
      country: "Reunion",
      countryCode: "UY",
      postalCode: "87017-9001",
      region: "Buckinghamshire Electric",
      regionCode: "South gee",
    },
    companyId: "Gasoline conglomeration Tennessine",
    contactId: "grow hub",
    createdAt: new Date("2023-06-09T15:23:12.644Z"),
    creatorUserId: "voluptates",
    emails: [
      {
        email: "Jeffrey.Denesik52@yahoo.com",
        type: CrmEmailType.Home,
      },
    ],
    id: "<ID>",
    name: "whiteboard lumen",
    raw: {},
    telephones: [
      {
        telephone: "Cheese before against",
        type: CrmTelephoneType.Fax,
      },
    ],
    updatedAt: new Date("2022-07-12T14:19:50.007Z"),
    userId: "Games yellow Towels",
  },
  connectionId: "brr misuse",
  id: "<ID>",
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
    createdAt: new Date("2023-08-24T17:39:51.183Z"),
    dealProbability: false,
    displayOrder: 664.58,
    id: "<ID>",
    name: "bandwidth",
    raw: {},
    updatedAt: new Date("2023-11-27T01:55:15.440Z"),
  },
  connectionId: "Chips",
  id: "<ID>",
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
    createdAt: new Date("2021-05-20T12:47:48.451Z"),
    description: "Automated executive emulation",
    id: "<ID>",
    name: "Internal experiences",
    raw: {},
    updatedAt: new Date("2022-05-22T09:41:53.599Z"),
    userIds: [
      "lumen",
    ],
  },
  connectionId: "up Candace",
  id: "<ID>",
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
      address1: "Customer",
      address2: "violet groupware blanditiis",
      city: "South Phoebeshire",
      country: "Thailand",
      countryCode: "NO",
      postalCode: "30801-4594",
      region: "portals Vanadium",
      regionCode: "Future",
    },
    createdAt: new Date("2023-01-04T02:42:28.788Z"),
    currency: "Guinea Franc",
    department: "Gloves global rosin",
    division: "Berkshire Europium",
    emails: [
      {
        email: "Wade.Dach@gmail.com",
        type: CrmEmailType.Work,
      },
    ],
    id: "<ID>",
    imageUrl: "Checking",
    languageLocale: "Sedan Porsche matrix",
    name: "superstructure Nissan sedately",
    raw: {},
    telephones: [
      {
        telephone: "unto ubiquitous input",
        type: CrmTelephoneType.Mobile,
      },
    ],
    timezone: "America/Tijuana",
    title: "Computer Bicycle",
    updatedAt: new Date("2021-12-13T16:36:33.886Z"),
  },
  connectionId: "gold generating",
  id: "<ID>",
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
      address1: "consequently gosh",
      address2: "phooey",
      city: "Antonettaville",
      country: "Lebanon",
      countryCode: "SI",
      postalCode: "79462",
      region: "orchid Oxygen Kids",
      regionCode: "Electric utilisation",
    },
    createdAt: new Date("2021-10-01T08:46:18.197Z"),
    dealIds: [
      "Tennessee",
    ],
    emails: [
      {
        email: "Jaida.McDermott26@yahoo.com",
        type: CrmEmailType.Other,
      },
    ],
    id: "<ID>",
    name: "Hydrogen Wooden",
    raw: {},
    tags: [
      "CSS",
    ],
    telephones: [
      {
        telephone: "Account invoice",
        type: CrmTelephoneType.Mobile,
      },
    ],
    updatedAt: new Date("2021-09-12T17:31:24.634Z"),
    websites: [
      "Intuitive",
    ],
  },
  connectionId: "Gasoline",
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
      address1: "orchid",
      address2: "invoice wherever watt",
      city: "Rempelcester",
      country: "Nepal",
      countryCode: "FI",
      postalCode: "27896-6482",
      region: "swig",
      regionCode: "Recumbent",
    },
    company: "Fritsch - Bernhard",
    companyIds: [
      "Executive",
    ],
    createdAt: new Date("2021-07-26T17:34:53.280Z"),
    dealIds: [
      "Southwest",
    ],
    emails: [
      {
        email: "Colby24@hotmail.com",
        type: CrmEmailType.Home,
      },
    ],
    id: "<ID>",
    name: "farad",
    raw: {},
    telephones: [
      {
        telephone: "Dynamic withdrawal",
        type: CrmTelephoneType.Work,
      },
    ],
    title: "second Fresh",
    updatedAt: new Date("2023-01-03T09:41:22.581Z"),
  },
  connectionId: "what",
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
    amount: 6144.41,
    closedAt: new Date("2022-07-10T09:55:59.977Z"),
    createdAt: new Date("2022-01-20T07:28:03.436Z"),
    currency: "Convertible Marks",
    id: "<ID>",
    lostReason: "pfft female",
    name: "Expressway",
    pipeline: "withdrawal Extended busily",
    probability: 7998.22,
    raw: {},
    source: "spiffy sometimes",
    stage: "transmitter",
    tags: [
      "intermediate",
    ],
    updatedAt: new Date("2022-10-06T18:34:11.762Z"),
    wonReason: "Cisgender input HTTP",
  },
  connectionId: "accusantium Checking",
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
      description: "Visionary bandwidth-monitored hardware",
      duration: 9256.02,
    },
    companyIds: [
      "Kentucky",
    ],
    contactIds: [
      "Rustic",
    ],
    createdAt: new Date("2023-02-12T10:03:55.861Z"),
    dealIds: [
      "agonizing",
    ],
    email: {
      body: "protocol",
      cc: [
        "Ratke",
      ],
      from: "woman",
      subject: "East Soft",
      to: [
        "Southeast",
      ],
    },
    id: "<ID>",
    meeting: {
      description: "Streamlined intangible time-frame",
      endAt: new Date("2022-04-18T21:50:55.608Z"),
      startAt: new Date("2021-08-24T14:06:25.626Z"),
      title: "violet Synergized blah",
    },
    note: {
      description: "Mandatory eco-centric toolset",
    },
    raw: {},
    task: {
      description: "Team-oriented dynamic forecast",
      name: "Grocery",
      status: "excitedly Bacon",
    },
    type: CrmEventType.Email,
    updatedAt: new Date("2021-09-09T20:12:06.214Z"),
  },
  connectionId: "Progressive",
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
    activityId: "tan impedit Pickup",
    companyId: "Manager",
    contactId: "Florida Shoes East",
    createdAt: new Date("2023-01-08T11:37:24.708Z"),
    dealId: "Agent",
    description: "Multi-lateral well-modulated portal",
    fileName: "panel_city.wav",
    fileSize: 1401.73,
    fileType: "application",
    fileUrl: "for Chips under",
    id: "<ID>",
    leadId: "abaft Checking",
    raw: {},
    updatedAt: new Date("2023-02-25T09:46:59.608Z"),
    userId: "Mexico withdrawal",
  },
  connectionId: "national Lead",
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
      address1: "XSS Country knowledge",
      address2: "structure",
      city: "Giovaniton",
      country: "Ghana",
      countryCode: "CO",
      postalCode: "34495-0585",
      region: "Modern",
      regionCode: "Diesel",
    },
    companyId: "yuppify",
    contactId: "demanding scratch male",
    createdAt: new Date("2023-03-07T11:22:05.657Z"),
    creatorUserId: "masticate South",
    emails: [
      {
        email: "Gregorio37@gmail.com",
        type: CrmEmailType.Home,
      },
    ],
    id: "<ID>",
    name: "Granite Tools",
    raw: {},
    telephones: [
      {
        telephone: "Hassium Balanced male",
        type: CrmTelephoneType.Work,
      },
    ],
    updatedAt: new Date("2021-06-26T11:56:58.926Z"),
    userId: "Consultant",
  },
  connectionId: "solutions gosh",
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
    createdAt: new Date("2023-12-10T23:55:22.206Z"),
    dealProbability: false,
    displayOrder: 3879.73,
    id: "<ID>",
    name: "upward Mayaguez",
    raw: {},
    updatedAt: new Date("2021-09-25T10:43:23.679Z"),
  },
  connectionId: "Lead Health",
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
    createdAt: new Date("2022-02-12T08:57:03.070Z"),
    description: "Organic transitional portal",
    id: "<ID>",
    name: "male bandwidth",
    raw: {},
    updatedAt: new Date("2022-12-29T15:50:04.365Z"),
    userIds: [
      "meter",
    ],
  },
  connectionId: "Guaynabo AGP East",
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
      address1: "driver East",
      address2: "relationships Computer navigate",
      city: "Homestead",
      country: "Cayman Islands",
      countryCode: "BW",
      postalCode: "34958",
      region: "South",
      regionCode: "morph an colossal",
    },
    createdAt: new Date("2021-02-02T08:27:21.693Z"),
    currency: "Cayman Islands Dollar",
    department: "um",
    division: "West sievert generating",
    emails: [
      {
        email: "Jadon_Schumm45@gmail.com",
        type: CrmEmailType.Home,
      },
    ],
    id: "<ID>",
    imageUrl: "radian Borders Southeast",
    languageLocale: "Silicon Awesome Industrial",
    name: "Mouse Accounts",
    raw: {},
    telephones: [
      {
        telephone: "ohm Southeast ROI",
        type: CrmTelephoneType.Mobile,
      },
    ],
    timezone: "Europe/Bratislava",
    title: "Money",
    updatedAt: new Date("2023-12-09T10:24:50.054Z"),
  },
  connectionId: "competent calculate",
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
      address1: "Northwest Northwest",
      address2: "portals Diesel",
      city: "Azusa",
      country: "Qatar",
      countryCode: "CG",
      postalCode: "52396",
      region: "Tuna sticky lest",
      regionCode: "Soft boo Missoula",
    },
    createdAt: new Date("2022-05-14T19:17:30.970Z"),
    dealIds: [
      "Hybrid",
    ],
    emails: [
      {
        email: "Vance_Cruickshank93@gmail.com",
        type: CrmEmailType.Home,
      },
    ],
    id: "<ID>",
    name: "lest Northwest",
    raw: {},
    tags: [
      "East",
    ],
    telephones: [
      {
        telephone: "Bronze round",
        type: CrmTelephoneType.Mobile,
      },
    ],
    updatedAt: new Date("2022-02-21T09:41:36.696Z"),
    websites: [
      "Keyboard",
    ],
  },
  connectionId: "orange Bespoke",
  id: "<ID>",
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
  connectionId: "Hybrid Mississippi Savings",
  dealId: "West Hill Woman",
  id: "<ID>",
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
      address1: "idolized",
      address2: "Southeast Specialist background",
      city: "New Orlando",
      country: "Switzerland",
      countryCode: "GL",
      postalCode: "95864",
      region: "Intersex mmm",
      regionCode: "Specialist",
    },
    company: "Mann and Sons",
    companyIds: [
      "impedit",
    ],
    createdAt: new Date("2023-10-28T10:36:29.710Z"),
    dealIds: [
      "transmitting",
    ],
    emails: [
      {
        email: "Marjorie.Feeney14@hotmail.com",
        type: CrmEmailType.Other,
      },
    ],
    id: "<ID>",
    name: "shuttle",
    raw: {},
    telephones: [
      {
        telephone: "Bolivia",
        type: CrmTelephoneType.Mobile,
      },
    ],
    title: "Austria reinvent",
    updatedAt: new Date("2023-03-20T11:49:01.796Z"),
  },
  connectionId: "hic truck",
  id: "<ID>",
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
  companyId: "till Jazz ugh",
  connectionId: "Arizona tomorrow Chrysler",
  id: "<ID>",
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
  connectionId: "Indiana relationships Coordinator",
  dealId: "Dinar person",
  id: "<ID>",
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
    amount: 4050.98,
    closedAt: new Date("2022-01-15T04:05:31.641Z"),
    createdAt: new Date("2023-06-04T01:28:32.466Z"),
    currency: "Bermudian Dollar (customarily known as Bermuda Dollar)",
    id: "<ID>",
    lostReason: "laudantium Southwest",
    name: "wail Developer",
    pipeline: "male Samarium Gourde",
    probability: 6728.74,
    raw: {},
    source: "Stage Gasoline Metal",
    stage: "Corporate withdrawal Tasty",
    tags: [
      "extranet",
    ],
    updatedAt: new Date("2021-10-16T22:38:02.052Z"),
    wonReason: "phooey",
  },
  connectionId: "Jazz",
  id: "<ID>",
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
      description: "Re-engineered composite time-frame",
      duration: 5444.58,
    },
    companyIds: [
      "DNS",
    ],
    contactIds: [
      "Skokie",
    ],
    createdAt: new Date("2022-07-05T01:37:36.877Z"),
    dealIds: [
      "lux",
    ],
    email: {
      body: "Hatchback card",
      cc: [
        "Gasoline",
      ],
      from: "Caribbean",
      subject: "Account medium",
      to: [
        "copy",
      ],
    },
    id: "<ID>",
    meeting: {
      description: "Inverse optimizing model",
      endAt: new Date("2022-03-21T17:32:41.888Z"),
      startAt: new Date("2022-10-17T10:31:48.119Z"),
      title: "male henry Hat",
    },
    note: {
      description: "Self-enabling asymmetric functionalities",
    },
    raw: {},
    task: {
      description: "Reduced 4th generation analyzer",
      name: "Savings Female nor",
      status: "Customer sky",
    },
    type: CrmEventType.Note,
    updatedAt: new Date("2023-07-27T14:02:37.510Z"),
  },
  connectionId: "transparent",
  id: "<ID>",
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
  companyId: "Administrator",
  connectionId: "Computers",
  id: "<ID>",
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
  connectionId: "olive",
  contactId: "deposit Bicycle",
  id: "<ID>",
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
  connectionId: "Bloomington",
  dealId: "provided apud Southeast",
  id: "<ID>",
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
    activityId: "Cotton",
    companyId: "Northeast",
    contactId: "Computer",
    createdAt: new Date("2021-04-09T13:10:01.367Z"),
    dealId: "toward confiscate East",
    description: "Devolved upward-trending matrices",
    fileName: "generation_tactics.wav",
    fileSize: 4770.09,
    fileType: "audio",
    fileUrl: "framework azure Metal",
    id: "<ID>",
    leadId: "ampere costume",
    raw: {},
    updatedAt: new Date("2023-05-15T05:04:24.130Z"),
    userId: "Research payment",
  },
  connectionId: "East Associate Mazda",
  id: "<ID>",
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
      address1: "Extension",
      address2: "supposing Dorado Assistant",
      city: "South Gate",
      country: "Reunion",
      countryCode: "IS",
      postalCode: "73732-2192",
      region: "JBOD phew",
      regionCode: "Southeast Framingham female",
    },
    companyId: "deposit male",
    contactId: "bunch edge",
    createdAt: new Date("2021-04-03T18:08:02.798Z"),
    creatorUserId: "East Panama",
    emails: [
      {
        email: "Jamal20@yahoo.com",
        type: CrmEmailType.Work,
      },
    ],
    id: "<ID>",
    name: "pianist",
    raw: {},
    telephones: [
      {
        telephone: "caricature female",
        type: CrmTelephoneType.Home,
      },
    ],
    updatedAt: new Date("2022-08-09T07:11:50.077Z"),
    userId: "Designer Folding",
  },
  connectionId: "Lanthanum wink Regional",
  id: "<ID>",
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
    createdAt: new Date("2021-05-16T17:24:47.805Z"),
    dealProbability: false,
    displayOrder: 5470.76,
    id: "<ID>",
    name: "West",
    raw: {},
    updatedAt: new Date("2022-02-28T07:49:31.151Z"),
  },
  connectionId: "optimizing",
  id: "<ID>",
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
    createdAt: new Date("2023-08-14T23:28:53.515Z"),
    description: "Inverse multi-tasking task-force",
    id: "<ID>",
    name: "Indonesia Orchestrator Division",
    raw: {},
    updatedAt: new Date("2022-10-23T23:13:25.973Z"),
    userIds: [
      "thoroughly",
    ],
  },
  connectionId: "delectus",
  id: "<ID>",
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
      address1: "Honduras",
      address2: "Oxygen Libyan Burundi",
      city: "North Gertrudefield",
      country: "Belgium",
      countryCode: "DK",
      postalCode: "00781",
      region: "Wagon",
      regionCode: "how overriding",
    },
    createdAt: new Date("2023-03-13T00:47:15.649Z"),
    currency: "Pakistan Rupee",
    department: "Tricycle vaguely",
    division: "Severn bluetooth Argon",
    emails: [
      {
        email: "Karl_Stehr4@hotmail.com",
        type: CrmEmailType.Work,
      },
    ],
    id: "<ID>",
    imageUrl: "AGP romance didactic",
    languageLocale: "ROI Polarised",
    name: "olive synthesizing",
    raw: {},
    telephones: [
      {
        telephone: "Honda Indiana",
        type: CrmTelephoneType.Fax,
      },
    ],
    timezone: "Asia/Novosibirsk",
    title: "compelling red compressing",
    updatedAt: new Date("2022-09-03T15:59:05.095Z"),
  },
  connectionId: "relationships",
  id: "<ID>",
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

