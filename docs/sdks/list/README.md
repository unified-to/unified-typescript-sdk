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
  connectionId: "molestiae",
  id: "866db8a7-49e3-4984-911c-c75e4f0c004b",
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
  connectionId: "minima",
  limit: 7315.15,
  offset: 6991.28,
  order: "molestiae",
  query: "ipsam",
  sort: "quos",
  updatedGte: new Date("2020-09-30T08:18:10.798Z"),
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
  connectionId: "cupiditate",
  id: "4562f006-9685-4fcd-9a17-3d84bbe24f29",
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
    createdAt: "praesentium",
    id: "34afb073-5cb6-4285-94a2-9aaa1e169156",
    name: "Adrian Schuster",
    raw: {},
    updatedAt: new Date("2022-06-17T09:25:28.057Z"),
  },
  connectionId: "perferendis",
  id: "9505bf03-a93e-4944-80ca-37fb10789032",
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
    createdAt: "deserunt",
    id: "c333172e-2dd7-49ec-b4ba-7e88ddb36fd1",
    name: "Lucas Schneider",
    raw: {},
    updatedAt: new Date("2022-03-20T02:47:07.461Z"),
  },
  connectionId: "quas",
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
    createdAt: "autem",
    id: "573474f0-a740-4fb4-ab44-1c3a09e76399",
    name: "Ms. Eula Leffler",
    raw: {},
    updatedAt: new Date("2021-03-29T15:45:25.588Z"),
  },
  connectionId: "odio",
  id: "94455ebc-550a-41c4-a6b5-9c8366fdcc13",
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

