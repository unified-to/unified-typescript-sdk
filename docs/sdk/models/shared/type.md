# Type

## Example Usage

```typescript
import { Type } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: Type = "ACCOUNTS_RECEIVABLE";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"ACCOUNTS_PAYABLE" | "ACCOUNTS_RECEIVABLE" | "BANK" | "CREDIT_CARD" | "FIXED_ASSET" | "LIABILITY" | "EQUITY" | "EXPENSE" | "REVENUE" | "OTHER" | Unrecognized<string>
```