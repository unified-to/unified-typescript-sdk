# PaymentPayoutLineitem

## Example Usage

```typescript
import { PaymentPayoutLineitem } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PaymentPayoutLineitem = {};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                | *number*                                                                                                | :heavy_minus_sign:                                                                                      | Gross amount of this line                                                                               |
| `currency`                                                                                              | *string*                                                                                                | :heavy_minus_sign:                                                                                      | ISO 4217 currency code of the line amount                                                               |
| `feeAmount`                                                                                             | *number*                                                                                                | :heavy_minus_sign:                                                                                      | Processor fee attributed to this line                                                                   |
| `netAmount`                                                                                             | *number*                                                                                                | :heavy_minus_sign:                                                                                      | amount minus fee_amount                                                                                 |
| `objectId`                                                                                              | *string*                                                                                                | :heavy_minus_sign:                                                                                      | id of the settled object -- a PaymentPayment or PaymentRefund for PAYMENT / REFUND lines                |
| `objectType`                                                                                            | [shared.PaymentPayoutLineitemObjectType](../../../sdk/models/shared/paymentpayoutlineitemobjecttype.md) | :heavy_minus_sign:                                                                                      | What this payout line settles                                                                           |