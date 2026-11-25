# PatchDmsPartRequest

## Example Usage

```typescript
import { PatchDmsPartRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchDmsPartRequest = {
  dmsPart: {},
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `dmsPart`                                                                                                                                        | [shared.DmsPart](../../../sdk/models/shared/dmspart.md)                                                                                          | :heavy_check_mark:                                                                                                                               | A part in the dealer parts inventory                                                                                                             |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.PatchDmsPartQueryParamFields](../../../sdk/models/operations/patchdmspartqueryparamfields.md)[]                                      | :heavy_minus_sign:                                                                                                                               | Fields to return                                                                                                                                 |
| `id`                                                                                                                                             | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the Part                                                                                                                                   |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |