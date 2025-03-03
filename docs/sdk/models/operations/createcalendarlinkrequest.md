# CreateCalendarLinkRequest

## Example Usage

```typescript
import { CreateCalendarLinkRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateCalendarLinkRequest = {
  calendarLink: {
    url: "https://reasonable-schnitzel.biz",
  },
  connectionId: "<id>",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `calendarLink`                                                    | [shared.CalendarLink](../../../sdk/models/shared/calendarlink.md) | :heavy_check_mark:                                                | N/A                                                               |
| `connectionId`                                                    | *string*                                                          | :heavy_check_mark:                                                | ID of the connection                                              |
| `fields`                                                          | *string*[]                                                        | :heavy_minus_sign:                                                | Comma-delimited fields to return                                  |