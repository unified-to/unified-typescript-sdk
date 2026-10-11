# GarnishmentType

set when this deduction is a court-ordered garnishment

## Example Usage

```typescript
import { GarnishmentType } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: GarnishmentType = "CREDITOR";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"CHILD_SUPPORT" | "TAX_LEVY" | "STUDENT_LOAN" | "CREDITOR" | "BANKRUPTCY" | "OTHER" | Unrecognized<string>
```