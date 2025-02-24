# UpdateRepoBranchRequest

## Example Usage

```typescript
import { UpdateRepoBranchRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateRepoBranchRequest = {
  repoBranch: {
    name: "<value>",
    repoId: "<id>",
  },
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `repoBranch`                                                  | [shared.RepoBranch](../../../sdk/models/shared/repobranch.md) | :heavy_check_mark:                                            | N/A                                                           |
| `connectionId`                                                | *string*                                                      | :heavy_check_mark:                                            | ID of the connection                                          |
| `fields`                                                      | *string*[]                                                    | :heavy_minus_sign:                                            | Comma-delimited fields to return                              |
| `id`                                                          | *string*                                                      | :heavy_check_mark:                                            | ID of the Branch                                              |