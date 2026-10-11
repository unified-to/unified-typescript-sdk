# ScimGroupMember

## Example Usage

```typescript
import { ScimGroupMember } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: ScimGroupMember = {
  value: "<value>",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `dollarRef`                                                                     | *string*                                                                        | :heavy_minus_sign:                                                              | url to user                                                                     |
| `display`                                                                       | *string*                                                                        | :heavy_minus_sign:                                                              | user name                                                                       |
| `operation`                                                                     | [shared.Operation](../../../sdk/models/shared/operation.md)                     | :heavy_minus_sign:                                                              | ONLY USED ON UPDATES                                                            |
| `type`                                                                          | [shared.ScimGroupMemberType](../../../sdk/models/shared/scimgroupmembertype.md) | :heavy_minus_sign:                                                              | NOT STANDARD                                                                    |
| `value`                                                                         | *string*                                                                        | :heavy_check_mark:                                                              | ID of user                                                                      |