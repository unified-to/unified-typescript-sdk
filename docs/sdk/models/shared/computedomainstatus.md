# ComputeDomainStatus

DNS/ownership verification status

## Example Usage

```typescript
import { ComputeDomainStatus } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: ComputeDomainStatus = "FAILED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"PENDING" | "VERIFIED" | "FAILED" | "OTHER" | Unrecognized<string>
```