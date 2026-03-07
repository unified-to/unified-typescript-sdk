# AccountingBillStatus

## Example Usage

```typescript
import { AccountingBillStatus } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: AccountingBillStatus = "PARTIALLY_PAID";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"DRAFT" | "VOIDED" | "AUTHORIZED" | "PAID" | "PARTIALLY_PAID" | "PARTIALLY_REFUNDED" | "REFUNDED" | "SUBMITTED" | "DELETED" | "OVERDUE" | Unrecognized<string>
```