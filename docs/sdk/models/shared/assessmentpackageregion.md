# AssessmentPackageRegion

## Example Usage

```typescript
import { AssessmentPackageRegion } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: AssessmentPackageRegion = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `costAmount`                                                                         | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `currency`                                                                           | *string*                                                                             | :heavy_minus_sign:                                                                   | ISO 4217 format                                                                      |
| `processingTime`                                                                     | *number*                                                                             | :heavy_minus_sign:                                                                   | Processing time in milliseconds                                                      |
| `regions`                                                                            | *string*[]                                                                           | :heavy_minus_sign:                                                                   | Countryregion codes where this package is available ({country}-{state} or {country}) |