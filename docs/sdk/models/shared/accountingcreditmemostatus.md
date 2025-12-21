# AccountingCreditmemoStatus

## Example Usage

```typescript
import { AccountingCreditmemoStatus } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: AccountingCreditmemoStatus = "PARTIALLY_REFUNDED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"DRAFT" | "VOIDED" | "AUTHORIZED" | "PAID" | "PARTIALLY_PAID" | "PARTIALLY_REFUNDED" | "REFUNDED" | "OVERDUE" | Unrecognized<string>
```