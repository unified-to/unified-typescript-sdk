# PatchTaskTaskRequest

## Example Usage

```typescript
import { PatchTaskTaskRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchTaskTaskRequest = {
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `taskTask`                                                | [shared.TaskTask](../../../sdk/models/shared/tasktask.md) | :heavy_minus_sign:                                        | N/A                                                       |
| `connectionId`                                            | *string*                                                  | :heavy_check_mark:                                        | ID of the connection                                      |
| `fields`                                                  | *string*[]                                                | :heavy_minus_sign:                                        | Comma-delimited fields to return                          |
| `id`                                                      | *string*                                                  | :heavy_check_mark:                                        | ID of the Task                                            |