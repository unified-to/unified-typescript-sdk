# CreatePlmChangeRequest

## Example Usage

```typescript
import { CreatePlmChangeRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreatePlmChangeRequest = {
  plmChange: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `plmChange`                                                                                                                                      | [shared.PlmChange](../../../sdk/models/shared/plmchange.md)                                                                                      | :heavy_check_mark:                                                                                                                               | A change request, order or notice                                                                                                                |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.CreatePlmChangeQueryParamFields](../../../sdk/models/operations/createplmchangequeryparamfields.md)[]                                | :heavy_minus_sign:                                                                                                                               | Fields to return                                                                                                                                 |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |