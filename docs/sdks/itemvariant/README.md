# Itemvariant

## Overview

### Available Operations

* [createCommerceItemvariant](#createcommerceitemvariant) - Create an itemvariant
* [getCommerceItemvariant](#getcommerceitemvariant) - Retrieve an itemvariant
* [listCommerceItemvariants](#listcommerceitemvariants) - List all itemvariants
* [patchCommerceItemvariant](#patchcommerceitemvariant) - Update an itemvariant
* [removeCommerceItemvariant](#removecommerceitemvariant) - Remove an itemvariant
* [updateCommerceItemvariant](#updatecommerceitemvariant) - Update an itemvariant

## createCommerceItemvariant

Create an itemvariant

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createCommerceItemvariant" method="post" path="/commerce/{connection_id}/itemvariant" example="commerce_itemvariant" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.itemvariant.createCommerceItemvariant({
    commerceItemvariant: {
      availableAt: new Date("2022-02-02T16:10:33.503Z"),
      createdAt: new Date("2022-01-20T13:49:12.968Z"),
      description: "Featuring Helium-enhanced technology, our Chips offers unparalleled helpful performance",
      height: 52,
      id: "bc75d871-6746-4e5c-8968-70f4957ce5d3",
      isActive: false,
      isFeatured: false,
      isVisible: false,
      length: 94,
      media: [
        {
          alt: "Calcar delibero cursim summisse.",
          height: 394,
          id: "6e1fb848-275d-4013-9a39-f6ed377042f7",
          metadata: [
            {
              id: "0fe7d0e0-df68-4baf-ab86-06983a3f8cd6",
              slug: "illo",
              value: "quia",
            },
          ],
          position: 92,
          type: "image",
          url: "https://picsum.photos/seed/u0YdHqlRu/2007/3208",
          width: 54,
        },
        {
          alt: "Civitas acies substantia tergo.",
          height: 351,
          id: "c650425c-202a-4aae-9a03-0faec464457c",
          metadata: [
            {
              id: "1e3d6310-1f4d-469f-9de8-db2251883653",
              slug: "libero",
              value: "capitulus",
            },
          ],
          position: 44,
          type: "image",
          url: "https://loremflickr.com/2230/1237?lock=8628070842159966",
          width: 55,
        },
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "59c00f4c-e45d-4008-91fd-2a3ae1625517",
          namespace: "custom",
          slug: "custom_property",
          value: "nihil",
        },
      ],
      name: "Keyboard",
      options: [
        {
          id: "d673bd44-3101-49de-b7e5-8626cdc50232",
          name: "Steel",
          position: 97,
          values: [
            "Granite",
            "Plastic",
          ],
        },
      ],
      prices: [
        {
          compareAtPrice: 3745,
          currency: "COP",
          price: 4913,
        },
        {
          compareAtPrice: 438,
          currency: "PHP",
          price: 1378,
        },
        {
          compareAtPrice: 1614,
          currency: "PHP",
          price: 8702,
        },
      ],
      publicDescription: "Stylish Soap designed to make you stand out with insistent looks",
      publicName: "Keyboard",
      requiresShipping: false,
      sizeUnit: "cm",
      sku: "978-0-7051-0955-0",
      tags: [
        "vomito",
        "custodia",
      ],
      totalStock: 929,
      updatedAt: new Date("2025-06-14T22:05:34.786Z"),
      weight: 61,
      weightUnit: "oz",
      width: 26,
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
import { commerceCreateCommerceItemvariant } from "@unified-api/typescript-sdk/funcs/commerceCreateCommerceItemvariant.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceCreateCommerceItemvariant(unifiedTo, {
    commerceItemvariant: {
      availableAt: new Date("2022-02-02T16:10:33.503Z"),
      createdAt: new Date("2022-01-20T13:49:12.968Z"),
      description: "Featuring Helium-enhanced technology, our Chips offers unparalleled helpful performance",
      height: 52,
      id: "bc75d871-6746-4e5c-8968-70f4957ce5d3",
      isActive: false,
      isFeatured: false,
      isVisible: false,
      length: 94,
      media: [
        {
          alt: "Calcar delibero cursim summisse.",
          height: 394,
          id: "6e1fb848-275d-4013-9a39-f6ed377042f7",
          metadata: [
            {
              id: "0fe7d0e0-df68-4baf-ab86-06983a3f8cd6",
              slug: "illo",
              value: "quia",
            },
          ],
          position: 92,
          type: "image",
          url: "https://picsum.photos/seed/u0YdHqlRu/2007/3208",
          width: 54,
        },
        {
          alt: "Civitas acies substantia tergo.",
          height: 351,
          id: "c650425c-202a-4aae-9a03-0faec464457c",
          metadata: [
            {
              id: "1e3d6310-1f4d-469f-9de8-db2251883653",
              slug: "libero",
              value: "capitulus",
            },
          ],
          position: 44,
          type: "image",
          url: "https://loremflickr.com/2230/1237?lock=8628070842159966",
          width: 55,
        },
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "59c00f4c-e45d-4008-91fd-2a3ae1625517",
          namespace: "custom",
          slug: "custom_property",
          value: "nihil",
        },
      ],
      name: "Keyboard",
      options: [
        {
          id: "d673bd44-3101-49de-b7e5-8626cdc50232",
          name: "Steel",
          position: 97,
          values: [
            "Granite",
            "Plastic",
          ],
        },
      ],
      prices: [
        {
          compareAtPrice: 3745,
          currency: "COP",
          price: 4913,
        },
        {
          compareAtPrice: 438,
          currency: "PHP",
          price: 1378,
        },
        {
          compareAtPrice: 1614,
          currency: "PHP",
          price: 8702,
        },
      ],
      publicDescription: "Stylish Soap designed to make you stand out with insistent looks",
      publicName: "Keyboard",
      requiresShipping: false,
      sizeUnit: "cm",
      sku: "978-0-7051-0955-0",
      tags: [
        "vomito",
        "custodia",
      ],
      totalStock: 929,
      updatedAt: new Date("2025-06-14T22:05:34.786Z"),
      weight: 61,
      weightUnit: "oz",
      width: 26,
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceCreateCommerceItemvariant failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateCommerceItemvariantRequest](../../sdk/models/operations/createcommerceitemvariantrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceItemvariant](../../sdk/models/shared/commerceitemvariant.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getCommerceItemvariant

Retrieve an itemvariant

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCommerceItemvariant" method="get" path="/commerce/{connection_id}/itemvariant/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.itemvariant.getCommerceItemvariant({
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
import { commerceGetCommerceItemvariant } from "@unified-api/typescript-sdk/funcs/commerceGetCommerceItemvariant.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceGetCommerceItemvariant(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceGetCommerceItemvariant failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCommerceItemvariantRequest](../../sdk/models/operations/getcommerceitemvariantrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceItemvariant](../../sdk/models/shared/commerceitemvariant.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listCommerceItemvariants

List all itemvariants

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listCommerceItemvariants" method="get" path="/commerce/{connection_id}/itemvariant" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.itemvariant.listCommerceItemvariants({
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
import { commerceListCommerceItemvariants } from "@unified-api/typescript-sdk/funcs/commerceListCommerceItemvariants.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceListCommerceItemvariants(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceListCommerceItemvariants failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCommerceItemvariantsRequest](../../sdk/models/operations/listcommerceitemvariantsrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceItemvariant[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchCommerceItemvariant

Update an itemvariant

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchCommerceItemvariant" method="patch" path="/commerce/{connection_id}/itemvariant/{id}" example="commerce_itemvariant" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.itemvariant.patchCommerceItemvariant({
    commerceItemvariant: {
      availableAt: new Date("2022-02-02T16:10:33.503Z"),
      createdAt: new Date("2022-01-20T13:49:12.968Z"),
      description: "Featuring Helium-enhanced technology, our Chips offers unparalleled helpful performance",
      height: 52,
      id: "05fb9ab9-76d2-4146-bf01-61f06cd09e5b",
      isActive: false,
      isFeatured: false,
      isVisible: false,
      length: 94,
      media: [
        {
          alt: "Calcar delibero cursim summisse.",
          height: 394,
          id: "940224e9-419f-478f-a51a-74184fdf7353",
          metadata: [
            {
              id: "3570969f-264b-463b-91b6-1aee4e6f9038",
              slug: "illo",
              value: "quia",
            },
          ],
          position: 92,
          type: "image",
          url: "https://picsum.photos/seed/u0YdHqlRu/2007/3208",
          width: 54,
        },
        {
          alt: "Civitas acies substantia tergo.",
          height: 351,
          id: "ea2d5c8e-31b0-4a48-bb74-71db0495fa1d",
          metadata: [
            {
              id: "8040e4d3-ece2-413f-997a-cf61c4657042",
              slug: "libero",
              value: "capitulus",
            },
          ],
          position: 44,
          type: "image",
          url: "https://loremflickr.com/2230/1237?lock=8628070842159966",
          width: 55,
        },
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "b1d2982a-850e-482f-9e62-ed18e6457c54",
          namespace: "custom",
          slug: "custom_property",
          value: "nihil",
        },
      ],
      name: "Keyboard",
      options: [
        {
          id: "12c854c7-6566-448e-b1df-aff00a7e34e3",
          name: "Steel",
          position: 97,
          values: [
            "Granite",
            "Plastic",
          ],
        },
      ],
      prices: [
        {
          compareAtPrice: 3745,
          currency: "COP",
          price: 4913,
        },
        {
          compareAtPrice: 438,
          currency: "PHP",
          price: 1378,
        },
        {
          compareAtPrice: 1614,
          currency: "PHP",
          price: 8702,
        },
      ],
      publicDescription: "Stylish Soap designed to make you stand out with insistent looks",
      publicName: "Keyboard",
      requiresShipping: false,
      sizeUnit: "cm",
      sku: "978-0-7051-0955-0",
      tags: [
        "vomito",
        "custodia",
      ],
      totalStock: 929,
      updatedAt: new Date("2025-06-14T22:05:34.814Z"),
      weight: 61,
      weightUnit: "oz",
      width: 26,
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
import { commercePatchCommerceItemvariant } from "@unified-api/typescript-sdk/funcs/commercePatchCommerceItemvariant.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commercePatchCommerceItemvariant(unifiedTo, {
    commerceItemvariant: {
      availableAt: new Date("2022-02-02T16:10:33.503Z"),
      createdAt: new Date("2022-01-20T13:49:12.968Z"),
      description: "Featuring Helium-enhanced technology, our Chips offers unparalleled helpful performance",
      height: 52,
      id: "05fb9ab9-76d2-4146-bf01-61f06cd09e5b",
      isActive: false,
      isFeatured: false,
      isVisible: false,
      length: 94,
      media: [
        {
          alt: "Calcar delibero cursim summisse.",
          height: 394,
          id: "940224e9-419f-478f-a51a-74184fdf7353",
          metadata: [
            {
              id: "3570969f-264b-463b-91b6-1aee4e6f9038",
              slug: "illo",
              value: "quia",
            },
          ],
          position: 92,
          type: "image",
          url: "https://picsum.photos/seed/u0YdHqlRu/2007/3208",
          width: 54,
        },
        {
          alt: "Civitas acies substantia tergo.",
          height: 351,
          id: "ea2d5c8e-31b0-4a48-bb74-71db0495fa1d",
          metadata: [
            {
              id: "8040e4d3-ece2-413f-997a-cf61c4657042",
              slug: "libero",
              value: "capitulus",
            },
          ],
          position: 44,
          type: "image",
          url: "https://loremflickr.com/2230/1237?lock=8628070842159966",
          width: 55,
        },
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "b1d2982a-850e-482f-9e62-ed18e6457c54",
          namespace: "custom",
          slug: "custom_property",
          value: "nihil",
        },
      ],
      name: "Keyboard",
      options: [
        {
          id: "12c854c7-6566-448e-b1df-aff00a7e34e3",
          name: "Steel",
          position: 97,
          values: [
            "Granite",
            "Plastic",
          ],
        },
      ],
      prices: [
        {
          compareAtPrice: 3745,
          currency: "COP",
          price: 4913,
        },
        {
          compareAtPrice: 438,
          currency: "PHP",
          price: 1378,
        },
        {
          compareAtPrice: 1614,
          currency: "PHP",
          price: 8702,
        },
      ],
      publicDescription: "Stylish Soap designed to make you stand out with insistent looks",
      publicName: "Keyboard",
      requiresShipping: false,
      sizeUnit: "cm",
      sku: "978-0-7051-0955-0",
      tags: [
        "vomito",
        "custodia",
      ],
      totalStock: 929,
      updatedAt: new Date("2025-06-14T22:05:34.814Z"),
      weight: 61,
      weightUnit: "oz",
      width: 26,
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commercePatchCommerceItemvariant failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchCommerceItemvariantRequest](../../sdk/models/operations/patchcommerceitemvariantrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceItemvariant](../../sdk/models/shared/commerceitemvariant.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeCommerceItemvariant

Remove an itemvariant

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeCommerceItemvariant" method="delete" path="/commerce/{connection_id}/itemvariant/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.itemvariant.removeCommerceItemvariant({
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
import { commerceRemoveCommerceItemvariant } from "@unified-api/typescript-sdk/funcs/commerceRemoveCommerceItemvariant.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceRemoveCommerceItemvariant(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceRemoveCommerceItemvariant failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveCommerceItemvariantRequest](../../sdk/models/operations/removecommerceitemvariantrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveCommerceItemvariantResponse](../../sdk/models/operations/removecommerceitemvariantresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateCommerceItemvariant

Update an itemvariant

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateCommerceItemvariant" method="put" path="/commerce/{connection_id}/itemvariant/{id}" example="commerce_itemvariant" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.itemvariant.updateCommerceItemvariant({
    commerceItemvariant: {
      availableAt: new Date("2022-02-02T16:10:33.503Z"),
      createdAt: new Date("2022-01-20T13:49:12.968Z"),
      description: "Featuring Helium-enhanced technology, our Chips offers unparalleled helpful performance",
      height: 52,
      id: "05fb9ab9-76d2-4146-bf01-61f06cd09e5b",
      isActive: false,
      isFeatured: false,
      isVisible: false,
      length: 94,
      media: [
        {
          alt: "Calcar delibero cursim summisse.",
          height: 394,
          id: "940224e9-419f-478f-a51a-74184fdf7353",
          metadata: [
            {
              id: "3570969f-264b-463b-91b6-1aee4e6f9038",
              slug: "illo",
              value: "quia",
            },
          ],
          position: 92,
          type: "image",
          url: "https://picsum.photos/seed/u0YdHqlRu/2007/3208",
          width: 54,
        },
        {
          alt: "Civitas acies substantia tergo.",
          height: 351,
          id: "ea2d5c8e-31b0-4a48-bb74-71db0495fa1d",
          metadata: [
            {
              id: "8040e4d3-ece2-413f-997a-cf61c4657042",
              slug: "libero",
              value: "capitulus",
            },
          ],
          position: 44,
          type: "image",
          url: "https://loremflickr.com/2230/1237?lock=8628070842159966",
          width: 55,
        },
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "b1d2982a-850e-482f-9e62-ed18e6457c54",
          namespace: "custom",
          slug: "custom_property",
          value: "nihil",
        },
      ],
      name: "Keyboard",
      options: [
        {
          id: "12c854c7-6566-448e-b1df-aff00a7e34e3",
          name: "Steel",
          position: 97,
          values: [
            "Granite",
            "Plastic",
          ],
        },
      ],
      prices: [
        {
          compareAtPrice: 3745,
          currency: "COP",
          price: 4913,
        },
        {
          compareAtPrice: 438,
          currency: "PHP",
          price: 1378,
        },
        {
          compareAtPrice: 1614,
          currency: "PHP",
          price: 8702,
        },
      ],
      publicDescription: "Stylish Soap designed to make you stand out with insistent looks",
      publicName: "Keyboard",
      requiresShipping: false,
      sizeUnit: "cm",
      sku: "978-0-7051-0955-0",
      tags: [
        "vomito",
        "custodia",
      ],
      totalStock: 929,
      updatedAt: new Date("2025-06-14T22:05:34.814Z"),
      weight: 61,
      weightUnit: "oz",
      width: 26,
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
import { commerceUpdateCommerceItemvariant } from "@unified-api/typescript-sdk/funcs/commerceUpdateCommerceItemvariant.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceUpdateCommerceItemvariant(unifiedTo, {
    commerceItemvariant: {
      availableAt: new Date("2022-02-02T16:10:33.503Z"),
      createdAt: new Date("2022-01-20T13:49:12.968Z"),
      description: "Featuring Helium-enhanced technology, our Chips offers unparalleled helpful performance",
      height: 52,
      id: "05fb9ab9-76d2-4146-bf01-61f06cd09e5b",
      isActive: false,
      isFeatured: false,
      isVisible: false,
      length: 94,
      media: [
        {
          alt: "Calcar delibero cursim summisse.",
          height: 394,
          id: "940224e9-419f-478f-a51a-74184fdf7353",
          metadata: [
            {
              id: "3570969f-264b-463b-91b6-1aee4e6f9038",
              slug: "illo",
              value: "quia",
            },
          ],
          position: 92,
          type: "image",
          url: "https://picsum.photos/seed/u0YdHqlRu/2007/3208",
          width: 54,
        },
        {
          alt: "Civitas acies substantia tergo.",
          height: 351,
          id: "ea2d5c8e-31b0-4a48-bb74-71db0495fa1d",
          metadata: [
            {
              id: "8040e4d3-ece2-413f-997a-cf61c4657042",
              slug: "libero",
              value: "capitulus",
            },
          ],
          position: 44,
          type: "image",
          url: "https://loremflickr.com/2230/1237?lock=8628070842159966",
          width: 55,
        },
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "b1d2982a-850e-482f-9e62-ed18e6457c54",
          namespace: "custom",
          slug: "custom_property",
          value: "nihil",
        },
      ],
      name: "Keyboard",
      options: [
        {
          id: "12c854c7-6566-448e-b1df-aff00a7e34e3",
          name: "Steel",
          position: 97,
          values: [
            "Granite",
            "Plastic",
          ],
        },
      ],
      prices: [
        {
          compareAtPrice: 3745,
          currency: "COP",
          price: 4913,
        },
        {
          compareAtPrice: 438,
          currency: "PHP",
          price: 1378,
        },
        {
          compareAtPrice: 1614,
          currency: "PHP",
          price: 8702,
        },
      ],
      publicDescription: "Stylish Soap designed to make you stand out with insistent looks",
      publicName: "Keyboard",
      requiresShipping: false,
      sizeUnit: "cm",
      sku: "978-0-7051-0955-0",
      tags: [
        "vomito",
        "custodia",
      ],
      totalStock: 929,
      updatedAt: new Date("2025-06-14T22:05:34.814Z"),
      weight: 61,
      weightUnit: "oz",
      width: 26,
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceUpdateCommerceItemvariant failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateCommerceItemvariantRequest](../../sdk/models/operations/updatecommerceitemvariantrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceItemvariant](../../sdk/models/shared/commerceitemvariant.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |