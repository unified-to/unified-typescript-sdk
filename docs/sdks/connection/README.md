# Connection
(*connection*)

### Available Operations

* [createUnifiedConnection](#createunifiedconnection) - Create connection
* [getUnifiedConnection](#getunifiedconnection) - Retrieve connection
* [listUnifiedConnections](#listunifiedconnections) - List all connections
* [patchUnifiedConnection](#patchunifiedconnection) - Update connection
* [removeUnifiedConnection](#removeunifiedconnection) - Remove connection
* [updateUnifiedConnection](#updateunifiedconnection) - Update connection

## createUnifiedConnection

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

  const res = await sdk.connection.createUnifiedConnection({
    auth: {
      emails: [
        "string",
      ],
      meta: {},
      otherAuthInfo: [
        "string",
      ],
    },
    categories: [
      PropertyConnectionCategories.Uc,
    ],
    integrationType: "string",
    permissions: [
      PropertyConnectionPermissions.CrmDealWrite,
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

**Promise<[operations.CreateUnifiedConnectionResponse](../../models/operations/createunifiedconnectionresponse.md)>**


## getUnifiedConnection

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

  const res = await sdk.connection.getUnifiedConnection({
    id: "<ID>",
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


## listUnifiedConnections

List all connections

### Example Usage

```typescript
import { UnifiedTo } from "unified-to";
import { ListUnifiedConnectionsCategories } from "unified-to/dist/sdk/models/operations";

(async() => {
  const sdk = new UnifiedTo({
    security: {
      jwt: "",
    },
  });

  const res = await sdk.connection.listUnifiedConnections({
    categories: [
      ListUnifiedConnectionsCategories.Crm,
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.ListUnifiedConnectionsRequest](../../models/operations/listunifiedconnectionsrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.ListUnifiedConnectionsResponse](../../models/operations/listunifiedconnectionsresponse.md)>**


## patchUnifiedConnection

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

  const res = await sdk.connection.patchUnifiedConnection({
    connection: {
      auth: {
        emails: [
          "string",
        ],
        meta: {},
        otherAuthInfo: [
          "string",
        ],
      },
      categories: [
        PropertyConnectionCategories.Enrich,
      ],
      integrationType: "string",
      permissions: [
        PropertyConnectionPermissions.MartechMemberWrite,
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
| `request`                                                                                            | [operations.PatchUnifiedConnectionRequest](../../models/operations/patchunifiedconnectionrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.PatchUnifiedConnectionResponse](../../models/operations/patchunifiedconnectionresponse.md)>**


## removeUnifiedConnection

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

  const res = await sdk.connection.removeUnifiedConnection({
    id: "<ID>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.RemoveUnifiedConnectionRequest](../../models/operations/removeunifiedconnectionrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.RemoveUnifiedConnectionResponse](../../models/operations/removeunifiedconnectionresponse.md)>**


## updateUnifiedConnection

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

  const res = await sdk.connection.updateUnifiedConnection({
    connection: {
      auth: {
        emails: [
          "string",
        ],
        meta: {},
        otherAuthInfo: [
          "string",
        ],
      },
      categories: [
        PropertyConnectionCategories.Ticketing,
      ],
      integrationType: "string",
      permissions: [
        PropertyConnectionPermissions.CrmLeadRead,
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

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.UpdateUnifiedConnectionRequest](../../models/operations/updateunifiedconnectionrequest.md) | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.UpdateUnifiedConnectionResponse](../../models/operations/updateunifiedconnectionresponse.md)>**

