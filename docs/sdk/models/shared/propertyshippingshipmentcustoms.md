# PropertyShippingShipmentCustoms

Customs information

## Example Usage

```typescript
import { PropertyShippingShipmentCustoms } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PropertyShippingShipmentCustoms = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `amount`                                                                          | *number*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `contentsType`                                                                    | [shared.ContentsType](../../../sdk/models/shared/contentstype.md)                 | :heavy_minus_sign:                                                                | N/A                                                                               |
| `currency`                                                                        | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `description`                                                                     | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `dutiesPaidBy`                                                                    | [shared.DutiesPaidBy](../../../sdk/models/shared/dutiespaidby.md)                 | :heavy_minus_sign:                                                                | N/A                                                                               |
| `items`                                                                           | [shared.ShippingCustomsItem](../../../sdk/models/shared/shippingcustomsitem.md)[] | :heavy_minus_sign:                                                                | Customs items                                                                     |
| `nonDeliveryOption`                                                               | [shared.NonDeliveryOption](../../../sdk/models/shared/nondeliveryoption.md)       | :heavy_minus_sign:                                                                | N/A                                                                               |
| `recipientEori`                                                                   | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `recipientTaxNumber`                                                              | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `restrictions`                                                                    | *string*[]                                                                        | :heavy_minus_sign:                                                                | Any restrictions                                                                  |
| `shipperEori`                                                                     | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `shipperTaxNumber`                                                                | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `taxesPaidBy`                                                                     | [shared.TaxesPaidBy](../../../sdk/models/shared/taxespaidby.md)                   | :heavy_minus_sign:                                                                | N/A                                                                               |