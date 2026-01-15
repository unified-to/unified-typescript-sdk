# NonDeliveryOption

## Example Usage

```typescript
import { NonDeliveryOption } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: NonDeliveryOption = "RETURN";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"RETURN" | "ABANDON" | Unrecognized<string>
```