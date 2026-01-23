# TimeUnit

## Example Usage

```typescript
import { TimeUnit } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: TimeUnit = "UNSPECIFIED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"UNSPECIFIED" | "LIFETIME" | "MONTHS" | "WEEKS" | "DAYS" | "HOURS" | "MINUTES" | Unrecognized<string>
```