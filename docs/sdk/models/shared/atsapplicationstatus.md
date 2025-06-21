# AtsApplicationStatus

## Example Usage

```typescript
import { AtsApplicationStatus } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: AtsApplicationStatus = "SUBMITTED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"NEW" | "REVIEWING" | "SCREENING" | "SUBMITTED" | "FIRST_INTERVIEW" | "SECOND_INTERVIEW" | "THIRD_INTERVIEW" | "BACKGROUND_CHECK" | "OFFERED" | "ACCEPTED" | "HIRED" | "REJECTED" | "DECLINED" | "WITHDRAWN" | Unrecognized<string>
```