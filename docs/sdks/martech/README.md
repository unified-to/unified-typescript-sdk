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
  connectionId: "expedita",
  id: "855e889d-9ef9-432e-9000-a13ad8124208",
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
  connectionId: "voluptates",
  id: "fd234118-98e7-4387-9efb-e8baebabb794",
  listId: "voluptas",
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
  connectionId: "neque",
  limit: 4300.03,
  offset: 9186.14,
  order: "excepturi",
  query: "ipsa",
  sort: "velit",
  updatedGte: new Date("2022-12-03T21:28:14.776Z"),
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
  connectionId: "harum",
  id: "b9763172-0b77-4a5a-9365-a79f15271f01",
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
  connectionId: "quo",
  limit: 34.09,
  listId: "illum",
  offset: 2078.87,
  order: "commodi",
  query: "veritatis",
  sort: "reiciendis",
  updatedGte: new Date("2020-05-30T08:39:08.252Z"),
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
  connectionId: "blanditiis",
  id: "dc5effb4-53e9-4089-a871-fdb4d697bdd9",
  listId: "quisquam",
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
    createdAt: "molestias",
    id: "85e43734-a5d7-42d9-add7-85be5e7afe55",
    name: "Kristina Kozey",
    raw: {},
    updatedAt: new Date("2022-11-15T19:44:05.359Z"),
  },
  connectionId: "laudantium",
  id: "1f44e3a2-3394-4a68-8c80-d30ff72164d0",
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
    createdAt: new Date("2021-11-04T00:39:44.335Z"),
    emails: [
      {
        email: "Zora_Volkman@gmail.com",
        type: MarketingEmailType.Home,
      },
    ],
    id: "6553b89e-0009-4c66-92de-7b3562201a6a",
    listIds: [
      "error",
    ],
    name: "Ray O'Connell",
    raw: {},
    tags: [
      "harum",
    ],
    updatedAt: new Date("2022-04-25T11:53:38.687Z"),
  },
  connectionId: "ipsam",
  id: "b908d4e3-0491-4aa3-9d4a-839f03bab77b",
  listId: "occaecati",
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
    createdAt: "quasi",
    id: "8f031398-4507-4e0e-b9c7-e23ecb060465",
    name: "Kate Cummerata",
    raw: {},
    updatedAt: new Date("2022-02-21T18:28:51.367Z"),
  },
  connectionId: "autem",
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
    createdAt: new Date("2021-11-13T23:02:04.436Z"),
    emails: [
      {
        email: "Ines_Swift@yahoo.com",
        type: MarketingEmailType.Other,
      },
    ],
    id: "8f7f002d-1986-4aa9-9d3a-1d32329e4583",
    listIds: [
      "voluptate",
    ],
    name: "Alberto Wisozk",
    raw: {},
    tags: [
      "fugiat",
    ],
    updatedAt: new Date("2022-04-07T09:46:27.417Z"),
  },
  connectionId: "harum",
  listId: "inventore",
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
    createdAt: "aut",
    id: "e255fdc4-80d6-4e33-8867-5cbf186856a7",
    name: "Jaime Conroy",
    raw: {},
    updatedAt: new Date("2021-03-04T08:28:08.196Z"),
  },
  connectionId: "assumenda",
  id: "0fc282c6-66af-43c3-b558-9bea5d264e41",
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
    createdAt: new Date("2022-06-10T00:17:48.769Z"),
    emails: [
      {
        email: "Mark54@hotmail.com",
        type: MarketingEmailType.Work,
      },
    ],
    id: "2e513f6d-9d2a-4d37-8309-9077c10b6879",
    listIds: [
      "sed",
    ],
    name: "Lucy Fahey",
    raw: {},
    tags: [
      "nihil",
    ],
    updatedAt: new Date("2022-03-31T07:19:18.789Z"),
  },
  connectionId: "rem",
  id: "860543c0-a304-49c3-8f6c-0276e7b21bad",
  listId: "provident",
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

