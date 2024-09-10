# PatchPaymentLinkRequest

## Example Usage

```typescript
import { PatchPaymentLinkRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchPaymentLinkRequest = {
  connectionId: "<value>",
  id: "<id>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `paymentLink`                                                   | [shared.PaymentLink](../../../sdk/models/shared/paymentlink.md) | :heavy_minus_sign:                                              | N/A                                                             |
| `connectionId`                                                  | *string*                                                        | :heavy_check_mark:                                              | ID of the connection                                            |
| `id`                                                            | *string*                                                        | :heavy_check_mark:                                              | ID of the Link                                                  |