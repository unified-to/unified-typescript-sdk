# PropertyMetadata

## Example Usage

```typescript
import { PropertyMetadata } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PropertyMetadata = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `extraData`                                                                           | *shared.PropertyMetadataExtraData*                                                    | :heavy_minus_sign:                                                                    | additional data about the custom field                                                |
| `format`                                                                              | [shared.PropertyMetadataFormat](../../../sdk/models/shared/propertymetadataformat.md) | :heavy_minus_sign:                                                                    | the data type of the value                                                            |
| `id`                                                                                  | *string*                                                                              | :heavy_minus_sign:                                                                    | the custom field identifier                                                           |
| `namespace`                                                                           | *string*                                                                              | :heavy_minus_sign:                                                                    | the scope or origin of the custom field                                               |
| `slug`                                                                                | *string*                                                                              | :heavy_minus_sign:                                                                    | the custom field key                                                                  |
| `value`                                                                               | *shared.PropertyMetadataValue*                                                        | :heavy_minus_sign:                                                                    | the custom field value                                                                |