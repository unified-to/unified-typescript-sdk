# Operation

## Example Usage

```typescript
import { Operation } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: Operation = "delete";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"add" | "delete" | Unrecognized<string>
```