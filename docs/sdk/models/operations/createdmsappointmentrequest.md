# CreateDmsAppointmentRequest

## Example Usage

```typescript
import { CreateDmsAppointmentRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateDmsAppointmentRequest = {
  dmsAppointment: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `dmsAppointment`                                                                                                                                 | [shared.DmsAppointment](../../../sdk/models/shared/dmsappointment.md)                                                                            | :heavy_check_mark:                                                                                                                               | A service appointment (booking)                                                                                                                  |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.CreateDmsAppointmentQueryParamFields](../../../sdk/models/operations/createdmsappointmentqueryparamfields.md)[]                      | :heavy_minus_sign:                                                                                                                               | Fields to return                                                                                                                                 |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |