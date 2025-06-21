# WeightUnit

## Example Usage

```typescript
import { WeightUnit } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: WeightUnit = "kg";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"g" | "kg" | "oz" | "lb" | Unrecognized<string>
```