# QmsMetadata

## Example Usage

```typescript
import { QmsMetadata } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: QmsMetadata = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `extraData`                                                                   | *shared.QmsMetadataExtraData*                                                 | :heavy_minus_sign:                                                            | N/A                                                                           |
| `format`                                                                      | [shared.QmsMetadataFormat](../../../sdk/models/shared/qmsmetadataformat.md)   | :heavy_minus_sign:                                                            | The data type of the custom field, which determines how `value` is formatted. |
| `id`                                                                          | *string*                                                                      | :heavy_minus_sign:                                                            | The ID of the custom field definition (from the metadata/metadata endpoint).  |
| `namespace`                                                                   | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `slug`                                                                        | *string*                                                                      | :heavy_minus_sign:                                                            | The integration's API name (key) of an existing custom field.                 |
| `value`                                                                       | *shared.QmsMetadataValue*                                                     | :heavy_minus_sign:                                                            | The field's value, typed by `format`.                                         |