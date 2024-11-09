# UpdateLmsCourseRequest

## Example Usage

```typescript
import { UpdateLmsCourseRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateLmsCourseRequest = {
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `lmsCourse`                                                 | [shared.LmsCourse](../../../sdk/models/shared/lmscourse.md) | :heavy_minus_sign:                                          | N/A                                                         |
| `connectionId`                                              | *string*                                                    | :heavy_check_mark:                                          | ID of the connection                                        |
| `fields`                                                    | *string*[]                                                  | :heavy_minus_sign:                                          | Comma-delimited fields to return                            |
| `id`                                                        | *string*                                                    | :heavy_check_mark:                                          | ID of the Course                                            |