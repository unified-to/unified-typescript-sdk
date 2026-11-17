# CreateHrisTaxwithholdingRequest

## Example Usage

```typescript
import { CreateHrisTaxwithholdingRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateHrisTaxwithholdingRequest = {
  hrisTaxwithholding: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `hrisTaxwithholding`                                                                                                                             | [shared.HrisTaxwithholding](../../../sdk/models/shared/hristaxwithholding.md)                                                                    | :heavy_check_mark:                                                                                                                               | Employee tax withholding settings for one jurisdiction (eg. W-4)                                                                                 |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.CreateHrisTaxwithholdingQueryParamFields](../../../sdk/models/operations/createhristaxwithholdingqueryparamfields.md)[]              | :heavy_minus_sign:                                                                                                                               | Fields to return                                                                                                                                 |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |