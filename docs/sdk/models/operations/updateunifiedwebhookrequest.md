# UpdateUnifiedWebhookRequest

## Example Usage

```typescript
import { UpdateUnifiedWebhookRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateUnifiedWebhookRequest = {
  webhook: {
    connectionId: "<id>",
    event: "created",
    objectType: "repo_organization",
  },
  id: "<id>",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `webhook`                                                         | [shared.Webhook](../../../sdk/models/shared/webhook.md)           | :heavy_check_mark:                                                | A webhook is used to POST new/updated information to your server. |
| `id`                                                              | *string*                                                          | :heavy_check_mark:                                                | ID of the Webhook                                                 |