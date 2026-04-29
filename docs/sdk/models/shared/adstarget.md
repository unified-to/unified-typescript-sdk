# AdsTarget

Targeting search result (for ads_target list endpoint)

## Example Usage

```typescript
import { AdsTarget } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: AdsTarget = {
  id: "<id>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `id`                                                                | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `isActive`                                                          | *boolean*                                                           | :heavy_minus_sign:                                                  | N/A                                                                 |
| `name`                                                              | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `parentId`                                                          | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `raw`                                                               | Record<string, *any*>                                               | :heavy_minus_sign:                                                  | N/A                                                                 |
| `type`                                                              | [shared.AdsTargetType](../../../sdk/models/shared/adstargettype.md) | :heavy_minus_sign:                                                  | N/A                                                                 |