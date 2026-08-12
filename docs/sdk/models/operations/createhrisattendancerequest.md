# CreateHrisAttendanceRequest

## Example Usage

```typescript
import { CreateHrisAttendanceRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateHrisAttendanceRequest = {
  hrisAttendance: {
    employeeUserId: "<id>",
    endAt: new Date("2024-07-14T17:41:30.339Z"),
    startAt: new Date("2026-05-12T05:48:12.890Z"),
  },
  connectionId: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `hrisAttendance`                                                                                                                                 | [shared.HrisAttendance](../../../sdk/models/shared/hrisattendance.md)                                                                            | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.CreateHrisAttendanceQueryParamFields](../../../sdk/models/operations/createhrisattendancequeryparamfields.md)[]                      | :heavy_minus_sign:                                                                                                                               | Fields to return                                                                                                                                 |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |