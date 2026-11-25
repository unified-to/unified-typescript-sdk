# DmsVehicleOption

An installed vehicle option or package

## Example Usage

```typescript
import { DmsVehicleOption } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: DmsVehicleOption = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `code`                                                                            | *string*                                                                          | :heavy_minus_sign:                                                                | Option or RPO code                                                                |
| `costAmount`                                                                      | *number*                                                                          | :heavy_minus_sign:                                                                | Dealer cost                                                                       |
| `description`                                                                     | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `priceAmount`                                                                     | *number*                                                                          | :heavy_minus_sign:                                                                | Retail price                                                                      |
| `type`                                                                            | [shared.DmsVehicleOptionType](../../../sdk/models/shared/dmsvehicleoptiontype.md) | :heavy_minus_sign:                                                                | Factory-fitted or dealer-added                                                    |