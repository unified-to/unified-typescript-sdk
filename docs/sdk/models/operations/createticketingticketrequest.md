# CreateTicketingTicketRequest

## Example Usage

```typescript
import { CreateTicketingTicketRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateTicketingTicketRequest = {
  connectionId: "<id>",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `ticketingTicket`                                                       | [shared.TicketingTicket](../../../sdk/models/shared/ticketingticket.md) | :heavy_minus_sign:                                                      | N/A                                                                     |
| `connectionId`                                                          | *string*                                                                | :heavy_check_mark:                                                      | ID of the connection                                                    |
| `fields`                                                                | *string*[]                                                              | :heavy_minus_sign:                                                      | Comma-delimited fields to return                                        |