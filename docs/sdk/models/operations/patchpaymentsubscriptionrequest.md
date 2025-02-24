# PatchPaymentSubscriptionRequest

## Example Usage

```typescript
import { PatchPaymentSubscriptionRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchPaymentSubscriptionRequest = {
  paymentSubscription: {},
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `paymentSubscription`                                                           | [shared.PaymentSubscription](../../../sdk/models/shared/paymentsubscription.md) | :heavy_check_mark:                                                              | N/A                                                                             |
| `connectionId`                                                                  | *string*                                                                        | :heavy_check_mark:                                                              | ID of the connection                                                            |
| `fields`                                                                        | *string*[]                                                                      | :heavy_minus_sign:                                                              | Comma-delimited fields to return                                                |
| `id`                                                                            | *string*                                                                        | :heavy_check_mark:                                                              | ID of the Subscription                                                          |