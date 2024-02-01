# Item
(*item*)

### Available Operations

* [createCommerceItem](#createcommerceitem) - Create an item/product
* [getCommerceItem](#getcommerceitem) - Retrieve an item/product
* [listCommerceItems](#listcommerceitems) - List all items/products
* [patchCommerceItem](#patchcommerceitem) - Update an item/product
* [removeCommerceItem](#removecommerceitem) - Remove an item/product
* [updateCommerceItem](#updatecommerceitem) - Update an item/product

## createCommerceItem

Create an item/product

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { CommerceItemMediaType, SizeUnit, WeightUnit } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo({
    security: {
      jwt: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.item.createCommerceItem({
    commerceItem: {
      media: [
        {
          url: "http://loud-minister.name",
        },
      ],
      name: "string",
      raw: {
        "key": "string",
      },
      tags: [
        "string",
      ],
      variants: [
        {
          media: [
            {
              url: "http://other-external.info",
            },
          ],
          name: "string",
          options: [
            {
              id: "<ID>",
              name: "string",
              values: [
                "string",
              ],
            },
          ],
          prices: [
            {
              price: 3330.74,
            },
          ],
          tags: [
            "string",
          ],
        },
      ],
    },
    connectionId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.CreateCommerceItemRequest](../../sdk/models/operations/createcommerceitemrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.CreateCommerceItemResponse](../../sdk/models/operations/createcommerceitemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getCommerceItem

Retrieve an item/product

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";

async function run() {
  const sdk = new UnifiedTo({
    security: {
      jwt: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.item.getCommerceItem({
    connectionId: "string",
    fields: [
      "string",
    ],
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetCommerceItemRequest](../../sdk/models/operations/getcommerceitemrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetCommerceItemResponse](../../sdk/models/operations/getcommerceitemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listCommerceItems

List all items/products

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";

async function run() {
  const sdk = new UnifiedTo({
    security: {
      jwt: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.item.listCommerceItems({
    connectionId: "string",
    fields: [
      "string",
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.ListCommerceItemsRequest](../../sdk/models/operations/listcommerceitemsrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.ListCommerceItemsResponse](../../sdk/models/operations/listcommerceitemsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchCommerceItem

Update an item/product

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { CommerceItemMediaType, SizeUnit, WeightUnit } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo({
    security: {
      jwt: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.item.patchCommerceItem({
    commerceItem: {
      media: [
        {
          url: "http://frank-galley.biz",
        },
      ],
      name: "string",
      raw: {
        "key": "string",
      },
      tags: [
        "string",
      ],
      variants: [
        {
          media: [
            {
              url: "http://irresponsible-reason.biz",
            },
          ],
          name: "string",
          options: [
            {
              id: "<ID>",
              name: "string",
              values: [
                "string",
              ],
            },
          ],
          prices: [
            {
              price: 4506.62,
            },
          ],
          tags: [
            "string",
          ],
        },
      ],
    },
    connectionId: "string",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.PatchCommerceItemRequest](../../sdk/models/operations/patchcommerceitemrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.PatchCommerceItemResponse](../../sdk/models/operations/patchcommerceitemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## removeCommerceItem

Remove an item/product

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";

async function run() {
  const sdk = new UnifiedTo({
    security: {
      jwt: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.item.removeCommerceItem({
    connectionId: "string",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.RemoveCommerceItemRequest](../../sdk/models/operations/removecommerceitemrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.RemoveCommerceItemResponse](../../sdk/models/operations/removecommerceitemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateCommerceItem

Update an item/product

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { CommerceItemMediaType, SizeUnit, WeightUnit } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo({
    security: {
      jwt: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.item.updateCommerceItem({
    commerceItem: {
      media: [
        {
          url: "https://aggressive-major-league.org",
        },
      ],
      name: "string",
      raw: {
        "key": "string",
      },
      tags: [
        "string",
      ],
      variants: [
        {
          media: [
            {
              url: "https://reasonable-cast.biz",
            },
          ],
          name: "string",
          options: [
            {
              id: "<ID>",
              name: "string",
              values: [
                "string",
              ],
            },
          ],
          prices: [
            {
              price: 8467.25,
            },
          ],
          tags: [
            "string",
          ],
        },
      ],
    },
    connectionId: "string",
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.UpdateCommerceItemRequest](../../sdk/models/operations/updatecommerceitemrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.UpdateCommerceItemResponse](../../sdk/models/operations/updatecommerceitemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
