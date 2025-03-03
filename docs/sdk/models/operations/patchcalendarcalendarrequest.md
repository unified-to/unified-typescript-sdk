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

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `calendarCalendar`                                                        | [shared.CalendarCalendar](../../../sdk/models/shared/calendarcalendar.md) | :heavy_check_mark:                                                        | N/A                                                                       |
| `connectionId`                                                            | *string*                                                                  | :heavy_check_mark:                                                        | ID of the connection                                                      |
| `fields`                                                                  | *string*[]                                                                | :heavy_minus_sign:                                                        | Comma-delimited fields to return                                          |
| `id`                                                                      | *string*                                                                  | :heavy_check_mark:                                                        | ID of the Calendar                                                        |