# Period

## Example Usage

```typescript
import { Period } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: Period = "DAILY";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"UNSPECIFIED" | "DAILY" | "FLIGHT" | Unrecognized<string>
```