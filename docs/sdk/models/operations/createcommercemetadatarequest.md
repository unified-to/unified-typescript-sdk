# CreateCommerceMetadataRequest

## Example Usage

```typescript
import { CreateCommerceMetadataRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateCommerceMetadataRequest = {
  connectionId: "<id>",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `commerceMetadata`                                                        | [shared.CommerceMetadata](../../../sdk/models/shared/commercemetadata.md) | :heavy_minus_sign:                                                        | N/A                                                                       |
| `connectionId`                                                            | *string*                                                                  | :heavy_check_mark:                                                        | ID of the connection                                                      |
| `fields`                                                                  | *string*[]                                                                | :heavy_minus_sign:                                                        | Comma-delimited fields to return                                          |