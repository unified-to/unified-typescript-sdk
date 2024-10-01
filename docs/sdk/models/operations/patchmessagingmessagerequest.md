# PatchMessagingMessageRequest

## Example Usage

```typescript
import { PatchMessagingMessageRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchMessagingMessageRequest = {
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `messagingMessage`                                                        | [shared.MessagingMessage](../../../sdk/models/shared/messagingmessage.md) | :heavy_minus_sign:                                                        | N/A                                                                       |
| `connectionId`                                                            | *string*                                                                  | :heavy_check_mark:                                                        | ID of the connection                                                      |
| `fields`                                                                  | *string*[]                                                                | :heavy_minus_sign:                                                        | Comma-delimited fields to return                                          |
| `id`                                                                      | *string*                                                                  | :heavy_check_mark:                                                        | ID of the Message                                                         |