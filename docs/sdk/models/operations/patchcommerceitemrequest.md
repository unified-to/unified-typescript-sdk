# PatchCommerceItemRequest

## Example Usage

```typescript
import { PatchCommerceItemRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchCommerceItemRequest = {
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `commerceItem`                                                    | [shared.CommerceItem](../../../sdk/models/shared/commerceitem.md) | :heavy_minus_sign:                                                | N/A                                                               |
| `connectionId`                                                    | *string*                                                          | :heavy_check_mark:                                                | ID of the connection                                              |
| `fields`                                                          | *string*[]                                                        | :heavy_minus_sign:                                                | Comma-delimited fields to return                                  |
| `id`                                                              | *string*                                                          | :heavy_check_mark:                                                | ID of the Item                                                    |