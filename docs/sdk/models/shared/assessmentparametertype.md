# AssessmentParameterType

## Example Usage

```typescript
import { AssessmentParameterType } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: AssessmentParameterType = "TEXT";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"TEXT" | "NUMBER" | "MULTIPLE_CHOICE" | "MULTIPLE_SELECT" | "DATE" | "FILE" | Unrecognized<string>
```