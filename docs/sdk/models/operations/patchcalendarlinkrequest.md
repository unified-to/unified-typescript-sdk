# PatchCalendarLinkRequest

## Example Usage

```typescript
import { PatchCalendarLinkRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchCalendarLinkRequest = {
  calendarLink: {
    url: "https://grimy-verve.biz",
  },
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `calendarLink`                                                    | [shared.CalendarLink](../../../sdk/models/shared/calendarlink.md) | :heavy_check_mark:                                                | N/A                                                               |
| `connectionId`                                                    | *string*                                                          | :heavy_check_mark:                                                | ID of the connection                                              |
| `fields`                                                          | *string*[]                                                        | :heavy_minus_sign:                                                | Comma-delimited fields to return                                  |
| `id`                                                              | *string*                                                          | :heavy_check_mark:                                                | ID of the Link                                                    |