# AccountingPaymentReference

## Example Usage

```typescript
import { AccountingPaymentReference } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: AccountingPaymentReference = {};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `allocatedAt`                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                   | :heavy_minus_sign:                                                                                              | Date and time when the payment was applied, in ISO 8601 format and UTC (ISO-8601 / YYYY-MM-DDTHH:MM:SSZ format) |
| `amount`                                                                                                        | *number*                                                                                                        | :heavy_minus_sign:                                                                                              | amount of the payment applied to this object                                                                    |
| `paymentId`                                                                                                     | *string*                                                                                                        | :heavy_minus_sign:                                                                                              | references a PaymentPayment that was applied to this object (reference to PaymentPayment)                       |