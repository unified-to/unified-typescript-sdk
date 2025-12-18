# MessagingEventType

## Example Usage

```typescript
import { MessagingEventType } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: MessagingEventType = "USER_DELETED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"MESSAGE_RECEIVED" | "REACTION_ADDED" | "REACTION_REMOVED" | "BUTTON_CLICK" | "APP_MENTION" | "CHANNEL_JOINED" | "CHANNEL_LEFT" | "CHANNEL_CREATED" | "CHANNEL_DELETED" | "USER_CREATED" | "USER_DELETED" | "USER_UPDATED" | Unrecognized<string>
```