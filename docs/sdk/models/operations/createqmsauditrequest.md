# CreateQmsAuditRequest

## Example Usage

```typescript
import { CreateQmsAuditRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateQmsAuditRequest = {
  qmsAudit: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `qmsAudit`                                                                                                                                       | [shared.QmsAudit](../../../sdk/models/shared/qmsaudit.md)                                                                                        | :heavy_check_mark:                                                                                                                               | An internal, supplier, customer or certification audit                                                                                           |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.CreateQmsAuditQueryParamFields](../../../sdk/models/operations/createqmsauditqueryparamfields.md)[]                                  | :heavy_minus_sign:                                                                                                                               | Fields to return                                                                                                                                 |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |