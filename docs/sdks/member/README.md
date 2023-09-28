# Member
(*member*)

### Available Operations

* [deleteMartechConnectionIdListIdMemberId](#deletemartechconnectionidlistidmemberid) - Remove member from a list
* [getMartechConnectionIdListIdMember](#getmartechconnectionidlistidmember) - List all members in a list
* [getMartechConnectionIdListIdMemberId](#getmartechconnectionidlistidmemberid) - Retrieve a member from a list
* [patchMartechConnectionIdListIdMemberId](#patchmartechconnectionidlistidmemberid) - Update a member in a list
* [postMartechConnectionIdListIdMember](#postmartechconnectionidlistidmember) - Create a member in a list
* [putMartechConnectionIdListIdMemberId](#putmartechconnectionidlistidmemberid) - Update a member in a list

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

sdk.member.deleteMartechConnectionIdListIdMemberId({
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

sdk.member.getMartechConnectionIdListIdMember({
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

sdk.member.getMartechConnectionIdListIdMemberId({
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

sdk.member.patchMartechConnectionIdListIdMemberId({
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

sdk.member.postMartechConnectionIdListIdMember({
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

sdk.member.putMartechConnectionIdListIdMemberId({
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

