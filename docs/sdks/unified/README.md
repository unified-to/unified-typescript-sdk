# Unified
(*unified*)

### Available Operations

* [createUnifiedConnection](#createunifiedconnection) - Create connection
* [createUnifiedWebhook](#createunifiedwebhook) - Create webhook subscription
* [getUnifiedApicall](#getunifiedapicall) - Retrieve specific API Call by its ID
* [getUnifiedConnection](#getunifiedconnection) - Retrieve connection
* [getUnifiedIntegrationAuth](#getunifiedintegrationauth) - Create connection indirectly
* [getUnifiedWebhook](#getunifiedwebhook) - Retrieve webhook by its ID
* [listUnifiedApicalls](#listunifiedapicalls) - Returns API Calls
* [listUnifiedConnections](#listunifiedconnections) - List all connections
* [listUnifiedIntegrationWorkspaces](#listunifiedintegrationworkspaces) - Returns all activated integrations in a workspace
* [listUnifiedIntegrations](#listunifiedintegrations) - Returns all integrations
* [listUnifiedIssues](#listunifiedissues) - List support issues
* [listUnifiedWebhooks](#listunifiedwebhooks) - Returns all registered webhooks
* [patchUnifiedConnection](#patchunifiedconnection) - Update connection
* [patchUnifiedWebhookTrigger](#patchunifiedwebhooktrigger) - Trigger webhook
* [removeUnifiedConnection](#removeunifiedconnection) - Remove connection
* [removeUnifiedWebhook](#removeunifiedwebhook) - Remove webhook subscription
* [updateUnifiedConnection](#updateunifiedconnection) - Update connection
* [updateUnifiedWebhookTrigger](#updateunifiedwebhooktrigger) - Trigger webhook

## createUnifiedConnection

Create connection

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { CreateUnifiedConnectionSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";
import { PropertyConnectionCategories, PropertyConnectionPermissions } from "@unified-api/typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: CreateUnifiedConnectionSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.unified.createUnifiedConnection({
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

## createUnifiedWebhook

The data payload received by your server is described at https://docs.unified.to/unified/overview. The `interval` field can be set as low as 1 minute for paid accounts, and 60 minutes for free accounts.

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { CreateUnifiedWebhookSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";
import { Event, ObjectType, WebhookWebhookType } from "@unified-api/typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: CreateUnifiedWebhookSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.unified.createUnifiedWebhook({
    webhook: {
      connectionId: "<value>",
      event: Event.Created,
      hookUrl: "<value>",
      meta: {
        "key": "<value>",
      },
      objectType: ObjectType.AccountingAccount,
      runs: [
        "<value>",
      ],
    },
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
| `request`                                                                                              | [operations.CreateUnifiedWebhookRequest](../../sdk/models/operations/createunifiedwebhookrequest.md)   | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `security`                                                                                             | [operations.CreateUnifiedWebhookSecurity](../../sdk/models/operations/createunifiedwebhooksecurity.md) | :heavy_check_mark:                                                                                     | The security requirements to use for the request.                                                      |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.CreateUnifiedWebhookResponse](../../sdk/models/operations/createunifiedwebhookresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getUnifiedApicall

Retrieve specific API Call by its ID

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { GetUnifiedApicallSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetUnifiedApicallSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.unified.getUnifiedApicall({
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetUnifiedApicallRequest](../../sdk/models/operations/getunifiedapicallrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.GetUnifiedApicallSecurity](../../sdk/models/operations/getunifiedapicallsecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetUnifiedApicallResponse](../../sdk/models/operations/getunifiedapicallresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getUnifiedConnection

Retrieve connection

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { GetUnifiedConnectionSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetUnifiedConnectionSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.unified.getUnifiedConnection({
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

## getUnifiedIntegrationAuth

Returns an authorization URL for the specified integration.  Once a successful authorization occurs, a new connection is created.

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { Scopes } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();

  const res = await sdk.unified.getUnifiedIntegrationAuth({
    integrationType: "<value>",
    scopes: [
      Scopes.HrisEmployeeWrite,
    ],
    workspaceId: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.GetUnifiedIntegrationAuthRequest](../../sdk/models/operations/getunifiedintegrationauthrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.GetUnifiedIntegrationAuthResponse](../../sdk/models/operations/getunifiedintegrationauthresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getUnifiedWebhook

Retrieve webhook by its ID

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { GetUnifiedWebhookSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetUnifiedWebhookSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.unified.getUnifiedWebhook({
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.GetUnifiedWebhookRequest](../../sdk/models/operations/getunifiedwebhookrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.GetUnifiedWebhookSecurity](../../sdk/models/operations/getunifiedwebhooksecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.GetUnifiedWebhookResponse](../../sdk/models/operations/getunifiedwebhookresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listUnifiedApicalls

Returns API Calls

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { ListUnifiedApicallsSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListUnifiedApicallsSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.unified.listUnifiedApicalls({}, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.ListUnifiedApicallsRequest](../../sdk/models/operations/listunifiedapicallsrequest.md)   | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `security`                                                                                           | [operations.ListUnifiedApicallsSecurity](../../sdk/models/operations/listunifiedapicallssecurity.md) | :heavy_check_mark:                                                                                   | The security requirements to use for the request.                                                    |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.ListUnifiedApicallsResponse](../../sdk/models/operations/listunifiedapicallsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listUnifiedConnections

List all connections

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { Categories, ListUnifiedConnectionsSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListUnifiedConnectionsSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.unified.listUnifiedConnections({
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

## listUnifiedIntegrationWorkspaces

No authentication required as this is to be used by front-end interface

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { QueryParamCategories } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();

  const res = await sdk.unified.listUnifiedIntegrationWorkspaces({
    categories: [
      QueryParamCategories.Accounting,
    ],
    workspaceId: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.ListUnifiedIntegrationWorkspacesRequest](../../sdk/models/operations/listunifiedintegrationworkspacesrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.ListUnifiedIntegrationWorkspacesResponse](../../sdk/models/operations/listunifiedintegrationworkspacesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listUnifiedIntegrations

Returns all integrations

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { ListUnifiedIntegrationsQueryParamCategories, ListUnifiedIntegrationsSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListUnifiedIntegrationsSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.unified.listUnifiedIntegrations({
    categories: [
      ListUnifiedIntegrationsQueryParamCategories.Crm,
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
| `request`                                                                                                    | [operations.ListUnifiedIntegrationsRequest](../../sdk/models/operations/listunifiedintegrationsrequest.md)   | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `security`                                                                                                   | [operations.ListUnifiedIntegrationsSecurity](../../sdk/models/operations/listunifiedintegrationssecurity.md) | :heavy_check_mark:                                                                                           | The security requirements to use for the request.                                                            |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.ListUnifiedIntegrationsResponse](../../sdk/models/operations/listunifiedintegrationsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listUnifiedIssues

List support issues

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { ListUnifiedIssuesSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListUnifiedIssuesSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.unified.listUnifiedIssues({}, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [operations.ListUnifiedIssuesRequest](../../sdk/models/operations/listunifiedissuesrequest.md)   | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `security`                                                                                       | [operations.ListUnifiedIssuesSecurity](../../sdk/models/operations/listunifiedissuessecurity.md) | :heavy_check_mark:                                                                               | The security requirements to use for the request.                                                |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.ListUnifiedIssuesResponse](../../sdk/models/operations/listunifiedissuesresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## listUnifiedWebhooks

Returns all registered webhooks

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { ListUnifiedWebhooksSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListUnifiedWebhooksSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.unified.listUnifiedWebhooks({}, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.ListUnifiedWebhooksRequest](../../sdk/models/operations/listunifiedwebhooksrequest.md)   | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `security`                                                                                           | [operations.ListUnifiedWebhooksSecurity](../../sdk/models/operations/listunifiedwebhookssecurity.md) | :heavy_check_mark:                                                                                   | The security requirements to use for the request.                                                    |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.ListUnifiedWebhooksResponse](../../sdk/models/operations/listunifiedwebhooksresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## patchUnifiedConnection

Update connection

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { PatchUnifiedConnectionSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";
import { PropertyConnectionCategories, PropertyConnectionPermissions } from "@unified-api/typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: PatchUnifiedConnectionSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.unified.patchUnifiedConnection({
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

## patchUnifiedWebhookTrigger

Trigger webhook

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { PatchUnifiedWebhookTriggerSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: PatchUnifiedWebhookTriggerSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.unified.patchUnifiedWebhookTrigger({
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.PatchUnifiedWebhookTriggerRequest](../../sdk/models/operations/patchunifiedwebhooktriggerrequest.md)   | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `security`                                                                                                         | [operations.PatchUnifiedWebhookTriggerSecurity](../../sdk/models/operations/patchunifiedwebhooktriggersecurity.md) | :heavy_check_mark:                                                                                                 | The security requirements to use for the request.                                                                  |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.PatchUnifiedWebhookTriggerResponse](../../sdk/models/operations/patchunifiedwebhooktriggerresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## removeUnifiedConnection

Remove connection

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { RemoveUnifiedConnectionSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: RemoveUnifiedConnectionSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.unified.removeUnifiedConnection({
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

## removeUnifiedWebhook

Remove webhook subscription

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { RemoveUnifiedWebhookSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: RemoveUnifiedWebhookSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.unified.removeUnifiedWebhook({
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
| `request`                                                                                              | [operations.RemoveUnifiedWebhookRequest](../../sdk/models/operations/removeunifiedwebhookrequest.md)   | :heavy_check_mark:                                                                                     | The request object to use for the request.                                                             |
| `security`                                                                                             | [operations.RemoveUnifiedWebhookSecurity](../../sdk/models/operations/removeunifiedwebhooksecurity.md) | :heavy_check_mark:                                                                                     | The security requirements to use for the request.                                                      |
| `config`                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                           | :heavy_minus_sign:                                                                                     | Available config options for making requests.                                                          |


### Response

**Promise<[operations.RemoveUnifiedWebhookResponse](../../sdk/models/operations/removeunifiedwebhookresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updateUnifiedConnection

Update connection

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { UpdateUnifiedConnectionSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";
import { PropertyConnectionCategories, PropertyConnectionPermissions } from "@unified-api/typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: UpdateUnifiedConnectionSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.unified.updateUnifiedConnection({
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

## updateUnifiedWebhookTrigger

Trigger webhook

### Example Usage

```typescript
import { UnifiedTo } from "@unified-api/typescript-sdk";
import { UpdateUnifiedWebhookTriggerSecurity } from "@unified-api/typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: UpdateUnifiedWebhookTriggerSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.unified.updateUnifiedWebhookTrigger({
    id: "<id>",
  }, operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.UpdateUnifiedWebhookTriggerRequest](../../sdk/models/operations/updateunifiedwebhooktriggerrequest.md)   | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `security`                                                                                                           | [operations.UpdateUnifiedWebhookTriggerSecurity](../../sdk/models/operations/updateunifiedwebhooktriggersecurity.md) | :heavy_check_mark:                                                                                                   | The security requirements to use for the request.                                                                    |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.UpdateUnifiedWebhookTriggerResponse](../../sdk/models/operations/updateunifiedwebhooktriggerresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
