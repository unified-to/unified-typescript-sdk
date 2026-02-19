# AccountType

## Example Usage

```typescript
import { AccountType } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: AccountType = "SAVINGS";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"CHECKING" | "SAVINGS" | Unrecognized<string>
```