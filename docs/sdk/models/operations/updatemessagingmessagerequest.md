# UpdateMessagingMessageRequest

## Example Usage

```typescript
import { UpdateMessagingMessageRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateMessagingMessageRequest = {
    connectionId: "<value>",
    id: "<id>",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `messagingMessage`                                                        | [shared.MessagingMessage](../../../sdk/models/shared/messagingmessage.md) | :heavy_minus_sign:                                                        | N/A                                                                       |
| `connectionId`                                                            | *string*                                                                  | :heavy_check_mark:                                                        | ID of the connection                                                      |
| `id`                                                                      | *string*                                                                  | :heavy_check_mark:                                                        | ID of the Message                                                         |