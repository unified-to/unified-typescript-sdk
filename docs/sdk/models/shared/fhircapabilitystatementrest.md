# FhirCapabilityStatementRest

## Example Usage

```typescript
import { FhirCapabilityStatementRest } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: FhirCapabilityStatementRest = {
  mode: "server",
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `documentation`                                                                                                                 | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | General description of implementation                                                                                           |
| `mode`                                                                                                                          | [shared.Mode](../../../sdk/models/shared/mode.md)                                                                               | :heavy_check_mark:                                                                                                              | server                                                                                                                          |
| `resource`                                                                                                                      | [shared.FhirCapabilityStatementResource](../../../sdk/models/shared/fhircapabilitystatementresource.md)[]                       | :heavy_minus_sign:                                                                                                              | Resource served on the REST interface                                                                                           |
| `security`                                                                                                                      | [shared.PropertyFhirCapabilityStatementRestSecurity](../../../sdk/models/shared/propertyfhircapabilitystatementrestsecurity.md) | :heavy_minus_sign:                                                                                                              | Information about security of implementation                                                                                    |