# RemovePaymentSubscriptionRequest

## Example Usage

```typescript
import { RemovePaymentSubscriptionRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: RemovePaymentSubscriptionRequest = {
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `connectionId`         | *string*               | :heavy_check_mark:     | ID of the connection   |
| `id`                   | *string*               | :heavy_check_mark:     | ID of the Subscription |