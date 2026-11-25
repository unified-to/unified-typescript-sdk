# FhirEncounterStatus

planned | arrived | triaged | in-progress | onleave | finished | cancelled | entered-in-error | unknown

## Example Usage

```typescript
import { FhirEncounterStatus } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: FhirEncounterStatus = "onleave";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"planned" | "arrived" | "triaged" | "in-progress" | "onleave" | "finished" | "cancelled" | "entered-in-error" | "unknown" | Unrecognized<string>
```