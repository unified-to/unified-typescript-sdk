# BillingMethod

how the matter is billed

## Example Usage

```typescript
import { BillingMethod } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: BillingMethod = "HOURLY";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"HOURLY" | "FLAT_FEE" | "CONTINGENCY" | "OTHER" | Unrecognized<string>
```