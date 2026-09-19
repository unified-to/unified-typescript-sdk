# Crm

## Overview

### Available Operations

* [createCrmCompany](#createcrmcompany) - Create a company
* [createCrmContact](#createcrmcontact) - Create a contact
* [createCrmDeal](#createcrmdeal) - Create a deal
* [createCrmEvent](#createcrmevent) - Create an event
* [createCrmLead](#createcrmlead) - Create a lead
* [createCrmPipeline](#createcrmpipeline) - Create a pipeline
* [getCrmCompany](#getcrmcompany) - Retrieve a company
* [getCrmContact](#getcrmcontact) - Retrieve a contact
* [getCrmDeal](#getcrmdeal) - Retrieve a deal
* [getCrmEvent](#getcrmevent) - Retrieve an event
* [getCrmLead](#getcrmlead) - Retrieve a lead
* [getCrmPipeline](#getcrmpipeline) - Retrieve a pipeline
* [listCrmCompanies](#listcrmcompanies) - List all companies
* [listCrmContacts](#listcrmcontacts) - List all contacts
* [listCrmDeals](#listcrmdeals) - List all deals
* [listCrmEvents](#listcrmevents) - List all events
* [listCrmLeads](#listcrmleads) - List all leads
* [listCrmPipelines](#listcrmpipelines) - List all pipelines
* [listCrmTaxonomies](#listcrmtaxonomies) - List all taxonomies
* [patchCrmCompany](#patchcrmcompany) - Update a company
* [patchCrmContact](#patchcrmcontact) - Update a contact
* [patchCrmDeal](#patchcrmdeal) - Update a deal
* [patchCrmEvent](#patchcrmevent) - Update an event
* [patchCrmLead](#patchcrmlead) - Update a lead
* [patchCrmPipeline](#patchcrmpipeline) - Update a pipeline
* [removeCrmCompany](#removecrmcompany) - Remove a company
* [removeCrmContact](#removecrmcontact) - Remove a contact
* [removeCrmDeal](#removecrmdeal) - Remove a deal
* [removeCrmEvent](#removecrmevent) - Remove an event
* [removeCrmLead](#removecrmlead) - Remove a lead
* [removeCrmPipeline](#removecrmpipeline) - Remove a pipeline
* [updateCrmCompany](#updatecrmcompany) - Update a company
* [updateCrmContact](#updatecrmcontact) - Update a contact
* [updateCrmDeal](#updatecrmdeal) - Update a deal
* [updateCrmEvent](#updatecrmevent) - Update an event
* [updateCrmLead](#updatecrmlead) - Update a lead
* [updateCrmPipeline](#updatecrmpipeline) - Update a pipeline

## createCrmCompany

Create a company

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createCrmCompany" method="post" path="/crm/{connection_id}/company" example="crm_company" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.crm.createCrmCompany({
    crmCompany: {
      address: {
        address1: "7261 Salisbury Road",
        address2: "Apt. 778",
        city: "Harrisburg",
        countryCode: "US",
        postalCode: "56293-3678",
        region: "Pennsylvania",
        regionCode: "ID",
      },
      createdAt: new Date("2020-05-11T18:26:32.925Z"),
      description: "Balbus crapula spiculum.",
      domains: [
        "fussy-nerve.info",
        "sturdy-lobster.org",
        "greedy-offset.name",
      ],
      emails: [
        {
          email: "Sandrine_Jacobi@hotmail.com",
          type: "WORK",
        },
        {
          email: "Sandrine_Jacobi@gmail.com",
          type: "WORK",
        },
        {
          email: "Sandrine.Jacobi@yahoo.com",
          type: "OTHER",
        },
      ],
      employees: 967,
      id: "f3c3753f-80d8-4b8a-8118-2be47436f392",
      industry: "Infrastructure",
      isActive: true,
      linkUrls: [
        "https://blue-license.org",
        "https://minor-formation.com",
        "https://ecstatic-hammock.com",
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "6a39ee7b-09a0-420c-a51c-6c4af729e321",
          namespace: "custom",
          slug: "custom_property",
          value: "esse",
        },
      ],
      name: "Goodwin and Sons",
      tags: [
        "quaerat",
        "valeo",
      ],
      telephones: [
        {
          telephone: "(432) 849-2690",
          type: "MOBILE",
        },
        {
          telephone: "(606) 871-2046",
          type: "OTHER",
        },
        {
          telephone: "(842) 258-9395",
          type: "MOBILE",
        },
      ],
      timezone: "Europe/San_Marino",
      updatedAt: new Date("2025-02-07T04:06:36.922Z"),
      websites: [
        "https://wise-possession.org",
      ],
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
import { companyCreateCrmCompany } from "@unified-api/typescript-sdk/funcs/companyCreateCrmCompany.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await companyCreateCrmCompany(unifiedTo, {
    crmCompany: {
      address: {
        address1: "7261 Salisbury Road",
        address2: "Apt. 778",
        city: "Harrisburg",
        countryCode: "US",
        postalCode: "56293-3678",
        region: "Pennsylvania",
        regionCode: "ID",
      },
      createdAt: new Date("2020-05-11T18:26:32.925Z"),
      description: "Balbus crapula spiculum.",
      domains: [
        "fussy-nerve.info",
        "sturdy-lobster.org",
        "greedy-offset.name",
      ],
      emails: [
        {
          email: "Sandrine_Jacobi@hotmail.com",
          type: "WORK",
        },
        {
          email: "Sandrine_Jacobi@gmail.com",
          type: "WORK",
        },
        {
          email: "Sandrine.Jacobi@yahoo.com",
          type: "OTHER",
        },
      ],
      employees: 967,
      id: "f3c3753f-80d8-4b8a-8118-2be47436f392",
      industry: "Infrastructure",
      isActive: true,
      linkUrls: [
        "https://blue-license.org",
        "https://minor-formation.com",
        "https://ecstatic-hammock.com",
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "6a39ee7b-09a0-420c-a51c-6c4af729e321",
          namespace: "custom",
          slug: "custom_property",
          value: "esse",
        },
      ],
      name: "Goodwin and Sons",
      tags: [
        "quaerat",
        "valeo",
      ],
      telephones: [
        {
          telephone: "(432) 849-2690",
          type: "MOBILE",
        },
        {
          telephone: "(606) 871-2046",
          type: "OTHER",
        },
        {
          telephone: "(842) 258-9395",
          type: "MOBILE",
        },
      ],
      timezone: "Europe/San_Marino",
      updatedAt: new Date("2025-02-07T04:06:36.922Z"),
      websites: [
        "https://wise-possession.org",
      ],
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companyCreateCrmCompany failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateCrmCompanyRequest](../../sdk/models/operations/createcrmcompanyrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CrmCompany](../../sdk/models/shared/crmcompany.md)\>**

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
  const result = await unifiedTo.crm.createCrmContact({
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
      id: "7a6fd13e-12ea-4307-8f1b-7d08c3f4da84",
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
          id: "220127a4-49d3-425e-81f3-8715e21eacef",
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
      updatedAt: new Date("2021-02-23T09:44:33.219Z"),
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
      id: "7a6fd13e-12ea-4307-8f1b-7d08c3f4da84",
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
          id: "220127a4-49d3-425e-81f3-8715e21eacef",
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
      updatedAt: new Date("2021-02-23T09:44:33.219Z"),
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

## createCrmDeal

Create a deal

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createCrmDeal" method="post" path="/crm/{connection_id}/deal" example="crm_deal" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.crm.createCrmDeal({
    crmDeal: {
      amount: 98162,
      closedAt: new Date("2024-03-03T18:06:09.319Z"),
      closingAt: new Date("2025-08-10T11:25:32.197Z"),
      createdAt: new Date("2023-07-04T12:48:48.470Z"),
      currency: "IQD",
      description: "Tabula cicuta sophismata comis tepidus sit cavus.",
      id: "e337d2b6-c397-4983-8655-5b77c75c9bbb",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "5c11fc66-6cbe-4ed9-9a6c-fc60e21fc4e4",
          namespace: "custom",
          slug: "custom_property",
          value: "conatus",
        },
      ],
      name: "Frozen Silk Chicken",
      pipelines: [
        {
          id: "667192d9-c374-495b-858d-5d1907cff313",
          name: "trans",
        },
      ],
      probability: 65,
      source: "cubo",
      stages: [
        {
          id: "b484a06f-39fb-4f63-a5db-8228732df4c2",
          name: "tubineus",
        },
        {
          id: "169eeee0-05e1-4b04-90d7-efc6602e3cff",
          name: "adfectus",
        },
      ],
      tags: [
        "causa",
        "suus",
      ],
      updatedAt: new Date("2024-09-29T11:14:39.205Z"),
      wonReason: "Usque libero soleo.",
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
import { crmCreateCrmDeal } from "@unified-api/typescript-sdk/funcs/crmCreateCrmDeal.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await crmCreateCrmDeal(unifiedTo, {
    crmDeal: {
      amount: 98162,
      closedAt: new Date("2024-03-03T18:06:09.319Z"),
      closingAt: new Date("2025-08-10T11:25:32.197Z"),
      createdAt: new Date("2023-07-04T12:48:48.470Z"),
      currency: "IQD",
      description: "Tabula cicuta sophismata comis tepidus sit cavus.",
      id: "e337d2b6-c397-4983-8655-5b77c75c9bbb",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "5c11fc66-6cbe-4ed9-9a6c-fc60e21fc4e4",
          namespace: "custom",
          slug: "custom_property",
          value: "conatus",
        },
      ],
      name: "Frozen Silk Chicken",
      pipelines: [
        {
          id: "667192d9-c374-495b-858d-5d1907cff313",
          name: "trans",
        },
      ],
      probability: 65,
      source: "cubo",
      stages: [
        {
          id: "b484a06f-39fb-4f63-a5db-8228732df4c2",
          name: "tubineus",
        },
        {
          id: "169eeee0-05e1-4b04-90d7-efc6602e3cff",
          name: "adfectus",
        },
      ],
      tags: [
        "causa",
        "suus",
      ],
      updatedAt: new Date("2024-09-29T11:14:39.205Z"),
      wonReason: "Usque libero soleo.",
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("crmCreateCrmDeal failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateCrmDealRequest](../../sdk/models/operations/createcrmdealrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CrmDeal](../../sdk/models/shared/crmdeal.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createCrmEvent

Create an event

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createCrmEvent" method="post" path="/crm/{connection_id}/event" example="crm_event" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.crm.createCrmEvent({
    crmEvent: {
      call: {
        description: "Arbitro aptus.",
        duration: 64,
        startAt: new Date("2024-11-18T10:15:15.925Z"),
      },
      createdAt: new Date("2020-07-14T04:53:23.784Z"),
      id: "b551526d-8b33-4d90-855f-67e3ce7f4881",
      type: "CALL",
      updatedAt: new Date("2026-09-09T12:52:42.825Z"),
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
import { eventCreateCrmEvent } from "@unified-api/typescript-sdk/funcs/eventCreateCrmEvent.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventCreateCrmEvent(unifiedTo, {
    crmEvent: {
      call: {
        description: "Arbitro aptus.",
        duration: 64,
        startAt: new Date("2024-11-18T10:15:15.925Z"),
      },
      createdAt: new Date("2020-07-14T04:53:23.784Z"),
      id: "b551526d-8b33-4d90-855f-67e3ce7f4881",
      type: "CALL",
      updatedAt: new Date("2026-09-09T12:52:42.825Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventCreateCrmEvent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateCrmEventRequest](../../sdk/models/operations/createcrmeventrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CrmEvent](../../sdk/models/shared/crmevent.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createCrmLead

Create a lead

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createCrmLead" method="post" path="/crm/{connection_id}/lead" example="crm_lead" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.crm.createCrmLead({
    crmLead: {
      address: {
        address1: "528 Forest Road",
        address2: "Apt. 643",
        city: "Palm Springs",
        countryCode: "US",
        postalCode: "55624-6499",
        region: "New Jersey",
        regionCode: "LA",
      },
      companyName: "Tillman - Wiegand",
      createdAt: new Date("2019-10-12T11:27:59.003Z"),
      emails: [
        {
          email: "Velda.Sporer16@yahoo.com",
          type: "OTHER",
        },
        {
          email: "Velda.Sporer@yahoo.com",
          type: "HOME",
        },
      ],
      firstName: "Velda",
      id: "74875faa-f335-49a4-a78b-a248557a0a30",
      isActive: true,
      lastName: "Sporer",
      linkUrls: [
        "https://classic-sightseeing.com/",
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "35de0c54-8a57-43e2-9e7c-1d92b5eb8aa3",
          namespace: "custom",
          slug: "custom_property",
          value: "sublime",
        },
      ],
      name: "Velda Sporer",
      source: "aetas",
      status: "vesco",
      telephones: [
        {
          telephone: "(955) 643-9849",
          type: "OTHER",
        },
        {
          telephone: "(621) 811-8800",
          type: "WORK",
        },
      ],
      updatedAt: new Date("2020-05-15T03:55:10.674Z"),
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
import { crmCreateCrmLead } from "@unified-api/typescript-sdk/funcs/crmCreateCrmLead.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await crmCreateCrmLead(unifiedTo, {
    crmLead: {
      address: {
        address1: "528 Forest Road",
        address2: "Apt. 643",
        city: "Palm Springs",
        countryCode: "US",
        postalCode: "55624-6499",
        region: "New Jersey",
        regionCode: "LA",
      },
      companyName: "Tillman - Wiegand",
      createdAt: new Date("2019-10-12T11:27:59.003Z"),
      emails: [
        {
          email: "Velda.Sporer16@yahoo.com",
          type: "OTHER",
        },
        {
          email: "Velda.Sporer@yahoo.com",
          type: "HOME",
        },
      ],
      firstName: "Velda",
      id: "74875faa-f335-49a4-a78b-a248557a0a30",
      isActive: true,
      lastName: "Sporer",
      linkUrls: [
        "https://classic-sightseeing.com/",
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "35de0c54-8a57-43e2-9e7c-1d92b5eb8aa3",
          namespace: "custom",
          slug: "custom_property",
          value: "sublime",
        },
      ],
      name: "Velda Sporer",
      source: "aetas",
      status: "vesco",
      telephones: [
        {
          telephone: "(955) 643-9849",
          type: "OTHER",
        },
        {
          telephone: "(621) 811-8800",
          type: "WORK",
        },
      ],
      updatedAt: new Date("2020-05-15T03:55:10.674Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("crmCreateCrmLead failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateCrmLeadRequest](../../sdk/models/operations/createcrmleadrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CrmLead](../../sdk/models/shared/crmlead.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createCrmPipeline

Create a pipeline

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createCrmPipeline" method="post" path="/crm/{connection_id}/pipeline" example="crm_pipeline" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.crm.createCrmPipeline({
    crmPipeline: {
      createdAt: new Date("2022-12-28T13:45:38.446Z"),
      dealProbability: 99,
      displayOrder: 8,
      id: "29223c77-4e2f-44e5-9afa-d11454a3109a",
      isActive: true,
      name: "Small Steel Bacon",
      stages: [
        {
          active: false,
          createdAt: new Date("2022-12-28T13:45:38.446Z"),
          dealProbability: 84,
          displayOrder: 72,
          id: "5c48ffea-468a-418e-b389-a08e15ebc9a9",
          isClosed: true,
          name: "Veniam.",
          updatedAt: new Date("2025-09-17T01:12:25.944Z"),
        },
      ],
      updatedAt: new Date("2025-10-08T06:36:43.241Z"),
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
import { crmCreateCrmPipeline } from "@unified-api/typescript-sdk/funcs/crmCreateCrmPipeline.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await crmCreateCrmPipeline(unifiedTo, {
    crmPipeline: {
      createdAt: new Date("2022-12-28T13:45:38.446Z"),
      dealProbability: 99,
      displayOrder: 8,
      id: "29223c77-4e2f-44e5-9afa-d11454a3109a",
      isActive: true,
      name: "Small Steel Bacon",
      stages: [
        {
          active: false,
          createdAt: new Date("2022-12-28T13:45:38.446Z"),
          dealProbability: 84,
          displayOrder: 72,
          id: "5c48ffea-468a-418e-b389-a08e15ebc9a9",
          isClosed: true,
          name: "Veniam.",
          updatedAt: new Date("2025-09-17T01:12:25.944Z"),
        },
      ],
      updatedAt: new Date("2025-10-08T06:36:43.241Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("crmCreateCrmPipeline failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateCrmPipelineRequest](../../sdk/models/operations/createcrmpipelinerequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CrmPipeline](../../sdk/models/shared/crmpipeline.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getCrmCompany

Retrieve a company

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCrmCompany" method="get" path="/crm/{connection_id}/company/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.crm.getCrmCompany({
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
import { companyGetCrmCompany } from "@unified-api/typescript-sdk/funcs/companyGetCrmCompany.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await companyGetCrmCompany(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companyGetCrmCompany failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCrmCompanyRequest](../../sdk/models/operations/getcrmcompanyrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CrmCompany](../../sdk/models/shared/crmcompany.md)\>**

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
  const result = await unifiedTo.crm.getCrmContact({
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

## getCrmDeal

Retrieve a deal

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCrmDeal" method="get" path="/crm/{connection_id}/deal/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.crm.getCrmDeal({
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
import { crmGetCrmDeal } from "@unified-api/typescript-sdk/funcs/crmGetCrmDeal.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await crmGetCrmDeal(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("crmGetCrmDeal failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCrmDealRequest](../../sdk/models/operations/getcrmdealrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CrmDeal](../../sdk/models/shared/crmdeal.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getCrmEvent

Retrieve an event

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCrmEvent" method="get" path="/crm/{connection_id}/event/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.crm.getCrmEvent({
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
import { eventGetCrmEvent } from "@unified-api/typescript-sdk/funcs/eventGetCrmEvent.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventGetCrmEvent(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventGetCrmEvent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCrmEventRequest](../../sdk/models/operations/getcrmeventrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CrmEvent](../../sdk/models/shared/crmevent.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getCrmLead

Retrieve a lead

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCrmLead" method="get" path="/crm/{connection_id}/lead/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.crm.getCrmLead({
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
import { crmGetCrmLead } from "@unified-api/typescript-sdk/funcs/crmGetCrmLead.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await crmGetCrmLead(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("crmGetCrmLead failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCrmLeadRequest](../../sdk/models/operations/getcrmleadrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CrmLead](../../sdk/models/shared/crmlead.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getCrmPipeline

Retrieve a pipeline

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCrmPipeline" method="get" path="/crm/{connection_id}/pipeline/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.crm.getCrmPipeline({
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
import { crmGetCrmPipeline } from "@unified-api/typescript-sdk/funcs/crmGetCrmPipeline.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await crmGetCrmPipeline(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("crmGetCrmPipeline failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCrmPipelineRequest](../../sdk/models/operations/getcrmpipelinerequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CrmPipeline](../../sdk/models/shared/crmpipeline.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listCrmCompanies

List all companies

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listCrmCompanies" method="get" path="/crm/{connection_id}/company" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.crm.listCrmCompanies({
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
import { companyListCrmCompanies } from "@unified-api/typescript-sdk/funcs/companyListCrmCompanies.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await companyListCrmCompanies(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companyListCrmCompanies failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCrmCompaniesRequest](../../sdk/models/operations/listcrmcompaniesrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CrmCompany[]](../../models/.md)\>**

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
  const result = await unifiedTo.crm.listCrmContacts({
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

## listCrmDeals

List all deals

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listCrmDeals" method="get" path="/crm/{connection_id}/deal" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.crm.listCrmDeals({
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
import { crmListCrmDeals } from "@unified-api/typescript-sdk/funcs/crmListCrmDeals.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await crmListCrmDeals(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("crmListCrmDeals failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCrmDealsRequest](../../sdk/models/operations/listcrmdealsrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CrmDeal[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listCrmEvents

List all events

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listCrmEvents" method="get" path="/crm/{connection_id}/event" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.crm.listCrmEvents({
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
import { eventListCrmEvents } from "@unified-api/typescript-sdk/funcs/eventListCrmEvents.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventListCrmEvents(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventListCrmEvents failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCrmEventsRequest](../../sdk/models/operations/listcrmeventsrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CrmEvent[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listCrmLeads

List all leads

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listCrmLeads" method="get" path="/crm/{connection_id}/lead" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.crm.listCrmLeads({
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
import { crmListCrmLeads } from "@unified-api/typescript-sdk/funcs/crmListCrmLeads.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await crmListCrmLeads(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("crmListCrmLeads failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCrmLeadsRequest](../../sdk/models/operations/listcrmleadsrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CrmLead[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listCrmPipelines

List all pipelines

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listCrmPipelines" method="get" path="/crm/{connection_id}/pipeline" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.crm.listCrmPipelines({
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
import { crmListCrmPipelines } from "@unified-api/typescript-sdk/funcs/crmListCrmPipelines.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await crmListCrmPipelines(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("crmListCrmPipelines failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCrmPipelinesRequest](../../sdk/models/operations/listcrmpipelinesrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CrmPipeline[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listCrmTaxonomies

List all taxonomies

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listCrmTaxonomies" method="get" path="/crm/{connection_id}/taxonomy" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.crm.listCrmTaxonomies({
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
import { crmListCrmTaxonomies } from "@unified-api/typescript-sdk/funcs/crmListCrmTaxonomies.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await crmListCrmTaxonomies(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("crmListCrmTaxonomies failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCrmTaxonomiesRequest](../../sdk/models/operations/listcrmtaxonomiesrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CrmTaxonomy[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchCrmCompany

Update a company

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchCrmCompany" method="patch" path="/crm/{connection_id}/company/{id}" example="crm_company" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.crm.patchCrmCompany({
    crmCompany: {
      address: {
        address1: "7261 Salisbury Road",
        address2: "Apt. 778",
        city: "Harrisburg",
        countryCode: "US",
        postalCode: "56293-3678",
        region: "Pennsylvania",
        regionCode: "ID",
      },
      createdAt: new Date("2020-05-11T18:26:32.925Z"),
      description: "Balbus crapula spiculum.",
      domains: [
        "fussy-nerve.info",
        "sturdy-lobster.org",
        "greedy-offset.name",
      ],
      emails: [
        {
          email: "Sandrine_Jacobi@hotmail.com",
          type: "WORK",
        },
        {
          email: "Sandrine_Jacobi@gmail.com",
          type: "WORK",
        },
        {
          email: "Sandrine.Jacobi@yahoo.com",
          type: "OTHER",
        },
      ],
      employees: 967,
      id: "6e10d1e2-d389-4a98-854e-9923c49b3da7",
      industry: "Infrastructure",
      isActive: true,
      linkUrls: [
        "https://blue-license.org",
        "https://minor-formation.com",
        "https://ecstatic-hammock.com",
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "b56c0014-b39a-417b-99f3-72155b1d966f",
          namespace: "custom",
          slug: "custom_property",
          value: "esse",
        },
      ],
      name: "Goodwin and Sons",
      tags: [
        "quaerat",
        "valeo",
      ],
      telephones: [
        {
          telephone: "(432) 849-2690",
          type: "MOBILE",
        },
        {
          telephone: "(606) 871-2046",
          type: "OTHER",
        },
        {
          telephone: "(842) 258-9395",
          type: "MOBILE",
        },
      ],
      timezone: "Europe/San_Marino",
      updatedAt: new Date("2025-02-07T04:06:36.936Z"),
      websites: [
        "https://wise-possession.org",
      ],
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
import { companyPatchCrmCompany } from "@unified-api/typescript-sdk/funcs/companyPatchCrmCompany.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await companyPatchCrmCompany(unifiedTo, {
    crmCompany: {
      address: {
        address1: "7261 Salisbury Road",
        address2: "Apt. 778",
        city: "Harrisburg",
        countryCode: "US",
        postalCode: "56293-3678",
        region: "Pennsylvania",
        regionCode: "ID",
      },
      createdAt: new Date("2020-05-11T18:26:32.925Z"),
      description: "Balbus crapula spiculum.",
      domains: [
        "fussy-nerve.info",
        "sturdy-lobster.org",
        "greedy-offset.name",
      ],
      emails: [
        {
          email: "Sandrine_Jacobi@hotmail.com",
          type: "WORK",
        },
        {
          email: "Sandrine_Jacobi@gmail.com",
          type: "WORK",
        },
        {
          email: "Sandrine.Jacobi@yahoo.com",
          type: "OTHER",
        },
      ],
      employees: 967,
      id: "6e10d1e2-d389-4a98-854e-9923c49b3da7",
      industry: "Infrastructure",
      isActive: true,
      linkUrls: [
        "https://blue-license.org",
        "https://minor-formation.com",
        "https://ecstatic-hammock.com",
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "b56c0014-b39a-417b-99f3-72155b1d966f",
          namespace: "custom",
          slug: "custom_property",
          value: "esse",
        },
      ],
      name: "Goodwin and Sons",
      tags: [
        "quaerat",
        "valeo",
      ],
      telephones: [
        {
          telephone: "(432) 849-2690",
          type: "MOBILE",
        },
        {
          telephone: "(606) 871-2046",
          type: "OTHER",
        },
        {
          telephone: "(842) 258-9395",
          type: "MOBILE",
        },
      ],
      timezone: "Europe/San_Marino",
      updatedAt: new Date("2025-02-07T04:06:36.936Z"),
      websites: [
        "https://wise-possession.org",
      ],
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companyPatchCrmCompany failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchCrmCompanyRequest](../../sdk/models/operations/patchcrmcompanyrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CrmCompany](../../sdk/models/shared/crmcompany.md)\>**

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
  const result = await unifiedTo.crm.patchCrmContact({
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
      id: "8eea6de3-d307-4f5c-983a-db468edbab49",
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
          id: "b4b0f17b-bfe9-4967-af4a-f33f2b4709b4",
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
      updatedAt: new Date("2021-02-23T09:44:33.220Z"),
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
      id: "8eea6de3-d307-4f5c-983a-db468edbab49",
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
          id: "b4b0f17b-bfe9-4967-af4a-f33f2b4709b4",
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
      updatedAt: new Date("2021-02-23T09:44:33.220Z"),
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

## patchCrmDeal

Update a deal

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchCrmDeal" method="patch" path="/crm/{connection_id}/deal/{id}" example="crm_deal" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.crm.patchCrmDeal({
    crmDeal: {
      amount: 98162,
      closedAt: new Date("2024-03-03T18:06:09.322Z"),
      closingAt: new Date("2025-08-10T11:25:32.207Z"),
      createdAt: new Date("2023-07-04T12:48:48.470Z"),
      currency: "IQD",
      description: "Tabula cicuta sophismata comis tepidus sit cavus.",
      id: "e1d88174-6ed9-4bc7-ae6a-ab349377da31",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "1b5191a6-e95e-49a2-9168-b6622874bf45",
          namespace: "custom",
          slug: "custom_property",
          value: "conatus",
        },
      ],
      name: "Frozen Silk Chicken",
      pipelines: [
        {
          id: "30a977c2-c604-4095-b59b-4e5b282c8f6d",
          name: "trans",
        },
      ],
      probability: 65,
      source: "cubo",
      stages: [
        {
          id: "4fa3cbbc-c12d-4f87-831a-6b4da08f864d",
          name: "tubineus",
        },
        {
          id: "016d6349-d8d7-4a3a-974b-e44ada7438f6",
          name: "adfectus",
        },
      ],
      tags: [
        "causa",
        "suus",
      ],
      updatedAt: new Date("2024-09-29T11:14:39.211Z"),
      wonReason: "Usque libero soleo.",
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
import { crmPatchCrmDeal } from "@unified-api/typescript-sdk/funcs/crmPatchCrmDeal.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await crmPatchCrmDeal(unifiedTo, {
    crmDeal: {
      amount: 98162,
      closedAt: new Date("2024-03-03T18:06:09.322Z"),
      closingAt: new Date("2025-08-10T11:25:32.207Z"),
      createdAt: new Date("2023-07-04T12:48:48.470Z"),
      currency: "IQD",
      description: "Tabula cicuta sophismata comis tepidus sit cavus.",
      id: "e1d88174-6ed9-4bc7-ae6a-ab349377da31",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "1b5191a6-e95e-49a2-9168-b6622874bf45",
          namespace: "custom",
          slug: "custom_property",
          value: "conatus",
        },
      ],
      name: "Frozen Silk Chicken",
      pipelines: [
        {
          id: "30a977c2-c604-4095-b59b-4e5b282c8f6d",
          name: "trans",
        },
      ],
      probability: 65,
      source: "cubo",
      stages: [
        {
          id: "4fa3cbbc-c12d-4f87-831a-6b4da08f864d",
          name: "tubineus",
        },
        {
          id: "016d6349-d8d7-4a3a-974b-e44ada7438f6",
          name: "adfectus",
        },
      ],
      tags: [
        "causa",
        "suus",
      ],
      updatedAt: new Date("2024-09-29T11:14:39.211Z"),
      wonReason: "Usque libero soleo.",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("crmPatchCrmDeal failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchCrmDealRequest](../../sdk/models/operations/patchcrmdealrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CrmDeal](../../sdk/models/shared/crmdeal.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchCrmEvent

Update an event

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchCrmEvent" method="patch" path="/crm/{connection_id}/event/{id}" example="crm_event" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.crm.patchCrmEvent({
    crmEvent: {
      call: {
        description: "Arbitro aptus.",
        duration: 64,
        startAt: new Date("2024-11-18T10:15:15.947Z"),
      },
      createdAt: new Date("2020-07-14T04:53:23.784Z"),
      id: "e57130d1-475d-4d5e-a829-64369bb8e28d",
      type: "CALL",
      updatedAt: new Date("2026-09-09T12:52:42.855Z"),
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
import { eventPatchCrmEvent } from "@unified-api/typescript-sdk/funcs/eventPatchCrmEvent.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventPatchCrmEvent(unifiedTo, {
    crmEvent: {
      call: {
        description: "Arbitro aptus.",
        duration: 64,
        startAt: new Date("2024-11-18T10:15:15.947Z"),
      },
      createdAt: new Date("2020-07-14T04:53:23.784Z"),
      id: "e57130d1-475d-4d5e-a829-64369bb8e28d",
      type: "CALL",
      updatedAt: new Date("2026-09-09T12:52:42.855Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventPatchCrmEvent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchCrmEventRequest](../../sdk/models/operations/patchcrmeventrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CrmEvent](../../sdk/models/shared/crmevent.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchCrmLead

Update a lead

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchCrmLead" method="patch" path="/crm/{connection_id}/lead/{id}" example="crm_lead" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.crm.patchCrmLead({
    crmLead: {
      address: {
        address1: "528 Forest Road",
        address2: "Apt. 643",
        city: "Palm Springs",
        countryCode: "US",
        postalCode: "55624-6499",
        region: "New Jersey",
        regionCode: "LA",
      },
      companyName: "Tillman - Wiegand",
      createdAt: new Date("2019-10-12T11:27:59.003Z"),
      emails: [
        {
          email: "Velda.Sporer16@yahoo.com",
          type: "OTHER",
        },
        {
          email: "Velda.Sporer@yahoo.com",
          type: "HOME",
        },
      ],
      firstName: "Velda",
      id: "3d42a54b-cd28-47cc-96a9-20d1441a300d",
      isActive: true,
      lastName: "Sporer",
      linkUrls: [
        "https://classic-sightseeing.com/",
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "4d7a6c02-3db7-4853-b9db-3785e74df8e1",
          namespace: "custom",
          slug: "custom_property",
          value: "sublime",
        },
      ],
      name: "Velda Sporer",
      source: "aetas",
      status: "vesco",
      telephones: [
        {
          telephone: "(955) 643-9849",
          type: "OTHER",
        },
        {
          telephone: "(621) 811-8800",
          type: "WORK",
        },
      ],
      updatedAt: new Date("2020-05-15T03:55:10.676Z"),
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
import { crmPatchCrmLead } from "@unified-api/typescript-sdk/funcs/crmPatchCrmLead.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await crmPatchCrmLead(unifiedTo, {
    crmLead: {
      address: {
        address1: "528 Forest Road",
        address2: "Apt. 643",
        city: "Palm Springs",
        countryCode: "US",
        postalCode: "55624-6499",
        region: "New Jersey",
        regionCode: "LA",
      },
      companyName: "Tillman - Wiegand",
      createdAt: new Date("2019-10-12T11:27:59.003Z"),
      emails: [
        {
          email: "Velda.Sporer16@yahoo.com",
          type: "OTHER",
        },
        {
          email: "Velda.Sporer@yahoo.com",
          type: "HOME",
        },
      ],
      firstName: "Velda",
      id: "3d42a54b-cd28-47cc-96a9-20d1441a300d",
      isActive: true,
      lastName: "Sporer",
      linkUrls: [
        "https://classic-sightseeing.com/",
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "4d7a6c02-3db7-4853-b9db-3785e74df8e1",
          namespace: "custom",
          slug: "custom_property",
          value: "sublime",
        },
      ],
      name: "Velda Sporer",
      source: "aetas",
      status: "vesco",
      telephones: [
        {
          telephone: "(955) 643-9849",
          type: "OTHER",
        },
        {
          telephone: "(621) 811-8800",
          type: "WORK",
        },
      ],
      updatedAt: new Date("2020-05-15T03:55:10.676Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("crmPatchCrmLead failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchCrmLeadRequest](../../sdk/models/operations/patchcrmleadrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CrmLead](../../sdk/models/shared/crmlead.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchCrmPipeline

Update a pipeline

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchCrmPipeline" method="patch" path="/crm/{connection_id}/pipeline/{id}" example="crm_pipeline" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.crm.patchCrmPipeline({
    crmPipeline: {
      createdAt: new Date("2022-12-28T13:45:38.446Z"),
      dealProbability: 99,
      displayOrder: 8,
      id: "b04fce31-279a-441e-be53-8c881b70c675",
      isActive: true,
      name: "Small Steel Bacon",
      stages: [
        {
          active: false,
          createdAt: new Date("2022-12-28T13:45:38.446Z"),
          dealProbability: 84,
          displayOrder: 72,
          id: "1d81582b-3c78-4481-9208-aa8273af132a",
          isClosed: true,
          name: "Veniam.",
          updatedAt: new Date("2025-09-17T01:12:25.949Z"),
        },
      ],
      updatedAt: new Date("2025-10-08T06:36:43.246Z"),
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
import { crmPatchCrmPipeline } from "@unified-api/typescript-sdk/funcs/crmPatchCrmPipeline.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await crmPatchCrmPipeline(unifiedTo, {
    crmPipeline: {
      createdAt: new Date("2022-12-28T13:45:38.446Z"),
      dealProbability: 99,
      displayOrder: 8,
      id: "b04fce31-279a-441e-be53-8c881b70c675",
      isActive: true,
      name: "Small Steel Bacon",
      stages: [
        {
          active: false,
          createdAt: new Date("2022-12-28T13:45:38.446Z"),
          dealProbability: 84,
          displayOrder: 72,
          id: "1d81582b-3c78-4481-9208-aa8273af132a",
          isClosed: true,
          name: "Veniam.",
          updatedAt: new Date("2025-09-17T01:12:25.949Z"),
        },
      ],
      updatedAt: new Date("2025-10-08T06:36:43.246Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("crmPatchCrmPipeline failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchCrmPipelineRequest](../../sdk/models/operations/patchcrmpipelinerequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CrmPipeline](../../sdk/models/shared/crmpipeline.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeCrmCompany

Remove a company

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeCrmCompany" method="delete" path="/crm/{connection_id}/company/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.crm.removeCrmCompany({
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
import { companyRemoveCrmCompany } from "@unified-api/typescript-sdk/funcs/companyRemoveCrmCompany.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await companyRemoveCrmCompany(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companyRemoveCrmCompany failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveCrmCompanyRequest](../../sdk/models/operations/removecrmcompanyrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveCrmCompanyResponse](../../sdk/models/operations/removecrmcompanyresponse.md)\>**

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
  const result = await unifiedTo.crm.removeCrmContact({
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

## removeCrmDeal

Remove a deal

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeCrmDeal" method="delete" path="/crm/{connection_id}/deal/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.crm.removeCrmDeal({
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
import { crmRemoveCrmDeal } from "@unified-api/typescript-sdk/funcs/crmRemoveCrmDeal.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await crmRemoveCrmDeal(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("crmRemoveCrmDeal failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveCrmDealRequest](../../sdk/models/operations/removecrmdealrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveCrmDealResponse](../../sdk/models/operations/removecrmdealresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeCrmEvent

Remove an event

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeCrmEvent" method="delete" path="/crm/{connection_id}/event/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.crm.removeCrmEvent({
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
import { eventRemoveCrmEvent } from "@unified-api/typescript-sdk/funcs/eventRemoveCrmEvent.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventRemoveCrmEvent(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventRemoveCrmEvent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveCrmEventRequest](../../sdk/models/operations/removecrmeventrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveCrmEventResponse](../../sdk/models/operations/removecrmeventresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeCrmLead

Remove a lead

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeCrmLead" method="delete" path="/crm/{connection_id}/lead/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.crm.removeCrmLead({
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
import { crmRemoveCrmLead } from "@unified-api/typescript-sdk/funcs/crmRemoveCrmLead.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await crmRemoveCrmLead(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("crmRemoveCrmLead failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveCrmLeadRequest](../../sdk/models/operations/removecrmleadrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveCrmLeadResponse](../../sdk/models/operations/removecrmleadresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeCrmPipeline

Remove a pipeline

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeCrmPipeline" method="delete" path="/crm/{connection_id}/pipeline/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.crm.removeCrmPipeline({
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
import { crmRemoveCrmPipeline } from "@unified-api/typescript-sdk/funcs/crmRemoveCrmPipeline.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await crmRemoveCrmPipeline(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("crmRemoveCrmPipeline failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveCrmPipelineRequest](../../sdk/models/operations/removecrmpipelinerequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveCrmPipelineResponse](../../sdk/models/operations/removecrmpipelineresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateCrmCompany

Update a company

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateCrmCompany" method="put" path="/crm/{connection_id}/company/{id}" example="crm_company" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.crm.updateCrmCompany({
    crmCompany: {
      address: {
        address1: "7261 Salisbury Road",
        address2: "Apt. 778",
        city: "Harrisburg",
        countryCode: "US",
        postalCode: "56293-3678",
        region: "Pennsylvania",
        regionCode: "ID",
      },
      createdAt: new Date("2020-05-11T18:26:32.925Z"),
      description: "Balbus crapula spiculum.",
      domains: [
        "fussy-nerve.info",
        "sturdy-lobster.org",
        "greedy-offset.name",
      ],
      emails: [
        {
          email: "Sandrine_Jacobi@hotmail.com",
          type: "WORK",
        },
        {
          email: "Sandrine_Jacobi@gmail.com",
          type: "WORK",
        },
        {
          email: "Sandrine.Jacobi@yahoo.com",
          type: "OTHER",
        },
      ],
      employees: 967,
      id: "6e10d1e2-d389-4a98-854e-9923c49b3da7",
      industry: "Infrastructure",
      isActive: true,
      linkUrls: [
        "https://blue-license.org",
        "https://minor-formation.com",
        "https://ecstatic-hammock.com",
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "b56c0014-b39a-417b-99f3-72155b1d966f",
          namespace: "custom",
          slug: "custom_property",
          value: "esse",
        },
      ],
      name: "Goodwin and Sons",
      tags: [
        "quaerat",
        "valeo",
      ],
      telephones: [
        {
          telephone: "(432) 849-2690",
          type: "MOBILE",
        },
        {
          telephone: "(606) 871-2046",
          type: "OTHER",
        },
        {
          telephone: "(842) 258-9395",
          type: "MOBILE",
        },
      ],
      timezone: "Europe/San_Marino",
      updatedAt: new Date("2025-02-07T04:06:36.936Z"),
      websites: [
        "https://wise-possession.org",
      ],
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
import { companyUpdateCrmCompany } from "@unified-api/typescript-sdk/funcs/companyUpdateCrmCompany.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await companyUpdateCrmCompany(unifiedTo, {
    crmCompany: {
      address: {
        address1: "7261 Salisbury Road",
        address2: "Apt. 778",
        city: "Harrisburg",
        countryCode: "US",
        postalCode: "56293-3678",
        region: "Pennsylvania",
        regionCode: "ID",
      },
      createdAt: new Date("2020-05-11T18:26:32.925Z"),
      description: "Balbus crapula spiculum.",
      domains: [
        "fussy-nerve.info",
        "sturdy-lobster.org",
        "greedy-offset.name",
      ],
      emails: [
        {
          email: "Sandrine_Jacobi@hotmail.com",
          type: "WORK",
        },
        {
          email: "Sandrine_Jacobi@gmail.com",
          type: "WORK",
        },
        {
          email: "Sandrine.Jacobi@yahoo.com",
          type: "OTHER",
        },
      ],
      employees: 967,
      id: "6e10d1e2-d389-4a98-854e-9923c49b3da7",
      industry: "Infrastructure",
      isActive: true,
      linkUrls: [
        "https://blue-license.org",
        "https://minor-formation.com",
        "https://ecstatic-hammock.com",
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "b56c0014-b39a-417b-99f3-72155b1d966f",
          namespace: "custom",
          slug: "custom_property",
          value: "esse",
        },
      ],
      name: "Goodwin and Sons",
      tags: [
        "quaerat",
        "valeo",
      ],
      telephones: [
        {
          telephone: "(432) 849-2690",
          type: "MOBILE",
        },
        {
          telephone: "(606) 871-2046",
          type: "OTHER",
        },
        {
          telephone: "(842) 258-9395",
          type: "MOBILE",
        },
      ],
      timezone: "Europe/San_Marino",
      updatedAt: new Date("2025-02-07T04:06:36.936Z"),
      websites: [
        "https://wise-possession.org",
      ],
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("companyUpdateCrmCompany failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateCrmCompanyRequest](../../sdk/models/operations/updatecrmcompanyrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CrmCompany](../../sdk/models/shared/crmcompany.md)\>**

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
  const result = await unifiedTo.crm.updateCrmContact({
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
      id: "8eea6de3-d307-4f5c-983a-db468edbab49",
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
          id: "b4b0f17b-bfe9-4967-af4a-f33f2b4709b4",
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
      updatedAt: new Date("2021-02-23T09:44:33.220Z"),
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
      id: "8eea6de3-d307-4f5c-983a-db468edbab49",
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
          id: "b4b0f17b-bfe9-4967-af4a-f33f2b4709b4",
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
      updatedAt: new Date("2021-02-23T09:44:33.220Z"),
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

## updateCrmDeal

Update a deal

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateCrmDeal" method="put" path="/crm/{connection_id}/deal/{id}" example="crm_deal" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.crm.updateCrmDeal({
    crmDeal: {
      amount: 98162,
      closedAt: new Date("2024-03-03T18:06:09.322Z"),
      closingAt: new Date("2025-08-10T11:25:32.207Z"),
      createdAt: new Date("2023-07-04T12:48:48.470Z"),
      currency: "IQD",
      description: "Tabula cicuta sophismata comis tepidus sit cavus.",
      id: "e1d88174-6ed9-4bc7-ae6a-ab349377da31",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "1b5191a6-e95e-49a2-9168-b6622874bf45",
          namespace: "custom",
          slug: "custom_property",
          value: "conatus",
        },
      ],
      name: "Frozen Silk Chicken",
      pipelines: [
        {
          id: "30a977c2-c604-4095-b59b-4e5b282c8f6d",
          name: "trans",
        },
      ],
      probability: 65,
      source: "cubo",
      stages: [
        {
          id: "4fa3cbbc-c12d-4f87-831a-6b4da08f864d",
          name: "tubineus",
        },
        {
          id: "016d6349-d8d7-4a3a-974b-e44ada7438f6",
          name: "adfectus",
        },
      ],
      tags: [
        "causa",
        "suus",
      ],
      updatedAt: new Date("2024-09-29T11:14:39.211Z"),
      wonReason: "Usque libero soleo.",
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
import { crmUpdateCrmDeal } from "@unified-api/typescript-sdk/funcs/crmUpdateCrmDeal.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await crmUpdateCrmDeal(unifiedTo, {
    crmDeal: {
      amount: 98162,
      closedAt: new Date("2024-03-03T18:06:09.322Z"),
      closingAt: new Date("2025-08-10T11:25:32.207Z"),
      createdAt: new Date("2023-07-04T12:48:48.470Z"),
      currency: "IQD",
      description: "Tabula cicuta sophismata comis tepidus sit cavus.",
      id: "e1d88174-6ed9-4bc7-ae6a-ab349377da31",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "1b5191a6-e95e-49a2-9168-b6622874bf45",
          namespace: "custom",
          slug: "custom_property",
          value: "conatus",
        },
      ],
      name: "Frozen Silk Chicken",
      pipelines: [
        {
          id: "30a977c2-c604-4095-b59b-4e5b282c8f6d",
          name: "trans",
        },
      ],
      probability: 65,
      source: "cubo",
      stages: [
        {
          id: "4fa3cbbc-c12d-4f87-831a-6b4da08f864d",
          name: "tubineus",
        },
        {
          id: "016d6349-d8d7-4a3a-974b-e44ada7438f6",
          name: "adfectus",
        },
      ],
      tags: [
        "causa",
        "suus",
      ],
      updatedAt: new Date("2024-09-29T11:14:39.211Z"),
      wonReason: "Usque libero soleo.",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("crmUpdateCrmDeal failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateCrmDealRequest](../../sdk/models/operations/updatecrmdealrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CrmDeal](../../sdk/models/shared/crmdeal.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateCrmEvent

Update an event

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateCrmEvent" method="put" path="/crm/{connection_id}/event/{id}" example="crm_event" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.crm.updateCrmEvent({
    crmEvent: {
      call: {
        description: "Arbitro aptus.",
        duration: 64,
        startAt: new Date("2024-11-18T10:15:15.947Z"),
      },
      createdAt: new Date("2020-07-14T04:53:23.784Z"),
      id: "e57130d1-475d-4d5e-a829-64369bb8e28d",
      type: "CALL",
      updatedAt: new Date("2026-09-09T12:52:42.855Z"),
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
import { eventUpdateCrmEvent } from "@unified-api/typescript-sdk/funcs/eventUpdateCrmEvent.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await eventUpdateCrmEvent(unifiedTo, {
    crmEvent: {
      call: {
        description: "Arbitro aptus.",
        duration: 64,
        startAt: new Date("2024-11-18T10:15:15.947Z"),
      },
      createdAt: new Date("2020-07-14T04:53:23.784Z"),
      id: "e57130d1-475d-4d5e-a829-64369bb8e28d",
      type: "CALL",
      updatedAt: new Date("2026-09-09T12:52:42.855Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("eventUpdateCrmEvent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateCrmEventRequest](../../sdk/models/operations/updatecrmeventrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CrmEvent](../../sdk/models/shared/crmevent.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateCrmLead

Update a lead

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateCrmLead" method="put" path="/crm/{connection_id}/lead/{id}" example="crm_lead" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.crm.updateCrmLead({
    crmLead: {
      address: {
        address1: "528 Forest Road",
        address2: "Apt. 643",
        city: "Palm Springs",
        countryCode: "US",
        postalCode: "55624-6499",
        region: "New Jersey",
        regionCode: "LA",
      },
      companyName: "Tillman - Wiegand",
      createdAt: new Date("2019-10-12T11:27:59.003Z"),
      emails: [
        {
          email: "Velda.Sporer16@yahoo.com",
          type: "OTHER",
        },
        {
          email: "Velda.Sporer@yahoo.com",
          type: "HOME",
        },
      ],
      firstName: "Velda",
      id: "3d42a54b-cd28-47cc-96a9-20d1441a300d",
      isActive: true,
      lastName: "Sporer",
      linkUrls: [
        "https://classic-sightseeing.com/",
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "4d7a6c02-3db7-4853-b9db-3785e74df8e1",
          namespace: "custom",
          slug: "custom_property",
          value: "sublime",
        },
      ],
      name: "Velda Sporer",
      source: "aetas",
      status: "vesco",
      telephones: [
        {
          telephone: "(955) 643-9849",
          type: "OTHER",
        },
        {
          telephone: "(621) 811-8800",
          type: "WORK",
        },
      ],
      updatedAt: new Date("2020-05-15T03:55:10.676Z"),
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
import { crmUpdateCrmLead } from "@unified-api/typescript-sdk/funcs/crmUpdateCrmLead.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await crmUpdateCrmLead(unifiedTo, {
    crmLead: {
      address: {
        address1: "528 Forest Road",
        address2: "Apt. 643",
        city: "Palm Springs",
        countryCode: "US",
        postalCode: "55624-6499",
        region: "New Jersey",
        regionCode: "LA",
      },
      companyName: "Tillman - Wiegand",
      createdAt: new Date("2019-10-12T11:27:59.003Z"),
      emails: [
        {
          email: "Velda.Sporer16@yahoo.com",
          type: "OTHER",
        },
        {
          email: "Velda.Sporer@yahoo.com",
          type: "HOME",
        },
      ],
      firstName: "Velda",
      id: "3d42a54b-cd28-47cc-96a9-20d1441a300d",
      isActive: true,
      lastName: "Sporer",
      linkUrls: [
        "https://classic-sightseeing.com/",
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "4d7a6c02-3db7-4853-b9db-3785e74df8e1",
          namespace: "custom",
          slug: "custom_property",
          value: "sublime",
        },
      ],
      name: "Velda Sporer",
      source: "aetas",
      status: "vesco",
      telephones: [
        {
          telephone: "(955) 643-9849",
          type: "OTHER",
        },
        {
          telephone: "(621) 811-8800",
          type: "WORK",
        },
      ],
      updatedAt: new Date("2020-05-15T03:55:10.676Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("crmUpdateCrmLead failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateCrmLeadRequest](../../sdk/models/operations/updatecrmleadrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CrmLead](../../sdk/models/shared/crmlead.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateCrmPipeline

Update a pipeline

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateCrmPipeline" method="put" path="/crm/{connection_id}/pipeline/{id}" example="crm_pipeline" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.crm.updateCrmPipeline({
    crmPipeline: {
      createdAt: new Date("2022-12-28T13:45:38.446Z"),
      dealProbability: 99,
      displayOrder: 8,
      id: "b04fce31-279a-441e-be53-8c881b70c675",
      isActive: true,
      name: "Small Steel Bacon",
      stages: [
        {
          active: false,
          createdAt: new Date("2022-12-28T13:45:38.446Z"),
          dealProbability: 84,
          displayOrder: 72,
          id: "1d81582b-3c78-4481-9208-aa8273af132a",
          isClosed: true,
          name: "Veniam.",
          updatedAt: new Date("2025-09-17T01:12:25.949Z"),
        },
      ],
      updatedAt: new Date("2025-10-08T06:36:43.246Z"),
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
import { crmUpdateCrmPipeline } from "@unified-api/typescript-sdk/funcs/crmUpdateCrmPipeline.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await crmUpdateCrmPipeline(unifiedTo, {
    crmPipeline: {
      createdAt: new Date("2022-12-28T13:45:38.446Z"),
      dealProbability: 99,
      displayOrder: 8,
      id: "b04fce31-279a-441e-be53-8c881b70c675",
      isActive: true,
      name: "Small Steel Bacon",
      stages: [
        {
          active: false,
          createdAt: new Date("2022-12-28T13:45:38.446Z"),
          dealProbability: 84,
          displayOrder: 72,
          id: "1d81582b-3c78-4481-9208-aa8273af132a",
          isClosed: true,
          name: "Veniam.",
          updatedAt: new Date("2025-09-17T01:12:25.949Z"),
        },
      ],
      updatedAt: new Date("2025-10-08T06:36:43.246Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("crmUpdateCrmPipeline failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateCrmPipelineRequest](../../sdk/models/operations/updatecrmpipelinerequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CrmPipeline](../../sdk/models/shared/crmpipeline.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |