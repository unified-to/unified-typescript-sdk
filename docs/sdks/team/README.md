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
  connectionId: "ab",
  id: "bbf05527-1b25-411d-9606-dd1b28272bc9",
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
  connectionId: "placeat",
  limit: 1884.9,
  offset: 1694.68,
  order: "sunt",
  query: "vitae",
  sort: "ex",
  updatedGte: new Date("2022-01-05T07:41:51.025Z"),
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
  connectionId: "rerum",
  id: "1880fcbb-2b93-4c15-b670-bd1784831653",
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
    createdAt: new Date("2020-04-24T00:39:17.172Z"),
    description: "harum",
    id: "3b6e241c-3109-4983-a63c-66dcbb7df6cb",
    name: "Jenny Rolfson",
    raw: {},
    updatedAt: new Date("2022-12-14T00:49:36.543Z"),
    userIds: [
      "praesentium",
    ],
  },
  connectionId: "recusandae",
  id: "0713774d-e4fe-4e10-9d97-80a10c47b950",
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
    createdAt: new Date("2022-12-18T11:11:12.745Z"),
    description: "possimus",
    id: "6c8b2a5f-0022-407e-8048-f90009ed2902",
    name: "Brandy Tillman",
    raw: {},
    updatedAt: new Date("2021-02-19T10:57:16.366Z"),
    userIds: [
      "iste",
    ],
  },
  connectionId: "pariatur",
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
    createdAt: new Date("2022-09-20T15:32:20.854Z"),
    description: "sunt",
    id: "61e91500-323b-42c0-9b92-4771f5669e5b",
    name: "Tricia Sawayn",
    raw: {},
    updatedAt: new Date("2022-07-25T07:35:50.345Z"),
    userIds: [
      "ea",
    ],
  },
  connectionId: "labore",
  id: "9d84eb9e-4cfd-4227-ae0b-88fb87d6fa5b",
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

