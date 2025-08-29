# ResponseStatus

## Example Usage

```typescript
import { ResponseStatus } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: ResponseStatus = "PENDING";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"COMPLETED" | "FAILED" | "PASSED" | "PENDING" | Unrecognized<string>
```