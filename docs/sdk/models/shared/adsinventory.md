# AdsInventory

Publisher inventory: ad units, placements, sites, apps, zones or channels

## Example Usage

```typescript
import { AdsInventory } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: AdsInventory = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | (ISO-8601 / YYYY-MM-DDTHH:MM:SSZ format)                                                      |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | [shared.AdsMetadata](../../../sdk/models/shared/adsmetadata.md)[]                             | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `parentId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `raw`                                                                                         | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `sizes`                                                                                       | [shared.AdsSize](../../../sdk/models/shared/adssize.md)[]                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `status`                                                                                      | [shared.AdsInventoryStatus](../../../sdk/models/shared/adsinventorystatus.md)                 | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `type`                                                                                        | [shared.AdsInventoryType](../../../sdk/models/shared/adsinventorytype.md)                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | (ISO-8601 / YYYY-MM-DDTHH:MM:SSZ format)                                                      |