# PaymentType

## Example Usage

```typescript
import { PaymentType } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PaymentType = "DIRECT";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"DIRECT" | "CHEQUE" | "CASH" | Unrecognized<string>
```