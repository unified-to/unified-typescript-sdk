# AccountingTransactionStatus

Posting state of the transaction

## Example Usage

```typescript
import { AccountingTransactionStatus } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: AccountingTransactionStatus = "OTHER";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"PENDING" | "POSTED" | "VOID" | "OTHER" | Unrecognized<string>
```