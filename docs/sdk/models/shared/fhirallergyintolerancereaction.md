# FhirAllergyIntoleranceReaction

## Example Usage

```typescript
import { FhirAllergyIntoleranceReaction } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: FhirAllergyIntoleranceReaction = {
  manifestation: [],
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `manifestation`                                                                   | [shared.FhirCodeableConcept](../../../sdk/models/shared/fhircodeableconcept.md)[] | :heavy_check_mark:                                                                | Clinical symptoms/signs associated with the event                                 |