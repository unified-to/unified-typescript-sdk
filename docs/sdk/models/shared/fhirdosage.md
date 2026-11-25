# FhirDosage

## Example Usage

```typescript
import { FhirDosage } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: FhirDosage = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `doseAndRate`                                                                           | [shared.FhirDoseAndRate](../../../sdk/models/shared/fhirdoseandrate.md)[]               | :heavy_minus_sign:                                                                      | Amount of medication administered                                                       |
| `route`                                                                                 | [shared.PropertyFhirDosageRoute](../../../sdk/models/shared/propertyfhirdosageroute.md) | :heavy_minus_sign:                                                                      | How drug should enter body                                                              |
| `text`                                                                                  | *string*                                                                                | :heavy_minus_sign:                                                                      | Free text dosage instructions e.g. SIG                                                  |