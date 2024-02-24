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
import { UnifiedTo } from "unified-typescript-sdk";
import { CreateUnifiedConnectionSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { PropertyConnectionCategories, PropertyConnectionPermissions } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: CreateUnifiedConnectionSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.connection.createUnifiedConnection({
    auth: {
      emails: [
        "<value>",
      ],
      meta: {
        "key": "<value>",
      },
      otherAuthInfo: [
        "<value>",
      ],
    },
    categories: [
      PropertyConnectionCategories.Commerce,
    ],
    cursorsCache: [
      {
        "key": "<value>",
      },
    ],
    integrationType: "<value>",
    permissions: [
      PropertyConnectionPermissions.AtsCandidateRead,
    ],
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [shared.Connection](../../sdk/models/shared/connection.md)                                                   | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `security`                                                                                                   | [operations.CreateUnifiedConnectionSecurity](../../sdk/models/operations/createunifiedconnectionsecurity.md) | :heavy_check_mark:                                                                                           | The security requirements to use for the request.                                                            |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.CreateUnifiedConnectionResponse](../../sdk/models/operations/createunifiedconnectionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getUnifiedConnection

Retrieve connection

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { GetUnifiedConnectionSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetUnifiedConnectionSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.connection.getUnifiedConnection({
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                              | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `request`                                                                                              | [operations.GetUnifiedConnectionRequest](../../sdk/models/operations/getunifiedconnectionrequest.md)   | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `security`                                                                                             | [operations.GetUnifiedConnectionSecurity](../../sdk/models/operations/getunifiedconnectionsecurity.md) | :heavy_check_mark:                                                                                     | The security requirements to use for the request.                                                      |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.GetUnifiedConnectionResponse](../../sdk/models/operations/getunifiedconnectionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listUnifiedConnections

List all connections

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { Categories, ListUnifiedConnectionsSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListUnifiedConnectionsSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.connection.listUnifiedConnections({
    categories: [
      Categories.Martech,
    ],
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.ListUnifiedConnectionsRequest](../../sdk/models/operations/listunifiedconnectionsrequest.md)   | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `security`                                                                                                 | [operations.ListUnifiedConnectionsSecurity](../../sdk/models/operations/listunifiedconnectionssecurity.md) | :heavy_check_mark:                                                                                         | The security requirements to use for the request.                                                          |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.ListUnifiedConnectionsResponse](../../sdk/models/operations/listunifiedconnectionsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchUnifiedConnection

Update connection

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { PatchUnifiedConnectionSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { PropertyConnectionCategories, PropertyConnectionPermissions } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: PatchUnifiedConnectionSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.connection.patchUnifiedConnection({
    connection: {
      auth: {
        emails: [
          "<value>",
        ],
        meta: {
          "key": "<value>",
        },
        otherAuthInfo: [
          "<value>",
        ],
      },
      categories: [
        PropertyConnectionCategories.Ticketing,
      ],
      cursorsCache: [
        {
          "key": "<value>",
        },
      ],
      integrationType: "<value>",
      permissions: [
        PropertyConnectionPermissions.CrmLeadWrite,
      ],
    },
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.PatchUnifiedConnectionRequest](../../sdk/models/operations/patchunifiedconnectionrequest.md)   | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `security`                                                                                                 | [operations.PatchUnifiedConnectionSecurity](../../sdk/models/operations/patchunifiedconnectionsecurity.md) | :heavy_check_mark:                                                                                         | The security requirements to use for the request.                                                          |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.PatchUnifiedConnectionResponse](../../sdk/models/operations/patchunifiedconnectionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## removeUnifiedConnection

Remove connection

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { RemoveUnifiedConnectionSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: RemoveUnifiedConnectionSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.connection.removeUnifiedConnection({
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.RemoveUnifiedConnectionRequest](../../sdk/models/operations/removeunifiedconnectionrequest.md)   | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `security`                                                                                                   | [operations.RemoveUnifiedConnectionSecurity](../../sdk/models/operations/removeunifiedconnectionsecurity.md) | :heavy_check_mark:                                                                                           | The security requirements to use for the request.                                                            |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.RemoveUnifiedConnectionResponse](../../sdk/models/operations/removeunifiedconnectionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateUnifiedConnection

Update connection

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { UpdateUnifiedConnectionSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { PropertyConnectionCategories, PropertyConnectionPermissions } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: UpdateUnifiedConnectionSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.connection.updateUnifiedConnection({
    connection: {
      auth: {
        emails: [
          "<value>",
        ],
        meta: {
          "key": "<value>",
        },
        otherAuthInfo: [
          "<value>",
        ],
      },
      categories: [
        PropertyConnectionCategories.Accounting,
      ],
      cursorsCache: [
        {
          "key": "<value>",
        },
      ],
      integrationType: "<value>",
      permissions: [
        PropertyConnectionPermissions.AtsCompanyRead,
      ],
    },
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.UpdateUnifiedConnectionRequest](../../sdk/models/operations/updateunifiedconnectionrequest.md)   | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `security`                                                                                                   | [operations.UpdateUnifiedConnectionSecurity](../../sdk/models/operations/updateunifiedconnectionsecurity.md) | :heavy_check_mark:                                                                                           | The security requirements to use for the request.                                                            |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.UpdateUnifiedConnectionResponse](../../sdk/models/operations/updateunifiedconnectionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
