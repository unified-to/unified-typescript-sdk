# Origin

## Example Usage

```typescript
import { Origin } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: Origin = "AGENCY";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"AGENCY" | "APPLIED" | "INTERNAL" | "REFERRED" | "SOURCED" | "UNIVERSITY" | Unrecognized<string>
```