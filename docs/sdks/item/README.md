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

Create an item

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
      description: "Vulnero ustulo abeo.",
      duration: 87,
      globalCode: "calamitas",
      id: "c057163b-fcce-448f-82b2-1bd6ea8fab6b",
      isActive: false,
      isFeatured: true,
      isTaxable: true,
      isVisible: true,
      media: [
        {
          alt: "Caterva eveniet acies candidus.",
          height: 663,
          id: "827b5384-4ee7-4c0e-981b-383abb929621",
          metadata: [
            {
              id: "77bc30cd-3634-430f-8b5d-047cf109b364",
              slug: "doloremque",
              value: "allatus",
            },
          ],
          position: 67,
          type: "video",
          url: "https://picsum.photos/seed/73y0uzyK/972/3753",
          width: 88,
        },
        {
          alt: "Comedo.",
          height: 189,
          id: "4d646438-c08f-4e1e-8845-e518ebbb717f",
          metadata: [
            {
              id: "4c997afb-1fd7-44c1-8d8e-a50b4d99bc34",
              slug: "bis",
              value: "somniculosus",
            },
          ],
          position: 3,
          type: "image",
          url: "https://picsum.photos/seed/Ao4iatfO/771/3906",
          width: 66,
        },
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "6555691c-b7dc-450d-8eee-923b103931df",
          namespace: "custom",
          slug: "custom_property",
          value: "terebro",
        },
      ],
      name: "Handcrafted Rubber Tuna",
      prices: [
        {
          compareAtPrice: 474,
          currency: "OMR",
          price: 1438,
        },
      ],
      publicDescription: "Custodia ventus solio compono.",
      publicName: "Handcrafted Rubber Tuna",
      requiresShipping: true,
      slug: "cohors-turba-optio",
      tags: [
        "blanditiis",
        "tandem",
      ],
      totalStock: 579,
      type: "beatae",
      updatedAt: new Date("2022-04-16T06:57:13.062Z"),
      vendorName: "Mayer - Flatley",
      weight: 22,
      weightUnit: "kg",
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
      description: "Vulnero ustulo abeo.",
      duration: 87,
      globalCode: "calamitas",
      id: "c057163b-fcce-448f-82b2-1bd6ea8fab6b",
      isActive: false,
      isFeatured: true,
      isTaxable: true,
      isVisible: true,
      media: [
        {
          alt: "Caterva eveniet acies candidus.",
          height: 663,
          id: "827b5384-4ee7-4c0e-981b-383abb929621",
          metadata: [
            {
              id: "77bc30cd-3634-430f-8b5d-047cf109b364",
              slug: "doloremque",
              value: "allatus",
            },
          ],
          position: 67,
          type: "video",
          url: "https://picsum.photos/seed/73y0uzyK/972/3753",
          width: 88,
        },
        {
          alt: "Comedo.",
          height: 189,
          id: "4d646438-c08f-4e1e-8845-e518ebbb717f",
          metadata: [
            {
              id: "4c997afb-1fd7-44c1-8d8e-a50b4d99bc34",
              slug: "bis",
              value: "somniculosus",
            },
          ],
          position: 3,
          type: "image",
          url: "https://picsum.photos/seed/Ao4iatfO/771/3906",
          width: 66,
        },
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "6555691c-b7dc-450d-8eee-923b103931df",
          namespace: "custom",
          slug: "custom_property",
          value: "terebro",
        },
      ],
      name: "Handcrafted Rubber Tuna",
      prices: [
        {
          compareAtPrice: 474,
          currency: "OMR",
          price: 1438,
        },
      ],
      publicDescription: "Custodia ventus solio compono.",
      publicName: "Handcrafted Rubber Tuna",
      requiresShipping: true,
      slug: "cohors-turba-optio",
      tags: [
        "blanditiis",
        "tandem",
      ],
      totalStock: 579,
      type: "beatae",
      updatedAt: new Date("2022-04-16T06:57:13.062Z"),
      vendorName: "Mayer - Flatley",
      weight: 22,
      weightUnit: "kg",
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

Retrieve an item

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

List all items

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

Update an item

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
      description: "Vulnero ustulo abeo.",
      duration: 87,
      globalCode: "calamitas",
      id: "8eb35db2-2f01-4fc6-98d3-72a82fd4519f",
      isActive: false,
      isFeatured: true,
      isTaxable: true,
      isVisible: true,
      media: [
        {
          alt: "Caterva eveniet acies candidus.",
          height: 663,
          id: "a7fbc342-b71a-47ab-847c-91fb73524341",
          metadata: [
            {
              id: "de58979c-bce0-4034-9727-2c308815d727",
              slug: "doloremque",
              value: "allatus",
            },
          ],
          position: 67,
          type: "video",
          url: "https://picsum.photos/seed/73y0uzyK/972/3753",
          width: 88,
        },
        {
          alt: "Comedo.",
          height: 189,
          id: "f55be2ea-b454-462e-9fbd-2550a7174c79",
          metadata: [
            {
              id: "2db69303-ace7-4c73-bad5-30776ace6c94",
              slug: "bis",
              value: "somniculosus",
            },
          ],
          position: 3,
          type: "image",
          url: "https://picsum.photos/seed/Ao4iatfO/771/3906",
          width: 66,
        },
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "489cf56b-b13e-4513-a86c-1512d3f7e905",
          namespace: "custom",
          slug: "custom_property",
          value: "terebro",
        },
      ],
      name: "Handcrafted Rubber Tuna",
      prices: [
        {
          compareAtPrice: 474,
          currency: "OMR",
          price: 1438,
        },
      ],
      publicDescription: "Custodia ventus solio compono.",
      publicName: "Handcrafted Rubber Tuna",
      requiresShipping: true,
      slug: "cohors-turba-optio",
      tags: [
        "blanditiis",
        "tandem",
      ],
      totalStock: 579,
      type: "beatae",
      updatedAt: new Date("2022-04-16T06:57:13.076Z"),
      vendorName: "Mayer - Flatley",
      weight: 22,
      weightUnit: "kg",
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
      description: "Vulnero ustulo abeo.",
      duration: 87,
      globalCode: "calamitas",
      id: "8eb35db2-2f01-4fc6-98d3-72a82fd4519f",
      isActive: false,
      isFeatured: true,
      isTaxable: true,
      isVisible: true,
      media: [
        {
          alt: "Caterva eveniet acies candidus.",
          height: 663,
          id: "a7fbc342-b71a-47ab-847c-91fb73524341",
          metadata: [
            {
              id: "de58979c-bce0-4034-9727-2c308815d727",
              slug: "doloremque",
              value: "allatus",
            },
          ],
          position: 67,
          type: "video",
          url: "https://picsum.photos/seed/73y0uzyK/972/3753",
          width: 88,
        },
        {
          alt: "Comedo.",
          height: 189,
          id: "f55be2ea-b454-462e-9fbd-2550a7174c79",
          metadata: [
            {
              id: "2db69303-ace7-4c73-bad5-30776ace6c94",
              slug: "bis",
              value: "somniculosus",
            },
          ],
          position: 3,
          type: "image",
          url: "https://picsum.photos/seed/Ao4iatfO/771/3906",
          width: 66,
        },
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "489cf56b-b13e-4513-a86c-1512d3f7e905",
          namespace: "custom",
          slug: "custom_property",
          value: "terebro",
        },
      ],
      name: "Handcrafted Rubber Tuna",
      prices: [
        {
          compareAtPrice: 474,
          currency: "OMR",
          price: 1438,
        },
      ],
      publicDescription: "Custodia ventus solio compono.",
      publicName: "Handcrafted Rubber Tuna",
      requiresShipping: true,
      slug: "cohors-turba-optio",
      tags: [
        "blanditiis",
        "tandem",
      ],
      totalStock: 579,
      type: "beatae",
      updatedAt: new Date("2022-04-16T06:57:13.076Z"),
      vendorName: "Mayer - Flatley",
      weight: 22,
      weightUnit: "kg",
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

Remove an item

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

Update an item

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
      description: "Vulnero ustulo abeo.",
      duration: 87,
      globalCode: "calamitas",
      id: "8eb35db2-2f01-4fc6-98d3-72a82fd4519f",
      isActive: false,
      isFeatured: true,
      isTaxable: true,
      isVisible: true,
      media: [
        {
          alt: "Caterva eveniet acies candidus.",
          height: 663,
          id: "a7fbc342-b71a-47ab-847c-91fb73524341",
          metadata: [
            {
              id: "de58979c-bce0-4034-9727-2c308815d727",
              slug: "doloremque",
              value: "allatus",
            },
          ],
          position: 67,
          type: "video",
          url: "https://picsum.photos/seed/73y0uzyK/972/3753",
          width: 88,
        },
        {
          alt: "Comedo.",
          height: 189,
          id: "f55be2ea-b454-462e-9fbd-2550a7174c79",
          metadata: [
            {
              id: "2db69303-ace7-4c73-bad5-30776ace6c94",
              slug: "bis",
              value: "somniculosus",
            },
          ],
          position: 3,
          type: "image",
          url: "https://picsum.photos/seed/Ao4iatfO/771/3906",
          width: 66,
        },
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "489cf56b-b13e-4513-a86c-1512d3f7e905",
          namespace: "custom",
          slug: "custom_property",
          value: "terebro",
        },
      ],
      name: "Handcrafted Rubber Tuna",
      prices: [
        {
          compareAtPrice: 474,
          currency: "OMR",
          price: 1438,
        },
      ],
      publicDescription: "Custodia ventus solio compono.",
      publicName: "Handcrafted Rubber Tuna",
      requiresShipping: true,
      slug: "cohors-turba-optio",
      tags: [
        "blanditiis",
        "tandem",
      ],
      totalStock: 579,
      type: "beatae",
      updatedAt: new Date("2022-04-16T06:57:13.076Z"),
      vendorName: "Mayer - Flatley",
      weight: 22,
      weightUnit: "kg",
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
      description: "Vulnero ustulo abeo.",
      duration: 87,
      globalCode: "calamitas",
      id: "8eb35db2-2f01-4fc6-98d3-72a82fd4519f",
      isActive: false,
      isFeatured: true,
      isTaxable: true,
      isVisible: true,
      media: [
        {
          alt: "Caterva eveniet acies candidus.",
          height: 663,
          id: "a7fbc342-b71a-47ab-847c-91fb73524341",
          metadata: [
            {
              id: "de58979c-bce0-4034-9727-2c308815d727",
              slug: "doloremque",
              value: "allatus",
            },
          ],
          position: 67,
          type: "video",
          url: "https://picsum.photos/seed/73y0uzyK/972/3753",
          width: 88,
        },
        {
          alt: "Comedo.",
          height: 189,
          id: "f55be2ea-b454-462e-9fbd-2550a7174c79",
          metadata: [
            {
              id: "2db69303-ace7-4c73-bad5-30776ace6c94",
              slug: "bis",
              value: "somniculosus",
            },
          ],
          position: 3,
          type: "image",
          url: "https://picsum.photos/seed/Ao4iatfO/771/3906",
          width: 66,
        },
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "489cf56b-b13e-4513-a86c-1512d3f7e905",
          namespace: "custom",
          slug: "custom_property",
          value: "terebro",
        },
      ],
      name: "Handcrafted Rubber Tuna",
      prices: [
        {
          compareAtPrice: 474,
          currency: "OMR",
          price: 1438,
        },
      ],
      publicDescription: "Custodia ventus solio compono.",
      publicName: "Handcrafted Rubber Tuna",
      requiresShipping: true,
      slug: "cohors-turba-optio",
      tags: [
        "blanditiis",
        "tandem",
      ],
      totalStock: 579,
      type: "beatae",
      updatedAt: new Date("2022-04-16T06:57:13.076Z"),
      vendorName: "Mayer - Flatley",
      weight: 22,
      weightUnit: "kg",
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