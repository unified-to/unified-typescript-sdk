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
  id: "d2a7c7d1-ea0e-479f-a9bb-e5f179f650b1",
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
  id: "e707e7e4-3967-413b-acce-072abd61918d",
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
  connectionId: "magni",
  createdLte: new Date("2022-05-24T09:06:17.139Z"),
  env: "maxime",
  error: false,
  externalXref: "vitae",
  integrationType: "alias",
  limit: 8070.07,
  offset: 1150.28,
  order: "blanditiis",
  sort: "ipsam",
  updatedGte: new Date("2022-08-08T20:31:22.144Z"),
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
  id: "fd78be26-2127-4262-8fa5-03962867e72b",
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
    GetUnifiedConnectionCategories.Hris,
  ],
  env: "laborum",
  externalXref: "autem",
  limit: 3273.73,
  offset: 603.93,
  order: "qui",
  sort: "labore",
  updatedGte: new Date("2022-11-05T10:44:25.961Z"),
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
  id: "57f9bb6e-f72a-4508-b1d9-9b661a7def16",
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
    GetUnifiedIntegrationCategories.Crm,
  ],
  limit: 7216.29,
  offset: 4263.23,
  order: "impedit",
  sort: "optio",
  summary: false,
  updatedGte: new Date("2022-09-12T15:50:36.450Z"),
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
  env: "deleniti",
  externalXref: "dolores",
  failureRedirect: "dolores",
  integrationType: "distinctio",
  lang: "modi",
  redirect: false,
  scopes: [
    GetUnifiedIntegrationAuthWorkspaceIdIntegrationTypeScopes.TicketingTicketRead,
  ],
  state: "perspiciatis",
  subdomain: "totam",
  successRedirect: "ipsam",
  workspaceId: "alias",
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
  integrationType: "repudiandae",
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
    GetUnifiedIntegrationWorkspaceWorkspaceIdCategories.Ticketing,
  ],
  env: "magni",
  summary: false,
  workspaceId: "doloribus",
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
  env: "dolore",
  limit: 6674.44,
  object: "veritatis",
  offset: 9332.28,
  order: "excepturi",
  sort: "eligendi",
  updatedGte: new Date("2022-04-26T06:44:29.423Z"),
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
  id: "e55140e7-5726-4e00-bc2f-0294192518ce",
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
      accessToken: "accusamus",
      apiUrl: "incidunt",
      appId: "dicta",
      authorizeUrl: "quo",
      clientId: "natus",
      clientSecret: "excepturi",
      consumerKey: "natus",
      consumerSecret: "hic",
      emails: [
        "ut",
      ],
      expiresIn: 3924.24,
      expiryDate: new Date("2021-01-28T23:49:19.065Z"),
      key: "eum",
      meta: {},
      name: "Albert Schmidt MD",
      otherAuthInfo: [
        "adipisci",
      ],
      pem: "a",
      refreshToken: "ipsa",
      state: "sed",
      token: "sequi",
      tokenUrl: "minus",
    },
    authAwsArn: "suscipit",
    categories: [
      PropertyConnectionCategories.Auth,
    ],
    createdAt: new Date("2021-02-21T07:53:55.382Z"),
    environment: "laboriosam",
    externalXref: "harum",
    id: "626012eb-a057-4988-8672-0c3103f1a40c",
    integrationType: "doloremque",
    isPaused: false,
    permissions: [
      PropertyConnectionPermissions.AtsJobRead,
    ],
    updatedAt: new Date("2022-02-08T06:53:00.234Z"),
    workspaceId: "quo",
  },
  id: "8688fd8e-c6fc-4031-a8f0-aaaeee004eba",
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
  createdAt: new Date("2022-04-05T01:32:39.778Z"),
  email: "Kavon12@hotmail.com",
  environment: "harum",
  id: "e509c508-7131-4f06-b0bc-e55a8687143c",
  meta: {},
  name: "Mrs. Darryl Morar",
  updatedAt: new Date("2021-07-05T20:55:18.206Z"),
  workspaceId: "sint",
  workspaceIds: [
    "odio",
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
    accessToken: "animi",
    apiUrl: "exercitationem",
    appId: "repellendus",
    authorizeUrl: "culpa",
    clientId: "vel",
    clientSecret: "ex",
    consumerKey: "non",
    consumerSecret: "nobis",
    emails: [
      "in",
    ],
    expiresIn: 8765.83,
    expiryDate: new Date("2022-07-06T05:57:07.995Z"),
    key: "voluptatum",
    meta: {},
    name: "Neil Grimes",
    otherAuthInfo: [
      "culpa",
    ],
    pem: "culpa",
    refreshToken: "odit",
    state: "laudantium",
    token: "dolor",
    tokenUrl: "consequuntur",
  },
  authAwsArn: "libero",
  categories: [
    PropertyConnectionCategories.Martech,
  ],
  createdAt: new Date("2022-09-06T07:44:31.963Z"),
  environment: "totam",
  externalXref: "laboriosam",
  id: "2d2a31f9-b14a-4a6b-9ec7-f444232e9a5d",
  integrationType: "eveniet",
  isPaused: false,
  permissions: [
    PropertyConnectionPermissions.AtsInterviewRead,
  ],
  updatedAt: new Date("2022-05-01T01:22:05.452Z"),
  workspaceId: "cumque",
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
    checkedAt: new Date("2021-07-13T18:24:14.540Z"),
    connectionId: "sed",
    createdAt: new Date("2021-12-08T04:18:23.721Z"),
    environment: "cupiditate",
    events: [
      PropertyWebhookEvents.Created,
    ],
    hookUrl: "voluptatum",
    id: "1b58fe68-2e1c-42db-a23d-58e8247d122c",
    includeRaw: false,
    integrationType: "provident",
    interval: 9868.06,
    objectType: WebhookObjectType.CrmLead,
    subscriptions: [
      "iusto",
    ],
    updatedAt: new Date("2022-07-12T13:27:28.756Z"),
    workspaceId: "praesentium",
  },
  connectionId: "maiores",
  events: [
    PostUnifiedWebhookConnectionIdObjectEvents.Created,
  ],
  object: "dolores",
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
      accessToken: "ducimus",
      apiUrl: "occaecati",
      appId: "nostrum",
      authorizeUrl: "atque",
      clientId: "sequi",
      clientSecret: "commodi",
      consumerKey: "quam",
      consumerSecret: "dolor",
      emails: [
        "voluptas",
      ],
      expiresIn: 2226.69,
      expiryDate: new Date("2020-12-30T11:42:07.241Z"),
      key: "aut",
      meta: {},
      name: "Velma Baumbach",
      otherAuthInfo: [
        "doloribus",
      ],
      pem: "deserunt",
      refreshToken: "officiis",
      state: "nam",
      token: "totam",
      tokenUrl: "ex",
    },
    authAwsArn: "labore",
    categories: [
      PropertyConnectionCategories.Crm,
    ],
    createdAt: new Date("2022-07-24T05:34:55.315Z"),
    environment: "adipisci",
    externalXref: "voluptatem",
    id: "d8f8b89d-9ca6-4075-a56f-c0ebe67155e2",
    integrationType: "assumenda",
    isPaused: false,
    permissions: [
      PropertyConnectionPermissions.AtsScorecardWrite,
    ],
    updatedAt: new Date("2022-04-26T12:57:03.822Z"),
    workspaceId: "ipsum",
  },
  id: "070d6e29-7f58-41fa-baaa-7d801088076f",
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
  createdAt: new Date("2021-12-05T11:57:07.239Z"),
  email: "Gillian.Walsh62@hotmail.com",
  environment: "laudantium",
  id: "14088269-b6a7-40b0-9d82-f94fffbd1e1e",
  meta: {},
  name: "Debra Stiedemann",
  updatedAt: new Date("2022-06-05T07:44:58.092Z"),
  workspaceId: "doloremque",
  workspaceIds: [
    "sequi",
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

