# PatchDmsOpcodeRequest

## Example Usage

```typescript
import { PatchDmsOpcodeRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchDmsOpcodeRequest = {
  dmsOpcode: {},
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `dmsOpcode`                                                                                                                                      | [shared.DmsOpcode](../../../sdk/models/shared/dmsopcode.md)                                                                                      | :heavy_check_mark:                                                                                                                               | A service operation code (labor operation, menu or standard repair time)                                                                         |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.PatchDmsOpcodeQueryParamFields](../../../sdk/models/operations/patchdmsopcodequeryparamfields.md)[]                                  | :heavy_minus_sign:                                                                                                                               | Fields to return                                                                                                                                 |
| `id`                                                                                                                                             | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the Opcode                                                                                                                                 |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |