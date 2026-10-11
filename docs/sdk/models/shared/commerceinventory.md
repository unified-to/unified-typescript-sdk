# CommerceInventory

## Example Usage

```typescript
import { CommerceInventory } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: CommerceInventory = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `available`                                                                                   | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `itemId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | (reference to CommerceItem)                                                                   |
| `itemOptionId`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `itemVariantId`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | (reference to CommerceCommerceItemvariant)                                                    |
| `locationId`                                                                                  | *string*                                                                                      | :heavy_minus_sign:                                                                            | (reference to CommerceLocation)                                                               |
| `raw`                                                                                         | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | (ISO-8601 / YYYY-MM-DDTHH:MM:SSZ format)                                                      |