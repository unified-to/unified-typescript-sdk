# CreatePlmPartRequest

## Example Usage

```typescript
import { CreatePlmPartRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreatePlmPartRequest = {
  plmPart: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `plmPart`                                                                                                                                        | [shared.PlmPart](../../../sdk/models/shared/plmpart.md)                                                                                          | :heavy_check_mark:                                                                                                                               | One revision of a part or item                                                                                                                   |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.CreatePlmPartQueryParamFields](../../../sdk/models/operations/createplmpartqueryparamfields.md)[]                                    | :heavy_minus_sign:                                                                                                                               | Fields to return                                                                                                                                 |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |