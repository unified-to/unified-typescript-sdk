# FhirPatientCommunication

## Example Usage

```typescript
import { FhirPatientCommunication } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: FhirPatientCommunication = {
  language: {},
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `language`                                                                                                                | [shared.PropertyFhirPatientCommunicationLanguage](../../../sdk/models/shared/propertyfhirpatientcommunicationlanguage.md) | :heavy_check_mark:                                                                                                        | The language which can be used to communicate with the patient (BCP 47)                                                   |
| `preferred`                                                                                                               | *boolean*                                                                                                                 | :heavy_minus_sign:                                                                                                        | Language preference indicator                                                                                             |