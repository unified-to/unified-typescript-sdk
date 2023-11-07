# CreateUnifiedWebhookRequest


## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `webhook`                                                | [shared.Webhook](../../models/shared/webhook.md)         | :heavy_minus_sign:                                       | N/A                                                      |
| `connectionId`                                           | *string*                                                 | :heavy_check_mark:                                       | ID of the connection                                     |
| `events`                                                 | [operations.Events](../../models/operations/events.md)[] | :heavy_minus_sign:                                       | Which events to subscribe to.                            |
| `object`                                                 | *string*                                                 | :heavy_check_mark:                                       | The object to subscribe to                               |