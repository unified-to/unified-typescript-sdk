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
      id: "8663ac5d-86ea-4cb4-b2c5-f0bc733b53e0",
      isActive: false,
      isFeatured: false,
      isTaxable: true,
      isVisible: true,
      media: [
        {
          alt: "Eveniet acies.",
          height: 876,
          id: "e2658188-9821-473c-af53-0182cfe0951e",
          metadata: [
            {
              id: "ead3ea7c-8087-4446-a489-1b55f4863769",
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
          id: "afbf0e0f-71ce-41ab-b2d6-be8cdb1c7a65",
          metadata: [
            {
              id: "3359aa38-3c7d-407e-a44f-3c48e8360e8b",
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
          id: "f2ad7fd0-96a2-4134-a56c-748697d31369",
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
      updatedAt: new Date("2022-05-03T09:19:07.791Z"),
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
      id: "8663ac5d-86ea-4cb4-b2c5-f0bc733b53e0",
      isActive: false,
      isFeatured: false,
      isTaxable: true,
      isVisible: true,
      media: [
        {
          alt: "Eveniet acies.",
          height: 876,
          id: "e2658188-9821-473c-af53-0182cfe0951e",
          metadata: [
            {
              id: "ead3ea7c-8087-4446-a489-1b55f4863769",
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
          id: "afbf0e0f-71ce-41ab-b2d6-be8cdb1c7a65",
          metadata: [
            {
              id: "3359aa38-3c7d-407e-a44f-3c48e8360e8b",
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
          id: "f2ad7fd0-96a2-4134-a56c-748697d31369",
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
      updatedAt: new Date("2022-05-03T09:19:07.791Z"),
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
      id: "1db77f11-3fe6-4836-b9ed-1b739523c144",
      isActive: false,
      isFeatured: false,
      isTaxable: true,
      isVisible: true,
      media: [
        {
          alt: "Eveniet acies.",
          height: 876,
          id: "7dff086c-0f6f-4ac8-b837-c9d4c4fb4bfe",
          metadata: [
            {
              id: "bce931e1-a013-4796-b8fe-441d0d6bbd16",
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
          id: "e00533f3-34a3-482f-a41f-295fd03318ee",
          metadata: [
            {
              id: "caea8113-7dbf-4b98-80ce-42661d3667f0",
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
          id: "7b2aea54-4d88-4360-804b-694bf47d7389",
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
      updatedAt: new Date("2022-05-03T09:19:07.812Z"),
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
      id: "1db77f11-3fe6-4836-b9ed-1b739523c144",
      isActive: false,
      isFeatured: false,
      isTaxable: true,
      isVisible: true,
      media: [
        {
          alt: "Eveniet acies.",
          height: 876,
          id: "7dff086c-0f6f-4ac8-b837-c9d4c4fb4bfe",
          metadata: [
            {
              id: "bce931e1-a013-4796-b8fe-441d0d6bbd16",
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
          id: "e00533f3-34a3-482f-a41f-295fd03318ee",
          metadata: [
            {
              id: "caea8113-7dbf-4b98-80ce-42661d3667f0",
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
          id: "7b2aea54-4d88-4360-804b-694bf47d7389",
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
      updatedAt: new Date("2022-05-03T09:19:07.812Z"),
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
      id: "1db77f11-3fe6-4836-b9ed-1b739523c144",
      isActive: false,
      isFeatured: false,
      isTaxable: true,
      isVisible: true,
      media: [
        {
          alt: "Eveniet acies.",
          height: 876,
          id: "7dff086c-0f6f-4ac8-b837-c9d4c4fb4bfe",
          metadata: [
            {
              id: "bce931e1-a013-4796-b8fe-441d0d6bbd16",
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
          id: "e00533f3-34a3-482f-a41f-295fd03318ee",
          metadata: [
            {
              id: "caea8113-7dbf-4b98-80ce-42661d3667f0",
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
          id: "7b2aea54-4d88-4360-804b-694bf47d7389",
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
      updatedAt: new Date("2022-05-03T09:19:07.812Z"),
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
      id: "1db77f11-3fe6-4836-b9ed-1b739523c144",
      isActive: false,
      isFeatured: false,
      isTaxable: true,
      isVisible: true,
      media: [
        {
          alt: "Eveniet acies.",
          height: 876,
          id: "7dff086c-0f6f-4ac8-b837-c9d4c4fb4bfe",
          metadata: [
            {
              id: "bce931e1-a013-4796-b8fe-441d0d6bbd16",
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
          id: "e00533f3-34a3-482f-a41f-295fd03318ee",
          metadata: [
            {
              id: "caea8113-7dbf-4b98-80ce-42661d3667f0",
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
          id: "7b2aea54-4d88-4360-804b-694bf47d7389",
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
      updatedAt: new Date("2022-05-03T09:19:07.812Z"),
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