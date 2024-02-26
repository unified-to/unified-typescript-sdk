# Item
(*item*)

### Available Operations

* [createCommerceItem](#createcommerceitem) - Create an item
* [getCommerceItem](#getcommerceitem) - Retrieve an item
* [listCommerceItems](#listcommerceitems) - List all items
* [patchCommerceItem](#patchcommerceitem) - Update an item
* [removeCommerceItem](#removecommerceitem) - Remove an item
* [updateCommerceItem](#updatecommerceitem) - Update an item

## createCommerceItem

Create an item

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { CreateCommerceItemSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";
import { CommerceItemMediaType, SizeUnit, WeightUnit } from "@unified-api/typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: CreateCommerceItemSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.item.createCommerceItem({
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

## getCommerceItem

Retrieve an item

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { GetCommerceItemSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetCommerceItemSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.item.getCommerceItem({
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

## listCommerceItems

List all items

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { ListCommerceItemsSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListCommerceItemsSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.item.listCommerceItems({
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

## patchCommerceItem

Update an item

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { PatchCommerceItemSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";
import { CommerceItemMediaType, SizeUnit, WeightUnit } from "@unified-api/typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: PatchCommerceItemSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.item.patchCommerceItem({
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

## removeCommerceItem

Remove an item

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { RemoveCommerceItemSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: RemoveCommerceItemSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.item.removeCommerceItem({
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

## updateCommerceItem

Update an item

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { UpdateCommerceItemSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";
import { CommerceItemMediaType, SizeUnit, WeightUnit } from "@unified-api/typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: UpdateCommerceItemSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.item.updateCommerceItem({
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
