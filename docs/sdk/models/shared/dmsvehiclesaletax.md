# DmsVehiclesaleTax

A tax line on a vehicle sale

## Example Usage

```typescript
import { DmsVehiclesaleTax } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: DmsVehiclesaleTax = {};
```

## Fields

| Field                     | Type                      | Required                  | Description               |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `name`                    | *string*                  | :heavy_minus_sign:        | N/A                       |
| `rate`                    | *number*                  | :heavy_minus_sign:        | Tax rate, as a percentage |
| `totalAmount`             | *number*                  | :heavy_minus_sign:        | Tax amount                |