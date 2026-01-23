# Goal

## Example Usage

```typescript
import { Goal } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: Goal = "SALES";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"UNSPECIFIED" | "BRAND_AWARENESS" | "REACH" | "WEBSITE_TRAFFIC" | "LEADS" | "SALES" | "APP_PROMOTION" | Unrecognized<string>
```