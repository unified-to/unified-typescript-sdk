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
  connectionId: "Southeast Modern commonly",
  id: "<ID>",
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
  connectionId: "Regional East Sedan",
  contactId: "blue",
  limit: 7827.68,
  offset: 2116.69,
  order: "Bicycle",
  query: "Bacon officia iterate",
  sort: "sticky vote lumen",
  updatedGte: new Date("2021-07-05T19:53:29.041Z"),
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
  agentId: "Directives",
  connectionId: "female than",
  contactId: "reintermediate Enid Applications",
  limit: 1980.39,
  offset: 3478,
  order: "white Oklahoma Functionality",
  query: "pricing whether Hillsboro",
  sort: "Wooden desensitize SCSI",
  updatedGte: new Date("2021-11-03T12:40:46.997Z"),
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
  agentId: "Refined Practical",
  connectionId: "inasmuch Dodge",
  limit: 7215.14,
  offset: 2910.48,
  order: "Vermont",
  query: "maroon JBOD",
  sort: "hertz",
  updatedGte: new Date("2023-01-29T17:06:35.136Z"),
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
  connectionId: "Land",
  id: "<ID>",
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
    company: "Wilderman, Cremin and Gislason",
    createdAt: new Date("2023-07-18T06:13:06.229Z"),
    emails: [
      {
        email: "Henry.Leannon@gmail.com",
        type: UcEmailType.Other,
      },
    ],
    id: "<ID>",
    name: "quirky digital",
    raw: {},
    telephones: [
      {
        telephone: "Lead 24/7 overriding",
        type: UcTelephoneType.Other,
      },
    ],
    title: "Small Legacy",
    updatedAt: new Date("2022-07-11T16:02:41.922Z"),
  },
  connectionId: "Bohrium",
  id: "<ID>",
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
    company: "Howell and Sons",
    createdAt: new Date("2022-12-18T04:56:44.573Z"),
    emails: [
      {
        email: "Garret81@hotmail.com",
        type: UcEmailType.Home,
      },
    ],
    id: "<ID>",
    name: "Southeast Gasoline extend",
    raw: {},
    telephones: [
      {
        telephone: "Togo Division Human",
        type: UcTelephoneType.Home,
      },
    ],
    title: "COM that",
    updatedAt: new Date("2023-02-07T16:19:58.439Z"),
  },
  connectionId: "Tennessee",
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
    company: "Feeney, Gusikowski and Douglas",
    createdAt: new Date("2021-05-15T18:36:56.888Z"),
    emails: [
      {
        email: "Katrina.Walker@gmail.com",
        type: UcEmailType.Home,
      },
    ],
    id: "<ID>",
    name: "Investment Hip Southwest",
    raw: {},
    telephones: [
      {
        telephone: "powerless Shirt",
        type: UcTelephoneType.Fax,
      },
    ],
    title: "Wooden Buckinghamshire",
    updatedAt: new Date("2022-10-29T19:58:07.810Z"),
  },
  connectionId: "doubtfully",
  id: "<ID>",
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

