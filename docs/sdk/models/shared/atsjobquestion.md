# AtsJobQuestion

## Example Usage

```typescript
import { AtsJobQuestion } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: AtsJobQuestion = {
    question: "<value>",
    type: "URL",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `description`                                                                 | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `id`                                                                          | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `options`                                                                     | *string*[]                                                                    | :heavy_minus_sign:                                                            | N/A                                                                           |
| `prompt`                                                                      | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `question`                                                                    | *string*                                                                      | :heavy_check_mark:                                                            | N/A                                                                           |
| `required`                                                                    | *boolean*                                                                     | :heavy_minus_sign:                                                            | N/A                                                                           |
| `type`                                                                        | [shared.AtsJobQuestionType](../../../sdk/models/shared/atsjobquestiontype.md) | :heavy_check_mark:                                                            | N/A                                                                           |