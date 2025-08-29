# ProfileGender

## Example Usage

```typescript
import { ProfileGender } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: ProfileGender = "MALE";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"MALE" | "FEMALE" | "INTERSEX" | "TRANS" | "NON_BINARY" | Unrecognized<string>
```