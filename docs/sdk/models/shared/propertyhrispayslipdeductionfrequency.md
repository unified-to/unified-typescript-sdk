# PropertyHrisPayslipDeductionFrequency

Frequency for this deduction (should always be set, matches IHrisBenefit.frequency)

## Example Usage

```typescript
import { PropertyHrisPayslipDeductionFrequency } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PropertyHrisPayslipDeductionFrequency = "QUARTER";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"ONE_TIME" | "DAY" | "QUARTER" | "YEAR" | "HOUR" | "MONTH" | "WEEK" | "BIWEEKLY" | "SEMIMONTHLY" | Unrecognized<string>
```