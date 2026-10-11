# ScimManager

"id" attribute of another User.

## Example Usage

```typescript
import { ScimManager } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: ScimManager = {};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `dollarRef`                                                                                       | *string*                                                                                          | :heavy_minus_sign:                                                                                | The URI of the SCIM resource representing the User's manager.  RECOMMENDED.                       |
| `displayName`                                                                                     | *string*                                                                                          | :heavy_minus_sign:                                                                                | The displayName of the user's manager.  This attribute is OPTIONAL, and mutability is "readOnly". |
| `managerId`                                                                                       | *string*                                                                                          | :heavy_minus_sign:                                                                                | alias for value?                                                                                  |
| `type`                                                                                            | [shared.ScimManagerType](../../../sdk/models/shared/scimmanagertype.md)                           | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `value`                                                                                           | *string*                                                                                          | :heavy_minus_sign:                                                                                | The "id" of the SCIM resource representing the user's manager.  RECOMMENDED.                      |