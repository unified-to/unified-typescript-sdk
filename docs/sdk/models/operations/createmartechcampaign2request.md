# CreateMartechCampaign2Request

## Example Usage

```typescript
import { CreateMartechCampaign2Request } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateMartechCampaign2Request = {
  marketingCampaign: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `marketingCampaign`                                                                                                                              | [shared.MarketingCampaign](../../../sdk/models/shared/marketingcampaign.md)                                                                      | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.CreateMartechCampaign2QueryParamFields](../../../sdk/models/operations/createmartechcampaign2queryparamfields.md)[]                  | :heavy_minus_sign:                                                                                                                               | Fields to return                                                                                                                                 |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |