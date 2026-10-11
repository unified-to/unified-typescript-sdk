# CdpMetadata

## Example Usage

```typescript
import { CdpMetadata } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: CdpMetadata = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `extraData`                                                                 | *shared.CdpMetadataExtraData*                                               | :heavy_minus_sign:                                                          | N/A                                                                         |
| `format`                                                                    | [shared.CdpMetadataFormat](../../../sdk/models/shared/cdpmetadataformat.md) | :heavy_minus_sign:                                                          | The data type of the attribute value                                        |
| `id`                                                                        | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `namespace`                                                                 | *string*                                                                    | :heavy_minus_sign:                                                          | The scope or origin of the attribute (eg. computed, event, visitor)         |
| `slug`                                                                      | *string*                                                                    | :heavy_minus_sign:                                                          | The attribute/trait key (eg. lifetime_value)                                |
| `value`                                                                     | *shared.CdpMetadataValue*                                                   | :heavy_minus_sign:                                                          | The attribute/trait value                                                   |