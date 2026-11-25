# PropertyFhirEncounterParticipantIndividual

Persons involved in the encounter (Practitioner references)

## Example Usage

```typescript
import { PropertyFhirEncounterParticipantIndividual } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PropertyFhirEncounterParticipantIndividual = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `display`                                                               | *string*                                                                | :heavy_minus_sign:                                                      | Text alternative for the resource                                       |
| `extension`                                                             | [shared.FhirExtension](../../../sdk/models/shared/fhirextension.md)[]   | :heavy_minus_sign:                                                      | Extensions, eg. data-absent-reason when a required reference is unknown |
| `reference`                                                             | *string*                                                                | :heavy_minus_sign:                                                      | Relative reference, eg. Patient/123                                     |