# UpdateHrisEmployeeRequest

## Example Usage

```typescript
import { UpdateHrisEmployeeRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateHrisEmployeeRequest = {
  hrisEmployee: {},
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `hrisEmployee`                                                    | [shared.HrisEmployee](../../../sdk/models/shared/hrisemployee.md) | :heavy_check_mark:                                                | N/A                                                               |
| `connectionId`                                                    | *string*                                                          | :heavy_check_mark:                                                | ID of the connection                                              |
| `fields`                                                          | *string*[]                                                        | :heavy_minus_sign:                                                | Comma-delimited fields to return                                  |
| `id`                                                              | *string*                                                          | :heavy_check_mark:                                                | ID of the Employee                                                |