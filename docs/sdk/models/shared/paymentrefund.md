# PaymentRefund

## Example Usage

```typescript
import { PaymentRefund } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PaymentRefund = {
    paymentId: "<value>",
    totalAmount: 1289.26,
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `createdAt`                                                                     | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `currency`                                                                      | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `id`                                                                            | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `notes`                                                                         | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `paymentId`                                                                     | *string*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `raw`                                                                           | Record<string, *any*>                                                           | :heavy_minus_sign:                                                              | N/A                                                                             |
| `reference`                                                                     | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `status`                                                                        | [shared.PaymentRefundStatus](../../../sdk/models/shared/paymentrefundstatus.md) | :heavy_minus_sign:                                                              | N/A                                                                             |
| `totalAmount`                                                                   | *number*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `updatedAt`                                                                     | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |