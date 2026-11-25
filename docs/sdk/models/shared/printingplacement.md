# PrintingPlacement

A print area on a product (eg. front, back, sleeve)

## Example Usage

```typescript
import { PrintingPlacement } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PrintingPlacement = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `additionalPriceAmount`                                                             | *number*                                                                            | :heavy_minus_sign:                                                                  | Extra cost when this placement is printed                                           |
| `code`                                                                              | *string*                                                                            | :heavy_minus_sign:                                                                  | Placement key used when attaching a print file (eg. front, back)                    |
| `dpi`                                                                               | *number*                                                                            | :heavy_minus_sign:                                                                  | Print resolution for the given width and height                                     |
| `height`                                                                            | *number*                                                                            | :heavy_minus_sign:                                                                  | Height of the print area, in `unit`                                                 |
| `name`                                                                              | *string*                                                                            | :heavy_minus_sign:                                                                  | Display name                                                                        |
| `technique`                                                                         | *string*                                                                            | :heavy_minus_sign:                                                                  | Print technique or decoration method code for this placement (eg. dtg, embroidery)  |
| `unit`                                                                              | [shared.PrintingPlacementUnit](../../../sdk/models/shared/printingplacementunit.md) | :heavy_minus_sign:                                                                  | Unit of `width` and `height`                                                        |
| `width`                                                                             | *number*                                                                            | :heavy_minus_sign:                                                                  | Width of the print area, in `unit`                                                  |