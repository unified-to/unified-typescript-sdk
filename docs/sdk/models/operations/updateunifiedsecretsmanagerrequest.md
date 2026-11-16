# UpdateUnifiedSecretsmanagerRequest

## Example Usage

```typescript
import { UpdateUnifiedSecretsmanagerRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateUnifiedSecretsmanagerRequest = {
  secretsManager: {
    auth: {},
    name: "<value>",
    type: "1password",
  },
  id: "<id>",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `secretsManager`                                                      | [shared.SecretsManager](../../../sdk/models/shared/secretsmanager.md) | :heavy_check_mark:                                                    | N/A                                                                   |
| `id`                                                                  | *string*                                                              | :heavy_check_mark:                                                    | ID of the Secretsmanager                                              |