# UcFaxStatus

The current or final status of the fax

## Example Usage

```typescript
import { UcFaxStatus } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: UcFaxStatus = "QUEUED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"QUEUED" | "SENDING" | "DELIVERED" | "RECEIVING" | "RECEIVED" | "FAILED" | "CANCELED" | "OTHER" | Unrecognized<string>
```