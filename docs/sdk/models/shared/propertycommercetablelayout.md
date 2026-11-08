# PropertyCommerceTableLayout

position and shape of the table on its floorplan

## Example Usage

```typescript
import { PropertyCommerceTableLayout } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PropertyCommerceTableLayout = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `height`                                                                | *number*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `rotation`                                                              | *number*                                                                | :heavy_minus_sign:                                                      | degrees                                                                 |
| `shape`                                                                 | [shared.Shape](../../../sdk/models/shared/shape.md)                     | :heavy_minus_sign:                                                      | N/A                                                                     |
| `width`                                                                 | *number*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `x`                                                                     | *number*                                                                | :heavy_minus_sign:                                                      | horizontal position on the floorplan, in the provider's floorplan units |
| `y`                                                                     | *number*                                                                | :heavy_minus_sign:                                                      | vertical position on the floorplan, in the provider's floorplan units   |