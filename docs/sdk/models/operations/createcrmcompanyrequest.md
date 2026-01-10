# CreateCrmCompanyRequest

## Example Usage

```typescript
import { CreateCrmCompanyRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateCrmCompanyRequest = {
  crmCompany: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `crmCompany`                                                                                                                                     | [shared.CrmCompany](../../../sdk/models/shared/crmcompany.md)                                                                                    | :heavy_check_mark:                                                                                                                               | A company represents an organization that optionally is associated with a deal and/or contacts                                                   |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.CreateCrmCompanyQueryParamFields](../../../sdk/models/operations/createcrmcompanyqueryparamfields.md)[]                              | :heavy_minus_sign:                                                                                                                               | Fields to return                                                                                                                                 |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |