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
  id: "<ID>",
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
    GetUnifiedConnectionCategories.Ats,
  ],
  env: "copying invoice coulomb",
  externalXref: "Islands West",
  limit: 7809.21,
  offset: 2750.2,
  order: "Volkswagen architect",
  sort: "consequently synthesizing Technician",
  updatedGte: new Date("2021-11-09T20:41:53.442Z"),
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
  id: "<ID>",
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
      accessToken: "Northwest Cupertino",
      apiUrl: "Center Curium Electric",
      appId: "female fragrant",
      authorizeUrl: "Electric Bicycle payment",
      clientId: "transmitting North",
      clientSecret: "mole Gasoline morph",
      consumerKey: "Keyboard Antimony primary",
      consumerSecret: "yearly",
      emails: [
        "athwart",
      ],
      expiresIn: 3185.09,
      expiryDate: new Date("2022-08-12T13:21:47.977Z"),
      key: "<key>",
      meta: {},
      name: "inside Rupee",
      otherAuthInfo: [
        "Future",
      ],
      pem: "guard Internal",
      refreshToken: "Diesel",
      state: "copy Cotton Bicycle",
      token: "drive gold",
      tokenUrl: "now",
    },
    authAwsArn: "yum",
    categories: [
      PropertyConnectionCategories.Hris,
    ],
    createdAt: new Date("2021-06-18T22:02:30.822Z"),
    environment: "Northwest Balanced",
    externalXref: "boo",
    id: "<ID>",
    integrationType: "Soft",
    isPaused: false,
    permissions: [
      PropertyConnectionPermissions.CrmLeadRead,
    ],
    updatedAt: new Date("2022-07-27T15:43:44.767Z"),
    workspaceId: "extend",
  },
  id: "<ID>",
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
    accessToken: "asperiores indexing",
    apiUrl: "plus pace global",
    appId: "And port",
    authorizeUrl: "West whiteboard",
    clientId: "Folk",
    clientSecret: "Northwest Modern",
    consumerKey: "Southeast deposit",
    consumerSecret: "Falls irritating up",
    emails: [
      "intuitive",
    ],
    expiresIn: 4121.5,
    expiryDate: new Date("2021-01-21T03:25:42.786Z"),
    key: "<key>",
    meta: {},
    name: "membership Classical schnitzel",
    otherAuthInfo: [
      "Convertible",
    ],
    pem: "magenta Riel bolívar",
    refreshToken: "Pula",
    state: "white",
    token: "Northwest",
    tokenUrl: "unbutton",
  },
  authAwsArn: "Investor circuit",
  categories: [
    PropertyConnectionCategories.Ats,
  ],
  createdAt: new Date("2023-01-25T14:37:40.202Z"),
  environment: "Hat watt",
  externalXref: "Sausages tan",
  id: "<ID>",
  integrationType: "Principal Extended velit",
  isPaused: false,
  permissions: [
    PropertyConnectionPermissions.CrmFileWrite,
  ],
  updatedAt: new Date("2021-09-22T05:13:05.778Z"),
  workspaceId: "Auto",
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
      accessToken: "female Buckinghamshire",
      apiUrl: "Web",
      appId: "pumpkin Account",
      authorizeUrl: "dolorem Hybrid white",
      clientId: "ohm",
      clientSecret: "Pennsylvania Executive",
      consumerKey: "silver Account Accountability",
      consumerSecret: "Mouse",
      emails: [
        "oh",
      ],
      expiresIn: 8946.31,
      expiryDate: new Date("2022-01-29T12:35:08.478Z"),
      key: "<key>",
      meta: {},
      name: "incidentally shrimp bypass",
      otherAuthInfo: [
        "invoice",
      ],
      pem: "recent midst Northeast",
      refreshToken: "Product",
      state: "circuit precious",
      token: "gee collaborative withdrawal",
      tokenUrl: "Platinum",
    },
    authAwsArn: "suddenly Fiat",
    categories: [
      PropertyConnectionCategories.Uc,
    ],
    createdAt: new Date("2022-09-20T19:51:21.025Z"),
    environment: "redundant Southeast Camren",
    externalXref: "firewall",
    id: "<ID>",
    integrationType: "Beauty",
    isPaused: false,
    permissions: [
      PropertyConnectionPermissions.Webhook,
    ],
    updatedAt: new Date("2023-12-30T14:20:47.994Z"),
    workspaceId: "parse Peso Investment",
  },
  id: "<ID>",
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

