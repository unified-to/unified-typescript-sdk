# UpdateTaskProjectRequest

## Example Usage

```typescript
import { UpdateTaskProjectRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateTaskProjectRequest = {
  connectionId: "<value>",
  id: "<id>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `taskProject`                                                   | [shared.TaskProject](../../../sdk/models/shared/taskproject.md) | :heavy_minus_sign:                                              | N/A                                                             |
| `connectionId`                                                  | *string*                                                        | :heavy_check_mark:                                              | ID of the connection                                            |
| `id`                                                            | *string*                                                        | :heavy_check_mark:                                              | ID of the Project                                               |