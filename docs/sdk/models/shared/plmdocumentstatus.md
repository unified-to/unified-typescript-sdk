# PlmDocumentStatus

Normalized lifecycle status of a part or document revision

## Example Usage

```typescript
import { PlmDocumentStatus } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PlmDocumentStatus = "IN_REVIEW";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"IN_WORK" | "IN_REVIEW" | "RELEASED" | "OBSOLETE" | "OTHER" | Unrecognized<string>
```