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
| `amount`                                                                          | *number*                                                                          | :heavy_minus_sign:                                                                | Customs declared value                                                            |
| `contentsType`                                                                    | [shared.ContentsType](../../../sdk/models/shared/contentstype.md)                 | :heavy_minus_sign:                                                                | N/A                                                                               |
| `currency`                                                                        | *string*                                                                          | :heavy_minus_sign:                                                                | N/A                                                                               |
| `description`                                                                     | *string*                                                                          | :heavy_minus_sign:                                                                | Explanation of contents                                                           |
| `dutiesPaidBy`                                                                    | [shared.DutiesPaidBy](../../../sdk/models/shared/dutiespaidby.md)                 | :heavy_minus_sign:                                                                | N/A                                                                               |
| `items`                                                                           | [shared.ShippingCustomsItem](../../../sdk/models/shared/shippingcustomsitem.md)[] | :heavy_minus_sign:                                                                | Customs items                                                                     |
| `nonDeliveryOption`                                                               | [shared.NonDeliveryOption](../../../sdk/models/shared/nondeliveryoption.md)       | :heavy_minus_sign:                                                                | N/A                                                                               |
| `recipientEori`                                                                   | *string*                                                                          | :heavy_minus_sign:                                                                | Importer EORI number                                                              |
| `recipientTaxNumber`                                                              | *string*                                                                          | :heavy_minus_sign:                                                                | Importer tax ID                                                                   |
| `restrictions`                                                                    | *string*[]                                                                        | :heavy_minus_sign:                                                                | Any restrictions                                                                  |
| `shipperEori`                                                                     | *string*                                                                          | :heavy_minus_sign:                                                                | Exporter EORI number                                                              |
| `shipperTaxNumber`                                                                | *string*                                                                          | :heavy_minus_sign:                                                                | Exporter tax ID                                                                   |
| `taxesPaidBy`                                                                     | [shared.TaxesPaidBy](../../../sdk/models/shared/taxespaidby.md)                   | :heavy_minus_sign:                                                                | N/A                                                                               |