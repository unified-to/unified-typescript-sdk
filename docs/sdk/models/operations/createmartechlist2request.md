# CreateMartechList2Request

## Example Usage

```typescript
import { CreateMartechList2Request } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateMartechList2Request = {
  marketingList: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `marketingList`                                                                                                                                  | [shared.MarketingList](../../../sdk/models/shared/marketinglist.md)                                                                              | :heavy_check_mark:                                                                                                                               | Mailing List                                                                                                                                     |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.CreateMartechList2QueryParamFields](../../../sdk/models/operations/createmartechlist2queryparamfields.md)[]                          | :heavy_minus_sign:                                                                                                                               | Fields to return                                                                                                                                 |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |