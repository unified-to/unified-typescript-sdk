# Uc
(*uc*)

### Available Operations

* [deleteUcConnectionIdContactId](#deleteucconnectionidcontactid) - Remove a contact
* [getUcConnectionIdAgent](#getucconnectionidagent) - List all agents
* [getUcConnectionIdCall](#getucconnectionidcall) - List all calls
* [getUcConnectionIdContact](#getucconnectionidcontact) - List all contacts
* [getUcConnectionIdContactId](#getucconnectionidcontactid) - Retrieve a contact
* [patchUcConnectionIdContactId](#patchucconnectionidcontactid) - Update a contact
* [postUcConnectionIdContact](#postucconnectionidcontact) - Create a contact
* [putUcConnectionIdContactId](#putucconnectionidcontactid) - Update a contact

## deleteUcConnectionIdContactId

Remove a contact

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteUcConnectionIdContactIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.uc.deleteUcConnectionIdContactId({
  connectionId: "incidunt",
  id: "52a9f01f-3442-4c61-be13-3bacde532b65",
}).then((res: DeleteUcConnectionIdContactIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.DeleteUcConnectionIdContactIdRequest](../../models/operations/deleteucconnectionidcontactidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.DeleteUcConnectionIdContactIdResponse](../../models/operations/deleteucconnectionidcontactidresponse.md)>**


## getUcConnectionIdAgent

List all agents

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetUcConnectionIdAgentResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.uc.getUcConnectionIdAgent({
  connectionId: "eos",
  contactId: "laboriosam",
  limit: 9714.32,
  offset: 5083.12,
  order: "suscipit",
  query: "explicabo",
  sort: "quos",
  updatedGte: new Date("2022-10-16T11:52:18.503Z"),
}).then((res: GetUcConnectionIdAgentResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetUcConnectionIdAgentRequest](../../models/operations/getucconnectionidagentrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetUcConnectionIdAgentResponse](../../models/operations/getucconnectionidagentresponse.md)>**


## getUcConnectionIdCall

List all calls

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetUcConnectionIdCallResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.uc.getUcConnectionIdCall({
  agentId: "hic",
  connectionId: "eveniet",
  contactId: "eos",
  limit: 5126.45,
  offset: 3151.64,
  order: "provident",
  query: "maxime",
  sort: "officiis",
  updatedGte: new Date("2022-11-01T07:11:20.903Z"),
}).then((res: GetUcConnectionIdCallResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetUcConnectionIdCallRequest](../../models/operations/getucconnectionidcallrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetUcConnectionIdCallResponse](../../models/operations/getucconnectionidcallresponse.md)>**


## getUcConnectionIdContact

List all contacts

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetUcConnectionIdContactResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.uc.getUcConnectionIdContact({
  agentId: "consequuntur",
  connectionId: "quia",
  limit: 1905.14,
  offset: 718.84,
  order: "doloribus",
  query: "earum",
  sort: "commodi",
  updatedGte: new Date("2022-08-09T11:19:33.586Z"),
}).then((res: GetUcConnectionIdContactResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.GetUcConnectionIdContactRequest](../../models/operations/getucconnectionidcontactrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GetUcConnectionIdContactResponse](../../models/operations/getucconnectionidcontactresponse.md)>**


## getUcConnectionIdContactId

Retrieve a contact

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetUcConnectionIdContactIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.uc.getUcConnectionIdContactId({
  connectionId: "dolore",
  id: "c41d2fba-5cba-4069-b8d2-91beb810a2aa",
}).then((res: GetUcConnectionIdContactIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.GetUcConnectionIdContactIdRequest](../../models/operations/getucconnectionidcontactidrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.GetUcConnectionIdContactIdResponse](../../models/operations/getucconnectionidcontactidresponse.md)>**


## patchUcConnectionIdContactId

Update a contact

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PatchUcConnectionIdContactIdResponse } from "Unified-to/dist/sdk/models/operations";
import { UcEmailType, UcTelephoneType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.uc.patchUcConnectionIdContactId({
  ucContact: {
    company: "Kreiger - Gutmann",
    createdAt: new Date("2022-06-03T00:19:22.099Z"),
    emails: [
      {
        email: "Leanna_Walsh26@yahoo.com",
        type: UcEmailType.Other,
      },
    ],
    id: "cf7b50cf-87f0-48f3-9271-076a24b40c8f",
    name: "Terry Rau",
    raw: {},
    telephones: [
      {
        telephone: "quae",
        type: UcTelephoneType.Work,
      },
    ],
    title: "Ms.",
    updatedAt: new Date("2022-02-04T19:42:40.275Z"),
  },
  connectionId: "laudantium",
  id: "8f86996c-8e22-4be0-a3cf-47893bd23f86",
}).then((res: PatchUcConnectionIdContactIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.PatchUcConnectionIdContactIdRequest](../../models/operations/patchucconnectionidcontactidrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.PatchUcConnectionIdContactIdResponse](../../models/operations/patchucconnectionidcontactidresponse.md)>**


## postUcConnectionIdContact

Create a contact

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PostUcConnectionIdContactResponse } from "Unified-to/dist/sdk/models/operations";
import { UcEmailType, UcTelephoneType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.uc.postUcConnectionIdContact({
  ucContact: {
    company: "Abbott - Beatty",
    createdAt: new Date("2021-10-06T16:45:34.362Z"),
    emails: [
      {
        email: "Ova.Kovacek@gmail.com",
        type: UcEmailType.Work,
      },
    ],
    id: "273caa91-18b3-48f1-b61a-331a54dc1029",
    name: "Johanna Muller",
    raw: {},
    telephones: [
      {
        telephone: "debitis",
        type: UcTelephoneType.Mobile,
      },
    ],
    title: "Miss",
    updatedAt: new Date("2022-05-29T03:50:25.472Z"),
  },
  connectionId: "expedita",
}).then((res: PostUcConnectionIdContactResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.PostUcConnectionIdContactRequest](../../models/operations/postucconnectionidcontactrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.PostUcConnectionIdContactResponse](../../models/operations/postucconnectionidcontactresponse.md)>**


## putUcConnectionIdContactId

Update a contact

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PutUcConnectionIdContactIdResponse } from "Unified-to/dist/sdk/models/operations";
import { UcEmailType, UcTelephoneType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.uc.putUcConnectionIdContactId({
  ucContact: {
    company: "Lynch - Zemlak",
    createdAt: new Date("2022-11-29T18:41:38.693Z"),
    emails: [
      {
        email: "Cary.McKenzie@hotmail.com",
        type: UcEmailType.Other,
      },
    ],
    id: "20ee1228-ac3a-4dc6-87d2-40bc11ea4828",
    name: "Danielle Schamberger",
    raw: {},
    telephones: [
      {
        telephone: "aliquid",
        type: UcTelephoneType.Fax,
      },
    ],
    title: "Mr.",
    updatedAt: new Date("2022-10-31T15:11:09.832Z"),
  },
  connectionId: "reiciendis",
  id: "5b9d3cb1-1a76-487d-b100-e8e2b9b0d746",
}).then((res: PutUcConnectionIdContactIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.PutUcConnectionIdContactIdRequest](../../models/operations/putucconnectionidcontactidrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.PutUcConnectionIdContactIdResponse](../../models/operations/putucconnectionidcontactidresponse.md)>**

