# VerificationRequestResponseStatus

Background checks and compliance checks return CLEARFLAGGED or PASS/FAIL or YES/NO

## Example Usage

```typescript
import { VerificationRequestResponseStatus } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: VerificationRequestResponseStatus = "PENDING";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"COMPLETED" | "FAILED" | "PASSED" | "PENDING" | Unrecognized<string>
```