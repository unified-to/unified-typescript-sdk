# UpdatePaymentPaymentRequest

## Example Usage

```typescript
import { UpdatePaymentPaymentRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdatePaymentPaymentRequest = {
  connectionId: "<value>",
  id: "<id>",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `paymentPayment`                                                      | [shared.PaymentPayment](../../../sdk/models/shared/paymentpayment.md) | :heavy_minus_sign:                                                    | N/A                                                                   |
| `connectionId`                                                        | *string*                                                              | :heavy_check_mark:                                                    | ID of the connection                                                  |
| `id`                                                                  | *string*                                                              | :heavy_check_mark:                                                    | ID of the Payment                                                     |