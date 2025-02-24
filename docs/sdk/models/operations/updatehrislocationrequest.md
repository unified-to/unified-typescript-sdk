# UpdateHrisLocationRequest

## Example Usage

```typescript
import { UpdateHrisLocationRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateHrisLocationRequest = {
  hrisLocation: {},
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `hrisLocation`                                                    | [shared.HrisLocation](../../../sdk/models/shared/hrislocation.md) | :heavy_check_mark:                                                | N/A                                                               |
| `connectionId`                                                    | *string*                                                          | :heavy_check_mark:                                                | ID of the connection                                              |
| `fields`                                                          | *string*[]                                                        | :heavy_minus_sign:                                                | Comma-delimited fields to return                                  |
| `id`                                                              | *string*                                                          | :heavy_check_mark:                                                | ID of the Location                                                |