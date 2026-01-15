# ReturnTypeT

## Example Usage

```typescript
import { ReturnTypeT } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: ReturnTypeT = "OTHER";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"CUSTOMER" | "VENDOR" | "WARRANTY" | "DEFECTIVE" | "OTHER" | Unrecognized<string>
```