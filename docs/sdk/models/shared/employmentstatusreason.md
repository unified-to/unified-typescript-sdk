# EmploymentStatusReason

why the employee is not actively working (eg. LEAVE, TERMINATED, RETIRED)

## Example Usage

```typescript
import { EmploymentStatusReason } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: EmploymentStatusReason = "DECEASED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"LEAVE" | "TERMINATED" | "RETIRED" | "DECEASED" | "DISABLED" | "OTHER" | Unrecognized<string>
```