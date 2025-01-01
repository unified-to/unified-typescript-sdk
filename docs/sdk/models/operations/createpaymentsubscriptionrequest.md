# CreatePaymentSubscriptionRequest

## Example Usage

```typescript
import { CreatePaymentSubscriptionRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreatePaymentSubscriptionRequest = {
  connectionId: "<id>",
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `paymentSubscription`                                                           | [shared.PaymentSubscription](../../../sdk/models/shared/paymentsubscription.md) | :heavy_minus_sign:                                                              | N/A                                                                             |
| `connectionId`                                                                  | *string*                                                                        | :heavy_check_mark:                                                              | ID of the connection                                                            |
| `fields`                                                                        | *string*[]                                                                      | :heavy_minus_sign:                                                              | Comma-delimited fields to return                                                |