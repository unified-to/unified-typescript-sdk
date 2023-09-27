# Connection
(*connection*)

### Available Operations

* [deleteUnifiedConnectionId](#deleteunifiedconnectionid) - Remove connection
* [getUnifiedConnection](#getunifiedconnection) - List all connections
* [getUnifiedConnectionId](#getunifiedconnectionid) - Retrieve connection
* [patchUnifiedConnectionId](#patchunifiedconnectionid) - Update connection
* [postUnifiedConnection](#postunifiedconnection) - Create connection
* [putUnifiedConnectionId](#putunifiedconnectionid) - Update connection

## deleteUnifiedConnectionId

Remove connection

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteUnifiedConnectionIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.connection.deleteUnifiedConnectionId({
  id: "b75d2367-fe1a-40cc-8df7-9f0a396d90c3",
}).then((res: DeleteUnifiedConnectionIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.DeleteUnifiedConnectionIdRequest](../../models/operations/deleteunifiedconnectionidrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.DeleteUnifiedConnectionIdResponse](../../models/operations/deleteunifiedconnectionidresponse.md)>**


## getUnifiedConnection

List all connections

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetUnifiedConnectionCategories, GetUnifiedConnectionResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.connection.getUnifiedConnection({
  categories: [
    GetUnifiedConnectionCategories.Auth,
  ],
  env: "labore",
  externalXref: "expedita",
  limit: 4467.37,
  offset: 7898.7,
  order: "sunt",
  sort: "enim",
  updatedGte: new Date("2020-01-24T16:46:41.592Z"),
}).then((res: GetUnifiedConnectionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetUnifiedConnectionRequest](../../models/operations/getunifiedconnectionrequest.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetUnifiedConnectionResponse](../../models/operations/getunifiedconnectionresponse.md)>**


## getUnifiedConnectionId

Retrieve connection

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetUnifiedConnectionIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.connection.getUnifiedConnectionId({
  id: "bace188b-1c4e-4e2c-8c6c-e611feeb1c7c",
}).then((res: GetUnifiedConnectionIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetUnifiedConnectionIdRequest](../../models/operations/getunifiedconnectionidrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetUnifiedConnectionIdResponse](../../models/operations/getunifiedconnectionidresponse.md)>**


## patchUnifiedConnectionId

Update connection

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PatchUnifiedConnectionIdResponse } from "Unified-to/dist/sdk/models/operations";
import { PropertyConnectionCategories, PropertyConnectionPermissions } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.connection.patchUnifiedConnectionId({
  connection: {
    auth: {
      accessToken: "distinctio",
      apiUrl: "possimus",
      appId: "cum",
      authorizeUrl: "suscipit",
      clientId: "saepe",
      clientSecret: "earum",
      consumerKey: "quod",
      consumerSecret: "nihil",
      emails: [
        "quaerat",
      ],
      expiresIn: 2159.59,
      expiryDate: new Date("2022-06-27T03:53:09.176Z"),
      key: "rerum",
      meta: {},
      name: "Harry Hammes IV",
      otherAuthInfo: [
        "esse",
      ],
      pem: "magnam",
      refreshToken: "odio",
      state: "nulla",
      token: "impedit",
      tokenUrl: "cupiditate",
    },
    authAwsArn: "illo",
    categories: [
      PropertyConnectionCategories.Auth,
    ],
    createdAt: new Date("2021-04-21T08:26:42.931Z"),
    environment: "fugit",
    externalXref: "maxime",
    id: "af5dd672-3dc0-4f5a-a2f3-a6b700878756",
    integrationType: "ab",
    isPaused: false,
    permissions: [
      PropertyConnectionPermissions.CrmUserWrite,
    ],
    updatedAt: new Date("2022-01-16T17:11:29.866Z"),
    workspaceId: "corporis",
  },
  id: "a6c98b55-5540-480d-80bc-acc6cbd6b5f3",
}).then((res: PatchUnifiedConnectionIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                | [operations.PatchUnifiedConnectionIdRequest](../../models/operations/patchunifiedconnectionidrequest.md) | :heavy_check_mark:                                                                                       | The request object to use for the request.                                                               |
| `config`                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                             | :heavy_minus_sign:                                                                                       | Available config options for making requests.                                                            |


### Response

**Promise<[operations.PatchUnifiedConnectionIdResponse](../../models/operations/patchunifiedconnectionidresponse.md)>**


## postUnifiedConnection

Create connection

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PostUnifiedConnectionResponse } from "Unified-to/dist/sdk/models/operations";
import { PropertyConnectionCategories, PropertyConnectionPermissions } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.connection.postUnifiedConnection({
  auth: {
    accessToken: "necessitatibus",
    apiUrl: "maxime",
    appId: "cupiditate",
    authorizeUrl: "voluptatem",
    clientId: "provident",
    clientSecret: "adipisci",
    consumerKey: "accusantium",
    consumerSecret: "magnam",
    emails: [
      "repellat",
    ],
    expiresIn: 6076.31,
    expiryDate: new Date("2022-07-29T13:50:17.340Z"),
    key: "cum",
    meta: {},
    name: "Rufus Conroy",
    otherAuthInfo: [
      "sequi",
    ],
    pem: "voluptatum",
    refreshToken: "quasi",
    state: "error",
    token: "nobis",
    tokenUrl: "tempora",
  },
  authAwsArn: "voluptate",
  categories: [
    PropertyConnectionCategories.Ats,
  ],
  createdAt: new Date("2022-11-28T03:21:08.707Z"),
  environment: "voluptates",
  externalXref: "possimus",
  id: "20e56248-fff6-439a-910a-bdcab6267669",
  integrationType: "laboriosam",
  isPaused: false,
  permissions: [
    PropertyConnectionPermissions.AtsCandidateWrite,
  ],
  updatedAt: new Date("2022-01-26T21:22:49.757Z"),
  workspaceId: "quisquam",
}).then((res: PostUnifiedConnectionResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.Connection](../../models/shared/connection.md)       | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PostUnifiedConnectionResponse](../../models/operations/postunifiedconnectionresponse.md)>**


## putUnifiedConnectionId

Update connection

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PutUnifiedConnectionIdResponse } from "Unified-to/dist/sdk/models/operations";
import { PropertyConnectionCategories, PropertyConnectionPermissions } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.connection.putUnifiedConnectionId({
  connection: {
    auth: {
      accessToken: "eaque",
      apiUrl: "alias",
      appId: "qui",
      authorizeUrl: "consequuntur",
      clientId: "vitae",
      clientSecret: "quidem",
      consumerKey: "sequi",
      consumerSecret: "amet",
      emails: [
        "exercitationem",
      ],
      expiresIn: 8470.18,
      expiryDate: new Date("2021-10-18T19:31:06.005Z"),
      key: "similique",
      meta: {},
      name: "Garry Fahey",
      otherAuthInfo: [
        "asperiores",
      ],
      pem: "temporibus",
      refreshToken: "id",
      state: "atque",
      token: "quibusdam",
      tokenUrl: "sit",
    },
    authAwsArn: "quo",
    categories: [
      PropertyConnectionCategories.Ats,
    ],
    createdAt: new Date("2022-05-30T05:35:32.331Z"),
    environment: "vero",
    externalXref: "earum",
    id: "03004978-a61f-4a1c-b206-88f77c1ffc71",
    integrationType: "facere",
    isPaused: false,
    permissions: [
      PropertyConnectionPermissions.HrisGroupRead,
    ],
    updatedAt: new Date("2022-11-13T09:13:55.156Z"),
    workspaceId: "ex",
  },
  id: "3f2a3c80-a97f-4f33-8cdd-f857a9e61876",
}).then((res: PutUnifiedConnectionIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.PutUnifiedConnectionIdRequest](../../models/operations/putunifiedconnectionidrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.PutUnifiedConnectionIdResponse](../../models/operations/putunifiedconnectionidresponse.md)>**

