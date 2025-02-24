# CreateRepoOrganizationRequest

## Example Usage

```typescript
import { CreateRepoOrganizationRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateRepoOrganizationRequest = {
  repoOrganization: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `repoOrganization`                                                        | [shared.RepoOrganization](../../../sdk/models/shared/repoorganization.md) | :heavy_check_mark:                                                        | N/A                                                                       |
| `connectionId`                                                            | *string*                                                                  | :heavy_check_mark:                                                        | ID of the connection                                                      |
| `fields`                                                                  | *string*[]                                                                | :heavy_minus_sign:                                                        | Comma-delimited fields to return                                          |