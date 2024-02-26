# Inventory
(*inventory*)

### Available Operations

* [createCommerceInventory](#createcommerceinventory) - Create an inventory
* [getCommerceInventory](#getcommerceinventory) - Retrieve an inventory
* [listCommerceInventories](#listcommerceinventories) - List all inventories
* [patchCommerceInventory](#patchcommerceinventory) - Update an inventory
* [removeCommerceInventory](#removecommerceinventory) - Remove an inventory
* [updateCommerceInventory](#updatecommerceinventory) - Update an inventory

## createCommerceInventory

Create an inventory

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { CreateCommerceInventorySecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: CreateCommerceInventorySecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.inventory.createCommerceInventory({
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

## getCommerceInventory

Retrieve an inventory

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { GetCommerceInventorySecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetCommerceInventorySecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.inventory.getCommerceInventory({
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

## listCommerceInventories

List all inventories

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { ListCommerceInventoriesSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListCommerceInventoriesSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.inventory.listCommerceInventories({
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

## patchCommerceInventory

Update an inventory

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { PatchCommerceInventorySecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: PatchCommerceInventorySecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.inventory.patchCommerceInventory({
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

## removeCommerceInventory

Remove an inventory

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { RemoveCommerceInventorySecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: RemoveCommerceInventorySecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.inventory.removeCommerceInventory({
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

## updateCommerceInventory

Update an inventory

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { UpdateCommerceInventorySecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: UpdateCommerceInventorySecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.inventory.updateCommerceInventory({
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
