# UpdateScimGroupsRequest

## Example Usage

```typescript
import { UpdateScimGroupsRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateScimGroupsRequest = {
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `scimGroup`                                                 | [shared.ScimGroup](../../../sdk/models/shared/scimgroup.md) | :heavy_minus_sign:                                          | N/A                                                         |
| `connectionId`                                              | *string*                                                    | :heavy_check_mark:                                          | ID of the connection                                        |
| `id`                                                        | *string*                                                    | :heavy_check_mark:                                          | ID of the Group                                             |