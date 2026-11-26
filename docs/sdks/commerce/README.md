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
* [getCommerceReturn](#getcommercereturn) - Retrieve a return
* [getCommerceReview](#getcommercereview) - Retrieve a review
* [getCommerceSaleschannel](#getcommercesaleschannel) - Retrieve a saleschannel
* [getCommerceTable](#getcommercetable) - Retrieve a table
* [listCommerceAvailabilities](#listcommerceavailabilities) - List all availabilities
* [listCommerceCollections](#listcommercecollections) - List all collections
* [listCommerceInventories](#listcommerceinventories) - List all inventories
* [listCommerceItems](#listcommerceitems) - List all items
* [listCommerceItemvariants](#listcommerceitemvariants) - List all itemvariants
* [listCommerceLocations](#listcommercelocations) - List all locations
* [listCommerceReservations](#listcommercereservations) - List all reservations
* [listCommerceReturns](#listcommercereturns) - List all returns
* [listCommerceReviews](#listcommercereviews) - List all reviews
* [listCommerceSaleschannels](#listcommercesaleschannels) - List all saleschannels
* [listCommerceTables](#listcommercetables) - List all tables
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
      description: "Ward - Hudson's most advanced Computer technology increases graceful capabilities",
      id: "ddfd494d-35fb-47c8-99bf-956810ed6e40",
      isActive: true,
      isFeatured: false,
      isVisible: false,
      itemMetadata: [],
      media: [
        {
          alt: "Armarium amiculum amet defendo.",
          height: 759,
          id: "6e920640-0dd7-45c6-80bf-679916957a50",
          metadata: [
            {
              id: "6f4d1bec-a865-4095-b811-ba83278c854a",
              slug: "cernuus",
              value: "torrens",
            },
          ],
          position: 80,
          type: "video",
          url: "https://picsum.photos/seed/62m4msPNw/3209/1074",
          width: 40,
        },
      ],
      metadata: [
        {
          id: "15dff22f-19be-474d-b8b2-558cc82391d9",
          slug: "velit",
          value: "aureus",
        },
      ],
      name: "Rustic Gold Mouse",
      publicDescription: "Introducing the Sint Maarten-inspired Gloves, blending awful style with local craftsmanship",
      publicName: "Rustic Gold Mouse",
      tags: [
        "viridis",
        "deserunt",
        "comparo",
      ],
      type: "COLLECTION",
      updatedAt: new Date("2025-04-02T10:34:14.161Z"),
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
      description: "Ward - Hudson's most advanced Computer technology increases graceful capabilities",
      id: "ddfd494d-35fb-47c8-99bf-956810ed6e40",
      isActive: true,
      isFeatured: false,
      isVisible: false,
      itemMetadata: [],
      media: [
        {
          alt: "Armarium amiculum amet defendo.",
          height: 759,
          id: "6e920640-0dd7-45c6-80bf-679916957a50",
          metadata: [
            {
              id: "6f4d1bec-a865-4095-b811-ba83278c854a",
              slug: "cernuus",
              value: "torrens",
            },
          ],
          position: 80,
          type: "video",
          url: "https://picsum.photos/seed/62m4msPNw/3209/1074",
          width: 40,
        },
      ],
      metadata: [
        {
          id: "15dff22f-19be-474d-b8b2-558cc82391d9",
          slug: "velit",
          value: "aureus",
        },
      ],
      name: "Rustic Gold Mouse",
      publicDescription: "Introducing the Sint Maarten-inspired Gloves, blending awful style with local craftsmanship",
      publicName: "Rustic Gold Mouse",
      tags: [
        "viridis",
        "deserunt",
        "comparo",
      ],
      type: "COLLECTION",
      updatedAt: new Date("2025-04-02T10:34:14.161Z"),
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
      id: "36016571-d951-46f3-a220-c8e02adc4fcc",
      metadata: [],
      updatedAt: new Date("2025-12-19T10:16:28.426Z"),
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
import { inventoryCreateCommerceInventory } from "@unified-api/typescript-sdk/funcs/inventoryCreateCommerceInventory.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await inventoryCreateCommerceInventory(unifiedTo, {
    commerceInventory: {
      available: 337,
      id: "36016571-d951-46f3-a220-c8e02adc4fcc",
      metadata: [],
      updatedAt: new Date("2025-12-19T10:16:28.426Z"),
    },
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("inventoryCreateCommerceInventory failed:", res.error);
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
      description: "Our dog-friendly Bacon ensures pessimistic comfort for your pets",
      height: 54,
      id: "9227dcc7-56d5-4ced-bd37-f55ed05959a7",
      isActive: true,
      isFeatured: false,
      isVisible: false,
      length: 92,
      media: [
        {
          alt: "Calcar delibero cursim summisse.",
          height: 961,
          id: "df5f2a69-9317-4c0a-a734-3f68d0dca255",
          metadata: [
            {
              id: "fa035d9d-32f4-401e-a1c8-b074851fbbda",
              slug: "illo",
              value: "quia",
            },
          ],
          position: 72,
          type: "image",
          url: "https://picsum.photos/seed/u0YdHqlRu/3208/3394",
          width: 35,
        },
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "17434239-3853-49f5-9c5f-a33e8104de44",
          namespace: "custom",
          slug: "custom_property",
          value: "colligo",
        },
      ],
      name: "Table",
      options: [
        {
          id: "2caa64b8-a1dd-443d-9df8-700b87f30102",
          name: "Color",
          position: 1,
          values: [
            "purple",
          ],
        },
        {
          id: "e6f2cc8a-10cd-4c98-b034-5b00eba27294",
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
      publicDescription: "New teal Gloves with ergonomic design for favorite comfort",
      publicName: "Table",
      requiresShipping: false,
      sizeUnit: "cm",
      sku: "978-1-05-109555-9",
      tags: [
        "labore",
      ],
      totalStock: 436,
      updatedAt: new Date("2026-04-10T00:26:18.528Z"),
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
      description: "Our dog-friendly Bacon ensures pessimistic comfort for your pets",
      height: 54,
      id: "9227dcc7-56d5-4ced-bd37-f55ed05959a7",
      isActive: true,
      isFeatured: false,
      isVisible: false,
      length: 92,
      media: [
        {
          alt: "Calcar delibero cursim summisse.",
          height: 961,
          id: "df5f2a69-9317-4c0a-a734-3f68d0dca255",
          metadata: [
            {
              id: "fa035d9d-32f4-401e-a1c8-b074851fbbda",
              slug: "illo",
              value: "quia",
            },
          ],
          position: 72,
          type: "image",
          url: "https://picsum.photos/seed/u0YdHqlRu/3208/3394",
          width: 35,
        },
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "17434239-3853-49f5-9c5f-a33e8104de44",
          namespace: "custom",
          slug: "custom_property",
          value: "colligo",
        },
      ],
      name: "Table",
      options: [
        {
          id: "2caa64b8-a1dd-443d-9df8-700b87f30102",
          name: "Color",
          position: 1,
          values: [
            "purple",
          ],
        },
        {
          id: "e6f2cc8a-10cd-4c98-b034-5b00eba27294",
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
      publicDescription: "New teal Gloves with ergonomic design for favorite comfort",
      publicName: "Table",
      requiresShipping: false,
      sizeUnit: "cm",
      sku: "978-1-05-109555-9",
      tags: [
        "labore",
      ],
      totalStock: 436,
      updatedAt: new Date("2026-04-10T00:26:18.528Z"),
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
        address1: "688 Kristen Groves",
        city: "South Addisontown",
        countryCode: "US",
        postalCode: "92019",
        region: "Ohio",
        regionCode: "UT",
      },
      categories: [],
      createdAt: new Date("2022-12-29T04:15:21.195Z"),
      currency: "WST",
      description: "Vulgaris cruciamentum hic numquam tutamen.",
      id: "858b5a2f-f074-4fa4-9358-bc0cc5678de3",
      imageUrl: "https://picsum.photos/seed/3ZlSMHUYq/1895/67",
      isActive: false,
      languageLocale: "cibus",
      latitude: 0,
      locationType: "RESTAURANT",
      longitude: 0,
      media: [
        {
          alt: "Amoveo cinis demulceo tutamen.",
          height: 283,
          id: "0dd5f3c9-4231-48ab-a6df-314a03089a08",
          metadata: [
            {
              id: "1b11c23c-5f1a-408a-83fb-cacc03dba844",
              slug: "taedium",
              value: "censura",
            },
          ],
          position: 40,
          type: "image",
          url: "https://picsum.photos/seed/TV610q/478/3686",
          width: 1,
        },
      ],
      metadata: [],
      name: "Christiansen and Sons",
      priceLevel: "",
      rating: 0,
      reviewCount: 0,
      telephones: [
        {
          telephone: "(301) 236-0742",
          type: "OTHER",
        },
        {
          telephone: "(545) 455-1236",
          type: "MOBILE",
        },
      ],
      updatedAt: new Date("2024-05-03T03:09:43.223Z"),
      webUrl: "https://formal-declaration.info/",
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
        address1: "688 Kristen Groves",
        city: "South Addisontown",
        countryCode: "US",
        postalCode: "92019",
        region: "Ohio",
        regionCode: "UT",
      },
      categories: [],
      createdAt: new Date("2022-12-29T04:15:21.195Z"),
      currency: "WST",
      description: "Vulgaris cruciamentum hic numquam tutamen.",
      id: "858b5a2f-f074-4fa4-9358-bc0cc5678de3",
      imageUrl: "https://picsum.photos/seed/3ZlSMHUYq/1895/67",
      isActive: false,
      languageLocale: "cibus",
      latitude: 0,
      locationType: "RESTAURANT",
      longitude: 0,
      media: [
        {
          alt: "Amoveo cinis demulceo tutamen.",
          height: 283,
          id: "0dd5f3c9-4231-48ab-a6df-314a03089a08",
          metadata: [
            {
              id: "1b11c23c-5f1a-408a-83fb-cacc03dba844",
              slug: "taedium",
              value: "censura",
            },
          ],
          position: 40,
          type: "image",
          url: "https://picsum.photos/seed/TV610q/478/3686",
          width: 1,
        },
      ],
      metadata: [],
      name: "Christiansen and Sons",
      priceLevel: "",
      rating: 0,
      reviewCount: 0,
      telephones: [
        {
          telephone: "(301) 236-0742",
          type: "OTHER",
        },
        {
          telephone: "(545) 455-1236",
          type: "MOBILE",
        },
      ],
      updatedAt: new Date("2024-05-03T03:09:43.223Z"),
      webUrl: "https://formal-declaration.info/",
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
      guestEmail: "alford.schiller@icloud.com",
      guestName: "Alford Schiller",
      guestPhone: "(849) 626-2062",
      id: "49c2f3cf-035b-40b3-be95-d70c472980a5",
      metadata: [],
      notes: "Despecto stultus calculus.",
      size: 10,
      startAt: new Date("2021-12-18T00:40:25.125Z"),
      status: "PENDING",
      updatedAt: new Date("2023-01-11T17:19:12.987Z"),
      url: "https://wee-tuba.biz/",
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
      guestEmail: "alford.schiller@icloud.com",
      guestName: "Alford Schiller",
      guestPhone: "(849) 626-2062",
      id: "49c2f3cf-035b-40b3-be95-d70c472980a5",
      metadata: [],
      notes: "Despecto stultus calculus.",
      size: 10,
      startAt: new Date("2021-12-18T00:40:25.125Z"),
      status: "PENDING",
      updatedAt: new Date("2023-01-11T17:19:12.987Z"),
      url: "https://wee-tuba.biz/",
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
      authorAvatarUrl: "https://picsum.photos/seed/jt3vcEZv/1605/7",
      authorEmail: "jovan.bartell@hotmail.com",
      authorLocation: "comburo",
      authorName: "Jovan Bartell",
      comments: [],
      content: "Vix taedium thymum adipiscor amicitia.",
      createdAt: new Date("2019-12-12T18:10:22.988Z"),
      helpfulVotes: 66,
      id: "13c3c1b6-baea-4356-9907-883c2ca8836a",
      isFeatured: false,
      isPublic: true,
      isVerified: false,
      media: [
        {
          alt: "Teneo.",
          height: 749,
          id: "bc50c251-a4c1-468d-9d48-c9d8defb2097",
          metadata: [
            {
              id: "d2cc40d4-ab25-4401-817c-a990a3dd3860",
              slug: "numquam",
              value: "bos",
            },
          ],
          position: 29,
          type: "video",
          url: "https://picsum.photos/seed/jNDix4Br/995/2602",
          width: 72,
        },
        {
          alt: "Ratione vulticulus arbitro ultio pauci.",
          height: 957,
          id: "08774ebc-f6b4-46c9-b9ac-06006d33b4e7",
          metadata: [
            {
              id: "ff50773c-358a-4e3b-9448-548082f10f56",
              slug: "timidus",
              value: "sol",
            },
          ],
          position: 69,
          type: "image",
          url: "https://picsum.photos/seed/b35MixS23/1004/1925",
          width: 61,
        },
      ],
      metadata: [],
      rating: 3,
      status: "APPROVED",
      title: "Auxilium.",
      unhelpfulVotes: 88,
      updatedAt: new Date("2025-09-20T06:10:37.681Z"),
      url: "https://whispered-hawk.name",
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
      authorAvatarUrl: "https://picsum.photos/seed/jt3vcEZv/1605/7",
      authorEmail: "jovan.bartell@hotmail.com",
      authorLocation: "comburo",
      authorName: "Jovan Bartell",
      comments: [],
      content: "Vix taedium thymum adipiscor amicitia.",
      createdAt: new Date("2019-12-12T18:10:22.988Z"),
      helpfulVotes: 66,
      id: "13c3c1b6-baea-4356-9907-883c2ca8836a",
      isFeatured: false,
      isPublic: true,
      isVerified: false,
      media: [
        {
          alt: "Teneo.",
          height: 749,
          id: "bc50c251-a4c1-468d-9d48-c9d8defb2097",
          metadata: [
            {
              id: "d2cc40d4-ab25-4401-817c-a990a3dd3860",
              slug: "numquam",
              value: "bos",
            },
          ],
          position: 29,
          type: "video",
          url: "https://picsum.photos/seed/jNDix4Br/995/2602",
          width: 72,
        },
        {
          alt: "Ratione vulticulus arbitro ultio pauci.",
          height: 957,
          id: "08774ebc-f6b4-46c9-b9ac-06006d33b4e7",
          metadata: [
            {
              id: "ff50773c-358a-4e3b-9448-548082f10f56",
              slug: "timidus",
              value: "sol",
            },
          ],
          position: 69,
          type: "image",
          url: "https://picsum.photos/seed/b35MixS23/1004/1925",
          width: 61,
        },
      ],
      metadata: [],
      rating: 3,
      status: "APPROVED",
      title: "Auxilium.",
      unhelpfulVotes: 88,
      updatedAt: new Date("2025-09-20T06:10:37.681Z"),
      url: "https://whispered-hawk.name",
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
      description: "Solus speciosus caveo aegrus.",
      id: "fb43cd13-b562-459c-91d9-464524206517",
      isActive: false,
      metadata: [],
      slug: "dapifer-utroque-denuncio",
      updatedAt: new Date("2025-02-20T04:54:56.549Z"),
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
      description: "Solus speciosus caveo aegrus.",
      id: "fb43cd13-b562-459c-91d9-464524206517",
      isActive: false,
      metadata: [],
      slug: "dapifer-utroque-denuncio",
      updatedAt: new Date("2025-02-20T04:54:56.549Z"),
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
import { inventoryGetCommerceInventory } from "@unified-api/typescript-sdk/funcs/inventoryGetCommerceInventory.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await inventoryGetCommerceInventory(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("inventoryGetCommerceInventory failed:", res.error);
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

## getCommerceReturn

Retrieves a single CommerceReturn by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCommerceReturn" method="get" path="/commerce/{connection_id}/return/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.commerce.getCommerceReturn({
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
import { commerceGetCommerceReturn } from "@unified-api/typescript-sdk/funcs/commerceGetCommerceReturn.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceGetCommerceReturn(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceGetCommerceReturn failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCommerceReturnRequest](../../sdk/models/operations/getcommercereturnrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceReturn](../../sdk/models/shared/commercereturn.md)\>**

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

## getCommerceTable

Retrieves a single CommerceTable by its `id`. Obtain `id` values from the corresponding list endpoint. Use `fields` to return only the fields you need.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getCommerceTable" method="get" path="/commerce/{connection_id}/table/{id}" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.commerce.getCommerceTable({
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
import { commerceGetCommerceTable } from "@unified-api/typescript-sdk/funcs/commerceGetCommerceTable.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceGetCommerceTable(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceGetCommerceTable failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCommerceTableRequest](../../sdk/models/operations/getcommercetablerequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceTable](../../sdk/models/shared/commercetable.md)\>**

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
import { inventoryListCommerceInventories } from "@unified-api/typescript-sdk/funcs/inventoryListCommerceInventories.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await inventoryListCommerceInventories(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("inventoryListCommerceInventories failed:", res.error);
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

## listCommerceReturns

Returns a list of CommerceReturns. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listCommerceReturns" method="get" path="/commerce/{connection_id}/return" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.commerce.listCommerceReturns({
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
import { commerceListCommerceReturns } from "@unified-api/typescript-sdk/funcs/commerceListCommerceReturns.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceListCommerceReturns(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceListCommerceReturns failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCommerceReturnsRequest](../../sdk/models/operations/listcommercereturnsrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceReturn[]](../../models/.md)\>**

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

## listCommerceTables

Returns a list of CommerceTables. Narrow the results with the query parameters before paging, then page through them with `limit` and `offset` (the default and maximum page size depend on the integration). Use `fields` to return only the fields you need and reduce the response size. When the integration supports a total count, it is returned in the `X-Total-Count` response header. Use each item's `id` to retrieve, update, or delete it where those operations are supported.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listCommerceTables" method="get" path="/commerce/{connection_id}/table" -->
```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";

const unifiedTo = new UnifiedTo({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const result = await unifiedTo.commerce.listCommerceTables({
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
import { commerceListCommerceTables } from "@unified-api/typescript-sdk/funcs/commerceListCommerceTables.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await commerceListCommerceTables(unifiedTo, {
    connectionId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("commerceListCommerceTables failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCommerceTablesRequest](../../sdk/models/operations/listcommercetablesrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[shared.CommerceTable[]](../../models/.md)\>**

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
      description: "Ward - Hudson's most advanced Computer technology increases graceful capabilities",
      id: "15e5c77e-ea01-4743-878f-f0778c0bdbd0",
      isActive: true,
      isFeatured: false,
      isVisible: false,
      itemMetadata: [],
      media: [
        {
          alt: "Armarium amiculum amet defendo.",
          height: 759,
          id: "c8dbe6ea-d82c-4ed2-bf18-b0cd5f62d6f4",
          metadata: [
            {
              id: "43fef9d1-c344-4f15-952b-f35a8d20103a",
              slug: "cernuus",
              value: "torrens",
            },
          ],
          position: 80,
          type: "video",
          url: "https://picsum.photos/seed/62m4msPNw/3209/1074",
          width: 40,
        },
      ],
      metadata: [
        {
          id: "a6238d87-b307-4c45-b48a-e0e09493ad13",
          slug: "velit",
          value: "aureus",
        },
      ],
      name: "Rustic Gold Mouse",
      publicDescription: "Introducing the Sint Maarten-inspired Gloves, blending awful style with local craftsmanship",
      publicName: "Rustic Gold Mouse",
      tags: [
        "viridis",
        "deserunt",
        "comparo",
      ],
      type: "COLLECTION",
      updatedAt: new Date("2025-04-02T10:34:14.174Z"),
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
      description: "Ward - Hudson's most advanced Computer technology increases graceful capabilities",
      id: "15e5c77e-ea01-4743-878f-f0778c0bdbd0",
      isActive: true,
      isFeatured: false,
      isVisible: false,
      itemMetadata: [],
      media: [
        {
          alt: "Armarium amiculum amet defendo.",
          height: 759,
          id: "c8dbe6ea-d82c-4ed2-bf18-b0cd5f62d6f4",
          metadata: [
            {
              id: "43fef9d1-c344-4f15-952b-f35a8d20103a",
              slug: "cernuus",
              value: "torrens",
            },
          ],
          position: 80,
          type: "video",
          url: "https://picsum.photos/seed/62m4msPNw/3209/1074",
          width: 40,
        },
      ],
      metadata: [
        {
          id: "a6238d87-b307-4c45-b48a-e0e09493ad13",
          slug: "velit",
          value: "aureus",
        },
      ],
      name: "Rustic Gold Mouse",
      publicDescription: "Introducing the Sint Maarten-inspired Gloves, blending awful style with local craftsmanship",
      publicName: "Rustic Gold Mouse",
      tags: [
        "viridis",
        "deserunt",
        "comparo",
      ],
      type: "COLLECTION",
      updatedAt: new Date("2025-04-02T10:34:14.174Z"),
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
      id: "7faf097f-2304-4d21-8e20-02f9e06f3e73",
      metadata: [],
      updatedAt: new Date("2025-12-19T10:16:28.432Z"),
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
import { inventoryPatchCommerceInventory } from "@unified-api/typescript-sdk/funcs/inventoryPatchCommerceInventory.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await inventoryPatchCommerceInventory(unifiedTo, {
    commerceInventory: {
      available: 337,
      id: "7faf097f-2304-4d21-8e20-02f9e06f3e73",
      metadata: [],
      updatedAt: new Date("2025-12-19T10:16:28.432Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("inventoryPatchCommerceInventory failed:", res.error);
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
      description: "Our dog-friendly Bacon ensures pessimistic comfort for your pets",
      height: 54,
      id: "74f7ba8f-3e20-4e82-9c45-8ff87b82f859",
      isActive: true,
      isFeatured: false,
      isVisible: false,
      length: 92,
      media: [
        {
          alt: "Calcar delibero cursim summisse.",
          height: 961,
          id: "77a4fe3d-23c9-45ef-90b2-c181789e53b2",
          metadata: [
            {
              id: "e35f1b34-d61d-48ae-b202-086041eb79e2",
              slug: "illo",
              value: "quia",
            },
          ],
          position: 72,
          type: "image",
          url: "https://picsum.photos/seed/u0YdHqlRu/3208/3394",
          width: 35,
        },
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "54e7f46a-f9a3-4a3b-8214-13f05430bb5a",
          namespace: "custom",
          slug: "custom_property",
          value: "colligo",
        },
      ],
      name: "Table",
      options: [
        {
          id: "fe3c4548-6ec0-464e-acca-c7f62c66e837",
          name: "Color",
          position: 1,
          values: [
            "purple",
          ],
        },
        {
          id: "5dd28a01-1239-43b7-bc76-f682909a52e1",
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
      publicDescription: "New teal Gloves with ergonomic design for favorite comfort",
      publicName: "Table",
      requiresShipping: false,
      sizeUnit: "cm",
      sku: "978-1-05-109555-9",
      tags: [
        "labore",
      ],
      totalStock: 436,
      updatedAt: new Date("2026-04-10T00:26:18.550Z"),
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
      description: "Our dog-friendly Bacon ensures pessimistic comfort for your pets",
      height: 54,
      id: "74f7ba8f-3e20-4e82-9c45-8ff87b82f859",
      isActive: true,
      isFeatured: false,
      isVisible: false,
      length: 92,
      media: [
        {
          alt: "Calcar delibero cursim summisse.",
          height: 961,
          id: "77a4fe3d-23c9-45ef-90b2-c181789e53b2",
          metadata: [
            {
              id: "e35f1b34-d61d-48ae-b202-086041eb79e2",
              slug: "illo",
              value: "quia",
            },
          ],
          position: 72,
          type: "image",
          url: "https://picsum.photos/seed/u0YdHqlRu/3208/3394",
          width: 35,
        },
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "54e7f46a-f9a3-4a3b-8214-13f05430bb5a",
          namespace: "custom",
          slug: "custom_property",
          value: "colligo",
        },
      ],
      name: "Table",
      options: [
        {
          id: "fe3c4548-6ec0-464e-acca-c7f62c66e837",
          name: "Color",
          position: 1,
          values: [
            "purple",
          ],
        },
        {
          id: "5dd28a01-1239-43b7-bc76-f682909a52e1",
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
      publicDescription: "New teal Gloves with ergonomic design for favorite comfort",
      publicName: "Table",
      requiresShipping: false,
      sizeUnit: "cm",
      sku: "978-1-05-109555-9",
      tags: [
        "labore",
      ],
      totalStock: 436,
      updatedAt: new Date("2026-04-10T00:26:18.550Z"),
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
        address1: "688 Kristen Groves",
        city: "South Addisontown",
        countryCode: "US",
        postalCode: "92019",
        region: "Ohio",
        regionCode: "UT",
      },
      categories: [],
      createdAt: new Date("2022-12-29T04:15:21.195Z"),
      currency: "WST",
      description: "Vulgaris cruciamentum hic numquam tutamen.",
      id: "f022f353-a42b-4e07-842b-7c53ca5d8439",
      imageUrl: "https://picsum.photos/seed/3ZlSMHUYq/1895/67",
      isActive: false,
      languageLocale: "cibus",
      latitude: 0,
      locationType: "RESTAURANT",
      longitude: 0,
      media: [
        {
          alt: "Amoveo cinis demulceo tutamen.",
          height: 283,
          id: "d5869824-c829-4dbc-802a-e653eb79f7ce",
          metadata: [
            {
              id: "77de8b60-5240-4422-933b-53d0bb2cad95",
              slug: "taedium",
              value: "censura",
            },
          ],
          position: 40,
          type: "image",
          url: "https://picsum.photos/seed/TV610q/478/3686",
          width: 1,
        },
      ],
      metadata: [],
      name: "Christiansen and Sons",
      priceLevel: "",
      rating: 0,
      reviewCount: 0,
      telephones: [
        {
          telephone: "(301) 236-0742",
          type: "OTHER",
        },
        {
          telephone: "(545) 455-1236",
          type: "MOBILE",
        },
      ],
      updatedAt: new Date("2024-05-03T03:09:43.234Z"),
      webUrl: "https://formal-declaration.info/",
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
        address1: "688 Kristen Groves",
        city: "South Addisontown",
        countryCode: "US",
        postalCode: "92019",
        region: "Ohio",
        regionCode: "UT",
      },
      categories: [],
      createdAt: new Date("2022-12-29T04:15:21.195Z"),
      currency: "WST",
      description: "Vulgaris cruciamentum hic numquam tutamen.",
      id: "f022f353-a42b-4e07-842b-7c53ca5d8439",
      imageUrl: "https://picsum.photos/seed/3ZlSMHUYq/1895/67",
      isActive: false,
      languageLocale: "cibus",
      latitude: 0,
      locationType: "RESTAURANT",
      longitude: 0,
      media: [
        {
          alt: "Amoveo cinis demulceo tutamen.",
          height: 283,
          id: "d5869824-c829-4dbc-802a-e653eb79f7ce",
          metadata: [
            {
              id: "77de8b60-5240-4422-933b-53d0bb2cad95",
              slug: "taedium",
              value: "censura",
            },
          ],
          position: 40,
          type: "image",
          url: "https://picsum.photos/seed/TV610q/478/3686",
          width: 1,
        },
      ],
      metadata: [],
      name: "Christiansen and Sons",
      priceLevel: "",
      rating: 0,
      reviewCount: 0,
      telephones: [
        {
          telephone: "(301) 236-0742",
          type: "OTHER",
        },
        {
          telephone: "(545) 455-1236",
          type: "MOBILE",
        },
      ],
      updatedAt: new Date("2024-05-03T03:09:43.234Z"),
      webUrl: "https://formal-declaration.info/",
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
      guestEmail: "alford.schiller@icloud.com",
      guestName: "Alford Schiller",
      guestPhone: "(849) 626-2062",
      id: "9e291a46-3180-4166-bea7-d1f6a815c675",
      metadata: [],
      notes: "Despecto stultus calculus.",
      size: 10,
      startAt: new Date("2021-12-18T00:40:25.125Z"),
      status: "PENDING",
      updatedAt: new Date("2023-01-11T17:19:12.990Z"),
      url: "https://wee-tuba.biz/",
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
      guestEmail: "alford.schiller@icloud.com",
      guestName: "Alford Schiller",
      guestPhone: "(849) 626-2062",
      id: "9e291a46-3180-4166-bea7-d1f6a815c675",
      metadata: [],
      notes: "Despecto stultus calculus.",
      size: 10,
      startAt: new Date("2021-12-18T00:40:25.125Z"),
      status: "PENDING",
      updatedAt: new Date("2023-01-11T17:19:12.990Z"),
      url: "https://wee-tuba.biz/",
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
      authorAvatarUrl: "https://picsum.photos/seed/jt3vcEZv/1605/7",
      authorEmail: "jovan.bartell@hotmail.com",
      authorLocation: "comburo",
      authorName: "Jovan Bartell",
      comments: [],
      content: "Vix taedium thymum adipiscor amicitia.",
      createdAt: new Date("2019-12-12T18:10:22.988Z"),
      helpfulVotes: 66,
      id: "b3464236-4bf0-447c-a03b-60f72380cee8",
      isFeatured: false,
      isPublic: true,
      isVerified: false,
      media: [
        {
          alt: "Teneo.",
          height: 749,
          id: "49679ba1-2ea0-438f-a44c-c9362e050941",
          metadata: [
            {
              id: "274876f9-23ee-4af0-9032-0e7f162a205c",
              slug: "numquam",
              value: "bos",
            },
          ],
          position: 29,
          type: "video",
          url: "https://picsum.photos/seed/jNDix4Br/995/2602",
          width: 72,
        },
        {
          alt: "Ratione vulticulus arbitro ultio pauci.",
          height: 957,
          id: "62dd7cfb-7e90-4106-95cf-7c58bf2d0dfd",
          metadata: [
            {
              id: "13573874-b77d-46ea-9f19-a3e496a30df2",
              slug: "timidus",
              value: "sol",
            },
          ],
          position: 69,
          type: "image",
          url: "https://picsum.photos/seed/b35MixS23/1004/1925",
          width: 61,
        },
      ],
      metadata: [],
      rating: 3,
      status: "APPROVED",
      title: "Auxilium.",
      unhelpfulVotes: 88,
      updatedAt: new Date("2025-09-20T06:10:37.709Z"),
      url: "https://whispered-hawk.name",
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
      authorAvatarUrl: "https://picsum.photos/seed/jt3vcEZv/1605/7",
      authorEmail: "jovan.bartell@hotmail.com",
      authorLocation: "comburo",
      authorName: "Jovan Bartell",
      comments: [],
      content: "Vix taedium thymum adipiscor amicitia.",
      createdAt: new Date("2019-12-12T18:10:22.988Z"),
      helpfulVotes: 66,
      id: "b3464236-4bf0-447c-a03b-60f72380cee8",
      isFeatured: false,
      isPublic: true,
      isVerified: false,
      media: [
        {
          alt: "Teneo.",
          height: 749,
          id: "49679ba1-2ea0-438f-a44c-c9362e050941",
          metadata: [
            {
              id: "274876f9-23ee-4af0-9032-0e7f162a205c",
              slug: "numquam",
              value: "bos",
            },
          ],
          position: 29,
          type: "video",
          url: "https://picsum.photos/seed/jNDix4Br/995/2602",
          width: 72,
        },
        {
          alt: "Ratione vulticulus arbitro ultio pauci.",
          height: 957,
          id: "62dd7cfb-7e90-4106-95cf-7c58bf2d0dfd",
          metadata: [
            {
              id: "13573874-b77d-46ea-9f19-a3e496a30df2",
              slug: "timidus",
              value: "sol",
            },
          ],
          position: 69,
          type: "image",
          url: "https://picsum.photos/seed/b35MixS23/1004/1925",
          width: 61,
        },
      ],
      metadata: [],
      rating: 3,
      status: "APPROVED",
      title: "Auxilium.",
      unhelpfulVotes: 88,
      updatedAt: new Date("2025-09-20T06:10:37.709Z"),
      url: "https://whispered-hawk.name",
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
      description: "Solus speciosus caveo aegrus.",
      id: "921c8da2-fec3-4d4b-8995-fa3ba81374e2",
      isActive: false,
      metadata: [],
      slug: "dapifer-utroque-denuncio",
      updatedAt: new Date("2025-02-20T04:54:56.554Z"),
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
      description: "Solus speciosus caveo aegrus.",
      id: "921c8da2-fec3-4d4b-8995-fa3ba81374e2",
      isActive: false,
      metadata: [],
      slug: "dapifer-utroque-denuncio",
      updatedAt: new Date("2025-02-20T04:54:56.554Z"),
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
import { inventoryRemoveCommerceInventory } from "@unified-api/typescript-sdk/funcs/inventoryRemoveCommerceInventory.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await inventoryRemoveCommerceInventory(unifiedTo, {
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("inventoryRemoveCommerceInventory failed:", res.error);
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
      description: "Ward - Hudson's most advanced Computer technology increases graceful capabilities",
      id: "15e5c77e-ea01-4743-878f-f0778c0bdbd0",
      isActive: true,
      isFeatured: false,
      isVisible: false,
      itemMetadata: [],
      media: [
        {
          alt: "Armarium amiculum amet defendo.",
          height: 759,
          id: "c8dbe6ea-d82c-4ed2-bf18-b0cd5f62d6f4",
          metadata: [
            {
              id: "43fef9d1-c344-4f15-952b-f35a8d20103a",
              slug: "cernuus",
              value: "torrens",
            },
          ],
          position: 80,
          type: "video",
          url: "https://picsum.photos/seed/62m4msPNw/3209/1074",
          width: 40,
        },
      ],
      metadata: [
        {
          id: "a6238d87-b307-4c45-b48a-e0e09493ad13",
          slug: "velit",
          value: "aureus",
        },
      ],
      name: "Rustic Gold Mouse",
      publicDescription: "Introducing the Sint Maarten-inspired Gloves, blending awful style with local craftsmanship",
      publicName: "Rustic Gold Mouse",
      tags: [
        "viridis",
        "deserunt",
        "comparo",
      ],
      type: "COLLECTION",
      updatedAt: new Date("2025-04-02T10:34:14.174Z"),
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
      description: "Ward - Hudson's most advanced Computer technology increases graceful capabilities",
      id: "15e5c77e-ea01-4743-878f-f0778c0bdbd0",
      isActive: true,
      isFeatured: false,
      isVisible: false,
      itemMetadata: [],
      media: [
        {
          alt: "Armarium amiculum amet defendo.",
          height: 759,
          id: "c8dbe6ea-d82c-4ed2-bf18-b0cd5f62d6f4",
          metadata: [
            {
              id: "43fef9d1-c344-4f15-952b-f35a8d20103a",
              slug: "cernuus",
              value: "torrens",
            },
          ],
          position: 80,
          type: "video",
          url: "https://picsum.photos/seed/62m4msPNw/3209/1074",
          width: 40,
        },
      ],
      metadata: [
        {
          id: "a6238d87-b307-4c45-b48a-e0e09493ad13",
          slug: "velit",
          value: "aureus",
        },
      ],
      name: "Rustic Gold Mouse",
      publicDescription: "Introducing the Sint Maarten-inspired Gloves, blending awful style with local craftsmanship",
      publicName: "Rustic Gold Mouse",
      tags: [
        "viridis",
        "deserunt",
        "comparo",
      ],
      type: "COLLECTION",
      updatedAt: new Date("2025-04-02T10:34:14.174Z"),
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
      id: "7faf097f-2304-4d21-8e20-02f9e06f3e73",
      metadata: [],
      updatedAt: new Date("2025-12-19T10:16:28.432Z"),
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
import { inventoryUpdateCommerceInventory } from "@unified-api/typescript-sdk/funcs/inventoryUpdateCommerceInventory.js";

// Use `UnifiedToCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const unifiedTo = new UnifiedToCore({
  security: {
    jwt: "<YOUR_API_KEY_HERE>",
  },
});

async function run() {
  const res = await inventoryUpdateCommerceInventory(unifiedTo, {
    commerceInventory: {
      available: 337,
      id: "7faf097f-2304-4d21-8e20-02f9e06f3e73",
      metadata: [],
      updatedAt: new Date("2025-12-19T10:16:28.432Z"),
    },
    connectionId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("inventoryUpdateCommerceInventory failed:", res.error);
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
      description: "Our dog-friendly Bacon ensures pessimistic comfort for your pets",
      height: 54,
      id: "74f7ba8f-3e20-4e82-9c45-8ff87b82f859",
      isActive: true,
      isFeatured: false,
      isVisible: false,
      length: 92,
      media: [
        {
          alt: "Calcar delibero cursim summisse.",
          height: 961,
          id: "77a4fe3d-23c9-45ef-90b2-c181789e53b2",
          metadata: [
            {
              id: "e35f1b34-d61d-48ae-b202-086041eb79e2",
              slug: "illo",
              value: "quia",
            },
          ],
          position: 72,
          type: "image",
          url: "https://picsum.photos/seed/u0YdHqlRu/3208/3394",
          width: 35,
        },
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "54e7f46a-f9a3-4a3b-8214-13f05430bb5a",
          namespace: "custom",
          slug: "custom_property",
          value: "colligo",
        },
      ],
      name: "Table",
      options: [
        {
          id: "fe3c4548-6ec0-464e-acca-c7f62c66e837",
          name: "Color",
          position: 1,
          values: [
            "purple",
          ],
        },
        {
          id: "5dd28a01-1239-43b7-bc76-f682909a52e1",
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
      publicDescription: "New teal Gloves with ergonomic design for favorite comfort",
      publicName: "Table",
      requiresShipping: false,
      sizeUnit: "cm",
      sku: "978-1-05-109555-9",
      tags: [
        "labore",
      ],
      totalStock: 436,
      updatedAt: new Date("2026-04-10T00:26:18.550Z"),
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
      description: "Our dog-friendly Bacon ensures pessimistic comfort for your pets",
      height: 54,
      id: "74f7ba8f-3e20-4e82-9c45-8ff87b82f859",
      isActive: true,
      isFeatured: false,
      isVisible: false,
      length: 92,
      media: [
        {
          alt: "Calcar delibero cursim summisse.",
          height: 961,
          id: "77a4fe3d-23c9-45ef-90b2-c181789e53b2",
          metadata: [
            {
              id: "e35f1b34-d61d-48ae-b202-086041eb79e2",
              slug: "illo",
              value: "quia",
            },
          ],
          position: 72,
          type: "image",
          url: "https://picsum.photos/seed/u0YdHqlRu/3208/3394",
          width: 35,
        },
      ],
      metadata: [
        {
          extraData: {
            "display_name": "Custom Property",
          },
          format: "TEXT",
          id: "54e7f46a-f9a3-4a3b-8214-13f05430bb5a",
          namespace: "custom",
          slug: "custom_property",
          value: "colligo",
        },
      ],
      name: "Table",
      options: [
        {
          id: "fe3c4548-6ec0-464e-acca-c7f62c66e837",
          name: "Color",
          position: 1,
          values: [
            "purple",
          ],
        },
        {
          id: "5dd28a01-1239-43b7-bc76-f682909a52e1",
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
      publicDescription: "New teal Gloves with ergonomic design for favorite comfort",
      publicName: "Table",
      requiresShipping: false,
      sizeUnit: "cm",
      sku: "978-1-05-109555-9",
      tags: [
        "labore",
      ],
      totalStock: 436,
      updatedAt: new Date("2026-04-10T00:26:18.550Z"),
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
        address1: "688 Kristen Groves",
        city: "South Addisontown",
        countryCode: "US",
        postalCode: "92019",
        region: "Ohio",
        regionCode: "UT",
      },
      categories: [],
      createdAt: new Date("2022-12-29T04:15:21.195Z"),
      currency: "WST",
      description: "Vulgaris cruciamentum hic numquam tutamen.",
      id: "f022f353-a42b-4e07-842b-7c53ca5d8439",
      imageUrl: "https://picsum.photos/seed/3ZlSMHUYq/1895/67",
      isActive: false,
      languageLocale: "cibus",
      latitude: 0,
      locationType: "RESTAURANT",
      longitude: 0,
      media: [
        {
          alt: "Amoveo cinis demulceo tutamen.",
          height: 283,
          id: "d5869824-c829-4dbc-802a-e653eb79f7ce",
          metadata: [
            {
              id: "77de8b60-5240-4422-933b-53d0bb2cad95",
              slug: "taedium",
              value: "censura",
            },
          ],
          position: 40,
          type: "image",
          url: "https://picsum.photos/seed/TV610q/478/3686",
          width: 1,
        },
      ],
      metadata: [],
      name: "Christiansen and Sons",
      priceLevel: "",
      rating: 0,
      reviewCount: 0,
      telephones: [
        {
          telephone: "(301) 236-0742",
          type: "OTHER",
        },
        {
          telephone: "(545) 455-1236",
          type: "MOBILE",
        },
      ],
      updatedAt: new Date("2024-05-03T03:09:43.234Z"),
      webUrl: "https://formal-declaration.info/",
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
        address1: "688 Kristen Groves",
        city: "South Addisontown",
        countryCode: "US",
        postalCode: "92019",
        region: "Ohio",
        regionCode: "UT",
      },
      categories: [],
      createdAt: new Date("2022-12-29T04:15:21.195Z"),
      currency: "WST",
      description: "Vulgaris cruciamentum hic numquam tutamen.",
      id: "f022f353-a42b-4e07-842b-7c53ca5d8439",
      imageUrl: "https://picsum.photos/seed/3ZlSMHUYq/1895/67",
      isActive: false,
      languageLocale: "cibus",
      latitude: 0,
      locationType: "RESTAURANT",
      longitude: 0,
      media: [
        {
          alt: "Amoveo cinis demulceo tutamen.",
          height: 283,
          id: "d5869824-c829-4dbc-802a-e653eb79f7ce",
          metadata: [
            {
              id: "77de8b60-5240-4422-933b-53d0bb2cad95",
              slug: "taedium",
              value: "censura",
            },
          ],
          position: 40,
          type: "image",
          url: "https://picsum.photos/seed/TV610q/478/3686",
          width: 1,
        },
      ],
      metadata: [],
      name: "Christiansen and Sons",
      priceLevel: "",
      rating: 0,
      reviewCount: 0,
      telephones: [
        {
          telephone: "(301) 236-0742",
          type: "OTHER",
        },
        {
          telephone: "(545) 455-1236",
          type: "MOBILE",
        },
      ],
      updatedAt: new Date("2024-05-03T03:09:43.234Z"),
      webUrl: "https://formal-declaration.info/",
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
      guestEmail: "alford.schiller@icloud.com",
      guestName: "Alford Schiller",
      guestPhone: "(849) 626-2062",
      id: "9e291a46-3180-4166-bea7-d1f6a815c675",
      metadata: [],
      notes: "Despecto stultus calculus.",
      size: 10,
      startAt: new Date("2021-12-18T00:40:25.125Z"),
      status: "PENDING",
      updatedAt: new Date("2023-01-11T17:19:12.990Z"),
      url: "https://wee-tuba.biz/",
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
      guestEmail: "alford.schiller@icloud.com",
      guestName: "Alford Schiller",
      guestPhone: "(849) 626-2062",
      id: "9e291a46-3180-4166-bea7-d1f6a815c675",
      metadata: [],
      notes: "Despecto stultus calculus.",
      size: 10,
      startAt: new Date("2021-12-18T00:40:25.125Z"),
      status: "PENDING",
      updatedAt: new Date("2023-01-11T17:19:12.990Z"),
      url: "https://wee-tuba.biz/",
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
      authorAvatarUrl: "https://picsum.photos/seed/jt3vcEZv/1605/7",
      authorEmail: "jovan.bartell@hotmail.com",
      authorLocation: "comburo",
      authorName: "Jovan Bartell",
      comments: [],
      content: "Vix taedium thymum adipiscor amicitia.",
      createdAt: new Date("2019-12-12T18:10:22.988Z"),
      helpfulVotes: 66,
      id: "b3464236-4bf0-447c-a03b-60f72380cee8",
      isFeatured: false,
      isPublic: true,
      isVerified: false,
      media: [
        {
          alt: "Teneo.",
          height: 749,
          id: "49679ba1-2ea0-438f-a44c-c9362e050941",
          metadata: [
            {
              id: "274876f9-23ee-4af0-9032-0e7f162a205c",
              slug: "numquam",
              value: "bos",
            },
          ],
          position: 29,
          type: "video",
          url: "https://picsum.photos/seed/jNDix4Br/995/2602",
          width: 72,
        },
        {
          alt: "Ratione vulticulus arbitro ultio pauci.",
          height: 957,
          id: "62dd7cfb-7e90-4106-95cf-7c58bf2d0dfd",
          metadata: [
            {
              id: "13573874-b77d-46ea-9f19-a3e496a30df2",
              slug: "timidus",
              value: "sol",
            },
          ],
          position: 69,
          type: "image",
          url: "https://picsum.photos/seed/b35MixS23/1004/1925",
          width: 61,
        },
      ],
      metadata: [],
      rating: 3,
      status: "APPROVED",
      title: "Auxilium.",
      unhelpfulVotes: 88,
      updatedAt: new Date("2025-09-20T06:10:37.709Z"),
      url: "https://whispered-hawk.name",
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
      authorAvatarUrl: "https://picsum.photos/seed/jt3vcEZv/1605/7",
      authorEmail: "jovan.bartell@hotmail.com",
      authorLocation: "comburo",
      authorName: "Jovan Bartell",
      comments: [],
      content: "Vix taedium thymum adipiscor amicitia.",
      createdAt: new Date("2019-12-12T18:10:22.988Z"),
      helpfulVotes: 66,
      id: "b3464236-4bf0-447c-a03b-60f72380cee8",
      isFeatured: false,
      isPublic: true,
      isVerified: false,
      media: [
        {
          alt: "Teneo.",
          height: 749,
          id: "49679ba1-2ea0-438f-a44c-c9362e050941",
          metadata: [
            {
              id: "274876f9-23ee-4af0-9032-0e7f162a205c",
              slug: "numquam",
              value: "bos",
            },
          ],
          position: 29,
          type: "video",
          url: "https://picsum.photos/seed/jNDix4Br/995/2602",
          width: 72,
        },
        {
          alt: "Ratione vulticulus arbitro ultio pauci.",
          height: 957,
          id: "62dd7cfb-7e90-4106-95cf-7c58bf2d0dfd",
          metadata: [
            {
              id: "13573874-b77d-46ea-9f19-a3e496a30df2",
              slug: "timidus",
              value: "sol",
            },
          ],
          position: 69,
          type: "image",
          url: "https://picsum.photos/seed/b35MixS23/1004/1925",
          width: 61,
        },
      ],
      metadata: [],
      rating: 3,
      status: "APPROVED",
      title: "Auxilium.",
      unhelpfulVotes: 88,
      updatedAt: new Date("2025-09-20T06:10:37.709Z"),
      url: "https://whispered-hawk.name",
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
      description: "Solus speciosus caveo aegrus.",
      id: "921c8da2-fec3-4d4b-8995-fa3ba81374e2",
      isActive: false,
      metadata: [],
      slug: "dapifer-utroque-denuncio",
      updatedAt: new Date("2025-02-20T04:54:56.554Z"),
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
      description: "Solus speciosus caveo aegrus.",
      id: "921c8da2-fec3-4d4b-8995-fa3ba81374e2",
      isActive: false,
      metadata: [],
      slug: "dapifer-utroque-denuncio",
      updatedAt: new Date("2025-02-20T04:54:56.554Z"),
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