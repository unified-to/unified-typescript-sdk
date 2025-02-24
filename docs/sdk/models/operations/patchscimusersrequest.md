# PatchScimUsersRequest

## Example Usage

```typescript
import { PatchScimUsersRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchScimUsersRequest = {
  scimUser: {},
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `scimUser`                                                | [shared.ScimUser](../../../sdk/models/shared/scimuser.md) | :heavy_check_mark:                                        | N/A                                                       |
| `connectionId`                                            | *string*                                                  | :heavy_check_mark:                                        | ID of the connection                                      |
| `id`                                                      | *string*                                                  | :heavy_check_mark:                                        | ID of the User                                            |