# ShippingShipmentLineitem

## Example Usage

```typescript
import { ShippingShipmentLineitem } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: ShippingShipmentLineitem = {};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `id`                                                                                            | *string*                                                                                        | :heavy_minus_sign:                                                                              | Unique identifier for this fulfillment line                                                     |
| `itemId`                                                                                        | *string*                                                                                        | :heavy_minus_sign:                                                                              | Reference to the CommerceItem being fulfilled (reference to CommerceItem)                       |
| `itemName`                                                                                      | *string*                                                                                        | :heavy_minus_sign:                                                                              | Item name (for display)                                                                         |
| `itemVariantId`                                                                                 | *string*                                                                                        | :heavy_minus_sign:                                                                              | Reference to the CommerceItemvariant being fulfilled (reference to CommerceCommerceItemvariant) |
| `orderLineitemId`                                                                               | *string*                                                                                        | :heavy_minus_sign:                                                                              | The order line being fulfilled                                                                  |
| `quantity`                                                                                      | *number*                                                                                        | :heavy_minus_sign:                                                                              | Units fulfilled on this line                                                                    |
| `sku`                                                                                           | *string*                                                                                        | :heavy_minus_sign:                                                                              | Item SKU                                                                                        |