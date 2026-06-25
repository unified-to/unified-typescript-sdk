# CreateAdsInsertionorder2Request

## Example Usage

```typescript
import { CreateAdsInsertionorder2Request } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateAdsInsertionorder2Request = {
  adsInsertionorder: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `adsInsertionorder`                                                                                                                              | [shared.AdsInsertionorder](../../../sdk/models/shared/adsinsertionorder.md)                                                                      | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.CreateAdsInsertionorder2QueryParamFields](../../../sdk/models/operations/createadsinsertionorder2queryparamfields.md)[]              | :heavy_minus_sign:                                                                                                                               | Fields to return                                                                                                                                 |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |