# CreateScimGroupsRequest

## Example Usage

```typescript
import { CreateScimGroupsRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateScimGroupsRequest = {
  connectionId: "<id>",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `group`                                             | [shared.Group](../../../sdk/models/shared/group.md) | :heavy_minus_sign:                                  | N/A                                                 |
| `connectionId`                                      | *string*                                            | :heavy_check_mark:                                  | ID of the connection                                |