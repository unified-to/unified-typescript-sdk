# LegalMetadata

## Example Usage

```typescript
import { LegalMetadata } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: LegalMetadata = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `extraData`                                                                     | *shared.LegalMetadataExtraData*                                                 | :heavy_minus_sign:                                                              | additional data about the custom field                                          |
| `format`                                                                        | [shared.LegalMetadataFormat](../../../sdk/models/shared/legalmetadataformat.md) | :heavy_minus_sign:                                                              | the data type of the value                                                      |
| `id`                                                                            | *string*                                                                        | :heavy_minus_sign:                                                              | the custom field identifier                                                     |
| `namespace`                                                                     | *string*                                                                        | :heavy_minus_sign:                                                              | the scope or origin of the custom field                                         |
| `slug`                                                                          | *string*                                                                        | :heavy_minus_sign:                                                              | the custom field key                                                            |
| `value`                                                                         | *shared.LegalMetadataValue*                                                     | :heavy_minus_sign:                                                              | the custom field value                                                          |