# AtsJobStatus

## Example Usage

```typescript
import { AtsJobStatus } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: AtsJobStatus = "OPEN";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ARCHIVED" | "PENDING" | "DRAFT" | "OPEN" | "CLOSED" | Unrecognized<string>
```