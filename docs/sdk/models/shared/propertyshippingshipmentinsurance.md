# PropertyShippingShipmentInsurance

Insurance details

## Example Usage

```typescript
import { PropertyShippingShipmentInsurance } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PropertyShippingShipmentInsurance = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `coverageAmount`                                                  | *number*                                                          | :heavy_minus_sign:                                                | Coverage amount (may differ from insured_value)                   |
| `coverageType`                                                    | [shared.CoverageType](../../../sdk/models/shared/coveragetype.md) | :heavy_minus_sign:                                                | N/A                                                               |
| `currency`                                                        | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `insuranceCost`                                                   | *number*                                                          | :heavy_minus_sign:                                                | Cost of insurance                                                 |
| `insuranceCostCurrency`                                           | *string*                                                          | :heavy_minus_sign:                                                | N/A                                                               |
| `insuranceProvider`                                               | *string*                                                          | :heavy_minus_sign:                                                | Insurance provider name                                           |
| `insuranceProviderCode`                                           | *string*                                                          | :heavy_minus_sign:                                                | Provider code                                                     |
| `insuredValue`                                                    | *number*                                                          | :heavy_minus_sign:                                                | Insured value                                                     |