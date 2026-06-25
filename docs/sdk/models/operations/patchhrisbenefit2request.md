# PatchHrisBenefit2Request

## Example Usage

```typescript
import { PatchHrisBenefit2Request } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchHrisBenefit2Request = {
  hrisBenefit: {},
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `hrisBenefit`                                                                                                                                    | [shared.HrisBenefit](../../../sdk/models/shared/hrisbenefit.md)                                                                                  | :heavy_check_mark:                                                                                                                               | Company-wide benefit plans available to employees.                                                                                               |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.PatchHrisBenefit2QueryParamFields](../../../sdk/models/operations/patchhrisbenefit2queryparamfields.md)[]                            | :heavy_minus_sign:                                                                                                                               | Fields to return                                                                                                                                 |
| `id`                                                                                                                                             | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the Benefit                                                                                                                                |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |