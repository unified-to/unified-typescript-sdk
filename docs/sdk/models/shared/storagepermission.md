# StoragePermission

## Example Usage

```typescript
import { StoragePermission } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: StoragePermission = {
  roles: [
    "READ",
  ],
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `groupId`                                                                                               | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |
| `roles`                                                                                                 | [shared.PropertyStoragePermissionRoles](../../../sdk/models/shared/propertystoragepermissionroles.md)[] | :heavy_check_mark:                                                                                      | N/A                                                                                                     |
| `userId`                                                                                                | *string*                                                                                                | :heavy_minus_sign:                                                                                      | N/A                                                                                                     |