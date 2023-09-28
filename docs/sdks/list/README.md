# List
(*list*)

### Available Operations

* [deleteMartechConnectionIdListId](#deletemartechconnectionidlistid) - Remove a list
* [getMartechConnectionIdList](#getmartechconnectionidlist) - List all lists
* [getMartechConnectionIdListId](#getmartechconnectionidlistid) - Retrieve a list
* [patchMartechConnectionIdListId](#patchmartechconnectionidlistid) - Update a list
* [postMartechConnectionIdList](#postmartechconnectionidlist) - Create a list
* [putMartechConnectionIdListId](#putmartechconnectionidlistid) - Update a list

## deleteMartechConnectionIdListId

Remove a list

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteMartechConnectionIdListIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.list.deleteMartechConnectionIdListId({
  connectionId: "Minivan",
  id: "<ID>",
}).then((res: DeleteMartechConnectionIdListIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.DeleteMartechConnectionIdListIdRequest](../../models/operations/deletemartechconnectionidlistidrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.DeleteMartechConnectionIdListIdResponse](../../models/operations/deletemartechconnectionidlistidresponse.md)>**


## getMartechConnectionIdList

List all lists

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetMartechConnectionIdListResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.list.getMartechConnectionIdList({
  connectionId: "silver DeKalb",
  limit: 9799.48,
  offset: 4800.63,
  order: "Bedfordshire",
  query: "Hip Pass",
  sort: "since",
  updatedGte: new Date("2022-03-26T19:40:00.770Z"),
}).then((res: GetMartechConnectionIdListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.GetMartechConnectionIdListRequest](../../models/operations/getmartechconnectionidlistrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.GetMartechConnectionIdListResponse](../../models/operations/getmartechconnectionidlistresponse.md)>**


## getMartechConnectionIdListId

Retrieve a list

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetMartechConnectionIdListIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.list.getMartechConnectionIdListId({
  connectionId: "Jewelery orange",
  id: "<ID>",
}).then((res: GetMartechConnectionIdListIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.GetMartechConnectionIdListIdRequest](../../models/operations/getmartechconnectionidlistidrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.GetMartechConnectionIdListIdResponse](../../models/operations/getmartechconnectionidlistidresponse.md)>**


## patchMartechConnectionIdListId

Update a list

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PatchMartechConnectionIdListIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.list.patchMartechConnectionIdListId({
  marketingList: {
    createdAt: "Funk",
    id: "<ID>",
    name: "lime Fiat",
    raw: {},
    updatedAt: new Date("2021-01-15T20:51:24.192Z"),
  },
  connectionId: "male sheepishly Intelligent",
  id: "<ID>",
}).then((res: PatchMartechConnectionIdListIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.PatchMartechConnectionIdListIdRequest](../../models/operations/patchmartechconnectionidlistidrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.PatchMartechConnectionIdListIdResponse](../../models/operations/patchmartechconnectionidlistidresponse.md)>**


## postMartechConnectionIdList

Create a list

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PostMartechConnectionIdListResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.list.postMartechConnectionIdList({
  marketingList: {
    createdAt: "synergistic Transexual Steel",
    id: "<ID>",
    name: "Virginia whoever Bicycle",
    raw: {},
    updatedAt: new Date("2023-04-27T09:56:39.589Z"),
  },
  connectionId: "Hybrid",
}).then((res: PostMartechConnectionIdListResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.PostMartechConnectionIdListRequest](../../models/operations/postmartechconnectionidlistrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.PostMartechConnectionIdListResponse](../../models/operations/postmartechconnectionidlistresponse.md)>**


## putMartechConnectionIdListId

Update a list

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PutMartechConnectionIdListIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.list.putMartechConnectionIdListId({
  marketingList: {
    createdAt: "Underpass initiatives",
    id: "<ID>",
    name: "North Progressive Assistant",
    raw: {},
    updatedAt: new Date("2023-10-03T22:31:39.028Z"),
  },
  connectionId: "Security Legacy onto",
  id: "<ID>",
}).then((res: PutMartechConnectionIdListIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.PutMartechConnectionIdListIdRequest](../../models/operations/putmartechconnectionidlistidrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.PutMartechConnectionIdListIdResponse](../../models/operations/putmartechconnectionidlistidresponse.md)>**

