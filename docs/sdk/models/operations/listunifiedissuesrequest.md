# ListUnifiedIssuesRequest

## Example Usage

```typescript
import { ListUnifiedIssuesRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: ListUnifiedIssuesRequest = {};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `limit`                                                                                                           | *number*                                                                                                          | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `offset`                                                                                                          | *number*                                                                                                          | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `order`                                                                                                           | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `sort`                                                                                                            | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | N/A                                                                                                               |
| `updatedGte`                                                                                                      | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | Return only results whose updated date is equal or greater to this value (ISO-8601 / YYYY-MM-DDTHH:MM:SSZ format) |