# Role

## Example Usage

```typescript
import { Role } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: Role = "SYSTEM";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"SYSTEM" | "USER" | Unrecognized<string>
```