# Unified
(*unified*)

### Available Operations

* [deleteUnifiedConnectionId](#deleteunifiedconnectionid) - Remove connection
* [deleteUnifiedUser](#deleteunifieduser) - Delete your user object
* [deleteUnifiedWebhookId](#deleteunifiedwebhookid) - Remove webhook subscription
* [getUnifiedApicall](#getunifiedapicall) - Returns API Calls
* [getUnifiedApicallId](#getunifiedapicallid) - Retrieve specific API Call by its ID
* [getUnifiedConnection](#getunifiedconnection) - List all connections
* [getUnifiedConnectionId](#getunifiedconnectionid) - Retrieve connection
* [getUnifiedIntegration](#getunifiedintegration) - Returns all integrations
* [getUnifiedIntegrationAuthWorkspaceIdIntegrationType](#getunifiedintegrationauthworkspaceidintegrationtype) - Create connection indirectly
* [getUnifiedIntegrationIntegrationType](#getunifiedintegrationintegrationtype) - Retrieve an integration
* [getUnifiedIntegrationWorkspaceWorkspaceId](#getunifiedintegrationworkspaceworkspaceid) - Returns all activated integrations in a workspace
* [getUnifiedUser](#getunifieduser) - Retrieve your user object
* [getUnifiedUserToken](#getunifiedusertoken) - Retrieve your user token
* [getUnifiedWebhook](#getunifiedwebhook) - Returns all registered webhooks
* [getUnifiedWebhookId](#getunifiedwebhookid) - Retrieve webhook by its ID
* [patchUnifiedConnectionId](#patchunifiedconnectionid) - Update connection
* [patchUnifiedUser](#patchunifieduser) - Updates your user object
* [postUnifiedConnection](#postunifiedconnection) - Create connection
* [postUnifiedWebhookConnectionIdObject](#postunifiedwebhookconnectionidobject) - Create webhook subscription
* [putUnifiedConnectionId](#putunifiedconnectionid) - Update connection
* [putUnifiedUser](#putunifieduser) - Updates your user object

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

sdk.unified.deleteUnifiedConnectionId({
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


## deleteUnifiedUser

Delete your user object

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteUnifiedUserResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.unified.deleteUnifiedUser().then((res: DeleteUnifiedUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteUnifiedUserResponse](../../models/operations/deleteunifieduserresponse.md)>**


## deleteUnifiedWebhookId

Remove webhook subscription

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { DeleteUnifiedWebhookIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.unified.deleteUnifiedWebhookId({
  id: "<ID>",
}).then((res: DeleteUnifiedWebhookIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.DeleteUnifiedWebhookIdRequest](../../models/operations/deleteunifiedwebhookidrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.DeleteUnifiedWebhookIdResponse](../../models/operations/deleteunifiedwebhookidresponse.md)>**


## getUnifiedApicall

Returns API Calls

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetUnifiedApicallResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.unified.getUnifiedApicall({
  connectionId: "delectus green Hybrid",
  createdLte: new Date("2021-04-02T21:36:49.952Z"),
  env: "Fantastic Iodine indexing",
  error: false,
  externalXref: "Music",
  integrationType: "Soft",
  limit: 2390.64,
  offset: 3757.34,
  order: "mobile envisioneer",
  sort: "North payment opposite",
  updatedGte: new Date("2021-08-11T16:18:13.644Z"),
}).then((res: GetUnifiedApicallResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetUnifiedApicallRequest](../../models/operations/getunifiedapicallrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetUnifiedApicallResponse](../../models/operations/getunifiedapicallresponse.md)>**


## getUnifiedApicallId

Retrieve specific API Call by its ID

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetUnifiedApicallIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.unified.getUnifiedApicallId({
  id: "<ID>",
}).then((res: GetUnifiedApicallIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetUnifiedApicallIdRequest](../../models/operations/getunifiedapicallidrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetUnifiedApicallIdResponse](../../models/operations/getunifiedapicallidresponse.md)>**


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

sdk.unified.getUnifiedConnection({
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

sdk.unified.getUnifiedConnectionId({
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


## getUnifiedIntegration

Returns all integrations

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetUnifiedIntegrationCategories, GetUnifiedIntegrationResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.unified.getUnifiedIntegration({
  active: false,
  categories: [
    GetUnifiedIntegrationCategories.Enrich,
  ],
  limit: 7363.95,
  offset: 8214.4,
  order: "Nelda Implemented",
  sort: "cabinet",
  summary: false,
  updatedGte: new Date("2022-02-05T00:16:37.455Z"),
}).then((res: GetUnifiedIntegrationResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                          | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `request`                                                                                          | [operations.GetUnifiedIntegrationRequest](../../models/operations/getunifiedintegrationrequest.md) | :heavy_check_mark:                                                                                 | The request object to use for the request.                                                         |
| `config`                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                       | :heavy_minus_sign:                                                                                 | Available config options for making requests.                                                      |


### Response

**Promise<[operations.GetUnifiedIntegrationResponse](../../models/operations/getunifiedintegrationresponse.md)>**


## getUnifiedIntegrationAuthWorkspaceIdIntegrationType

Returns an authorization URL for the specified integration.  Once a successful authorization occurs, a new connection is created.

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import {
  GetUnifiedIntegrationAuthWorkspaceIdIntegrationTypeResponse,
  GetUnifiedIntegrationAuthWorkspaceIdIntegrationTypeScopes,
} from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.unified.getUnifiedIntegrationAuthWorkspaceIdIntegrationType({
  env: "Algerian",
  externalXref: "Cambridgeshire Surinam",
  failureRedirect: "Designer Drive",
  integrationType: "program Home",
  lang: "Plastic program",
  redirect: false,
  scopes: [
    GetUnifiedIntegrationAuthWorkspaceIdIntegrationTypeScopes.CrmFileRead,
  ],
  state: "Functionality Product",
  subdomain: "payment Developer Dynamic",
  successRedirect: "Northeast",
  workspaceId: "duh empower Kwanza",
}).then((res: GetUnifiedIntegrationAuthWorkspaceIdIntegrationTypeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                      | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                      | [operations.GetUnifiedIntegrationAuthWorkspaceIdIntegrationTypeRequest](../../models/operations/getunifiedintegrationauthworkspaceidintegrationtyperequest.md) | :heavy_check_mark:                                                                                                                                             | The request object to use for the request.                                                                                                                     |
| `config`                                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                   | :heavy_minus_sign:                                                                                                                                             | Available config options for making requests.                                                                                                                  |


### Response

**Promise<[operations.GetUnifiedIntegrationAuthWorkspaceIdIntegrationTypeResponse](../../models/operations/getunifiedintegrationauthworkspaceidintegrationtyperesponse.md)>**


## getUnifiedIntegrationIntegrationType

Retrieve an integration

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetUnifiedIntegrationIntegrationTypeResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.unified.getUnifiedIntegrationIntegrationType({
  integrationType: "Pizza Electric",
}).then((res: GetUnifiedIntegrationIntegrationTypeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.GetUnifiedIntegrationIntegrationTypeRequest](../../models/operations/getunifiedintegrationintegrationtyperequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.GetUnifiedIntegrationIntegrationTypeResponse](../../models/operations/getunifiedintegrationintegrationtyperesponse.md)>**


## getUnifiedIntegrationWorkspaceWorkspaceId

No authentication required as this is to be used by front-end interface

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import {
  GetUnifiedIntegrationWorkspaceWorkspaceIdCategories,
  GetUnifiedIntegrationWorkspaceWorkspaceIdResponse,
} from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.unified.getUnifiedIntegrationWorkspaceWorkspaceId({
  active: false,
  categories: [
    GetUnifiedIntegrationWorkspaceWorkspaceIdCategories.Hris,
  ],
  env: "North Southeast exercitationem",
  summary: false,
  workspaceId: "Bronze Plastic",
}).then((res: GetUnifiedIntegrationWorkspaceWorkspaceIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.GetUnifiedIntegrationWorkspaceWorkspaceIdRequest](../../models/operations/getunifiedintegrationworkspaceworkspaceidrequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.GetUnifiedIntegrationWorkspaceWorkspaceIdResponse](../../models/operations/getunifiedintegrationworkspaceworkspaceidresponse.md)>**


## getUnifiedUser

Retrieve your user object

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetUnifiedUserResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.unified.getUnifiedUser().then((res: GetUnifiedUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetUnifiedUserResponse](../../models/operations/getunifieduserresponse.md)>**


## getUnifiedUserToken

Retrieve your user token

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetUnifiedUserTokenResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.unified.getUnifiedUserToken().then((res: GetUnifiedUserTokenResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetUnifiedUserTokenResponse](../../models/operations/getunifiedusertokenresponse.md)>**


## getUnifiedWebhook

Returns all registered webhooks

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetUnifiedWebhookResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.unified.getUnifiedWebhook({
  env: "Investor methodical Fitness",
  limit: 8087.22,
  object: "Franc past salmon",
  offset: 5240.75,
  order: "program",
  sort: "below JSON",
  updatedGte: new Date("2022-05-29T13:22:55.562Z"),
}).then((res: GetUnifiedWebhookResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [operations.GetUnifiedWebhookRequest](../../models/operations/getunifiedwebhookrequest.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.GetUnifiedWebhookResponse](../../models/operations/getunifiedwebhookresponse.md)>**


## getUnifiedWebhookId

Retrieve webhook by its ID

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetUnifiedWebhookIdResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.unified.getUnifiedWebhookId({
  id: "<ID>",
}).then((res: GetUnifiedWebhookIdResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [operations.GetUnifiedWebhookIdRequest](../../models/operations/getunifiedwebhookidrequest.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetUnifiedWebhookIdResponse](../../models/operations/getunifiedwebhookidresponse.md)>**


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

sdk.unified.patchUnifiedConnectionId({
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


## patchUnifiedUser

Only the name field is updated.

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PatchUnifiedUserResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.unified.patchUnifiedUser({
  createdAt: new Date("2022-04-24T15:25:24.483Z"),
  email: "Emmalee.Quitzon@yahoo.com",
  environment: "Bicycle",
  id: "<ID>",
  meta: {},
  name: "vice compressing",
  updatedAt: new Date("2023-05-05T16:52:20.023Z"),
  workspaceId: "Hybrid methodologies",
  workspaceIds: [
    "Potassium",
  ],
}).then((res: PatchUnifiedUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.User](../../models/shared/user.md)                   | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PatchUnifiedUserResponse](../../models/operations/patchunifieduserresponse.md)>**


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

sdk.unified.postUnifiedConnection({
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


## postUnifiedWebhookConnectionIdObject

To maintain compatibility with the webhooks specification and Zapier webhooks, only the hook_url field is required in the payload when creating a Webhook.  When updated/new objects are found, the array of objects will be POSTed to the hook_url with the paramater hookId=<hookId>.

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import {
  PostUnifiedWebhookConnectionIdObjectEvents,
  PostUnifiedWebhookConnectionIdObjectResponse,
} from "Unified-to/dist/sdk/models/operations";
import { PropertyWebhookEvents, WebhookObjectType } from "Unified-to/dist/sdk/models/shared";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.unified.postUnifiedWebhookConnectionIdObject({
  webhook: {
    checkedAt: new Date("2021-02-25T07:12:08.980Z"),
    connectionId: "deposit 1080p Passenger",
    createdAt: new Date("2023-02-21T14:58:56.193Z"),
    environment: "Minnesota Soap",
    events: [
      PropertyWebhookEvents.Updated,
    ],
    hookUrl: "Table female ken",
    id: "<ID>",
    includeRaw: false,
    integrationType: "chocolate",
    interval: 1710.16,
    objectType: WebhookObjectType.EnrichCompany,
    subscriptions: [
      "female",
    ],
    updatedAt: new Date("2022-08-02T17:13:06.397Z"),
    workspaceId: "hertz",
  },
  connectionId: "Borders",
  events: [
    PostUnifiedWebhookConnectionIdObjectEvents.Created,
  ],
  object: "scalable",
}).then((res: PostUnifiedWebhookConnectionIdObjectResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.PostUnifiedWebhookConnectionIdObjectRequest](../../models/operations/postunifiedwebhookconnectionidobjectrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.PostUnifiedWebhookConnectionIdObjectResponse](../../models/operations/postunifiedwebhookconnectionidobjectresponse.md)>**


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

sdk.unified.putUnifiedConnectionId({
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


## putUnifiedUser

Only the name field is updated.

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { PutUnifiedUserResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.unified.putUnifiedUser({
  createdAt: new Date("2023-07-31T04:46:29.769Z"),
  email: "Selena59@yahoo.com",
  environment: "Bedfordshire Lucia",
  id: "<ID>",
  meta: {},
  name: "Bicycle hacking South",
  updatedAt: new Date("2023-03-15T15:08:26.238Z"),
  workspaceId: "Card defect",
  workspaceIds: [
    "repudiandae",
  ],
}).then((res: PutUnifiedUserResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.User](../../models/shared/user.md)                   | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.PutUnifiedUserResponse](../../models/operations/putunifieduserresponse.md)>**

