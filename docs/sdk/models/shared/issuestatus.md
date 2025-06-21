# IssueStatus

## Example Usage

```typescript
import { IssueStatus } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: IssueStatus = "COMPLETED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"COMPLETED" | "NEW" | "ROADMAP" | "IN_PROGRESS" | "ON_HOLD" | "VALIDATING" | "REJECTED" | "UP_NEXT" | Unrecognized<string>
```