# CreateCommerceSaleschannelRequest

## Example Usage

```typescript
import { CreateCommerceSaleschannelRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateCommerceSaleschannelRequest = {
  commerceSaleschannel: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `commerceSaleschannel`                                                                                                                           | [shared.CommerceSaleschannel](../../../sdk/models/shared/commercesaleschannel.md)                                                                | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.CreateCommerceSaleschannelQueryParamFields](../../../sdk/models/operations/createcommercesaleschannelqueryparamfields.md)[]          | :heavy_minus_sign:                                                                                                                               | Comma-delimited fields to return                                                                                                                 |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |