# ListUnifiedWebhooksRequest

## Example Usage

```typescript
import { ListUnifiedWebhooksRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: ListUnifiedWebhooksRequest = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `connectionId`                                                           | *string*                                                                 | :heavy_minus_sign:                                                       | Filter the results to just this integration                              |
| `createdLte`                                                             | *string*                                                                 | :heavy_minus_sign:                                                       | Return only results whose created date is equal or less to this value    |
| `env`                                                                    | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `integrationType`                                                        | *string*                                                                 | :heavy_minus_sign:                                                       | Filter the results to just this integration                              |
| `limit`                                                                  | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `object`                                                                 | *string*                                                                 | :heavy_minus_sign:                                                       | Filter the results for webhooks for only this object                     |
| `offset`                                                                 | *number*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `order`                                                                  | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `sort`                                                                   | *string*                                                                 | :heavy_minus_sign:                                                       | N/A                                                                      |
| `updatedGte`                                                             | *string*                                                                 | :heavy_minus_sign:                                                       | Return only results whose updated date is equal or greater to this value |