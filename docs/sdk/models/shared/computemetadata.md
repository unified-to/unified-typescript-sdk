# ComputeMetadata

## Example Usage

```typescript
import { ComputeMetadata } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: ComputeMetadata = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `extraData`                                                                         | *shared.ComputeMetadataExtraData*                                                   | :heavy_minus_sign:                                                                  | Additional data about the value                                                     |
| `format`                                                                            | [shared.ComputeMetadataFormat](../../../sdk/models/shared/computemetadataformat.md) | :heavy_minus_sign:                                                                  | The data type of the value                                                          |
| `id`                                                                                | *string*                                                                            | :heavy_minus_sign:                                                                  | The label, tag or metadata identifier                                               |
| `namespace`                                                                         | *string*                                                                            | :heavy_minus_sign:                                                                  | The origin of the value (eg. labels, tags, metadata)                                |
| `slug`                                                                              | *string*                                                                            | :heavy_minus_sign:                                                                  | The label, tag or metadata key                                                      |
| `value`                                                                             | *shared.ComputeMetadataValue*                                                       | :heavy_minus_sign:                                                                  | The label, tag or metadata value                                                    |