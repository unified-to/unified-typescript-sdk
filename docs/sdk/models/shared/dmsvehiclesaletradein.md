# DmsVehiclesaleTradein

A vehicle traded in on a vehicle sale

## Example Usage

```typescript
import { DmsVehiclesaleTradein } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: DmsVehiclesaleTradein = {};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `actualCashValueAmount`                          | *number*                                         | :heavy_minus_sign:                               | Actual cash value (dealer valuation)             |
| `allowanceAmount`                                | *number*                                         | :heavy_minus_sign:                               | Trade allowance given to the buyer               |
| `lienholderName`                                 | *string*                                         | :heavy_minus_sign:                               | Lender owed the payoff                           |
| `make`                                           | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `model`                                          | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `odometer`                                       | *number*                                         | :heavy_minus_sign:                               | N/A                                              |
| `payoffAmount`                                   | *number*                                         | :heavy_minus_sign:                               | Outstanding loan payoff                          |
| `vehicleId`                                      | *string*                                         | :heavy_minus_sign:                               | The DmsVehicle ID of the trade-in, when recorded |
| `vin`                                            | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `year`                                           | *number*                                         | :heavy_minus_sign:                               | N/A                                              |