# DmsPartline

A parts line on a repair order job, parts sale or op code

## Example Usage

```typescript
import { DmsPartline } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: DmsPartline = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `description`                                                                 | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `id`                                                                          | *string*                                                                      | :heavy_minus_sign:                                                            | Line identifier                                                               |
| `listPriceAmount`                                                             | *number*                                                                      | :heavy_minus_sign:                                                            | Unit list or retail price                                                     |
| `manufacturerCode`                                                            | *string*                                                                      | :heavy_minus_sign:                                                            | Make, brand or line code the part number belongs to                           |
| `partId`                                                                      | *string*                                                                      | :heavy_minus_sign:                                                            | The DmsPart ID                                                                |
| `partNumber`                                                                  | *string*                                                                      | :heavy_minus_sign:                                                            | Part number as sold                                                           |
| `payType`                                                                     | [shared.DmsPartlinePayType](../../../sdk/models/shared/dmspartlinepaytype.md) | :heavy_minus_sign:                                                            | Who pays for this line                                                        |
| `quantity`                                                                    | *number*                                                                      | :heavy_minus_sign:                                                            | Quantity sold or issued                                                       |
| `quantityOrdered`                                                             | *number*                                                                      | :heavy_minus_sign:                                                            | Quantity requested by the customer                                            |
| `taxAmount`                                                                   | *number*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `totalAmount`                                                                 | *number*                                                                      | :heavy_minus_sign:                                                            | Extended selling amount                                                       |
| `totalCostAmount`                                                             | *number*                                                                      | :heavy_minus_sign:                                                            | Extended dealer cost                                                          |
| `unitCostAmount`                                                              | *number*                                                                      | :heavy_minus_sign:                                                            | Unit dealer cost                                                              |
| `unitPriceAmount`                                                             | *number*                                                                      | :heavy_minus_sign:                                                            | Unit selling price                                                            |