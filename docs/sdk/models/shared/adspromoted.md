# AdsPromoted

Promoted entity (e.g. page, app, product, tweet) for ads create

## Example Usage

```typescript
import { AdsPromoted } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: AdsPromoted = {
  id: "<id>",
  type: "APP_ID",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `id`                                                                    | *string*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |
| `name`                                                                  | *string*                                                                | :heavy_minus_sign:                                                      | N/A                                                                     |
| `type`                                                                  | [shared.AdsPromotedType](../../../sdk/models/shared/adspromotedtype.md) | :heavy_check_mark:                                                      | N/A                                                                     |