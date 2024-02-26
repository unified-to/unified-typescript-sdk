# List
(*list*)

### Available Operations

* [createMartechList](#createmartechlist) - Create a list
* [getMartechList](#getmartechlist) - Retrieve a list
* [listMartechLists](#listmartechlists) - List all lists
* [patchMartechList](#patchmartechlist) - Update a list
* [removeMartechList](#removemartechlist) - Remove a list
* [updateMartechList](#updatemartechlist) - Update a list

## createMartechList

Create a list

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { CreateMartechListSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: CreateMartechListSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.list.createMartechList({
    marketingList: {
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

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.CreateMartechListRequest](../../sdk/models/operations/createmartechlistrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.CreateMartechListSecurity](../../sdk/models/operations/createmartechlistsecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.CreateMartechListResponse](../../sdk/models/operations/createmartechlistresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getMartechList

Retrieve a list

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { GetMartechListSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetMartechListSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.list.getMartechList({
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

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetMartechListRequest](../../sdk/models/operations/getmartechlistrequest.md)   | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `security`                                                                                 | [operations.GetMartechListSecurity](../../sdk/models/operations/getmartechlistsecurity.md) | :heavy_check_mark:                                                                         | The security requirements to use for the request.                                          |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetMartechListResponse](../../sdk/models/operations/getmartechlistresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listMartechLists

List all lists

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { ListMartechListsSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListMartechListsSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.list.listMartechLists({
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

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.ListMartechListsRequest](../../sdk/models/operations/listmartechlistsrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.ListMartechListsSecurity](../../sdk/models/operations/listmartechlistssecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.ListMartechListsResponse](../../sdk/models/operations/listmartechlistsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchMartechList

Update a list

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { PatchMartechListSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: PatchMartechListSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.list.patchMartechList({
    marketingList: {
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

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.PatchMartechListRequest](../../sdk/models/operations/patchmartechlistrequest.md)   | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `security`                                                                                     | [operations.PatchMartechListSecurity](../../sdk/models/operations/patchmartechlistsecurity.md) | :heavy_check_mark:                                                                             | The security requirements to use for the request.                                              |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.PatchMartechListResponse](../../sdk/models/operations/patchmartechlistresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## removeMartechList

Remove a list

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { RemoveMartechListSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: RemoveMartechListSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.list.removeMartechList({
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
| `request`                                                                                        | [operations.RemoveMartechListRequest](../../sdk/models/operations/removemartechlistrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.RemoveMartechListSecurity](../../sdk/models/operations/removemartechlistsecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.RemoveMartechListResponse](../../sdk/models/operations/removemartechlistresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateMartechList

Update a list

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { UpdateMartechListSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: UpdateMartechListSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.list.updateMartechList({
    marketingList: {
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

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.UpdateMartechListRequest](../../sdk/models/operations/updatemartechlistrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.UpdateMartechListSecurity](../../sdk/models/operations/updatemartechlistsecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.UpdateMartechListResponse](../../sdk/models/operations/updatemartechlistresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
