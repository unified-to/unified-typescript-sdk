# PatchRepoRepositoryRequest

## Example Usage

```typescript
import { PatchRepoRepositoryRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchRepoRepositoryRequest = {
  repoRepository: {
    name: "<value>",
  },
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `repoRepository`                                                      | [shared.RepoRepository](../../../sdk/models/shared/reporepository.md) | :heavy_check_mark:                                                    | N/A                                                                   |
| `connectionId`                                                        | *string*                                                              | :heavy_check_mark:                                                    | ID of the connection                                                  |
| `fields`                                                              | *string*[]                                                            | :heavy_minus_sign:                                                    | Comma-delimited fields to return                                      |
| `id`                                                                  | *string*                                                              | :heavy_check_mark:                                                    | ID of the Repository                                                  |