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
  connectionId: "alias",
  id: "d2743fd6-c2a1-40e6-8297-8ec256a5b092",
  listId: "magni",
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
  connectionId: "iure",
  limit: 9859.05,
  listId: "quod",
  offset: 8111.96,
  order: "numquam",
  query: "dignissimos",
  sort: "natus",
  updatedGte: new Date("2022-03-19T03:29:08.234Z"),
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
  connectionId: "optio",
  id: "977bbc57-f389-428a-8600-c58d67d63e4a",
  listId: "officia",
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
    createdAt: new Date("2022-08-11T15:05:29.161Z"),
    emails: [
      {
        email: "Ella32@yahoo.com",
        type: MarketingEmailType.Home,
      },
    ],
    id: "9cfc6c0e-503f-4568-b1f1-d8ed87b28e8a",
    listIds: [
      "a",
    ],
    name: "Felipe Schmeler",
    raw: {},
    tags: [
      "nisi",
    ],
    updatedAt: new Date("2022-07-05T01:28:10.122Z"),
  },
  connectionId: "aliquam",
  id: "1e43b234-2417-4d13-a3f6-2aa9ae4ae8ab",
  listId: "numquam",
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
    createdAt: new Date("2021-10-26T01:34:29.397Z"),
    emails: [
      {
        email: "Elena80@hotmail.com",
        type: MarketingEmailType.Home,
      },
    ],
    id: "e8ba5d4a-a4a5-408b-9380-c29aa8dd71bd",
    listIds: [
      "repellendus",
    ],
    name: "Miss Hubert Emard",
    raw: {},
    tags: [
      "cum",
    ],
    updatedAt: new Date("2022-10-14T03:48:43.146Z"),
  },
  connectionId: "labore",
  listId: "modi",
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
    createdAt: new Date("2021-09-21T15:05:12.667Z"),
    emails: [
      {
        email: "Geoffrey.Mitchell53@hotmail.com",
        type: MarketingEmailType.Home,
      },
    ],
    id: "d418bb71-804f-4423-9543-935f377ac5c9",
    listIds: [
      "nam",
    ],
    name: "Gretchen Moore",
    raw: {},
    tags: [
      "suscipit",
    ],
    updatedAt: new Date("2022-08-12T05:09:42.944Z"),
  },
  connectionId: "optio",
  id: "523105e7-c34c-4ab0-acb8-12a66148944a",
  listId: "voluptatum",
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

