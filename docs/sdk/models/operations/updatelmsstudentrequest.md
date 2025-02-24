# UpdateLmsStudentRequest

## Example Usage

```typescript
import { UpdateLmsStudentRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateLmsStudentRequest = {
  lmsStudent: {},
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `lmsStudent`                                                  | [shared.LmsStudent](../../../sdk/models/shared/lmsstudent.md) | :heavy_check_mark:                                            | N/A                                                           |
| `connectionId`                                                | *string*                                                      | :heavy_check_mark:                                            | ID of the connection                                          |
| `fields`                                                      | *string*[]                                                    | :heavy_minus_sign:                                            | Comma-delimited fields to return                              |
| `id`                                                          | *string*                                                      | :heavy_check_mark:                                            | ID of the Student                                             |