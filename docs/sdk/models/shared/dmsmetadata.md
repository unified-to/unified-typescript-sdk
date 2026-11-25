# DmsMetadata

## Example Usage

```typescript
import { DmsMetadata } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: DmsMetadata = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `extraData`                                                                   | *shared.DmsMetadataExtraData*                                                 | :heavy_minus_sign:                                                            | N/A                                                                           |
| `format`                                                                      | [shared.DmsMetadataFormat](../../../sdk/models/shared/dmsmetadataformat.md)   | :heavy_minus_sign:                                                            | The data type of the custom field, which determines how `value` is formatted. |
| `id`                                                                          | *string*                                                                      | :heavy_minus_sign:                                                            | The ID of the custom field definition (from the metadata/metadata endpoint).  |
| `namespace`                                                                   | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `slug`                                                                        | *string*                                                                      | :heavy_minus_sign:                                                            | The integration's API name (key) of an existing custom field.                 |
| `value`                                                                       | *shared.DmsMetadataValue*                                                     | :heavy_minus_sign:                                                            | The field's value, typed by `format`.                                         |