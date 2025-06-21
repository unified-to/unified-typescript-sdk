# ScimAddressType

## Example Usage

```typescript
import { ScimAddressType } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: ScimAddressType = "home";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"work" | "home" | "other" | Unrecognized<string>
```