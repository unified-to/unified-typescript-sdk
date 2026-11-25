# PrintingLineitem

A line item on a print order or quote

## Example Usage

```typescript
import { PrintingLineitem } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PrintingLineitem = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `files`                                                                             | [shared.PrintingLineitemFile](../../../sdk/models/shared/printinglineitemfile.md)[] | :heavy_minus_sign:                                                                  | Print files, one per placement                                                      |
| `id`                                                                                | *string*                                                                            | :heavy_minus_sign:                                                                  | Line item identifier                                                                |
| `name`                                                                              | *string*                                                                            | :heavy_minus_sign:                                                                  | Display name                                                                        |
| `productId`                                                                         | *string*                                                                            | :heavy_minus_sign:                                                                  | The PrintingProduct ID of the blank product                                         |
| `quantity`                                                                          | *number*                                                                            | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `retailPriceAmount`                                                                 | *number*                                                                            | :heavy_minus_sign:                                                                  | Retail price per unit paid by the end customer                                      |
| `sku`                                                                               | *string*                                                                            | :heavy_minus_sign:                                                                  | Product identifier (SKU) from the ordering system                                   |
| `unitPriceAmount`                                                                   | *number*                                                                            | :heavy_minus_sign:                                                                  | Production price per unit charged by the print vendor                               |
| `variantIdentifier`                                                                 | *string*                                                                            | :heavy_minus_sign:                                                                  | Identifier of the product variant                                                   |