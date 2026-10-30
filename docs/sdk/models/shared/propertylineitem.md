# PropertyLineitem

## Example Usage

```typescript
import { PropertyLineitem } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PropertyLineitem = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `amount`                                                                          | *number*                                                                          | :heavy_minus_sign:                                                                | the line item amount (discounts are negative)                                     |
| `description`                                                                     | *string*                                                                          | :heavy_minus_sign:                                                                | free-text description of the line item                                            |
| `isMandatory`                                                                     | *boolean*                                                                         | :heavy_minus_sign:                                                                | whether the line item is mandatory                                                |
| `name`                                                                            | *string*                                                                          | :heavy_minus_sign:                                                                | the line item name, eg. Cleaning fee                                              |
| `type`                                                                            | [shared.PropertyLineitemType](../../../sdk/models/shared/propertylineitemtype.md) | :heavy_minus_sign:                                                                | base price, fee, tax, discount or deposit                                         |