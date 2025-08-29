# VerificationParameter

## Example Usage

```typescript
import { VerificationParameter } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: VerificationParameter = {
  name: "<value>",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `fileTypes`                                                                                 | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | valid file mime types                                                                       |
| `id`                                                                                        | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `isRequired`                                                                                | *boolean*                                                                                   | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `name`                                                                                      | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `options`                                                                                   | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | options for MULTIPLE_CHOICE and MULTIPLE_SELECT                                             |
| `publicQuestion`                                                                            | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `type`                                                                                      | [shared.VerificationParameterType](../../../sdk/models/shared/verificationparametertype.md) | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `validRegions`                                                                              | *string*[]                                                                                  | :heavy_minus_sign:                                                                          | {country}-{stateprovince/territory} or just {country} 2-digit ISO codes                     |