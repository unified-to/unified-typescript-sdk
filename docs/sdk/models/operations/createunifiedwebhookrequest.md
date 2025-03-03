# CreateUnifiedWebhookRequest

## Example Usage

```typescript
import { CreateUnifiedWebhookRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateUnifiedWebhookRequest = {
  webhook: {
    connectionId: "<id>",
    event: "created",
    objectType: "ats_activity",
  },
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `webhook`                                                         | [shared.Webhook](../../../sdk/models/shared/webhook.md)           | :heavy_check_mark:                                                | A webhook is used to POST new/updated information to your server. |
| `includeAll`                                                      | *boolean*                                                         | :heavy_minus_sign:                                                | When set, all of the existing data will sent back to your server. |