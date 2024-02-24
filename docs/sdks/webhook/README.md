# Webhook
(*webhook*)

### Available Operations

* [createUnifiedWebhook](#createunifiedwebhook) - Create webhook subscription
* [getUnifiedWebhook](#getunifiedwebhook) - Retrieve webhook by its ID
* [listUnifiedWebhooks](#listunifiedwebhooks) - Returns all registered webhooks
* [patchUnifiedWebhookTrigger](#patchunifiedwebhooktrigger) - Trigger webhook
* [removeUnifiedWebhook](#removeunifiedwebhook) - Remove webhook subscription
* [updateUnifiedWebhookTrigger](#updateunifiedwebhooktrigger) - Trigger webhook

## createUnifiedWebhook

The data payload received by your server is described at https://docs.unified.to/unified/overview.  The `interval` field can be set as low as 15 minutes for paid accounts, and 60 minutes for free accounts.

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { CreateUnifiedWebhookSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";
import { Event, ObjectType, WebhookWebhookType } from "unified-typescript-sdk/dist/sdk/models/shared";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: CreateUnifiedWebhookSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.webhook.createUnifiedWebhook({
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

## getUnifiedWebhook

Retrieve webhook by its ID

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { GetUnifiedWebhookSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: GetUnifiedWebhookSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.webhook.getUnifiedWebhook({
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

## listUnifiedWebhooks

Returns all registered webhooks

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { ListUnifiedWebhooksSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: ListUnifiedWebhooksSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.webhook.listUnifiedWebhooks({}, operationSecurity);

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

## patchUnifiedWebhookTrigger

Trigger webhook

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { PatchUnifiedWebhookTriggerSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: PatchUnifiedWebhookTriggerSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.webhook.patchUnifiedWebhookTrigger({
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

## removeUnifiedWebhook

Remove webhook subscription

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { RemoveUnifiedWebhookSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: RemoveUnifiedWebhookSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.webhook.removeUnifiedWebhook({
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

## updateUnifiedWebhookTrigger

Trigger webhook

### Example Usage

```typescript
import { UnifiedTo } from "unified-typescript-sdk";
import { UpdateUnifiedWebhookTriggerSecurity } from "unified-typescript-sdk/dist/sdk/models/operations";

async function run() {
  const sdk = new UnifiedTo();
const operationSecurity: UpdateUnifiedWebhookTriggerSecurity = {
  jwt: "<YOUR_API_KEY_HERE>",
};

  const res = await sdk.webhook.updateUnifiedWebhookTrigger({
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
