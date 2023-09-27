# Contact
(*contact*)

### Available Operations

* [deleteCrmConnectionIdContactId](#deletecrmconnectionidcontactid) - Remove a contact
* [deleteCrmConnectionIdContactIdCompanyCompanyId](#deletecrmconnectionidcontactidcompanycompanyid) - Remove company association from a contact
* [deleteCrmConnectionIdContactIdDealDealId](#deletecrmconnectionidcontactiddealdealid) - Remove deal association from a contact
* [deleteUcConnectionIdContactId](#deleteucconnectionidcontactid) - Remove a contact
* [getCrmConnectionIdContact](#getcrmconnectionidcontact) - List all contacts
* [getCrmConnectionIdContactId](#getcrmconnectionidcontactid) - Retrieve a contact
* [getUcConnectionIdContact](#getucconnectionidcontact) - List all contacts
* [getUcConnectionIdContactId](#getucconnectionidcontactid) - Retrieve a contact
* [patchCrmConnectionIdContactId](#patchcrmconnectionidcontactid) - Update a contact
* [patchCrmConnectionIdContactIdCompanyCompanyId](#patchcrmconnectionidcontactidcompanycompanyid) - Associate a company with a contact
* [patchCrmConnectionIdContactIdDealDealId](#patchcrmconnectionidcontactiddealdealid) - Associate a deal with a contact
* [patchUcConnectionIdContactId](#patchucconnectionidcontactid) - Update a contact
* [postCrmConnectionIdContact](#postcrmconnectionidcontact) - Create a contact
* [postUcConnectionIdContact](#postucconnectionidcontact) - Create a contact
* [putCrmConnectionIdContactId](#putcrmconnectionidcontactid) - Update a contact
* [putCrmConnectionIdContactIdCompanyCompanyId](#putcrmconnectionidcontactidcompanycompanyid) - Associate a company with a contact
* [putCrmConnectionIdContactIdDealDealId](#putcrmconnectionidcontactiddealdealid) - Associate a deal with a contact
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
  connectionId: "porro",
  id: "6ab21d29-dfc9-44d6-becd-799390066a6d",
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

sdk.contact.deleteCrmConnectionIdContactIdCompanyCompanyId({
  companyId: "explicabo",
  connectionId: "fugiat",
  id: "00035533-8cec-4086-ba21-e9152cb31191",
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

sdk.contact.deleteCrmConnectionIdContactIdDealDealId({
  connectionId: "autem",
  dealId: "ducimus",
  id: "b8e3c8db-0340-48d6-9364-ffd455906d12",
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
  connectionId: "commodi",
  id: "3d48e935-c2c9-4e81-b30b-e3e43202d721",
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
  companyId: "aliquid",
  connectionId: "ad",
  dealId: "voluptate",
  limit: 4265.94,
  offset: 3249.99,
  order: "sit",
  query: "vel",
  sort: "laboriosam",
  updatedGte: new Date("2022-11-27T15:29:14.022Z"),
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
  connectionId: "rem",
  id: "70d9d21f-9ad0-430c-8ecc-11a083642906",
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
  agentId: "laudantium",
  connectionId: "facilis",
  limit: 5146.09,
  offset: 3530.75,
  order: "aut",
  query: "quia",
  sort: "officia",
  updatedGte: new Date("2022-08-22T02:23:15.742Z"),
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
  connectionId: "accusamus",
  id: "7f73bc84-5e32-40a3-99f4-badf947c9a86",
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
      address1: "nihil",
      address2: "facilis",
      city: "Goyetteberg",
      country: "French Polynesia",
      countryCode: "CH",
      postalCode: "44350",
      region: "suscipit",
      regionCode: "quibusdam",
    },
    company: "Russel, Nader and Little",
    companyIds: [
      "voluptates",
    ],
    createdAt: new Date("2021-11-25T22:17:39.417Z"),
    dealIds: [
      "illo",
    ],
    emails: [
      {
        email: "Nyasia76@hotmail.com",
        type: CrmEmailType.Home,
      },
    ],
    id: "93ec12cd-aad0-4ec7-afed-bd80df448a47",
    name: "Jackie Fahey DDS",
    raw: {},
    telephones: [
      {
        telephone: "minima",
        type: CrmTelephoneType.Other,
      },
    ],
    title: "Ms.",
    updatedAt: new Date("2022-12-11T07:04:52.187Z"),
  },
  connectionId: "provident",
  id: "83dabf9e-f3ff-4dd9-b7f0-79af4d35724c",
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

sdk.contact.patchCrmConnectionIdContactIdCompanyCompanyId({
  companyId: "fugiat",
  connectionId: "soluta",
  id: "0f4d2811-87d5-4684-8ede-d85a9065e628",
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

sdk.contact.patchCrmConnectionIdContactIdDealDealId({
  connectionId: "quidem",
  dealId: "illum",
  id: "fc2032b6-c879-4923-b7e1-3584f7ae12c6",
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
    company: "Morissette - Brown",
    createdAt: new Date("2021-06-15T21:46:49.215Z"),
    emails: [
      {
        email: "Nicolas8@gmail.com",
        type: UcEmailType.Home,
      },
    ],
    id: "71723053-77dc-4fa8-9df9-75e356686092",
    name: "Austin Runte",
    raw: {},
    telephones: [
      {
        telephone: "temporibus",
        type: UcTelephoneType.Fax,
      },
    ],
    title: "Mrs.",
    updatedAt: new Date("2022-09-08T04:57:24.220Z"),
  },
  connectionId: "vitae",
  id: "1dea1026-d541-4a4d-990f-eb21780bccc0",
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
      address1: "possimus",
      address2: "distinctio",
      city: "Shanahanhaven",
      country: "Saint Helena",
      countryCode: "FR",
      postalCode: "24059-7392",
      region: "natus",
      regionCode: "ab",
    },
    company: "Keeling, Prohaska and Schowalter",
    companyIds: [
      "ab",
    ],
    createdAt: new Date("2022-07-02T04:44:41.833Z"),
    dealIds: [
      "porro",
    ],
    emails: [
      {
        email: "Omer.Graham25@gmail.com",
        type: CrmEmailType.Work,
      },
    ],
    id: "99ea3422-60e9-4b20-8ce7-8a1bd8fb7a0a",
    name: "Julie Homenick",
    raw: {},
    telephones: [
      {
        telephone: "dignissimos",
        type: CrmTelephoneType.Work,
      },
    ],
    title: "Mr.",
    updatedAt: new Date("2022-01-24T20:30:44.279Z"),
  },
  connectionId: "aut",
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
    company: "Koch - Windler",
    createdAt: new Date("2022-08-16T16:49:13.505Z"),
    emails: [
      {
        email: "Sonia_Morar@gmail.com",
        type: UcEmailType.Home,
      },
    ],
    id: "25b29122-030d-483f-9aeb-7799d22e8c1f",
    name: "Clifford Mertz",
    raw: {},
    telephones: [
      {
        telephone: "sunt",
        type: UcTelephoneType.Home,
      },
    ],
    title: "Dr.",
    updatedAt: new Date("2020-08-28T22:20:14.231Z"),
  },
  connectionId: "quaerat",
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
      address1: "magni",
      address2: "cumque",
      city: "Isidroview",
      country: "Singapore",
      countryCode: "CA",
      postalCode: "18963-7970",
      region: "nobis",
      regionCode: "esse",
    },
    company: "Christiansen - Donnelly",
    companyIds: [
      "alias",
    ],
    createdAt: new Date("2021-05-04T15:01:38.967Z"),
    dealIds: [
      "numquam",
    ],
    emails: [
      {
        email: "Will69@gmail.com",
        type: CrmEmailType.Other,
      },
    ],
    id: "23fdb14d-b6be-45a6-8599-8e22ae20da16",
    name: "Sylvester Cormier",
    raw: {},
    telephones: [
      {
        telephone: "iusto",
        type: CrmTelephoneType.Work,
      },
    ],
    title: "Miss",
    updatedAt: new Date("2022-07-01T20:28:02.172Z"),
  },
  connectionId: "sint",
  id: "c57e854e-9043-49d2-a246-569462407084",
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

sdk.contact.putCrmConnectionIdContactIdCompanyCompanyId({
  companyId: "delectus",
  connectionId: "quam",
  id: "ab37cef0-2225-4194-9b55-410adc669af9",
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

sdk.contact.putCrmConnectionIdContactIdDealDealId({
  connectionId: "alias",
  dealId: "deserunt",
  id: "26c7cdc9-81f0-4689-81d6-bb33cfaa348c",
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
    company: "Boehm LLC",
    createdAt: new Date("2022-02-04T10:58:23.701Z"),
    emails: [
      {
        email: "Jerrold.Watsica98@gmail.com",
        type: UcEmailType.Other,
      },
    ],
    id: "f0c42b78-f156-4263-98a0-dc766324ccb0",
    name: "Leticia Leannon",
    raw: {},
    telephones: [
      {
        telephone: "inventore",
        type: UcTelephoneType.Work,
      },
    ],
    title: "Dr.",
    updatedAt: new Date("2022-10-30T04:54:37.407Z"),
  },
  connectionId: "enim",
  id: "29270b8d-5722-4dd8-95b8-bcf24db95969",
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

