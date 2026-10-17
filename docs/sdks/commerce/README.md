# Commerce

## Overview

### Available Operations

* [createCommerceCollection](#createcommercecollection) - Create a collection
* [createCommerceInventory](#createcommerceinventory) - Create an inventory
* [createCommerceItem](#createcommerceitem) - Create an item
* [createCommerceItemvariant](#createcommerceitemvariant) - Create an itemvariant
* [createCommerceLocation](#createcommercelocation) - Create a location
* [createCommerceReservation](#createcommercereservation) - Create a reservation
* [createCommerceReview](#createcommercereview) - Create a review
* [createCommerceSaleschannel](#createcommercesaleschannel) - Create a saleschannel
* [getCommerceCollection](#getcommercecollection) - Retrieve a collection
* [getCommerceInventory](#getcommerceinventory) - Retrieve an inventory
* [getCommerceItem](#getcommerceitem) - Retrieve an item
* [getCommerceItemvariant](#getcommerceitemvariant) - Retrieve an itemvariant
* [getCommerceLocation](#getcommercelocation) - Retrieve a location
* [getCommerceReservation](#getcommercereservation) - Retrieve a reservation
* [getCommerceReview](#getcommercereview) - Retrieve a review
* [getCommerceSaleschannel](#getcommercesaleschannel) - Retrieve a saleschannel
* [listCommerceAvailabilities](#listcommerceavailabilities) - List all availabilities
* [listCommerceCollections](#listcommercecollections) - List all collections
* [listCommerceInventories](#listcommerceinventories) - List all inventories
* [listCommerceItems](#listcommerceitems) - List all items
* [listCommerceItemvariants](#listcommerceitemvariants) - List all itemvariants
* [listCommerceLocations](#listcommercelocations) - List all locations
* [listCommerceReservations](#listcommercereservations) - List all reservations
* [listCommerceReviews](#listcommercereviews) - List all reviews
* [listCommerceSaleschannels](#listcommercesaleschannels) - List all saleschannels
* [patchCommerceCollection](#patchcommercecollection) - Update a collection
* [patchCommerceInventory](#patchcommerceinventory) - Update an inventory
* [patchCommerceItem](#patchcommerceitem) - Update an item
* [patchCommerceItemvariant](#patchcommerceitemvariant) - Update an itemvariant
* [patchCommerceLocation](#patchcommercelocation) - Update a location
* [patchCommerceReservation](#patchcommercereservation) - Update a reservation
* [patchCommerceReview](#patchcommercereview) - Update a review
* [patchCommerceSaleschannel](#patchcommercesaleschannel) - Update a saleschannel
* [removeCommerceCollection](#removecommercecollection) - Remove a collection
* [removeCommerceInventory](#removecommerceinventory) - Remove an inventory
* [removeCommerceItem](#removecommerceitem) - Remove an item
* [removeCommerceItemvariant](#removecommerceitemvariant) - Remove an itemvariant
* [removeCommerceLocation](#removecommercelocation) - Remove a location
* [removeCommerceReservation](#removecommercereservation) - Remove a reservation
* [removeCommerceReview](#removecommercereview) - Remove a review
* [removeCommerceSaleschannel](#removecommercesaleschannel) - Remove a saleschannel
* [updateCommerceCollection](#updatecommercecollection) - Update a collection
* [updateCommerceInventory](#updatecommerceinventory) - Update an inventory
* [updateCommerceItem](#updatecommerceitem) - Update an item
* [updateCommerceItemvariant](#updatecommerceitemvariant) - Update an itemvariant
* [updateCommerceLocation](#updatecommercelocation) - Update a location
* [updateCommerceReservation](#updatecommercereservation) - Update a reservation
* [updateCommerceReview](#updatecommercereview) - Update a review
* [updateCommerceSaleschannel](#updatecommercesaleschannel) - Update a saleschannel

## createCommerceCollection

Create a collection

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createCommerceCollection" method="post" path="/commerce/{connection_id}/collection" example="commerce_collection" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.commerce.createCommerceCollection({
    commerceCollection: {
      createdAt: new Date("2023-07-14T00:42:54.742Z"),
      description: "The Integrated leading edge website Cheese offers reliable performance and productive design",
      id: "0ccffaf3-547e-4fd1-a45d-385643b04498",
      isActive: true,
      isFeatured: false,
      isVisible: false,
      itemMetadata: [],
      media: [
        {
          alt: "Defungo adopto thorax.",
          height: 759,
          id: "e4b904a1-8d22-46fc-9486-1796c6eea07a",
          metadata: [
            {
              id: "8bc41786-20f1-4885-bfa8-710948a2c851",
              slug: "censura",
              value: "toties",
            },
          ],
          position: 80,
          type: "video",
          url: "https://loremflickr.com/1319/1257?lock=7280448425732025",
          width: 40,
        },
      ],
      metadata: [
        {
          id: "bfcb26de-ec2e-43cf-b318-009bcfaafe48",
          slug: "aetas",
          value: "consuasor",
        },
      ],
      name: "Small Marble Chips",
      publicDescription: "Generic Gloves designed with Cotton for miserable performance",
      publicName: "Small Marble Chips",
      tags: [
        "ambulo",
        "adeptio",
        "contego",
      ],
      type: "COLLECTION",
      updatedAt: new Date("2025-03-13T00:28:05.729Z"),
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
import { commerceCreateCommerceCollection } from "@unified-api/typescript-sdk/funcs/commerceCreateCommerceCollection.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceCreateCommerceCollection(unifiedTo, {
    commerceCollection: {
      createdAt: new Date("2023-07-14T00:42:54.742Z"),
      description: "The Integrated leading edge website Cheese offers reliable performance and productive design",
      id: "0ccffaf3-547e-4fd1-a45d-385643b04498",
      isActive: true,
      isFeatured: false,
      isVisible: false,
      itemMetadata: [],
      media: [
        {
          alt: "Defungo adopto thorax.",
          height: 759,
          id: "e4b904a1-8d22-46fc-9486-1796c6eea07a",
          metadata: [
            {
              id: "8bc41786-20f1-4885-bfa8-710948a2c851",
              slug: "censura",
              value: "toties",
            },
          ],
          position: 80,
          type: "video",
          url: "https://loremflickr.com/1319/1257?lock=7280448425732025",
          width: 40,
        },
      ],
      metadata: [
        {
          id: "bfcb26de-ec2e-43cf-b318-009bcfaafe48",
          slug: "aetas",
          value: "consuasor",
        },
      ],
      name: "Small Marble Chips",
      publicDescription: "Generic Gloves designed with Cotton for miserable performance",
      publicName: "Small Marble Chips",
      tags: [
        "ambulo",
        "adeptio",
        "contego",
      ],
      type: "COLLECTION",
      updatedAt: new Date("2025-03-13T00:28:05.729Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceCreateCommerceCollection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateCommerceCollectionRequest](../../sdk/models/operations/createcommercecollectionrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceCollection](../../sdk/models/shared/commercecollection.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createCommerceInventory

Create an inventory

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createCommerceInventory" method="post" path="/commerce/{connection_id}/inventory" example="commerce_inventory" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.commerce.createCommerceInventory({
    commerceInventory: {
      available: 337,
      updatedAt: new Date("2025-11-17T04:43:42.924Z"),
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
import { commerceCreateCommerceInventory } from "@unified-api/typescript-sdk/funcs/commerceCreateCommerceInventory.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceCreateCommerceInventory(unifiedTo, {
    commerceInventory: {
      available: 337,
      updatedAt: new Date("2025-11-17T04:43:42.924Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceCreateCommerceInventory failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateCommerceInventoryRequest](../../sdk/models/operations/createcommerceinventoryrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceInventory](../../sdk/models/shared/commerceinventory.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

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
  const result = await unifiedTo.commerce.createCommerceItem({
    commerceItem: {
      collections: [],
      createdAt: new Date("2019-06-21T20:16:18.628Z"),
      description: "Vulnero ustulo abeo.",
      duration: 87,
      globalCode: "calamitas",
      id: "51438d92-a1c3-4538-acef-97ae0e3e1f50",
      isActive: false,
      isFeatured: true,
      isTaxable: true,
      isVisible: true,
      media: [
        {
          alt: "Caterva eveniet acies candidus.",
          height: 663,
          id: "47962978-36ea-4896-b892-b9da780dbe06",
          metadata: [
            {
              id: "571e9609-4422-4291-a647-fbdb72a0e94e",
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
          id: "f44be8e8-3caf-44ae-8766-f785fe309af5",
          metadata: [
            {
              id: "8582f142-7e55-4580-83ca-9080742786ba",
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
          id: "5308ef83-f504-4e4b-bb6a-fc8e26da57dc",
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
      updatedAt: new Date("2022-04-17T23:08:17.209Z"),
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
      id: "51438d92-a1c3-4538-acef-97ae0e3e1f50",
      isActive: false,
      isFeatured: true,
      isTaxable: true,
      isVisible: true,
      media: [
        {
          alt: "Caterva eveniet acies candidus.",
          height: 663,
          id: "47962978-36ea-4896-b892-b9da780dbe06",
          metadata: [
            {
              id: "571e9609-4422-4291-a647-fbdb72a0e94e",
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
          id: "f44be8e8-3caf-44ae-8766-f785fe309af5",
          metadata: [
            {
              id: "8582f142-7e55-4580-83ca-9080742786ba",
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
          id: "5308ef83-f504-4e4b-bb6a-fc8e26da57dc",
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
      updatedAt: new Date("2022-04-17T23:08:17.209Z"),
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
  const result = await unifiedTo.commerce.createCommerceItemvariant({
    commerceItemvariant: {
      availableAt: new Date("2022-02-02T16:10:33.503Z"),
      createdAt: new Date("2022-01-20T13:49:12.968Z"),
      description: "Featuring Helium-enhanced technology, our Chips offers unparalleled helpful performance",
      height: 52,
      id: "1ca797ab-ac3e-466f-bcb2-59578add850f",
      isActive: false,
      isFeatured: false,
      isVisible: false,
      length: 94,
      media: [
        {
          alt: "Calcar delibero cursim summisse.",
          height: 394,
          id: "a118f426-8978-482d-8f84-1914fcfdb601",
          metadata: [
            {
              id: "863e8a18-f1af-446a-8a2d-cde41f390dd4",
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
          id: "e1bd3cb6-8088-49e9-8444-69d838b13fa1",
          metadata: [
            {
              id: "2e03135d-b8f7-4673-a3cb-ee43936d0477",
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
          id: "714a10c2-bfd5-4b0a-bbdb-650f8656719b",
          namespace: "custom",
          slug: "custom_property",
          value: "nihil",
        },
      ],
      name: "Keyboard",
      options: [
        {
          id: "f4b97852-96fb-4b65-875d-2ef669e2b9b9",
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
      updatedAt: new Date("2025-06-14T05:01:30.180Z"),
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
      id: "1ca797ab-ac3e-466f-bcb2-59578add850f",
      isActive: false,
      isFeatured: false,
      isVisible: false,
      length: 94,
      media: [
        {
          alt: "Calcar delibero cursim summisse.",
          height: 394,
          id: "a118f426-8978-482d-8f84-1914fcfdb601",
          metadata: [
            {
              id: "863e8a18-f1af-446a-8a2d-cde41f390dd4",
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
          id: "e1bd3cb6-8088-49e9-8444-69d838b13fa1",
          metadata: [
            {
              id: "2e03135d-b8f7-4673-a3cb-ee43936d0477",
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
          id: "714a10c2-bfd5-4b0a-bbdb-650f8656719b",
          namespace: "custom",
          slug: "custom_property",
          value: "nihil",
        },
      ],
      name: "Keyboard",
      options: [
        {
          id: "f4b97852-96fb-4b65-875d-2ef669e2b9b9",
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
      updatedAt: new Date("2025-06-14T05:01:30.180Z"),
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

## createCommerceLocation

Create a location

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createCommerceLocation" method="post" path="/commerce/{connection_id}/location" example="commerce_location" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.commerce.createCommerceLocation({
    commerceLocation: {
      address: {
        address1: "29896 The Limes",
        city: "New Kenny",
        countryCode: "US",
        postalCode: "14490-0609",
        region: "Virginia",
        regionCode: "MS",
      },
      categories: [],
      createdAt: new Date("2022-12-29T04:15:21.195Z"),
      currency: "XCD",
      description: "Adsidue audentia.",
      id: "98f2a68b-28dd-4e8f-915e-c198f2144a18",
      imageUrl: "https://picsum.photos/seed/hjFt1/1036/2220",
      isActive: false,
      languageLocale: "vulgaris",
      latitude: 0,
      locationType: "RESTAURANT",
      longitude: 0,
      media: [
        {
          alt: "Addo.",
          height: 283,
          id: "940ff5c1-6d9c-4b6d-b6a5-c246ef83ddd1",
          metadata: [
            {
              id: "44c14f67-9a86-4d27-88ec-c954e049773c",
              slug: "abutor",
              value: "damno",
            },
          ],
          position: 40,
          type: "image",
          url: "https://picsum.photos/seed/QVh7ViTV/3964/1567",
          width: 1,
        },
      ],
      name: "Olson - Mraz",
      priceLevel: "",
      rating: 0,
      reviewCount: 0,
      telephones: [
        {
          telephone: "(872) 522-3201",
          type: "OTHER",
        },
        {
          telephone: "(236) 274-2445",
          type: "MOBILE",
        },
      ],
      updatedAt: new Date("2024-04-19T09:03:09.683Z"),
      webUrl: "https://chilly-edge.info",
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
import { locationCreateCommerceLocation } from "@unified-api/typescript-sdk/funcs/locationCreateCommerceLocation.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await locationCreateCommerceLocation(unifiedTo, {
    commerceLocation: {
      address: {
        address1: "29896 The Limes",
        city: "New Kenny",
        countryCode: "US",
        postalCode: "14490-0609",
        region: "Virginia",
        regionCode: "MS",
      },
      categories: [],
      createdAt: new Date("2022-12-29T04:15:21.195Z"),
      currency: "XCD",
      description: "Adsidue audentia.",
      id: "98f2a68b-28dd-4e8f-915e-c198f2144a18",
      imageUrl: "https://picsum.photos/seed/hjFt1/1036/2220",
      isActive: false,
      languageLocale: "vulgaris",
      latitude: 0,
      locationType: "RESTAURANT",
      longitude: 0,
      media: [
        {
          alt: "Addo.",
          height: 283,
          id: "940ff5c1-6d9c-4b6d-b6a5-c246ef83ddd1",
          metadata: [
            {
              id: "44c14f67-9a86-4d27-88ec-c954e049773c",
              slug: "abutor",
              value: "damno",
            },
          ],
          position: 40,
          type: "image",
          url: "https://picsum.photos/seed/QVh7ViTV/3964/1567",
          width: 1,
        },
      ],
      name: "Olson - Mraz",
      priceLevel: "",
      rating: 0,
      reviewCount: 0,
      telephones: [
        {
          telephone: "(872) 522-3201",
          type: "OTHER",
        },
        {
          telephone: "(236) 274-2445",
          type: "MOBILE",
        },
      ],
      updatedAt: new Date("2024-04-19T09:03:09.683Z"),
      webUrl: "https://chilly-edge.info",
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("locationCreateCommerceLocation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateCommerceLocationRequest](../../sdk/models/operations/createcommercelocationrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceLocation](../../sdk/models/shared/commercelocation.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createCommerceReservation

Create a reservation

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createCommerceReservation" method="post" path="/commerce/{connection_id}/reservation" example="commerce_reservation" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.commerce.createCommerceReservation({
    commerceReservation: {
      createdAt: new Date("2021-12-14T19:50:31.151Z"),
      endAt: new Date("2022-01-01T22:00:17.868Z"),
      guestEmail: "Sunny.Strosin77@yahoo.com",
      guestName: "Annette Franecki",
      guestPhone: "(990) 317-6213",
      id: "7d52e90b-053c-4ccc-a5ee-bfc5daed78bb",
      itemName: "Practical Ceramic Shoes",
      notes: "Adsum textilis ipsum despecto.",
      size: 10,
      staffName: "Vickie Fahey",
      startAt: new Date("2021-12-18T00:40:25.125Z"),
      status: "PENDING",
      updatedAt: new Date("2023-01-03T00:35:54.822Z"),
      url: "https://cluttered-pine.info/",
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
import { commerceCreateCommerceReservation } from "@unified-api/typescript-sdk/funcs/commerceCreateCommerceReservation.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceCreateCommerceReservation(unifiedTo, {
    commerceReservation: {
      createdAt: new Date("2021-12-14T19:50:31.151Z"),
      endAt: new Date("2022-01-01T22:00:17.868Z"),
      guestEmail: "Sunny.Strosin77@yahoo.com",
      guestName: "Annette Franecki",
      guestPhone: "(990) 317-6213",
      id: "7d52e90b-053c-4ccc-a5ee-bfc5daed78bb",
      itemName: "Practical Ceramic Shoes",
      notes: "Adsum textilis ipsum despecto.",
      size: 10,
      staffName: "Vickie Fahey",
      startAt: new Date("2021-12-18T00:40:25.125Z"),
      status: "PENDING",
      updatedAt: new Date("2023-01-03T00:35:54.822Z"),
      url: "https://cluttered-pine.info/",
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceCreateCommerceReservation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateCommerceReservationRequest](../../sdk/models/operations/createcommercereservationrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceReservation](../../sdk/models/shared/commercereservation.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createCommerceReview

Create a review

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createCommerceReview" method="post" path="/commerce/{connection_id}/review" example="commerce_review" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.commerce.createCommerceReview({
    commerceReview: {
      authorAvatarUrl: "https://picsum.photos/seed/ix4Br3LA/2245/1245",
      authorEmail: "Cleve_Yundt@hotmail.com",
      authorLocation: "ipsum",
      authorName: "Marsha Krajcik",
      comments: [],
      content: "Taedium thymum adipiscor amicitia cui.",
      createdAt: new Date("2019-12-12T18:10:22.988Z"),
      helpfulVotes: 26,
      id: "8b75efd1-0720-49db-ade1-458bc2a7b9a3",
      isFeatured: true,
      isPublic: true,
      isVerified: false,
      media: [
        {
          alt: "Adulescens.",
          height: 519,
          id: "8c68573b-6431-446d-ae99-0ca6a9bc304a",
          metadata: [
            {
              id: "5f277457-b8b3-4ad2-829a-bb56a2cf065f",
              slug: "aggero",
              value: "tero",
            },
          ],
          position: 72,
          type: "video",
          url: "https://loremflickr.com/882/1004?lock=7448492654002422",
          width: 75,
        },
        {
          alt: "Pauci timidus sol comburo thema.",
          height: 297,
          id: "a96b916d-1c90-4c9d-932b-980f86e15460",
          metadata: [
            {
              id: "966c1876-4e62-443f-99d0-f3516fde7d5f",
              slug: "vito",
              value: "cuppedia",
            },
          ],
          position: 61,
          type: "image",
          url: "https://picsum.photos/seed/3QDZ8/1208/2171",
          width: 96,
        },
        {
          alt: "Cuppedia vestrum patruus.",
          height: 6,
          id: "623d4e44-4908-4572-947e-24352c14c1a7",
          metadata: [
            {
              id: "c9e97f37-6b12-4cb1-8b02-5449259bfcc1",
              slug: "arbitro",
              value: "villa",
            },
          ],
          position: 60,
          type: "video",
          url: "https://picsum.photos/seed/ytybC/2616/710",
          width: 74,
        },
      ],
      metadata: [],
      rating: 3,
      status: "APPROVED",
      title: "Coepi adamo amicitia auxilium toties.",
      unhelpfulVotes: 49,
      updatedAt: new Date("2025-08-18T01:18:12.006Z"),
      url: "https://excitable-underneath.com",
      verifiedPurchase: false,
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
import { commerceCreateCommerceReview } from "@unified-api/typescript-sdk/funcs/commerceCreateCommerceReview.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceCreateCommerceReview(unifiedTo, {
    commerceReview: {
      authorAvatarUrl: "https://picsum.photos/seed/ix4Br3LA/2245/1245",
      authorEmail: "Cleve_Yundt@hotmail.com",
      authorLocation: "ipsum",
      authorName: "Marsha Krajcik",
      comments: [],
      content: "Taedium thymum adipiscor amicitia cui.",
      createdAt: new Date("2019-12-12T18:10:22.988Z"),
      helpfulVotes: 26,
      id: "8b75efd1-0720-49db-ade1-458bc2a7b9a3",
      isFeatured: true,
      isPublic: true,
      isVerified: false,
      media: [
        {
          alt: "Adulescens.",
          height: 519,
          id: "8c68573b-6431-446d-ae99-0ca6a9bc304a",
          metadata: [
            {
              id: "5f277457-b8b3-4ad2-829a-bb56a2cf065f",
              slug: "aggero",
              value: "tero",
            },
          ],
          position: 72,
          type: "video",
          url: "https://loremflickr.com/882/1004?lock=7448492654002422",
          width: 75,
        },
        {
          alt: "Pauci timidus sol comburo thema.",
          height: 297,
          id: "a96b916d-1c90-4c9d-932b-980f86e15460",
          metadata: [
            {
              id: "966c1876-4e62-443f-99d0-f3516fde7d5f",
              slug: "vito",
              value: "cuppedia",
            },
          ],
          position: 61,
          type: "image",
          url: "https://picsum.photos/seed/3QDZ8/1208/2171",
          width: 96,
        },
        {
          alt: "Cuppedia vestrum patruus.",
          height: 6,
          id: "623d4e44-4908-4572-947e-24352c14c1a7",
          metadata: [
            {
              id: "c9e97f37-6b12-4cb1-8b02-5449259bfcc1",
              slug: "arbitro",
              value: "villa",
            },
          ],
          position: 60,
          type: "video",
          url: "https://picsum.photos/seed/ytybC/2616/710",
          width: 74,
        },
      ],
      metadata: [],
      rating: 3,
      status: "APPROVED",
      title: "Coepi adamo amicitia auxilium toties.",
      unhelpfulVotes: 49,
      updatedAt: new Date("2025-08-18T01:18:12.006Z"),
      url: "https://excitable-underneath.com",
      verifiedPurchase: false,
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceCreateCommerceReview failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateCommerceReviewRequest](../../sdk/models/operations/createcommercereviewrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceReview](../../sdk/models/shared/commercereview.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createCommerceSaleschannel

Create a saleschannel

### Example Usage

<!-- UsageSnippet language="typescript" operationID="createCommerceSaleschannel" method="post" path="/commerce/{connection_id}/saleschannel" example="commerce_saleschannel" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.commerce.createCommerceSaleschannel({
    commerceSaleschannel: {
      collections: [],
      createdAt: new Date("2021-12-12T06:19:55.421Z"),
      description: "Utroque denuncio solutio.",
      id: "86754b0b-edd1-45ae-91ef-e2733143b9e5",
      isActive: false,
      slug: "amiculum-congregatio-suspendo",
      updatedAt: new Date("2025-01-25T10:23:51.961Z"),
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
import { commerceCreateCommerceSaleschannel } from "@unified-api/typescript-sdk/funcs/commerceCreateCommerceSaleschannel.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceCreateCommerceSaleschannel(unifiedTo, {
    commerceSaleschannel: {
      collections: [],
      createdAt: new Date("2021-12-12T06:19:55.421Z"),
      description: "Utroque denuncio solutio.",
      id: "86754b0b-edd1-45ae-91ef-e2733143b9e5",
      isActive: false,
      slug: "amiculum-congregatio-suspendo",
      updatedAt: new Date("2025-01-25T10:23:51.961Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceCreateCommerceSaleschannel failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateCommerceSaleschannelRequest](../../sdk/models/operations/createcommercesaleschannelrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceSaleschannel](../../sdk/models/shared/commercesaleschannel.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getCommerceCollection

Retrieve a collection

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCommerceCollection" method="get" path="/commerce/{connection_id}/collection/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.commerce.getCommerceCollection({
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
import { commerceGetCommerceCollection } from "@unified-api/typescript-sdk/funcs/commerceGetCommerceCollection.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceGetCommerceCollection(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceGetCommerceCollection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCommerceCollectionRequest](../../sdk/models/operations/getcommercecollectionrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceCollection](../../sdk/models/shared/commercecollection.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getCommerceInventory

Retrieve an inventory

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCommerceInventory" method="get" path="/commerce/{connection_id}/inventory/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.commerce.getCommerceInventory({
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
import { commerceGetCommerceInventory } from "@unified-api/typescript-sdk/funcs/commerceGetCommerceInventory.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceGetCommerceInventory(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceGetCommerceInventory failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCommerceInventoryRequest](../../sdk/models/operations/getcommerceinventoryrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceInventory](../../sdk/models/shared/commerceinventory.md)\>**

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
  const result = await unifiedTo.commerce.getCommerceItem({
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
  const result = await unifiedTo.commerce.getCommerceItemvariant({
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

## getCommerceLocation

Retrieve a location

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCommerceLocation" method="get" path="/commerce/{connection_id}/location/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.commerce.getCommerceLocation({
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
import { locationGetCommerceLocation } from "@unified-api/typescript-sdk/funcs/locationGetCommerceLocation.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await locationGetCommerceLocation(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("locationGetCommerceLocation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCommerceLocationRequest](../../sdk/models/operations/getcommercelocationrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceLocation](../../sdk/models/shared/commercelocation.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getCommerceReservation

Retrieve a reservation

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCommerceReservation" method="get" path="/commerce/{connection_id}/reservation/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.commerce.getCommerceReservation({
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
import { commerceGetCommerceReservation } from "@unified-api/typescript-sdk/funcs/commerceGetCommerceReservation.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceGetCommerceReservation(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceGetCommerceReservation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCommerceReservationRequest](../../sdk/models/operations/getcommercereservationrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceReservation](../../sdk/models/shared/commercereservation.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getCommerceReview

Retrieve a review

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCommerceReview" method="get" path="/commerce/{connection_id}/review/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.commerce.getCommerceReview({
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
import { commerceGetCommerceReview } from "@unified-api/typescript-sdk/funcs/commerceGetCommerceReview.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceGetCommerceReview(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceGetCommerceReview failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCommerceReviewRequest](../../sdk/models/operations/getcommercereviewrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceReview](../../sdk/models/shared/commercereview.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getCommerceSaleschannel

Retrieve a saleschannel

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCommerceSaleschannel" method="get" path="/commerce/{connection_id}/saleschannel/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.commerce.getCommerceSaleschannel({
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
import { commerceGetCommerceSaleschannel } from "@unified-api/typescript-sdk/funcs/commerceGetCommerceSaleschannel.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceGetCommerceSaleschannel(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceGetCommerceSaleschannel failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCommerceSaleschannelRequest](../../sdk/models/operations/getcommercesaleschannelrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceSaleschannel](../../sdk/models/shared/commercesaleschannel.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listCommerceAvailabilities

List all availabilities

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listCommerceAvailabilities" method="get" path="/commerce/{connection_id}/availability" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.commerce.listCommerceAvailabilities({
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
import { commerceListCommerceAvailabilities } from "@unified-api/typescript-sdk/funcs/commerceListCommerceAvailabilities.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceListCommerceAvailabilities(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceListCommerceAvailabilities failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCommerceAvailabilitiesRequest](../../sdk/models/operations/listcommerceavailabilitiesrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceAvailability[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listCommerceCollections

List all collections

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listCommerceCollections" method="get" path="/commerce/{connection_id}/collection" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.commerce.listCommerceCollections({
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
import { commerceListCommerceCollections } from "@unified-api/typescript-sdk/funcs/commerceListCommerceCollections.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceListCommerceCollections(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceListCommerceCollections failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCommerceCollectionsRequest](../../sdk/models/operations/listcommercecollectionsrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceCollection[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listCommerceInventories

List all inventories

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listCommerceInventories" method="get" path="/commerce/{connection_id}/inventory" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.commerce.listCommerceInventories({
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
import { commerceListCommerceInventories } from "@unified-api/typescript-sdk/funcs/commerceListCommerceInventories.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceListCommerceInventories(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceListCommerceInventories failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCommerceInventoriesRequest](../../sdk/models/operations/listcommerceinventoriesrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceInventory[]](../../models/.md)\>**

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
  const result = await unifiedTo.commerce.listCommerceItems({
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
  const result = await unifiedTo.commerce.listCommerceItemvariants({
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

## listCommerceLocations

List all locations

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listCommerceLocations" method="get" path="/commerce/{connection_id}/location" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.commerce.listCommerceLocations({
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
import { locationListCommerceLocations } from "@unified-api/typescript-sdk/funcs/locationListCommerceLocations.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await locationListCommerceLocations(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("locationListCommerceLocations failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCommerceLocationsRequest](../../sdk/models/operations/listcommercelocationsrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceLocation[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listCommerceReservations

List all reservations

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listCommerceReservations" method="get" path="/commerce/{connection_id}/reservation" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.commerce.listCommerceReservations({
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
import { commerceListCommerceReservations } from "@unified-api/typescript-sdk/funcs/commerceListCommerceReservations.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceListCommerceReservations(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceListCommerceReservations failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCommerceReservationsRequest](../../sdk/models/operations/listcommercereservationsrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceReservation[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listCommerceReviews

List all reviews

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listCommerceReviews" method="get" path="/commerce/{connection_id}/review" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.commerce.listCommerceReviews({
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
import { commerceListCommerceReviews } from "@unified-api/typescript-sdk/funcs/commerceListCommerceReviews.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceListCommerceReviews(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceListCommerceReviews failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCommerceReviewsRequest](../../sdk/models/operations/listcommercereviewsrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceReview[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## listCommerceSaleschannels

List all saleschannels

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listCommerceSaleschannels" method="get" path="/commerce/{connection_id}/saleschannel" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.commerce.listCommerceSaleschannels({
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
import { commerceListCommerceSaleschannels } from "@unified-api/typescript-sdk/funcs/commerceListCommerceSaleschannels.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceListCommerceSaleschannels(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceListCommerceSaleschannels failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCommerceSaleschannelsRequest](../../sdk/models/operations/listcommercesaleschannelsrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceSaleschannel[]](../../models/.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchCommerceCollection

Update a collection

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchCommerceCollection" method="patch" path="/commerce/{connection_id}/collection/{id}" example="commerce_collection" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.commerce.patchCommerceCollection({
    commerceCollection: {
      createdAt: new Date("2023-07-14T00:42:54.742Z"),
      description: "The Integrated leading edge website Cheese offers reliable performance and productive design",
      id: "f310fadd-4dca-4959-a3f4-4abd2684d0a6",
      isActive: true,
      isFeatured: false,
      isVisible: false,
      itemMetadata: [],
      media: [
        {
          alt: "Defungo adopto thorax.",
          height: 759,
          id: "b90b140e-ecfa-4a87-b059-27baa6aaf0c0",
          metadata: [
            {
              id: "810048a8-730d-4346-be5d-7e48fa7ec4a6",
              slug: "censura",
              value: "toties",
            },
          ],
          position: 80,
          type: "video",
          url: "https://loremflickr.com/1319/1257?lock=7280448425732025",
          width: 40,
        },
      ],
      metadata: [
        {
          id: "43e3d1fb-e946-4caa-9673-16533e1177e1",
          slug: "aetas",
          value: "consuasor",
        },
      ],
      name: "Small Marble Chips",
      publicDescription: "Generic Gloves designed with Cotton for miserable performance",
      publicName: "Small Marble Chips",
      tags: [
        "ambulo",
        "adeptio",
        "contego",
      ],
      type: "COLLECTION",
      updatedAt: new Date("2025-03-13T00:28:05.744Z"),
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
import { commercePatchCommerceCollection } from "@unified-api/typescript-sdk/funcs/commercePatchCommerceCollection.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commercePatchCommerceCollection(unifiedTo, {
    commerceCollection: {
      createdAt: new Date("2023-07-14T00:42:54.742Z"),
      description: "The Integrated leading edge website Cheese offers reliable performance and productive design",
      id: "f310fadd-4dca-4959-a3f4-4abd2684d0a6",
      isActive: true,
      isFeatured: false,
      isVisible: false,
      itemMetadata: [],
      media: [
        {
          alt: "Defungo adopto thorax.",
          height: 759,
          id: "b90b140e-ecfa-4a87-b059-27baa6aaf0c0",
          metadata: [
            {
              id: "810048a8-730d-4346-be5d-7e48fa7ec4a6",
              slug: "censura",
              value: "toties",
            },
          ],
          position: 80,
          type: "video",
          url: "https://loremflickr.com/1319/1257?lock=7280448425732025",
          width: 40,
        },
      ],
      metadata: [
        {
          id: "43e3d1fb-e946-4caa-9673-16533e1177e1",
          slug: "aetas",
          value: "consuasor",
        },
      ],
      name: "Small Marble Chips",
      publicDescription: "Generic Gloves designed with Cotton for miserable performance",
      publicName: "Small Marble Chips",
      tags: [
        "ambulo",
        "adeptio",
        "contego",
      ],
      type: "COLLECTION",
      updatedAt: new Date("2025-03-13T00:28:05.744Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commercePatchCommerceCollection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchCommerceCollectionRequest](../../sdk/models/operations/patchcommercecollectionrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceCollection](../../sdk/models/shared/commercecollection.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchCommerceInventory

Update an inventory

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchCommerceInventory" method="patch" path="/commerce/{connection_id}/inventory/{id}" example="commerce_inventory" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.commerce.patchCommerceInventory({
    commerceInventory: {
      available: 337,
      updatedAt: new Date("2025-11-17T04:43:42.929Z"),
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
import { commercePatchCommerceInventory } from "@unified-api/typescript-sdk/funcs/commercePatchCommerceInventory.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commercePatchCommerceInventory(unifiedTo, {
    commerceInventory: {
      available: 337,
      updatedAt: new Date("2025-11-17T04:43:42.929Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commercePatchCommerceInventory failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchCommerceInventoryRequest](../../sdk/models/operations/patchcommerceinventoryrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceInventory](../../sdk/models/shared/commerceinventory.md)\>**

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
  const result = await unifiedTo.commerce.patchCommerceItem({
    commerceItem: {
      collections: [],
      createdAt: new Date("2019-06-21T20:16:18.628Z"),
      description: "Vulnero ustulo abeo.",
      duration: 87,
      globalCode: "calamitas",
      id: "395d4760-5606-41b5-ae0b-27ac3256912d",
      isActive: false,
      isFeatured: true,
      isTaxable: true,
      isVisible: true,
      media: [
        {
          alt: "Caterva eveniet acies candidus.",
          height: 663,
          id: "f86c5d81-1a1a-4958-8e18-f587aec2d8ad",
          metadata: [
            {
              id: "42dda3a4-c1e0-454a-806e-d518cd2b856d",
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
          id: "d87a64fa-5541-48d5-8038-cac3c3e668f2",
          metadata: [
            {
              id: "a56e625b-1c7a-4283-a7ef-c52353363409",
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
          id: "049b2ffe-43ae-448a-b966-ec9ac3b8f8e7",
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
      updatedAt: new Date("2022-04-17T23:08:17.221Z"),
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
      id: "395d4760-5606-41b5-ae0b-27ac3256912d",
      isActive: false,
      isFeatured: true,
      isTaxable: true,
      isVisible: true,
      media: [
        {
          alt: "Caterva eveniet acies candidus.",
          height: 663,
          id: "f86c5d81-1a1a-4958-8e18-f587aec2d8ad",
          metadata: [
            {
              id: "42dda3a4-c1e0-454a-806e-d518cd2b856d",
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
          id: "d87a64fa-5541-48d5-8038-cac3c3e668f2",
          metadata: [
            {
              id: "a56e625b-1c7a-4283-a7ef-c52353363409",
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
          id: "049b2ffe-43ae-448a-b966-ec9ac3b8f8e7",
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
      updatedAt: new Date("2022-04-17T23:08:17.221Z"),
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
  const result = await unifiedTo.commerce.patchCommerceItemvariant({
    commerceItemvariant: {
      availableAt: new Date("2022-02-02T16:10:33.503Z"),
      createdAt: new Date("2022-01-20T13:49:12.968Z"),
      description: "Featuring Helium-enhanced technology, our Chips offers unparalleled helpful performance",
      height: 52,
      id: "e8d08de0-e295-400f-8d35-c47df5003137",
      isActive: false,
      isFeatured: false,
      isVisible: false,
      length: 94,
      media: [
        {
          alt: "Calcar delibero cursim summisse.",
          height: 394,
          id: "3be0fdc2-e61a-41f6-a26f-e00d700f5f2a",
          metadata: [
            {
              id: "a00cd9ed-63d9-4232-8847-0a475357730f",
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
          id: "a0653358-201b-4813-b0f7-41ce7ffa19a5",
          metadata: [
            {
              id: "5978d017-f265-4273-8689-1611ef79afc8",
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
          id: "e0c141af-2150-43c1-a9c2-a3838b4b3e53",
          namespace: "custom",
          slug: "custom_property",
          value: "nihil",
        },
      ],
      name: "Keyboard",
      options: [
        {
          id: "f4b9f1ba-3683-4820-9f72-9861a3f89b84",
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
      updatedAt: new Date("2025-06-14T05:01:30.205Z"),
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
      id: "e8d08de0-e295-400f-8d35-c47df5003137",
      isActive: false,
      isFeatured: false,
      isVisible: false,
      length: 94,
      media: [
        {
          alt: "Calcar delibero cursim summisse.",
          height: 394,
          id: "3be0fdc2-e61a-41f6-a26f-e00d700f5f2a",
          metadata: [
            {
              id: "a00cd9ed-63d9-4232-8847-0a475357730f",
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
          id: "a0653358-201b-4813-b0f7-41ce7ffa19a5",
          metadata: [
            {
              id: "5978d017-f265-4273-8689-1611ef79afc8",
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
          id: "e0c141af-2150-43c1-a9c2-a3838b4b3e53",
          namespace: "custom",
          slug: "custom_property",
          value: "nihil",
        },
      ],
      name: "Keyboard",
      options: [
        {
          id: "f4b9f1ba-3683-4820-9f72-9861a3f89b84",
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
      updatedAt: new Date("2025-06-14T05:01:30.205Z"),
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

## patchCommerceLocation

Update a location

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchCommerceLocation" method="patch" path="/commerce/{connection_id}/location/{id}" example="commerce_location" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.commerce.patchCommerceLocation({
    commerceLocation: {
      address: {
        address1: "29896 The Limes",
        city: "New Kenny",
        countryCode: "US",
        postalCode: "14490-0609",
        region: "Virginia",
        regionCode: "MS",
      },
      categories: [],
      createdAt: new Date("2022-12-29T04:15:21.195Z"),
      currency: "XCD",
      description: "Adsidue audentia.",
      id: "d057bed9-6cee-4fda-b19c-8431e76e50b7",
      imageUrl: "https://picsum.photos/seed/hjFt1/1036/2220",
      isActive: false,
      languageLocale: "vulgaris",
      latitude: 0,
      locationType: "RESTAURANT",
      longitude: 0,
      media: [
        {
          alt: "Addo.",
          height: 283,
          id: "cb812db8-45dc-424d-9207-e5ef04a000ce",
          metadata: [
            {
              id: "82c41ed4-2e7b-4627-a02f-cbff12ac2067",
              slug: "abutor",
              value: "damno",
            },
          ],
          position: 40,
          type: "image",
          url: "https://picsum.photos/seed/QVh7ViTV/3964/1567",
          width: 1,
        },
      ],
      name: "Olson - Mraz",
      priceLevel: "",
      rating: 0,
      reviewCount: 0,
      telephones: [
        {
          telephone: "(872) 522-3201",
          type: "OTHER",
        },
        {
          telephone: "(236) 274-2445",
          type: "MOBILE",
        },
      ],
      updatedAt: new Date("2024-04-19T09:03:09.698Z"),
      webUrl: "https://chilly-edge.info",
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
import { locationPatchCommerceLocation } from "@unified-api/typescript-sdk/funcs/locationPatchCommerceLocation.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await locationPatchCommerceLocation(unifiedTo, {
    commerceLocation: {
      address: {
        address1: "29896 The Limes",
        city: "New Kenny",
        countryCode: "US",
        postalCode: "14490-0609",
        region: "Virginia",
        regionCode: "MS",
      },
      categories: [],
      createdAt: new Date("2022-12-29T04:15:21.195Z"),
      currency: "XCD",
      description: "Adsidue audentia.",
      id: "d057bed9-6cee-4fda-b19c-8431e76e50b7",
      imageUrl: "https://picsum.photos/seed/hjFt1/1036/2220",
      isActive: false,
      languageLocale: "vulgaris",
      latitude: 0,
      locationType: "RESTAURANT",
      longitude: 0,
      media: [
        {
          alt: "Addo.",
          height: 283,
          id: "cb812db8-45dc-424d-9207-e5ef04a000ce",
          metadata: [
            {
              id: "82c41ed4-2e7b-4627-a02f-cbff12ac2067",
              slug: "abutor",
              value: "damno",
            },
          ],
          position: 40,
          type: "image",
          url: "https://picsum.photos/seed/QVh7ViTV/3964/1567",
          width: 1,
        },
      ],
      name: "Olson - Mraz",
      priceLevel: "",
      rating: 0,
      reviewCount: 0,
      telephones: [
        {
          telephone: "(872) 522-3201",
          type: "OTHER",
        },
        {
          telephone: "(236) 274-2445",
          type: "MOBILE",
        },
      ],
      updatedAt: new Date("2024-04-19T09:03:09.698Z"),
      webUrl: "https://chilly-edge.info",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("locationPatchCommerceLocation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchCommerceLocationRequest](../../sdk/models/operations/patchcommercelocationrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceLocation](../../sdk/models/shared/commercelocation.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchCommerceReservation

Update a reservation

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchCommerceReservation" method="patch" path="/commerce/{connection_id}/reservation/{id}" example="commerce_reservation" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.commerce.patchCommerceReservation({
    commerceReservation: {
      createdAt: new Date("2021-12-14T19:50:31.151Z"),
      endAt: new Date("2022-01-01T22:00:17.868Z"),
      guestEmail: "Sunny.Strosin77@yahoo.com",
      guestName: "Annette Franecki",
      guestPhone: "(990) 317-6213",
      id: "8a197438-aaaf-4a89-bfc8-aa950a6d0a9e",
      itemName: "Practical Ceramic Shoes",
      notes: "Adsum textilis ipsum despecto.",
      size: 10,
      staffName: "Vickie Fahey",
      startAt: new Date("2021-12-18T00:40:25.125Z"),
      status: "PENDING",
      updatedAt: new Date("2023-01-03T00:35:54.825Z"),
      url: "https://cluttered-pine.info/",
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
import { commercePatchCommerceReservation } from "@unified-api/typescript-sdk/funcs/commercePatchCommerceReservation.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commercePatchCommerceReservation(unifiedTo, {
    commerceReservation: {
      createdAt: new Date("2021-12-14T19:50:31.151Z"),
      endAt: new Date("2022-01-01T22:00:17.868Z"),
      guestEmail: "Sunny.Strosin77@yahoo.com",
      guestName: "Annette Franecki",
      guestPhone: "(990) 317-6213",
      id: "8a197438-aaaf-4a89-bfc8-aa950a6d0a9e",
      itemName: "Practical Ceramic Shoes",
      notes: "Adsum textilis ipsum despecto.",
      size: 10,
      staffName: "Vickie Fahey",
      startAt: new Date("2021-12-18T00:40:25.125Z"),
      status: "PENDING",
      updatedAt: new Date("2023-01-03T00:35:54.825Z"),
      url: "https://cluttered-pine.info/",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commercePatchCommerceReservation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchCommerceReservationRequest](../../sdk/models/operations/patchcommercereservationrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceReservation](../../sdk/models/shared/commercereservation.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchCommerceReview

Update a review

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchCommerceReview" method="patch" path="/commerce/{connection_id}/review/{id}" example="commerce_review" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.commerce.patchCommerceReview({
    commerceReview: {
      authorAvatarUrl: "https://picsum.photos/seed/ix4Br3LA/2245/1245",
      authorEmail: "Cleve_Yundt@hotmail.com",
      authorLocation: "ipsum",
      authorName: "Marsha Krajcik",
      comments: [],
      content: "Taedium thymum adipiscor amicitia cui.",
      createdAt: new Date("2019-12-12T18:10:22.988Z"),
      helpfulVotes: 26,
      id: "2be1014a-f6ef-44b1-8364-63e832c7b609",
      isFeatured: true,
      isPublic: true,
      isVerified: false,
      media: [
        {
          alt: "Adulescens.",
          height: 519,
          id: "f6dd4f13-66bf-4b0b-9ba4-0d35bbfee062",
          metadata: [
            {
              id: "24f21d69-4914-4514-aa39-e2a10f27ecdc",
              slug: "aggero",
              value: "tero",
            },
          ],
          position: 72,
          type: "video",
          url: "https://loremflickr.com/882/1004?lock=7448492654002422",
          width: 75,
        },
        {
          alt: "Pauci timidus sol comburo thema.",
          height: 297,
          id: "684f018e-2d74-4b3a-9467-9ef36332ca09",
          metadata: [
            {
              id: "3eba9c7d-d88c-48a7-97a4-89beb1d45c23",
              slug: "vito",
              value: "cuppedia",
            },
          ],
          position: 61,
          type: "image",
          url: "https://picsum.photos/seed/3QDZ8/1208/2171",
          width: 96,
        },
        {
          alt: "Cuppedia vestrum patruus.",
          height: 6,
          id: "95c324ce-9f01-4538-bfa6-047dc94030b9",
          metadata: [
            {
              id: "57426ebc-2254-4c68-b307-3c3f7448a7bf",
              slug: "arbitro",
              value: "villa",
            },
          ],
          position: 60,
          type: "video",
          url: "https://picsum.photos/seed/ytybC/2616/710",
          width: 74,
        },
      ],
      metadata: [],
      rating: 3,
      status: "APPROVED",
      title: "Coepi adamo amicitia auxilium toties.",
      unhelpfulVotes: 49,
      updatedAt: new Date("2025-08-18T01:18:12.051Z"),
      url: "https://excitable-underneath.com",
      verifiedPurchase: false,
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
import { commercePatchCommerceReview } from "@unified-api/typescript-sdk/funcs/commercePatchCommerceReview.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commercePatchCommerceReview(unifiedTo, {
    commerceReview: {
      authorAvatarUrl: "https://picsum.photos/seed/ix4Br3LA/2245/1245",
      authorEmail: "Cleve_Yundt@hotmail.com",
      authorLocation: "ipsum",
      authorName: "Marsha Krajcik",
      comments: [],
      content: "Taedium thymum adipiscor amicitia cui.",
      createdAt: new Date("2019-12-12T18:10:22.988Z"),
      helpfulVotes: 26,
      id: "2be1014a-f6ef-44b1-8364-63e832c7b609",
      isFeatured: true,
      isPublic: true,
      isVerified: false,
      media: [
        {
          alt: "Adulescens.",
          height: 519,
          id: "f6dd4f13-66bf-4b0b-9ba4-0d35bbfee062",
          metadata: [
            {
              id: "24f21d69-4914-4514-aa39-e2a10f27ecdc",
              slug: "aggero",
              value: "tero",
            },
          ],
          position: 72,
          type: "video",
          url: "https://loremflickr.com/882/1004?lock=7448492654002422",
          width: 75,
        },
        {
          alt: "Pauci timidus sol comburo thema.",
          height: 297,
          id: "684f018e-2d74-4b3a-9467-9ef36332ca09",
          metadata: [
            {
              id: "3eba9c7d-d88c-48a7-97a4-89beb1d45c23",
              slug: "vito",
              value: "cuppedia",
            },
          ],
          position: 61,
          type: "image",
          url: "https://picsum.photos/seed/3QDZ8/1208/2171",
          width: 96,
        },
        {
          alt: "Cuppedia vestrum patruus.",
          height: 6,
          id: "95c324ce-9f01-4538-bfa6-047dc94030b9",
          metadata: [
            {
              id: "57426ebc-2254-4c68-b307-3c3f7448a7bf",
              slug: "arbitro",
              value: "villa",
            },
          ],
          position: 60,
          type: "video",
          url: "https://picsum.photos/seed/ytybC/2616/710",
          width: 74,
        },
      ],
      metadata: [],
      rating: 3,
      status: "APPROVED",
      title: "Coepi adamo amicitia auxilium toties.",
      unhelpfulVotes: 49,
      updatedAt: new Date("2025-08-18T01:18:12.051Z"),
      url: "https://excitable-underneath.com",
      verifiedPurchase: false,
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commercePatchCommerceReview failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchCommerceReviewRequest](../../sdk/models/operations/patchcommercereviewrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceReview](../../sdk/models/shared/commercereview.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## patchCommerceSaleschannel

Update a saleschannel

### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchCommerceSaleschannel" method="patch" path="/commerce/{connection_id}/saleschannel/{id}" example="commerce_saleschannel" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.commerce.patchCommerceSaleschannel({
    commerceSaleschannel: {
      collections: [],
      createdAt: new Date("2021-12-12T06:19:55.421Z"),
      description: "Utroque denuncio solutio.",
      id: "e027a435-0d76-4ed7-aa84-92ebb40a9057",
      isActive: false,
      slug: "amiculum-congregatio-suspendo",
      updatedAt: new Date("2025-01-25T10:23:51.968Z"),
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
import { commercePatchCommerceSaleschannel } from "@unified-api/typescript-sdk/funcs/commercePatchCommerceSaleschannel.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commercePatchCommerceSaleschannel(unifiedTo, {
    commerceSaleschannel: {
      collections: [],
      createdAt: new Date("2021-12-12T06:19:55.421Z"),
      description: "Utroque denuncio solutio.",
      id: "e027a435-0d76-4ed7-aa84-92ebb40a9057",
      isActive: false,
      slug: "amiculum-congregatio-suspendo",
      updatedAt: new Date("2025-01-25T10:23:51.968Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commercePatchCommerceSaleschannel failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchCommerceSaleschannelRequest](../../sdk/models/operations/patchcommercesaleschannelrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceSaleschannel](../../sdk/models/shared/commercesaleschannel.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeCommerceCollection

Remove a collection

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeCommerceCollection" method="delete" path="/commerce/{connection_id}/collection/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.commerce.removeCommerceCollection({
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
import { commerceRemoveCommerceCollection } from "@unified-api/typescript-sdk/funcs/commerceRemoveCommerceCollection.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceRemoveCommerceCollection(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceRemoveCommerceCollection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveCommerceCollectionRequest](../../sdk/models/operations/removecommercecollectionrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveCommerceCollectionResponse](../../sdk/models/operations/removecommercecollectionresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeCommerceInventory

Remove an inventory

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeCommerceInventory" method="delete" path="/commerce/{connection_id}/inventory/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.commerce.removeCommerceInventory({
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
import { commerceRemoveCommerceInventory } from "@unified-api/typescript-sdk/funcs/commerceRemoveCommerceInventory.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceRemoveCommerceInventory(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceRemoveCommerceInventory failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveCommerceInventoryRequest](../../sdk/models/operations/removecommerceinventoryrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveCommerceInventoryResponse](../../sdk/models/operations/removecommerceinventoryresponse.md)\>**

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
  const result = await unifiedTo.commerce.removeCommerceItem({
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
  const result = await unifiedTo.commerce.removeCommerceItemvariant({
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

## removeCommerceLocation

Remove a location

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeCommerceLocation" method="delete" path="/commerce/{connection_id}/location/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.commerce.removeCommerceLocation({
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
import { locationRemoveCommerceLocation } from "@unified-api/typescript-sdk/funcs/locationRemoveCommerceLocation.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await locationRemoveCommerceLocation(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("locationRemoveCommerceLocation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveCommerceLocationRequest](../../sdk/models/operations/removecommercelocationrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveCommerceLocationResponse](../../sdk/models/operations/removecommercelocationresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeCommerceReservation

Remove a reservation

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeCommerceReservation" method="delete" path="/commerce/{connection_id}/reservation/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.commerce.removeCommerceReservation({
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
import { commerceRemoveCommerceReservation } from "@unified-api/typescript-sdk/funcs/commerceRemoveCommerceReservation.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceRemoveCommerceReservation(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceRemoveCommerceReservation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveCommerceReservationRequest](../../sdk/models/operations/removecommercereservationrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveCommerceReservationResponse](../../sdk/models/operations/removecommercereservationresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeCommerceReview

Remove a review

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeCommerceReview" method="delete" path="/commerce/{connection_id}/review/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.commerce.removeCommerceReview({
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
import { commerceRemoveCommerceReview } from "@unified-api/typescript-sdk/funcs/commerceRemoveCommerceReview.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceRemoveCommerceReview(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceRemoveCommerceReview failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveCommerceReviewRequest](../../sdk/models/operations/removecommercereviewrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveCommerceReviewResponse](../../sdk/models/operations/removecommercereviewresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeCommerceSaleschannel

Remove a saleschannel

### Example Usage

<!-- UsageSnippet language="typescript" operationID="removeCommerceSaleschannel" method="delete" path="/commerce/{connection_id}/saleschannel/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.commerce.removeCommerceSaleschannel({
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
import { commerceRemoveCommerceSaleschannel } from "@unified-api/typescript-sdk/funcs/commerceRemoveCommerceSaleschannel.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceRemoveCommerceSaleschannel(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceRemoveCommerceSaleschannel failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.RemoveCommerceSaleschannelRequest](../../sdk/models/operations/removecommercesaleschannelrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.RemoveCommerceSaleschannelResponse](../../sdk/models/operations/removecommercesaleschannelresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateCommerceCollection

Update a collection

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateCommerceCollection" method="put" path="/commerce/{connection_id}/collection/{id}" example="commerce_collection" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.commerce.updateCommerceCollection({
    commerceCollection: {
      createdAt: new Date("2023-07-14T00:42:54.742Z"),
      description: "The Integrated leading edge website Cheese offers reliable performance and productive design",
      id: "f310fadd-4dca-4959-a3f4-4abd2684d0a6",
      isActive: true,
      isFeatured: false,
      isVisible: false,
      itemMetadata: [],
      media: [
        {
          alt: "Defungo adopto thorax.",
          height: 759,
          id: "b90b140e-ecfa-4a87-b059-27baa6aaf0c0",
          metadata: [
            {
              id: "810048a8-730d-4346-be5d-7e48fa7ec4a6",
              slug: "censura",
              value: "toties",
            },
          ],
          position: 80,
          type: "video",
          url: "https://loremflickr.com/1319/1257?lock=7280448425732025",
          width: 40,
        },
      ],
      metadata: [
        {
          id: "43e3d1fb-e946-4caa-9673-16533e1177e1",
          slug: "aetas",
          value: "consuasor",
        },
      ],
      name: "Small Marble Chips",
      publicDescription: "Generic Gloves designed with Cotton for miserable performance",
      publicName: "Small Marble Chips",
      tags: [
        "ambulo",
        "adeptio",
        "contego",
      ],
      type: "COLLECTION",
      updatedAt: new Date("2025-03-13T00:28:05.744Z"),
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
import { commerceUpdateCommerceCollection } from "@unified-api/typescript-sdk/funcs/commerceUpdateCommerceCollection.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceUpdateCommerceCollection(unifiedTo, {
    commerceCollection: {
      createdAt: new Date("2023-07-14T00:42:54.742Z"),
      description: "The Integrated leading edge website Cheese offers reliable performance and productive design",
      id: "f310fadd-4dca-4959-a3f4-4abd2684d0a6",
      isActive: true,
      isFeatured: false,
      isVisible: false,
      itemMetadata: [],
      media: [
        {
          alt: "Defungo adopto thorax.",
          height: 759,
          id: "b90b140e-ecfa-4a87-b059-27baa6aaf0c0",
          metadata: [
            {
              id: "810048a8-730d-4346-be5d-7e48fa7ec4a6",
              slug: "censura",
              value: "toties",
            },
          ],
          position: 80,
          type: "video",
          url: "https://loremflickr.com/1319/1257?lock=7280448425732025",
          width: 40,
        },
      ],
      metadata: [
        {
          id: "43e3d1fb-e946-4caa-9673-16533e1177e1",
          slug: "aetas",
          value: "consuasor",
        },
      ],
      name: "Small Marble Chips",
      publicDescription: "Generic Gloves designed with Cotton for miserable performance",
      publicName: "Small Marble Chips",
      tags: [
        "ambulo",
        "adeptio",
        "contego",
      ],
      type: "COLLECTION",
      updatedAt: new Date("2025-03-13T00:28:05.744Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceUpdateCommerceCollection failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateCommerceCollectionRequest](../../sdk/models/operations/updatecommercecollectionrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceCollection](../../sdk/models/shared/commercecollection.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateCommerceInventory

Update an inventory

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateCommerceInventory" method="put" path="/commerce/{connection_id}/inventory/{id}" example="commerce_inventory" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.commerce.updateCommerceInventory({
    commerceInventory: {
      available: 337,
      updatedAt: new Date("2025-11-17T04:43:42.929Z"),
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
import { commerceUpdateCommerceInventory } from "@unified-api/typescript-sdk/funcs/commerceUpdateCommerceInventory.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceUpdateCommerceInventory(unifiedTo, {
    commerceInventory: {
      available: 337,
      updatedAt: new Date("2025-11-17T04:43:42.929Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceUpdateCommerceInventory failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateCommerceInventoryRequest](../../sdk/models/operations/updatecommerceinventoryrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceInventory](../../sdk/models/shared/commerceinventory.md)\>**

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
  const result = await unifiedTo.commerce.updateCommerceItem({
    commerceItem: {
      collections: [],
      createdAt: new Date("2019-06-21T20:16:18.628Z"),
      description: "Vulnero ustulo abeo.",
      duration: 87,
      globalCode: "calamitas",
      id: "395d4760-5606-41b5-ae0b-27ac3256912d",
      isActive: false,
      isFeatured: true,
      isTaxable: true,
      isVisible: true,
      media: [
        {
          alt: "Caterva eveniet acies candidus.",
          height: 663,
          id: "f86c5d81-1a1a-4958-8e18-f587aec2d8ad",
          metadata: [
            {
              id: "42dda3a4-c1e0-454a-806e-d518cd2b856d",
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
          id: "d87a64fa-5541-48d5-8038-cac3c3e668f2",
          metadata: [
            {
              id: "a56e625b-1c7a-4283-a7ef-c52353363409",
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
          id: "049b2ffe-43ae-448a-b966-ec9ac3b8f8e7",
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
      updatedAt: new Date("2022-04-17T23:08:17.221Z"),
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
      id: "395d4760-5606-41b5-ae0b-27ac3256912d",
      isActive: false,
      isFeatured: true,
      isTaxable: true,
      isVisible: true,
      media: [
        {
          alt: "Caterva eveniet acies candidus.",
          height: 663,
          id: "f86c5d81-1a1a-4958-8e18-f587aec2d8ad",
          metadata: [
            {
              id: "42dda3a4-c1e0-454a-806e-d518cd2b856d",
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
          id: "d87a64fa-5541-48d5-8038-cac3c3e668f2",
          metadata: [
            {
              id: "a56e625b-1c7a-4283-a7ef-c52353363409",
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
          id: "049b2ffe-43ae-448a-b966-ec9ac3b8f8e7",
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
      updatedAt: new Date("2022-04-17T23:08:17.221Z"),
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
  const result = await unifiedTo.commerce.updateCommerceItemvariant({
    commerceItemvariant: {
      availableAt: new Date("2022-02-02T16:10:33.503Z"),
      createdAt: new Date("2022-01-20T13:49:12.968Z"),
      description: "Featuring Helium-enhanced technology, our Chips offers unparalleled helpful performance",
      height: 52,
      id: "e8d08de0-e295-400f-8d35-c47df5003137",
      isActive: false,
      isFeatured: false,
      isVisible: false,
      length: 94,
      media: [
        {
          alt: "Calcar delibero cursim summisse.",
          height: 394,
          id: "3be0fdc2-e61a-41f6-a26f-e00d700f5f2a",
          metadata: [
            {
              id: "a00cd9ed-63d9-4232-8847-0a475357730f",
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
          id: "a0653358-201b-4813-b0f7-41ce7ffa19a5",
          metadata: [
            {
              id: "5978d017-f265-4273-8689-1611ef79afc8",
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
          id: "e0c141af-2150-43c1-a9c2-a3838b4b3e53",
          namespace: "custom",
          slug: "custom_property",
          value: "nihil",
        },
      ],
      name: "Keyboard",
      options: [
        {
          id: "f4b9f1ba-3683-4820-9f72-9861a3f89b84",
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
      updatedAt: new Date("2025-06-14T05:01:30.205Z"),
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
      id: "e8d08de0-e295-400f-8d35-c47df5003137",
      isActive: false,
      isFeatured: false,
      isVisible: false,
      length: 94,
      media: [
        {
          alt: "Calcar delibero cursim summisse.",
          height: 394,
          id: "3be0fdc2-e61a-41f6-a26f-e00d700f5f2a",
          metadata: [
            {
              id: "a00cd9ed-63d9-4232-8847-0a475357730f",
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
          id: "a0653358-201b-4813-b0f7-41ce7ffa19a5",
          metadata: [
            {
              id: "5978d017-f265-4273-8689-1611ef79afc8",
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
          id: "e0c141af-2150-43c1-a9c2-a3838b4b3e53",
          namespace: "custom",
          slug: "custom_property",
          value: "nihil",
        },
      ],
      name: "Keyboard",
      options: [
        {
          id: "f4b9f1ba-3683-4820-9f72-9861a3f89b84",
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
      updatedAt: new Date("2025-06-14T05:01:30.205Z"),
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

## updateCommerceLocation

Update a location

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateCommerceLocation" method="put" path="/commerce/{connection_id}/location/{id}" example="commerce_location" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.commerce.updateCommerceLocation({
    commerceLocation: {
      address: {
        address1: "29896 The Limes",
        city: "New Kenny",
        countryCode: "US",
        postalCode: "14490-0609",
        region: "Virginia",
        regionCode: "MS",
      },
      categories: [],
      createdAt: new Date("2022-12-29T04:15:21.195Z"),
      currency: "XCD",
      description: "Adsidue audentia.",
      id: "d057bed9-6cee-4fda-b19c-8431e76e50b7",
      imageUrl: "https://picsum.photos/seed/hjFt1/1036/2220",
      isActive: false,
      languageLocale: "vulgaris",
      latitude: 0,
      locationType: "RESTAURANT",
      longitude: 0,
      media: [
        {
          alt: "Addo.",
          height: 283,
          id: "cb812db8-45dc-424d-9207-e5ef04a000ce",
          metadata: [
            {
              id: "82c41ed4-2e7b-4627-a02f-cbff12ac2067",
              slug: "abutor",
              value: "damno",
            },
          ],
          position: 40,
          type: "image",
          url: "https://picsum.photos/seed/QVh7ViTV/3964/1567",
          width: 1,
        },
      ],
      name: "Olson - Mraz",
      priceLevel: "",
      rating: 0,
      reviewCount: 0,
      telephones: [
        {
          telephone: "(872) 522-3201",
          type: "OTHER",
        },
        {
          telephone: "(236) 274-2445",
          type: "MOBILE",
        },
      ],
      updatedAt: new Date("2024-04-19T09:03:09.698Z"),
      webUrl: "https://chilly-edge.info",
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
import { locationUpdateCommerceLocation } from "@unified-api/typescript-sdk/funcs/locationUpdateCommerceLocation.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await locationUpdateCommerceLocation(unifiedTo, {
    commerceLocation: {
      address: {
        address1: "29896 The Limes",
        city: "New Kenny",
        countryCode: "US",
        postalCode: "14490-0609",
        region: "Virginia",
        regionCode: "MS",
      },
      categories: [],
      createdAt: new Date("2022-12-29T04:15:21.195Z"),
      currency: "XCD",
      description: "Adsidue audentia.",
      id: "d057bed9-6cee-4fda-b19c-8431e76e50b7",
      imageUrl: "https://picsum.photos/seed/hjFt1/1036/2220",
      isActive: false,
      languageLocale: "vulgaris",
      latitude: 0,
      locationType: "RESTAURANT",
      longitude: 0,
      media: [
        {
          alt: "Addo.",
          height: 283,
          id: "cb812db8-45dc-424d-9207-e5ef04a000ce",
          metadata: [
            {
              id: "82c41ed4-2e7b-4627-a02f-cbff12ac2067",
              slug: "abutor",
              value: "damno",
            },
          ],
          position: 40,
          type: "image",
          url: "https://picsum.photos/seed/QVh7ViTV/3964/1567",
          width: 1,
        },
      ],
      name: "Olson - Mraz",
      priceLevel: "",
      rating: 0,
      reviewCount: 0,
      telephones: [
        {
          telephone: "(872) 522-3201",
          type: "OTHER",
        },
        {
          telephone: "(236) 274-2445",
          type: "MOBILE",
        },
      ],
      updatedAt: new Date("2024-04-19T09:03:09.698Z"),
      webUrl: "https://chilly-edge.info",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("locationUpdateCommerceLocation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateCommerceLocationRequest](../../sdk/models/operations/updatecommercelocationrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceLocation](../../sdk/models/shared/commercelocation.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateCommerceReservation

Update a reservation

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateCommerceReservation" method="put" path="/commerce/{connection_id}/reservation/{id}" example="commerce_reservation" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.commerce.updateCommerceReservation({
    commerceReservation: {
      createdAt: new Date("2021-12-14T19:50:31.151Z"),
      endAt: new Date("2022-01-01T22:00:17.868Z"),
      guestEmail: "Sunny.Strosin77@yahoo.com",
      guestName: "Annette Franecki",
      guestPhone: "(990) 317-6213",
      id: "8a197438-aaaf-4a89-bfc8-aa950a6d0a9e",
      itemName: "Practical Ceramic Shoes",
      notes: "Adsum textilis ipsum despecto.",
      size: 10,
      staffName: "Vickie Fahey",
      startAt: new Date("2021-12-18T00:40:25.125Z"),
      status: "PENDING",
      updatedAt: new Date("2023-01-03T00:35:54.825Z"),
      url: "https://cluttered-pine.info/",
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
import { commerceUpdateCommerceReservation } from "@unified-api/typescript-sdk/funcs/commerceUpdateCommerceReservation.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceUpdateCommerceReservation(unifiedTo, {
    commerceReservation: {
      createdAt: new Date("2021-12-14T19:50:31.151Z"),
      endAt: new Date("2022-01-01T22:00:17.868Z"),
      guestEmail: "Sunny.Strosin77@yahoo.com",
      guestName: "Annette Franecki",
      guestPhone: "(990) 317-6213",
      id: "8a197438-aaaf-4a89-bfc8-aa950a6d0a9e",
      itemName: "Practical Ceramic Shoes",
      notes: "Adsum textilis ipsum despecto.",
      size: 10,
      staffName: "Vickie Fahey",
      startAt: new Date("2021-12-18T00:40:25.125Z"),
      status: "PENDING",
      updatedAt: new Date("2023-01-03T00:35:54.825Z"),
      url: "https://cluttered-pine.info/",
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceUpdateCommerceReservation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateCommerceReservationRequest](../../sdk/models/operations/updatecommercereservationrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceReservation](../../sdk/models/shared/commercereservation.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateCommerceReview

Update a review

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateCommerceReview" method="put" path="/commerce/{connection_id}/review/{id}" example="commerce_review" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.commerce.updateCommerceReview({
    commerceReview: {
      authorAvatarUrl: "https://picsum.photos/seed/ix4Br3LA/2245/1245",
      authorEmail: "Cleve_Yundt@hotmail.com",
      authorLocation: "ipsum",
      authorName: "Marsha Krajcik",
      comments: [],
      content: "Taedium thymum adipiscor amicitia cui.",
      createdAt: new Date("2019-12-12T18:10:22.988Z"),
      helpfulVotes: 26,
      id: "2be1014a-f6ef-44b1-8364-63e832c7b609",
      isFeatured: true,
      isPublic: true,
      isVerified: false,
      media: [
        {
          alt: "Adulescens.",
          height: 519,
          id: "f6dd4f13-66bf-4b0b-9ba4-0d35bbfee062",
          metadata: [
            {
              id: "24f21d69-4914-4514-aa39-e2a10f27ecdc",
              slug: "aggero",
              value: "tero",
            },
          ],
          position: 72,
          type: "video",
          url: "https://loremflickr.com/882/1004?lock=7448492654002422",
          width: 75,
        },
        {
          alt: "Pauci timidus sol comburo thema.",
          height: 297,
          id: "684f018e-2d74-4b3a-9467-9ef36332ca09",
          metadata: [
            {
              id: "3eba9c7d-d88c-48a7-97a4-89beb1d45c23",
              slug: "vito",
              value: "cuppedia",
            },
          ],
          position: 61,
          type: "image",
          url: "https://picsum.photos/seed/3QDZ8/1208/2171",
          width: 96,
        },
        {
          alt: "Cuppedia vestrum patruus.",
          height: 6,
          id: "95c324ce-9f01-4538-bfa6-047dc94030b9",
          metadata: [
            {
              id: "57426ebc-2254-4c68-b307-3c3f7448a7bf",
              slug: "arbitro",
              value: "villa",
            },
          ],
          position: 60,
          type: "video",
          url: "https://picsum.photos/seed/ytybC/2616/710",
          width: 74,
        },
      ],
      metadata: [],
      rating: 3,
      status: "APPROVED",
      title: "Coepi adamo amicitia auxilium toties.",
      unhelpfulVotes: 49,
      updatedAt: new Date("2025-08-18T01:18:12.051Z"),
      url: "https://excitable-underneath.com",
      verifiedPurchase: false,
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
import { commerceUpdateCommerceReview } from "@unified-api/typescript-sdk/funcs/commerceUpdateCommerceReview.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceUpdateCommerceReview(unifiedTo, {
    commerceReview: {
      authorAvatarUrl: "https://picsum.photos/seed/ix4Br3LA/2245/1245",
      authorEmail: "Cleve_Yundt@hotmail.com",
      authorLocation: "ipsum",
      authorName: "Marsha Krajcik",
      comments: [],
      content: "Taedium thymum adipiscor amicitia cui.",
      createdAt: new Date("2019-12-12T18:10:22.988Z"),
      helpfulVotes: 26,
      id: "2be1014a-f6ef-44b1-8364-63e832c7b609",
      isFeatured: true,
      isPublic: true,
      isVerified: false,
      media: [
        {
          alt: "Adulescens.",
          height: 519,
          id: "f6dd4f13-66bf-4b0b-9ba4-0d35bbfee062",
          metadata: [
            {
              id: "24f21d69-4914-4514-aa39-e2a10f27ecdc",
              slug: "aggero",
              value: "tero",
            },
          ],
          position: 72,
          type: "video",
          url: "https://loremflickr.com/882/1004?lock=7448492654002422",
          width: 75,
        },
        {
          alt: "Pauci timidus sol comburo thema.",
          height: 297,
          id: "684f018e-2d74-4b3a-9467-9ef36332ca09",
          metadata: [
            {
              id: "3eba9c7d-d88c-48a7-97a4-89beb1d45c23",
              slug: "vito",
              value: "cuppedia",
            },
          ],
          position: 61,
          type: "image",
          url: "https://picsum.photos/seed/3QDZ8/1208/2171",
          width: 96,
        },
        {
          alt: "Cuppedia vestrum patruus.",
          height: 6,
          id: "95c324ce-9f01-4538-bfa6-047dc94030b9",
          metadata: [
            {
              id: "57426ebc-2254-4c68-b307-3c3f7448a7bf",
              slug: "arbitro",
              value: "villa",
            },
          ],
          position: 60,
          type: "video",
          url: "https://picsum.photos/seed/ytybC/2616/710",
          width: 74,
        },
      ],
      metadata: [],
      rating: 3,
      status: "APPROVED",
      title: "Coepi adamo amicitia auxilium toties.",
      unhelpfulVotes: 49,
      updatedAt: new Date("2025-08-18T01:18:12.051Z"),
      url: "https://excitable-underneath.com",
      verifiedPurchase: false,
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceUpdateCommerceReview failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateCommerceReviewRequest](../../sdk/models/operations/updatecommercereviewrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceReview](../../sdk/models/shared/commercereview.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateCommerceSaleschannel

Update a saleschannel

### Example Usage

<!-- UsageSnippet language="typescript" operationID="updateCommerceSaleschannel" method="put" path="/commerce/{connection_id}/saleschannel/{id}" example="commerce_saleschannel" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.commerce.updateCommerceSaleschannel({
    commerceSaleschannel: {
      collections: [],
      createdAt: new Date("2021-12-12T06:19:55.421Z"),
      description: "Utroque denuncio solutio.",
      id: "e027a435-0d76-4ed7-aa84-92ebb40a9057",
      isActive: false,
      slug: "amiculum-congregatio-suspendo",
      updatedAt: new Date("2025-01-25T10:23:51.968Z"),
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
import { commerceUpdateCommerceSaleschannel } from "@unified-api/typescript-sdk/funcs/commerceUpdateCommerceSaleschannel.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceUpdateCommerceSaleschannel(unifiedTo, {
    commerceSaleschannel: {
      collections: [],
      createdAt: new Date("2021-12-12T06:19:55.421Z"),
      description: "Utroque denuncio solutio.",
      id: "e027a435-0d76-4ed7-aa84-92ebb40a9057",
      isActive: false,
      slug: "amiculum-congregatio-suspendo",
      updatedAt: new Date("2025-01-25T10:23:51.968Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceUpdateCommerceSaleschannel failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateCommerceSaleschannelRequest](../../sdk/models/operations/updatecommercesaleschannelrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceSaleschannel](../../sdk/models/shared/commercesaleschannel.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |