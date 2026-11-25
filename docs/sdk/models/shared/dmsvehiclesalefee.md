# DmsVehiclesaleFee

A fee on a vehicle sale (documentation, title, registration, lender, dealer)

## Example Usage

```typescript
import { DmsVehiclesaleFee } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: DmsVehiclesaleFee = {};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `costAmount`                              | *number*                                  | :heavy_minus_sign:                        | Dealer cost                               |
| `isCapitalized`                           | *boolean*                                 | :heavy_minus_sign:                        | Rolled into the financed or leased amount |
| `name`                                    | *string*                                  | :heavy_minus_sign:                        | N/A                                       |
| `priceAmount`                             | *number*                                  | :heavy_minus_sign:                        | Amount charged to the buyer               |