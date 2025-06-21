# CalendarEventStatus

## Example Usage

```typescript
import { CalendarEventStatus } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: CalendarEventStatus = "TENTATIVE";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"CANCELED" | "CONFIRMED" | "TENTATIVE" | Unrecognized<string>
```