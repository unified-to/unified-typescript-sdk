# PrintingProductVariant

A size / color variant of a blank catalog product

## Example Usage

```typescript
import { PrintingProductVariant } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PrintingProductVariant = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `color`                                                                        | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `colorCode`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | Hexadecimal RGB color code                                                     |
| `identifier`                                                                   | *string*                                                                       | :heavy_minus_sign:                                                             | Variant identifier, used as `variant_identifier` on order and quote line items |
| `imageUrl`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `isAvailable`                                                                  | *boolean*                                                                      | :heavy_minus_sign:                                                             | Variant is in stock and can be ordered                                         |
| `name`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | Display name                                                                   |
| `placements`                                                                   | [shared.PrintingPlacement](../../../sdk/models/shared/printingplacement.md)[]  | :heavy_minus_sign:                                                             | Print areas of this variant, when they differ per variant                      |
| `priceAmount`                                                                  | *number*                                                                       | :heavy_minus_sign:                                                             | Base production price of the blank variant                                     |
| `size`                                                                         | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |