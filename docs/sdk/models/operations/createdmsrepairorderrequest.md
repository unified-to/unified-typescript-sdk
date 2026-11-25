# CreateDmsRepairorderRequest

## Example Usage

```typescript
import { CreateDmsRepairorderRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateDmsRepairorderRequest = {
  dmsRepairorder: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `dmsRepairorder`                                                                                                                                 | [shared.DmsRepairorder](../../../sdk/models/shared/dmsrepairorder.md)                                                                            | :heavy_check_mark:                                                                                                                               | A service repair order (work order) for one vehicle visit                                                                                        |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.CreateDmsRepairorderQueryParamFields](../../../sdk/models/operations/createdmsrepairorderqueryparamfields.md)[]                      | :heavy_minus_sign:                                                                                                                               | Fields to return                                                                                                                                 |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |