# GenaiAnswer

## Example Usage

```typescript
import { GenaiAnswer } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: GenaiAnswer = {
  id: "<id>",
  type: "SCORE",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `confidence`                                                                                        | *number*                                                                                            | :heavy_minus_sign:                                                                                  | 0-1: how certain the model is of the answer.                                                        |
| `id`                                                                                                | *string*                                                                                            | :heavy_check_mark:                                                                                  | The id of the genai_prompt question that this answers.                                              |
| `probabilities`                                                                                     | [shared.GenaiAnswerProbability](../../../sdk/models/shared/genaianswerprobability.md)[]             | :heavy_minus_sign:                                                                                  | CHOICE/SCORE: the probability of every option or level.                                             |
| `score`                                                                                             | *number*                                                                                            | :heavy_minus_sign:                                                                                  | SCORE: the probability-weighted level index; BOOLEAN: the probability (0-1) that the answer is yes. |
| `type`                                                                                              | [shared.GenaiAnswerType](../../../sdk/models/shared/genaianswertype.md)                             | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `value`                                                                                             | *string*                                                                                            | :heavy_minus_sign:                                                                                  | CHOICE: the selected option.                                                                        |