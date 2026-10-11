# HrisBenefitFrequency

Frequency that costs accrue for this benefit. For insurance/benefits, usually "MONTHLY". For compensation, matches pay cycle (WEEKLY, BIWEEKLY, etc).

## Example Usage

```typescript
import { HrisBenefitFrequency } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: HrisBenefitFrequency = "MONTH";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"ONE_TIME" | "DAY" | "QUARTER" | "YEAR" | "HOUR" | "MONTH" | "WEEK" | "BIWEEKLY" | "SEMIMONTHLY" | Unrecognized<string>
```