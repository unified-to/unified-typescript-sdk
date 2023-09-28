# Auth
(*auth*)

### Available Operations

* [getUnifiedIntegrationAuthWorkspaceIdIntegrationType](#getunifiedintegrationauthworkspaceidintegrationtype) - Create connection indirectly
* [getUnifiedIntegrationLoginWorkspaceIdIntegrationType](#getunifiedintegrationloginworkspaceidintegrationtype) - Sign in a user

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

sdk.auth.getUnifiedIntegrationAuthWorkspaceIdIntegrationType({
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


## getUnifiedIntegrationLoginWorkspaceIdIntegrationType

Returns an authentication URL for the specified integration.  Once a successful authentication occurs, the name and emails are returned.

### Example Usage

```typescript
import { UnifiedTo } from "Unified-to";
import { GetUnifiedIntegrationLoginWorkspaceIdIntegrationTypeResponse } from "Unified-to/dist/sdk/models/operations";

const sdk = new UnifiedTo({
  security: {
    jwt: "",
  },
});

sdk.auth.getUnifiedIntegrationLoginWorkspaceIdIntegrationType({
  env: "Rubber",
  failureRedirect: "gold Cambridgeshire",
  integrationType: "Plastic services pixel",
  redirect: false,
  state: "Volkswagen Southwest",
  successRedirect: "drive integrated Bicycle",
  workspaceId: "Fantastic recontextualize Frozen",
}).then((res: GetUnifiedIntegrationLoginWorkspaceIdIntegrationTypeResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                                                                                        | Type                                                                                                                                                             | Required                                                                                                                                                         | Description                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                        | [operations.GetUnifiedIntegrationLoginWorkspaceIdIntegrationTypeRequest](../../models/operations/getunifiedintegrationloginworkspaceidintegrationtyperequest.md) | :heavy_check_mark:                                                                                                                                               | The request object to use for the request.                                                                                                                       |
| `config`                                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                     | :heavy_minus_sign:                                                                                                                                               | Available config options for making requests.                                                                                                                    |


### Response

**Promise<[operations.GetUnifiedIntegrationLoginWorkspaceIdIntegrationTypeResponse](../../models/operations/getunifiedintegrationloginworkspaceidintegrationtyperesponse.md)>**

