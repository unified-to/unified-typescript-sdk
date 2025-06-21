# Gender

## Example Usage

```typescript
import { Gender } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: Gender = "MALE";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"MALE" | "FEMALE" | Unrecognized<string>
```