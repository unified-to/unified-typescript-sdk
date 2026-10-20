# RepoBranch

## Example Usage

```typescript
import { RepoBranch } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: RepoBranch = {
  name: "<value>",
  repoId: "<id>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | (ISO-8601 / YYYY-MM-DDTHH:MM:SSZ format)                                                      |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | [shared.RepoMetadata](../../../sdk/models/shared/repometadata.md)[]                           | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `raw`                                                                                         | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `repoId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | (reference to RepoRepository)                                                                 |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | (ISO-8601 / YYYY-MM-DDTHH:MM:SSZ format)                                                      |