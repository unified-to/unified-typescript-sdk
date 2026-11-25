# FhirObservationComponent

## Example Usage

```typescript
import { FhirObservationComponent } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: FhirObservationComponent = {
  code: {},
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                                              | [shared.PropertyFhirObservationComponentCode](../../../sdk/models/shared/propertyfhirobservationcomponentcode.md)                   | :heavy_check_mark:                                                                                                                  | Type of component observation (code / type)                                                                                         |
| `interpretation`                                                                                                                    | [shared.FhirCodeableConcept](../../../sdk/models/shared/fhircodeableconcept.md)[]                                                   | :heavy_minus_sign:                                                                                                                  | High, low, normal, etc. (v3-ObservationInterpretation)                                                                              |
| `valueQuantity`                                                                                                                     | [shared.PropertyFhirObservationComponentValueQuantity](../../../sdk/models/shared/propertyfhirobservationcomponentvaluequantity.md) | :heavy_minus_sign:                                                                                                                  | Actual component result, as a quantity                                                                                              |
| `valueString`                                                                                                                       | *string*                                                                                                                            | :heavy_minus_sign:                                                                                                                  | Actual component result, as text                                                                                                    |