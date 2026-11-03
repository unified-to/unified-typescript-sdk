# PatchPlmBomlineRequest

## Example Usage

```typescript
import { PatchPlmBomlineRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchPlmBomlineRequest = {
  plmBomline: {},
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `plmBomline`                                                                                                                                     | [shared.PlmBomline](../../../sdk/models/shared/plmbomline.md)                                                                                    | :heavy_check_mark:                                                                                                                               | One parent to child usage in a bill of materials                                                                                                 |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.PatchPlmBomlineQueryParamFields](../../../sdk/models/operations/patchplmbomlinequeryparamfields.md)[]                                | :heavy_minus_sign:                                                                                                                               | Fields to return                                                                                                                                 |
| `id`                                                                                                                                             | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the Bomline                                                                                                                                |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |