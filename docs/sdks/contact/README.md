# Contact

## Overview

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

Creates a AccountingContact. Provide the unified AccountingContact fields in the request body; they are mapped to the provider's API. Returns the created AccountingContact.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createAccountingContact" method="post" path="/accounting/{connection_id}/contact" example="accounting_contact" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.contact.createAccountingContact({
    accountingContact: {
      associatedContacts: [],
      balanceAmount: 55574,
      billingAddress: {
        address1: "9171 Parisian Gateway",
        city: "Lake Keltonboro",
        countryCode: "US",
        postalCode: "70131-2908",
        region: "Illinois",
        regionCode: "CO",
      },
      companyName: "Rice LLC",
      createdAt: new Date("2021-08-15T14:56:50.258Z"),
      currency: "AUD",
      emails: [
        {
          email: "michele.breitenberg@ricellc.com",
          type: "WORK",
        },
        {
          email: "accounts@ricellc.com",
          type: "OTHER",
        },
      ],
      firstName: "Michele",
      id: "13f5b60c-ca11-4f95-a068-41bd7cd3ba70",
      identification: "508720595",
      isActive: true,
      isCustomer: true,
      lastName: "Breitenberg",
      metadata: [],
      name: "Rice LLC",
      notes: "Tabella reprehenderit sono corrupti approbo crastinus sopor ultra.",
      paymentMethods: [
        {
          default: true,
          id: "17e88fb2-643c-4d1a-851f-b7558803b8ef",
          name: "Visa 5318",
          type: "CARD",
        },
      ],
      portalUrl: "https://ricellc.com/billing",
      shippingAddress: {
        address1: "786 Dare Meadows",
        city: "Phoenix",
        countryCode: "US",
        postalCode: "68675",
        region: "Tennessee",
        regionCode: "NE",
      },
      taxExemption: "FOREIGN",
      taxNumber: "564107844",
      telephones: [
        {
          telephone: "(217) 260-4409",
          type: "FAX",
        },
      ],
      updatedAt: new Date("2024-01-05T14:37:34.984Z"),
      website: "https://ricellc.com",
    },
    connectionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { accountingCreateAccountingContact } from "@unified-api/typescript-sdk/funcs/accountingCreateAccountingContact.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingCreateAccountingContact(unifiedTo, {
    accountingContact: {
      associatedContacts: [],
      balanceAmount: 55574,
      billingAddress: {
        address1: "9171 Parisian Gateway",
        city: "Lake Keltonboro",
        countryCode: "US",
        postalCode: "70131-2908",
        region: "Illinois",
        regionCode: "CO",
      },
      companyName: "Rice LLC",
      createdAt: new Date("2021-08-15T14:56:50.258Z"),
      currency: "AUD",
      emails: [
        {
          email: "michele.breitenberg@ricellc.com",
          type: "WORK",
        },
        {
          email: "accounts@ricellc.com",
          type: "OTHER",
        },
      ],
      firstName: "Michele",
      id: "13f5b60c-ca11-4f95-a068-41bd7cd3ba70",
      identification: "508720595",
      isActive: true,
      isCustomer: true,
      lastName: "Breitenberg",
      metadata: [],
      name: "Rice LLC",
      notes: "Tabella reprehenderit sono corrupti approbo crastinus sopor ultra.",
      paymentMethods: [
        {
          default: true,
          id: "17e88fb2-643c-4d1a-851f-b7558803b8ef",
          name: "Visa 5318",
          type: "CARD",
        },
      ],
      portalUrl: "https://ricellc.com/billing",
      shippingAddress: {
        address1: "786 Dare Meadows",
        city: "Phoenix",
        countryCode: "US",
        postalCode: "68675",
        region: "Tennessee",
        regionCode: "NE",
      },
      taxExemption: "FOREIGN",
      taxNumber: "564107844",
      telephones: [
        {
          telephone: "(217) 260-4409",
          type: "FAX",
        },
      ],
      updatedAt: new Date("2024-01-05T14:37:34.984Z"),
      website: "https://ricellc.com",
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingCreateAccountingContact failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateAccountingContactRequest](../../sdk/models/operations/createaccountingcontactrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingContact](../../sdk/models/shared/accountingcontact.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createCrmContact

Creates a CrmContact. Provide the unified CrmContact fields in the request body; they are mapped to the provider's API. Returns the created CrmContact.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createCrmContact" method="post" path="/crm/{connection_id}/contact" example="crm_contact" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.contact.createCrmContact({
    crmContact: {
      address: {
        address1: "489 Eula Park",
        address2: "Apt. 900",
        city: "Archfield",
        countryCode: "US",
        postalCode: "60941-8210",
        region: "Texas",
        regionCode: "NH",
      },
      createdAt: new Date("2021-01-02T00:41:38.885Z"),
      department: "Health",
      emails: [
        {
          email: "alexandro.kuphal@hotmail.com",
          type: "HOME",
        },
      ],
      firstName: "Alexandro",
      id: "e012aed1-58f4-48de-b7ae-ee8e206cdd77",
      imageUrl: "https://avatars.githubusercontent.com/u/26594214",
      lastName: "Kuphal",
      linkUrls: [
        "https://www.linkedin.com/in/alexandro-kuphal",
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "e0d1a89e-ced1-4e38-8656-509785fdea46",
          namespace: "custom",
          slug: "custom_property",
          value: "amplus",
        },
      ],
      name: "Alexandro Kuphal",
      telephones: [
        {
          telephone: "(404) 452-9269",
          type: "OTHER",
        },
        {
          telephone: "(989) 758-8616",
          type: "WORK",
        },
      ],
      title: "Direct Infrastructure Administrator",
      updatedAt: new Date("2021-02-25T03:24:21.387Z"),
    },
    connectionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { contactCreateCrmContact } from "@unified-api/typescript-sdk/funcs/contactCreateCrmContact.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await contactCreateCrmContact(unifiedTo, {
    crmContact: {
      address: {
        address1: "489 Eula Park",
        address2: "Apt. 900",
        city: "Archfield",
        countryCode: "US",
        postalCode: "60941-8210",
        region: "Texas",
        regionCode: "NH",
      },
      createdAt: new Date("2021-01-02T00:41:38.885Z"),
      department: "Health",
      emails: [
        {
          email: "alexandro.kuphal@hotmail.com",
          type: "HOME",
        },
      ],
      firstName: "Alexandro",
      id: "e012aed1-58f4-48de-b7ae-ee8e206cdd77",
      imageUrl: "https://avatars.githubusercontent.com/u/26594214",
      lastName: "Kuphal",
      linkUrls: [
        "https://www.linkedin.com/in/alexandro-kuphal",
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "e0d1a89e-ced1-4e38-8656-509785fdea46",
          namespace: "custom",
          slug: "custom_property",
          value: "amplus",
        },
      ],
      name: "Alexandro Kuphal",
      telephones: [
        {
          telephone: "(404) 452-9269",
          type: "OTHER",
        },
        {
          telephone: "(989) 758-8616",
          type: "WORK",
        },
      ],
      title: "Direct Infrastructure Administrator",
      updatedAt: new Date("2021-02-25T03:24:21.387Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("contactCreateCrmContact failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateCrmContactRequest](../../sdk/models/operations/createcrmcontactrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CrmContact](../../sdk/models/shared/crmcontact.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createUcContact

Creates a UcContact. Provide the unified UcContact fields in the request body; they are mapped to the provider's API. Returns the created UcContact.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createUcContact" method="post" path="/uc/{connection_id}/contact" example="uc_contact" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.contact.createUcContact({
    ucContact: {
      company: "Olson - Stanton",
      createdAt: new Date("2019-10-28T11:06:56.460Z"),
      emails: [
        {
          email: "Norval_Brekke@gmail.com",
          type: "WORK",
        },
      ],
      firstName: "Norval",
      id: "139a4e13-91e2-4d0b-a165-f446dd49bb0d",
      lastName: "Brekke",
      metadata: [],
      name: "Norval Brekke",
      telephones: [
        {
          telephone: "(992) 368-1868",
          type: "FAX",
        },
        {
          telephone: "(238) 374-6019",
          type: "HOME",
        },
        {
          telephone: "(736) 235-7480",
          type: "MOBILE",
        },
      ],
      title: "Internal Creative Director",
      updatedAt: new Date("2023-12-30T04:11:33.843Z"),
    },
    connectionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { contactCreateUcContact } from "@unified-api/typescript-sdk/funcs/contactCreateUcContact.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await contactCreateUcContact(unifiedTo, {
    ucContact: {
      company: "Olson - Stanton",
      createdAt: new Date("2019-10-28T11:06:56.460Z"),
      emails: [
        {
          email: "Norval_Brekke@gmail.com",
          type: "WORK",
        },
      ],
      firstName: "Norval",
      id: "139a4e13-91e2-4d0b-a165-f446dd49bb0d",
      lastName: "Brekke",
      metadata: [],
      name: "Norval Brekke",
      telephones: [
        {
          telephone: "(992) 368-1868",
          type: "FAX",
        },
        {
          telephone: "(238) 374-6019",
          type: "HOME",
        },
        {
          telephone: "(736) 235-7480",
          type: "MOBILE",
        },
      ],
      title: "Internal Creative Director",
      updatedAt: new Date("2023-12-30T04:11:33.843Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("contactCreateUcContact failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateUcContactRequest](../../sdk/models/operations/createuccontactrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.UcContact](../../sdk/models/shared/uccontact.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getAccountingContact

Retrieves a single AccountingContact by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAccountingContact" method="get" path="/accounting/{connection_id}/contact/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.contact.getAccountingContact({
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { accountingGetAccountingContact } from "@unified-api/typescript-sdk/funcs/accountingGetAccountingContact.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingGetAccountingContact(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingGetAccountingContact failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAccountingContactRequest](../../sdk/models/operations/getaccountingcontactrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingContact](../../sdk/models/shared/accountingcontact.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getCrmContact

Retrieves a single CrmContact by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCrmContact" method="get" path="/crm/{connection_id}/contact/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.contact.getCrmContact({
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { contactGetCrmContact } from "@unified-api/typescript-sdk/funcs/contactGetCrmContact.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await contactGetCrmContact(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("contactGetCrmContact failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCrmContactRequest](../../sdk/models/operations/getcrmcontactrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CrmContact](../../sdk/models/shared/crmcontact.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getUcContact

Retrieves a single UcContact by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getUcContact" method="get" path="/uc/{connection_id}/contact/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.contact.getUcContact({
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { contactGetUcContact } from "@unified-api/typescript-sdk/funcs/contactGetUcContact.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await contactGetUcContact(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("contactGetUcContact failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetUcContactRequest](../../sdk/models/operations/getuccontactrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.UcContact](../../sdk/models/shared/uccontact.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listAccountingContacts

Returns a list of AccountingContacts. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listAccountingContacts" method="get" path="/accounting/{connection_id}/contact" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.contact.listAccountingContacts({
    connectionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { accountingListAccountingContacts } from "@unified-api/typescript-sdk/funcs/accountingListAccountingContacts.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingListAccountingContacts(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingListAccountingContacts failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListAccountingContactsRequest](../../sdk/models/operations/listaccountingcontactsrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingContact[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listCrmContacts

Returns a list of CrmContacts. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listCrmContacts" method="get" path="/crm/{connection_id}/contact" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.contact.listCrmContacts({
    connectionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { contactListCrmContacts } from "@unified-api/typescript-sdk/funcs/contactListCrmContacts.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await contactListCrmContacts(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("contactListCrmContacts failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCrmContactsRequest](../../sdk/models/operations/listcrmcontactsrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CrmContact[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listUcContacts

Returns a list of UcContacts. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listUcContacts" method="get" path="/uc/{connection_id}/contact" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.contact.listUcContacts({
    connectionId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { contactListUcContacts } from "@unified-api/typescript-sdk/funcs/contactListUcContacts.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await contactListUcContacts(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("contactListUcContacts failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListUcContactsRequest](../../sdk/models/operations/listuccontactsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.UcContact[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchAccountingContact

Updates the AccountingContact identified by `id`. Provide the unified AccountingContact fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchAccountingContact" method="patch" path="/accounting/{connection_id}/contact/{id}" example="accounting_contact" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.contact.patchAccountingContact({
    accountingContact: {
      associatedContacts: [],
      balanceAmount: 55574,
      billingAddress: {
        address1: "9171 Parisian Gateway",
        city: "Lake Keltonboro",
        countryCode: "US",
        postalCode: "70131-2908",
        region: "Illinois",
        regionCode: "CO",
      },
      companyName: "Rice LLC",
      createdAt: new Date("2021-08-15T14:56:50.258Z"),
      currency: "AUD",
      emails: [
        {
          email: "michele.breitenberg@ricellc.com",
          type: "WORK",
        },
        {
          email: "accounts@ricellc.com",
          type: "OTHER",
        },
      ],
      firstName: "Michele",
      id: "05bd0037-3530-4abe-8fc7-2fc6a94cdc0d",
      identification: "508720595",
      isActive: true,
      isCustomer: true,
      lastName: "Breitenberg",
      metadata: [],
      name: "Rice LLC",
      notes: "Tabella reprehenderit sono corrupti approbo crastinus sopor ultra.",
      paymentMethods: [
        {
          default: true,
          id: "8128827d-8ea3-46c0-bea7-ae6b6de33710",
          name: "Visa 5318",
          type: "CARD",
        },
      ],
      portalUrl: "https://ricellc.com/billing",
      shippingAddress: {
        address1: "786 Dare Meadows",
        city: "Phoenix",
        countryCode: "US",
        postalCode: "68675",
        region: "Tennessee",
        regionCode: "NE",
      },
      taxExemption: "FOREIGN",
      taxNumber: "564107844",
      telephones: [
        {
          telephone: "(217) 260-4409",
          type: "FAX",
        },
      ],
      updatedAt: new Date("2024-01-05T14:37:35.004Z"),
      website: "https://ricellc.com",
    },
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { accountingPatchAccountingContact } from "@unified-api/typescript-sdk/funcs/accountingPatchAccountingContact.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingPatchAccountingContact(unifiedTo, {
    accountingContact: {
      associatedContacts: [],
      balanceAmount: 55574,
      billingAddress: {
        address1: "9171 Parisian Gateway",
        city: "Lake Keltonboro",
        countryCode: "US",
        postalCode: "70131-2908",
        region: "Illinois",
        regionCode: "CO",
      },
      companyName: "Rice LLC",
      createdAt: new Date("2021-08-15T14:56:50.258Z"),
      currency: "AUD",
      emails: [
        {
          email: "michele.breitenberg@ricellc.com",
          type: "WORK",
        },
        {
          email: "accounts@ricellc.com",
          type: "OTHER",
        },
      ],
      firstName: "Michele",
      id: "05bd0037-3530-4abe-8fc7-2fc6a94cdc0d",
      identification: "508720595",
      isActive: true,
      isCustomer: true,
      lastName: "Breitenberg",
      metadata: [],
      name: "Rice LLC",
      notes: "Tabella reprehenderit sono corrupti approbo crastinus sopor ultra.",
      paymentMethods: [
        {
          default: true,
          id: "8128827d-8ea3-46c0-bea7-ae6b6de33710",
          name: "Visa 5318",
          type: "CARD",
        },
      ],
      portalUrl: "https://ricellc.com/billing",
      shippingAddress: {
        address1: "786 Dare Meadows",
        city: "Phoenix",
        countryCode: "US",
        postalCode: "68675",
        region: "Tennessee",
        regionCode: "NE",
      },
      taxExemption: "FOREIGN",
      taxNumber: "564107844",
      telephones: [
        {
          telephone: "(217) 260-4409",
          type: "FAX",
        },
      ],
      updatedAt: new Date("2024-01-05T14:37:35.004Z"),
      website: "https://ricellc.com",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingPatchAccountingContact failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchAccountingContactRequest](../../sdk/models/operations/patchaccountingcontactrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingContact](../../sdk/models/shared/accountingcontact.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchCrmContact

Updates the CrmContact identified by `id`. Provide the unified CrmContact fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchCrmContact" method="patch" path="/crm/{connection_id}/contact/{id}" example="crm_contact" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.contact.patchCrmContact({
    crmContact: {
      address: {
        address1: "489 Eula Park",
        address2: "Apt. 900",
        city: "Archfield",
        countryCode: "US",
        postalCode: "60941-8210",
        region: "Texas",
        regionCode: "NH",
      },
      createdAt: new Date("2021-01-02T00:41:38.885Z"),
      department: "Health",
      emails: [
        {
          email: "alexandro.kuphal@hotmail.com",
          type: "HOME",
        },
      ],
      firstName: "Alexandro",
      id: "f2c3dece-73d7-470e-bee9-2f891894a553",
      imageUrl: "https://avatars.githubusercontent.com/u/26594214",
      lastName: "Kuphal",
      linkUrls: [
        "https://www.linkedin.com/in/alexandro-kuphal",
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "d611d270-da15-4a04-883b-eb19cf21fb29",
          namespace: "custom",
          slug: "custom_property",
          value: "amplus",
        },
      ],
      name: "Alexandro Kuphal",
      telephones: [
        {
          telephone: "(404) 452-9269",
          type: "OTHER",
        },
        {
          telephone: "(989) 758-8616",
          type: "WORK",
        },
      ],
      title: "Direct Infrastructure Administrator",
      updatedAt: new Date("2021-02-25T03:24:21.388Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { contactPatchCrmContact } from "@unified-api/typescript-sdk/funcs/contactPatchCrmContact.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await contactPatchCrmContact(unifiedTo, {
    crmContact: {
      address: {
        address1: "489 Eula Park",
        address2: "Apt. 900",
        city: "Archfield",
        countryCode: "US",
        postalCode: "60941-8210",
        region: "Texas",
        regionCode: "NH",
      },
      createdAt: new Date("2021-01-02T00:41:38.885Z"),
      department: "Health",
      emails: [
        {
          email: "alexandro.kuphal@hotmail.com",
          type: "HOME",
        },
      ],
      firstName: "Alexandro",
      id: "f2c3dece-73d7-470e-bee9-2f891894a553",
      imageUrl: "https://avatars.githubusercontent.com/u/26594214",
      lastName: "Kuphal",
      linkUrls: [
        "https://www.linkedin.com/in/alexandro-kuphal",
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "d611d270-da15-4a04-883b-eb19cf21fb29",
          namespace: "custom",
          slug: "custom_property",
          value: "amplus",
        },
      ],
      name: "Alexandro Kuphal",
      telephones: [
        {
          telephone: "(404) 452-9269",
          type: "OTHER",
        },
        {
          telephone: "(989) 758-8616",
          type: "WORK",
        },
      ],
      title: "Direct Infrastructure Administrator",
      updatedAt: new Date("2021-02-25T03:24:21.388Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("contactPatchCrmContact failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchCrmContactRequest](../../sdk/models/operations/patchcrmcontactrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CrmContact](../../sdk/models/shared/crmcontact.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchUcContact

Updates the UcContact identified by `id`. Provide the unified UcContact fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchUcContact" method="patch" path="/uc/{connection_id}/contact/{id}" example="uc_contact" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.contact.patchUcContact({
    ucContact: {
      company: "Olson - Stanton",
      createdAt: new Date("2019-10-28T11:06:56.460Z"),
      emails: [
        {
          email: "Norval_Brekke@gmail.com",
          type: "WORK",
        },
      ],
      firstName: "Norval",
      id: "fc1fd4e2-631e-48c5-a47c-531830f936ac",
      lastName: "Brekke",
      metadata: [],
      name: "Norval Brekke",
      telephones: [
        {
          telephone: "(992) 368-1868",
          type: "FAX",
        },
        {
          telephone: "(238) 374-6019",
          type: "HOME",
        },
        {
          telephone: "(736) 235-7480",
          type: "MOBILE",
        },
      ],
      title: "Internal Creative Director",
      updatedAt: new Date("2023-12-30T04:11:33.852Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { contactPatchUcContact } from "@unified-api/typescript-sdk/funcs/contactPatchUcContact.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await contactPatchUcContact(unifiedTo, {
    ucContact: {
      company: "Olson - Stanton",
      createdAt: new Date("2019-10-28T11:06:56.460Z"),
      emails: [
        {
          email: "Norval_Brekke@gmail.com",
          type: "WORK",
        },
      ],
      firstName: "Norval",
      id: "fc1fd4e2-631e-48c5-a47c-531830f936ac",
      lastName: "Brekke",
      metadata: [],
      name: "Norval Brekke",
      telephones: [
        {
          telephone: "(992) 368-1868",
          type: "FAX",
        },
        {
          telephone: "(238) 374-6019",
          type: "HOME",
        },
        {
          telephone: "(736) 235-7480",
          type: "MOBILE",
        },
      ],
      title: "Internal Creative Director",
      updatedAt: new Date("2023-12-30T04:11:33.852Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("contactPatchUcContact failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchUcContactRequest](../../sdk/models/operations/patchuccontactrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.UcContact](../../sdk/models/shared/uccontact.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeAccountingContact

Deletes the AccountingContact identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeAccountingContact" method="delete" path="/accounting/{connection_id}/contact/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.contact.removeAccountingContact({
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { accountingRemoveAccountingContact } from "@unified-api/typescript-sdk/funcs/accountingRemoveAccountingContact.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingRemoveAccountingContact(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingRemoveAccountingContact failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveAccountingContactRequest](../../sdk/models/operations/removeaccountingcontactrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveAccountingContactResponse](../../sdk/models/operations/removeaccountingcontactresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeCrmContact

Deletes the CrmContact identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeCrmContact" method="delete" path="/crm/{connection_id}/contact/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.contact.removeCrmContact({
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { contactRemoveCrmContact } from "@unified-api/typescript-sdk/funcs/contactRemoveCrmContact.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await contactRemoveCrmContact(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("contactRemoveCrmContact failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveCrmContactRequest](../../sdk/models/operations/removecrmcontactrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveCrmContactResponse](../../sdk/models/operations/removecrmcontactresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeUcContact

Deletes the UcContact identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeUcContact" method="delete" path="/uc/{connection_id}/contact/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.contact.removeUcContact({
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { contactRemoveUcContact } from "@unified-api/typescript-sdk/funcs/contactRemoveUcContact.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await contactRemoveUcContact(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("contactRemoveUcContact failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveUcContactRequest](../../sdk/models/operations/removeuccontactrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveUcContactResponse](../../sdk/models/operations/removeuccontactresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateAccountingContact

Updates the AccountingContact identified by `id`. Provide the unified AccountingContact fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateAccountingContact" method="put" path="/accounting/{connection_id}/contact/{id}" example="accounting_contact" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.contact.updateAccountingContact({
    accountingContact: {
      associatedContacts: [],
      balanceAmount: 55574,
      billingAddress: {
        address1: "9171 Parisian Gateway",
        city: "Lake Keltonboro",
        countryCode: "US",
        postalCode: "70131-2908",
        region: "Illinois",
        regionCode: "CO",
      },
      companyName: "Rice LLC",
      createdAt: new Date("2021-08-15T14:56:50.258Z"),
      currency: "AUD",
      emails: [
        {
          email: "michele.breitenberg@ricellc.com",
          type: "WORK",
        },
        {
          email: "accounts@ricellc.com",
          type: "OTHER",
        },
      ],
      firstName: "Michele",
      id: "05bd0037-3530-4abe-8fc7-2fc6a94cdc0d",
      identification: "508720595",
      isActive: true,
      isCustomer: true,
      lastName: "Breitenberg",
      metadata: [],
      name: "Rice LLC",
      notes: "Tabella reprehenderit sono corrupti approbo crastinus sopor ultra.",
      paymentMethods: [
        {
          default: true,
          id: "8128827d-8ea3-46c0-bea7-ae6b6de33710",
          name: "Visa 5318",
          type: "CARD",
        },
      ],
      portalUrl: "https://ricellc.com/billing",
      shippingAddress: {
        address1: "786 Dare Meadows",
        city: "Phoenix",
        countryCode: "US",
        postalCode: "68675",
        region: "Tennessee",
        regionCode: "NE",
      },
      taxExemption: "FOREIGN",
      taxNumber: "564107844",
      telephones: [
        {
          telephone: "(217) 260-4409",
          type: "FAX",
        },
      ],
      updatedAt: new Date("2024-01-05T14:37:35.004Z"),
      website: "https://ricellc.com",
    },
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { accountingUpdateAccountingContact } from "@unified-api/typescript-sdk/funcs/accountingUpdateAccountingContact.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await accountingUpdateAccountingContact(unifiedTo, {
    accountingContact: {
      associatedContacts: [],
      balanceAmount: 55574,
      billingAddress: {
        address1: "9171 Parisian Gateway",
        city: "Lake Keltonboro",
        countryCode: "US",
        postalCode: "70131-2908",
        region: "Illinois",
        regionCode: "CO",
      },
      companyName: "Rice LLC",
      createdAt: new Date("2021-08-15T14:56:50.258Z"),
      currency: "AUD",
      emails: [
        {
          email: "michele.breitenberg@ricellc.com",
          type: "WORK",
        },
        {
          email: "accounts@ricellc.com",
          type: "OTHER",
        },
      ],
      firstName: "Michele",
      id: "05bd0037-3530-4abe-8fc7-2fc6a94cdc0d",
      identification: "508720595",
      isActive: true,
      isCustomer: true,
      lastName: "Breitenberg",
      metadata: [],
      name: "Rice LLC",
      notes: "Tabella reprehenderit sono corrupti approbo crastinus sopor ultra.",
      paymentMethods: [
        {
          default: true,
          id: "8128827d-8ea3-46c0-bea7-ae6b6de33710",
          name: "Visa 5318",
          type: "CARD",
        },
      ],
      portalUrl: "https://ricellc.com/billing",
      shippingAddress: {
        address1: "786 Dare Meadows",
        city: "Phoenix",
        countryCode: "US",
        postalCode: "68675",
        region: "Tennessee",
        regionCode: "NE",
      },
      taxExemption: "FOREIGN",
      taxNumber: "564107844",
      telephones: [
        {
          telephone: "(217) 260-4409",
          type: "FAX",
        },
      ],
      updatedAt: new Date("2024-01-05T14:37:35.004Z"),
      website: "https://ricellc.com",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountingUpdateAccountingContact failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateAccountingContactRequest](../../sdk/models/operations/updateaccountingcontactrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.AccountingContact](../../sdk/models/shared/accountingcontact.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateCrmContact

Updates the CrmContact identified by `id`. Provide the unified CrmContact fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateCrmContact" method="put" path="/crm/{connection_id}/contact/{id}" example="crm_contact" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.contact.updateCrmContact({
    crmContact: {
      address: {
        address1: "489 Eula Park",
        address2: "Apt. 900",
        city: "Archfield",
        countryCode: "US",
        postalCode: "60941-8210",
        region: "Texas",
        regionCode: "NH",
      },
      createdAt: new Date("2021-01-02T00:41:38.885Z"),
      department: "Health",
      emails: [
        {
          email: "alexandro.kuphal@hotmail.com",
          type: "HOME",
        },
      ],
      firstName: "Alexandro",
      id: "f2c3dece-73d7-470e-bee9-2f891894a553",
      imageUrl: "https://avatars.githubusercontent.com/u/26594214",
      lastName: "Kuphal",
      linkUrls: [
        "https://www.linkedin.com/in/alexandro-kuphal",
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "d611d270-da15-4a04-883b-eb19cf21fb29",
          namespace: "custom",
          slug: "custom_property",
          value: "amplus",
        },
      ],
      name: "Alexandro Kuphal",
      telephones: [
        {
          telephone: "(404) 452-9269",
          type: "OTHER",
        },
        {
          telephone: "(989) 758-8616",
          type: "WORK",
        },
      ],
      title: "Direct Infrastructure Administrator",
      updatedAt: new Date("2021-02-25T03:24:21.388Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { contactUpdateCrmContact } from "@unified-api/typescript-sdk/funcs/contactUpdateCrmContact.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await contactUpdateCrmContact(unifiedTo, {
    crmContact: {
      address: {
        address1: "489 Eula Park",
        address2: "Apt. 900",
        city: "Archfield",
        countryCode: "US",
        postalCode: "60941-8210",
        region: "Texas",
        regionCode: "NH",
      },
      createdAt: new Date("2021-01-02T00:41:38.885Z"),
      department: "Health",
      emails: [
        {
          email: "alexandro.kuphal@hotmail.com",
          type: "HOME",
        },
      ],
      firstName: "Alexandro",
      id: "f2c3dece-73d7-470e-bee9-2f891894a553",
      imageUrl: "https://avatars.githubusercontent.com/u/26594214",
      lastName: "Kuphal",
      linkUrls: [
        "https://www.linkedin.com/in/alexandro-kuphal",
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "d611d270-da15-4a04-883b-eb19cf21fb29",
          namespace: "custom",
          slug: "custom_property",
          value: "amplus",
        },
      ],
      name: "Alexandro Kuphal",
      telephones: [
        {
          telephone: "(404) 452-9269",
          type: "OTHER",
        },
        {
          telephone: "(989) 758-8616",
          type: "WORK",
        },
      ],
      title: "Direct Infrastructure Administrator",
      updatedAt: new Date("2021-02-25T03:24:21.388Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("contactUpdateCrmContact failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateCrmContactRequest](../../sdk/models/operations/updatecrmcontactrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CrmContact](../../sdk/models/shared/crmcontact.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateUcContact

Updates the UcContact identified by `id`. Provide the unified UcContact fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateUcContact" method="put" path="/uc/{connection_id}/contact/{id}" example="uc_contact" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.contact.updateUcContact({
    ucContact: {
      company: "Olson - Stanton",
      createdAt: new Date("2019-10-28T11:06:56.460Z"),
      emails: [
        {
          email: "Norval_Brekke@gmail.com",
          type: "WORK",
        },
      ],
      firstName: "Norval",
      id: "fc1fd4e2-631e-48c5-a47c-531830f936ac",
      lastName: "Brekke",
      metadata: [],
      name: "Norval Brekke",
      telephones: [
        {
          telephone: "(992) 368-1868",
          type: "FAX",
        },
        {
          telephone: "(238) 374-6019",
          type: "HOME",
        },
        {
          telephone: "(736) 235-7480",
          type: "MOBILE",
        },
      ],
      title: "Internal Creative Director",
      updatedAt: new Date("2023-12-30T04:11:33.852Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { UnifiedToCore } from "@unified-api/typescript-sdk/core.js";
import { contactUpdateUcContact } from "@unified-api/typescript-sdk/funcs/contactUpdateUcContact.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await contactUpdateUcContact(unifiedTo, {
    ucContact: {
      company: "Olson - Stanton",
      createdAt: new Date("2019-10-28T11:06:56.460Z"),
      emails: [
        {
          email: "Norval_Brekke@gmail.com",
          type: "WORK",
        },
      ],
      firstName: "Norval",
      id: "fc1fd4e2-631e-48c5-a47c-531830f936ac",
      lastName: "Brekke",
      metadata: [],
      name: "Norval Brekke",
      telephones: [
        {
          telephone: "(992) 368-1868",
          type: "FAX",
        },
        {
          telephone: "(238) 374-6019",
          type: "HOME",
        },
        {
          telephone: "(736) 235-7480",
          type: "MOBILE",
        },
      ],
      title: "Internal Creative Director",
      updatedAt: new Date("2023-12-30T04:11:33.852Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("contactUpdateUcContact failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateUcContactRequest](../../sdk/models/operations/updateuccontactrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.UcContact](../../sdk/models/shared/uccontact.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |