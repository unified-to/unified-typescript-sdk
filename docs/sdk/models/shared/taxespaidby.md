# TaxesPaidBy

## Example Usage

```typescript
import { TaxesPaidBy } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: TaxesPaidBy = "THIRD_PARTY";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"SENDER" | "RECIPIENT" | "THIRD_PARTY" | Unrecognized<string>
```