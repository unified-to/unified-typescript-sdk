# UpdateCommerceCollection2Request

## Example Usage

```typescript
import { UpdateCommerceCollection2Request } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateCommerceCollection2Request = {
  commerceCollection: {
    name: "<value>",
  },
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `commerceCollection`                                                                                                                             | [shared.CommerceCollection](../../../sdk/models/shared/commercecollection.md)                                                                    | :heavy_check_mark:                                                                                                                               | A collection of items/products/services                                                                                                          |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.UpdateCommerceCollection2QueryParamFields](../../../sdk/models/operations/updatecommercecollection2queryparamfields.md)[]            | :heavy_minus_sign:                                                                                                                               | Fields to return                                                                                                                                 |
| `id`                                                                                                                                             | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the Collection                                                                                                                             |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |