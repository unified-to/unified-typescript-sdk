# EnrichTelephoneType

## Example Usage

```typescript
import { EnrichTelephoneType } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: EnrichTelephoneType = "HOME";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"WORK" | "HOME" | "OTHER" | "FAX" | "MOBILE" | Unrecognized<string>
```