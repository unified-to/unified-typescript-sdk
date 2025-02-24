# CreateRepoCommitRequest

## Example Usage

```typescript
import { CreateRepoCommitRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateRepoCommitRequest = {
  repoCommit: {
    repoId: "<id>",
    userId: "<id>",
  },
  connectionId: "<id>",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `repoCommit`                                                  | [shared.RepoCommit](../../../sdk/models/shared/repocommit.md) | :heavy_check_mark:                                            | N/A                                                           |
| `connectionId`                                                | *string*                                                      | :heavy_check_mark:                                            | ID of the connection                                          |
| `fields`                                                      | *string*[]                                                    | :heavy_minus_sign:                                            | Comma-delimited fields to return                              |