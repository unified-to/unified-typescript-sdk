# PropertyDmsVehiclesaleFinance

Finance or lease terms

## Example Usage

```typescript
import { PropertyDmsVehiclesaleFinance } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PropertyDmsVehiclesaleFinance = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `financedAmount`                                                                              | *number*                                                                                      | :heavy_minus_sign:                                                                            | Amount financed                                                                               |
| `firstPaymentAt`                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | First payment due date (ISO-8601 / YYYY-MM-DDTHH:MM:SSZ format)                               |
| `interestRate`                                                                                | *number*                                                                                      | :heavy_minus_sign:                                                                            | APR, as a percentage                                                                          |
| `lenderName`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | Bank or finance company                                                                       |
| `moneyFactor`                                                                                 | *number*                                                                                      | :heavy_minus_sign:                                                                            | Lease money factor                                                                            |
| `paymentAmount`                                                                               | *number*                                                                                      | :heavy_minus_sign:                                                                            | Regular payment amount                                                                        |
| `paymentFrequency`                                                                            | [shared.PaymentFrequency](../../../sdk/models/shared/paymentfrequency.md)                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `residualAmount`                                                                              | *number*                                                                                      | :heavy_minus_sign:                                                                            | Lease residual or guaranteed future value                                                     |
| `termMonths`                                                                                  | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |