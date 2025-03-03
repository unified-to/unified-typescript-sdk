# PaymentPayout

## Example Usage

```typescript
import { PaymentPayout } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PaymentPayout = {
  totalAmount: 8061.94,
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `createdAt`                                                                     | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `currency`                                                                      | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `id`                                                                            | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `notes`                                                                         | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |
| `raw`                                                                           | Record<string, *any*>                                                           | :heavy_minus_sign:                                                              | N/A                                                                             |
| `status`                                                                        | [shared.PaymentPayoutStatus](../../../sdk/models/shared/paymentpayoutstatus.md) | :heavy_minus_sign:                                                              | N/A                                                                             |
| `totalAmount`                                                                   | *number*                                                                        | :heavy_check_mark:                                                              | N/A                                                                             |
| `updatedAt`                                                                     | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |