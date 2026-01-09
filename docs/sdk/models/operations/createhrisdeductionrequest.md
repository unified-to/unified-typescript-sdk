# CreateHrisDeductionRequest

## Example Usage

```typescript
import { CreateHrisDeductionRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateHrisDeductionRequest = {
  hrisDeduction: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `hrisDeduction`                                                                                                                                  | [shared.HrisDeduction](../../../sdk/models/shared/hrisdeduction.md)                                                                              | :heavy_check_mark:                                                                                                                               | Employee-specific deduction/benefit enrolment.                                                                                                   |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.CreateHrisDeductionQueryParamFields](../../../sdk/models/operations/createhrisdeductionqueryparamfields.md)[]                        | :heavy_minus_sign:                                                                                                                               | Comma-delimited fields to return                                                                                                                 |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |