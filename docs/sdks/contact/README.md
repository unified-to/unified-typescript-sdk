# Contact
(*contact*)

### Available Operations

* [deleteCrmConnectionIdContactId](#deletecrmconnectionidcontactid) - Remove a contact
* [deleteUcConnectionIdContactId](#deleteucconnectionidcontactid) - Remove a contact
* [getCrmConnectionIdContact](#getcrmconnectionidcontact) - List all contacts
* [getCrmConnectionIdContactId](#getcrmconnectionidcontactid) - Retrieve a contact
* [getUcConnectionIdContact](#getucconnectionidcontact) - List all contacts
* [getUcConnectionIdContactId](#getucconnectionidcontactid) - Retrieve a contact
* [patchCrmConnectionIdContactId](#patchcrmconnectionidcontactid) - Update a contact
* [patchUcConnectionIdContactId](#patchucconnectionidcontactid) - Update a contact
* [postCrmConnectionIdContact](#postcrmconnectionidcontact) - Create a contact
* [postUcConnectionIdContact](#postucconnectionidcontact) - Create a contact
* [putCrmConnectionIdContactId](#putcrmconnectionidcontactid) - Update a contact
* [putUcConnectionIdContactId](#putucconnectionidcontactid) - Update a contact

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

sdk.contact.deleteCrmConnectionIdContactId({
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

sdk.contact.deleteUcConnectionIdContactId({
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

sdk.contact.getCrmConnectionIdContact({
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

sdk.contact.getCrmConnectionIdContactId({
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

sdk.contact.getUcConnectionIdContact({
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

sdk.contact.getUcConnectionIdContactId({
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

sdk.contact.patchCrmConnectionIdContactId({
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

sdk.contact.patchUcConnectionIdContactId({
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

sdk.contact.postCrmConnectionIdContact({
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

sdk.contact.postUcConnectionIdContact({
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

sdk.contact.putCrmConnectionIdContactId({
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

sdk.contact.putUcConnectionIdContactId({
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

