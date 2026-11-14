# AdsConversionTracking

## Example Usage

```typescript
import { AdsConversionTracking } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: AdsConversionTracking = {
  identifier: "<value>",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `identifier`                                                                                | *string*                                                                                    | :heavy_check_mark:                                                                          | Integration's conversion tracker ID (Floodlight activity ID, conversion tag ID)             |
| `postClickWindowDays`                                                                       | *number*                                                                                    | :heavy_minus_sign:                                                                          | Days after a click in which a conversion is counted                                         |
| `postViewWindowDays`                                                                        | *number*                                                                                    | :heavy_minus_sign:                                                                          | Days after a view in which a conversion is counted                                          |
| `type`                                                                                      | [shared.AdsConversionTrackingType](../../../sdk/models/shared/adsconversiontrackingtype.md) | :heavy_minus_sign:                                                                          | N/A                                                                                         |