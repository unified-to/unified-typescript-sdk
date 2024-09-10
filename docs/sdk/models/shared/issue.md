# Issue

## Example Usage

```typescript
import { Issue } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: Issue = {
  status: "ON_HOLD",
  ticketRef: "<value>",
  title: "<value>",
  workspaceId: "<value>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `createdAt`                                                     | *string*                                                        | :heavy_minus_sign:                                              | N/A                                                             |
| `id`                                                            | *string*                                                        | :heavy_minus_sign:                                              | N/A                                                             |
| `importance`                                                    | *number*                                                        | :heavy_minus_sign:                                              | N/A                                                             |
| `resolutionTime`                                                | *number*                                                        | :heavy_minus_sign:                                              | N/A                                                             |
| `size`                                                          | *number*                                                        | :heavy_minus_sign:                                              | N/A                                                             |
| `status`                                                        | [shared.IssueStatus](../../../sdk/models/shared/issuestatus.md) | :heavy_check_mark:                                              | N/A                                                             |
| `ticketRef`                                                     | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `title`                                                         | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `type`                                                          | *string*[]                                                      | :heavy_minus_sign:                                              | N/A                                                             |
| `updatedAt`                                                     | *string*                                                        | :heavy_minus_sign:                                              | N/A                                                             |
| `url`                                                           | *string*                                                        | :heavy_minus_sign:                                              | N/A                                                             |
| `workspaceId`                                                   | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             |