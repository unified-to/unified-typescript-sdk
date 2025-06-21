# Type

## Example Usage

```typescript
import { Type } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: Type = "ACCOUNTS_RECEIVABLE";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ACCOUNTS_PAYABLE" | "ACCOUNTS_RECEIVABLE" | "BANK" | "CREDIT_CARD" | "FIXED_ASSET" | "LIABILITY" | "EQUITY" | "EXPENSE" | "REVENUE" | "OTHER" | Unrecognized<string>
```