# PropertyFhirPatientCommunicationLanguage

The language which can be used to communicate with the patient (BCP 47)

## Example Usage

```typescript
import { PropertyFhirPatientCommunicationLanguage } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PropertyFhirPatientCommunicationLanguage = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `coding`                                                              | [shared.FhirCoding](../../../sdk/models/shared/fhircoding.md)[]       | :heavy_minus_sign:                                                    | Codes defined by a terminology system                                 |
| `extension`                                                           | [shared.FhirExtension](../../../sdk/models/shared/fhirextension.md)[] | :heavy_minus_sign:                                                    | Extensions, eg. data-absent-reason when a required concept is unknown |
| `text`                                                                | *string*                                                              | :heavy_minus_sign:                                                    | Plain text representation of the concept                              |