# PatchCalendarCalendarRequest

## Example Usage

```typescript
import { PatchCalendarCalendarRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchCalendarCalendarRequest = {
  calendarCalendar: {
    name: "<value>",
  },
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `calendarCalendar`                                                                                                                               | [shared.CalendarCalendar](../../../sdk/models/shared/calendarcalendar.md)                                                                        | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.PatchCalendarCalendarQueryParamFields](../../../sdk/models/operations/patchcalendarcalendarqueryparamfields.md)[]                    | :heavy_minus_sign:                                                                                                                               | Fields to return                                                                                                                                 |
| `id`                                                                                                                                             | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the Calendar                                                                                                                               |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |