# CreatePaymentPaymentRequest

## Example Usage

```typescript
import { CreatePaymentPaymentRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreatePaymentPaymentRequest = {
  connectionId: "<id>",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `paymentPayment`                                                      | [shared.PaymentPayment](../../../sdk/models/shared/paymentpayment.md) | :heavy_minus_sign:                                                    | N/A                                                                   |
| `connectionId`                                                        | *string*                                                              | :heavy_check_mark:                                                    | ID of the connection                                                  |
| `fields`                                                              | *string*[]                                                            | :heavy_minus_sign:                                                    | Comma-delimited fields to return                                      |