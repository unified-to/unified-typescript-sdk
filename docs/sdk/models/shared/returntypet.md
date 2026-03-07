# ReturnTypeT

## Example Usage

```typescript
import { ReturnTypeT } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: ReturnTypeT = "OTHER";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"CUSTOMER" | "VENDOR" | "WARRANTY" | "DEFECTIVE" | "OTHER" | Unrecognized<string>
```