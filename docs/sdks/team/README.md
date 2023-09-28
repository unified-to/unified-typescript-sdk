# Team
(*team*)

### Available Operations

* [deleteCrmConnectionIdTeamId](#deletecrmconnectionidteamid) - Remove a team
* [getCrmConnectionIdTeam](#getcrmconnectionidteam) - List all teams
* [getCrmConnectionIdTeamId](#getcrmconnectionidteamid) - Retrieve a team
* [patchCrmConnectionIdTeamId](#patchcrmconnectionidteamid) - Update a team
* [postCrmConnectionIdTeam](#postcrmconnectionidteam) - Create a team
* [putCrmConnectionIdTeamId](#putcrmconnectionidteamid) - Update a team

## deleteCrmConnectionIdTeamId

Remove a team

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteCrmConnectionIdTeamIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.team.deleteCrmConnectionIdTeamId({
  connectionId: "Diverse",
  id: "<ID>",
}).then((res: DeleteCrmConnectionIdTeamIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.DeleteCrmConnectionIdTeamIdRequest](../../models/operations/deletecrmconnectionidteamidrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.DeleteCrmConnectionIdTeamIdResponse](../../models/operations/deletecrmconnectionidteamidresponse.md)>**


## getCrmConnectionIdTeam

List all teams

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetCrmConnectionIdTeamResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.team.getCrmConnectionIdTeam({
  connectionId: "bath Lamborghini",
  limit: 1042.31,
  offset: 1586.42,
  order: "Diesel Bike virtual",
  query: "bakery",
  sort: "Senior",
  updatedGte: new Date("2021-12-04T23:56:00.028Z"),
}).then((res: GetCrmConnectionIdTeamResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetCrmConnectionIdTeamRequest](../../models/operations/getcrmconnectionidteamrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetCrmConnectionIdTeamResponse](../../models/operations/getcrmconnectionidteamresponse.md)>**


## getCrmConnectionIdTeamId

Retrieve a team

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetCrmConnectionIdTeamIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.team.getCrmConnectionIdTeamId({
  connectionId: "Intelligent invoice Tesla",
  id: "<ID>",
}).then((res: GetCrmConnectionIdTeamIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.GetCrmConnectionIdTeamIdRequest](../../models/operations/getcrmconnectionidteamidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.GetCrmConnectionIdTeamIdResponse](../../models/operations/getcrmconnectionidteamidresponse.md)>**


## patchCrmConnectionIdTeamId

Update a team

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PatchCrmConnectionIdTeamIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.team.patchCrmConnectionIdTeamId({
  crmTeam: {
    createdAt: new Date("2021-05-20T12:47:48.451Z"),
    description: "Automated executive emulation",
    id: "<ID>",
    name: "Internal experiences",
    raw: {},
    updatedAt: new Date("2022-05-22T09:41:53.599Z"),
    userIds: [
      "lumen",
    ],
  },
  connectionId: "up Candace",
  id: "<ID>",
}).then((res: PatchCrmConnectionIdTeamIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.PatchCrmConnectionIdTeamIdRequest](../../models/operations/patchcrmconnectionidteamidrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.PatchCrmConnectionIdTeamIdResponse](../../models/operations/patchcrmconnectionidteamidresponse.md)>**


## postCrmConnectionIdTeam

Create a team

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PostCrmConnectionIdTeamResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.team.postCrmConnectionIdTeam({
  crmTeam: {
    createdAt: new Date("2022-02-12T08:57:03.070Z"),
    description: "Organic transitional portal",
    id: "<ID>",
    name: "male bandwidth",
    raw: {},
    updatedAt: new Date("2022-12-29T15:50:04.365Z"),
    userIds: [
      "meter",
    ],
  },
  connectionId: "Guaynabo AGP East",
}).then((res: PostCrmConnectionIdTeamResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.PostCrmConnectionIdTeamRequest](../../models/operations/postcrmconnectionidteamrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.PostCrmConnectionIdTeamResponse](../../models/operations/postcrmconnectionidteamresponse.md)>**


## putCrmConnectionIdTeamId

Update a team

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PutCrmConnectionIdTeamIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.team.putCrmConnectionIdTeamId({
  crmTeam: {
    createdAt: new Date("2023-08-14T23:28:53.515Z"),
    description: "Inverse multi-tasking task-force",
    id: "<ID>",
    name: "Indonesia Orchestrator Division",
    raw: {},
    updatedAt: new Date("2022-10-23T23:13:25.973Z"),
    userIds: [
      "thoroughly",
    ],
  },
  connectionId: "delectus",
  id: "<ID>",
}).then((res: PutCrmConnectionIdTeamIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.PutCrmConnectionIdTeamIdRequest](../../models/operations/putcrmconnectionidteamidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.PutCrmConnectionIdTeamIdResponse](../../models/operations/putcrmconnectionidteamidresponse.md)>**

