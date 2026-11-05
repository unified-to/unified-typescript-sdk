# CalendarBotStatus

## Example Usage

```typescript
import { CalendarBotStatus } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: CalendarBotStatus = "IN_CALL_RECORDING";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"READY" | "JOINING_CALL" | "IN_WAITING_ROOM" | "IN_CALL_NOT_RECORDING" | "RECORDING_PERMISSION_ALLOWED" | "RECORDING_PERMISSION_DENIED" | "IN_CALL_RECORDING" | "CALL_ENDED" | "DONE" | "FATAL" | Unrecognized<string>
```