# UpdateRepoCommitRequest

## Example Usage

```typescript
import { UpdateRepoCommitRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateRepoCommitRequest = {
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `repoCommit`                                                  | [shared.RepoCommit](../../../sdk/models/shared/repocommit.md) | :heavy_minus_sign:                                            | N/A                                                           |
| `connectionId`                                                | *string*                                                      | :heavy_check_mark:                                            | ID of the connection                                          |
| `fields`                                                      | *string*[]                                                    | :heavy_minus_sign:                                            | Comma-delimited fields to return                              |
| `id`                                                          | *string*                                                      | :heavy_check_mark:                                            | ID of the Commit                                              |