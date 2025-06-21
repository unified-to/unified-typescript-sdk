# IntervalUnit

## Example Usage

```typescript
import { IntervalUnit } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: IntervalUnit = "WEEK";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"YEAR" | "MONTH" | "WEEK" | "DAY" | Unrecognized<string>
```