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
      id: "48b4957f-e8b6-4ba3-a06c-a45dd5867b05",
      isActive: false,
      isFeatured: false,
      isVisible: false,
      length: 94,
      media: [
        {
          alt: "Calcar delibero cursim summisse.",
          height: 394,
          id: "f52ec4ee-b703-4d4c-8fea-913f886b4d7a",
          metadata: [
            {
              id: "39a4c045-3e1e-4cda-9668-a3cb976e2379",
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
          id: "626daf66-b291-40b0-b6d4-c63174b895ba",
          metadata: [
            {
              id: "856051be-359e-48f3-9b51-30bad31c932d",
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
          id: "41d90981-57ef-492a-b062-35da1f7689c3",
          namespace: "custom",
          slug: "custom_property",
          value: "nihil",
        },
      ],
      name: "Keyboard",
      options: [
        {
          id: "2ae8bbd9-abcc-4a84-8328-9788566dfbcd",
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
      updatedAt: new Date("2025-05-24T09:44:44.304Z"),
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
      id: "48b4957f-e8b6-4ba3-a06c-a45dd5867b05",
      isActive: false,
      isFeatured: false,
      isVisible: false,
      length: 94,
      media: [
        {
          alt: "Calcar delibero cursim summisse.",
          height: 394,
          id: "f52ec4ee-b703-4d4c-8fea-913f886b4d7a",
          metadata: [
            {
              id: "39a4c045-3e1e-4cda-9668-a3cb976e2379",
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
          id: "626daf66-b291-40b0-b6d4-c63174b895ba",
          metadata: [
            {
              id: "856051be-359e-48f3-9b51-30bad31c932d",
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
          id: "41d90981-57ef-492a-b062-35da1f7689c3",
          namespace: "custom",
          slug: "custom_property",
          value: "nihil",
        },
      ],
      name: "Keyboard",
      options: [
        {
          id: "2ae8bbd9-abcc-4a84-8328-9788566dfbcd",
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
      updatedAt: new Date("2025-05-24T09:44:44.304Z"),
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
      id: "2f763bd8-da3d-419c-b32a-7d24091fc79d",
      isActive: false,
      isFeatured: false,
      isVisible: false,
      length: 94,
      media: [
        {
          alt: "Calcar delibero cursim summisse.",
          height: 394,
          id: "57746b9e-9179-45e4-be60-158aa127a360",
          metadata: [
            {
              id: "6e336998-5959-4fa9-b514-a114730915a3",
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
          id: "3c7b82db-8546-4f3e-ae14-9582efacbf51",
          metadata: [
            {
              id: "93fab157-5c50-4c4a-96c6-e5560763576f",
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
          id: "bf04635e-fb96-44b4-8c74-ee4dfcfadd7a",
          namespace: "custom",
          slug: "custom_property",
          value: "nihil",
        },
      ],
      name: "Keyboard",
      options: [
        {
          id: "8829fd93-3c04-42e6-b136-9c2cb28d86da",
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
      updatedAt: new Date("2025-05-24T09:44:44.334Z"),
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
      id: "2f763bd8-da3d-419c-b32a-7d24091fc79d",
      isActive: false,
      isFeatured: false,
      isVisible: false,
      length: 94,
      media: [
        {
          alt: "Calcar delibero cursim summisse.",
          height: 394,
          id: "57746b9e-9179-45e4-be60-158aa127a360",
          metadata: [
            {
              id: "6e336998-5959-4fa9-b514-a114730915a3",
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
          id: "3c7b82db-8546-4f3e-ae14-9582efacbf51",
          metadata: [
            {
              id: "93fab157-5c50-4c4a-96c6-e5560763576f",
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
          id: "bf04635e-fb96-44b4-8c74-ee4dfcfadd7a",
          namespace: "custom",
          slug: "custom_property",
          value: "nihil",
        },
      ],
      name: "Keyboard",
      options: [
        {
          id: "8829fd93-3c04-42e6-b136-9c2cb28d86da",
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
      updatedAt: new Date("2025-05-24T09:44:44.334Z"),
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
      id: "2f763bd8-da3d-419c-b32a-7d24091fc79d",
      isActive: false,
      isFeatured: false,
      isVisible: false,
      length: 94,
      media: [
        {
          alt: "Calcar delibero cursim summisse.",
          height: 394,
          id: "57746b9e-9179-45e4-be60-158aa127a360",
          metadata: [
            {
              id: "6e336998-5959-4fa9-b514-a114730915a3",
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
          id: "3c7b82db-8546-4f3e-ae14-9582efacbf51",
          metadata: [
            {
              id: "93fab157-5c50-4c4a-96c6-e5560763576f",
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
          id: "bf04635e-fb96-44b4-8c74-ee4dfcfadd7a",
          namespace: "custom",
          slug: "custom_property",
          value: "nihil",
        },
      ],
      name: "Keyboard",
      options: [
        {
          id: "8829fd93-3c04-42e6-b136-9c2cb28d86da",
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
      updatedAt: new Date("2025-05-24T09:44:44.334Z"),
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
      id: "2f763bd8-da3d-419c-b32a-7d24091fc79d",
      isActive: false,
      isFeatured: false,
      isVisible: false,
      length: 94,
      media: [
        {
          alt: "Calcar delibero cursim summisse.",
          height: 394,
          id: "57746b9e-9179-45e4-be60-158aa127a360",
          metadata: [
            {
              id: "6e336998-5959-4fa9-b514-a114730915a3",
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
          id: "3c7b82db-8546-4f3e-ae14-9582efacbf51",
          metadata: [
            {
              id: "93fab157-5c50-4c4a-96c6-e5560763576f",
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
          id: "bf04635e-fb96-44b4-8c74-ee4dfcfadd7a",
          namespace: "custom",
          slug: "custom_property",
          value: "nihil",
        },
      ],
      name: "Keyboard",
      options: [
        {
          id: "8829fd93-3c04-42e6-b136-9c2cb28d86da",
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
      updatedAt: new Date("2025-05-24T09:44:44.334Z"),
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