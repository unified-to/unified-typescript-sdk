# PriceUnit

Unit that price_amount is quoted in

## Example Usage

```typescript
import { PriceUnit } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PriceUnit = "PER_GPU_HOUR";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"PER_GPU_HOUR" | "PER_INSTANCE_HOUR" | "OTHER" | Unrecognized<string>
```