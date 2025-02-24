# CreateRepoBranchRequest

## Example Usage

```typescript
import { CreateRepoBranchRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateRepoBranchRequest = {
  repoBranch: {
    name: "<value>",
    repoId: "<id>",
  },
  connectionId: "<id>",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `repoBranch`                                                  | [shared.RepoBranch](../../../sdk/models/shared/repobranch.md) | :heavy_check_mark:                                            | N/A                                                           |
| `connectionId`                                                | *string*                                                      | :heavy_check_mark:                                            | ID of the connection                                          |
| `fields`                                                      | *string*[]                                                    | :heavy_minus_sign:                                            | Comma-delimited fields to return                              |