# PatchScimGroupsRequest

## Example Usage

```typescript
import { PatchScimGroupsRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchScimGroupsRequest = {
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `group`                                             | [shared.Group](../../../sdk/models/shared/group.md) | :heavy_minus_sign:                                  | N/A                                                 |
| `connectionId`                                      | *string*                                            | :heavy_check_mark:                                  | ID of the connection                                |
| `id`                                                | *string*                                            | :heavy_check_mark:                                  | ID of the Group                                     |