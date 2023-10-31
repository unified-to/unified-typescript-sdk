# Contact
(*contact*)

### Available Operations

* [createCrmContact](#createcrmcontact) - Create a contact
* [createUcContact](#createuccontact) - Create a contact
* [getCrmContact](#getcrmcontact) - Retrieve a contact
* [getUcContact](#getuccontact) - Retrieve a contact
* [listCrmContacts](#listcrmcontacts) - List all contacts
* [listUcContacts](#listuccontacts) - List all contacts
* [patchCrmContact](#patchcrmcontact) - Update a contact
* [patchUcContact](#patchuccontact) - Update a contact
* [removeCrmContact](#removecrmcontact) - Remove a contact
* [removeUcContact](#removeuccontact) - Remove a contact
* [updateCrmContact](#updatecrmcontact) - Update a contact
* [updateUcContact](#updateuccontact) - Update a contact

## createCrmContact

Create a contact

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";
import { CrmEmailType, CrmTelephoneType } from "unified-to/dist/sdk/models/shared";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.contact.createCrmContact({
    crmContact: {
      address: {},
      companyIds: [
        "string",
      ],
      dealIds: [
        "string",
      ],
      emails: [
        {},
      ],
      raw: {},
      telephones: [
        {
          telephone: "string",
        },
      ],
    },
    connectionId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.CreateCrmContactRequest](../../models/operations/createcrmcontactrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.CreateCrmContactResponse](../../models/operations/createcrmcontactresponse.md)>**


## createUcContact

Create a contact

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";
import { UcEmailType, UcTelephoneType } from "unified-to/dist/sdk/models/shared";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.contact.createUcContact({
    ucContact: {
      emails: [
        {
          email: "Dulce_Becker30@yahoo.com",
        },
      ],
      raw: {},
      telephones: [
        {
          telephone: "string",
        },
      ],
    },
    connectionId: "string",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.CreateUcContactRequest](../../models/operations/createuccontactrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CreateUcContactResponse](../../models/operations/createuccontactresponse.md)>**


## getCrmContact

Retrieve a contact

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.contact.getCrmContact({
    connectionId: "string",
    fields: [
      "string",
    ],
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.GetCrmContactRequest](../../models/operations/getcrmcontactrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.GetCrmContactResponse](../../models/operations/getcrmcontactresponse.md)>**


## getUcContact

Retrieve a contact

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.contact.getUcContact({
    connectionId: "string",
    fields: [
      "string",
    ],
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.GetUcContactRequest](../../models/operations/getuccontactrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetUcContactResponse](../../models/operations/getuccontactresponse.md)>**


## listCrmContacts

List all contacts

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.contact.listCrmContacts({
    connectionId: "string",
    fields: [
      "string",
    ],
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.ListCrmContactsRequest](../../models/operations/listcrmcontactsrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.ListCrmContactsResponse](../../models/operations/listcrmcontactsresponse.md)>**


## listUcContacts

List all contacts

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.contact.listUcContacts({
    connectionId: "string",
    fields: [
      "string",
    ],
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.ListUcContactsRequest](../../models/operations/listuccontactsrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ListUcContactsResponse](../../models/operations/listuccontactsresponse.md)>**


## patchCrmContact

Update a contact

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";
import { CrmEmailType, CrmTelephoneType } from "unified-to/dist/sdk/models/shared";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.contact.patchCrmContact({
    crmContact: {
      address: {},
      companyIds: [
        "string",
      ],
      dealIds: [
        "string",
      ],
      emails: [
        {},
      ],
      raw: {},
      telephones: [
        {
          telephone: "string",
        },
      ],
    },
    connectionId: "string",
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.PatchCrmContactRequest](../../models/operations/patchcrmcontactrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.PatchCrmContactResponse](../../models/operations/patchcrmcontactresponse.md)>**


## patchUcContact

Update a contact

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";
import { UcEmailType, UcTelephoneType } from "unified-to/dist/sdk/models/shared";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.contact.patchUcContact({
    ucContact: {
      emails: [
        {
          email: "Norene_Boehm97@hotmail.com",
        },
      ],
      raw: {},
      telephones: [
        {
          telephone: "string",
        },
      ],
    },
    connectionId: "string",
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.PatchUcContactRequest](../../models/operations/patchuccontactrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.PatchUcContactResponse](../../models/operations/patchuccontactresponse.md)>**


## removeCrmContact

Remove a contact

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.contact.removeCrmContact({
    connectionId: "string",
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.RemoveCrmContactRequest](../../models/operations/removecrmcontactrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.RemoveCrmContactResponse](../../models/operations/removecrmcontactresponse.md)>**


## removeUcContact

Remove a contact

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.contact.removeUcContact({
    connectionId: "string",
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.RemoveUcContactRequest](../../models/operations/removeuccontactrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.RemoveUcContactResponse](../../models/operations/removeuccontactresponse.md)>**


## updateCrmContact

Update a contact

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";
import { CrmEmailType, CrmTelephoneType } from "unified-to/dist/sdk/models/shared";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.contact.updateCrmContact({
    crmContact: {
      address: {},
      companyIds: [
        "string",
      ],
      dealIds: [
        "string",
      ],
      emails: [
        {},
      ],
      raw: {},
      telephones: [
        {
          telephone: "string",
        },
      ],
    },
    connectionId: "string",
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.UpdateCrmContactRequest](../../models/operations/updatecrmcontactrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.UpdateCrmContactResponse](../../models/operations/updatecrmcontactresponse.md)>**


## updateUcContact

Update a contact

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";
import { UcEmailType, UcTelephoneType } from "unified-to/dist/sdk/models/shared";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.contact.updateUcContact({
    ucContact: {
      emails: [
        {
          email: "Kianna.Witting90@gmail.com",
        },
      ],
      raw: {},
      telephones: [
        {
          telephone: "string",
        },
      ],
    },
    connectionId: "string",
    id: "<ID>",
  });


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.UpdateUcContactRequest](../../models/operations/updateuccontactrequest.md) | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.UpdateUcContactResponse](../../models/operations/updateuccontactresponse.md)>**

