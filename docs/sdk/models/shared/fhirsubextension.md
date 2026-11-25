# FhirSubExtension

## Example Usage

```typescript
import { FhirSubExtension } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: FhirSubExtension = {
  url: "https://same-trolley.biz/",
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `url`                                                                                                           | *string*                                                                                                        | :heavy_check_mark:                                                                                              | Identifies the meaning of the extension                                                                         |
| `valueCode`                                                                                                     | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | Value of the extension, as a code                                                                               |
| `valueCoding`                                                                                                   | [shared.PropertyFhirSubExtensionValueCoding](../../../sdk/models/shared/propertyfhirsubextensionvaluecoding.md) | :heavy_minus_sign:                                                                                              | Value of the extension, as a coding                                                                             |
| `valueString`                                                                                                   | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | Value of the extension, as a string                                                                             |