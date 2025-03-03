# CreateCalendarEventRequest

## Example Usage

```typescript
import { CreateCalendarEventRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateCalendarEventRequest = {
  calendarEvent: {
    endAt: "<value>",
    startAt: "<value>",
    subject: "<value>",
  },
  connectionId: "<id>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `calendarEvent`                                                     | [shared.CalendarEvent](../../../sdk/models/shared/calendarevent.md) | :heavy_check_mark:                                                  | N/A                                                                 |
| `connectionId`                                                      | *string*                                                            | :heavy_check_mark:                                                  | ID of the connection                                                |
| `fields`                                                            | *string*[]                                                          | :heavy_minus_sign:                                                  | Comma-delimited fields to return                                    |