# PatchPaymentLinkRequest

## Example Usage

```typescript
import { PatchPaymentLinkRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchPaymentLinkRequest = {
  paymentLink: {},
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `paymentLink`                                                   | [shared.PaymentLink](../../../sdk/models/shared/paymentlink.md) | :heavy_check_mark:                                              | N/A                                                             |
| `connectionId`                                                  | *string*                                                        | :heavy_check_mark:                                              | ID of the connection                                            |
| `fields`                                                        | *string*[]                                                      | :heavy_minus_sign:                                              | Comma-delimited fields to return                                |
| `id`                                                            | *string*                                                        | :heavy_check_mark:                                              | ID of the Link                                                  |