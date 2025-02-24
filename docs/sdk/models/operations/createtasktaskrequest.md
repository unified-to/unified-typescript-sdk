# CreateTaskTaskRequest

## Example Usage

```typescript
import { CreateTaskTaskRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateTaskTaskRequest = {
  taskTask: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `taskTask`                                                | [shared.TaskTask](../../../sdk/models/shared/tasktask.md) | :heavy_check_mark:                                        | N/A                                                       |
| `connectionId`                                            | *string*                                                  | :heavy_check_mark:                                        | ID of the connection                                      |
| `fields`                                                  | *string*[]                                                | :heavy_minus_sign:                                        | Comma-delimited fields to return                          |