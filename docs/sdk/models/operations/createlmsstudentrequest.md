# CreateLmsStudentRequest

## Example Usage

```typescript
import { CreateLmsStudentRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateLmsStudentRequest = {
  connectionId: "<id>",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `lmsStudent`                                                  | [shared.LmsStudent](../../../sdk/models/shared/lmsstudent.md) | :heavy_minus_sign:                                            | N/A                                                           |
| `connectionId`                                                | *string*                                                      | :heavy_check_mark:                                            | ID of the connection                                          |
| `fields`                                                      | *string*[]                                                    | :heavy_minus_sign:                                            | Comma-delimited fields to return                              |