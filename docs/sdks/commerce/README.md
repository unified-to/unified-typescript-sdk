# Commerce
(*commerce*)

### Available Operations

* [createCommerceCollection](#createcommercecollection) - Create a collection
* [createCommerceInventory](#createcommerceinventory) - Create an inventory
* [createCommerceItem](#createcommerceitem) - Create an item
* [createCommerceLocation](#createcommercelocation) - Create a location
* [getCommerceCollection](#getcommercecollection) - Retrieve a collection
* [getCommerceInventory](#getcommerceinventory) - Retrieve an inventory
* [getCommerceItem](#getcommerceitem) - Retrieve an item
* [getCommerceLocation](#getcommercelocation) - Retrieve a location
* [listCommerceCollections](#listcommercecollections) - List all collections
* [listCommerceInventories](#listcommerceinventories) - List all inventories
* [listCommerceItems](#listcommerceitems) - List all items
* [listCommerceLocations](#listcommercelocations) - List all locations
* [patchCommerceCollection](#patchcommercecollection) - Update a collection
* [patchCommerceInventory](#patchcommerceinventory) - Update an inventory
* [patchCommerceItem](#patchcommerceitem) - Update an item
* [patchCommerceLocation](#patchcommercelocation) - Update a location
* [removeCommerceCollection](#removecommercecollection) - Remove a collection
* [removeCommerceInventory](#removecommerceinventory) - Remove an inventory
* [removeCommerceItem](#removecommerceitem) - Remove an item
* [removeCommerceLocation](#removecommercelocation) - Remove a location
* [updateCommerceCollection](#updatecommercecollection) - Update a collection
* [updateCommerceInventory](#updatecommerceinventory) - Update an inventory
* [updateCommerceItem](#updatecommerceitem) - Update an item
* [updateCommerceLocation](#updatecommercelocation) - Update a location

## createCommerceCollection

Create a collection

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { CreateCommerceCollectionSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { CommerceItemMediaType } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: CreateCommerceCollectionSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.commerce.createCommerceCollection({
    commerceCollection: {
      id: "<id>",
      itemIds: [
        "<value>",
      ],
      media: [
        {
          url: "http://uneven-mattress.name",
        },
      ],
      name: "<value>",
      raw: {
        "key": "<value>",
      },
      tags: [
        "<value>",
      ],
    },
    connectionId: "<value>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.CreateCommerceCollectionRequest](../../sdk/models/operations/createcommercecollectionrequest.md)   | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `security`                                                                                                     | [operations.CreateCommerceCollectionSecurity](../../sdk/models/operations/createcommercecollectionsecurity.md) | :heavy_check_mark:                                                                                             | The security requirements to use for the request.                                                              |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.CreateCommerceCollectionResponse](../../sdk/models/operations/createcommercecollectionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## createCommerceInventory

Create an inventory

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { CreateCommerceInventorySecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: CreateCommerceInventorySecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.commerce.createCommerceInventory({
    commerceInventory: {
      available: 5165.08,
      raw: {
        "key": "<value>",
      },
    },
    connectionId: "<value>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.CreateCommerceInventoryRequest](../../sdk/models/operations/createcommerceinventoryrequest.md)   | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `security`                                                                                                   | [operations.CreateCommerceInventorySecurity](../../sdk/models/operations/createcommerceinventorysecurity.md) | :heavy_check_mark:                                                                                           | The security requirements to use for the request.                                                            |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.CreateCommerceInventoryResponse](../../sdk/models/operations/createcommerceinventoryresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## createCommerceItem

Create an item

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { CreateCommerceItemSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { CommerceItemMediaType, SizeUnit, WeightUnit } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: CreateCommerceItemSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.commerce.createCommerceItem({
    commerceItem: {
      media: [
        {
          url: "http://loud-minister.name",
        },
      ],
      name: "<value>",
      raw: {
        "key": "<value>",
      },
      tags: [
        "<value>",
      ],
      variants: [
        {
          media: [
            {
              url: "http://other-external.info",
            },
          ],
          name: "<value>",
          options: [
            {
              id: "<id>",
              name: "<value>",
              values: [
                "<value>",
              ],
            },
          ],
          prices: [
            {
              price: 3330.74,
            },
          ],
          tags: [
            "<value>",
          ],
        },
      ],
    },
    connectionId: "<value>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.CreateCommerceItemRequest](../../sdk/models/operations/createcommerceitemrequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.CreateCommerceItemSecurity](../../sdk/models/operations/createcommerceitemsecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.CreateCommerceItemResponse](../../sdk/models/operations/createcommerceitemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## createCommerceLocation

Create a location

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { CreateCommerceLocationSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: CreateCommerceLocationSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.commerce.createCommerceLocation({
    commerceLocation: {
      address: {},
      name: "<value>",
      raw: {
        "key": "<value>",
      },
    },
    connectionId: "<value>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.CreateCommerceLocationRequest](../../sdk/models/operations/createcommercelocationrequest.md)   | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `security`                                                                                                 | [operations.CreateCommerceLocationSecurity](../../sdk/models/operations/createcommercelocationsecurity.md) | :heavy_check_mark:                                                                                         | The security requirements to use for the request.                                                          |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.CreateCommerceLocationResponse](../../sdk/models/operations/createcommercelocationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getCommerceCollection

Retrieve a collection

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { GetCommerceCollectionSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetCommerceCollectionSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.commerce.getCommerceCollection({
    connectionId: "<value>",
    fields: [
      "<value>",
    ],
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.GetCommerceCollectionRequest](../../sdk/models/operations/getcommercecollectionrequest.md)   | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `security`                                                                                               | [operations.GetCommerceCollectionSecurity](../../sdk/models/operations/getcommercecollectionsecurity.md) | :heavy_check_mark:                                                                                       | The security requirements to use for the request.                                                        |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GetCommerceCollectionResponse](../../sdk/models/operations/getcommercecollectionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getCommerceInventory

Retrieve an inventory

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { GetCommerceInventorySecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetCommerceInventorySecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.commerce.getCommerceInventory({
    connectionId: "<value>",
    fields: [
      "<value>",
    ],
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.GetCommerceInventoryRequest](../../sdk/models/operations/getcommerceinventoryrequest.md)   | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `security`                                                                                             | [operations.GetCommerceInventorySecurity](../../sdk/models/operations/getcommerceinventorysecurity.md) | :heavy_check_mark:                                                                                     | The security requirements to use for the request.                                                      |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetCommerceInventoryResponse](../../sdk/models/operations/getcommerceinventoryresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getCommerceItem

Retrieve an item

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { GetCommerceItemSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetCommerceItemSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.commerce.getCommerceItem({
    connectionId: "<value>",
    fields: [
      "<value>",
    ],
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [operations.GetCommerceItemRequest](../../sdk/models/operations/getcommerceitemrequest.md)   | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `security`                                                                                   | [operations.GetCommerceItemSecurity](../../sdk/models/operations/getcommerceitemsecurity.md) | :heavy_check_mark:                                                                           | The security requirements to use for the request.                                            |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.GetCommerceItemResponse](../../sdk/models/operations/getcommerceitemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getCommerceLocation

Retrieve a location

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { GetCommerceLocationSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetCommerceLocationSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.commerce.getCommerceLocation({
    connectionId: "<value>",
    fields: [
      "<value>",
    ],
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetCommerceLocationRequest](../../sdk/models/operations/getcommercelocationrequest.md)   | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `security`                                                                                           | [operations.GetCommerceLocationSecurity](../../sdk/models/operations/getcommercelocationsecurity.md) | :heavy_check_mark:                                                                                   | The security requirements to use for the request.                                                    |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetCommerceLocationResponse](../../sdk/models/operations/getcommercelocationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listCommerceCollections

List all collections

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { ListCommerceCollectionsSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListCommerceCollectionsSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.commerce.listCommerceCollections({
    connectionId: "<value>",
    fields: [
      "<value>",
    ],
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.ListCommerceCollectionsRequest](../../sdk/models/operations/listcommercecollectionsrequest.md)   | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `security`                                                                                                   | [operations.ListCommerceCollectionsSecurity](../../sdk/models/operations/listcommercecollectionssecurity.md) | :heavy_check_mark:                                                                                           | The security requirements to use for the request.                                                            |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.ListCommerceCollectionsResponse](../../sdk/models/operations/listcommercecollectionsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listCommerceInventories

List all inventories

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { ListCommerceInventoriesSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListCommerceInventoriesSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.commerce.listCommerceInventories({
    connectionId: "<value>",
    fields: [
      "<value>",
    ],
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.ListCommerceInventoriesRequest](../../sdk/models/operations/listcommerceinventoriesrequest.md)   | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `security`                                                                                                   | [operations.ListCommerceInventoriesSecurity](../../sdk/models/operations/listcommerceinventoriessecurity.md) | :heavy_check_mark:                                                                                           | The security requirements to use for the request.                                                            |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.ListCommerceInventoriesResponse](../../sdk/models/operations/listcommerceinventoriesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listCommerceItems

List all items

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { ListCommerceItemsSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListCommerceItemsSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.commerce.listCommerceItems({
    connectionId: "<value>",
    fields: [
      "<value>",
    ],
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.ListCommerceItemsRequest](../../sdk/models/operations/listcommerceitemsrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.ListCommerceItemsSecurity](../../sdk/models/operations/listcommerceitemssecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.ListCommerceItemsResponse](../../sdk/models/operations/listcommerceitemsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listCommerceLocations

List all locations

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { ListCommerceLocationsSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListCommerceLocationsSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.commerce.listCommerceLocations({
    connectionId: "<value>",
    fields: [
      "<value>",
    ],
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.ListCommerceLocationsRequest](../../sdk/models/operations/listcommercelocationsrequest.md)   | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `security`                                                                                               | [operations.ListCommerceLocationsSecurity](../../sdk/models/operations/listcommercelocationssecurity.md) | :heavy_check_mark:                                                                                       | The security requirements to use for the request.                                                        |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.ListCommerceLocationsResponse](../../sdk/models/operations/listcommercelocationsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchCommerceCollection

Update a collection

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { PatchCommerceCollectionSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { CommerceItemMediaType } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: PatchCommerceCollectionSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.commerce.patchCommerceCollection({
    commerceCollection: {
      id: "<id>",
      itemIds: [
        "<value>",
      ],
      media: [
        {
          url: "http://personal-sorrow.com",
        },
      ],
      name: "<value>",
      raw: {
        "key": "<value>",
      },
      tags: [
        "<value>",
      ],
    },
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.PatchCommerceCollectionRequest](../../sdk/models/operations/patchcommercecollectionrequest.md)   | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `security`                                                                                                   | [operations.PatchCommerceCollectionSecurity](../../sdk/models/operations/patchcommercecollectionsecurity.md) | :heavy_check_mark:                                                                                           | The security requirements to use for the request.                                                            |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.PatchCommerceCollectionResponse](../../sdk/models/operations/patchcommercecollectionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchCommerceInventory

Update an inventory

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { PatchCommerceInventorySecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: PatchCommerceInventorySecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.commerce.patchCommerceInventory({
    commerceInventory: {
      available: 615.23,
      raw: {
        "key": "<value>",
      },
    },
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.PatchCommerceInventoryRequest](../../sdk/models/operations/patchcommerceinventoryrequest.md)   | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `security`                                                                                                 | [operations.PatchCommerceInventorySecurity](../../sdk/models/operations/patchcommerceinventorysecurity.md) | :heavy_check_mark:                                                                                         | The security requirements to use for the request.                                                          |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.PatchCommerceInventoryResponse](../../sdk/models/operations/patchcommerceinventoryresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchCommerceItem

Update an item

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { PatchCommerceItemSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { CommerceItemMediaType, SizeUnit, WeightUnit } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: PatchCommerceItemSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.commerce.patchCommerceItem({
    commerceItem: {
      media: [
        {
          url: "http://frank-galley.biz",
        },
      ],
      name: "<value>",
      raw: {
        "key": "<value>",
      },
      tags: [
        "<value>",
      ],
      variants: [
        {
          media: [
            {
              url: "http://irresponsible-reason.biz",
            },
          ],
          name: "<value>",
          options: [
            {
              id: "<id>",
              name: "<value>",
              values: [
                "<value>",
              ],
            },
          ],
          prices: [
            {
              price: 4506.62,
            },
          ],
          tags: [
            "<value>",
          ],
        },
      ],
    },
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.PatchCommerceItemRequest](../../sdk/models/operations/patchcommerceitemrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.PatchCommerceItemSecurity](../../sdk/models/operations/patchcommerceitemsecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.PatchCommerceItemResponse](../../sdk/models/operations/patchcommerceitemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchCommerceLocation

Update a location

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { PatchCommerceLocationSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: PatchCommerceLocationSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.commerce.patchCommerceLocation({
    commerceLocation: {
      address: {},
      name: "<value>",
      raw: {
        "key": "<value>",
      },
    },
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.PatchCommerceLocationRequest](../../sdk/models/operations/patchcommercelocationrequest.md)   | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `security`                                                                                               | [operations.PatchCommerceLocationSecurity](../../sdk/models/operations/patchcommercelocationsecurity.md) | :heavy_check_mark:                                                                                       | The security requirements to use for the request.                                                        |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.PatchCommerceLocationResponse](../../sdk/models/operations/patchcommercelocationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## removeCommerceCollection

Remove a collection

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { RemoveCommerceCollectionSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: RemoveCommerceCollectionSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.commerce.removeCommerceCollection({
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.RemoveCommerceCollectionRequest](../../sdk/models/operations/removecommercecollectionrequest.md)   | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `security`                                                                                                     | [operations.RemoveCommerceCollectionSecurity](../../sdk/models/operations/removecommercecollectionsecurity.md) | :heavy_check_mark:                                                                                             | The security requirements to use for the request.                                                              |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.RemoveCommerceCollectionResponse](../../sdk/models/operations/removecommercecollectionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## removeCommerceInventory

Remove an inventory

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { RemoveCommerceInventorySecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: RemoveCommerceInventorySecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.commerce.removeCommerceInventory({
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.RemoveCommerceInventoryRequest](../../sdk/models/operations/removecommerceinventoryrequest.md)   | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `security`                                                                                                   | [operations.RemoveCommerceInventorySecurity](../../sdk/models/operations/removecommerceinventorysecurity.md) | :heavy_check_mark:                                                                                           | The security requirements to use for the request.                                                            |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.RemoveCommerceInventoryResponse](../../sdk/models/operations/removecommerceinventoryresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## removeCommerceItem

Remove an item

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { RemoveCommerceItemSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: RemoveCommerceItemSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.commerce.removeCommerceItem({
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.RemoveCommerceItemRequest](../../sdk/models/operations/removecommerceitemrequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.RemoveCommerceItemSecurity](../../sdk/models/operations/removecommerceitemsecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.RemoveCommerceItemResponse](../../sdk/models/operations/removecommerceitemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## removeCommerceLocation

Remove a location

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { RemoveCommerceLocationSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: RemoveCommerceLocationSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.commerce.removeCommerceLocation({
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.RemoveCommerceLocationRequest](../../sdk/models/operations/removecommercelocationrequest.md)   | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `security`                                                                                                 | [operations.RemoveCommerceLocationSecurity](../../sdk/models/operations/removecommercelocationsecurity.md) | :heavy_check_mark:                                                                                         | The security requirements to use for the request.                                                          |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.RemoveCommerceLocationResponse](../../sdk/models/operations/removecommercelocationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateCommerceCollection

Update a collection

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { UpdateCommerceCollectionSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { CommerceItemMediaType } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: UpdateCommerceCollectionSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.commerce.updateCommerceCollection({
    commerceCollection: {
      id: "<id>",
      itemIds: [
        "<value>",
      ],
      media: [
        {
          url: "https://stupid-entity.org",
        },
      ],
      name: "<value>",
      raw: {
        "key": "<value>",
      },
      tags: [
        "<value>",
      ],
    },
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.UpdateCommerceCollectionRequest](../../sdk/models/operations/updatecommercecollectionrequest.md)   | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `security`                                                                                                     | [operations.UpdateCommerceCollectionSecurity](../../sdk/models/operations/updatecommercecollectionsecurity.md) | :heavy_check_mark:                                                                                             | The security requirements to use for the request.                                                              |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.UpdateCommerceCollectionResponse](../../sdk/models/operations/updatecommercecollectionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateCommerceInventory

Update an inventory

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { UpdateCommerceInventorySecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: UpdateCommerceInventorySecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.commerce.updateCommerceInventory({
    commerceInventory: {
      available: 9360.02,
      raw: {
        "key": "<value>",
      },
    },
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.UpdateCommerceInventoryRequest](../../sdk/models/operations/updatecommerceinventoryrequest.md)   | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `security`                                                                                                   | [operations.UpdateCommerceInventorySecurity](../../sdk/models/operations/updatecommerceinventorysecurity.md) | :heavy_check_mark:                                                                                           | The security requirements to use for the request.                                                            |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.UpdateCommerceInventoryResponse](../../sdk/models/operations/updatecommerceinventoryresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateCommerceItem

Update an item

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { UpdateCommerceItemSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { CommerceItemMediaType, SizeUnit, WeightUnit } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: UpdateCommerceItemSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.commerce.updateCommerceItem({
    commerceItem: {
      media: [
        {
          url: "https://aggressive-major-league.org",
        },
      ],
      name: "<value>",
      raw: {
        "key": "<value>",
      },
      tags: [
        "<value>",
      ],
      variants: [
        {
          media: [
            {
              url: "https://reasonable-cast.biz",
            },
          ],
          name: "<value>",
          options: [
            {
              id: "<id>",
              name: "<value>",
              values: [
                "<value>",
              ],
            },
          ],
          prices: [
            {
              price: 8467.25,
            },
          ],
          tags: [
            "<value>",
          ],
        },
      ],
    },
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.UpdateCommerceItemRequest](../../sdk/models/operations/updatecommerceitemrequest.md)   | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `security`                                                                                         | [operations.UpdateCommerceItemSecurity](../../sdk/models/operations/updatecommerceitemsecurity.md) | :heavy_check_mark:                                                                                 | The security requirements to use for the request.                                                  |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.UpdateCommerceItemResponse](../../sdk/models/operations/updatecommerceitemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateCommerceLocation

Update a location

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { UpdateCommerceLocationSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: UpdateCommerceLocationSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.commerce.updateCommerceLocation({
    commerceLocation: {
      address: {},
      name: "<value>",
      raw: {
        "key": "<value>",
      },
    },
    connectionId: "<value>",
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.UpdateCommerceLocationRequest](../../sdk/models/operations/updatecommercelocationrequest.md)   | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `security`                                                                                                 | [operations.UpdateCommerceLocationSecurity](../../sdk/models/operations/updatecommercelocationsecurity.md) | :heavy_check_mark:                                                                                         | The security requirements to use for the request.                                                          |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.UpdateCommerceLocationResponse](../../sdk/models/operations/updatecommercelocationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
