# CreateTaskProjectRequest

## Example Usage

```typescript
import { CreateTaskProjectRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateTaskProjectRequest = {
  connectionId: "<id>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `taskProject`                                                   | [shared.TaskProject](../../../sdk/models/shared/taskproject.md) | :heavy_minus_sign:                                              | N/A                                                             |
| `connectionId`                                                  | *string*                                                        | :heavy_check_mark:                                              | ID of the connection                                            |
| `fields`                                                        | *string*[]                                                      | :heavy_minus_sign:                                              | Comma-delimited fields to return                                |