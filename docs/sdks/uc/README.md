# Uc
(*uc*)

### Available Operations

* [createUcContact](#createuccontact) - Create a contact
* [getUcContact](#getuccontact) - Retrieve a contact
* [listUcCalls](#listuccalls) - List all calls
* [listUcContacts](#listuccontacts) - List all contacts
* [patchUcContact](#patchuccontact) - Update a contact
* [removeUcContact](#removeuccontact) - Remove a contact
* [updateUcContact](#updateuccontact) - Update a contact

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

  const res = await sdk.uc.createUcContact({
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

  const res = await sdk.uc.getUcContact({
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


## listUcCalls

List all calls

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.uc.listUcCalls({
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

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [operations.ListUcCallsRequest](../../models/operations/listuccallsrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.ListUcCallsResponse](../../models/operations/listuccallsresponse.md)>**


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

  const res = await sdk.uc.listUcContacts({
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

  const res = await sdk.uc.patchUcContact({
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

  const res = await sdk.uc.removeUcContact({
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

  const res = await sdk.uc.updateUcContact({
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

