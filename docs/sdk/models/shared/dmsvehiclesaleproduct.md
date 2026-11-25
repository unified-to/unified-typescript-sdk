# DmsVehiclesaleProduct

A finance and insurance (F&I) product sold on a vehicle sale

## Example Usage

```typescript
import { DmsVehiclesaleProduct } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: DmsVehiclesaleProduct = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `contractNumber`                                                                            | *string*                                                                                    | :heavy_minus_sign:                                                                          | Policy or contract number                                                                   |
| `costAmount`                                                                                | *number*                                                                                    | :heavy_minus_sign:                                                                          | Dealer cost                                                                                 |
| `deductibleAmount`                                                                          | *number*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `name`                                                                                      | *string*                                                                                    | :heavy_minus_sign:                                                                          | Product or plan name                                                                        |
| `priceAmount`                                                                               | *number*                                                                                    | :heavy_minus_sign:                                                                          | Price charged to the buyer                                                                  |
| `provider`                                                                                  | *string*                                                                                    | :heavy_minus_sign:                                                                          | Provider or carrier name                                                                    |
| `termMileage`                                                                               | *number*                                                                                    | :heavy_minus_sign:                                                                          | Coverage distance limit                                                                     |
| `termMonths`                                                                                | *number*                                                                                    | :heavy_minus_sign:                                                                          | Coverage term in months                                                                     |
| `type`                                                                                      | [shared.DmsVehiclesaleProductType](../../../sdk/models/shared/dmsvehiclesaleproducttype.md) | :heavy_minus_sign:                                                                          | N/A                                                                                         |