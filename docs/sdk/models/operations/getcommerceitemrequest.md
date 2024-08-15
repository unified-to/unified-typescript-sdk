# GetCommerceItemRequest

## Example Usage

```typescript
import { GetCommerceItemRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: GetCommerceItemRequest = {
    connectionId: "<value>",
    id: "<id>",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `connectionId`                   | *string*                         | :heavy_check_mark:               | ID of the connection             |
| `fields`                         | *string*[]                       | :heavy_minus_sign:               | Comma-delimited fields to return |
| `id`                             | *string*                         | :heavy_check_mark:               | ID of the Item                   |