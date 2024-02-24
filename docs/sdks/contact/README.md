# Contact
(*contact*)

### Available Operations

* [createAccountingContact](#createaccountingcontact) - Create a contact
* [createCrmContact](#createcrmcontact) - Create a contact
* [createUcContact](#createuccontact) - Create a contact
* [getAccountingContact](#getaccountingcontact) - Retrieve a contact
* [getCrmContact](#getcrmcontact) - Retrieve a contact
* [getUcContact](#getuccontact) - Retrieve a contact
* [listAccountingContacts](#listaccountingcontacts) - List all contacts
* [listCrmContacts](#listcrmcontacts) - List all contacts
* [listUcContacts](#listuccontacts) - List all contacts
* [patchAccountingContact](#patchaccountingcontact) - Update a contact
* [patchCrmContact](#patchcrmcontact) - Update a contact
* [patchUcContact](#patchuccontact) - Update a contact
* [removeAccountingContact](#removeaccountingcontact) - Remove a contact
* [removeCrmContact](#removecrmcontact) - Remove a contact
* [removeUcContact](#removeuccontact) - Remove a contact
* [updateAccountingContact](#updateaccountingcontact) - Update a contact
* [updateCrmContact](#updatecrmcontact) - Update a contact
* [updateUcContact](#updateuccontact) - Update a contact

## createAccountingContact

Create a contact

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { CreateAccountingContactSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { AccountingEmailType, AccountingTelephoneType, TaxExemption } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: CreateAccountingContactSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.contact.createAccountingContact({
    accountingContact: {
      billingAddress: {},
      emails: [
        {
          email: "Mac36@gmail.com",
        },
      ],
      raw: {
        "key": "<value>",
      },
      shippingAddress: {},
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

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.CreateAccountingContactRequest](../../sdk/models/operations/createaccountingcontactrequest.md)   | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `security`                                                                                                   | [operations.CreateAccountingContactSecurity](../../sdk/models/operations/createaccountingcontactsecurity.md) | :heavy_check_mark:                                                                                           | The security requirements to use for the request.                                                            |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.CreateAccountingContactResponse](../../sdk/models/operations/createaccountingcontactresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## createCrmContact

Create a contact

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { CreateCrmContactSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { CrmEmailType, CrmTelephoneType } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: CreateCrmContactSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.contact.createCrmContact({
    crmContact: {
      address: {},
      companyIds: [
        "<value>",
      ],
      dealIds: [
        "<value>",
      ],
      emails: [
        {},
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

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.CreateCrmContactRequest](../../sdk/models/operations/createcrmcontactrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.CreateCrmContactSecurity](../../sdk/models/operations/createcrmcontactsecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.CreateCrmContactResponse](../../sdk/models/operations/createcrmcontactresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## createUcContact

Create a contact

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { CreateUcContactSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { UcEmailType, UcTelephoneType } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: CreateUcContactSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.contact.createUcContact({
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

## getAccountingContact

Retrieve a contact

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { GetAccountingContactSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetAccountingContactSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.contact.getAccountingContact({
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

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.GetAccountingContactRequest](../../sdk/models/operations/getaccountingcontactrequest.md)   | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `security`                                                                                             | [operations.GetAccountingContactSecurity](../../sdk/models/operations/getaccountingcontactsecurity.md) | :heavy_check_mark:                                                                                     | The security requirements to use for the request.                                                      |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetAccountingContactResponse](../../sdk/models/operations/getaccountingcontactresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getCrmContact

Retrieve a contact

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { GetCrmContactSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetCrmContactSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.contact.getCrmContact({
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

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `request`                                                                                | [operations.GetCrmContactRequest](../../sdk/models/operations/getcrmcontactrequest.md)   | :heavy_check_mark:                                                                       | The request object to use for the request.                                               |
| `security`                                                                               | [operations.GetCrmContactSecurity](../../sdk/models/operations/getcrmcontactsecurity.md) | :heavy_check_mark:                                                                       | The security requirements to use for the request.                                        |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.GetCrmContactResponse](../../sdk/models/operations/getcrmcontactresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getUcContact

Retrieve a contact

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { GetUcContactSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetUcContactSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.contact.getUcContact({
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

## listAccountingContacts

List all contacts

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { ListAccountingContactsSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListAccountingContactsSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.contact.listAccountingContacts({
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

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.ListAccountingContactsRequest](../../sdk/models/operations/listaccountingcontactsrequest.md)   | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `security`                                                                                                 | [operations.ListAccountingContactsSecurity](../../sdk/models/operations/listaccountingcontactssecurity.md) | :heavy_check_mark:                                                                                         | The security requirements to use for the request.                                                          |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.ListAccountingContactsResponse](../../sdk/models/operations/listaccountingcontactsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listCrmContacts

List all contacts

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { ListCrmContactsSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListCrmContactsSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.contact.listCrmContacts({
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

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.ListCrmContactsRequest](../../sdk/models/operations/listcrmcontactsrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.ListCrmContactsSecurity](../../sdk/models/operations/listcrmcontactssecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.ListCrmContactsResponse](../../sdk/models/operations/listcrmcontactsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listUcContacts

List all contacts

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { ListUcContactsSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListUcContactsSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.contact.listUcContacts({
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

## patchAccountingContact

Update a contact

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { PatchAccountingContactSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { AccountingEmailType, AccountingTelephoneType, TaxExemption } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: PatchAccountingContactSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.contact.patchAccountingContact({
    accountingContact: {
      billingAddress: {},
      emails: [
        {
          email: "Sylvester.Kuhic@yahoo.com",
        },
      ],
      raw: {
        "key": "<value>",
      },
      shippingAddress: {},
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

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.PatchAccountingContactRequest](../../sdk/models/operations/patchaccountingcontactrequest.md)   | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `security`                                                                                                 | [operations.PatchAccountingContactSecurity](../../sdk/models/operations/patchaccountingcontactsecurity.md) | :heavy_check_mark:                                                                                         | The security requirements to use for the request.                                                          |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.PatchAccountingContactResponse](../../sdk/models/operations/patchaccountingcontactresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchCrmContact

Update a contact

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { PatchCrmContactSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { CrmEmailType, CrmTelephoneType } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: PatchCrmContactSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.contact.patchCrmContact({
    crmContact: {
      address: {},
      companyIds: [
        "<value>",
      ],
      dealIds: [
        "<value>",
      ],
      emails: [
        {},
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
| `request`                                                                                    | [operations.PatchCrmContactRequest](../../sdk/models/operations/patchcrmcontactrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.PatchCrmContactSecurity](../../sdk/models/operations/patchcrmcontactsecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.PatchCrmContactResponse](../../sdk/models/operations/patchcrmcontactresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchUcContact

Update a contact

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { PatchUcContactSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { UcEmailType, UcTelephoneType } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: PatchUcContactSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.contact.patchUcContact({
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

## removeAccountingContact

Remove a contact

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { RemoveAccountingContactSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: RemoveAccountingContactSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.contact.removeAccountingContact({
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

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.RemoveAccountingContactRequest](../../sdk/models/operations/removeaccountingcontactrequest.md)   | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `security`                                                                                                   | [operations.RemoveAccountingContactSecurity](../../sdk/models/operations/removeaccountingcontactsecurity.md) | :heavy_check_mark:                                                                                           | The security requirements to use for the request.                                                            |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.RemoveAccountingContactResponse](../../sdk/models/operations/removeaccountingcontactresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## removeCrmContact

Remove a contact

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { RemoveCrmContactSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: RemoveCrmContactSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.contact.removeCrmContact({
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

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.RemoveCrmContactRequest](../../sdk/models/operations/removecrmcontactrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.RemoveCrmContactSecurity](../../sdk/models/operations/removecrmcontactsecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.RemoveCrmContactResponse](../../sdk/models/operations/removecrmcontactresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## removeUcContact

Remove a contact

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { RemoveUcContactSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: RemoveUcContactSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.contact.removeUcContact({
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

## updateAccountingContact

Update a contact

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { UpdateAccountingContactSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { AccountingEmailType, AccountingTelephoneType, TaxExemption } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: UpdateAccountingContactSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.contact.updateAccountingContact({
    accountingContact: {
      billingAddress: {},
      emails: [
        {
          email: "Kaci_Hane@hotmail.com",
        },
      ],
      raw: {
        "key": "<value>",
      },
      shippingAddress: {},
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

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.UpdateAccountingContactRequest](../../sdk/models/operations/updateaccountingcontactrequest.md)   | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `security`                                                                                                   | [operations.UpdateAccountingContactSecurity](../../sdk/models/operations/updateaccountingcontactsecurity.md) | :heavy_check_mark:                                                                                           | The security requirements to use for the request.                                                            |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.UpdateAccountingContactResponse](../../sdk/models/operations/updateaccountingcontactresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateCrmContact

Update a contact

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { UpdateCrmContactSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { CrmEmailType, CrmTelephoneType } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: UpdateCrmContactSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.contact.updateCrmContact({
    crmContact: {
      address: {},
      companyIds: [
        "<value>",
      ],
      dealIds: [
        "<value>",
      ],
      emails: [
        {},
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

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.UpdateCrmContactRequest](../../sdk/models/operations/updatecrmcontactrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.UpdateCrmContactSecurity](../../sdk/models/operations/updatecrmcontactsecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.UpdateCrmContactResponse](../../sdk/models/operations/updatecrmcontactresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateUcContact

Update a contact

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { UpdateUcContactSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { UcEmailType, UcTelephoneType } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: UpdateUcContactSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.contact.updateUcContact({
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
