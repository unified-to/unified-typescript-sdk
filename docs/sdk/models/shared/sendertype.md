# SenderType

whether the guest, host or system sent the message

## Example Usage

```typescript
import { SenderType } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: SenderType = "GUEST";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"GUEST" | "HOST" | "SYSTEM" | Unrecognized<string>
```