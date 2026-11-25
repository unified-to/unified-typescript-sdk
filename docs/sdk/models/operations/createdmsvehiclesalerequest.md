# CreateDmsVehiclesaleRequest

## Example Usage

```typescript
import { CreateDmsVehiclesaleRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateDmsVehiclesaleRequest = {
  dmsVehiclesale: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `dmsVehiclesale`                                                                                                                                 | [shared.DmsVehiclesale](../../../sdk/models/shared/dmsvehiclesale.md)                                                                            | :heavy_check_mark:                                                                                                                               | A vehicle sale or deal (retail, wholesale, fleet or dealer trade)                                                                                |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.CreateDmsVehiclesaleQueryParamFields](../../../sdk/models/operations/createdmsvehiclesalequeryparamfields.md)[]                      | :heavy_minus_sign:                                                                                                                               | Fields to return                                                                                                                                 |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |