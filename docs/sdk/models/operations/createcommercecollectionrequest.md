# CreateCommerceCollectionRequest

## Example Usage

```typescript
import { CreateCommerceCollectionRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateCommerceCollectionRequest = {
  connectionId: "<value>",
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `commerceCollection`                                                          | [shared.CommerceCollection](../../../sdk/models/shared/commercecollection.md) | :heavy_minus_sign:                                                            | A collection of items/products/services                                       |
| `connectionId`                                                                | *string*                                                                      | :heavy_check_mark:                                                            | ID of the connection                                                          |
| `fields`                                                                      | *string*[]                                                                    | :heavy_minus_sign:                                                            | Comma-delimited fields to return                                              |