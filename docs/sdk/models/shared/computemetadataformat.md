# ComputeMetadataFormat

The data type of the value

## Example Usage

```typescript
import { ComputeMetadataFormat } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: ComputeMetadataFormat = "DATE";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"TEXT" | "NUMBER" | "DATE" | "BOOLEAN" | "ARRAY" | "OBJECT" | Unrecognized<string>
```