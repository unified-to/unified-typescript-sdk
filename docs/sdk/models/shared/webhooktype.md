# WebhookType

"native" registers with the integration, which sends events as they happen. "virtual" checks for changes on "interval". Optional on create; if omitted, Unified.to picks a supported type for the object. Requesting a type the integration doesn't support returns 400. Set on create only: changes sent on update are ignored without an error. Delete and recreate the webhook to change type.

## Example Usage

```typescript
import { WebhookType } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: WebhookType = "native";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"virtual" | "native" | Unrecognized<string>
```