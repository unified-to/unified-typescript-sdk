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

Creates a CommerceItemvariant. Provide the unified CommerceItemvariant fields in the request body; they are mapped to the provider's API. Returns the created CommerceItemvariant.

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
      availableAt: new Date("2022-02-06T18:14:41.644Z"),
      createdAt: new Date("2022-01-20T13:49:12.968Z"),
      description: "Stylish Salad designed to make you stand out with little looks",
      height: 54,
      id: "b87c5200-6a7f-4db4-9794-fe2fdd9fd95a",
      isActive: true,
      isFeatured: false,
      isVisible: false,
      length: 92,
      media: [
        {
          alt: "Hic desipio thorax.",
          height: 961,
          id: "6912e2fa-5b7f-4118-99a3-d2910ccb21d5",
          metadata: [
            {
              id: "402ac0bb-1755-4b84-a758-1ade8e9260dc",
              slug: "ubi",
              value: "textus",
            },
          ],
          position: 72,
          type: "image",
          url: "https://loremflickr.com/2126/721?lock=8820088623807162",
          width: 35,
        },
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "298e1aba-2372-41cd-8b5c-47896378d483",
          namespace: "custom",
          slug: "custom_property",
          value: "absens",
        },
      ],
      name: "Chair",
      options: [
        {
          id: "3de47cdf-11e6-4068-8222-fa9ed6bb951c",
          name: "Color",
          position: 1,
          values: [
            "olive",
          ],
        },
        {
          id: "79589ae9-69ca-4f2e-96b1-5c389dae3d71",
          name: "Size",
          position: 2,
          values: [
            "S",
          ],
        },
      ],
      prices: [
        {
          currency: "USD",
          price: 382.23,
        },
      ],
      publicDescription: "Stylish Cheese designed to make you stand out with grave looks",
      publicName: "Chair",
      requiresShipping: false,
      sizeUnit: "cm",
      sku: "978-1-368-44270-1",
      tags: [
        "deserunt",
      ],
      totalStock: 436,
      updatedAt: new Date("2026-03-23T14:31:46.640Z"),
      weight: 46,
      weightUnit: "oz",
      width: 40,
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
      availableAt: new Date("2022-02-06T18:14:41.644Z"),
      createdAt: new Date("2022-01-20T13:49:12.968Z"),
      description: "Stylish Salad designed to make you stand out with little looks",
      height: 54,
      id: "b87c5200-6a7f-4db4-9794-fe2fdd9fd95a",
      isActive: true,
      isFeatured: false,
      isVisible: false,
      length: 92,
      media: [
        {
          alt: "Hic desipio thorax.",
          height: 961,
          id: "6912e2fa-5b7f-4118-99a3-d2910ccb21d5",
          metadata: [
            {
              id: "402ac0bb-1755-4b84-a758-1ade8e9260dc",
              slug: "ubi",
              value: "textus",
            },
          ],
          position: 72,
          type: "image",
          url: "https://loremflickr.com/2126/721?lock=8820088623807162",
          width: 35,
        },
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "298e1aba-2372-41cd-8b5c-47896378d483",
          namespace: "custom",
          slug: "custom_property",
          value: "absens",
        },
      ],
      name: "Chair",
      options: [
        {
          id: "3de47cdf-11e6-4068-8222-fa9ed6bb951c",
          name: "Color",
          position: 1,
          values: [
            "olive",
          ],
        },
        {
          id: "79589ae9-69ca-4f2e-96b1-5c389dae3d71",
          name: "Size",
          position: 2,
          values: [
            "S",
          ],
        },
      ],
      prices: [
        {
          currency: "USD",
          price: 382.23,
        },
      ],
      publicDescription: "Stylish Cheese designed to make you stand out with grave looks",
      publicName: "Chair",
      requiresShipping: false,
      sizeUnit: "cm",
      sku: "978-1-368-44270-1",
      tags: [
        "deserunt",
      ],
      totalStock: 436,
      updatedAt: new Date("2026-03-23T14:31:46.640Z"),
      weight: 46,
      weightUnit: "oz",
      width: 40,
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

Retrieves a single CommerceItemvariant by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

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

Returns a list of CommerceItemvariants. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

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

Updates the CommerceItemvariant identified by `id`. Provide the unified CommerceItemvariant fields to change in the request body.

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
      availableAt: new Date("2022-02-06T18:14:41.644Z"),
      createdAt: new Date("2022-01-20T13:49:12.968Z"),
      description: "Stylish Salad designed to make you stand out with little looks",
      height: 54,
      id: "dcc909a0-7c6a-46d2-a22b-a973ddc3cfb3",
      isActive: true,
      isFeatured: false,
      isVisible: false,
      length: 92,
      media: [
        {
          alt: "Hic desipio thorax.",
          height: 961,
          id: "32e67379-1d1e-454d-b0a6-182ab6b3edca",
          metadata: [
            {
              id: "e414de70-bf4e-4e7c-801f-9c8b34c1f7a4",
              slug: "ubi",
              value: "textus",
            },
          ],
          position: 72,
          type: "image",
          url: "https://loremflickr.com/2126/721?lock=8820088623807162",
          width: 35,
        },
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "1434260f-66e4-48e5-88bf-00bd11140447",
          namespace: "custom",
          slug: "custom_property",
          value: "absens",
        },
      ],
      name: "Chair",
      options: [
        {
          id: "05a2736d-1262-4117-a458-991916ab390f",
          name: "Color",
          position: 1,
          values: [
            "olive",
          ],
        },
        {
          id: "be934f0d-c0b0-44fc-97a1-98de5701b54c",
          name: "Size",
          position: 2,
          values: [
            "S",
          ],
        },
      ],
      prices: [
        {
          currency: "USD",
          price: 382.23,
        },
      ],
      publicDescription: "Stylish Cheese designed to make you stand out with grave looks",
      publicName: "Chair",
      requiresShipping: false,
      sizeUnit: "cm",
      sku: "978-1-368-44270-1",
      tags: [
        "deserunt",
      ],
      totalStock: 436,
      updatedAt: new Date("2026-03-23T14:31:46.661Z"),
      weight: 46,
      weightUnit: "oz",
      width: 40,
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
      availableAt: new Date("2022-02-06T18:14:41.644Z"),
      createdAt: new Date("2022-01-20T13:49:12.968Z"),
      description: "Stylish Salad designed to make you stand out with little looks",
      height: 54,
      id: "dcc909a0-7c6a-46d2-a22b-a973ddc3cfb3",
      isActive: true,
      isFeatured: false,
      isVisible: false,
      length: 92,
      media: [
        {
          alt: "Hic desipio thorax.",
          height: 961,
          id: "32e67379-1d1e-454d-b0a6-182ab6b3edca",
          metadata: [
            {
              id: "e414de70-bf4e-4e7c-801f-9c8b34c1f7a4",
              slug: "ubi",
              value: "textus",
            },
          ],
          position: 72,
          type: "image",
          url: "https://loremflickr.com/2126/721?lock=8820088623807162",
          width: 35,
        },
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "1434260f-66e4-48e5-88bf-00bd11140447",
          namespace: "custom",
          slug: "custom_property",
          value: "absens",
        },
      ],
      name: "Chair",
      options: [
        {
          id: "05a2736d-1262-4117-a458-991916ab390f",
          name: "Color",
          position: 1,
          values: [
            "olive",
          ],
        },
        {
          id: "be934f0d-c0b0-44fc-97a1-98de5701b54c",
          name: "Size",
          position: 2,
          values: [
            "S",
          ],
        },
      ],
      prices: [
        {
          currency: "USD",
          price: 382.23,
        },
      ],
      publicDescription: "Stylish Cheese designed to make you stand out with grave looks",
      publicName: "Chair",
      requiresShipping: false,
      sizeUnit: "cm",
      sku: "978-1-368-44270-1",
      tags: [
        "deserunt",
      ],
      totalStock: 436,
      updatedAt: new Date("2026-03-23T14:31:46.661Z"),
      weight: 46,
      weightUnit: "oz",
      width: 40,
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

Deletes the CommerceItemvariant identified by `id`.

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

Updates the CommerceItemvariant identified by `id`. Provide the unified CommerceItemvariant fields to change in the request body.

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
      availableAt: new Date("2022-02-06T18:14:41.644Z"),
      createdAt: new Date("2022-01-20T13:49:12.968Z"),
      description: "Stylish Salad designed to make you stand out with little looks",
      height: 54,
      id: "dcc909a0-7c6a-46d2-a22b-a973ddc3cfb3",
      isActive: true,
      isFeatured: false,
      isVisible: false,
      length: 92,
      media: [
        {
          alt: "Hic desipio thorax.",
          height: 961,
          id: "32e67379-1d1e-454d-b0a6-182ab6b3edca",
          metadata: [
            {
              id: "e414de70-bf4e-4e7c-801f-9c8b34c1f7a4",
              slug: "ubi",
              value: "textus",
            },
          ],
          position: 72,
          type: "image",
          url: "https://loremflickr.com/2126/721?lock=8820088623807162",
          width: 35,
        },
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "1434260f-66e4-48e5-88bf-00bd11140447",
          namespace: "custom",
          slug: "custom_property",
          value: "absens",
        },
      ],
      name: "Chair",
      options: [
        {
          id: "05a2736d-1262-4117-a458-991916ab390f",
          name: "Color",
          position: 1,
          values: [
            "olive",
          ],
        },
        {
          id: "be934f0d-c0b0-44fc-97a1-98de5701b54c",
          name: "Size",
          position: 2,
          values: [
            "S",
          ],
        },
      ],
      prices: [
        {
          currency: "USD",
          price: 382.23,
        },
      ],
      publicDescription: "Stylish Cheese designed to make you stand out with grave looks",
      publicName: "Chair",
      requiresShipping: false,
      sizeUnit: "cm",
      sku: "978-1-368-44270-1",
      tags: [
        "deserunt",
      ],
      totalStock: 436,
      updatedAt: new Date("2026-03-23T14:31:46.661Z"),
      weight: 46,
      weightUnit: "oz",
      width: 40,
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
      availableAt: new Date("2022-02-06T18:14:41.644Z"),
      createdAt: new Date("2022-01-20T13:49:12.968Z"),
      description: "Stylish Salad designed to make you stand out with little looks",
      height: 54,
      id: "dcc909a0-7c6a-46d2-a22b-a973ddc3cfb3",
      isActive: true,
      isFeatured: false,
      isVisible: false,
      length: 92,
      media: [
        {
          alt: "Hic desipio thorax.",
          height: 961,
          id: "32e67379-1d1e-454d-b0a6-182ab6b3edca",
          metadata: [
            {
              id: "e414de70-bf4e-4e7c-801f-9c8b34c1f7a4",
              slug: "ubi",
              value: "textus",
            },
          ],
          position: 72,
          type: "image",
          url: "https://loremflickr.com/2126/721?lock=8820088623807162",
          width: 35,
        },
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "1434260f-66e4-48e5-88bf-00bd11140447",
          namespace: "custom",
          slug: "custom_property",
          value: "absens",
        },
      ],
      name: "Chair",
      options: [
        {
          id: "05a2736d-1262-4117-a458-991916ab390f",
          name: "Color",
          position: 1,
          values: [
            "olive",
          ],
        },
        {
          id: "be934f0d-c0b0-44fc-97a1-98de5701b54c",
          name: "Size",
          position: 2,
          values: [
            "S",
          ],
        },
      ],
      prices: [
        {
          currency: "USD",
          price: 382.23,
        },
      ],
      publicDescription: "Stylish Cheese designed to make you stand out with grave looks",
      publicName: "Chair",
      requiresShipping: false,
      sizeUnit: "cm",
      sku: "978-1-368-44270-1",
      tags: [
        "deserunt",
      ],
      totalStock: 436,
      updatedAt: new Date("2026-03-23T14:31:46.661Z"),
      weight: 46,
      weightUnit: "oz",
      width: 40,
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