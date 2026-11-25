# PropertyFhirEncounterClass

Classification of patient encounter

## Example Usage

```typescript
import { PropertyFhirEncounterClass } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PropertyFhirEncounterClass = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `code`                                                                | *string*                                                              | :heavy_minus_sign:                                                    | Classification of patient encounter, eg. AMB, EMER, IMP, VR           |
| `extension`                                                           | [shared.FhirExtension](../../../sdk/models/shared/fhirextension.md)[] | :heavy_minus_sign:                                                    | data-absent-reason when the encounter class is unknown                |
| `system`                                                              | *string*                                                              | :heavy_minus_sign:                                                    | Identity of the terminology system (v3-ActCode)                       |