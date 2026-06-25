# CreateCrmDeal2Request

## Example Usage

```typescript
import { CreateCrmDeal2Request } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateCrmDeal2Request = {
  crmDeal: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `crmDeal`                                                                                                                                        | [shared.CrmDeal](../../../sdk/models/shared/crmdeal.md)                                                                                          | :heavy_check_mark:                                                                                                                               | A deal represents an opportunity with companies and/or contacts                                                                                  |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.CreateCrmDeal2QueryParamFields](../../../sdk/models/operations/createcrmdeal2queryparamfields.md)[]                                  | :heavy_minus_sign:                                                                                                                               | Fields to return                                                                                                                                 |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |