# AtsInterviewStatus

## Example Usage

```typescript
import { AtsInterviewStatus } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: AtsInterviewStatus = "AWAITING_FEEDBACK";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"SCHEDULED" | "AWAITING_FEEDBACK" | "COMPLETE" | "CANCELED" | "NEEDS_SCHEDULING" | Unrecognized<string>
```