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
      id: "6ef1a41a-1d50-4706-af0b-0934a06f9290",
      isActive: false,
      isFeatured: true,
      isTaxable: true,
      isVisible: true,
      media: [
        {
          alt: "Caterva eveniet acies candidus.",
          height: 663,
          id: "7720d952-3868-4ee7-baa9-d2389b03324a",
          metadata: [
            {
              id: "349da898-d6c4-4e37-8927-46ca170fdc33",
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
          id: "1e71d510-533c-4292-8d84-feb7bdbaa094",
          metadata: [
            {
              id: "4a408ea9-c8a0-439e-99a2-23f6b7aaeb08",
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
          id: "56c11cf6-15a4-4067-9507-9449fec32c39",
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
      updatedAt: new Date("2022-04-18T16:22:20.061Z"),
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
      id: "6ef1a41a-1d50-4706-af0b-0934a06f9290",
      isActive: false,
      isFeatured: true,
      isTaxable: true,
      isVisible: true,
      media: [
        {
          alt: "Caterva eveniet acies candidus.",
          height: 663,
          id: "7720d952-3868-4ee7-baa9-d2389b03324a",
          metadata: [
            {
              id: "349da898-d6c4-4e37-8927-46ca170fdc33",
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
          id: "1e71d510-533c-4292-8d84-feb7bdbaa094",
          metadata: [
            {
              id: "4a408ea9-c8a0-439e-99a2-23f6b7aaeb08",
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
          id: "56c11cf6-15a4-4067-9507-9449fec32c39",
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
      updatedAt: new Date("2022-04-18T16:22:20.061Z"),
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
      id: "b4d46565-7d88-4d91-ad73-5e0108d55ca9",
      isActive: false,
      isFeatured: true,
      isTaxable: true,
      isVisible: true,
      media: [
        {
          alt: "Caterva eveniet acies candidus.",
          height: 663,
          id: "86909855-ff74-4941-adc1-b7f3a93c3e38",
          metadata: [
            {
              id: "5224a0e2-f549-405b-87b9-a8b63455f93b",
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
          id: "7d880c81-5034-4bd3-88ba-8b7494d645cc",
          metadata: [
            {
              id: "5861a28a-e2c8-41d2-97bd-f558f8eb7876",
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
          id: "47f04f7d-3698-4dc1-bedc-753e6f3185dd",
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
      updatedAt: new Date("2022-04-18T16:22:20.074Z"),
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
      id: "b4d46565-7d88-4d91-ad73-5e0108d55ca9",
      isActive: false,
      isFeatured: true,
      isTaxable: true,
      isVisible: true,
      media: [
        {
          alt: "Caterva eveniet acies candidus.",
          height: 663,
          id: "86909855-ff74-4941-adc1-b7f3a93c3e38",
          metadata: [
            {
              id: "5224a0e2-f549-405b-87b9-a8b63455f93b",
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
          id: "7d880c81-5034-4bd3-88ba-8b7494d645cc",
          metadata: [
            {
              id: "5861a28a-e2c8-41d2-97bd-f558f8eb7876",
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
          id: "47f04f7d-3698-4dc1-bedc-753e6f3185dd",
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
      updatedAt: new Date("2022-04-18T16:22:20.074Z"),
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
      id: "b4d46565-7d88-4d91-ad73-5e0108d55ca9",
      isActive: false,
      isFeatured: true,
      isTaxable: true,
      isVisible: true,
      media: [
        {
          alt: "Caterva eveniet acies candidus.",
          height: 663,
          id: "86909855-ff74-4941-adc1-b7f3a93c3e38",
          metadata: [
            {
              id: "5224a0e2-f549-405b-87b9-a8b63455f93b",
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
          id: "7d880c81-5034-4bd3-88ba-8b7494d645cc",
          metadata: [
            {
              id: "5861a28a-e2c8-41d2-97bd-f558f8eb7876",
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
          id: "47f04f7d-3698-4dc1-bedc-753e6f3185dd",
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
      updatedAt: new Date("2022-04-18T16:22:20.074Z"),
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
      id: "b4d46565-7d88-4d91-ad73-5e0108d55ca9",
      isActive: false,
      isFeatured: true,
      isTaxable: true,
      isVisible: true,
      media: [
        {
          alt: "Caterva eveniet acies candidus.",
          height: 663,
          id: "86909855-ff74-4941-adc1-b7f3a93c3e38",
          metadata: [
            {
              id: "5224a0e2-f549-405b-87b9-a8b63455f93b",
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
          id: "7d880c81-5034-4bd3-88ba-8b7494d645cc",
          metadata: [
            {
              id: "5861a28a-e2c8-41d2-97bd-f558f8eb7876",
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
          id: "47f04f7d-3698-4dc1-bedc-753e6f3185dd",
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
      updatedAt: new Date("2022-04-18T16:22:20.074Z"),
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