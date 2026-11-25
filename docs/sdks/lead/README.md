# Lead

## Overview

### Available Operations

* [createCrmLead](#createcrmlead) - Create a lead
* [getCrmLead](#getcrmlead) - Retrieve a lead
* [listCrmLeads](#listcrmleads) - List all leads
* [patchCrmLead](#patchcrmlead) - Update a lead
* [removeCrmLead](#removecrmlead) - Remove a lead
* [updateCrmLead](#updatecrmlead) - Update a lead

## createCrmLead

Creates a CrmLead. Provide the unified CrmLead fields in the request body; they are mapped to the provider's API. Returns the created CrmLead.

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
  const result = await unifiedTo.lead.createCrmLead({
    crmLead: {
      address: {
        address1: "656 Jazlyn Viaduct",
        city: "Port Trinityview",
        countryCode: "US",
        postalCode: "72765-6715",
        region: "West Virginia",
        regionCode: "NJ",
      },
      companyName: "Braun, Bernier and McCullough-MacGyver",
      createdAt: new Date("2019-10-12T11:27:59.003Z"),
      emails: [
        {
          email: "robbie.wiegand@icloud.com",
          type: "WORK",
        },
      ],
      firstName: "Robbie",
      id: "13e4f3e5-1511-4afd-a5ba-14406506c77b",
      isActive: true,
      lastName: "Wiegand",
      linkUrls: [
        "https://www.linkedin.com/in/robbie-wiegand",
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "e283538d-f5e4-475a-bba9-9b97b392df35",
          namespace: "custom",
          slug: "custom_property",
          value: "tripudio",
        },
      ],
      name: "Robbie Wiegand",
      source: "Advertisement",
      status: "New",
      telephones: [
        {
          telephone: "(643) 984-9521",
          type: "FAX",
        },
        {
          telephone: "(811) 880-0374",
          type: "HOME",
        },
        {
          telephone: "(387) 406-4386",
          type: "OTHER",
        },
      ],
      title: "Future Response Specialist",
      updatedAt: new Date("2020-05-20T22:54:25.144Z"),
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
        address1: "656 Jazlyn Viaduct",
        city: "Port Trinityview",
        countryCode: "US",
        postalCode: "72765-6715",
        region: "West Virginia",
        regionCode: "NJ",
      },
      companyName: "Braun, Bernier and McCullough-MacGyver",
      createdAt: new Date("2019-10-12T11:27:59.003Z"),
      emails: [
        {
          email: "robbie.wiegand@icloud.com",
          type: "WORK",
        },
      ],
      firstName: "Robbie",
      id: "13e4f3e5-1511-4afd-a5ba-14406506c77b",
      isActive: true,
      lastName: "Wiegand",
      linkUrls: [
        "https://www.linkedin.com/in/robbie-wiegand",
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "e283538d-f5e4-475a-bba9-9b97b392df35",
          namespace: "custom",
          slug: "custom_property",
          value: "tripudio",
        },
      ],
      name: "Robbie Wiegand",
      source: "Advertisement",
      status: "New",
      telephones: [
        {
          telephone: "(643) 984-9521",
          type: "FAX",
        },
        {
          telephone: "(811) 880-0374",
          type: "HOME",
        },
        {
          telephone: "(387) 406-4386",
          type: "OTHER",
        },
      ],
      title: "Future Response Specialist",
      updatedAt: new Date("2020-05-20T22:54:25.144Z"),
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

## getCrmLead

Retrieves a single CrmLead by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

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
  const result = await unifiedTo.lead.getCrmLead({
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

## listCrmLeads

Returns a list of CrmLeads. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

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
  const result = await unifiedTo.lead.listCrmLeads({
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

## patchCrmLead

Updates the CrmLead identified by `id`. Provide the unified CrmLead fields to change in the request body.

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
  const result = await unifiedTo.lead.patchCrmLead({
    crmLead: {
      address: {
        address1: "656 Jazlyn Viaduct",
        city: "Port Trinityview",
        countryCode: "US",
        postalCode: "72765-6715",
        region: "West Virginia",
        regionCode: "NJ",
      },
      companyName: "Braun, Bernier and McCullough-MacGyver",
      createdAt: new Date("2019-10-12T11:27:59.003Z"),
      emails: [
        {
          email: "robbie.wiegand@icloud.com",
          type: "WORK",
        },
      ],
      firstName: "Robbie",
      id: "37116953-0f7c-4ef7-8d97-0e8a473b0790",
      isActive: true,
      lastName: "Wiegand",
      linkUrls: [
        "https://www.linkedin.com/in/robbie-wiegand",
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "fa991044-767b-4b35-8be4-b045091df554",
          namespace: "custom",
          slug: "custom_property",
          value: "tripudio",
        },
      ],
      name: "Robbie Wiegand",
      source: "Advertisement",
      status: "New",
      telephones: [
        {
          telephone: "(643) 984-9521",
          type: "FAX",
        },
        {
          telephone: "(811) 880-0374",
          type: "HOME",
        },
        {
          telephone: "(387) 406-4386",
          type: "OTHER",
        },
      ],
      title: "Future Response Specialist",
      updatedAt: new Date("2020-05-20T22:54:25.145Z"),
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
        address1: "656 Jazlyn Viaduct",
        city: "Port Trinityview",
        countryCode: "US",
        postalCode: "72765-6715",
        region: "West Virginia",
        regionCode: "NJ",
      },
      companyName: "Braun, Bernier and McCullough-MacGyver",
      createdAt: new Date("2019-10-12T11:27:59.003Z"),
      emails: [
        {
          email: "robbie.wiegand@icloud.com",
          type: "WORK",
        },
      ],
      firstName: "Robbie",
      id: "37116953-0f7c-4ef7-8d97-0e8a473b0790",
      isActive: true,
      lastName: "Wiegand",
      linkUrls: [
        "https://www.linkedin.com/in/robbie-wiegand",
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "fa991044-767b-4b35-8be4-b045091df554",
          namespace: "custom",
          slug: "custom_property",
          value: "tripudio",
        },
      ],
      name: "Robbie Wiegand",
      source: "Advertisement",
      status: "New",
      telephones: [
        {
          telephone: "(643) 984-9521",
          type: "FAX",
        },
        {
          telephone: "(811) 880-0374",
          type: "HOME",
        },
        {
          telephone: "(387) 406-4386",
          type: "OTHER",
        },
      ],
      title: "Future Response Specialist",
      updatedAt: new Date("2020-05-20T22:54:25.145Z"),
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

## removeCrmLead

Deletes the CrmLead identified by `id`.

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
  const result = await unifiedTo.lead.removeCrmLead({
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

## updateCrmLead

Updates the CrmLead identified by `id`. Provide the unified CrmLead fields to change in the request body.

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
  const result = await unifiedTo.lead.updateCrmLead({
    crmLead: {
      address: {
        address1: "656 Jazlyn Viaduct",
        city: "Port Trinityview",
        countryCode: "US",
        postalCode: "72765-6715",
        region: "West Virginia",
        regionCode: "NJ",
      },
      companyName: "Braun, Bernier and McCullough-MacGyver",
      createdAt: new Date("2019-10-12T11:27:59.003Z"),
      emails: [
        {
          email: "robbie.wiegand@icloud.com",
          type: "WORK",
        },
      ],
      firstName: "Robbie",
      id: "37116953-0f7c-4ef7-8d97-0e8a473b0790",
      isActive: true,
      lastName: "Wiegand",
      linkUrls: [
        "https://www.linkedin.com/in/robbie-wiegand",
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "fa991044-767b-4b35-8be4-b045091df554",
          namespace: "custom",
          slug: "custom_property",
          value: "tripudio",
        },
      ],
      name: "Robbie Wiegand",
      source: "Advertisement",
      status: "New",
      telephones: [
        {
          telephone: "(643) 984-9521",
          type: "FAX",
        },
        {
          telephone: "(811) 880-0374",
          type: "HOME",
        },
        {
          telephone: "(387) 406-4386",
          type: "OTHER",
        },
      ],
      title: "Future Response Specialist",
      updatedAt: new Date("2020-05-20T22:54:25.145Z"),
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
        address1: "656 Jazlyn Viaduct",
        city: "Port Trinityview",
        countryCode: "US",
        postalCode: "72765-6715",
        region: "West Virginia",
        regionCode: "NJ",
      },
      companyName: "Braun, Bernier and McCullough-MacGyver",
      createdAt: new Date("2019-10-12T11:27:59.003Z"),
      emails: [
        {
          email: "robbie.wiegand@icloud.com",
          type: "WORK",
        },
      ],
      firstName: "Robbie",
      id: "37116953-0f7c-4ef7-8d97-0e8a473b0790",
      isActive: true,
      lastName: "Wiegand",
      linkUrls: [
        "https://www.linkedin.com/in/robbie-wiegand",
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "fa991044-767b-4b35-8be4-b045091df554",
          namespace: "custom",
          slug: "custom_property",
          value: "tripudio",
        },
      ],
      name: "Robbie Wiegand",
      source: "Advertisement",
      status: "New",
      telephones: [
        {
          telephone: "(643) 984-9521",
          type: "FAX",
        },
        {
          telephone: "(811) 880-0374",
          type: "HOME",
        },
        {
          telephone: "(387) 406-4386",
          type: "OTHER",
        },
      ],
      title: "Future Response Specialist",
      updatedAt: new Date("2020-05-20T22:54:25.145Z"),
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