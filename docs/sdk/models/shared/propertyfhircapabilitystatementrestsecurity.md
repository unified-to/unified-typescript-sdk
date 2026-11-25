# PropertyFhirCapabilityStatementRestSecurity

Information about security of implementation

## Example Usage

```typescript
import { PropertyFhirCapabilityStatementRestSecurity } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PropertyFhirCapabilityStatementRestSecurity = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `description`                                                                     | *string*                                                                          | :heavy_minus_sign:                                                                | General description of how security works                                         |
| `service`                                                                         | [shared.FhirCodeableConcept](../../../sdk/models/shared/fhircodeableconcept.md)[] | :heavy_minus_sign:                                                                | Security services supported (SMART-on-FHIR)                                       |