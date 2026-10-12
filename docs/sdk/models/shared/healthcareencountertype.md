# HealthcareEncounterType

Class of the encounter (e.g. ambulatory, inpatient)

## Example Usage

```typescript
import { HealthcareEncounterType } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: HealthcareEncounterType = "OBSERVATION";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"AMBULATORY" | "EMERGENCY" | "INPATIENT" | "OBSERVATION" | "HOME_HEALTH" | "VIRTUAL" | "OTHER" | Unrecognized<string>
```