# PropertyFhirMedicationRequestDispenseRequest

Medication supply authorization

## Example Usage

```typescript
import { PropertyFhirMedicationRequestDispenseRequest } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PropertyFhirMedicationRequestDispenseRequest = {};
```

## Fields

| Field                                                                                                                                                         | Type                                                                                                                                                          | Required                                                                                                                                                      | Description                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `numberOfRepeatsAllowed`                                                                                                                                      | *number*                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                            | Number of refills authorized                                                                                                                                  |
| `validityPeriod`                                                                                                                                              | [shared.PropertyFhirMedicationRequestDispenseRequestValidityPeriod](../../../sdk/models/shared/propertyfhirmedicationrequestdispenserequestvalidityperiod.md) | :heavy_minus_sign:                                                                                                                                            | Time period supply is authorized for                                                                                                                          |