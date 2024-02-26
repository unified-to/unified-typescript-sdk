# Collection
(*collection*)

### Available Operations

* [createCommerceCollection](#createcommercecollection) - Create a collection
* [getCommerceCollection](#getcommercecollection) - Retrieve a collection
* [listCommerceCollections](#listcommercecollections) - List all collections
* [patchCommerceCollection](#patchcommercecollection) - Update a collection
* [removeCommerceCollection](#removecommercecollection) - Remove a collection
* [updateCommerceCollection](#updatecommercecollection) - Update a collection

## createCommerceCollection

Create a collection

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { CreateCommerceCollectionSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";
import { CommerceItemMediaType } from "@unified-api/typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: CreateCommerceCollectionSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.collection.createCommerceCollection({
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

## getCommerceCollection

Retrieve a collection

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { GetCommerceCollectionSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetCommerceCollectionSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.collection.getCommerceCollection({
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

## listCommerceCollections

List all collections

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { ListCommerceCollectionsSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListCommerceCollectionsSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.collection.listCommerceCollections({
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

## patchCommerceCollection

Update a collection

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { PatchCommerceCollectionSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";
import { CommerceItemMediaType } from "@unified-api/typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: PatchCommerceCollectionSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.collection.patchCommerceCollection({
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

## removeCommerceCollection

Remove a collection

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { RemoveCommerceCollectionSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: RemoveCommerceCollectionSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.collection.removeCommerceCollection({
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

## updateCommerceCollection

Update a collection

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { UpdateCommerceCollectionSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";
import { CommerceItemMediaType } from "@unified-api/typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: UpdateCommerceCollectionSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.collection.updateCommerceCollection({
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
