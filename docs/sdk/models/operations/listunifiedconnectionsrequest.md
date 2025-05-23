# ListUnifiedConnectionsRequest

## Example Usage

```typescript
import { ListUnifiedConnectionsRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: ListUnifiedConnectionsRequest = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `categories`                                                                         | [operations.Categories](../../../sdk/models/operations/categories.md)[]              | :heavy_minus_sign:                                                                   | Filter the results on these categories                                               |
| `env`                                                                                | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `externalXref`                                                                       | *string*                                                                             | :heavy_minus_sign:                                                                   | Filter the results to only those integrations for your user referenced by this value |
| `limit`                                                                              | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `offset`                                                                             | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `order`                                                                              | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `sort`                                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `updatedGte`                                                                         | *string*                                                                             | :heavy_minus_sign:                                                                   | Return only results whose updated date is equal or greater to this value             |