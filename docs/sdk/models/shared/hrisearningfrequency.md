# HrisEarningFrequency

ONE_TIME for a single addition to the next unprocessed pay run, otherwise recurring

## Example Usage

```typescript
import { HrisEarningFrequency } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: HrisEarningFrequency = "SEMIMONTHLY";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"ONE_TIME" | "DAY" | "QUARTER" | "YEAR" | "HOUR" | "MONTH" | "WEEK" | "BIWEEKLY" | "SEMIMONTHLY" | Unrecognized<string>
```