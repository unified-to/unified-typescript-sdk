# GetAdsCampaignRequest

## Example Usage

```typescript
import { GetAdsCampaignRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: GetAdsCampaignRequest = {
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.GetAdsCampaignQueryParamFields](../../../sdk/models/operations/getadscampaignqueryparamfields.md)[]                                  | :heavy_minus_sign:                                                                                                                               | Fields to return                                                                                                                                 |
| `id`                                                                                                                                             | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the Campaign                                                                                                                               |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |