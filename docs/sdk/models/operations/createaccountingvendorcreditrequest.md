# CreateAccountingVendorcreditRequest

## Example Usage

```typescript
import { CreateAccountingVendorcreditRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateAccountingVendorcreditRequest = {
  accountingVendorcredit: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `accountingVendorcredit`                                                                                                                         | [shared.AccountingVendorcredit](../../../sdk/models/shared/accountingvendorcredit.md)                                                            | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.CreateAccountingVendorcreditQueryParamFields](../../../sdk/models/operations/createaccountingvendorcreditqueryparamfields.md)[]      | :heavy_minus_sign:                                                                                                                               | Fields to return                                                                                                                                 |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |