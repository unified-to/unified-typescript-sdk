# CreateUnifiedWebhookRequest

## Example Usage

```typescript
import { CreateUnifiedWebhookRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateUnifiedWebhookRequest = {
  webhook: {
    connectionId: "<id>",
    event: "updated",
    objectType: "calendar_link",
  },
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `webhook`                                                                     | [shared.Webhook](../../../sdk/models/shared/webhook.md)                       | :heavy_check_mark:                                                            | A webhook is used to POST new/updated information to your server.             |
| `includeAll`                                                                  | *boolean*                                                                     | :heavy_minus_sign:                                                            | When true, send existing/historic data. When false, no historic data is sent. |