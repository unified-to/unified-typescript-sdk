# CreateHealthcareAppointmentRequest

## Example Usage

```typescript
import { CreateHealthcareAppointmentRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateHealthcareAppointmentRequest = {
  healthcareAppointment: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `healthcareAppointment`                                                                                                                          | [shared.HealthcareAppointment](../../../sdk/models/shared/healthcareappointment.md)                                                              | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.CreateHealthcareAppointmentQueryParamFields](../../../sdk/models/operations/createhealthcareappointmentqueryparamfields.md)[]        | :heavy_minus_sign:                                                                                                                               | Fields to return                                                                                                                                 |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |