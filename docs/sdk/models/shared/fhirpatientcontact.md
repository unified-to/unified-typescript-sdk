# FhirPatientContact

## Example Usage

```typescript
import { FhirPatientContact } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: FhirPatientContact = {};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `address`                                                                                                   | [shared.PropertyFhirPatientContactAddress](../../../sdk/models/shared/propertyfhirpatientcontactaddress.md) | :heavy_minus_sign:                                                                                          | Address for the contact person                                                                              |
| `name`                                                                                                      | [shared.PropertyFhirPatientContactName](../../../sdk/models/shared/propertyfhirpatientcontactname.md)       | :heavy_minus_sign:                                                                                          | A name associated with the contact person                                                                   |
| `relationship`                                                                                              | [shared.FhirCodeableConcept](../../../sdk/models/shared/fhircodeableconcept.md)[]                           | :heavy_minus_sign:                                                                                          | The kind of relationship                                                                                    |
| `telecom`                                                                                                   | [shared.FhirContactPoint](../../../sdk/models/shared/fhircontactpoint.md)[]                                 | :heavy_minus_sign:                                                                                          | A contact detail for the person                                                                             |