# UpdateCommerceInventoryRequest

## Example Usage

```typescript
import { UpdateCommerceInventoryRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateCommerceInventoryRequest = {
    connectionId: "<value>",
    id: "<id>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `commerceInventory`                                                         | [shared.CommerceInventory](../../../sdk/models/shared/commerceinventory.md) | :heavy_minus_sign:                                                          | N/A                                                                         |
| `connectionId`                                                              | *string*                                                                    | :heavy_check_mark:                                                          | ID of the connection                                                        |
| `id`                                                                        | *string*                                                                    | :heavy_check_mark:                                                          | ID of the Inventory                                                         |