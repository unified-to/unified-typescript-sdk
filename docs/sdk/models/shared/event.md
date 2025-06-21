# Event

## Example Usage

```typescript
import { Event } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: Event = "updated";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"updated" | "created" | "deleted" | Unrecognized<string>
```