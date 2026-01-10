# PatchMartechListRequest

## Example Usage

```typescript
import { PatchMartechListRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchMartechListRequest = {
  marketingList: {},
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `marketingList`                                                                                                                                  | [shared.MarketingList](../../../sdk/models/shared/marketinglist.md)                                                                              | :heavy_check_mark:                                                                                                                               | Mailing List                                                                                                                                     |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.PatchMartechListQueryParamFields](../../../sdk/models/operations/patchmartechlistqueryparamfields.md)[]                              | :heavy_minus_sign:                                                                                                                               | Fields to return                                                                                                                                 |
| `id`                                                                                                                                             | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the List                                                                                                                                   |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |