# TaxExemption

## Example Usage

```typescript
import { TaxExemption } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: TaxExemption = "OTHER";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"FEDERAL_GOV" | "REGION_GOV" | "LOCAL_GOV" | "TRIBAL_GOV" | "CHARITABLE_ORG" | "RELIGIOUS_ORG" | "EDUCATIONAL_ORG" | "MEDICAL_ORG" | "RESALE" | "FOREIGN" | "OTHER" | Unrecognized<string>
```