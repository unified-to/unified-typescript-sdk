# CreateQmsActionRequest

## Example Usage

```typescript
import { CreateQmsActionRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateQmsActionRequest = {
  qmsAction: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `qmsAction`                                                                                                                                      | [shared.QmsAction](../../../sdk/models/shared/qmsaction.md)                                                                                      | :heavy_check_mark:                                                                                                                               | A corrective or preventive action (CAPA)                                                                                                         |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.CreateQmsActionQueryParamFields](../../../sdk/models/operations/createqmsactionqueryparamfields.md)[]                                | :heavy_minus_sign:                                                                                                                               | Fields to return                                                                                                                                 |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |