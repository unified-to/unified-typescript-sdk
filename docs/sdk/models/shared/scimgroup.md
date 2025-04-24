# ScimGroup

## Example Usage

```typescript
import { ScimGroup } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: ScimGroup = {
  displayName: "Matilda_Kuvalis",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `displayName`                                                                               | *string*                                                                                    | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `externalId`                                                                                | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `groupType`                                                                                 | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `id`                                                                                        | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `members`                                                                                   | [shared.ScimGroupMember](../../../sdk/models/shared/scimgroupmember.md)[]                   | :heavy_minus_sign:                                                                          | An array of members                                                                         |
| `meta`                                                                                      | [shared.PropertyScimGroupMeta](../../../sdk/models/shared/propertyscimgroupmeta.md)         | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `schemas`                                                                                   | [shared.PropertyScimGroupSchemas](../../../sdk/models/shared/propertyscimgroupschemas.md)[] | :heavy_minus_sign:                                                                          | Array of schema URIs                                                                        |