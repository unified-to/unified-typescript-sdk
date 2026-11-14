# QmsIssueSource

Where a quality issue was found

## Example Usage

```typescript
import { QmsIssueSource } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: QmsIssueSource = "SUPPLIER";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"INTERNAL" | "SUPPLIER" | "CUSTOMER" | "AUDIT" | "OTHER" | Unrecognized<string>
```