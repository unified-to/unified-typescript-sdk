# Martech
(*martech*)

### Available Operations

* [deleteMartechConnectionIdListId](#deletemartechconnectionidlistid) - Remove a list
* [deleteMartechConnectionIdListIdMemberId](#deletemartechconnectionidlistidmemberid) - Remove member from a list
* [getMartechConnectionIdList](#getmartechconnectionidlist) - List all lists
* [getMartechConnectionIdListId](#getmartechconnectionidlistid) - Retrieve a list
* [getMartechConnectionIdListIdMember](#getmartechconnectionidlistidmember) - List all members in a list
* [getMartechConnectionIdListIdMemberId](#getmartechconnectionidlistidmemberid) - Retrieve a member from a list
* [patchMartechConnectionIdListId](#patchmartechconnectionidlistid) - Update a list
* [patchMartechConnectionIdListIdMemberId](#patchmartechconnectionidlistidmemberid) - Update a member in a list
* [postMartechConnectionIdList](#postmartechconnectionidlist) - Create a list
* [postMartechConnectionIdListIdMember](#postmartechconnectionidlistidmember) - Create a member in a list
* [putMartechConnectionIdListId](#putmartechconnectionidlistid) - Update a list
* [putMartechConnectionIdListIdMemberId](#putmartechconnectionidlistidmemberid) - Update a member in a list

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

sdk.martech.deleteMartechConnectionIdListId({
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


## deleteMartechConnectionIdListIdMemberId

Remove member from a list

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteMartechConnectionIdListIdMemberIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.martech.deleteMartechConnectionIdListIdMemberId({
  connectionId: "Southwest fib",
  id: "<ID>",
  listId: "pascal",
}).then((res: DeleteMartechConnectionIdListIdMemberIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.DeleteMartechConnectionIdListIdMemberIdRequest](../../models/operations/deletemartechconnectionidlistidmemberidrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.DeleteMartechConnectionIdListIdMemberIdResponse](../../models/operations/deletemartechconnectionidlistidmemberidresponse.md)>**


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

sdk.martech.getMartechConnectionIdList({
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

sdk.martech.getMartechConnectionIdListId({
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


## getMartechConnectionIdListIdMember

List all members in a list

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetMartechConnectionIdListIdMemberResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.martech.getMartechConnectionIdListIdMember({
  connectionId: "fuchsia economics",
  limit: 3725.92,
  listId: "Southwest",
  offset: 1114.27,
  order: "emulation",
  query: "male male",
  sort: "Arizona Oklahoma Land",
  updatedGte: new Date("2021-03-19T13:12:48.332Z"),
}).then((res: GetMartechConnectionIdListIdMemberResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.GetMartechConnectionIdListIdMemberRequest](../../models/operations/getmartechconnectionidlistidmemberrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.GetMartechConnectionIdListIdMemberResponse](../../models/operations/getmartechconnectionidlistidmemberresponse.md)>**


## getMartechConnectionIdListIdMemberId

Retrieve a member from a list

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetMartechConnectionIdListIdMemberIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.martech.getMartechConnectionIdListIdMemberId({
  connectionId: "male",
  id: "<ID>",
  listId: "Gasoline Home allot",
}).then((res: GetMartechConnectionIdListIdMemberIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.GetMartechConnectionIdListIdMemberIdRequest](../../models/operations/getmartechconnectionidlistidmemberidrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.GetMartechConnectionIdListIdMemberIdResponse](../../models/operations/getmartechconnectionidlistidmemberidresponse.md)>**


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

sdk.martech.patchMartechConnectionIdListId({
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


## patchMartechConnectionIdListIdMemberId

Update a member in a list

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PatchMartechConnectionIdListIdMemberIdResponse } from "Unified-to/dist/sdk/models/operations";
import { MarketingEmailType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.martech.patchMartechConnectionIdListIdMemberId({
  marketingMember: {
    createdAt: new Date("2022-06-21T07:15:04.418Z"),
    emails: [
      {
        email: "Zula_Bogan76@hotmail.com",
        type: MarketingEmailType.Home,
      },
    ],
    id: "<ID>",
    listIds: [
      "gadzooks",
    ],
    name: "Haven Hatchback",
    raw: {},
    tags: [
      "mutiny",
    ],
    updatedAt: new Date("2021-08-13T23:04:27.910Z"),
  },
  connectionId: "female",
  id: "<ID>",
  listId: "yellow overriding Rock",
}).then((res: PatchMartechConnectionIdListIdMemberIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.PatchMartechConnectionIdListIdMemberIdRequest](../../models/operations/patchmartechconnectionidlistidmemberidrequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.PatchMartechConnectionIdListIdMemberIdResponse](../../models/operations/patchmartechconnectionidlistidmemberidresponse.md)>**


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

sdk.martech.postMartechConnectionIdList({
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


## postMartechConnectionIdListIdMember

Create a member in a list

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PostMartechConnectionIdListIdMemberResponse } from "Unified-to/dist/sdk/models/operations";
import { MarketingEmailType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.martech.postMartechConnectionIdListIdMember({
  marketingMember: {
    createdAt: new Date("2022-12-27T02:49:51.488Z"),
    emails: [
      {
        email: "Esta.Dach@hotmail.com",
        type: MarketingEmailType.Other,
      },
    ],
    id: "<ID>",
    listIds: [
      "virtual",
    ],
    name: "dolorum Wooden Granite",
    raw: {},
    tags: [
      "Road",
    ],
    updatedAt: new Date("2021-06-09T19:47:01.060Z"),
  },
  connectionId: "Pennsylvania leverage sheath",
  listId: "parse exercitationem",
}).then((res: PostMartechConnectionIdListIdMemberResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.PostMartechConnectionIdListIdMemberRequest](../../models/operations/postmartechconnectionidlistidmemberrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.PostMartechConnectionIdListIdMemberResponse](../../models/operations/postmartechconnectionidlistidmemberresponse.md)>**


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

sdk.martech.putMartechConnectionIdListId({
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


## putMartechConnectionIdListIdMemberId

Update a member in a list

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PutMartechConnectionIdListIdMemberIdResponse } from "Unified-to/dist/sdk/models/operations";
import { MarketingEmailType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.martech.putMartechConnectionIdListIdMemberId({
  marketingMember: {
    createdAt: new Date("2023-09-24T05:00:50.743Z"),
    emails: [
      {
        email: "Lorenz_Kautzer@hotmail.com",
        type: MarketingEmailType.Home,
      },
    ],
    id: "<ID>",
    listIds: [
      "SMS",
    ],
    name: "East platforms",
    raw: {},
    tags: [
      "Estonia",
    ],
    updatedAt: new Date("2023-01-20T05:09:32.775Z"),
  },
  connectionId: "following quia Intelligent",
  id: "<ID>",
  listId: "Cab",
}).then((res: PutMartechConnectionIdListIdMemberIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.PutMartechConnectionIdListIdMemberIdRequest](../../models/operations/putmartechconnectionidlistidmemberidrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.PutMartechConnectionIdListIdMemberIdResponse](../../models/operations/putmartechconnectionidlistidmemberidresponse.md)>**

