# CreateRepoRepositoryRequest

## Example Usage

```typescript
import { CreateRepoRepositoryRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateRepoRepositoryRequest = {
  connectionId: "<id>",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `repoRepository`                                                      | [shared.RepoRepository](../../../sdk/models/shared/reporepository.md) | :heavy_minus_sign:                                                    | N/A                                                                   |
| `connectionId`                                                        | *string*                                                              | :heavy_check_mark:                                                    | ID of the connection                                                  |
| `fields`                                                              | *string*[]                                                            | :heavy_minus_sign:                                                    | Comma-delimited fields to return                                      |