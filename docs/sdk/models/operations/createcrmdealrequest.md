# CreateCrmDealRequest

## Example Usage

```typescript
import { CreateCrmDealRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateCrmDealRequest = {
  crmDeal: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `crmDeal`                                                                                                                                        | [shared.CrmDeal](../../../sdk/models/shared/crmdeal.md)                                                                                          | :heavy_check_mark:                                                                                                                               | A deal represents an opportunity with companies and/or contacts                                                                                  |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.CreateCrmDealQueryParamFields](../../../sdk/models/operations/createcrmdealqueryparamfields.md)[]                                    | :heavy_minus_sign:                                                                                                                               | Fields to return                                                                                                                                 |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |