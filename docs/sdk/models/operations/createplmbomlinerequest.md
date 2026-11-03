# CreatePlmBomlineRequest

## Example Usage

```typescript
import { CreatePlmBomlineRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreatePlmBomlineRequest = {
  plmBomline: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `plmBomline`                                                                                                                                     | [shared.PlmBomline](../../../sdk/models/shared/plmbomline.md)                                                                                    | :heavy_check_mark:                                                                                                                               | One parent to child usage in a bill of materials                                                                                                 |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.CreatePlmBomlineQueryParamFields](../../../sdk/models/operations/createplmbomlinequeryparamfields.md)[]                              | :heavy_minus_sign:                                                                                                                               | Fields to return                                                                                                                                 |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |