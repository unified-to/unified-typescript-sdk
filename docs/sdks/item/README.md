# Item

## Overview

### Available Operations

* [createCommerceItem](#createcommerceitem) - Create an item
* [getCommerceItem](#getcommerceitem) - Retrieve an item
* [listCommerceItems](#listcommerceitems) - List all items
* [patchCommerceItem](#patchcommerceitem) - Update an item
* [removeCommerceItem](#removecommerceitem) - Remove an item
* [updateCommerceItem](#updatecommerceitem) - Update an item

## createCommerceItem

Creates a CommerceItem. Provide the unified CommerceItem fields in the request body; they are mapped to the provider's API. Returns the created CommerceItem.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createCommerceItem" method="post" path="/commerce/{connection_id}/item" example="commerce_item" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.item.createCommerceItem({
    commerceItem: {
      collections: [],
      createdAt: new Date("2019-06-21T20:16:18.628Z"),
      description: "Abeo surculus custodia ventus solio.",
      duration: 104,
      globalCode: "978-0-85270-680-0",
      id: "d53d478c-3cbe-4880-9d47-23fd407f6ff3",
      isActive: false,
      isFeatured: false,
      isTaxable: true,
      isVisible: true,
      media: [
        {
          alt: "Eveniet acies.",
          height: 876,
          id: "68768e65-74ef-49a8-9eb6-f05f56dce3b3",
          metadata: [
            {
              id: "999a17a7-ff2d-46a9-aefa-8b4bb405d525",
              slug: "candidus",
              value: "doloremque",
            },
          ],
          position: 21,
          type: "video",
          url: "https://picsum.photos/seed/uzyKI/235/2194",
          width: 67,
        },
        {
          alt: "Comedo.",
          height: 651,
          id: "7fd4fceb-d7ec-42db-8fe0-bbb0d3f4bb4e",
          metadata: [
            {
              id: "4c23aa9d-bb74-4b42-8262-33f01570d43e",
              slug: "bis",
              value: "somniculosus",
            },
          ],
          position: 51,
          type: "image",
          url: "https://picsum.photos/seed/NFAo4iatfO/383/771",
          width: 3,
        },
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "aff8fb4b-6824-46f8-8026-d0a0616ff306",
          namespace: "custom",
          slug: "custom_property",
          value: "abstergo",
        },
      ],
      name: "Oriental Gold Tuna",
      prices: [
        {
          currency: "USD",
          price: 78.11,
        },
      ],
      publicDescription: "Adfero neque.",
      publicName: "Oriental Gold Tuna",
      requiresShipping: true,
      slug: "oriental-gold-tuna",
      tags: [
        "dolores",
        "amplus",
      ],
      totalStock: 682,
      type: "SERVICE",
      updatedAt: new Date("2022-05-03T18:24:11.384Z"),
      vendorName: "Rohan - Pouros",
      weight: 37,
      weightUnit: "oz",
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
import { commerceCreateCommerceItem } from "@unified-api/typescript-sdk/funcs/commerceCreateCommerceItem.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceCreateCommerceItem(unifiedTo, {
    commerceItem: {
      collections: [],
      createdAt: new Date("2019-06-21T20:16:18.628Z"),
      description: "Abeo surculus custodia ventus solio.",
      duration: 104,
      globalCode: "978-0-85270-680-0",
      id: "d53d478c-3cbe-4880-9d47-23fd407f6ff3",
      isActive: false,
      isFeatured: false,
      isTaxable: true,
      isVisible: true,
      media: [
        {
          alt: "Eveniet acies.",
          height: 876,
          id: "68768e65-74ef-49a8-9eb6-f05f56dce3b3",
          metadata: [
            {
              id: "999a17a7-ff2d-46a9-aefa-8b4bb405d525",
              slug: "candidus",
              value: "doloremque",
            },
          ],
          position: 21,
          type: "video",
          url: "https://picsum.photos/seed/uzyKI/235/2194",
          width: 67,
        },
        {
          alt: "Comedo.",
          height: 651,
          id: "7fd4fceb-d7ec-42db-8fe0-bbb0d3f4bb4e",
          metadata: [
            {
              id: "4c23aa9d-bb74-4b42-8262-33f01570d43e",
              slug: "bis",
              value: "somniculosus",
            },
          ],
          position: 51,
          type: "image",
          url: "https://picsum.photos/seed/NFAo4iatfO/383/771",
          width: 3,
        },
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "aff8fb4b-6824-46f8-8026-d0a0616ff306",
          namespace: "custom",
          slug: "custom_property",
          value: "abstergo",
        },
      ],
      name: "Oriental Gold Tuna",
      prices: [
        {
          currency: "USD",
          price: 78.11,
        },
      ],
      publicDescription: "Adfero neque.",
      publicName: "Oriental Gold Tuna",
      requiresShipping: true,
      slug: "oriental-gold-tuna",
      tags: [
        "dolores",
        "amplus",
      ],
      totalStock: 682,
      type: "SERVICE",
      updatedAt: new Date("2022-05-03T18:24:11.384Z"),
      vendorName: "Rohan - Pouros",
      weight: 37,
      weightUnit: "oz",
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceCreateCommerceItem failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateCommerceItemRequest](../../sdk/models/operations/createcommerceitemrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceItem](../../sdk/models/shared/commerceitem.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getCommerceItem

Retrieves a single CommerceItem by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCommerceItem" method="get" path="/commerce/{connection_id}/item/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.item.getCommerceItem({
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
import { commerceGetCommerceItem } from "@unified-api/typescript-sdk/funcs/commerceGetCommerceItem.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceGetCommerceItem(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceGetCommerceItem failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCommerceItemRequest](../../sdk/models/operations/getcommerceitemrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceItem](../../sdk/models/shared/commerceitem.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listCommerceItems

Returns a list of CommerceItems. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listCommerceItems" method="get" path="/commerce/{connection_id}/item" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.item.listCommerceItems({
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
import { commerceListCommerceItems } from "@unified-api/typescript-sdk/funcs/commerceListCommerceItems.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceListCommerceItems(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceListCommerceItems failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCommerceItemsRequest](../../sdk/models/operations/listcommerceitemsrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceItem[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchCommerceItem

Updates the CommerceItem identified by `id`. Provide the unified CommerceItem fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchCommerceItem" method="patch" path="/commerce/{connection_id}/item/{id}" example="commerce_item" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.item.patchCommerceItem({
    commerceItem: {
      collections: [],
      createdAt: new Date("2019-06-21T20:16:18.628Z"),
      description: "Abeo surculus custodia ventus solio.",
      duration: 104,
      globalCode: "978-0-85270-680-0",
      id: "34438652-4127-4cb6-afda-190a7ccb6896",
      isActive: false,
      isFeatured: false,
      isTaxable: true,
      isVisible: true,
      media: [
        {
          alt: "Eveniet acies.",
          height: 876,
          id: "84617838-12d5-4bb1-91d1-58d6be96f663",
          metadata: [
            {
              id: "372792b4-2b41-47ce-9eb3-ade16b0c5bb3",
              slug: "candidus",
              value: "doloremque",
            },
          ],
          position: 21,
          type: "video",
          url: "https://picsum.photos/seed/uzyKI/235/2194",
          width: 67,
        },
        {
          alt: "Comedo.",
          height: 651,
          id: "9b6f99d6-8a69-43b2-844b-9bc9e223fd85",
          metadata: [
            {
              id: "aed125bd-604d-42ba-9be0-fc0358b0ac4a",
              slug: "bis",
              value: "somniculosus",
            },
          ],
          position: 51,
          type: "image",
          url: "https://picsum.photos/seed/NFAo4iatfO/383/771",
          width: 3,
        },
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "2cd3d2f1-1fbd-4f2c-a238-77338a9b1d1d",
          namespace: "custom",
          slug: "custom_property",
          value: "abstergo",
        },
      ],
      name: "Oriental Gold Tuna",
      prices: [
        {
          currency: "USD",
          price: 78.11,
        },
      ],
      publicDescription: "Adfero neque.",
      publicName: "Oriental Gold Tuna",
      requiresShipping: true,
      slug: "oriental-gold-tuna",
      tags: [
        "dolores",
        "amplus",
      ],
      totalStock: 682,
      type: "SERVICE",
      updatedAt: new Date("2022-05-03T18:24:11.398Z"),
      vendorName: "Rohan - Pouros",
      weight: 37,
      weightUnit: "oz",
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
import { commercePatchCommerceItem } from "@unified-api/typescript-sdk/funcs/commercePatchCommerceItem.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commercePatchCommerceItem(unifiedTo, {
    commerceItem: {
      collections: [],
      createdAt: new Date("2019-06-21T20:16:18.628Z"),
      description: "Abeo surculus custodia ventus solio.",
      duration: 104,
      globalCode: "978-0-85270-680-0",
      id: "34438652-4127-4cb6-afda-190a7ccb6896",
      isActive: false,
      isFeatured: false,
      isTaxable: true,
      isVisible: true,
      media: [
        {
          alt: "Eveniet acies.",
          height: 876,
          id: "84617838-12d5-4bb1-91d1-58d6be96f663",
          metadata: [
            {
              id: "372792b4-2b41-47ce-9eb3-ade16b0c5bb3",
              slug: "candidus",
              value: "doloremque",
            },
          ],
          position: 21,
          type: "video",
          url: "https://picsum.photos/seed/uzyKI/235/2194",
          width: 67,
        },
        {
          alt: "Comedo.",
          height: 651,
          id: "9b6f99d6-8a69-43b2-844b-9bc9e223fd85",
          metadata: [
            {
              id: "aed125bd-604d-42ba-9be0-fc0358b0ac4a",
              slug: "bis",
              value: "somniculosus",
            },
          ],
          position: 51,
          type: "image",
          url: "https://picsum.photos/seed/NFAo4iatfO/383/771",
          width: 3,
        },
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "2cd3d2f1-1fbd-4f2c-a238-77338a9b1d1d",
          namespace: "custom",
          slug: "custom_property",
          value: "abstergo",
        },
      ],
      name: "Oriental Gold Tuna",
      prices: [
        {
          currency: "USD",
          price: 78.11,
        },
      ],
      publicDescription: "Adfero neque.",
      publicName: "Oriental Gold Tuna",
      requiresShipping: true,
      slug: "oriental-gold-tuna",
      tags: [
        "dolores",
        "amplus",
      ],
      totalStock: 682,
      type: "SERVICE",
      updatedAt: new Date("2022-05-03T18:24:11.398Z"),
      vendorName: "Rohan - Pouros",
      weight: 37,
      weightUnit: "oz",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commercePatchCommerceItem failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchCommerceItemRequest](../../sdk/models/operations/patchcommerceitemrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceItem](../../sdk/models/shared/commerceitem.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeCommerceItem

Deletes the CommerceItem identified by `id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeCommerceItem" method="delete" path="/commerce/{connection_id}/item/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.item.removeCommerceItem({
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
import { commerceRemoveCommerceItem } from "@unified-api/typescript-sdk/funcs/commerceRemoveCommerceItem.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceRemoveCommerceItem(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceRemoveCommerceItem failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveCommerceItemRequest](../../sdk/models/operations/removecommerceitemrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveCommerceItemResponse](../../sdk/models/operations/removecommerceitemresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateCommerceItem

Updates the CommerceItem identified by `id`. Provide the unified CommerceItem fields to change in the request body.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateCommerceItem" method="put" path="/commerce/{connection_id}/item/{id}" example="commerce_item" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.item.updateCommerceItem({
    commerceItem: {
      collections: [],
      createdAt: new Date("2019-06-21T20:16:18.628Z"),
      description: "Abeo surculus custodia ventus solio.",
      duration: 104,
      globalCode: "978-0-85270-680-0",
      id: "34438652-4127-4cb6-afda-190a7ccb6896",
      isActive: false,
      isFeatured: false,
      isTaxable: true,
      isVisible: true,
      media: [
        {
          alt: "Eveniet acies.",
          height: 876,
          id: "84617838-12d5-4bb1-91d1-58d6be96f663",
          metadata: [
            {
              id: "372792b4-2b41-47ce-9eb3-ade16b0c5bb3",
              slug: "candidus",
              value: "doloremque",
            },
          ],
          position: 21,
          type: "video",
          url: "https://picsum.photos/seed/uzyKI/235/2194",
          width: 67,
        },
        {
          alt: "Comedo.",
          height: 651,
          id: "9b6f99d6-8a69-43b2-844b-9bc9e223fd85",
          metadata: [
            {
              id: "aed125bd-604d-42ba-9be0-fc0358b0ac4a",
              slug: "bis",
              value: "somniculosus",
            },
          ],
          position: 51,
          type: "image",
          url: "https://picsum.photos/seed/NFAo4iatfO/383/771",
          width: 3,
        },
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "2cd3d2f1-1fbd-4f2c-a238-77338a9b1d1d",
          namespace: "custom",
          slug: "custom_property",
          value: "abstergo",
        },
      ],
      name: "Oriental Gold Tuna",
      prices: [
        {
          currency: "USD",
          price: 78.11,
        },
      ],
      publicDescription: "Adfero neque.",
      publicName: "Oriental Gold Tuna",
      requiresShipping: true,
      slug: "oriental-gold-tuna",
      tags: [
        "dolores",
        "amplus",
      ],
      totalStock: 682,
      type: "SERVICE",
      updatedAt: new Date("2022-05-03T18:24:11.398Z"),
      vendorName: "Rohan - Pouros",
      weight: 37,
      weightUnit: "oz",
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
import { commerceUpdateCommerceItem } from "@unified-api/typescript-sdk/funcs/commerceUpdateCommerceItem.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceUpdateCommerceItem(unifiedTo, {
    commerceItem: {
      collections: [],
      createdAt: new Date("2019-06-21T20:16:18.628Z"),
      description: "Abeo surculus custodia ventus solio.",
      duration: 104,
      globalCode: "978-0-85270-680-0",
      id: "34438652-4127-4cb6-afda-190a7ccb6896",
      isActive: false,
      isFeatured: false,
      isTaxable: true,
      isVisible: true,
      media: [
        {
          alt: "Eveniet acies.",
          height: 876,
          id: "84617838-12d5-4bb1-91d1-58d6be96f663",
          metadata: [
            {
              id: "372792b4-2b41-47ce-9eb3-ade16b0c5bb3",
              slug: "candidus",
              value: "doloremque",
            },
          ],
          position: 21,
          type: "video",
          url: "https://picsum.photos/seed/uzyKI/235/2194",
          width: 67,
        },
        {
          alt: "Comedo.",
          height: 651,
          id: "9b6f99d6-8a69-43b2-844b-9bc9e223fd85",
          metadata: [
            {
              id: "aed125bd-604d-42ba-9be0-fc0358b0ac4a",
              slug: "bis",
              value: "somniculosus",
            },
          ],
          position: 51,
          type: "image",
          url: "https://picsum.photos/seed/NFAo4iatfO/383/771",
          width: 3,
        },
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "2cd3d2f1-1fbd-4f2c-a238-77338a9b1d1d",
          namespace: "custom",
          slug: "custom_property",
          value: "abstergo",
        },
      ],
      name: "Oriental Gold Tuna",
      prices: [
        {
          currency: "USD",
          price: 78.11,
        },
      ],
      publicDescription: "Adfero neque.",
      publicName: "Oriental Gold Tuna",
      requiresShipping: true,
      slug: "oriental-gold-tuna",
      tags: [
        "dolores",
        "amplus",
      ],
      totalStock: 682,
      type: "SERVICE",
      updatedAt: new Date("2022-05-03T18:24:11.398Z"),
      vendorName: "Rohan - Pouros",
      weight: 37,
      weightUnit: "oz",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceUpdateCommerceItem failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateCommerceItemRequest](../../sdk/models/operations/updatecommerceitemrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceItem](../../sdk/models/shared/commerceitem.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |