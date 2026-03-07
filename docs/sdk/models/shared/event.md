# Event

## Example Usage

```typescript
import { Event } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: Event = "updated";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"updated" | "created" | "deleted" | Unrecognized<string>
```