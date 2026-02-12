# AssessmentOrderStatus

## Example Usage

```typescript
import { AssessmentOrderStatus } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: AssessmentOrderStatus = "FAILED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"OPEN" | "IN_PROGRESS" | "COMPLETED" | "FAILED" | "REJECTED" | Unrecognized<string>
```