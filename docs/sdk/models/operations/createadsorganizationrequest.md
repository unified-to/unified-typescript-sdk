# CreateAdsOrganizationRequest

## Example Usage

```typescript
import { CreateAdsOrganizationRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateAdsOrganizationRequest = {
  adsOrganization: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `adsOrganization`                                                                                                                                | [shared.AdsOrganization](../../../sdk/models/shared/adsorganization.md)                                                                          | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.CreateAdsOrganizationQueryParamFields](../../../sdk/models/operations/createadsorganizationqueryparamfields.md)[]                    | :heavy_minus_sign:                                                                                                                               | Fields to return                                                                                                                                 |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |