# DatastoreFieldType

## Example Usage

```typescript
import { DatastoreFieldType } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: DatastoreFieldType = "CURRENCY";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"TEXT" | "NUMBER" | "DATE" | "BOOLEAN" | "FILE" | "TEXTAREA" | "SINGLE_SELECT" | "MULTIPLE_SELECT" | "CURRENCY" | "URL" | "EMAIL" | "PHONE" | "LINKED_RECORD" | "RELATION" | Unrecognized<string>
```