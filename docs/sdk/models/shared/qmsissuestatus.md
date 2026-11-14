# QmsIssueStatus

Normalized status of a quality record

## Example Usage

```typescript
import { QmsIssueStatus } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: QmsIssueStatus = "IN_PROGRESS";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"OPEN" | "IN_PROGRESS" | "IN_REVIEW" | "CLOSED" | "CANCELLED" | Unrecognized<string>
```