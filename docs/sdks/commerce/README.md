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

Creates a CommerceCollection. Provide the unified CommerceCollection fields in the request body; they are mapped to the provider's API. Returns the created CommerceCollection.

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
      id: "65b5fd73-5424-4b27-9ea4-47fcb2547673",
      isActive: true,
      isFeatured: false,
      isVisible: false,
      itemMetadata: [],
      media: [
        {
          alt: "Defungo adopto thorax.",
          height: 759,
          id: "8b640b1b-e9d7-4661-8d7d-8ac00d21b8d1",
          metadata: [
            {
              id: "984636d3-eead-499d-836f-43f965b7b14b",
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
          id: "26bccd7f-be8d-4d2c-abeb-6545e00c5a2b",
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
      updatedAt: new Date("2025-03-19T15:45:16.302Z"),
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
      id: "65b5fd73-5424-4b27-9ea4-47fcb2547673",
      isActive: true,
      isFeatured: false,
      isVisible: false,
      itemMetadata: [],
      media: [
        {
          alt: "Defungo adopto thorax.",
          height: 759,
          id: "8b640b1b-e9d7-4661-8d7d-8ac00d21b8d1",
          metadata: [
            {
              id: "984636d3-eead-499d-836f-43f965b7b14b",
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
          id: "26bccd7f-be8d-4d2c-abeb-6545e00c5a2b",
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
      updatedAt: new Date("2025-03-19T15:45:16.302Z"),
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

Creates a CommerceInventory. Provide the unified CommerceInventory fields in the request body; they are mapped to the provider's API. Returns the created CommerceInventory.

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
      id: "54789a29-fdda-4393-9faf-0c9ce8d9ab47",
      metadata: [],
      updatedAt: new Date("2025-11-27T16:08:08.822Z"),
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
      id: "54789a29-fdda-4393-9faf-0c9ce8d9ab47",
      metadata: [],
      updatedAt: new Date("2025-11-27T16:08:08.822Z"),
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
  const result = await unifiedTo.commerce.createCommerceItem({
    commerceItem: {
      collections: [],
      createdAt: new Date("2019-06-21T20:16:18.628Z"),
      description: "Decretum vulnero ustulo abeo.",
      duration: 104,
      globalCode: "978-0-85270-680-0",
      id: "637c0ec7-3d3d-4e81-a182-d60799c564d3",
      isActive: false,
      isFeatured: false,
      isTaxable: true,
      isVisible: true,
      media: [
        {
          alt: "Caterva eveniet acies candidus.",
          height: 876,
          id: "e65915d7-be75-43b6-af2b-361cb8d8f5ef",
          metadata: [
            {
              id: "60619a80-cda4-4b5e-b638-7a0b716453f9",
              slug: "doloremque",
              value: "allatus",
            },
          ],
          position: 21,
          type: "video",
          url: "https://picsum.photos/seed/v73y0uzyK/3001/972",
          width: 67,
        },
        {
          alt: "Comedo.",
          height: 651,
          id: "e7484dc7-e80c-4b3f-821a-2a3e73950609",
          metadata: [
            {
              id: "96828295-20b4-4966-aa15-396adb4bda53",
              slug: "bis",
              value: "somniculosus",
            },
          ],
          position: 51,
          type: "image",
          url: "https://picsum.photos/seed/Ao4iatfO/771/3906",
          width: 3,
        },
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "772f85eb-9ca9-4b02-8d0c-03fda1437bea",
          namespace: "custom",
          slug: "custom_property",
          value: "abstergo",
        },
      ],
      name: "Handcrafted Rubber Tuna",
      prices: [
        {
          currency: "USD",
          price: 78.11,
        },
      ],
      publicDescription: "Custodia ventus solio compono.",
      publicName: "Handcrafted Rubber Tuna",
      requiresShipping: true,
      slug: "handcrafted-rubber-tuna",
      tags: [
        "beatae",
        "blanditiis",
      ],
      totalStock: 682,
      type: "SERVICE",
      updatedAt: new Date("2022-04-22T23:26:56.820Z"),
      vendorName: "Mayer - Flatley",
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
      description: "Decretum vulnero ustulo abeo.",
      duration: 104,
      globalCode: "978-0-85270-680-0",
      id: "637c0ec7-3d3d-4e81-a182-d60799c564d3",
      isActive: false,
      isFeatured: false,
      isTaxable: true,
      isVisible: true,
      media: [
        {
          alt: "Caterva eveniet acies candidus.",
          height: 876,
          id: "e65915d7-be75-43b6-af2b-361cb8d8f5ef",
          metadata: [
            {
              id: "60619a80-cda4-4b5e-b638-7a0b716453f9",
              slug: "doloremque",
              value: "allatus",
            },
          ],
          position: 21,
          type: "video",
          url: "https://picsum.photos/seed/v73y0uzyK/3001/972",
          width: 67,
        },
        {
          alt: "Comedo.",
          height: 651,
          id: "e7484dc7-e80c-4b3f-821a-2a3e73950609",
          metadata: [
            {
              id: "96828295-20b4-4966-aa15-396adb4bda53",
              slug: "bis",
              value: "somniculosus",
            },
          ],
          position: 51,
          type: "image",
          url: "https://picsum.photos/seed/Ao4iatfO/771/3906",
          width: 3,
        },
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "772f85eb-9ca9-4b02-8d0c-03fda1437bea",
          namespace: "custom",
          slug: "custom_property",
          value: "abstergo",
        },
      ],
      name: "Handcrafted Rubber Tuna",
      prices: [
        {
          currency: "USD",
          price: 78.11,
        },
      ],
      publicDescription: "Custodia ventus solio compono.",
      publicName: "Handcrafted Rubber Tuna",
      requiresShipping: true,
      slug: "handcrafted-rubber-tuna",
      tags: [
        "beatae",
        "blanditiis",
      ],
      totalStock: 682,
      type: "SERVICE",
      updatedAt: new Date("2022-04-22T23:26:56.820Z"),
      vendorName: "Mayer - Flatley",
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
  const result = await unifiedTo.commerce.createCommerceItemvariant({
    commerceItemvariant: {
      availableAt: new Date("2022-02-06T18:14:41.644Z"),
      createdAt: new Date("2022-01-20T13:49:12.968Z"),
      description: "Stylish Salad designed to make you stand out with little looks",
      height: 54,
      id: "84ff6f0e-7309-4864-8f10-a83bf42b04f5",
      isActive: true,
      isFeatured: false,
      isVisible: false,
      length: 92,
      media: [
        {
          alt: "Hic desipio thorax.",
          height: 961,
          id: "c32951c7-ba81-418e-b49c-4cb5cdae4f0b",
          metadata: [
            {
              id: "cf822395-e1f8-4d84-b563-707313e4d89e",
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
          id: "50d27968-32f3-4311-959c-e6ebae6ad314",
          namespace: "custom",
          slug: "custom_property",
          value: "absens",
        },
      ],
      name: "Chair",
      options: [
        {
          id: "037285a9-84cd-45e9-be06-2b00ace6f94a",
          name: "Color",
          position: 1,
          values: [
            "olive",
          ],
        },
        {
          id: "b9fdcedf-3b11-4ecd-aecd-42eafbbfccb2",
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
      updatedAt: new Date("2026-03-17T12:35:40.221Z"),
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
      id: "84ff6f0e-7309-4864-8f10-a83bf42b04f5",
      isActive: true,
      isFeatured: false,
      isVisible: false,
      length: 92,
      media: [
        {
          alt: "Hic desipio thorax.",
          height: 961,
          id: "c32951c7-ba81-418e-b49c-4cb5cdae4f0b",
          metadata: [
            {
              id: "cf822395-e1f8-4d84-b563-707313e4d89e",
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
          id: "50d27968-32f3-4311-959c-e6ebae6ad314",
          namespace: "custom",
          slug: "custom_property",
          value: "absens",
        },
      ],
      name: "Chair",
      options: [
        {
          id: "037285a9-84cd-45e9-be06-2b00ace6f94a",
          name: "Color",
          position: 1,
          values: [
            "olive",
          ],
        },
        {
          id: "b9fdcedf-3b11-4ecd-aecd-42eafbbfccb2",
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
      updatedAt: new Date("2026-03-17T12:35:40.221Z"),
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

## createCommerceLocation

Creates a CommerceLocation. Provide the unified CommerceLocation fields in the request body; they are mapped to the provider's API. Returns the created CommerceLocation.

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
      id: "204e1943-fab4-4f9f-9d4b-fa5930ff2af1",
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
          id: "b040f543-9947-4913-b05c-87daaa1754e3",
          metadata: [
            {
              id: "5225233f-0a86-4164-8aa7-455c1dceb17e",
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
      metadata: [],
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
      updatedAt: new Date("2024-04-23T20:20:24.893Z"),
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
      id: "204e1943-fab4-4f9f-9d4b-fa5930ff2af1",
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
          id: "b040f543-9947-4913-b05c-87daaa1754e3",
          metadata: [
            {
              id: "5225233f-0a86-4164-8aa7-455c1dceb17e",
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
      metadata: [],
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
      updatedAt: new Date("2024-04-23T20:20:24.893Z"),
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

Creates a CommerceReservation. Provide the unified CommerceReservation fields in the request body; they are mapped to the provider's API. Returns the created CommerceReservation.

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
      guestEmail: "julien.bartoletti@icloud.com",
      guestName: "Julien Bartoletti",
      guestPhone: "(728) 596-2620",
      id: "4cb274e3-8c28-49ff-8ae1-5219db87f2de",
      metadata: [],
      notes: "Adsum textilis ipsum despecto.",
      size: 10,
      startAt: new Date("2021-12-18T00:40:25.125Z"),
      status: "PENDING",
      updatedAt: new Date("2023-01-05T20:26:03.847Z"),
      url: "https://expensive-gift.org",
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
      guestEmail: "julien.bartoletti@icloud.com",
      guestName: "Julien Bartoletti",
      guestPhone: "(728) 596-2620",
      id: "4cb274e3-8c28-49ff-8ae1-5219db87f2de",
      metadata: [],
      notes: "Adsum textilis ipsum despecto.",
      size: 10,
      startAt: new Date("2021-12-18T00:40:25.125Z"),
      status: "PENDING",
      updatedAt: new Date("2023-01-05T20:26:03.847Z"),
      url: "https://expensive-gift.org",
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

Creates a CommerceReview. Provide the unified CommerceReview fields in the request body; they are mapped to the provider's API. Returns the created CommerceReview.

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
      authorAvatarUrl: "https://loremflickr.com/7/2660?lock=4279109054086693",
      authorEmail: "nyasia.macgyver@hotmail.com",
      authorLocation: "denique",
      authorName: "Nyasia MacGyver",
      comments: [],
      content: "Taedium thymum adipiscor amicitia cui.",
      createdAt: new Date("2019-12-12T18:10:22.988Z"),
      helpfulVotes: 66,
      id: "a3aa5bcb-59b7-42f4-925c-d03ef1a154ea",
      isFeatured: false,
      isPublic: true,
      isVerified: false,
      media: [
        {
          alt: "Desipio carpo sol laudantium colo.",
          height: 749,
          id: "c1009cb0-cb59-42f8-8b1e-b899f212e69f",
          metadata: [
            {
              id: "45c4a884-11ee-4b05-a65a-4cdbc0f8b9f4",
              slug: "textor",
              value: "quos",
            },
          ],
          position: 29,
          type: "video",
          url: "https://loremflickr.com/196/2041?lock=5845524773114807",
          width: 72,
        },
        {
          alt: "Adopto teneo numquam.",
          height: 957,
          id: "936f8540-c4db-4a0d-bed7-53631769fdce",
          metadata: [
            {
              id: "69161820-a976-415b-80a2-d316a484264a",
              slug: "bos",
              value: "casso",
            },
          ],
          position: 69,
          type: "image",
          url: "https://loremflickr.com/1178/2175?lock=5466640101053206",
          width: 61,
        },
      ],
      metadata: [],
      rating: 3,
      status: "APPROVED",
      title: "Coepi adamo amicitia auxilium toties.",
      unhelpfulVotes: 88,
      updatedAt: new Date("2025-08-28T20:17:31.999Z"),
      url: "https://diligent-bandwidth.biz",
      verifiedPurchase: true,
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
      authorAvatarUrl: "https://loremflickr.com/7/2660?lock=4279109054086693",
      authorEmail: "nyasia.macgyver@hotmail.com",
      authorLocation: "denique",
      authorName: "Nyasia MacGyver",
      comments: [],
      content: "Taedium thymum adipiscor amicitia cui.",
      createdAt: new Date("2019-12-12T18:10:22.988Z"),
      helpfulVotes: 66,
      id: "a3aa5bcb-59b7-42f4-925c-d03ef1a154ea",
      isFeatured: false,
      isPublic: true,
      isVerified: false,
      media: [
        {
          alt: "Desipio carpo sol laudantium colo.",
          height: 749,
          id: "c1009cb0-cb59-42f8-8b1e-b899f212e69f",
          metadata: [
            {
              id: "45c4a884-11ee-4b05-a65a-4cdbc0f8b9f4",
              slug: "textor",
              value: "quos",
            },
          ],
          position: 29,
          type: "video",
          url: "https://loremflickr.com/196/2041?lock=5845524773114807",
          width: 72,
        },
        {
          alt: "Adopto teneo numquam.",
          height: 957,
          id: "936f8540-c4db-4a0d-bed7-53631769fdce",
          metadata: [
            {
              id: "69161820-a976-415b-80a2-d316a484264a",
              slug: "bos",
              value: "casso",
            },
          ],
          position: 69,
          type: "image",
          url: "https://loremflickr.com/1178/2175?lock=5466640101053206",
          width: 61,
        },
      ],
      metadata: [],
      rating: 3,
      status: "APPROVED",
      title: "Coepi adamo amicitia auxilium toties.",
      unhelpfulVotes: 88,
      updatedAt: new Date("2025-08-28T20:17:31.999Z"),
      url: "https://diligent-bandwidth.biz",
      verifiedPurchase: true,
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

Creates a CommerceSaleschannel. Provide the unified CommerceSaleschannel fields in the request body; they are mapped to the provider's API. Returns the created CommerceSaleschannel.

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
      id: "7906e47d-1991-4bc0-8114-f0c1dd284d5c",
      isActive: false,
      metadata: [],
      slug: "amiculum-congregatio-suspendo",
      updatedAt: new Date("2025-02-02T19:25:11.650Z"),
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
      id: "7906e47d-1991-4bc0-8114-f0c1dd284d5c",
      isActive: false,
      metadata: [],
      slug: "amiculum-congregatio-suspendo",
      updatedAt: new Date("2025-02-02T19:25:11.650Z"),
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

Retrieves a single CommerceCollection by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

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

Retrieves a single CommerceInventory by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

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

Retrieves a single CommerceLocation by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

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

Retrieves a single CommerceReservation by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

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

Retrieves a single CommerceReview by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

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

Retrieves a single CommerceSaleschannel by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

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

Returns a list of CommerceAvailabilities. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

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

Returns a list of CommerceCollections. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

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

Returns a list of CommerceInventories. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

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

Returns a list of CommerceLocations. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

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

Returns a list of CommerceReservations. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

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

Returns a list of CommerceReviews. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

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

Returns a list of CommerceSaleschannels. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

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

Updates the CommerceCollection identified by `id`. Provide the unified CommerceCollection fields to change in the request body.

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
      id: "79c0c02d-c862-4a2d-bd17-3e135d3e3499",
      isActive: true,
      isFeatured: false,
      isVisible: false,
      itemMetadata: [],
      media: [
        {
          alt: "Defungo adopto thorax.",
          height: 759,
          id: "b95817a3-265d-47d4-b949-cf65a5443216",
          metadata: [
            {
              id: "c447e4cc-3790-45a3-81f0-3bf705e3720a",
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
          id: "399d1be4-dc31-43ff-bd6d-0e02c6b06a8f",
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
      updatedAt: new Date("2025-03-19T15:45:16.318Z"),
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
      id: "79c0c02d-c862-4a2d-bd17-3e135d3e3499",
      isActive: true,
      isFeatured: false,
      isVisible: false,
      itemMetadata: [],
      media: [
        {
          alt: "Defungo adopto thorax.",
          height: 759,
          id: "b95817a3-265d-47d4-b949-cf65a5443216",
          metadata: [
            {
              id: "c447e4cc-3790-45a3-81f0-3bf705e3720a",
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
          id: "399d1be4-dc31-43ff-bd6d-0e02c6b06a8f",
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
      updatedAt: new Date("2025-03-19T15:45:16.318Z"),
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

Updates the CommerceInventory identified by `id`. Provide the unified CommerceInventory fields to change in the request body.

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
      id: "9f87fcd0-143e-4058-ae13-391a0bc9f153",
      metadata: [],
      updatedAt: new Date("2025-11-27T16:08:08.841Z"),
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
      id: "9f87fcd0-143e-4058-ae13-391a0bc9f153",
      metadata: [],
      updatedAt: new Date("2025-11-27T16:08:08.841Z"),
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
  const result = await unifiedTo.commerce.patchCommerceItem({
    commerceItem: {
      collections: [],
      createdAt: new Date("2019-06-21T20:16:18.628Z"),
      description: "Decretum vulnero ustulo abeo.",
      duration: 104,
      globalCode: "978-0-85270-680-0",
      id: "c32dd919-c089-4a45-a7ee-4e589c63dd95",
      isActive: false,
      isFeatured: false,
      isTaxable: true,
      isVisible: true,
      media: [
        {
          alt: "Caterva eveniet acies candidus.",
          height: 876,
          id: "b072f834-aba3-426f-8725-8d7a80288dab",
          metadata: [
            {
              id: "39dd8b01-e1f1-4fb4-9fc8-6e5ca3d52c2e",
              slug: "doloremque",
              value: "allatus",
            },
          ],
          position: 21,
          type: "video",
          url: "https://picsum.photos/seed/v73y0uzyK/3001/972",
          width: 67,
        },
        {
          alt: "Comedo.",
          height: 651,
          id: "57bcf9b1-893c-40fa-9eeb-d4b67673b240",
          metadata: [
            {
              id: "329793ef-8843-4adf-979b-76a7bea801f2",
              slug: "bis",
              value: "somniculosus",
            },
          ],
          position: 51,
          type: "image",
          url: "https://picsum.photos/seed/Ao4iatfO/771/3906",
          width: 3,
        },
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "639ef675-b345-4212-b8c8-55caa0677c67",
          namespace: "custom",
          slug: "custom_property",
          value: "abstergo",
        },
      ],
      name: "Handcrafted Rubber Tuna",
      prices: [
        {
          currency: "USD",
          price: 78.11,
        },
      ],
      publicDescription: "Custodia ventus solio compono.",
      publicName: "Handcrafted Rubber Tuna",
      requiresShipping: true,
      slug: "handcrafted-rubber-tuna",
      tags: [
        "beatae",
        "blanditiis",
      ],
      totalStock: 682,
      type: "SERVICE",
      updatedAt: new Date("2022-04-22T23:26:56.837Z"),
      vendorName: "Mayer - Flatley",
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
      description: "Decretum vulnero ustulo abeo.",
      duration: 104,
      globalCode: "978-0-85270-680-0",
      id: "c32dd919-c089-4a45-a7ee-4e589c63dd95",
      isActive: false,
      isFeatured: false,
      isTaxable: true,
      isVisible: true,
      media: [
        {
          alt: "Caterva eveniet acies candidus.",
          height: 876,
          id: "b072f834-aba3-426f-8725-8d7a80288dab",
          metadata: [
            {
              id: "39dd8b01-e1f1-4fb4-9fc8-6e5ca3d52c2e",
              slug: "doloremque",
              value: "allatus",
            },
          ],
          position: 21,
          type: "video",
          url: "https://picsum.photos/seed/v73y0uzyK/3001/972",
          width: 67,
        },
        {
          alt: "Comedo.",
          height: 651,
          id: "57bcf9b1-893c-40fa-9eeb-d4b67673b240",
          metadata: [
            {
              id: "329793ef-8843-4adf-979b-76a7bea801f2",
              slug: "bis",
              value: "somniculosus",
            },
          ],
          position: 51,
          type: "image",
          url: "https://picsum.photos/seed/Ao4iatfO/771/3906",
          width: 3,
        },
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "639ef675-b345-4212-b8c8-55caa0677c67",
          namespace: "custom",
          slug: "custom_property",
          value: "abstergo",
        },
      ],
      name: "Handcrafted Rubber Tuna",
      prices: [
        {
          currency: "USD",
          price: 78.11,
        },
      ],
      publicDescription: "Custodia ventus solio compono.",
      publicName: "Handcrafted Rubber Tuna",
      requiresShipping: true,
      slug: "handcrafted-rubber-tuna",
      tags: [
        "beatae",
        "blanditiis",
      ],
      totalStock: 682,
      type: "SERVICE",
      updatedAt: new Date("2022-04-22T23:26:56.837Z"),
      vendorName: "Mayer - Flatley",
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
  const result = await unifiedTo.commerce.patchCommerceItemvariant({
    commerceItemvariant: {
      availableAt: new Date("2022-02-06T18:14:41.644Z"),
      createdAt: new Date("2022-01-20T13:49:12.968Z"),
      description: "Stylish Salad designed to make you stand out with little looks",
      height: 54,
      id: "04af7128-7f58-4963-9a94-07631122b912",
      isActive: true,
      isFeatured: false,
      isVisible: false,
      length: 92,
      media: [
        {
          alt: "Hic desipio thorax.",
          height: 961,
          id: "971da61c-9819-4ce8-96de-63b48b0e9263",
          metadata: [
            {
              id: "af0712fa-e7c6-4c3f-81be-74b115f9236f",
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
          id: "3a962b96-c7dd-4e89-a118-c721c39612a4",
          namespace: "custom",
          slug: "custom_property",
          value: "absens",
        },
      ],
      name: "Chair",
      options: [
        {
          id: "f4fb5629-6183-453a-881a-53186d90c94a",
          name: "Color",
          position: 1,
          values: [
            "olive",
          ],
        },
        {
          id: "2b490f08-bf8a-424e-a6bb-909c9b9013fa",
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
      updatedAt: new Date("2026-03-17T12:35:40.254Z"),
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
      id: "04af7128-7f58-4963-9a94-07631122b912",
      isActive: true,
      isFeatured: false,
      isVisible: false,
      length: 92,
      media: [
        {
          alt: "Hic desipio thorax.",
          height: 961,
          id: "971da61c-9819-4ce8-96de-63b48b0e9263",
          metadata: [
            {
              id: "af0712fa-e7c6-4c3f-81be-74b115f9236f",
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
          id: "3a962b96-c7dd-4e89-a118-c721c39612a4",
          namespace: "custom",
          slug: "custom_property",
          value: "absens",
        },
      ],
      name: "Chair",
      options: [
        {
          id: "f4fb5629-6183-453a-881a-53186d90c94a",
          name: "Color",
          position: 1,
          values: [
            "olive",
          ],
        },
        {
          id: "2b490f08-bf8a-424e-a6bb-909c9b9013fa",
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
      updatedAt: new Date("2026-03-17T12:35:40.254Z"),
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

## patchCommerceLocation

Updates the CommerceLocation identified by `id`. Provide the unified CommerceLocation fields to change in the request body.

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
      id: "e01c05a4-39ef-4372-879f-e79e6f347acf",
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
          id: "a23ebf1b-17c7-4ecb-b0b1-fe808abdc194",
          metadata: [
            {
              id: "ce50e1f4-38a0-49f3-981e-b554c2473ca4",
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
      metadata: [],
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
      updatedAt: new Date("2024-04-23T20:20:24.908Z"),
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
      id: "e01c05a4-39ef-4372-879f-e79e6f347acf",
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
          id: "a23ebf1b-17c7-4ecb-b0b1-fe808abdc194",
          metadata: [
            {
              id: "ce50e1f4-38a0-49f3-981e-b554c2473ca4",
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
      metadata: [],
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
      updatedAt: new Date("2024-04-23T20:20:24.908Z"),
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

Updates the CommerceReservation identified by `id`. Provide the unified CommerceReservation fields to change in the request body.

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
      guestEmail: "julien.bartoletti@icloud.com",
      guestName: "Julien Bartoletti",
      guestPhone: "(728) 596-2620",
      id: "1f1b3bbf-042f-4280-86ec-57c81d71dc17",
      metadata: [],
      notes: "Adsum textilis ipsum despecto.",
      size: 10,
      startAt: new Date("2021-12-18T00:40:25.125Z"),
      status: "PENDING",
      updatedAt: new Date("2023-01-05T20:26:03.850Z"),
      url: "https://expensive-gift.org",
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
      guestEmail: "julien.bartoletti@icloud.com",
      guestName: "Julien Bartoletti",
      guestPhone: "(728) 596-2620",
      id: "1f1b3bbf-042f-4280-86ec-57c81d71dc17",
      metadata: [],
      notes: "Adsum textilis ipsum despecto.",
      size: 10,
      startAt: new Date("2021-12-18T00:40:25.125Z"),
      status: "PENDING",
      updatedAt: new Date("2023-01-05T20:26:03.850Z"),
      url: "https://expensive-gift.org",
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

Updates the CommerceReview identified by `id`. Provide the unified CommerceReview fields to change in the request body.

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
      authorAvatarUrl: "https://loremflickr.com/7/2660?lock=4279109054086693",
      authorEmail: "nyasia.macgyver@hotmail.com",
      authorLocation: "denique",
      authorName: "Nyasia MacGyver",
      comments: [],
      content: "Taedium thymum adipiscor amicitia cui.",
      createdAt: new Date("2019-12-12T18:10:22.988Z"),
      helpfulVotes: 66,
      id: "1dff39bf-0b56-4f53-9089-33dcc372468d",
      isFeatured: false,
      isPublic: true,
      isVerified: false,
      media: [
        {
          alt: "Desipio carpo sol laudantium colo.",
          height: 749,
          id: "6f6bcf81-380e-40a6-a4d5-3879fc612317",
          metadata: [
            {
              id: "fcb92502-d44e-4663-9000-70b6a30314bb",
              slug: "textor",
              value: "quos",
            },
          ],
          position: 29,
          type: "video",
          url: "https://loremflickr.com/196/2041?lock=5845524773114807",
          width: 72,
        },
        {
          alt: "Adopto teneo numquam.",
          height: 957,
          id: "fcc4e39e-bbb7-4d8a-bc83-c4efa3120a41",
          metadata: [
            {
              id: "e002fc18-b518-4315-878d-44eeb3410169",
              slug: "bos",
              value: "casso",
            },
          ],
          position: 69,
          type: "image",
          url: "https://loremflickr.com/1178/2175?lock=5466640101053206",
          width: 61,
        },
      ],
      metadata: [],
      rating: 3,
      status: "APPROVED",
      title: "Coepi adamo amicitia auxilium toties.",
      unhelpfulVotes: 88,
      updatedAt: new Date("2025-08-28T20:17:32.038Z"),
      url: "https://diligent-bandwidth.biz",
      verifiedPurchase: true,
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
      authorAvatarUrl: "https://loremflickr.com/7/2660?lock=4279109054086693",
      authorEmail: "nyasia.macgyver@hotmail.com",
      authorLocation: "denique",
      authorName: "Nyasia MacGyver",
      comments: [],
      content: "Taedium thymum adipiscor amicitia cui.",
      createdAt: new Date("2019-12-12T18:10:22.988Z"),
      helpfulVotes: 66,
      id: "1dff39bf-0b56-4f53-9089-33dcc372468d",
      isFeatured: false,
      isPublic: true,
      isVerified: false,
      media: [
        {
          alt: "Desipio carpo sol laudantium colo.",
          height: 749,
          id: "6f6bcf81-380e-40a6-a4d5-3879fc612317",
          metadata: [
            {
              id: "fcb92502-d44e-4663-9000-70b6a30314bb",
              slug: "textor",
              value: "quos",
            },
          ],
          position: 29,
          type: "video",
          url: "https://loremflickr.com/196/2041?lock=5845524773114807",
          width: 72,
        },
        {
          alt: "Adopto teneo numquam.",
          height: 957,
          id: "fcc4e39e-bbb7-4d8a-bc83-c4efa3120a41",
          metadata: [
            {
              id: "e002fc18-b518-4315-878d-44eeb3410169",
              slug: "bos",
              value: "casso",
            },
          ],
          position: 69,
          type: "image",
          url: "https://loremflickr.com/1178/2175?lock=5466640101053206",
          width: 61,
        },
      ],
      metadata: [],
      rating: 3,
      status: "APPROVED",
      title: "Coepi adamo amicitia auxilium toties.",
      unhelpfulVotes: 88,
      updatedAt: new Date("2025-08-28T20:17:32.038Z"),
      url: "https://diligent-bandwidth.biz",
      verifiedPurchase: true,
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

Updates the CommerceSaleschannel identified by `id`. Provide the unified CommerceSaleschannel fields to change in the request body.

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
      id: "8cbf4432-b417-436e-a9e7-de6d12d50b08",
      isActive: false,
      metadata: [],
      slug: "amiculum-congregatio-suspendo",
      updatedAt: new Date("2025-02-02T19:25:11.659Z"),
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
      id: "8cbf4432-b417-436e-a9e7-de6d12d50b08",
      isActive: false,
      metadata: [],
      slug: "amiculum-congregatio-suspendo",
      updatedAt: new Date("2025-02-02T19:25:11.659Z"),
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

Deletes the CommerceCollection identified by `id`.

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

Deletes the CommerceInventory identified by `id`.

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

Deletes the CommerceLocation identified by `id`.

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

Deletes the CommerceReservation identified by `id`.

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

Deletes the CommerceReview identified by `id`.

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

Deletes the CommerceSaleschannel identified by `id`.

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

Updates the CommerceCollection identified by `id`. Provide the unified CommerceCollection fields to change in the request body.

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
      id: "79c0c02d-c862-4a2d-bd17-3e135d3e3499",
      isActive: true,
      isFeatured: false,
      isVisible: false,
      itemMetadata: [],
      media: [
        {
          alt: "Defungo adopto thorax.",
          height: 759,
          id: "b95817a3-265d-47d4-b949-cf65a5443216",
          metadata: [
            {
              id: "c447e4cc-3790-45a3-81f0-3bf705e3720a",
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
          id: "399d1be4-dc31-43ff-bd6d-0e02c6b06a8f",
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
      updatedAt: new Date("2025-03-19T15:45:16.318Z"),
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
      id: "79c0c02d-c862-4a2d-bd17-3e135d3e3499",
      isActive: true,
      isFeatured: false,
      isVisible: false,
      itemMetadata: [],
      media: [
        {
          alt: "Defungo adopto thorax.",
          height: 759,
          id: "b95817a3-265d-47d4-b949-cf65a5443216",
          metadata: [
            {
              id: "c447e4cc-3790-45a3-81f0-3bf705e3720a",
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
          id: "399d1be4-dc31-43ff-bd6d-0e02c6b06a8f",
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
      updatedAt: new Date("2025-03-19T15:45:16.318Z"),
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

Updates the CommerceInventory identified by `id`. Provide the unified CommerceInventory fields to change in the request body.

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
      id: "9f87fcd0-143e-4058-ae13-391a0bc9f153",
      metadata: [],
      updatedAt: new Date("2025-11-27T16:08:08.841Z"),
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
      id: "9f87fcd0-143e-4058-ae13-391a0bc9f153",
      metadata: [],
      updatedAt: new Date("2025-11-27T16:08:08.841Z"),
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
  const result = await unifiedTo.commerce.updateCommerceItem({
    commerceItem: {
      collections: [],
      createdAt: new Date("2019-06-21T20:16:18.628Z"),
      description: "Decretum vulnero ustulo abeo.",
      duration: 104,
      globalCode: "978-0-85270-680-0",
      id: "c32dd919-c089-4a45-a7ee-4e589c63dd95",
      isActive: false,
      isFeatured: false,
      isTaxable: true,
      isVisible: true,
      media: [
        {
          alt: "Caterva eveniet acies candidus.",
          height: 876,
          id: "b072f834-aba3-426f-8725-8d7a80288dab",
          metadata: [
            {
              id: "39dd8b01-e1f1-4fb4-9fc8-6e5ca3d52c2e",
              slug: "doloremque",
              value: "allatus",
            },
          ],
          position: 21,
          type: "video",
          url: "https://picsum.photos/seed/v73y0uzyK/3001/972",
          width: 67,
        },
        {
          alt: "Comedo.",
          height: 651,
          id: "57bcf9b1-893c-40fa-9eeb-d4b67673b240",
          metadata: [
            {
              id: "329793ef-8843-4adf-979b-76a7bea801f2",
              slug: "bis",
              value: "somniculosus",
            },
          ],
          position: 51,
          type: "image",
          url: "https://picsum.photos/seed/Ao4iatfO/771/3906",
          width: 3,
        },
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "639ef675-b345-4212-b8c8-55caa0677c67",
          namespace: "custom",
          slug: "custom_property",
          value: "abstergo",
        },
      ],
      name: "Handcrafted Rubber Tuna",
      prices: [
        {
          currency: "USD",
          price: 78.11,
        },
      ],
      publicDescription: "Custodia ventus solio compono.",
      publicName: "Handcrafted Rubber Tuna",
      requiresShipping: true,
      slug: "handcrafted-rubber-tuna",
      tags: [
        "beatae",
        "blanditiis",
      ],
      totalStock: 682,
      type: "SERVICE",
      updatedAt: new Date("2022-04-22T23:26:56.837Z"),
      vendorName: "Mayer - Flatley",
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
      description: "Decretum vulnero ustulo abeo.",
      duration: 104,
      globalCode: "978-0-85270-680-0",
      id: "c32dd919-c089-4a45-a7ee-4e589c63dd95",
      isActive: false,
      isFeatured: false,
      isTaxable: true,
      isVisible: true,
      media: [
        {
          alt: "Caterva eveniet acies candidus.",
          height: 876,
          id: "b072f834-aba3-426f-8725-8d7a80288dab",
          metadata: [
            {
              id: "39dd8b01-e1f1-4fb4-9fc8-6e5ca3d52c2e",
              slug: "doloremque",
              value: "allatus",
            },
          ],
          position: 21,
          type: "video",
          url: "https://picsum.photos/seed/v73y0uzyK/3001/972",
          width: 67,
        },
        {
          alt: "Comedo.",
          height: 651,
          id: "57bcf9b1-893c-40fa-9eeb-d4b67673b240",
          metadata: [
            {
              id: "329793ef-8843-4adf-979b-76a7bea801f2",
              slug: "bis",
              value: "somniculosus",
            },
          ],
          position: 51,
          type: "image",
          url: "https://picsum.photos/seed/Ao4iatfO/771/3906",
          width: 3,
        },
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "639ef675-b345-4212-b8c8-55caa0677c67",
          namespace: "custom",
          slug: "custom_property",
          value: "abstergo",
        },
      ],
      name: "Handcrafted Rubber Tuna",
      prices: [
        {
          currency: "USD",
          price: 78.11,
        },
      ],
      publicDescription: "Custodia ventus solio compono.",
      publicName: "Handcrafted Rubber Tuna",
      requiresShipping: true,
      slug: "handcrafted-rubber-tuna",
      tags: [
        "beatae",
        "blanditiis",
      ],
      totalStock: 682,
      type: "SERVICE",
      updatedAt: new Date("2022-04-22T23:26:56.837Z"),
      vendorName: "Mayer - Flatley",
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
  const result = await unifiedTo.commerce.updateCommerceItemvariant({
    commerceItemvariant: {
      availableAt: new Date("2022-02-06T18:14:41.644Z"),
      createdAt: new Date("2022-01-20T13:49:12.968Z"),
      description: "Stylish Salad designed to make you stand out with little looks",
      height: 54,
      id: "04af7128-7f58-4963-9a94-07631122b912",
      isActive: true,
      isFeatured: false,
      isVisible: false,
      length: 92,
      media: [
        {
          alt: "Hic desipio thorax.",
          height: 961,
          id: "971da61c-9819-4ce8-96de-63b48b0e9263",
          metadata: [
            {
              id: "af0712fa-e7c6-4c3f-81be-74b115f9236f",
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
          id: "3a962b96-c7dd-4e89-a118-c721c39612a4",
          namespace: "custom",
          slug: "custom_property",
          value: "absens",
        },
      ],
      name: "Chair",
      options: [
        {
          id: "f4fb5629-6183-453a-881a-53186d90c94a",
          name: "Color",
          position: 1,
          values: [
            "olive",
          ],
        },
        {
          id: "2b490f08-bf8a-424e-a6bb-909c9b9013fa",
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
      updatedAt: new Date("2026-03-17T12:35:40.254Z"),
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
      id: "04af7128-7f58-4963-9a94-07631122b912",
      isActive: true,
      isFeatured: false,
      isVisible: false,
      length: 92,
      media: [
        {
          alt: "Hic desipio thorax.",
          height: 961,
          id: "971da61c-9819-4ce8-96de-63b48b0e9263",
          metadata: [
            {
              id: "af0712fa-e7c6-4c3f-81be-74b115f9236f",
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
          id: "3a962b96-c7dd-4e89-a118-c721c39612a4",
          namespace: "custom",
          slug: "custom_property",
          value: "absens",
        },
      ],
      name: "Chair",
      options: [
        {
          id: "f4fb5629-6183-453a-881a-53186d90c94a",
          name: "Color",
          position: 1,
          values: [
            "olive",
          ],
        },
        {
          id: "2b490f08-bf8a-424e-a6bb-909c9b9013fa",
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
      updatedAt: new Date("2026-03-17T12:35:40.254Z"),
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

## updateCommerceLocation

Updates the CommerceLocation identified by `id`. Provide the unified CommerceLocation fields to change in the request body.

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
      id: "e01c05a4-39ef-4372-879f-e79e6f347acf",
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
          id: "a23ebf1b-17c7-4ecb-b0b1-fe808abdc194",
          metadata: [
            {
              id: "ce50e1f4-38a0-49f3-981e-b554c2473ca4",
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
      metadata: [],
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
      updatedAt: new Date("2024-04-23T20:20:24.908Z"),
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
      id: "e01c05a4-39ef-4372-879f-e79e6f347acf",
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
          id: "a23ebf1b-17c7-4ecb-b0b1-fe808abdc194",
          metadata: [
            {
              id: "ce50e1f4-38a0-49f3-981e-b554c2473ca4",
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
      metadata: [],
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
      updatedAt: new Date("2024-04-23T20:20:24.908Z"),
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

Updates the CommerceReservation identified by `id`. Provide the unified CommerceReservation fields to change in the request body.

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
      guestEmail: "julien.bartoletti@icloud.com",
      guestName: "Julien Bartoletti",
      guestPhone: "(728) 596-2620",
      id: "1f1b3bbf-042f-4280-86ec-57c81d71dc17",
      metadata: [],
      notes: "Adsum textilis ipsum despecto.",
      size: 10,
      startAt: new Date("2021-12-18T00:40:25.125Z"),
      status: "PENDING",
      updatedAt: new Date("2023-01-05T20:26:03.850Z"),
      url: "https://expensive-gift.org",
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
      guestEmail: "julien.bartoletti@icloud.com",
      guestName: "Julien Bartoletti",
      guestPhone: "(728) 596-2620",
      id: "1f1b3bbf-042f-4280-86ec-57c81d71dc17",
      metadata: [],
      notes: "Adsum textilis ipsum despecto.",
      size: 10,
      startAt: new Date("2021-12-18T00:40:25.125Z"),
      status: "PENDING",
      updatedAt: new Date("2023-01-05T20:26:03.850Z"),
      url: "https://expensive-gift.org",
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

Updates the CommerceReview identified by `id`. Provide the unified CommerceReview fields to change in the request body.

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
      authorAvatarUrl: "https://loremflickr.com/7/2660?lock=4279109054086693",
      authorEmail: "nyasia.macgyver@hotmail.com",
      authorLocation: "denique",
      authorName: "Nyasia MacGyver",
      comments: [],
      content: "Taedium thymum adipiscor amicitia cui.",
      createdAt: new Date("2019-12-12T18:10:22.988Z"),
      helpfulVotes: 66,
      id: "1dff39bf-0b56-4f53-9089-33dcc372468d",
      isFeatured: false,
      isPublic: true,
      isVerified: false,
      media: [
        {
          alt: "Desipio carpo sol laudantium colo.",
          height: 749,
          id: "6f6bcf81-380e-40a6-a4d5-3879fc612317",
          metadata: [
            {
              id: "fcb92502-d44e-4663-9000-70b6a30314bb",
              slug: "textor",
              value: "quos",
            },
          ],
          position: 29,
          type: "video",
          url: "https://loremflickr.com/196/2041?lock=5845524773114807",
          width: 72,
        },
        {
          alt: "Adopto teneo numquam.",
          height: 957,
          id: "fcc4e39e-bbb7-4d8a-bc83-c4efa3120a41",
          metadata: [
            {
              id: "e002fc18-b518-4315-878d-44eeb3410169",
              slug: "bos",
              value: "casso",
            },
          ],
          position: 69,
          type: "image",
          url: "https://loremflickr.com/1178/2175?lock=5466640101053206",
          width: 61,
        },
      ],
      metadata: [],
      rating: 3,
      status: "APPROVED",
      title: "Coepi adamo amicitia auxilium toties.",
      unhelpfulVotes: 88,
      updatedAt: new Date("2025-08-28T20:17:32.038Z"),
      url: "https://diligent-bandwidth.biz",
      verifiedPurchase: true,
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
      authorAvatarUrl: "https://loremflickr.com/7/2660?lock=4279109054086693",
      authorEmail: "nyasia.macgyver@hotmail.com",
      authorLocation: "denique",
      authorName: "Nyasia MacGyver",
      comments: [],
      content: "Taedium thymum adipiscor amicitia cui.",
      createdAt: new Date("2019-12-12T18:10:22.988Z"),
      helpfulVotes: 66,
      id: "1dff39bf-0b56-4f53-9089-33dcc372468d",
      isFeatured: false,
      isPublic: true,
      isVerified: false,
      media: [
        {
          alt: "Desipio carpo sol laudantium colo.",
          height: 749,
          id: "6f6bcf81-380e-40a6-a4d5-3879fc612317",
          metadata: [
            {
              id: "fcb92502-d44e-4663-9000-70b6a30314bb",
              slug: "textor",
              value: "quos",
            },
          ],
          position: 29,
          type: "video",
          url: "https://loremflickr.com/196/2041?lock=5845524773114807",
          width: 72,
        },
        {
          alt: "Adopto teneo numquam.",
          height: 957,
          id: "fcc4e39e-bbb7-4d8a-bc83-c4efa3120a41",
          metadata: [
            {
              id: "e002fc18-b518-4315-878d-44eeb3410169",
              slug: "bos",
              value: "casso",
            },
          ],
          position: 69,
          type: "image",
          url: "https://loremflickr.com/1178/2175?lock=5466640101053206",
          width: 61,
        },
      ],
      metadata: [],
      rating: 3,
      status: "APPROVED",
      title: "Coepi adamo amicitia auxilium toties.",
      unhelpfulVotes: 88,
      updatedAt: new Date("2025-08-28T20:17:32.038Z"),
      url: "https://diligent-bandwidth.biz",
      verifiedPurchase: true,
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

Updates the CommerceSaleschannel identified by `id`. Provide the unified CommerceSaleschannel fields to change in the request body.

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
      id: "8cbf4432-b417-436e-a9e7-de6d12d50b08",
      isActive: false,
      metadata: [],
      slug: "amiculum-congregatio-suspendo",
      updatedAt: new Date("2025-02-02T19:25:11.659Z"),
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
      id: "8cbf4432-b417-436e-a9e7-de6d12d50b08",
      isActive: false,
      metadata: [],
      slug: "amiculum-congregatio-suspendo",
      updatedAt: new Date("2025-02-02T19:25:11.659Z"),
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