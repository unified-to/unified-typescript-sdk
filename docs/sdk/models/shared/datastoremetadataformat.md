# DatastoreMetadataFormat

The data type of the custom field, which determines how `value` is formatted.

## Example Usage

```typescript
import { DatastoreMetadataFormat } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: DatastoreMetadataFormat = "CURRENCY";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"TEXT" | "NUMBER" | "DATE" | "BOOLEAN" | "FILE" | "TEXTAREA" | "SINGLE_SELECT" | "MULTIPLE_SELECT" | "MEASUREMENT" | "PRICE" | "YES_NO" | "CURRENCY" | "URL" | Unrecognized<string>
```