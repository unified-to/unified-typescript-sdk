# AssessmentAttribute

## Example Usage

```typescript
import { AssessmentAttribute } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: AssessmentAttribute = {
  label: "<value>",
  type: "NUMBER",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `label`                                                                                     | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `reference`                                                                                 | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `scoreMax`                                                                                  | *number*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `scoreValue`                                                                                | *number*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `status`                                                                                    | [shared.AssessmentAttributeStatus](../../../sdk/models/shared/assessmentattributestatus.md) | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `type`                                                                                      | [shared.AssessmentAttributeType](../../../sdk/models/shared/assessmentattributetype.md)     | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `value`                                                                                     | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |