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
        address1: "4091 Tromp Coves",
        city: "Lake Emmybury",
        countryCode: "US",
        postalCode: "50764-5226",
        region: "Washington",
        regionCode: "CA",
      },
      companyName: "Kertzmann Group",
      createdAt: new Date("2021-08-15T14:56:50.258Z"),
      currency: "AUD",
      emails: [
        {
          email: "delores.reynolds@kertzmanngroup.com",
          type: "WORK",
        },
        {
          email: "accounts@kertzmanngroup.com",
          type: "OTHER",
        },
      ],
      firstName: "Delores",
      id: "d44aa98d-12d8-4cdb-9273-2f66478cfc32",
      identification: "531850872",
      isActive: true,
      isCustomer: true,
      lastName: "Reynolds",
      metadata: [],
      name: "Kertzmann Group",
      notes: "Et videlicet pauci.",
      paymentMethods: [
        {
          default: true,
          id: "3eee6a01-2895-448d-ace5-96a53b457f29",
          name: "Visa 7844",
          type: "CARD",
        },
      ],
      portalUrl: "https://kertzmanngroup.com/billing",
      shippingAddress: {
        address1: "23129 Rebekah Mews",
        city: "Mortimerhaven",
        countryCode: "US",
        postalCode: "55878-6806",
        region: "Florida",
        regionCode: "OK",
      },
      taxExemption: "FOREIGN",
      taxNumber: "867556410",
      telephones: [
        {
          telephone: "(432) 760-1716",
          type: "FAX",
        },
      ],
      updatedAt: new Date("2023-12-21T05:39:38.829Z"),
      website: "https://kertzmanngroup.com",
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
        address1: "4091 Tromp Coves",
        city: "Lake Emmybury",
        countryCode: "US",
        postalCode: "50764-5226",
        region: "Washington",
        regionCode: "CA",
      },
      companyName: "Kertzmann Group",
      createdAt: new Date("2021-08-15T14:56:50.258Z"),
      currency: "AUD",
      emails: [
        {
          email: "delores.reynolds@kertzmanngroup.com",
          type: "WORK",
        },
        {
          email: "accounts@kertzmanngroup.com",
          type: "OTHER",
        },
      ],
      firstName: "Delores",
      id: "d44aa98d-12d8-4cdb-9273-2f66478cfc32",
      identification: "531850872",
      isActive: true,
      isCustomer: true,
      lastName: "Reynolds",
      metadata: [],
      name: "Kertzmann Group",
      notes: "Et videlicet pauci.",
      paymentMethods: [
        {
          default: true,
          id: "3eee6a01-2895-448d-ace5-96a53b457f29",
          name: "Visa 7844",
          type: "CARD",
        },
      ],
      portalUrl: "https://kertzmanngroup.com/billing",
      shippingAddress: {
        address1: "23129 Rebekah Mews",
        city: "Mortimerhaven",
        countryCode: "US",
        postalCode: "55878-6806",
        region: "Florida",
        regionCode: "OK",
      },
      taxExemption: "FOREIGN",
      taxNumber: "867556410",
      telephones: [
        {
          telephone: "(432) 760-1716",
          type: "FAX",
        },
      ],
      updatedAt: new Date("2023-12-21T05:39:38.829Z"),
      website: "https://kertzmanngroup.com",
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
        address1: "65838 College Avenue",
        address2: "Apt. 335",
        city: "Fort Alexandratown",
        countryCode: "US",
        postalCode: "80888-6094",
        region: "Montana",
        regionCode: "NM",
      },
      createdAt: new Date("2021-01-02T00:41:38.885Z"),
      department: "Beauty",
      emails: [
        {
          email: "mohammad.bartell@hotmail.com",
          type: "HOME",
        },
      ],
      firstName: "Mohammad",
      id: "b91abad6-d6da-45e2-bfec-a3ff1049f8ef",
      imageUrl: "https://avatars.githubusercontent.com/u/26803724",
      lastName: "Bartell",
      linkUrls: [
        "https://www.linkedin.com/in/mohammad-bartell",
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "b25dbd60-e149-4951-a0c7-c1631533e6ef",
          namespace: "custom",
          slug: "custom_property",
          value: "antiquus",
        },
      ],
      name: "Mohammad Bartell",
      telephones: [
        {
          telephone: "(254) 404-3529",
          type: "OTHER",
        },
        {
          telephone: "(469) 989-7588",
          type: "WORK",
        },
      ],
      title: "National Tactics Analyst",
      updatedAt: new Date("2021-02-24T06:55:46.065Z"),
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
        address1: "65838 College Avenue",
        address2: "Apt. 335",
        city: "Fort Alexandratown",
        countryCode: "US",
        postalCode: "80888-6094",
        region: "Montana",
        regionCode: "NM",
      },
      createdAt: new Date("2021-01-02T00:41:38.885Z"),
      department: "Beauty",
      emails: [
        {
          email: "mohammad.bartell@hotmail.com",
          type: "HOME",
        },
      ],
      firstName: "Mohammad",
      id: "b91abad6-d6da-45e2-bfec-a3ff1049f8ef",
      imageUrl: "https://avatars.githubusercontent.com/u/26803724",
      lastName: "Bartell",
      linkUrls: [
        "https://www.linkedin.com/in/mohammad-bartell",
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "b25dbd60-e149-4951-a0c7-c1631533e6ef",
          namespace: "custom",
          slug: "custom_property",
          value: "antiquus",
        },
      ],
      name: "Mohammad Bartell",
      telephones: [
        {
          telephone: "(254) 404-3529",
          type: "OTHER",
        },
        {
          telephone: "(469) 989-7588",
          type: "WORK",
        },
      ],
      title: "National Tactics Analyst",
      updatedAt: new Date("2021-02-24T06:55:46.065Z"),
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
      company: "Tillman Group",
      createdAt: new Date("2019-10-28T11:06:56.460Z"),
      emails: [
        {
          email: "Luther_Rogahn32@yahoo.com",
          type: "WORK",
        },
      ],
      firstName: "Luther",
      id: "1e7db9e1-f73e-4092-92df-b9d5a32d372e",
      lastName: "Rogahn",
      metadata: [],
      name: "Luther Rogahn",
      telephones: [
        {
          telephone: "(809) 992-1681",
          type: "FAX",
        },
        {
          telephone: "(868) 238-2746",
          type: "HOME",
        },
        {
          telephone: "(219) 736-0357",
          type: "MOBILE",
        },
      ],
      title: "Chief Optimization Executive",
      updatedAt: new Date("2023-12-10T03:49:10.675Z"),
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
      company: "Tillman Group",
      createdAt: new Date("2019-10-28T11:06:56.460Z"),
      emails: [
        {
          email: "Luther_Rogahn32@yahoo.com",
          type: "WORK",
        },
      ],
      firstName: "Luther",
      id: "1e7db9e1-f73e-4092-92df-b9d5a32d372e",
      lastName: "Rogahn",
      metadata: [],
      name: "Luther Rogahn",
      telephones: [
        {
          telephone: "(809) 992-1681",
          type: "FAX",
        },
        {
          telephone: "(868) 238-2746",
          type: "HOME",
        },
        {
          telephone: "(219) 736-0357",
          type: "MOBILE",
        },
      ],
      title: "Chief Optimization Executive",
      updatedAt: new Date("2023-12-10T03:49:10.675Z"),
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
        address1: "4091 Tromp Coves",
        city: "Lake Emmybury",
        countryCode: "US",
        postalCode: "50764-5226",
        region: "Washington",
        regionCode: "CA",
      },
      companyName: "Kertzmann Group",
      createdAt: new Date("2021-08-15T14:56:50.258Z"),
      currency: "AUD",
      emails: [
        {
          email: "delores.reynolds@kertzmanngroup.com",
          type: "WORK",
        },
        {
          email: "accounts@kertzmanngroup.com",
          type: "OTHER",
        },
      ],
      firstName: "Delores",
      id: "73725c96-63f0-40a2-a7bc-6e98a6841283",
      identification: "531850872",
      isActive: true,
      isCustomer: true,
      lastName: "Reynolds",
      metadata: [],
      name: "Kertzmann Group",
      notes: "Et videlicet pauci.",
      paymentMethods: [
        {
          default: true,
          id: "b250daf1-13f5-41c2-99a7-02e64be38840",
          name: "Visa 7844",
          type: "CARD",
        },
      ],
      portalUrl: "https://kertzmanngroup.com/billing",
      shippingAddress: {
        address1: "23129 Rebekah Mews",
        city: "Mortimerhaven",
        countryCode: "US",
        postalCode: "55878-6806",
        region: "Florida",
        regionCode: "OK",
      },
      taxExemption: "FOREIGN",
      taxNumber: "867556410",
      telephones: [
        {
          telephone: "(432) 760-1716",
          type: "FAX",
        },
      ],
      updatedAt: new Date("2023-12-21T05:39:38.859Z"),
      website: "https://kertzmanngroup.com",
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
        address1: "4091 Tromp Coves",
        city: "Lake Emmybury",
        countryCode: "US",
        postalCode: "50764-5226",
        region: "Washington",
        regionCode: "CA",
      },
      companyName: "Kertzmann Group",
      createdAt: new Date("2021-08-15T14:56:50.258Z"),
      currency: "AUD",
      emails: [
        {
          email: "delores.reynolds@kertzmanngroup.com",
          type: "WORK",
        },
        {
          email: "accounts@kertzmanngroup.com",
          type: "OTHER",
        },
      ],
      firstName: "Delores",
      id: "73725c96-63f0-40a2-a7bc-6e98a6841283",
      identification: "531850872",
      isActive: true,
      isCustomer: true,
      lastName: "Reynolds",
      metadata: [],
      name: "Kertzmann Group",
      notes: "Et videlicet pauci.",
      paymentMethods: [
        {
          default: true,
          id: "b250daf1-13f5-41c2-99a7-02e64be38840",
          name: "Visa 7844",
          type: "CARD",
        },
      ],
      portalUrl: "https://kertzmanngroup.com/billing",
      shippingAddress: {
        address1: "23129 Rebekah Mews",
        city: "Mortimerhaven",
        countryCode: "US",
        postalCode: "55878-6806",
        region: "Florida",
        regionCode: "OK",
      },
      taxExemption: "FOREIGN",
      taxNumber: "867556410",
      telephones: [
        {
          telephone: "(432) 760-1716",
          type: "FAX",
        },
      ],
      updatedAt: new Date("2023-12-21T05:39:38.859Z"),
      website: "https://kertzmanngroup.com",
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
        address1: "65838 College Avenue",
        address2: "Apt. 335",
        city: "Fort Alexandratown",
        countryCode: "US",
        postalCode: "80888-6094",
        region: "Montana",
        regionCode: "NM",
      },
      createdAt: new Date("2021-01-02T00:41:38.885Z"),
      department: "Beauty",
      emails: [
        {
          email: "mohammad.bartell@hotmail.com",
          type: "HOME",
        },
      ],
      firstName: "Mohammad",
      id: "5898dd11-39eb-4b20-bac3-3924b242b451",
      imageUrl: "https://avatars.githubusercontent.com/u/26803724",
      lastName: "Bartell",
      linkUrls: [
        "https://www.linkedin.com/in/mohammad-bartell",
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "71a1ad44-3bc7-4db4-b403-75f6bedd8ad0",
          namespace: "custom",
          slug: "custom_property",
          value: "antiquus",
        },
      ],
      name: "Mohammad Bartell",
      telephones: [
        {
          telephone: "(254) 404-3529",
          type: "OTHER",
        },
        {
          telephone: "(469) 989-7588",
          type: "WORK",
        },
      ],
      title: "National Tactics Analyst",
      updatedAt: new Date("2021-02-24T06:55:46.066Z"),
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
        address1: "65838 College Avenue",
        address2: "Apt. 335",
        city: "Fort Alexandratown",
        countryCode: "US",
        postalCode: "80888-6094",
        region: "Montana",
        regionCode: "NM",
      },
      createdAt: new Date("2021-01-02T00:41:38.885Z"),
      department: "Beauty",
      emails: [
        {
          email: "mohammad.bartell@hotmail.com",
          type: "HOME",
        },
      ],
      firstName: "Mohammad",
      id: "5898dd11-39eb-4b20-bac3-3924b242b451",
      imageUrl: "https://avatars.githubusercontent.com/u/26803724",
      lastName: "Bartell",
      linkUrls: [
        "https://www.linkedin.com/in/mohammad-bartell",
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "71a1ad44-3bc7-4db4-b403-75f6bedd8ad0",
          namespace: "custom",
          slug: "custom_property",
          value: "antiquus",
        },
      ],
      name: "Mohammad Bartell",
      telephones: [
        {
          telephone: "(254) 404-3529",
          type: "OTHER",
        },
        {
          telephone: "(469) 989-7588",
          type: "WORK",
        },
      ],
      title: "National Tactics Analyst",
      updatedAt: new Date("2021-02-24T06:55:46.066Z"),
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
      company: "Tillman Group",
      createdAt: new Date("2019-10-28T11:06:56.460Z"),
      emails: [
        {
          email: "Luther_Rogahn32@yahoo.com",
          type: "WORK",
        },
      ],
      firstName: "Luther",
      id: "92b5b8b3-a8c7-4abb-b380-b8fcead795ff",
      lastName: "Rogahn",
      metadata: [],
      name: "Luther Rogahn",
      telephones: [
        {
          telephone: "(809) 992-1681",
          type: "FAX",
        },
        {
          telephone: "(868) 238-2746",
          type: "HOME",
        },
        {
          telephone: "(219) 736-0357",
          type: "MOBILE",
        },
      ],
      title: "Chief Optimization Executive",
      updatedAt: new Date("2023-12-10T03:49:10.690Z"),
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
      company: "Tillman Group",
      createdAt: new Date("2019-10-28T11:06:56.460Z"),
      emails: [
        {
          email: "Luther_Rogahn32@yahoo.com",
          type: "WORK",
        },
      ],
      firstName: "Luther",
      id: "92b5b8b3-a8c7-4abb-b380-b8fcead795ff",
      lastName: "Rogahn",
      metadata: [],
      name: "Luther Rogahn",
      telephones: [
        {
          telephone: "(809) 992-1681",
          type: "FAX",
        },
        {
          telephone: "(868) 238-2746",
          type: "HOME",
        },
        {
          telephone: "(219) 736-0357",
          type: "MOBILE",
        },
      ],
      title: "Chief Optimization Executive",
      updatedAt: new Date("2023-12-10T03:49:10.690Z"),
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
        address1: "4091 Tromp Coves",
        city: "Lake Emmybury",
        countryCode: "US",
        postalCode: "50764-5226",
        region: "Washington",
        regionCode: "CA",
      },
      companyName: "Kertzmann Group",
      createdAt: new Date("2021-08-15T14:56:50.258Z"),
      currency: "AUD",
      emails: [
        {
          email: "delores.reynolds@kertzmanngroup.com",
          type: "WORK",
        },
        {
          email: "accounts@kertzmanngroup.com",
          type: "OTHER",
        },
      ],
      firstName: "Delores",
      id: "73725c96-63f0-40a2-a7bc-6e98a6841283",
      identification: "531850872",
      isActive: true,
      isCustomer: true,
      lastName: "Reynolds",
      metadata: [],
      name: "Kertzmann Group",
      notes: "Et videlicet pauci.",
      paymentMethods: [
        {
          default: true,
          id: "b250daf1-13f5-41c2-99a7-02e64be38840",
          name: "Visa 7844",
          type: "CARD",
        },
      ],
      portalUrl: "https://kertzmanngroup.com/billing",
      shippingAddress: {
        address1: "23129 Rebekah Mews",
        city: "Mortimerhaven",
        countryCode: "US",
        postalCode: "55878-6806",
        region: "Florida",
        regionCode: "OK",
      },
      taxExemption: "FOREIGN",
      taxNumber: "867556410",
      telephones: [
        {
          telephone: "(432) 760-1716",
          type: "FAX",
        },
      ],
      updatedAt: new Date("2023-12-21T05:39:38.859Z"),
      website: "https://kertzmanngroup.com",
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
        address1: "4091 Tromp Coves",
        city: "Lake Emmybury",
        countryCode: "US",
        postalCode: "50764-5226",
        region: "Washington",
        regionCode: "CA",
      },
      companyName: "Kertzmann Group",
      createdAt: new Date("2021-08-15T14:56:50.258Z"),
      currency: "AUD",
      emails: [
        {
          email: "delores.reynolds@kertzmanngroup.com",
          type: "WORK",
        },
        {
          email: "accounts@kertzmanngroup.com",
          type: "OTHER",
        },
      ],
      firstName: "Delores",
      id: "73725c96-63f0-40a2-a7bc-6e98a6841283",
      identification: "531850872",
      isActive: true,
      isCustomer: true,
      lastName: "Reynolds",
      metadata: [],
      name: "Kertzmann Group",
      notes: "Et videlicet pauci.",
      paymentMethods: [
        {
          default: true,
          id: "b250daf1-13f5-41c2-99a7-02e64be38840",
          name: "Visa 7844",
          type: "CARD",
        },
      ],
      portalUrl: "https://kertzmanngroup.com/billing",
      shippingAddress: {
        address1: "23129 Rebekah Mews",
        city: "Mortimerhaven",
        countryCode: "US",
        postalCode: "55878-6806",
        region: "Florida",
        regionCode: "OK",
      },
      taxExemption: "FOREIGN",
      taxNumber: "867556410",
      telephones: [
        {
          telephone: "(432) 760-1716",
          type: "FAX",
        },
      ],
      updatedAt: new Date("2023-12-21T05:39:38.859Z"),
      website: "https://kertzmanngroup.com",
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
        address1: "65838 College Avenue",
        address2: "Apt. 335",
        city: "Fort Alexandratown",
        countryCode: "US",
        postalCode: "80888-6094",
        region: "Montana",
        regionCode: "NM",
      },
      createdAt: new Date("2021-01-02T00:41:38.885Z"),
      department: "Beauty",
      emails: [
        {
          email: "mohammad.bartell@hotmail.com",
          type: "HOME",
        },
      ],
      firstName: "Mohammad",
      id: "5898dd11-39eb-4b20-bac3-3924b242b451",
      imageUrl: "https://avatars.githubusercontent.com/u/26803724",
      lastName: "Bartell",
      linkUrls: [
        "https://www.linkedin.com/in/mohammad-bartell",
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "71a1ad44-3bc7-4db4-b403-75f6bedd8ad0",
          namespace: "custom",
          slug: "custom_property",
          value: "antiquus",
        },
      ],
      name: "Mohammad Bartell",
      telephones: [
        {
          telephone: "(254) 404-3529",
          type: "OTHER",
        },
        {
          telephone: "(469) 989-7588",
          type: "WORK",
        },
      ],
      title: "National Tactics Analyst",
      updatedAt: new Date("2021-02-24T06:55:46.066Z"),
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
        address1: "65838 College Avenue",
        address2: "Apt. 335",
        city: "Fort Alexandratown",
        countryCode: "US",
        postalCode: "80888-6094",
        region: "Montana",
        regionCode: "NM",
      },
      createdAt: new Date("2021-01-02T00:41:38.885Z"),
      department: "Beauty",
      emails: [
        {
          email: "mohammad.bartell@hotmail.com",
          type: "HOME",
        },
      ],
      firstName: "Mohammad",
      id: "5898dd11-39eb-4b20-bac3-3924b242b451",
      imageUrl: "https://avatars.githubusercontent.com/u/26803724",
      lastName: "Bartell",
      linkUrls: [
        "https://www.linkedin.com/in/mohammad-bartell",
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "71a1ad44-3bc7-4db4-b403-75f6bedd8ad0",
          namespace: "custom",
          slug: "custom_property",
          value: "antiquus",
        },
      ],
      name: "Mohammad Bartell",
      telephones: [
        {
          telephone: "(254) 404-3529",
          type: "OTHER",
        },
        {
          telephone: "(469) 989-7588",
          type: "WORK",
        },
      ],
      title: "National Tactics Analyst",
      updatedAt: new Date("2021-02-24T06:55:46.066Z"),
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
      company: "Tillman Group",
      createdAt: new Date("2019-10-28T11:06:56.460Z"),
      emails: [
        {
          email: "Luther_Rogahn32@yahoo.com",
          type: "WORK",
        },
      ],
      firstName: "Luther",
      id: "92b5b8b3-a8c7-4abb-b380-b8fcead795ff",
      lastName: "Rogahn",
      metadata: [],
      name: "Luther Rogahn",
      telephones: [
        {
          telephone: "(809) 992-1681",
          type: "FAX",
        },
        {
          telephone: "(868) 238-2746",
          type: "HOME",
        },
        {
          telephone: "(219) 736-0357",
          type: "MOBILE",
        },
      ],
      title: "Chief Optimization Executive",
      updatedAt: new Date("2023-12-10T03:49:10.690Z"),
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
      company: "Tillman Group",
      createdAt: new Date("2019-10-28T11:06:56.460Z"),
      emails: [
        {
          email: "Luther_Rogahn32@yahoo.com",
          type: "WORK",
        },
      ],
      firstName: "Luther",
      id: "92b5b8b3-a8c7-4abb-b380-b8fcead795ff",
      lastName: "Rogahn",
      metadata: [],
      name: "Luther Rogahn",
      telephones: [
        {
          telephone: "(809) 992-1681",
          type: "FAX",
        },
        {
          telephone: "(868) 238-2746",
          type: "HOME",
        },
        {
          telephone: "(219) 736-0357",
          type: "MOBILE",
        },
      ],
      title: "Chief Optimization Executive",
      updatedAt: new Date("2023-12-10T03:49:10.690Z"),
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