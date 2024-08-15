# PatchTicketingNoteRequest

## Example Usage

```typescript
import { PatchTicketingNoteRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchTicketingNoteRequest = {
    connectionId: "<value>",
    id: "<id>",
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `ticketingNote`                                                     | [shared.TicketingNote](../../../sdk/models/shared/ticketingnote.md) | :heavy_minus_sign:                                                  | N/A                                                                 |
| `connectionId`                                                      | *string*                                                            | :heavy_check_mark:                                                  | ID of the connection                                                |
| `id`                                                                | *string*                                                            | :heavy_check_mark:                                                  | ID of the Note                                                      |