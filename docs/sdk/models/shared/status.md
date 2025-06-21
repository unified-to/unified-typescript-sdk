# Status

## Example Usage

```typescript
import { Status } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: Status = "ARCHIVED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ACTIVE" | "ARCHIVED" | Unrecognized<string>
```