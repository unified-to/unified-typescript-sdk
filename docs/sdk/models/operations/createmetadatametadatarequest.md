# CreateMetadataMetadataRequest

## Example Usage

```typescript
import { CreateMetadataMetadataRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateMetadataMetadataRequest = {
  connectionId: "<id>",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `metadataMetadata`                                                        | [shared.MetadataMetadata](../../../sdk/models/shared/metadatametadata.md) | :heavy_minus_sign:                                                        | N/A                                                                       |
| `connectionId`                                                            | *string*                                                                  | :heavy_check_mark:                                                        | ID of the connection                                                      |
| `fields`                                                                  | *string*[]                                                                | :heavy_minus_sign:                                                        | Comma-delimited fields to return                                          |