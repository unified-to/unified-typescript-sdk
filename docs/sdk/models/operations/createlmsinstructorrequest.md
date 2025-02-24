# CreateLmsInstructorRequest

## Example Usage

```typescript
import { CreateLmsInstructorRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateLmsInstructorRequest = {
  lmsInstructor: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `lmsInstructor`                                                     | [shared.LmsInstructor](../../../sdk/models/shared/lmsinstructor.md) | :heavy_check_mark:                                                  | N/A                                                                 |
| `connectionId`                                                      | *string*                                                            | :heavy_check_mark:                                                  | ID of the connection                                                |
| `fields`                                                            | *string*[]                                                          | :heavy_minus_sign:                                                  | Comma-delimited fields to return                                    |