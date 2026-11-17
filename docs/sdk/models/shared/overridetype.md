# OverrideType

replaces the calculated withholding with a flat amount or percentage

## Example Usage

```typescript
import { OverrideType } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: OverrideType = "FIXED_AMOUNT";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"NONE" | "FIXED_AMOUNT" | "PERCENT" | Unrecognized<string>
```