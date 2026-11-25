# DmsVehiclesaleVehicle

A vehicle sold on a vehicle sale

## Example Usage

```typescript
import { DmsVehiclesaleVehicle } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: DmsVehiclesaleVehicle = {};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `costAmount`                        | *number*                            | :heavy_minus_sign:                  | Dealer cost of the vehicle          |
| `msrpAmount`                        | *number*                            | :heavy_minus_sign:                  | N/A                                 |
| `odometer`                          | *number*                            | :heavy_minus_sign:                  | Odometer at sale                    |
| `priceAmount`                       | *number*                            | :heavy_minus_sign:                  | Agreed selling price of the vehicle |
| `stockNumber`                       | *string*                            | :heavy_minus_sign:                  | Stock number as sold                |
| `vehicleId`                         | *string*                            | :heavy_minus_sign:                  | The DmsVehicle ID                   |
| `vin`                               | *string*                            | :heavy_minus_sign:                  | VIN as sold                         |