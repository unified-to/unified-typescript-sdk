# DmsRepairorderLabor

A labor operation or technician time line on a repair order job

## Example Usage

```typescript
import { DmsRepairorderLabor } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: DmsRepairorderLabor = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `actualHours`                                                                                 | *number*                                                                                      | :heavy_minus_sign:                                                                            | Clocked hours                                                                                 |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Line identifier                                                                               |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | Operation description                                                                         |
| `opcodeId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The DmsOpcode ID                                                                              |
| `payType`                                                                                     | [shared.DmsRepairorderLaborPayType](../../../sdk/models/shared/dmsrepairorderlaborpaytype.md) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `rateAmount`                                                                                  | *number*                                                                                      | :heavy_minus_sign:                                                                            | Hourly labor rate                                                                             |
| `soldHours`                                                                                   | *number*                                                                                      | :heavy_minus_sign:                                                                            | Billed or flat-rate hours                                                                     |
| `technicianUserIds`                                                                           | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | Technicians, as HR Employees                                                                  |
| `totalAmount`                                                                                 | *number*                                                                                      | :heavy_minus_sign:                                                                            | Labor sale amount                                                                             |