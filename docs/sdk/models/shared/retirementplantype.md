# RetirementPlanType

the retirement plan this benefit belongs to (for RETIREMENT* types)

## Example Usage

```typescript
import { RetirementPlanType } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: RetirementPlanType = "PLAN_403B";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"PLAN_401K" | "PLAN_403B" | "PLAN_457B" | "SIMPLE_IRA" | "SEP_IRA" | "NQDC" | "PENSION" | "OTHER" | Unrecognized<string>
```