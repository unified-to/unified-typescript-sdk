# PlmMetadata

## Example Usage

```typescript
import { PlmMetadata } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: PlmMetadata = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `extraData`                                                                   | *shared.PlmMetadataExtraData*                                                 | :heavy_minus_sign:                                                            | N/A                                                                           |
| `format`                                                                      | [shared.PlmMetadataFormat](../../../sdk/models/shared/plmmetadataformat.md)   | :heavy_minus_sign:                                                            | The data type of the custom field, which determines how `value` is formatted. |
| `id`                                                                          | *string*                                                                      | :heavy_minus_sign:                                                            | The ID of the custom field definition (from the metadata/metadata endpoint).  |
| `namespace`                                                                   | *string*                                                                      | :heavy_minus_sign:                                                            | N/A                                                                           |
| `slug`                                                                        | *string*                                                                      | :heavy_minus_sign:                                                            | The integration's API name (key) of an existing custom field.                 |
| `value`                                                                       | *shared.PlmMetadataValue*                                                     | :heavy_minus_sign:                                                            | The field's value, typed by `format`.                                         |