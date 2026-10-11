# GenaiAnswerProbability

## Example Usage

```typescript
import { GenaiAnswerProbability } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: GenaiAnswerProbability = {
  option: "<value>",
  probability: 9523.72,
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `option`                                          | *string*                                          | :heavy_check_mark:                                | CHOICE: the option; SCORE: the level description. |
| `probability`                                     | *number*                                          | :heavy_check_mark:                                | 0-1                                               |