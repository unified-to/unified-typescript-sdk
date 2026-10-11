# PayFrequency

how often the employee is paid (eg. BIWEEKLY)

## Example Usage

```typescript
import { PayFrequency } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PayFrequency = "HOUR";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"ONE_TIME" | "DAY" | "QUARTER" | "YEAR" | "HOUR" | "MONTH" | "WEEK" | "BIWEEKLY" | "SEMIMONTHLY" | Unrecognized<string>
```