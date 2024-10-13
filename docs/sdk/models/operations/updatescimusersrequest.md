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

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `user`                                            | [shared.User](../../../sdk/models/shared/user.md) | :heavy_minus_sign:                                | N/A                                               |
| `connectionId`                                    | *string*                                          | :heavy_check_mark:                                | ID of the connection                              |
| `id`                                              | *string*                                          | :heavy_check_mark:                                | ID of the User                                    |