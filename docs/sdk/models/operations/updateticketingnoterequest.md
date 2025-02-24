# UpdateTicketingNoteRequest

## Example Usage

```typescript
import { UpdateTicketingNoteRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateTicketingNoteRequest = {
  ticketingNote: {},
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `ticketingNote`                                                     | [shared.TicketingNote](../../../sdk/models/shared/ticketingnote.md) | :heavy_check_mark:                                                  | N/A                                                                 |
| `connectionId`                                                      | *string*                                                            | :heavy_check_mark:                                                  | ID of the connection                                                |
| `fields`                                                            | *string*[]                                                          | :heavy_minus_sign:                                                  | Comma-delimited fields to return                                    |
| `id`                                                                | *string*                                                            | :heavy_check_mark:                                                  | ID of the Note                                                      |