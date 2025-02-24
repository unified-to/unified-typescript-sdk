# CreateMessagingMessageRequest

## Example Usage

```typescript
import { CreateMessagingMessageRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateMessagingMessageRequest = {
  messagingMessage: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `messagingMessage`                                                        | [shared.MessagingMessage](../../../sdk/models/shared/messagingmessage.md) | :heavy_check_mark:                                                        | N/A                                                                       |
| `connectionId`                                                            | *string*                                                                  | :heavy_check_mark:                                                        | ID of the connection                                                      |
| `fields`                                                                  | *string*[]                                                                | :heavy_minus_sign:                                                        | Comma-delimited fields to return                                          |