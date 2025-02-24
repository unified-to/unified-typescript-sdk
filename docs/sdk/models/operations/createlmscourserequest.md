# CreateLmsCourseRequest

## Example Usage

```typescript
import { CreateLmsCourseRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateLmsCourseRequest = {
  lmsCourse: {
    name: "<value>",
  },
  connectionId: "<id>",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `lmsCourse`                                                 | [shared.LmsCourse](../../../sdk/models/shared/lmscourse.md) | :heavy_check_mark:                                          | N/A                                                         |
| `connectionId`                                              | *string*                                                    | :heavy_check_mark:                                          | ID of the connection                                        |
| `fields`                                                    | *string*[]                                                  | :heavy_minus_sign:                                          | Comma-delimited fields to return                            |