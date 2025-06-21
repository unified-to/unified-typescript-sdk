# CommerceMetadataFormat

## Example Usage

```typescript
import { CommerceMetadataFormat } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: CommerceMetadataFormat = "MULTIPLE_SELECT";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"TEXT" | "NUMBER" | "DATE" | "BOOLEAN" | "FILE" | "TEXTAREA" | "SINGLE_SELECT" | "MULTIPLE_SELECT" | "MEASUREMENT" | "PRICE" | "YES_NO" | "CURRENCY" | "URL" | Unrecognized<string>
```