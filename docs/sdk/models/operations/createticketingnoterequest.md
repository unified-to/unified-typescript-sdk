# CreateTicketingNoteRequest

## Example Usage

```typescript
import { CreateTicketingNoteRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateTicketingNoteRequest = {
  ticketingNote: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `ticketingNote`                                                     | [shared.TicketingNote](../../../sdk/models/shared/ticketingnote.md) | :heavy_check_mark:                                                  | N/A                                                                 |
| `connectionId`                                                      | *string*                                                            | :heavy_check_mark:                                                  | ID of the connection                                                |
| `fields`                                                            | *string*[]                                                          | :heavy_minus_sign:                                                  | Comma-delimited fields to return                                    |