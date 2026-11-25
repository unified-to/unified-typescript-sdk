# PrintingShippingoption

A shipping method available for a quote, with its price

## Example Usage

```typescript
import { PrintingShippingoption } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PrintingShippingoption = {};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `amount`                                                    | *number*                                                    | :heavy_minus_sign:                                          | Shipping price                                              |
| `code`                                                      | *string*                                                    | :heavy_minus_sign:                                          | Shipping method code, used as `shipping_method` on an order |
| `currency`                                                  | *string*                                                    | :heavy_minus_sign:                                          | ISO 4217 currency code                                      |
| `maxDeliveryDays`                                           | *number*                                                    | :heavy_minus_sign:                                          | Estimated maximum number of days to delivery                |
| `minDeliveryDays`                                           | *number*                                                    | :heavy_minus_sign:                                          | Estimated minimum number of days to delivery                |
| `name`                                                      | *string*                                                    | :heavy_minus_sign:                                          | Display name                                                |