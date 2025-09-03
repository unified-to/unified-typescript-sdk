# EncondingFormat

## Example Usage

```typescript
import { EncondingFormat } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: EncondingFormat = "BASE64";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"FLOAT" | "UINT8" | "INT8" | "BINARY" | "UBINARY" | "BASE64" | Unrecognized<string>
```