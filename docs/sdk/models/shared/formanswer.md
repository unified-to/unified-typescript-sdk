# FormAnswer

## Example Usage

```typescript
import { FormAnswer } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: FormAnswer = {
  fieldId: "<id>",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `fieldId`                 | *string*                  | :heavy_check_mark:        | N/A                       |
| `fieldName`               | *string*                  | :heavy_minus_sign:        | N/A                       |
| `fileIds`                 | *string*[]                | :heavy_minus_sign:        | references StorageFile ID |
| `value`                   | *string*                  | :heavy_minus_sign:        | N/A                       |