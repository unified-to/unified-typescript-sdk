# AdsTarget

Targeting search result (for ads_target list endpoint)

## Example Usage

```typescript
import { AdsTarget } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: AdsTarget = {
  id: "<id>",
  value: "<value>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `id`                                                                | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `name`                                                              | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `raw`                                                               | Record<string, *any*>                                               | :heavy_minus_sign:                                                  | N/A                                                                 |
| `type`                                                              | [shared.AdsTargetType](../../../sdk/models/shared/adstargettype.md) | :heavy_minus_sign:                                                  | N/A                                                                 |
| `value`                                                             | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |