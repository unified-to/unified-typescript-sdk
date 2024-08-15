# PatchCommerceCollectionRequest

## Example Usage

```typescript
import { PatchCommerceCollectionRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchCommerceCollectionRequest = {
    connectionId: "<value>",
    id: "<id>",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `commerceCollection`                                                          | [shared.CommerceCollection](../../../sdk/models/shared/commercecollection.md) | :heavy_minus_sign:                                                            | A collection of items/products/services                                       |
| `connectionId`                                                                | *string*                                                                      | :heavy_check_mark:                                                            | ID of the connection                                                          |
| `id`                                                                          | *string*                                                                      | :heavy_check_mark:                                                            | ID of the Collection                                                          |