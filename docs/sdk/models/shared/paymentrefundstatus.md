# PaymentRefundStatus

## Example Usage

```typescript
import { PaymentRefundStatus } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PaymentRefundStatus = "SUCCEEDED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"SUCCEEDED" | "PENDING" | "FAILED" | "CANCELED" | Unrecognized<string>
```