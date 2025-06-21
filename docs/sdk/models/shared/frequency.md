# Frequency

## Example Usage

```typescript
import { Frequency } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: Frequency = "QUARTER";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ONE_TIME" | "DAY" | "QUARTER" | "YEAR" | "HOUR" | "MONTH" | "WEEK" | Unrecognized<string>
```