# Event

## Example Usage

```typescript
import { Event } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: Event = "USER_DELETED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"USER_CREATED" | "USER_DELETED" | "CONNECTION_HEALTHY" | "CONNECTION_UNHEALTHY" | "CONNECTION_CREATED" | "CONNECTION_UPDATED" | "CONNECTION_DELETED" | "CONNECTION_PAUSED" | "CONNECTION_UNPAUSED" | "INTEGRATION_ACTIVATED" | "INTEGRATION_DEACTIVATED" | "INTEGRATION_UPDATED" | "WORKSPACE_UPDATED" | "WORKSPACE_OVER_LIMIT" | "WORKSPACE_80PERCENT_LIMIT" | "WEBHOOK_CREATED" | "WEBHOOK_DELETED" | "WEBHOOK_UNHEALTHY" | "WEBHOOK_PAUSED" | "WEBHOOK_UNPAUSED" | Unrecognized<string>
```