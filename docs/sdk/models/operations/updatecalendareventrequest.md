# UpdateCalendarEventRequest

## Example Usage

```typescript
import { UpdateCalendarEventRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateCalendarEventRequest = {
  calendarEvent: {
    endAt: "<value>",
    startAt: "<value>",
    subject: "<value>",
  },
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `calendarEvent`                                                     | [shared.CalendarEvent](../../../sdk/models/shared/calendarevent.md) | :heavy_check_mark:                                                  | N/A                                                                 |
| `connectionId`                                                      | *string*                                                            | :heavy_check_mark:                                                  | ID of the connection                                                |
| `fields`                                                            | *string*[]                                                          | :heavy_minus_sign:                                                  | Comma-delimited fields to return                                    |
| `id`                                                                | *string*                                                            | :heavy_check_mark:                                                  | ID of the Event                                                     |