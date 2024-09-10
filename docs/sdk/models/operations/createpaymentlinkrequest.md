# CreatePaymentLinkRequest

## Example Usage

```typescript
import { CreatePaymentLinkRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreatePaymentLinkRequest = {
  connectionId: "<value>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `paymentLink`                                                   | [shared.PaymentLink](../../../sdk/models/shared/paymentlink.md) | :heavy_minus_sign:                                              | N/A                                                             |
| `connectionId`                                                  | *string*                                                        | :heavy_check_mark:                                              | ID of the connection                                            |