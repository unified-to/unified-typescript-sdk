# PropertyFhirObservationDataAbsentReason

Why the result is missing

## Example Usage

```typescript
import { PropertyFhirObservationDataAbsentReason } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PropertyFhirObservationDataAbsentReason = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `coding`                                                              | [shared.FhirCoding](../../../sdk/models/shared/fhircoding.md)[]       | :heavy_minus_sign:                                                    | Codes defined by a terminology system                                 |
| `extension`                                                           | [shared.FhirExtension](../../../sdk/models/shared/fhirextension.md)[] | :heavy_minus_sign:                                                    | Extensions, eg. data-absent-reason when a required concept is unknown |
| `text`                                                                | *string*                                                              | :heavy_minus_sign:                                                    | Plain text representation of the concept                              |