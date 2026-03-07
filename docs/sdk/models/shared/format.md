# Format

## Example Usage

```typescript
import { Format } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: Format = "NUMBER";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"TEXT" | "NUMBER" | "DATE" | "BOOLEAN" | "FILE" | "TEXTAREA" | "SINGLE_SELECT" | "MULTIPLE_SELECT" | "MEASUREMENT" | "PRICE" | "YES_NO" | "CURRENCY" | "URL" | Unrecognized<string>
```