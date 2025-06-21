# Priority

## Example Usage

```typescript
import { Priority } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: Priority = "MEDIUM";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"HIGH" | "MEDIUM" | "LOW" | Unrecognized<string>
```