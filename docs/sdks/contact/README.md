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
      associatedContacts: [
        {
          id: "849cd11b-c680-45ef-8e37-e9a24def34b8",
          name: "Delores Reynolds",
        },
        {
          id: "b7ba795b-96e2-4c00-b11d-7ad43dd15877",
          name: "Delores Reynolds",
        },
      ],
      billingAddress: {
        address1: "2633 Stoney Lane",
        address2: "Suite 176",
        city: "Ladariusboro",
        countryCode: "US",
        postalCode: "70131-2908",
        region: "Illinois",
        regionCode: "NV",
      },
      companyName: "Marquardt Inc",
      createdAt: new Date("2021-08-15T14:56:50.258Z"),
      currency: "ISK",
      emails: [
        {
          email: "Delores.Reynolds10@hotmail.com",
          type: "HOME",
        },
      ],
      firstName: "Delores",
      id: "d501ead1-d963-4360-9d14-5fc86506b5d5",
      identification: "amicitia",
      isActive: true,
      isCustomer: true,
      lastName: "Reynolds",
      name: "Delores Reynolds",
      paymentMethods: [
        {
          default: true,
          id: "38ac4078-e7eb-4d4a-938e-3a6293a46e62",
          name: "Visa 1234",
          type: "CARD",
        },
      ],
      portalUrl: "https://scented-t-shirt.info/",
      shippingAddress: {
        address1: "786 Renner Stream",
        address2: "Apt. 555",
        city: "Roanoke",
        countryCode: "US",
        postalCode: "80686-7556",
        region: "Vermont",
        regionCode: "NE",
      },
      taxExemption: "RESALE",
      taxNumber: "amplexus",
      telephones: [
        {
          telephone: "(427) 701-7160",
          type: "HOME",
        },
        {
          telephone: "(540) 913-9171",
          type: "FAX",
        },
      ],
      updatedAt: new Date("2023-12-04T22:28:17.517Z"),
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
      associatedContacts: [
        {
          id: "849cd11b-c680-45ef-8e37-e9a24def34b8",
          name: "Delores Reynolds",
        },
        {
          id: "b7ba795b-96e2-4c00-b11d-7ad43dd15877",
          name: "Delores Reynolds",
        },
      ],
      billingAddress: {
        address1: "2633 Stoney Lane",
        address2: "Suite 176",
        city: "Ladariusboro",
        countryCode: "US",
        postalCode: "70131-2908",
        region: "Illinois",
        regionCode: "NV",
      },
      companyName: "Marquardt Inc",
      createdAt: new Date("2021-08-15T14:56:50.258Z"),
      currency: "ISK",
      emails: [
        {
          email: "Delores.Reynolds10@hotmail.com",
          type: "HOME",
        },
      ],
      firstName: "Delores",
      id: "d501ead1-d963-4360-9d14-5fc86506b5d5",
      identification: "amicitia",
      isActive: true,
      isCustomer: true,
      lastName: "Reynolds",
      name: "Delores Reynolds",
      paymentMethods: [
        {
          default: true,
          id: "38ac4078-e7eb-4d4a-938e-3a6293a46e62",
          name: "Visa 1234",
          type: "CARD",
        },
      ],
      portalUrl: "https://scented-t-shirt.info/",
      shippingAddress: {
        address1: "786 Renner Stream",
        address2: "Apt. 555",
        city: "Roanoke",
        countryCode: "US",
        postalCode: "80686-7556",
        region: "Vermont",
        regionCode: "NE",
      },
      taxExemption: "RESALE",
      taxNumber: "amplexus",
      telephones: [
        {
          telephone: "(427) 701-7160",
          type: "HOME",
        },
        {
          telephone: "(540) 913-9171",
          type: "FAX",
        },
      ],
      updatedAt: new Date("2023-12-04T22:28:17.517Z"),
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
        address1: "518 Brannon Burg",
        city: "East Helenebury",
        countryCode: "US",
        postalCode: "92622-2406",
        region: "Vermont",
        regionCode: "AZ",
      },
      company: "Lowe - Jakubowski",
      createdAt: new Date("2021-01-02T00:41:38.885Z"),
      department: "systematic",
      emails: [
        {
          email: "Mohammad.Bartell45@hotmail.com",
          type: "HOME",
        },
        {
          email: "Mohammad.Bartell90@hotmail.com",
          type: "HOME",
        },
        {
          email: "Mohammad_Bartell@hotmail.com",
          type: "WORK",
        },
      ],
      firstName: "Mohammad",
      id: "4b00e4e9-fd2c-4c85-904a-2f9fbb538aab",
      imageUrl: "https://picsum.photos/seed/zmbPeg/2905/378",
      lastName: "Bartell",
      linkUrls: [
        "https://limited-parade.info",
        "https://faint-papa.com/",
        "https://windy-accountability.name",
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "f5133e22-9032-4da2-b390-6d9b7c942b49",
          namespace: "custom",
          slug: "custom_property",
          value: "autem",
        },
      ],
      name: "Mohammad Bartell",
      telephones: [
        {
          telephone: "(975) 986-1658",
          type: "WORK",
        },
        {
          telephone: "(489) 332-3509",
          type: "HOME",
        },
        {
          telephone: "(205) 880-8886",
          type: "HOME",
        },
      ],
      title: "National Tactics Analyst",
      updatedAt: new Date("2021-02-23T09:13:10.758Z"),
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
        address1: "518 Brannon Burg",
        city: "East Helenebury",
        countryCode: "US",
        postalCode: "92622-2406",
        region: "Vermont",
        regionCode: "AZ",
      },
      company: "Lowe - Jakubowski",
      createdAt: new Date("2021-01-02T00:41:38.885Z"),
      department: "systematic",
      emails: [
        {
          email: "Mohammad.Bartell45@hotmail.com",
          type: "HOME",
        },
        {
          email: "Mohammad.Bartell90@hotmail.com",
          type: "HOME",
        },
        {
          email: "Mohammad_Bartell@hotmail.com",
          type: "WORK",
        },
      ],
      firstName: "Mohammad",
      id: "4b00e4e9-fd2c-4c85-904a-2f9fbb538aab",
      imageUrl: "https://picsum.photos/seed/zmbPeg/2905/378",
      lastName: "Bartell",
      linkUrls: [
        "https://limited-parade.info",
        "https://faint-papa.com/",
        "https://windy-accountability.name",
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "f5133e22-9032-4da2-b390-6d9b7c942b49",
          namespace: "custom",
          slug: "custom_property",
          value: "autem",
        },
      ],
      name: "Mohammad Bartell",
      telephones: [
        {
          telephone: "(975) 986-1658",
          type: "WORK",
        },
        {
          telephone: "(489) 332-3509",
          type: "HOME",
        },
        {
          telephone: "(205) 880-8886",
          type: "HOME",
        },
      ],
      title: "National Tactics Analyst",
      updatedAt: new Date("2021-02-23T09:13:10.758Z"),
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
      id: "39e5f225-c2fe-448f-9931-c96c7bd540e7",
      lastName: "Rogahn",
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
      updatedAt: new Date("2023-11-18T22:30:46.346Z"),
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
      id: "39e5f225-c2fe-448f-9931-c96c7bd540e7",
      lastName: "Rogahn",
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
      updatedAt: new Date("2023-11-18T22:30:46.346Z"),
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
      associatedContacts: [
        {
          id: "5d12d0f4-d6c4-41e4-b66f-1f01b7202257",
          name: "Delores Reynolds",
        },
        {
          id: "866874f1-a317-404b-9ee2-18708e6d0dd7",
          name: "Delores Reynolds",
        },
      ],
      billingAddress: {
        address1: "2633 Stoney Lane",
        address2: "Suite 176",
        city: "Ladariusboro",
        countryCode: "US",
        postalCode: "70131-2908",
        region: "Illinois",
        regionCode: "NV",
      },
      companyName: "Marquardt Inc",
      createdAt: new Date("2021-08-15T14:56:50.258Z"),
      currency: "ISK",
      emails: [
        {
          email: "Delores.Reynolds10@hotmail.com",
          type: "HOME",
        },
      ],
      firstName: "Delores",
      id: "568c731f-d6db-4131-8722-72c16c80c495",
      identification: "amicitia",
      isActive: true,
      isCustomer: true,
      lastName: "Reynolds",
      name: "Delores Reynolds",
      paymentMethods: [
        {
          default: true,
          id: "f7dccf3b-a03d-4347-a80e-3a3ce580b82d",
          name: "Visa 1234",
          type: "CARD",
        },
      ],
      portalUrl: "https://scented-t-shirt.info/",
      shippingAddress: {
        address1: "786 Renner Stream",
        address2: "Apt. 555",
        city: "Roanoke",
        countryCode: "US",
        postalCode: "80686-7556",
        region: "Vermont",
        regionCode: "NE",
      },
      taxExemption: "RESALE",
      taxNumber: "amplexus",
      telephones: [
        {
          telephone: "(427) 701-7160",
          type: "HOME",
        },
        {
          telephone: "(540) 913-9171",
          type: "FAX",
        },
      ],
      updatedAt: new Date("2023-12-04T22:28:17.531Z"),
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
      associatedContacts: [
        {
          id: "5d12d0f4-d6c4-41e4-b66f-1f01b7202257",
          name: "Delores Reynolds",
        },
        {
          id: "866874f1-a317-404b-9ee2-18708e6d0dd7",
          name: "Delores Reynolds",
        },
      ],
      billingAddress: {
        address1: "2633 Stoney Lane",
        address2: "Suite 176",
        city: "Ladariusboro",
        countryCode: "US",
        postalCode: "70131-2908",
        region: "Illinois",
        regionCode: "NV",
      },
      companyName: "Marquardt Inc",
      createdAt: new Date("2021-08-15T14:56:50.258Z"),
      currency: "ISK",
      emails: [
        {
          email: "Delores.Reynolds10@hotmail.com",
          type: "HOME",
        },
      ],
      firstName: "Delores",
      id: "568c731f-d6db-4131-8722-72c16c80c495",
      identification: "amicitia",
      isActive: true,
      isCustomer: true,
      lastName: "Reynolds",
      name: "Delores Reynolds",
      paymentMethods: [
        {
          default: true,
          id: "f7dccf3b-a03d-4347-a80e-3a3ce580b82d",
          name: "Visa 1234",
          type: "CARD",
        },
      ],
      portalUrl: "https://scented-t-shirt.info/",
      shippingAddress: {
        address1: "786 Renner Stream",
        address2: "Apt. 555",
        city: "Roanoke",
        countryCode: "US",
        postalCode: "80686-7556",
        region: "Vermont",
        regionCode: "NE",
      },
      taxExemption: "RESALE",
      taxNumber: "amplexus",
      telephones: [
        {
          telephone: "(427) 701-7160",
          type: "HOME",
        },
        {
          telephone: "(540) 913-9171",
          type: "FAX",
        },
      ],
      updatedAt: new Date("2023-12-04T22:28:17.531Z"),
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
        address1: "518 Brannon Burg",
        city: "East Helenebury",
        countryCode: "US",
        postalCode: "92622-2406",
        region: "Vermont",
        regionCode: "AZ",
      },
      company: "Lowe - Jakubowski",
      createdAt: new Date("2021-01-02T00:41:38.885Z"),
      department: "systematic",
      emails: [
        {
          email: "Mohammad.Bartell45@hotmail.com",
          type: "HOME",
        },
        {
          email: "Mohammad.Bartell90@hotmail.com",
          type: "HOME",
        },
        {
          email: "Mohammad_Bartell@hotmail.com",
          type: "WORK",
        },
      ],
      firstName: "Mohammad",
      id: "926522c8-4fea-4b31-870c-dbb458b14cb0",
      imageUrl: "https://picsum.photos/seed/zmbPeg/2905/378",
      lastName: "Bartell",
      linkUrls: [
        "https://limited-parade.info",
        "https://faint-papa.com/",
        "https://windy-accountability.name",
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "24067b18-8e42-4ed3-bb17-00f11628302f",
          namespace: "custom",
          slug: "custom_property",
          value: "autem",
        },
      ],
      name: "Mohammad Bartell",
      telephones: [
        {
          telephone: "(975) 986-1658",
          type: "WORK",
        },
        {
          telephone: "(489) 332-3509",
          type: "HOME",
        },
        {
          telephone: "(205) 880-8886",
          type: "HOME",
        },
      ],
      title: "National Tactics Analyst",
      updatedAt: new Date("2021-02-23T09:13:10.759Z"),
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
        address1: "518 Brannon Burg",
        city: "East Helenebury",
        countryCode: "US",
        postalCode: "92622-2406",
        region: "Vermont",
        regionCode: "AZ",
      },
      company: "Lowe - Jakubowski",
      createdAt: new Date("2021-01-02T00:41:38.885Z"),
      department: "systematic",
      emails: [
        {
          email: "Mohammad.Bartell45@hotmail.com",
          type: "HOME",
        },
        {
          email: "Mohammad.Bartell90@hotmail.com",
          type: "HOME",
        },
        {
          email: "Mohammad_Bartell@hotmail.com",
          type: "WORK",
        },
      ],
      firstName: "Mohammad",
      id: "926522c8-4fea-4b31-870c-dbb458b14cb0",
      imageUrl: "https://picsum.photos/seed/zmbPeg/2905/378",
      lastName: "Bartell",
      linkUrls: [
        "https://limited-parade.info",
        "https://faint-papa.com/",
        "https://windy-accountability.name",
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "24067b18-8e42-4ed3-bb17-00f11628302f",
          namespace: "custom",
          slug: "custom_property",
          value: "autem",
        },
      ],
      name: "Mohammad Bartell",
      telephones: [
        {
          telephone: "(975) 986-1658",
          type: "WORK",
        },
        {
          telephone: "(489) 332-3509",
          type: "HOME",
        },
        {
          telephone: "(205) 880-8886",
          type: "HOME",
        },
      ],
      title: "National Tactics Analyst",
      updatedAt: new Date("2021-02-23T09:13:10.759Z"),
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
      id: "356575db-851d-45e5-bbd6-3069bcf46bdb",
      lastName: "Rogahn",
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
      updatedAt: new Date("2023-11-18T22:30:46.355Z"),
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
      id: "356575db-851d-45e5-bbd6-3069bcf46bdb",
      lastName: "Rogahn",
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
      updatedAt: new Date("2023-11-18T22:30:46.355Z"),
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
      associatedContacts: [
        {
          id: "5d12d0f4-d6c4-41e4-b66f-1f01b7202257",
          name: "Delores Reynolds",
        },
        {
          id: "866874f1-a317-404b-9ee2-18708e6d0dd7",
          name: "Delores Reynolds",
        },
      ],
      billingAddress: {
        address1: "2633 Stoney Lane",
        address2: "Suite 176",
        city: "Ladariusboro",
        countryCode: "US",
        postalCode: "70131-2908",
        region: "Illinois",
        regionCode: "NV",
      },
      companyName: "Marquardt Inc",
      createdAt: new Date("2021-08-15T14:56:50.258Z"),
      currency: "ISK",
      emails: [
        {
          email: "Delores.Reynolds10@hotmail.com",
          type: "HOME",
        },
      ],
      firstName: "Delores",
      id: "568c731f-d6db-4131-8722-72c16c80c495",
      identification: "amicitia",
      isActive: true,
      isCustomer: true,
      lastName: "Reynolds",
      name: "Delores Reynolds",
      paymentMethods: [
        {
          default: true,
          id: "f7dccf3b-a03d-4347-a80e-3a3ce580b82d",
          name: "Visa 1234",
          type: "CARD",
        },
      ],
      portalUrl: "https://scented-t-shirt.info/",
      shippingAddress: {
        address1: "786 Renner Stream",
        address2: "Apt. 555",
        city: "Roanoke",
        countryCode: "US",
        postalCode: "80686-7556",
        region: "Vermont",
        regionCode: "NE",
      },
      taxExemption: "RESALE",
      taxNumber: "amplexus",
      telephones: [
        {
          telephone: "(427) 701-7160",
          type: "HOME",
        },
        {
          telephone: "(540) 913-9171",
          type: "FAX",
        },
      ],
      updatedAt: new Date("2023-12-04T22:28:17.531Z"),
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
      associatedContacts: [
        {
          id: "5d12d0f4-d6c4-41e4-b66f-1f01b7202257",
          name: "Delores Reynolds",
        },
        {
          id: "866874f1-a317-404b-9ee2-18708e6d0dd7",
          name: "Delores Reynolds",
        },
      ],
      billingAddress: {
        address1: "2633 Stoney Lane",
        address2: "Suite 176",
        city: "Ladariusboro",
        countryCode: "US",
        postalCode: "70131-2908",
        region: "Illinois",
        regionCode: "NV",
      },
      companyName: "Marquardt Inc",
      createdAt: new Date("2021-08-15T14:56:50.258Z"),
      currency: "ISK",
      emails: [
        {
          email: "Delores.Reynolds10@hotmail.com",
          type: "HOME",
        },
      ],
      firstName: "Delores",
      id: "568c731f-d6db-4131-8722-72c16c80c495",
      identification: "amicitia",
      isActive: true,
      isCustomer: true,
      lastName: "Reynolds",
      name: "Delores Reynolds",
      paymentMethods: [
        {
          default: true,
          id: "f7dccf3b-a03d-4347-a80e-3a3ce580b82d",
          name: "Visa 1234",
          type: "CARD",
        },
      ],
      portalUrl: "https://scented-t-shirt.info/",
      shippingAddress: {
        address1: "786 Renner Stream",
        address2: "Apt. 555",
        city: "Roanoke",
        countryCode: "US",
        postalCode: "80686-7556",
        region: "Vermont",
        regionCode: "NE",
      },
      taxExemption: "RESALE",
      taxNumber: "amplexus",
      telephones: [
        {
          telephone: "(427) 701-7160",
          type: "HOME",
        },
        {
          telephone: "(540) 913-9171",
          type: "FAX",
        },
      ],
      updatedAt: new Date("2023-12-04T22:28:17.531Z"),
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
        address1: "518 Brannon Burg",
        city: "East Helenebury",
        countryCode: "US",
        postalCode: "92622-2406",
        region: "Vermont",
        regionCode: "AZ",
      },
      company: "Lowe - Jakubowski",
      createdAt: new Date("2021-01-02T00:41:38.885Z"),
      department: "systematic",
      emails: [
        {
          email: "Mohammad.Bartell45@hotmail.com",
          type: "HOME",
        },
        {
          email: "Mohammad.Bartell90@hotmail.com",
          type: "HOME",
        },
        {
          email: "Mohammad_Bartell@hotmail.com",
          type: "WORK",
        },
      ],
      firstName: "Mohammad",
      id: "926522c8-4fea-4b31-870c-dbb458b14cb0",
      imageUrl: "https://picsum.photos/seed/zmbPeg/2905/378",
      lastName: "Bartell",
      linkUrls: [
        "https://limited-parade.info",
        "https://faint-papa.com/",
        "https://windy-accountability.name",
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "24067b18-8e42-4ed3-bb17-00f11628302f",
          namespace: "custom",
          slug: "custom_property",
          value: "autem",
        },
      ],
      name: "Mohammad Bartell",
      telephones: [
        {
          telephone: "(975) 986-1658",
          type: "WORK",
        },
        {
          telephone: "(489) 332-3509",
          type: "HOME",
        },
        {
          telephone: "(205) 880-8886",
          type: "HOME",
        },
      ],
      title: "National Tactics Analyst",
      updatedAt: new Date("2021-02-23T09:13:10.759Z"),
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
        address1: "518 Brannon Burg",
        city: "East Helenebury",
        countryCode: "US",
        postalCode: "92622-2406",
        region: "Vermont",
        regionCode: "AZ",
      },
      company: "Lowe - Jakubowski",
      createdAt: new Date("2021-01-02T00:41:38.885Z"),
      department: "systematic",
      emails: [
        {
          email: "Mohammad.Bartell45@hotmail.com",
          type: "HOME",
        },
        {
          email: "Mohammad.Bartell90@hotmail.com",
          type: "HOME",
        },
        {
          email: "Mohammad_Bartell@hotmail.com",
          type: "WORK",
        },
      ],
      firstName: "Mohammad",
      id: "926522c8-4fea-4b31-870c-dbb458b14cb0",
      imageUrl: "https://picsum.photos/seed/zmbPeg/2905/378",
      lastName: "Bartell",
      linkUrls: [
        "https://limited-parade.info",
        "https://faint-papa.com/",
        "https://windy-accountability.name",
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "24067b18-8e42-4ed3-bb17-00f11628302f",
          namespace: "custom",
          slug: "custom_property",
          value: "autem",
        },
      ],
      name: "Mohammad Bartell",
      telephones: [
        {
          telephone: "(975) 986-1658",
          type: "WORK",
        },
        {
          telephone: "(489) 332-3509",
          type: "HOME",
        },
        {
          telephone: "(205) 880-8886",
          type: "HOME",
        },
      ],
      title: "National Tactics Analyst",
      updatedAt: new Date("2021-02-23T09:13:10.759Z"),
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
      id: "356575db-851d-45e5-bbd6-3069bcf46bdb",
      lastName: "Rogahn",
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
      updatedAt: new Date("2023-11-18T22:30:46.355Z"),
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
      id: "356575db-851d-45e5-bbd6-3069bcf46bdb",
      lastName: "Rogahn",
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
      updatedAt: new Date("2023-11-18T22:30:46.355Z"),
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