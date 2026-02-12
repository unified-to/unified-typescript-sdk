# AssessmentParameter

## Example Usage

```typescript
import { AssessmentParameter } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: AssessmentParameter = {
  name: "<value>",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `fileTypes`                                                                             | *string*[]                                                                              | :heavy_minus_sign:                                                                      | Valid file MIME types for FILE type                                                     |
| `id`                                                                                    | *string*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `isRequired`                                                                            | *boolean*                                                                               | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `name`                                                                                  | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `options`                                                                               | *string*[]                                                                              | :heavy_minus_sign:                                                                      | Options for MULTIPLE_CHOICE and MULTIPLE_SELECT                                         |
| `publicQuestion`                                                                        | *string*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `type`                                                                                  | [shared.AssessmentParameterType](../../../sdk/models/shared/assessmentparametertype.md) | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `validRegions`                                                                          | *string*[]                                                                              | :heavy_minus_sign:                                                                      | Regions where this parameter is valid ({country}-{state} or {country})                  |