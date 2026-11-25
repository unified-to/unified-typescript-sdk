# FhirIdentifier

## Example Usage

```typescript
import { FhirIdentifier } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: FhirIdentifier = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `system`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | The namespace for the identifier value                                                        |
| `type`                                                                                        | [shared.PropertyFhirIdentifierType](../../../sdk/models/shared/propertyfhiridentifiertype.md) | :heavy_minus_sign:                                                                            | Description of the identifier (v2-0203 code, eg. MR, NPI)                                     |
| `use`                                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | usual \| official \| temp \| secondary \| old                                                 |
| `value`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | The value that is unique                                                                      |