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
      id: "5abc3e7e-9a2f-4e07-a8f8-81038877cc39",
      isActive: false,
      isFeatured: false,
      isVisible: false,
      length: 94,
      media: [
        {
          alt: "Calcar delibero cursim summisse.",
          height: 394,
          id: "34c9b537-741a-4f65-bd61-fafb84512ebc",
          metadata: [
            {
              id: "a577e559-9ddc-4088-a798-0593d549a980",
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
          id: "2cb06c05-4272-488e-af2f-fe35ca290fa1",
          metadata: [
            {
              id: "927333d5-4b83-4843-a526-66d12b8a9cee",
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
          id: "8850e158-ee92-408e-a85a-67589ae455fe",
          namespace: "custom",
          slug: "custom_property",
          value: "nihil",
        },
      ],
      name: "Keyboard",
      options: [
        {
          id: "60542de3-d1b2-4e0d-ace8-a32aaad44c59",
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
      updatedAt: new Date("2025-06-15T13:04:11.476Z"),
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
      id: "5abc3e7e-9a2f-4e07-a8f8-81038877cc39",
      isActive: false,
      isFeatured: false,
      isVisible: false,
      length: 94,
      media: [
        {
          alt: "Calcar delibero cursim summisse.",
          height: 394,
          id: "34c9b537-741a-4f65-bd61-fafb84512ebc",
          metadata: [
            {
              id: "a577e559-9ddc-4088-a798-0593d549a980",
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
          id: "2cb06c05-4272-488e-af2f-fe35ca290fa1",
          metadata: [
            {
              id: "927333d5-4b83-4843-a526-66d12b8a9cee",
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
          id: "8850e158-ee92-408e-a85a-67589ae455fe",
          namespace: "custom",
          slug: "custom_property",
          value: "nihil",
        },
      ],
      name: "Keyboard",
      options: [
        {
          id: "60542de3-d1b2-4e0d-ace8-a32aaad44c59",
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
      updatedAt: new Date("2025-06-15T13:04:11.476Z"),
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
      id: "a17dd249-e5f1-4c46-aca9-4fbdf93a0b64",
      isActive: false,
      isFeatured: false,
      isVisible: false,
      length: 94,
      media: [
        {
          alt: "Calcar delibero cursim summisse.",
          height: 394,
          id: "8d2c51d6-8620-4bd6-932c-a9e192ea6589",
          metadata: [
            {
              id: "b5793fca-ae7c-4867-8d06-e154b8baa1a5",
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
          id: "894414ba-33a1-4e90-992c-8b6889ced390",
          metadata: [
            {
              id: "031cc339-6730-44e1-bdab-194a5dcccbe7",
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
          id: "417bcc19-a424-4b8b-ae79-95236da658ea",
          namespace: "custom",
          slug: "custom_property",
          value: "nihil",
        },
      ],
      name: "Keyboard",
      options: [
        {
          id: "065b0d14-54dc-4836-a750-03044d41c3ff",
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
      updatedAt: new Date("2025-06-15T13:04:11.496Z"),
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
      id: "a17dd249-e5f1-4c46-aca9-4fbdf93a0b64",
      isActive: false,
      isFeatured: false,
      isVisible: false,
      length: 94,
      media: [
        {
          alt: "Calcar delibero cursim summisse.",
          height: 394,
          id: "8d2c51d6-8620-4bd6-932c-a9e192ea6589",
          metadata: [
            {
              id: "b5793fca-ae7c-4867-8d06-e154b8baa1a5",
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
          id: "894414ba-33a1-4e90-992c-8b6889ced390",
          metadata: [
            {
              id: "031cc339-6730-44e1-bdab-194a5dcccbe7",
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
          id: "417bcc19-a424-4b8b-ae79-95236da658ea",
          namespace: "custom",
          slug: "custom_property",
          value: "nihil",
        },
      ],
      name: "Keyboard",
      options: [
        {
          id: "065b0d14-54dc-4836-a750-03044d41c3ff",
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
      updatedAt: new Date("2025-06-15T13:04:11.496Z"),
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
      id: "a17dd249-e5f1-4c46-aca9-4fbdf93a0b64",
      isActive: false,
      isFeatured: false,
      isVisible: false,
      length: 94,
      media: [
        {
          alt: "Calcar delibero cursim summisse.",
          height: 394,
          id: "8d2c51d6-8620-4bd6-932c-a9e192ea6589",
          metadata: [
            {
              id: "b5793fca-ae7c-4867-8d06-e154b8baa1a5",
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
          id: "894414ba-33a1-4e90-992c-8b6889ced390",
          metadata: [
            {
              id: "031cc339-6730-44e1-bdab-194a5dcccbe7",
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
          id: "417bcc19-a424-4b8b-ae79-95236da658ea",
          namespace: "custom",
          slug: "custom_property",
          value: "nihil",
        },
      ],
      name: "Keyboard",
      options: [
        {
          id: "065b0d14-54dc-4836-a750-03044d41c3ff",
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
      updatedAt: new Date("2025-06-15T13:04:11.496Z"),
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
      id: "a17dd249-e5f1-4c46-aca9-4fbdf93a0b64",
      isActive: false,
      isFeatured: false,
      isVisible: false,
      length: 94,
      media: [
        {
          alt: "Calcar delibero cursim summisse.",
          height: 394,
          id: "8d2c51d6-8620-4bd6-932c-a9e192ea6589",
          metadata: [
            {
              id: "b5793fca-ae7c-4867-8d06-e154b8baa1a5",
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
          id: "894414ba-33a1-4e90-992c-8b6889ced390",
          metadata: [
            {
              id: "031cc339-6730-44e1-bdab-194a5dcccbe7",
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
          id: "417bcc19-a424-4b8b-ae79-95236da658ea",
          namespace: "custom",
          slug: "custom_property",
          value: "nihil",
        },
      ],
      name: "Keyboard",
      options: [
        {
          id: "065b0d14-54dc-4836-a750-03044d41c3ff",
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
      updatedAt: new Date("2025-06-15T13:04:11.496Z"),
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