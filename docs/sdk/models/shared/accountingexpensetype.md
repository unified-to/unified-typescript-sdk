# AccountingExpenseType

USER = employee spend; COMPANY = books/purchase expense

## Example Usage

```typescript
import { AccountingExpenseType } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: AccountingExpenseType = "COMPANY";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"USER" | "COMPANY" | Unrecognized<string>
```