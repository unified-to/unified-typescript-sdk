# PropertyShippingRateFromAddress

Origin address

## Example Usage

```typescript
import { PropertyShippingRateFromAddress } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PropertyShippingRateFromAddress = {};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `address1`                                 | *string*                                   | :heavy_minus_sign:                         | N/A                                        |
| `address2`                                 | *string*                                   | :heavy_minus_sign:                         | N/A                                        |
| `city`                                     | *string*                                   | :heavy_minus_sign:                         | N/A                                        |
| `companyName`                              | *string*                                   | :heavy_minus_sign:                         | Company name (for commercial addresses)    |
| `country`                                  | *string*                                   | :heavy_minus_sign:                         | N/A                                        |
| `countryCode`                              | *string*                                   | :heavy_minus_sign:                         | ISO 2-digit country code                   |
| `deliveryInstructions`                     | *string*                                   | :heavy_minus_sign:                         | Special delivery notes                     |
| `email`                                    | *string*                                   | :heavy_minus_sign:                         | Email address (for delivery notifications) |
| `isResidential`                            | *boolean*                                  | :heavy_minus_sign:                         | Alias for address_type === 'RESIDENTIAL'   |
| `isValidated`                              | *boolean*                                  | :heavy_minus_sign:                         | Whether address has been validated         |
| `name`                                     | *string*                                   | :heavy_minus_sign:                         | Recipientsender name                       |
| `postalCode`                               | *string*                                   | :heavy_minus_sign:                         | N/A                                        |
| `region`                                   | *string*                                   | :heavy_minus_sign:                         | N/A                                        |
| `regionCode`                               | *string*                                   | :heavy_minus_sign:                         | N/A                                        |
| `telephone`                                | *string*                                   | :heavy_minus_sign:                         | Phone number (required by FedEx, UPS, DHL) |