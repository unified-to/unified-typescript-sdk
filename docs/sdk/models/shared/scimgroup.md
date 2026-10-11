# ScimGroup

## Example Usage

```typescript
import { ScimGroup } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: ScimGroup = {
  displayName: "Delores_Wilderman24",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `displayName`                                                                               | *string*                                                                                    | :heavy_check_mark:                                                                          | The group's display name                                                                    |
| `externalId`                                                                                | *string*                                                                                    | :heavy_minus_sign:                                                                          | A groups id in an external system                                                           |
| `groupType`                                                                                 | *string*                                                                                    | :heavy_minus_sign:                                                                          | Organization [NOT STANDARD]                                                                 |
| `id`                                                                                        | *string*                                                                                    | :heavy_minus_sign:                                                                          | The group's unique id                                                                       |
| `members`                                                                                   | [shared.ScimGroupMember](../../../sdk/models/shared/scimgroupmember.md)[]                   | :heavy_minus_sign:                                                                          | An array of members                                                                         |
| `meta`                                                                                      | [shared.PropertyScimGroupMeta](../../../sdk/models/shared/propertyscimgroupmeta.md)         | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `schemas`                                                                                   | [shared.PropertyScimGroupSchemas](../../../sdk/models/shared/propertyscimgroupschemas.md)[] | :heavy_minus_sign:                                                                          | Array of schema URIs                                                                        |