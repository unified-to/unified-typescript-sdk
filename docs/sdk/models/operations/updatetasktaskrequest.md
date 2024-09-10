# UpdateTaskTaskRequest

## Example Usage

```typescript
import { UpdateTaskTaskRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateTaskTaskRequest = {
  connectionId: "<value>",
  id: "<id>",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `taskTask`                                                | [shared.TaskTask](../../../sdk/models/shared/tasktask.md) | :heavy_minus_sign:                                        | N/A                                                       |
| `connectionId`                                            | *string*                                                  | :heavy_check_mark:                                        | ID of the connection                                      |
| `id`                                                      | *string*                                                  | :heavy_check_mark:                                        | ID of the Task                                            |