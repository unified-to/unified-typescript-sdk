# UcCallStatus

The current or final status of the call

## Example Usage

```typescript
import { UcCallStatus } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: UcCallStatus = "BUSY";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"QUEUED" | "RINGING" | "IN_PROGRESS" | "COMPLETED" | "BUSY" | "NO_ANSWER" | "FAILED" | "CANCELED" | "OTHER" | Unrecognized<string>
```