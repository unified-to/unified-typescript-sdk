# ApiCallType

## Example Usage

```typescript
import { ApiCallType } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: ApiCallType = "inbound";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"login" | "webhook" | "inbound" | "mcp" | Unrecognized<string>
```