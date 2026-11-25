# UpdateDmsVehicleRequest

## Example Usage

```typescript
import { UpdateDmsVehicleRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateDmsVehicleRequest = {
  dmsVehicle: {},
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `dmsVehicle`                                                                                                                                     | [shared.DmsVehicle](../../../sdk/models/shared/dmsvehicle.md)                                                                                    | :heavy_check_mark:                                                                                                                               | A vehicle or other dealer unit: dealer stock or a customer-owned vehicle seen by service                                                         |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.UpdateDmsVehicleQueryParamFields](../../../sdk/models/operations/updatedmsvehiclequeryparamfields.md)[]                              | :heavy_minus_sign:                                                                                                                               | Fields to return                                                                                                                                 |
| `id`                                                                                                                                             | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the Vehicle                                                                                                                                |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |