# PatchHrisGroupRequest

## Example Usage

```typescript
import { PatchHrisGroupRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchHrisGroupRequest = {
  hrisGroup: {},
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `hrisGroup`                                                 | [shared.HrisGroup](../../../sdk/models/shared/hrisgroup.md) | :heavy_check_mark:                                          | N/A                                                         |
| `connectionId`                                              | *string*                                                    | :heavy_check_mark:                                          | ID of the connection                                        |
| `fields`                                                    | *string*[]                                                  | :heavy_minus_sign:                                          | Comma-delimited fields to return                            |
| `id`                                                        | *string*                                                    | :heavy_check_mark:                                          | ID of the Group                                             |