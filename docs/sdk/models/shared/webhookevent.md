# WebhookEvent

The event to subscribe to. "deleted" is supported on native webhooks, and on virtual webhooks where the integration supports it. Check the integration's Feature Support tab.

## Example Usage

```typescript
import { WebhookEvent } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: WebhookEvent = "deleted";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"updated" | "created" | "deleted" | Unrecognized<string>
```