# Webhook
(*webhook*)

### Available Operations

* [deleteUnifiedWebhookId](#deleteunifiedwebhookid) - Remove webhook subscription
* [getUnifiedWebhook](#getunifiedwebhook) - Returns all registered webhooks
* [getUnifiedWebhookId](#getunifiedwebhookid) - Retrieve webhook by its ID
* [postUnifiedWebhookConnectionIdObject](#postunifiedwebhookconnectionidobject) - Create webhook subscription

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

sdk.webhook.deleteUnifiedWebhookId({
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

sdk.webhook.getUnifiedWebhook({
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

sdk.webhook.getUnifiedWebhookId({
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

sdk.webhook.postUnifiedWebhookConnectionIdObject({
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

