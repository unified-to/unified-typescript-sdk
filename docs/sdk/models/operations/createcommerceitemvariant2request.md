# CreateCommerceItemvariant2Request

## Example Usage

```typescript
import { CreateCommerceItemvariant2Request } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateCommerceItemvariant2Request = {
  commerceItemvariant: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `commerceItemvariant`                                                                                                                            | [shared.CommerceItemvariant](../../../sdk/models/shared/commerceitemvariant.md)                                                                  | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.CreateCommerceItemvariant2QueryParamFields](../../../sdk/models/operations/createcommerceitemvariant2queryparamfields.md)[]          | :heavy_minus_sign:                                                                                                                               | Fields to return                                                                                                                                 |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |