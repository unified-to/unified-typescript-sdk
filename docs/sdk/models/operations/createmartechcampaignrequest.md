# CreateMartechCampaignRequest

## Example Usage

```typescript
import { CreateMartechCampaignRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateMartechCampaignRequest = {
  marketingCampaign: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `marketingCampaign`                                                                                                                              | [shared.MarketingCampaign](../../../sdk/models/shared/marketingcampaign.md)                                                                      | :heavy_check_mark:                                                                                                                               | A marketing campaign or email send                                                                                                               |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.CreateMartechCampaignQueryParamFields](../../../sdk/models/operations/createmartechcampaignqueryparamfields.md)[]                    | :heavy_minus_sign:                                                                                                                               | Fields to return                                                                                                                                 |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |