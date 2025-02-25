# CreateScimGroupsRequest

## Example Usage

```typescript
import { CreateScimGroupsRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateScimGroupsRequest = {
  scimGroup: {
    displayName: "Stone_Lueilwitz96",
  },
  connectionId: "<id>",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `scimGroup`                                                 | [shared.ScimGroup](../../../sdk/models/shared/scimgroup.md) | :heavy_check_mark:                                          | N/A                                                         |
| `connectionId`                                              | *string*                                                    | :heavy_check_mark:                                          | ID of the connection                                        |