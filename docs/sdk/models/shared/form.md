# Form

withholding form the values come from (eg. 2020+ W-4)

## Example Usage

```typescript
import { Form } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: Form = "OTHER";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"W4_2020" | "W4_LEGACY" | "STATE_FORM" | "TD1" | "OTHER" | Unrecognized<string>
```