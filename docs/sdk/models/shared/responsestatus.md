# ResponseStatus

## Example Usage

```typescript
import { ResponseStatus } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: ResponseStatus = "REJECTED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"OPEN" | "IN_PROGRESS" | "COMPLETED" | "FAILED" | "REJECTED" | Unrecognized<string>
```