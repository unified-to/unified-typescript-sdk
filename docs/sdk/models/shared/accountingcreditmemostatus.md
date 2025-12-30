# AccountingCreditmemoStatus

## Example Usage

```typescript
import { AccountingCreditmemoStatus } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: AccountingCreditmemoStatus = "SUBMITTED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"DRAFT" | "VOIDED" | "AUTHORIZED" | "PAID" | "PARTIALLY_PAID" | "PARTIALLY_REFUNDED" | "REFUNDED" | "SUBMITTED" | "DELETED" | "OVERDUE" | Unrecognized<string>
```