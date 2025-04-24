# CreateCommerceInventoryRequest

## Example Usage

```typescript
import { CreateCommerceInventoryRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateCommerceInventoryRequest = {
  commerceInventory: {
    available: 6178.77,
  },
  connectionId: "<id>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `commerceInventory`                                                         | [shared.CommerceInventory](../../../sdk/models/shared/commerceinventory.md) | :heavy_check_mark:                                                          | N/A                                                                         |
| `connectionId`                                                              | *string*                                                                    | :heavy_check_mark:                                                          | ID of the connection                                                        |
| `fields`                                                                    | *string*[]                                                                  | :heavy_minus_sign:                                                          | Comma-delimited fields to return                                            |