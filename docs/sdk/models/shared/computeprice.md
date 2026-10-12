# ComputePrice

## Example Usage

```typescript
import { ComputePrice } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: ComputePrice = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `currency`                                                                          | *string*                                                                            | :heavy_minus_sign:                                                                  | Currency of price_amount (ISO 4217)                                                 |
| `market`                                                                            | [shared.ComputePriceMarket](../../../sdk/models/shared/computepricemarket.md)       | :heavy_minus_sign:                                                                  | Pricing market                                                                      |
| `priceAmount`                                                                       | *number*                                                                            | :heavy_minus_sign:                                                                  | List price                                                                          |
| `priceUnit`                                                                         | [shared.ComputePricePriceUnit](../../../sdk/models/shared/computepricepriceunit.md) | :heavy_minus_sign:                                                                  | Unit that price_amount is quoted in                                                 |
| `regionId`                                                                          | *string*                                                                            | :heavy_minus_sign:                                                                  | Region the price applies to, when it varies by region                               |