# PatchHrisGroupRequest

## Example Usage

```typescript
import { PatchHrisGroupRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchHrisGroupRequest = {
    connectionId: "<value>",
    id: "<id>",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `hrisGroup`                                                 | [shared.HrisGroup](../../../sdk/models/shared/hrisgroup.md) | :heavy_minus_sign:                                          | N/A                                                         |
| `connectionId`                                              | *string*                                                    | :heavy_check_mark:                                          | ID of the connection                                        |
| `id`                                                        | *string*                                                    | :heavy_check_mark:                                          | ID of the Group                                             |