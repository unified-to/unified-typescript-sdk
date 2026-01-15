# DutiesPaidBy

## Example Usage

```typescript
import { DutiesPaidBy } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: DutiesPaidBy = "SENDER";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"SENDER" | "RECIPIENT" | "THIRD_PARTY" | Unrecognized<string>
```