# GenaiQuestion

## Example Usage

```typescript
import { GenaiQuestion } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: GenaiQuestion = {
  id: "<id>",
  instructions: "<value>",
  type: "BOOLEAN",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `id`                                                                          | *string*                                                                      | :heavy_check_mark:                                                            | A caller-chosen key; the matching answer is returned with the same id.        |
| `instructions`                                                                | *string*                                                                      | :heavy_check_mark:                                                            | The question to evaluate.                                                     |
| `options`                                                                     | *string*[]                                                                    | :heavy_minus_sign:                                                            | CHOICE: the options to select from; SCORE: the ordered levels (lowest first). |
| `type`                                                                        | [shared.GenaiQuestionType](../../../sdk/models/shared/genaiquestiontype.md)   | :heavy_check_mark:                                                            | N/A                                                                           |