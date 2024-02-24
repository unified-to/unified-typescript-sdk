# Location
(*location*)

### Available Operations

* [createCommerceLocation](#createcommercelocation) - Create a location
* [getCommerceLocation](#getcommercelocation) - Retrieve a location
* [listCommerceLocations](#listcommercelocations) - List all locations
* [patchCommerceLocation](#patchcommercelocation) - Update a location
* [removeCommerceLocation](#removecommercelocation) - Remove a location
* [updateCommerceLocation](#updatecommercelocation) - Update a location

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

  const res = await sdk.location.createCommerceLocation({
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

  const res = await sdk.location.getCommerceLocation({
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

  const res = await sdk.location.listCommerceLocations({
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

  const res = await sdk.location.patchCommerceLocation({
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

  const res = await sdk.location.removeCommerceLocation({
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

  const res = await sdk.location.updateCommerceLocation({
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
