# RegistrationStatus

## Example Usage

```typescript
import { RegistrationStatus } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: RegistrationStatus = "REJECTED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"PENDING" | "APPROVED" | "REJECTED" | "CANCELLED" | Unrecognized<string>
```