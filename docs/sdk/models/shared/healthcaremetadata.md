# HealthcareMetadata

## Example Usage

```typescript
import { HealthcareMetadata } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: HealthcareMetadata = {};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `extraData`                                                                               | *shared.HealthcareMetadataExtraData*                                                      | :heavy_minus_sign:                                                                        | Additional data about the custom field                                                    |
| `format`                                                                                  | [shared.HealthcareMetadataFormat](../../../sdk/models/shared/healthcaremetadataformat.md) | :heavy_minus_sign:                                                                        | The data type of the value                                                                |
| `id`                                                                                      | *string*                                                                                  | :heavy_minus_sign:                                                                        | Identifier of the custom field                                                            |
| `namespace`                                                                               | *string*                                                                                  | :heavy_minus_sign:                                                                        | The scope or origin of the custom field                                                   |
| `slug`                                                                                    | *string*                                                                                  | :heavy_minus_sign:                                                                        | The custom field key                                                                      |
| `value`                                                                                   | *shared.HealthcareMetadataValue*                                                          | :heavy_minus_sign:                                                                        | The custom field value                                                                    |