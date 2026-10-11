# SecretsManagerInstructions

## Example Usage

```typescript
import { SecretsManagerInstructions } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: SecretsManagerInstructions = {
  key: "<key>",
  label: "<value>",
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `instructions`                                                                                        | *string*                                                                                              | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `key`                                                                                                 | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `label`                                                                                               | *string*                                                                                              | :heavy_check_mark:                                                                                    | N/A                                                                                                   |
| `type`                                                                                                | [shared.SecretsManagerInstructionsType](../../../sdk/models/shared/secretsmanagerinstructionstype.md) | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |