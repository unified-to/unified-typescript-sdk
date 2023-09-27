# Group
(*group*)

### Available Operations

* [deleteHrisConnectionIdGroupId](#deletehrisconnectionidgroupid) - Remove a Group
* [getHrisConnectionIdGroup](#gethrisconnectionidgroup) - List all Groups
* [getHrisConnectionIdGroupId](#gethrisconnectionidgroupid) - Retrieve a Group
* [patchHrisConnectionIdGroupId](#patchhrisconnectionidgroupid) - Update a Group
* [postHrisConnectionIdGroup](#posthrisconnectionidgroup) - Create a Group
* [putHrisConnectionIdGroupId](#puthrisconnectionidgroupid) - Update a Group

## deleteHrisConnectionIdGroupId

Remove a Group

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteHrisConnectionIdGroupIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.group.deleteHrisConnectionIdGroupId({
  connectionId: "ipsam",
  id: "8aaeacae-323a-431b-b7ba-1cc97716c802",
}).then((res: DeleteHrisConnectionIdGroupIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.DeleteHrisConnectionIdGroupIdRequest](../../models/operations/deletehrisconnectionidgroupidrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.DeleteHrisConnectionIdGroupIdResponse](../../models/operations/deletehrisconnectionidgroupidresponse.md)>**


## getHrisConnectionIdGroup

List all Groups

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetHrisConnectionIdGroupResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.group.getHrisConnectionIdGroup({
  connectionId: "minus",
  limit: 7864.46,
  offset: 5742.21,
  order: "voluptates",
  query: "alias",
  sort: "placeat",
  updatedGte: new Date("2022-03-07T00:11:41.235Z"),
}).then((res: GetHrisConnectionIdGroupResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.GetHrisConnectionIdGroupRequest](../../models/operations/gethrisconnectionidgrouprequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GetHrisConnectionIdGroupResponse](../../models/operations/gethrisconnectionidgroupresponse.md)>**


## getHrisConnectionIdGroupId

Retrieve a Group

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetHrisConnectionIdGroupIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.group.getHrisConnectionIdGroupId({
  connectionId: "iste",
  id: "d323f1aa-63ed-49cf-9c85-6bcba51ef245",
}).then((res: GetHrisConnectionIdGroupIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.GetHrisConnectionIdGroupIdRequest](../../models/operations/gethrisconnectionidgroupidrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.GetHrisConnectionIdGroupIdResponse](../../models/operations/gethrisconnectionidgroupidresponse.md)>**


## patchHrisConnectionIdGroupId

Update a Group

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PatchHrisConnectionIdGroupIdResponse } from "Unified-to/dist/sdk/models/operations";
import { HrisGroupType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.group.patchHrisConnectionIdGroupId({
  hrisGroup: {
    createdAt: new Date("2022-05-13T18:14:16.753Z"),
    description: "aliquam",
    employeeIds: [
      "iusto",
    ],
    id: "facf116c-dd54-444a-b562-873c7dd9efaf",
    isActive: false,
    managerIds: [
      "labore",
    ],
    name: "Cristina Russel",
    parentId: "consectetur",
    raw: {},
    type: HrisGroupType.Department,
    updatedAt: new Date("2022-12-28T08:43:09.661Z"),
  },
  connectionId: "delectus",
  id: "3138f30d-f3db-4022-baa5-65fb8f652ebb",
}).then((res: PatchHrisConnectionIdGroupIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.PatchHrisConnectionIdGroupIdRequest](../../models/operations/patchhrisconnectionidgroupidrequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.PatchHrisConnectionIdGroupIdResponse](../../models/operations/patchhrisconnectionidgroupidresponse.md)>**


## postHrisConnectionIdGroup

Create a Group

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PostHrisConnectionIdGroupResponse } from "Unified-to/dist/sdk/models/operations";
import { HrisGroupType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.group.postHrisConnectionIdGroup({
  hrisGroup: {
    createdAt: new Date("2021-04-22T16:44:51.151Z"),
    description: "dolor",
    employeeIds: [
      "praesentium",
    ],
    id: "38387902-43b2-493d-ab30-e917f50fda04",
    isActive: false,
    managerIds: [
      "porro",
    ],
    name: "Wm Boyer",
    parentId: "exercitationem",
    raw: {},
    type: HrisGroupType.Department,
    updatedAt: new Date("2022-08-30T17:09:47.110Z"),
  },
  connectionId: "unde",
}).then((res: PostHrisConnectionIdGroupResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.PostHrisConnectionIdGroupRequest](../../models/operations/posthrisconnectionidgrouprequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.PostHrisConnectionIdGroupResponse](../../models/operations/posthrisconnectionidgroupresponse.md)>**


## putHrisConnectionIdGroupId

Update a Group

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PutHrisConnectionIdGroupIdResponse } from "Unified-to/dist/sdk/models/operations";
import { HrisGroupType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.group.putHrisConnectionIdGroupId({
  hrisGroup: {
    createdAt: new Date("2022-04-06T01:39:03.213Z"),
    description: "aut",
    employeeIds: [
      "expedita",
    ],
    id: "c3bb7446-64eb-41d0-b388-b0d1bb17afee",
    isActive: false,
    managerIds: [
      "reprehenderit",
    ],
    name: "Latoya Hodkiewicz",
    parentId: "quidem",
    raw: {},
    type: HrisGroupType.BusinessUnit,
    updatedAt: new Date("2022-08-19T01:14:09.290Z"),
  },
  connectionId: "voluptate",
  id: "c7edaf39-d16f-4bf7-afd1-62b303e3023b",
}).then((res: PutHrisConnectionIdGroupIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.PutHrisConnectionIdGroupIdRequest](../../models/operations/puthrisconnectionidgroupidrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.PutHrisConnectionIdGroupIdResponse](../../models/operations/puthrisconnectionidgroupidresponse.md)>**

