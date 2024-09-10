# PatchTicketingTicketRequest

## Example Usage

```typescript
import { PatchTicketingTicketRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchTicketingTicketRequest = {
  connectionId: "<value>",
  id: "<id>",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `ticketingTicket`                                                       | [shared.TicketingTicket](../../../sdk/models/shared/ticketingticket.md) | :heavy_minus_sign:                                                      | N/A                                                                     |
| `connectionId`                                                          | *string*                                                                | :heavy_check_mark:                                                      | ID of the connection                                                    |
| `id`                                                                    | *string*                                                                | :heavy_check_mark:                                                      | ID of the Ticket                                                        |