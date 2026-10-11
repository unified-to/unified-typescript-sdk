# TaxMode

INCLUSIVE / EXCLUSIVE / NONE; maps Xero LineAmountTypes (a boolean cannot represent NoTax)

## Example Usage

```typescript
import { TaxMode } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: TaxMode = "INCLUSIVE";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"INCLUSIVE" | "EXCLUSIVE" | "NONE" | Unrecognized<string>
```