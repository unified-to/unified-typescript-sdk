# UpdateTicketingNoteRequest


## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `ticketingNote`                                              | [shared.TicketingNote](../../models/shared/ticketingnote.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `connectionId`                                               | *string*                                                     | :heavy_check_mark:                                           | ID of the connection                                         |
| `fields`                                                     | *string*[]                                                   | :heavy_minus_sign:                                           | Comma-delimited fields to return                             |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | ID of the Note                                               |
| `ticketId`                                                   | *string*                                                     | :heavy_check_mark:                                           | ID of the ticket                                             |