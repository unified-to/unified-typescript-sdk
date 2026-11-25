# DmsAppointmentService

A service requested on an appointment

## Example Usage

```typescript
import { DmsAppointmentService } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: DmsAppointmentService = {};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `complaint`                                             | *string*                                                | :heavy_minus_sign:                                      | Customer's own words                                    |
| `estimateAmount`                                        | *number*                                                | :heavy_minus_sign:                                      | Estimated price                                         |
| `estimatedHours`                                        | *number*                                                | :heavy_minus_sign:                                      | N/A                                                     |
| `id`                                                    | *string*                                                | :heavy_minus_sign:                                      | Line identifier                                         |
| `name`                                                  | *string*                                                | :heavy_minus_sign:                                      | Service or operation description                        |
| `opcodeId`                                              | *string*                                                | :heavy_minus_sign:                                      | The DmsOpcode ID                                        |
| `payType`                                               | [shared.PayType](../../../sdk/models/shared/paytype.md) | :heavy_minus_sign:                                      | N/A                                                     |
| `technicianUserIds`                                     | *string*[]                                              | :heavy_minus_sign:                                      | Pre-assigned technicians, as HR Employees               |