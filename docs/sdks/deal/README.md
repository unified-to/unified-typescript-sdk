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
      closedAt: new Date("2024-03-03T20:19:43.644Z"),
      closingAt: new Date("2025-08-10T18:27:16.565Z"),
      createdAt: new Date("2023-07-04T12:48:48.470Z"),
      currency: "IQD",
      description: "Tabula cicuta sophismata comis tepidus sit cavus.",
      id: "65023b3b-6233-4971-a2a7-5279069c6fe0",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "1b85be14-5e6c-47c3-8de9-611a7204770f",
          namespace: "custom",
          slug: "custom_property",
          value: "conatus",
        },
      ],
      name: "Frozen Silk Chicken",
      pipelines: [
        {
          id: "6c1141b1-e956-4afa-b736-fe4d8e00405d",
          name: "trans",
        },
      ],
      probability: 65,
      source: "cubo",
      stages: [
        {
          id: "9ac747ff-048d-454f-8110-f152c0f07dfa",
          name: "tubineus",
        },
        {
          id: "52fd8b58-9103-418d-aaa8-5aafda4342aa",
          name: "adfectus",
        },
      ],
      tags: [
        "causa",
        "suus",
      ],
      updatedAt: new Date("2024-09-29T15:23:23.799Z"),
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
      closedAt: new Date("2024-03-03T20:19:43.644Z"),
      closingAt: new Date("2025-08-10T18:27:16.565Z"),
      createdAt: new Date("2023-07-04T12:48:48.470Z"),
      currency: "IQD",
      description: "Tabula cicuta sophismata comis tepidus sit cavus.",
      id: "65023b3b-6233-4971-a2a7-5279069c6fe0",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "1b85be14-5e6c-47c3-8de9-611a7204770f",
          namespace: "custom",
          slug: "custom_property",
          value: "conatus",
        },
      ],
      name: "Frozen Silk Chicken",
      pipelines: [
        {
          id: "6c1141b1-e956-4afa-b736-fe4d8e00405d",
          name: "trans",
        },
      ],
      probability: 65,
      source: "cubo",
      stages: [
        {
          id: "9ac747ff-048d-454f-8110-f152c0f07dfa",
          name: "tubineus",
        },
        {
          id: "52fd8b58-9103-418d-aaa8-5aafda4342aa",
          name: "adfectus",
        },
      ],
      tags: [
        "causa",
        "suus",
      ],
      updatedAt: new Date("2024-09-29T15:23:23.799Z"),
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
      closedAt: new Date("2024-03-03T20:19:43.648Z"),
      closingAt: new Date("2025-08-10T18:27:16.580Z"),
      createdAt: new Date("2023-07-04T12:48:48.470Z"),
      currency: "IQD",
      description: "Tabula cicuta sophismata comis tepidus sit cavus.",
      id: "73108402-8c3a-41bb-8761-fabdd28d8a3e",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "61f40e19-9ed5-4f4e-bf1d-3021a39513a9",
          namespace: "custom",
          slug: "custom_property",
          value: "conatus",
        },
      ],
      name: "Frozen Silk Chicken",
      pipelines: [
        {
          id: "b6ecd991-cf05-45f3-9d38-337e7cbd488e",
          name: "trans",
        },
      ],
      probability: 65,
      source: "cubo",
      stages: [
        {
          id: "a2bb3dd8-9944-429d-9e14-b5e0c203d2c4",
          name: "tubineus",
        },
        {
          id: "202e0e54-e4eb-4d99-b67b-328f0691f7ec",
          name: "adfectus",
        },
      ],
      tags: [
        "causa",
        "suus",
      ],
      updatedAt: new Date("2024-09-29T15:23:23.807Z"),
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
      closedAt: new Date("2024-03-03T20:19:43.648Z"),
      closingAt: new Date("2025-08-10T18:27:16.580Z"),
      createdAt: new Date("2023-07-04T12:48:48.470Z"),
      currency: "IQD",
      description: "Tabula cicuta sophismata comis tepidus sit cavus.",
      id: "73108402-8c3a-41bb-8761-fabdd28d8a3e",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "61f40e19-9ed5-4f4e-bf1d-3021a39513a9",
          namespace: "custom",
          slug: "custom_property",
          value: "conatus",
        },
      ],
      name: "Frozen Silk Chicken",
      pipelines: [
        {
          id: "b6ecd991-cf05-45f3-9d38-337e7cbd488e",
          name: "trans",
        },
      ],
      probability: 65,
      source: "cubo",
      stages: [
        {
          id: "a2bb3dd8-9944-429d-9e14-b5e0c203d2c4",
          name: "tubineus",
        },
        {
          id: "202e0e54-e4eb-4d99-b67b-328f0691f7ec",
          name: "adfectus",
        },
      ],
      tags: [
        "causa",
        "suus",
      ],
      updatedAt: new Date("2024-09-29T15:23:23.807Z"),
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
      closedAt: new Date("2024-03-03T20:19:43.648Z"),
      closingAt: new Date("2025-08-10T18:27:16.580Z"),
      createdAt: new Date("2023-07-04T12:48:48.470Z"),
      currency: "IQD",
      description: "Tabula cicuta sophismata comis tepidus sit cavus.",
      id: "73108402-8c3a-41bb-8761-fabdd28d8a3e",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "61f40e19-9ed5-4f4e-bf1d-3021a39513a9",
          namespace: "custom",
          slug: "custom_property",
          value: "conatus",
        },
      ],
      name: "Frozen Silk Chicken",
      pipelines: [
        {
          id: "b6ecd991-cf05-45f3-9d38-337e7cbd488e",
          name: "trans",
        },
      ],
      probability: 65,
      source: "cubo",
      stages: [
        {
          id: "a2bb3dd8-9944-429d-9e14-b5e0c203d2c4",
          name: "tubineus",
        },
        {
          id: "202e0e54-e4eb-4d99-b67b-328f0691f7ec",
          name: "adfectus",
        },
      ],
      tags: [
        "causa",
        "suus",
      ],
      updatedAt: new Date("2024-09-29T15:23:23.807Z"),
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
      closedAt: new Date("2024-03-03T20:19:43.648Z"),
      closingAt: new Date("2025-08-10T18:27:16.580Z"),
      createdAt: new Date("2023-07-04T12:48:48.470Z"),
      currency: "IQD",
      description: "Tabula cicuta sophismata comis tepidus sit cavus.",
      id: "73108402-8c3a-41bb-8761-fabdd28d8a3e",
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "61f40e19-9ed5-4f4e-bf1d-3021a39513a9",
          namespace: "custom",
          slug: "custom_property",
          value: "conatus",
        },
      ],
      name: "Frozen Silk Chicken",
      pipelines: [
        {
          id: "b6ecd991-cf05-45f3-9d38-337e7cbd488e",
          name: "trans",
        },
      ],
      probability: 65,
      source: "cubo",
      stages: [
        {
          id: "a2bb3dd8-9944-429d-9e14-b5e0c203d2c4",
          name: "tubineus",
        },
        {
          id: "202e0e54-e4eb-4d99-b67b-328f0691f7ec",
          name: "adfectus",
        },
      ],
      tags: [
        "causa",
        "suus",
      ],
      updatedAt: new Date("2024-09-29T15:23:23.807Z"),
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