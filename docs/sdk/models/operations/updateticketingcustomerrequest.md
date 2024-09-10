# UpdateTicketingCustomerRequest

## Example Usage

```typescript
import { UpdateTicketingCustomerRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateTicketingCustomerRequest = {
  connectionId: "<value>",
  id: "<id>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `ticketingCustomer`                                                         | [shared.TicketingCustomer](../../../sdk/models/shared/ticketingcustomer.md) | :heavy_minus_sign:                                                          | N/A                                                                         |
| `connectionId`                                                              | *string*                                                                    | :heavy_check_mark:                                                          | ID of the connection                                                        |
| `id`                                                                        | *string*                                                                    | :heavy_check_mark:                                                          | ID of the Customer                                                          |