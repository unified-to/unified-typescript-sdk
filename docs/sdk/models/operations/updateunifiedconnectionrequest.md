# UpdateUnifiedConnectionRequest

## Example Usage

```typescript
import { UpdateUnifiedConnectionRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateUnifiedConnectionRequest = {
  connection: {
    categories: [
      "ticketing",
    ],
    integrationType: "<value>",
    permissions: [
      "payment_payment_write",
    ],
  },
  id: "<id>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `connection`                                                         | [shared.Connection](../../../sdk/models/shared/connection.md)        | :heavy_check_mark:                                                   | A connection represents a specific authentication of an integration. |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | ID of the Connection                                                 |