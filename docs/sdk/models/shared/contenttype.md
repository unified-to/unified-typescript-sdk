# ContentType

## Example Usage

```typescript
import { ContentType } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: ContentType = "OTHER";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"HTML" | "MARKDOWN" | "TEXT" | "OTHER" | Unrecognized<string>
```