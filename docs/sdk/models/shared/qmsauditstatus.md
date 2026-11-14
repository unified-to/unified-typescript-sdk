# QmsAuditStatus

Normalized status of a quality record

## Example Usage

```typescript
import { QmsAuditStatus } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: QmsAuditStatus = "IN_PROGRESS";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"OPEN" | "IN_PROGRESS" | "IN_REVIEW" | "CLOSED" | "CANCELLED" | Unrecognized<string>
```