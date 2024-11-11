# ScimUser

## Example Usage

```typescript
import { ScimUser } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: ScimUser = {};
```

## Fields

| Field                                                                                                                                                                                     | Type                                                                                                                                                                                      | Required                                                                                                                                                                                  | Description                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `active`                                                                                                                                                                                  | *boolean*                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                        | N/A                                                                                                                                                                                       |
| `addresses`                                                                                                                                                                               | [shared.ScimAddress](../../../sdk/models/shared/scimaddress.md)[]                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                        | N/A                                                                                                                                                                                       |
| `displayName`                                                                                                                                                                             | *string*                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                        | N/A                                                                                                                                                                                       |
| `emails`                                                                                                                                                                                  | [shared.ScimEmail](../../../sdk/models/shared/scimemail.md)[]                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                        | N/A                                                                                                                                                                                       |
| `entitlements`                                                                                                                                                                            | [shared.ScimEntitlement](../../../sdk/models/shared/scimentitlement.md)[]                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                        | N/A                                                                                                                                                                                       |
| `externalId`                                                                                                                                                                              | *string*                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                        | N/A                                                                                                                                                                                       |
| `groups`                                                                                                                                                                                  | [shared.ScimUserGroups](../../../sdk/models/shared/scimusergroups.md)[]                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                        | N/A                                                                                                                                                                                       |
| `id`                                                                                                                                                                                      | *string*                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                        | N/A                                                                                                                                                                                       |
| `ims`                                                                                                                                                                                     | [shared.ScimIms](../../../sdk/models/shared/scimims.md)[]                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                        | N/A                                                                                                                                                                                       |
| `locale`                                                                                                                                                                                  | *string*                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                        | N/A                                                                                                                                                                                       |
| `meta`                                                                                                                                                                                    | [shared.PropertyScimUserMeta](../../../sdk/models/shared/propertyscimusermeta.md)                                                                                                         | :heavy_minus_sign:                                                                                                                                                                        | N/A                                                                                                                                                                                       |
| `name`                                                                                                                                                                                    | [shared.PropertyScimUserName](../../../sdk/models/shared/propertyscimusername.md)                                                                                                         | :heavy_minus_sign:                                                                                                                                                                        | N/A                                                                                                                                                                                       |
| `nickName`                                                                                                                                                                                | *string*                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                        | N/A                                                                                                                                                                                       |
| `password`                                                                                                                                                                                | *string*                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                        | N/A                                                                                                                                                                                       |
| `phoneNumbers`                                                                                                                                                                            | [shared.ScimPhoneNumber](../../../sdk/models/shared/scimphonenumber.md)[]                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                        | N/A                                                                                                                                                                                       |
| `photos`                                                                                                                                                                                  | [shared.ScimPhoto](../../../sdk/models/shared/scimphoto.md)[]                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                        | N/A                                                                                                                                                                                       |
| `preferredLanguage`                                                                                                                                                                       | *string*                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                        | N/A                                                                                                                                                                                       |
| `profileUrl`                                                                                                                                                                              | *string*                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                        | N/A                                                                                                                                                                                       |
| `roles`                                                                                                                                                                                   | [shared.ScimRole](../../../sdk/models/shared/scimrole.md)[]                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                        | Student, Faculty, ...                                                                                                                                                                     |
| `schemas`                                                                                                                                                                                 | [shared.PropertyScimUserSchemas](../../../sdk/models/shared/propertyscimuserschemas.md)[]                                                                                                 | :heavy_minus_sign:                                                                                                                                                                        | N/A                                                                                                                                                                                       |
| `timezone`                                                                                                                                                                                | *string*                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                        | N/A                                                                                                                                                                                       |
| `title`                                                                                                                                                                                   | *string*                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                        | N/A                                                                                                                                                                                       |
| `urnIetfParamsScimSchemasExtensionEnterprise20User`                                                                                                                                       | [shared.PropertyScimUserUrnIetfParamsScimSchemasExtensionEnterprise20User](../../../sdk/models/shared/propertyscimuserurnietfparamsscimschemasextensionenterprise20user.md)               | :heavy_minus_sign:                                                                                                                                                                        | an organization.                                                                                                                                                                          |
| `urnIetfParamsScimSchemasExtensionLatticeAttributes10User`                                                                                                                                | [shared.PropertyScimUserUrnIetfParamsScimSchemasExtensionLatticeAttributes10User](../../../sdk/models/shared/propertyscimuserurnietfparamsscimschemasextensionlatticeattributes10user.md) | :heavy_minus_sign:                                                                                                                                                                        | N/A                                                                                                                                                                                       |
| `urnIetfParamsScimSchemasExtensionPeakon20User`                                                                                                                                           | [shared.PropertyScimUserUrnIetfParamsScimSchemasExtensionPeakon20User](../../../sdk/models/shared/propertyscimuserurnietfparamsscimschemasextensionpeakon20user.md)                       | :heavy_minus_sign:                                                                                                                                                                        | N/A                                                                                                                                                                                       |
| `userName`                                                                                                                                                                                | *string*                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                        | N/A                                                                                                                                                                                       |
| `userType`                                                                                                                                                                                | *string*                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                        | N/A                                                                                                                                                                                       |
| `x509Certificates`                                                                                                                                                                        | [shared.ScimRole](../../../sdk/models/shared/scimrole.md)[]                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                        | N/A                                                                                                                                                                                       |