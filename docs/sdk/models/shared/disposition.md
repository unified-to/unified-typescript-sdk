# Disposition

What to do with the nonconforming material

## Example Usage

```typescript
import { Disposition } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: Disposition = "REWORK";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"USE_AS_IS" | "REWORK" | "REPAIR" | "SCRAP" | "RETURN_TO_VENDOR" | "OTHER" | Unrecognized<string>
```