# HealthcareEncounterStatus

Status of the encounter

## Example Usage

```typescript
import { HealthcareEncounterStatus } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: HealthcareEncounterStatus = "CANCELLED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"PLANNED" | "ARRIVED" | "TRIAGED" | "IN_PROGRESS" | "ONLEAVE" | "FINISHED" | "CANCELLED" | "ENTERED_IN_ERROR" | "UNKNOWN" | "OTHER" | Unrecognized<string>
```