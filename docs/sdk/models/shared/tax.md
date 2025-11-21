# Tax

## Example Usage

```typescript
import { Tax } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: Tax = "TAX";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"PRE_TAX" | "POST_TAX" | "TAXABLE" | "NON_TAXABLE" | "TAX" | Unrecognized<string>
```