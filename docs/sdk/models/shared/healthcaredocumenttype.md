# HealthcareDocumentType

Unified, normalized kind of clinical document (OTHER when unmappable)

## Example Usage

```typescript
import { HealthcareDocumentType } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: HealthcareDocumentType = "PROGRESS_NOTE";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"PROGRESS_NOTE" | "CONSULTATION_NOTE" | "HISTORY_AND_PHYSICAL" | "DISCHARGE_SUMMARY" | "PROCEDURE_NOTE" | "REFERRAL_NOTE" | "SUMMARY" | "LABORATORY_REPORT" | "IMAGING_REPORT" | "CONSENT" | "OTHER" | Unrecognized<string>
```