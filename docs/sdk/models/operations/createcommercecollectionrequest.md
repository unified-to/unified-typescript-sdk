# CreateCommerceCollectionRequest

## Example Usage

```typescript
import { CreateCommerceCollectionRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateCommerceCollectionRequest = {
  commerceCollection: {
    name: "<value>",
  },
  connectionId: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `commerceCollection`                                                                                                                             | [shared.CommerceCollection](../../../sdk/models/shared/commercecollection.md)                                                                    | :heavy_check_mark:                                                                                                                               | A collection of items/products/services                                                                                                          |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.CreateCommerceCollectionQueryParamFields](../../../sdk/models/operations/createcommercecollectionqueryparamfields.md)[]              | :heavy_minus_sign:                                                                                                                               | Fields to return                                                                                                                                 |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |