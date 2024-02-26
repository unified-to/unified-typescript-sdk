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
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { CreateUcContactSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";
import { UcEmailType, UcTelephoneType } from "@unified-api/typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: CreateUcContactSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.uc.createUcContact({
    ucContact: {
      emails: [
        {
          email: "Dulce_Becker30@yahoo.com",
        },
      ],
      raw: {
        "key": "<value>",
      },
      telephones: [
        {
          telephone: "<value>",
        },
      ],
    },
    connectionId: "<value>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.CreateUcContactRequest](../../sdk/models/operations/createuccontactrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.CreateUcContactSecurity](../../sdk/models/operations/createuccontactsecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.CreateUcContactResponse](../../sdk/models/operations/createuccontactresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getUcContact

Retrieve a contact

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { GetUcContactSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetUcContactSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.uc.getUcContact({
    connectionId: "<value>",
    fields: [
      "<value>",
    ],
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `request`                                                                              | [operations.GetUcContactRequest](../../sdk/models/operations/getuccontactrequest.md)   | :heavy_check_mark:                                                                     | The request object to use for the request.                                             |
| `security`                                                                             | [operations.GetUcContactSecurity](../../sdk/models/operations/getuccontactsecurity.md) | :heavy_check_mark:                                                                     | The security requirements to use for the request.                                      |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.GetUcContactResponse](../../sdk/models/operations/getuccontactresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listUcCalls

List all calls

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { ListUcCallsSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListUcCallsSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.uc.listUcCalls({
    connectionId: "<value>",
    fields: [
      "<value>",
    ],
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.ListUcCallsRequest](../../sdk/models/operations/listuccallsrequest.md)   | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `security`                                                                           | [operations.ListUcCallsSecurity](../../sdk/models/operations/listuccallssecurity.md) | :heavy_check_mark:                                                                   | The security requirements to use for the request.                                    |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ListUcCallsResponse](../../sdk/models/operations/listuccallsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listUcContacts

List all contacts

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { ListUcContactsSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListUcContactsSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.uc.listUcContacts({
    connectionId: "<value>",
    fields: [
      "<value>",
    ],
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.ListUcContactsRequest](../../sdk/models/operations/listuccontactsrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.ListUcContactsSecurity](../../sdk/models/operations/listuccontactssecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.ListUcContactsResponse](../../sdk/models/operations/listuccontactsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchUcContact

Update a contact

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { PatchUcContactSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";
import { UcEmailType, UcTelephoneType } from "@unified-api/typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: PatchUcContactSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.uc.patchUcContact({
    ucContact: {
      emails: [
        {
          email: "Norene_Boehm97@hotmail.com",
        },
      ],
      raw: {
        "key": "<value>",
      },
      telephones: [
        {
          telephone: "<value>",
        },
      ],
    },
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.PatchUcContactRequest](../../sdk/models/operations/patchuccontactrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.PatchUcContactSecurity](../../sdk/models/operations/patchuccontactsecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.PatchUcContactResponse](../../sdk/models/operations/patchuccontactresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## removeUcContact

Remove a contact

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { RemoveUcContactSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: RemoveUcContactSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.uc.removeUcContact({
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.RemoveUcContactRequest](../../sdk/models/operations/removeuccontactrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.RemoveUcContactSecurity](../../sdk/models/operations/removeuccontactsecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.RemoveUcContactResponse](../../sdk/models/operations/removeuccontactresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateUcContact

Update a contact

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { UpdateUcContactSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";
import { UcEmailType, UcTelephoneType } from "@unified-api/typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: UpdateUcContactSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.uc.updateUcContact({
    ucContact: {
      emails: [
        {
          email: "Kianna.Witting90@gmail.com",
        },
      ],
      raw: {
        "key": "<value>",
      },
      telephones: [
        {
          telephone: "<value>",
        },
      ],
    },
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.UpdateUcContactRequest](../../sdk/models/operations/updateuccontactrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.UpdateUcContactSecurity](../../sdk/models/operations/updateuccontactsecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.UpdateUcContactResponse](../../sdk/models/operations/updateuccontactresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
