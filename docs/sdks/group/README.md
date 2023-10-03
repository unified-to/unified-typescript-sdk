# Group
(*group*)

### Available Operations

* [deleteHrisConnectionIdGroupId](#deletehrisconnectionidgroupid) - Remove a group
* [getHrisConnectionIdGroup](#gethrisconnectionidgroup) - List all groups
* [getHrisConnectionIdGroupId](#gethrisconnectionidgroupid) - Retrieve a group
* [patchHrisConnectionIdGroupId](#patchhrisconnectionidgroupid) - Update a group
* [postHrisConnectionIdGroup](#posthrisconnectionidgroup) - Create a group
* [putHrisConnectionIdGroupId](#puthrisconnectionidgroupid) - Update a group

## deleteHrisConnectionIdGroupId

Remove a group

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
  connectionId: "consequently platforms Metal",
  id: "<ID>",
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

List all groups

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
  connectionId: "Loan",
  limit: 3486.96,
  offset: 9705.73,
  order: "Coordinator",
  query: "World",
  sort: "Dollar",
  updatedGte: new Date("2021-01-15T16:06:13.340Z"),
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

Retrieve a group

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
  connectionId: "behind",
  id: "<ID>",
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

Update a group

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
    createdAt: new Date("2023-10-19T05:30:26.390Z"),
    description: "Stand-alone asymmetric orchestration",
    employeeIds: [
      "shootdown",
    ],
    id: "<ID>",
    isActive: false,
    managerIds: [
      "24/7",
    ],
    name: "Agender trainer",
    parentId: "Configuration Kids Sedan",
    raw: {},
    type: HrisGroupType.Division,
    updatedAt: new Date("2021-08-18T16:48:12.885Z"),
  },
  connectionId: "Intersex",
  id: "<ID>",
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

Create a group

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
    createdAt: new Date("2021-02-23T15:35:38.483Z"),
    description: "Configurable stable product",
    employeeIds: [
      "Auto",
    ],
    id: "<ID>",
    isActive: false,
    managerIds: [
      "JSON",
    ],
    name: "whereas Usability transmitting",
    parentId: "invoice Cyclocross Electric",
    raw: {},
    type: HrisGroupType.Group,
    updatedAt: new Date("2021-04-30T12:40:50.129Z"),
  },
  connectionId: "Hybrid Schenectady",
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

Update a group

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
    createdAt: new Date("2022-08-10T12:11:42.375Z"),
    description: "Decentralized methodical projection",
    employeeIds: [
      "Credit",
    ],
    id: "<ID>",
    isActive: false,
    managerIds: [
      "South",
    ],
    name: "Jeep brr Northwest",
    parentId: "quickly Licensed",
    raw: {},
    type: HrisGroupType.BusinessUnit,
    updatedAt: new Date("2021-11-08T00:11:45.458Z"),
  },
  connectionId: "vortals interface Gasoline",
  id: "<ID>",
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

