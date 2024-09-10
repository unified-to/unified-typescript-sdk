# PatchUnifiedWebhookRequest

## Example Usage

```typescript
import { PatchUnifiedWebhookRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchUnifiedWebhookRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `webhook`                                                         | [shared.Webhook](../../../sdk/models/shared/webhook.md)           | :heavy_minus_sign:                                                | A webhook is used to POST new/updated information to your server. |
| `id`                                                              | *string*                                                          | :heavy_check_mark:                                                | ID of the Webhook                                                 |