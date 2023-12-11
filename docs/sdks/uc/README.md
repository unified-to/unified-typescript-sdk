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

async function run() {
  const sdk = new UnifiedTo({
    security: {
      jwt: "<YOUR_API_KEY_HERE>",
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
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.CreateUcContactRequest](../../sdk/models/operations/createuccontactrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CreateUcContactResponse](../../sdk/models/operations/createuccontactresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getUcContact

Retrieve a contact

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";

async function run() {
  const sdk = new UnifiedTo({
    security: {
      jwt: "<YOUR_API_KEY_HERE>",
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
}

run();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.GetUcContactRequest](../../sdk/models/operations/getuccontactrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.GetUcContactResponse](../../sdk/models/operations/getuccontactresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## listUcCalls

List all calls

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";

async function run() {
  const sdk = new UnifiedTo({
    security: {
      jwt: "<YOUR_API_KEY_HERE>",
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
}

run();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.ListUcCallsRequest](../../sdk/models/operations/listuccallsrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.ListUcCallsResponse](../../sdk/models/operations/listuccallsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## listUcContacts

List all contacts

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";

async function run() {
  const sdk = new UnifiedTo({
    security: {
      jwt: "<YOUR_API_KEY_HERE>",
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
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.ListUcContactsRequest](../../sdk/models/operations/listuccontactsrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.ListUcContactsResponse](../../sdk/models/operations/listuccontactsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## patchUcContact

Update a contact

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";
import { UcEmailType, UcTelephoneType } from "unified-to/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo({
    security: {
      jwt: "<YOUR_API_KEY_HERE>",
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
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.PatchUcContactRequest](../../sdk/models/operations/patchuccontactrequest.md) | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.PatchUcContactResponse](../../sdk/models/operations/patchuccontactresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## removeUcContact

Remove a contact

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";

async function run() {
  const sdk = new UnifiedTo({
    security: {
      jwt: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.uc.removeUcContact({
    connectionId: "string",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.RemoveUcContactRequest](../../sdk/models/operations/removeuccontactrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.RemoveUcContactResponse](../../sdk/models/operations/removeuccontactresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## updateUcContact

Update a contact

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";
import { UcEmailType, UcTelephoneType } from "unified-to/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo({
    security: {
      jwt: "<YOUR_API_KEY_HERE>",
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
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.UpdateUcContactRequest](../../sdk/models/operations/updateuccontactrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.UpdateUcContactResponse](../../sdk/models/operations/updateuccontactresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
