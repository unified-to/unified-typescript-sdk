# SizeUnit

## Example Usage

```typescript
import { SizeUnit } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: SizeUnit = "inch";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"cm" | "inch" | Unrecognized<string>
```