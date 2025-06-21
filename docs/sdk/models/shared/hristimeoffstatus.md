# HrisTimeoffStatus

## Example Usage

```typescript
import { HrisTimeoffStatus } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: HrisTimeoffStatus = "APPROVED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"APPROVED" | "PENDING" | "DENIED" | Unrecognized<string>
```