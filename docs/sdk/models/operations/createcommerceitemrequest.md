# CreateCommerceItemRequest

## Example Usage

```typescript
import { CreateCommerceItemRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateCommerceItemRequest = {
  commerceItem: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `commerceItem`                                                    | [shared.CommerceItem](../../../sdk/models/shared/commerceitem.md) | :heavy_check_mark:                                                | N/A                                                               |
| `connectionId`                                                    | *string*                                                          | :heavy_check_mark:                                                | ID of the connection                                              |
| `fields`                                                          | *string*[]                                                        | :heavy_minus_sign:                                                | Comma-delimited fields to return                                  |