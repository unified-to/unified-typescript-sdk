# FhirExtension

## Example Usage

```typescript
import { FhirExtension } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: FhirExtension = {
  url: "https://worldly-peninsula.name",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `extension`                                                                                               | [shared.FhirSubExtension](../../../sdk/models/shared/fhirsubextension.md)[]                               | :heavy_minus_sign:                                                                                        | Nested extensions (eg. the ombCategory, detailed and text parts of US Core race)                          |
| `url`                                                                                                     | *string*                                                                                                  | :heavy_check_mark:                                                                                        | Identifies the meaning of the extension                                                                   |
| `valueCode`                                                                                               | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | Value of the extension, as a code (eg. unknown for data-absent-reason)                                    |
| `valueCoding`                                                                                             | [shared.PropertyFhirExtensionValueCoding](../../../sdk/models/shared/propertyfhirextensionvaluecoding.md) | :heavy_minus_sign:                                                                                        | Value of the extension, as a coding                                                                       |
| `valueString`                                                                                             | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | Value of the extension, as a string                                                                       |