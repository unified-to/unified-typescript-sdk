# PatchCommerceMetadataRequest

## Example Usage

```typescript
import { PatchCommerceMetadataRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchCommerceMetadataRequest = {
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `commerceMetadata`                                                        | [shared.CommerceMetadata](../../../sdk/models/shared/commercemetadata.md) | :heavy_minus_sign:                                                        | N/A                                                                       |
| `connectionId`                                                            | *string*                                                                  | :heavy_check_mark:                                                        | ID of the connection                                                      |
| `fields`                                                                  | *string*[]                                                                | :heavy_minus_sign:                                                        | Comma-delimited fields to return                                          |
| `id`                                                                      | *string*                                                                  | :heavy_check_mark:                                                        | ID of the Metadata                                                        |