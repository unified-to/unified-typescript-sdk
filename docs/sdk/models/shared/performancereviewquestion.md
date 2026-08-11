# PerformanceReviewQuestion

## Example Usage

```typescript
import { PerformanceReviewQuestion } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PerformanceReviewQuestion = {
  question: "<value>",
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `answers`                                                                                           | *string*[]                                                                                          | :heavy_minus_sign:                                                                                  | all answer values; single-answer questions have one element                                         |
| `description`                                                                                       | *string*                                                                                            | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `question`                                                                                          | *string*                                                                                            | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `type`                                                                                              | [shared.PerformanceReviewQuestionType](../../../sdk/models/shared/performancereviewquestiontype.md) | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |