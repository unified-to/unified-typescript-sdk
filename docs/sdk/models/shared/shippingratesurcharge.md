# ShippingRateSurcharge

## Example Usage

```typescript
import { ShippingRateSurcharge } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: ShippingRateSurcharge = {};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `amount`                                                  | *number*                                                  | :heavy_minus_sign:                                        | Surcharge amount                                          |
| `code`                                                    | *string*                                                  | :heavy_minus_sign:                                        | Surcharge type (e.g., "RESIDENTIAL", "FUEL", "SIGNATURE") |
| `description`                                             | *string*                                                  | :heavy_minus_sign:                                        | Description of surcharge                                  |
| `name`                                                    | *string*                                                  | :heavy_minus_sign:                                        | Human-readable name                                       |