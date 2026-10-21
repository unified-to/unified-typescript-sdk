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

Create a contact

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
      id: "60167fe4-b465-4319-8377-feee9193a7e8",
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
          id: "994576d5-353f-4e0a-9341-d9fb68715c1f",
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
      updatedAt: new Date("2023-12-19T21:06:36.472Z"),
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
      id: "60167fe4-b465-4319-8377-feee9193a7e8",
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
          id: "994576d5-353f-4e0a-9341-d9fb68715c1f",
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
      updatedAt: new Date("2023-12-19T21:06:36.472Z"),
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

Create a contact

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
      id: "e9aacd0c-5f0f-4178-bd04-2bf9a4ce7543",
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
          id: "b89e632c-44b4-4448-b159-bc4da8e09da3",
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
      updatedAt: new Date("2021-02-24T05:07:22.801Z"),
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
      id: "e9aacd0c-5f0f-4178-bd04-2bf9a4ce7543",
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
          id: "b89e632c-44b4-4448-b159-bc4da8e09da3",
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
      updatedAt: new Date("2021-02-24T05:07:22.801Z"),
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

Create a contact

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
      id: "933d0263-b43e-4d6b-ab96-6d6f73087e0e",
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
      updatedAt: new Date("2023-12-08T09:26:25.674Z"),
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
      id: "933d0263-b43e-4d6b-ab96-6d6f73087e0e",
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
      updatedAt: new Date("2023-12-08T09:26:25.674Z"),
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

Retrieve a contact

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

Retrieve a contact

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

Retrieve a contact

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

List all contacts

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

List all contacts

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

List all contacts

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

Update a contact

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
      id: "79da20bd-30fe-45ec-945d-aab5f0152839",
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
          id: "3969c650-dd65-4fc3-aabd-b88621b54cb8",
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
      updatedAt: new Date("2023-12-19T21:06:36.506Z"),
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
      id: "79da20bd-30fe-45ec-945d-aab5f0152839",
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
          id: "3969c650-dd65-4fc3-aabd-b88621b54cb8",
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
      updatedAt: new Date("2023-12-19T21:06:36.506Z"),
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

Update a contact

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
      id: "5de3b057-57f5-4e82-9d3d-6431bc8abd5b",
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
          id: "75077228-f8f0-43fb-8419-fb11ee24516e",
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
      updatedAt: new Date("2021-02-24T05:07:22.802Z"),
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
      id: "5de3b057-57f5-4e82-9d3d-6431bc8abd5b",
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
          id: "75077228-f8f0-43fb-8419-fb11ee24516e",
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
      updatedAt: new Date("2021-02-24T05:07:22.802Z"),
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

Update a contact

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
      id: "0bfd88e5-b1db-4297-9275-fc5bc8338163",
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
      updatedAt: new Date("2023-12-08T09:26:25.688Z"),
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
      id: "0bfd88e5-b1db-4297-9275-fc5bc8338163",
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
      updatedAt: new Date("2023-12-08T09:26:25.688Z"),
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

Remove a contact

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

Remove a contact

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

Remove a contact

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

Update a contact

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
      id: "79da20bd-30fe-45ec-945d-aab5f0152839",
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
          id: "3969c650-dd65-4fc3-aabd-b88621b54cb8",
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
      updatedAt: new Date("2023-12-19T21:06:36.506Z"),
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
      id: "79da20bd-30fe-45ec-945d-aab5f0152839",
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
          id: "3969c650-dd65-4fc3-aabd-b88621b54cb8",
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
      updatedAt: new Date("2023-12-19T21:06:36.506Z"),
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

Update a contact

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
      id: "5de3b057-57f5-4e82-9d3d-6431bc8abd5b",
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
          id: "75077228-f8f0-43fb-8419-fb11ee24516e",
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
      updatedAt: new Date("2021-02-24T05:07:22.802Z"),
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
      id: "5de3b057-57f5-4e82-9d3d-6431bc8abd5b",
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
          id: "75077228-f8f0-43fb-8419-fb11ee24516e",
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
      updatedAt: new Date("2021-02-24T05:07:22.802Z"),
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

Update a contact

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
      id: "0bfd88e5-b1db-4297-9275-fc5bc8338163",
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
      updatedAt: new Date("2023-12-08T09:26:25.688Z"),
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
      id: "0bfd88e5-b1db-4297-9275-fc5bc8338163",
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
      updatedAt: new Date("2023-12-08T09:26:25.688Z"),
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