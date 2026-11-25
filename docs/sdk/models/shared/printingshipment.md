# PrintingShipment

A shipment of a print order

## Example Usage

```typescript
import { PrintingShipment } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PrintingShipment = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `carrier`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | Carrier name                                                                                  |
| `deliveredAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | (ISO-8601 / YYYY-MM-DDTHH:MM:SSZ format)                                                      |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Shipment identifier                                                                           |
| `service`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | Delivery service name                                                                         |
| `shippedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | (ISO-8601 / YYYY-MM-DDTHH:MM:SSZ format)                                                      |
| `trackingNumber`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `trackingUrl`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |