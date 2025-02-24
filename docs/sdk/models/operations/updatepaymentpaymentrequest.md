# UpdatePaymentPaymentRequest

## Example Usage

```typescript
import { UpdatePaymentPaymentRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdatePaymentPaymentRequest = {
  paymentPayment: {},
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `paymentPayment`                                                      | [shared.PaymentPayment](../../../sdk/models/shared/paymentpayment.md) | :heavy_check_mark:                                                    | N/A                                                                   |
| `connectionId`                                                        | *string*                                                              | :heavy_check_mark:                                                    | ID of the connection                                                  |
| `fields`                                                              | *string*[]                                                            | :heavy_minus_sign:                                                    | Comma-delimited fields to return                                      |
| `id`                                                                  | *string*                                                              | :heavy_check_mark:                                                    | ID of the Payment                                                     |