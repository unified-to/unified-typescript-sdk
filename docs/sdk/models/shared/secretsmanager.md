# SecretsManager

## Example Usage

```typescript
import { SecretsManager } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: SecretsManager = {
  auth: {
    "key": "<value>",
    "key1": "<value>",
    "key2": "<value>",
  },
  name: "<value>",
  type: "composio",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `auth`                                                                                        | Record<string, *string*>                                                                      | :heavy_check_mark:                                                                            | secrets-manager specific authentication values                                                |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `dcs`                                                                                         | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | data-regions                                                                                  |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | [shared.SecretsManagerType](../../../sdk/models/shared/secretsmanagertype.md)                 | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `workspaceId`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |