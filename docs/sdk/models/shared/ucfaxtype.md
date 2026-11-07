# UcFaxType

Whether the fax was received (INBOUND) or sent (OUTBOUND)

## Example Usage

```typescript
import { UcFaxType } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: UcFaxType = "OUTBOUND";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"INBOUND" | "OUTBOUND" | Unrecognized<string>
```