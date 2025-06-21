# CrmEventType

## Example Usage

```typescript
import { CrmEventType } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: CrmEventType = "CALL";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"NOTE" | "EMAIL" | "TASK" | "MEETING" | "CALL" | "MARKETING_EMAIL" | "FORM" | "PAGE_VIEW" | Unrecognized<string>
```