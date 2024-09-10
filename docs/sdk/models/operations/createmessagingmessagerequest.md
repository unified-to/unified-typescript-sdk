# CreateMessagingMessageRequest

## Example Usage

```typescript
import { CreateMessagingMessageRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateMessagingMessageRequest = {
  connectionId: "<value>",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `messagingMessage`                                                        | [shared.MessagingMessage](../../../sdk/models/shared/messagingmessage.md) | :heavy_minus_sign:                                                        | N/A                                                                       |
| `connectionId`                                                            | *string*                                                                  | :heavy_check_mark:                                                        | ID of the connection                                                      |