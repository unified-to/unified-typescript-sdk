# ListType

## Example Usage

```typescript
import { ListType } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: ListType = "supported-required";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"supported-required" | "supported" | "not-supported" | Unrecognized<string>
```