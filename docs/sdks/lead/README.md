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
  const result = await unifiedTo.lead.createCrmLead({
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
      id: "5c399df0-ebd2-46ff-8824-c35785883216",
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
          id: "fbe45a6a-3689-4115-9e09-6d36f037697e",
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
      updatedAt: new Date("2020-05-15T02:08:48.275Z"),
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
      id: "5c399df0-ebd2-46ff-8824-c35785883216",
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
          id: "fbe45a6a-3689-4115-9e09-6d36f037697e",
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
      updatedAt: new Date("2020-05-15T02:08:48.275Z"),
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
  const result = await unifiedTo.lead.patchCrmLead({
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
      id: "8fc3f6b3-b14f-498f-8e14-f7301ba4adb4",
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
          id: "30eaaeae-9533-412b-bc42-a1d1a0441a29",
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
      updatedAt: new Date("2020-05-15T02:08:48.278Z"),
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
      id: "8fc3f6b3-b14f-498f-8e14-f7301ba4adb4",
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
          id: "30eaaeae-9533-412b-bc42-a1d1a0441a29",
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
      updatedAt: new Date("2020-05-15T02:08:48.278Z"),
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
  const result = await unifiedTo.lead.updateCrmLead({
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
      id: "8fc3f6b3-b14f-498f-8e14-f7301ba4adb4",
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
          id: "30eaaeae-9533-412b-bc42-a1d1a0441a29",
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
      updatedAt: new Date("2020-05-15T02:08:48.278Z"),
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
      id: "8fc3f6b3-b14f-498f-8e14-f7301ba4adb4",
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
          id: "30eaaeae-9533-412b-bc42-a1d1a0441a29",
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
      updatedAt: new Date("2020-05-15T02:08:48.278Z"),
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