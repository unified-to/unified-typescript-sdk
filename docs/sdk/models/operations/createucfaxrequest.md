# CreateUcFaxRequest

## Example Usage

```typescript
import { CreateUcFaxRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateUcFaxRequest = {
  ucFax: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ucFax`                                                                                                                                          | [shared.UcFax](../../../sdk/models/shared/ucfax.md)                                                                                              | :heavy_check_mark:                                                                                                                               | A fax sent or received through a phone number                                                                                                    |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.CreateUcFaxQueryParamFields](../../../sdk/models/operations/createucfaxqueryparamfields.md)[]                                        | :heavy_minus_sign:                                                                                                                               | Fields to return                                                                                                                                 |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |