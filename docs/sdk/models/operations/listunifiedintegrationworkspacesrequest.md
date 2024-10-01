# ListUnifiedIntegrationWorkspacesRequest

## Example Usage

```typescript
import { ListUnifiedIntegrationWorkspacesRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: ListUnifiedIntegrationWorkspacesRequest = {
  workspaceId: "<id>",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `active`                                                                                    | *boolean*                                                                                   | :heavy_minus_sign:                                                                          | Filter the results for only the workspace's active integrations                             |
| `categories`                                                                                | [operations.QueryParamCategories](../../../sdk/models/operations/queryparamcategories.md)[] | :heavy_minus_sign:                                                                          | Filter the results on these categories                                                      |
| `env`                                                                                       | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `limit`                                                                                     | *number*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `offset`                                                                                    | *number*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `summary`                                                                                   | *boolean*                                                                                   | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `updatedGte`                                                                                | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `workspaceId`                                                                               | *string*                                                                                    | :heavy_check_mark:                                                                          | The ID of the workspace                                                                     |