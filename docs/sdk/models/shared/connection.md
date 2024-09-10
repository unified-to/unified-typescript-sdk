# Connection

A connection represents a specific authentication of an integration.

## Example Usage

```typescript
import { Connection } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: Connection = {
  categories: [
    "ticketing",
  ],
  integrationType: "<value>",
  permissions: [
    "crm_contact_read",
  ],
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `auth`                                                                                                | [shared.PropertyConnectionAuth](../../../sdk/models/shared/propertyconnectionauth.md)                 | :heavy_minus_sign:                                                                                    | An authentication object that represents a specific authorized user's connection to an integration.   |
| `authAwsArn`                                                                                          | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `categories`                                                                                          | [shared.PropertyConnectionCategories](../../../sdk/models/shared/propertyconnectioncategories.md)[]   | :heavy_check_mark:                                                                                    | The Integration categories that this connection supports                                              |
| `createdAt`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `cursorsCache`                                                                                        | Record<string, *any*>[]                                                                               | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `environment`                                                                                         | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `externalXref`                                                                                        | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `id`                                                                                                  | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `integrationType`                                                                                     | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `isPaused`                                                                                            | *boolean*                                                                                             | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `lastHealthyAt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `lastUnhealthyAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `permissions`                                                                                         | [shared.PropertyConnectionPermissions](../../../sdk/models/shared/propertyconnectionpermissions.md)[] | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `updatedAt`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)         | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `workspaceId`                                                                                         | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |