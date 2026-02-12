# AssessmentPackageRegion

## Example Usage

```typescript
import { AssessmentPackageRegion } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: AssessmentPackageRegion = {
  costAmount: 8446.78,
  regions: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `costAmount`                                                                         | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `currency`                                                                           | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `processingTime`                                                                     | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `regions`                                                                            | *string*[]                                                                           | :heavy_check_mark:                                                                   | Countryregion codes where this package is available ({country}-{state} or {country}) |