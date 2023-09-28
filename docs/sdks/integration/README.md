# Integration
(*integration*)

### Available Operations

* [getUnifiedIntegration](#getunifiedintegration) - Returns all integrations
* [getUnifiedIntegrationAuthWorkspaceIdIntegrationType](#getunifiedintegrationauthworkspaceidintegrationtype) - Create connection indirectly
* [getUnifiedIntegrationIntegrationType](#getunifiedintegrationintegrationtype) - Retrieve an integration
* [getUnifiedIntegrationWorkspaceWorkspaceId](#getunifiedintegrationworkspaceworkspaceid) - Returns all activated integrations in a workspace

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

sdk.integration.getUnifiedIntegration({
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

sdk.integration.getUnifiedIntegrationAuthWorkspaceIdIntegrationType({
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

sdk.integration.getUnifiedIntegrationIntegrationType({
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

sdk.integration.getUnifiedIntegrationWorkspaceWorkspaceId({
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

