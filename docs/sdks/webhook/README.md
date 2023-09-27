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
  id: "d73809a0-2f06-4e92-a8b5-6065a5074bef",
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
  env: "cum",
  limit: 5185.71,
  object: "laborum",
  offset: 9427.54,
  order: "eum",
  sort: "rem",
  updatedGte: new Date("2022-05-29T07:20:34.094Z"),
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
  id: "d2b99404-363a-4096-8c05-3876e39def9c",
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
    checkedAt: new Date("2022-08-13T23:23:14.155Z"),
    connectionId: "minima",
    createdAt: new Date("2020-02-03T17:57:01.294Z"),
    environment: "fugiat",
    events: [
      PropertyWebhookEvents.Updated,
    ],
    hookUrl: "ipsum",
    id: "54e5cb94-9770-417a-a620-4bb26ca4e999",
    includeRaw: false,
    integrationType: "quos",
    interval: 1768.7,
    objectType: WebhookObjectType.EnrichCompany,
    subscriptions: [
      "iure",
    ],
    updatedAt: new Date("2021-05-13T02:27:36.070Z"),
    workspaceId: "debitis",
  },
  connectionId: "reiciendis",
  events: [
    PostUnifiedWebhookConnectionIdObjectEvents.Created,
  ],
  object: "perferendis",
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

