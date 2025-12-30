# AccountingOrderStatus

## Example Usage

```typescript
import { AccountingOrderStatus } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: AccountingOrderStatus = "DELETED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"DRAFT" | "VOIDED" | "AUTHORIZED" | "PAID" | "PARTIALLY_PAID" | "PARTIALLY_REFUNDED" | "REFUNDED" | "SUBMITTED" | "DELETED" | Unrecognized<string>
```