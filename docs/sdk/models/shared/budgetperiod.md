# BudgetPeriod

## Example Usage

```typescript
import { BudgetPeriod } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: BudgetPeriod = "DAILY";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"DAILY" | "MONTHLY" | "TOTAL" | "LIFETIME" | Unrecognized<string>
```