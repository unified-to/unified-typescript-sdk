# AccountingTaxrateType

Whether the rate applies to sales, purchases, or both

## Example Usage

```typescript
import { AccountingTaxrateType } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: AccountingTaxrateType = "PURCHASE";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"SALES" | "PURCHASE" | "BOTH" | "OTHER" | Unrecognized<string>
```