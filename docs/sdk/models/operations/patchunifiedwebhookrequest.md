# PatchUnifiedWebhookRequest

## Example Usage

```typescript
import { PatchUnifiedWebhookRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchUnifiedWebhookRequest = {
  webhook: {
    connectionId: "<id>",
    event: "updated",
    objectType: "genai_model",
  },
  id: "<id>",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `webhook`                                                         | [shared.Webhook](../../../sdk/models/shared/webhook.md)           | :heavy_check_mark:                                                | A webhook is used to POST new/updated information to your server. |
| `id`                                                              | *string*                                                          | :heavy_check_mark:                                                | ID of the Webhook                                                 |