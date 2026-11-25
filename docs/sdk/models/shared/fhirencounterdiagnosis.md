# FhirEncounterDiagnosis

## Example Usage

```typescript
import { FhirEncounterDiagnosis } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: FhirEncounterDiagnosis = {
  condition: {},
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `condition`                                                                                                             | [shared.PropertyFhirEncounterDiagnosisCondition](../../../sdk/models/shared/propertyfhirencounterdiagnosiscondition.md) | :heavy_check_mark:                                                                                                      | The diagnosis or procedure relevant to the encounter (Condition reference)                                              |