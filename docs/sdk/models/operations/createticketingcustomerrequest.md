# CreateTicketingCustomerRequest

## Example Usage

```typescript
import { CreateTicketingCustomerRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateTicketingCustomerRequest = {
  ticketingCustomer: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `ticketingCustomer`                                                         | [shared.TicketingCustomer](../../../sdk/models/shared/ticketingcustomer.md) | :heavy_check_mark:                                                          | N/A                                                                         |
| `connectionId`                                                              | *string*                                                                    | :heavy_check_mark:                                                          | ID of the connection                                                        |
| `fields`                                                                    | *string*[]                                                                  | :heavy_minus_sign:                                                          | Comma-delimited fields to return                                            |