# Deal

## Overview

### Available Operations

* [createCrmDeal](#createcrmdeal) - Create a deal
* [getCrmDeal](#getcrmdeal) - Retrieve a deal
* [listCrmDeals](#listcrmdeals) - List all deals
* [patchCrmDeal](#patchcrmdeal) - Update a deal
* [removeCrmDeal](#removecrmdeal) - Remove a deal
* [updateCrmDeal](#updatecrmdeal) - Update a deal

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
  const result = await unifiedTo.deal.createCrmDeal({
    crmDeal: {
      amount: 98162,
      closedAt: new Date("2024-03-04T03:42:33.293Z"),
      closingAt: new Date("2025-08-11T17:45:27.374Z"),
      createdAt: new Date("2023-07-04T12:48:48.470Z"),
      currency: "IQD",
      description: "Tabula cicuta sophismata comis tepidus sit cavus.",
      id: "e77492f0-b53c-4d4d-b3ef-85d2d39be486",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "e1c225b7-8757-4f46-8c4d-ee1d832af116",
          namespace: "custom",
          slug: "custom_property",
          value: "conatus",
        },
      ],
      name: "Frozen Silk Chicken",
      pipelines: [
        {
          id: "8922651b-a8c6-4754-a2fc-da9720b7ce19",
          name: "trans",
        },
      ],
      probability: 65,
      source: "cubo",
      stages: [
        {
          id: "0c4358bb-e675-499a-9912-7251e4ede38c",
          name: "tubineus",
        },
        {
          id: "ef1f5757-5d28-46e5-bbbc-0efde5730f83",
          name: "adfectus",
        },
      ],
      tags: [
        "causa",
        "suus",
      ],
      updatedAt: new Date("2024-09-30T05:08:02.851Z"),
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
      closedAt: new Date("2024-03-04T03:42:33.293Z"),
      closingAt: new Date("2025-08-11T17:45:27.374Z"),
      createdAt: new Date("2023-07-04T12:48:48.470Z"),
      currency: "IQD",
      description: "Tabula cicuta sophismata comis tepidus sit cavus.",
      id: "e77492f0-b53c-4d4d-b3ef-85d2d39be486",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "e1c225b7-8757-4f46-8c4d-ee1d832af116",
          namespace: "custom",
          slug: "custom_property",
          value: "conatus",
        },
      ],
      name: "Frozen Silk Chicken",
      pipelines: [
        {
          id: "8922651b-a8c6-4754-a2fc-da9720b7ce19",
          name: "trans",
        },
      ],
      probability: 65,
      source: "cubo",
      stages: [
        {
          id: "0c4358bb-e675-499a-9912-7251e4ede38c",
          name: "tubineus",
        },
        {
          id: "ef1f5757-5d28-46e5-bbbc-0efde5730f83",
          name: "adfectus",
        },
      ],
      tags: [
        "causa",
        "suus",
      ],
      updatedAt: new Date("2024-09-30T05:08:02.851Z"),
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
  const result = await unifiedTo.deal.getCrmDeal({
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
  const result = await unifiedTo.deal.listCrmDeals({
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
  const result = await unifiedTo.deal.patchCrmDeal({
    crmDeal: {
      amount: 98162,
      closedAt: new Date("2024-03-04T03:42:33.297Z"),
      closingAt: new Date("2025-08-11T17:45:27.385Z"),
      createdAt: new Date("2023-07-04T12:48:48.470Z"),
      currency: "IQD",
      description: "Tabula cicuta sophismata comis tepidus sit cavus.",
      id: "a6dd5bf7-ba96-4e40-a0a0-9e3d65c59226",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "464a8175-f552-4506-9788-c870b7a0cb49",
          namespace: "custom",
          slug: "custom_property",
          value: "conatus",
        },
      ],
      name: "Frozen Silk Chicken",
      pipelines: [
        {
          id: "ffafefa5-2e31-4297-94a4-77985a194477",
          name: "trans",
        },
      ],
      probability: 65,
      source: "cubo",
      stages: [
        {
          id: "e574073c-430c-424c-a2ef-cad6abbbe0a4",
          name: "tubineus",
        },
        {
          id: "e0b01341-4d13-4d8b-9014-191221d8348c",
          name: "adfectus",
        },
      ],
      tags: [
        "causa",
        "suus",
      ],
      updatedAt: new Date("2024-09-30T05:08:02.858Z"),
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
      closedAt: new Date("2024-03-04T03:42:33.297Z"),
      closingAt: new Date("2025-08-11T17:45:27.385Z"),
      createdAt: new Date("2023-07-04T12:48:48.470Z"),
      currency: "IQD",
      description: "Tabula cicuta sophismata comis tepidus sit cavus.",
      id: "a6dd5bf7-ba96-4e40-a0a0-9e3d65c59226",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "464a8175-f552-4506-9788-c870b7a0cb49",
          namespace: "custom",
          slug: "custom_property",
          value: "conatus",
        },
      ],
      name: "Frozen Silk Chicken",
      pipelines: [
        {
          id: "ffafefa5-2e31-4297-94a4-77985a194477",
          name: "trans",
        },
      ],
      probability: 65,
      source: "cubo",
      stages: [
        {
          id: "e574073c-430c-424c-a2ef-cad6abbbe0a4",
          name: "tubineus",
        },
        {
          id: "e0b01341-4d13-4d8b-9014-191221d8348c",
          name: "adfectus",
        },
      ],
      tags: [
        "causa",
        "suus",
      ],
      updatedAt: new Date("2024-09-30T05:08:02.858Z"),
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
  const result = await unifiedTo.deal.removeCrmDeal({
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
  const result = await unifiedTo.deal.updateCrmDeal({
    crmDeal: {
      amount: 98162,
      closedAt: new Date("2024-03-04T03:42:33.297Z"),
      closingAt: new Date("2025-08-11T17:45:27.385Z"),
      createdAt: new Date("2023-07-04T12:48:48.470Z"),
      currency: "IQD",
      description: "Tabula cicuta sophismata comis tepidus sit cavus.",
      id: "a6dd5bf7-ba96-4e40-a0a0-9e3d65c59226",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "464a8175-f552-4506-9788-c870b7a0cb49",
          namespace: "custom",
          slug: "custom_property",
          value: "conatus",
        },
      ],
      name: "Frozen Silk Chicken",
      pipelines: [
        {
          id: "ffafefa5-2e31-4297-94a4-77985a194477",
          name: "trans",
        },
      ],
      probability: 65,
      source: "cubo",
      stages: [
        {
          id: "e574073c-430c-424c-a2ef-cad6abbbe0a4",
          name: "tubineus",
        },
        {
          id: "e0b01341-4d13-4d8b-9014-191221d8348c",
          name: "adfectus",
        },
      ],
      tags: [
        "causa",
        "suus",
      ],
      updatedAt: new Date("2024-09-30T05:08:02.858Z"),
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
      closedAt: new Date("2024-03-04T03:42:33.297Z"),
      closingAt: new Date("2025-08-11T17:45:27.385Z"),
      createdAt: new Date("2023-07-04T12:48:48.470Z"),
      currency: "IQD",
      description: "Tabula cicuta sophismata comis tepidus sit cavus.",
      id: "a6dd5bf7-ba96-4e40-a0a0-9e3d65c59226",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "464a8175-f552-4506-9788-c870b7a0cb49",
          namespace: "custom",
          slug: "custom_property",
          value: "conatus",
        },
      ],
      name: "Frozen Silk Chicken",
      pipelines: [
        {
          id: "ffafefa5-2e31-4297-94a4-77985a194477",
          name: "trans",
        },
      ],
      probability: 65,
      source: "cubo",
      stages: [
        {
          id: "e574073c-430c-424c-a2ef-cad6abbbe0a4",
          name: "tubineus",
        },
        {
          id: "e0b01341-4d13-4d8b-9014-191221d8348c",
          name: "adfectus",
        },
      ],
      tags: [
        "causa",
        "suus",
      ],
      updatedAt: new Date("2024-09-30T05:08:02.858Z"),
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