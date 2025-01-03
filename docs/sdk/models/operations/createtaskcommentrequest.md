# CreateTaskCommentRequest

## Example Usage

```typescript
import { CreateTaskCommentRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateTaskCommentRequest = {
  connectionId: "<id>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `taskComment`                                                   | [shared.TaskComment](../../../sdk/models/shared/taskcomment.md) | :heavy_minus_sign:                                              | N/A                                                             |
| `connectionId`                                                  | *string*                                                        | :heavy_check_mark:                                              | ID of the connection                                            |
| `fields`                                                        | *string*[]                                                      | :heavy_minus_sign:                                              | Comma-delimited fields to return                                |