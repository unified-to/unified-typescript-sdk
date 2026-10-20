# FormsSubmission

## Example Usage

```typescript
import { FormsSubmission } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: FormsSubmission = {
  answers: [],
  formId: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `answers`                                                                                     | [shared.FormAnswer](../../../sdk/models/shared/formanswer.md)[]                               | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | (ISO-8601 / YYYY-MM-DDTHH:MM:SSZ format)                                                      |
| `formId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | [shared.FormsMetadata](../../../sdk/models/shared/formsmetadata.md)[]                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `raw`                                                                                         | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `respondentEmail`                                                                             | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `respondentName`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | (ISO-8601 / YYYY-MM-DDTHH:MM:SSZ format)                                                      |