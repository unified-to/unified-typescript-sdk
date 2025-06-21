# PaymentCollectionMethod

## Example Usage

```typescript
import { PaymentCollectionMethod } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PaymentCollectionMethod = "charge_automatically";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"send_invoice" | "charge_automatically" | Unrecognized<string>
```