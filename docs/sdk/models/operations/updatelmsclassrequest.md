# UpdateLmsClassRequest

## Example Usage

```typescript
import { UpdateLmsClassRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateLmsClassRequest = {
  lmsClass: {
    courseId: "<id>",
    name: "<value>",
  },
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `lmsClass`                                                | [shared.LmsClass](../../../sdk/models/shared/lmsclass.md) | :heavy_check_mark:                                        | N/A                                                       |
| `connectionId`                                            | *string*                                                  | :heavy_check_mark:                                        | ID of the connection                                      |
| `fields`                                                  | *string*[]                                                | :heavy_minus_sign:                                        | Comma-delimited fields to return                          |
| `id`                                                      | *string*                                                  | :heavy_check_mark:                                        | ID of the Class                                           |