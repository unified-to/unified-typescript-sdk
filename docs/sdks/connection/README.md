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
import { UnifiedTo } from "unified-to";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.connection.deleteUnifiedConnectionId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { UnifiedTo } from "unified-to";
import { GetUnifiedConnectionCategories } from "unified-to/dist/sdk/models/operations";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.connection.getUnifiedConnection({
    categories: [
      GetUnifiedConnectionCategories.Ats,
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { UnifiedTo } from "unified-to";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.connection.getUnifiedConnectionId({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { UnifiedTo } from "unified-to";
import { PropertyConnectionCategories, PropertyConnectionPermissions } from "unified-to/dist/sdk/models/shared";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.connection.patchUnifiedConnectionId({
    connection: {
      auth: {
        emails: [
          "Executive",
        ],
        meta: {},
        otherAuthInfo: [
          "Cupertino",
        ],
      },
      categories: [
        PropertyConnectionCategories.Martech,
      ],
      integrationType: "India",
      permissions: [
        PropertyConnectionPermissions.AtsApplicationWrite,
      ],
    },
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { UnifiedTo } from "unified-to";
import { PropertyConnectionCategories, PropertyConnectionPermissions } from "unified-to/dist/sdk/models/shared";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.connection.postUnifiedConnection({
    auth: {
      emails: [
        "RSS",
      ],
      meta: {},
      otherAuthInfo: [
        "locate",
      ],
    },
    categories: [
      PropertyConnectionCategories.Crm,
    ],
    integrationType: "plus pace global",
    permissions: [
      PropertyConnectionPermissions.TicketingAgentWrite,
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { UnifiedTo } from "unified-to";
import { PropertyConnectionCategories, PropertyConnectionPermissions } from "unified-to/dist/sdk/models/shared";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.connection.putUnifiedConnectionId({
    connection: {
      auth: {
        emails: [
          "Assurance",
        ],
        meta: {},
        otherAuthInfo: [
          "Avon",
        ],
      },
      categories: [
        PropertyConnectionCategories.Martech,
      ],
      integrationType: "Web",
      permissions: [
        PropertyConnectionPermissions.CrmFileRead,
      ],
    },
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.PutUnifiedConnectionIdRequest](../../models/operations/putunifiedconnectionidrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.PutUnifiedConnectionIdResponse](../../models/operations/putunifiedconnectionidresponse.md)>**

