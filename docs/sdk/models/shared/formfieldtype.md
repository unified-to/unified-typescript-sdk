# FormFieldType

## Example Usage

```typescript
import { FormFieldType } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: FormFieldType = "TEXTAREA";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"TEXT" | "TEXTAREA" | "NUMBER" | "EMAIL" | "URL" | "DATE" | "TIME" | "DATETIME" | "PHONE" | "BOOLEAN" | "SINGLE_SELECT" | "MULTIPLE_SELECT" | "FILE_UPLOAD" | "RATING" | "SCALE" | "MATRIX" | "SECTION_HEADER" | "OTHER" | Unrecognized<string>
```