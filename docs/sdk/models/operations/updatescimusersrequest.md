# UpdateScimUsersRequest

## Example Usage

```typescript
import { UpdateScimUsersRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateScimUsersRequest = {
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `scimUser`                                                | [shared.ScimUser](../../../sdk/models/shared/scimuser.md) | :heavy_minus_sign:                                        | N/A                                                       |
| `connectionId`                                            | *string*                                                  | :heavy_check_mark:                                        | ID of the connection                                      |
| `id`                                                      | *string*                                                  | :heavy_check_mark:                                        | ID of the User                                            |