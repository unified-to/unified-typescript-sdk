# CreateHrisBankaccountRequest

## Example Usage

```typescript
import { CreateHrisBankaccountRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateHrisBankaccountRequest = {
  hrisBankaccount: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `hrisBankaccount`                                                                                                                                | [shared.HrisBankaccount](../../../sdk/models/shared/hrisbankaccount.md)                                                                          | :heavy_check_mark:                                                                                                                               | Employee payroll bank account for direct deposit.                                                                                                |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.CreateHrisBankaccountQueryParamFields](../../../sdk/models/operations/createhrisbankaccountqueryparamfields.md)[]                    | :heavy_minus_sign:                                                                                                                               | Fields to return                                                                                                                                 |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |