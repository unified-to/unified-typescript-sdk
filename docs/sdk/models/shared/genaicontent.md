# GenaiContent

## Example Usage

```typescript
import { GenaiContent } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: GenaiContent = {
  content: "<value>",
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `content`                                                                                                                             | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | N/A                                                                                                                                   |
| `images`                                                                                                                              | *string*[]                                                                                                                            | :heavy_minus_sign:                                                                                                                    | Images for the model to evaluate with this message, as base64 data URLs (data:image/png;base64,...). Only for models with has_vision. |
| `role`                                                                                                                                | [shared.Role](../../../sdk/models/shared/role.md)                                                                                     | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   |