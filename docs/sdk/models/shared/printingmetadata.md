# PrintingMetadata

## Example Usage

```typescript
import { PrintingMetadata } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PrintingMetadata = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `extraData`                                                                           | *shared.PrintingMetadataExtraData*                                                    | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `format`                                                                              | [shared.PrintingMetadataFormat](../../../sdk/models/shared/printingmetadataformat.md) | :heavy_minus_sign:                                                                    | The data type of the custom field, which determines how `value` is formatted.         |
| `id`                                                                                  | *string*                                                                              | :heavy_minus_sign:                                                                    | The ID of the custom field definition (from the metadata/metadata endpoint).          |
| `namespace`                                                                           | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   |
| `slug`                                                                                | *string*                                                                              | :heavy_minus_sign:                                                                    | The integration's API name (key) of an existing custom field.                         |
| `value`                                                                               | *shared.PrintingMetadataValue*                                                        | :heavy_minus_sign:                                                                    | The field's value, typed by `format`.                                                 |