# CalendarAttendeeStatus

## Example Usage

```typescript
import { CalendarAttendeeStatus } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: CalendarAttendeeStatus = "TENTATIVE";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ACCEPTED" | "REJECTED" | "TENTATIVE" | Unrecognized<string>
```