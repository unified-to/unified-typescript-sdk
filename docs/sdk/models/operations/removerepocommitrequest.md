# RemoveRepoCommitRequest

## Example Usage

```typescript
import { RemoveRepoCommitRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: RemoveRepoCommitRequest = {
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `connectionId`       | *string*             | :heavy_check_mark:   | ID of the connection |
| `id`                 | *string*             | :heavy_check_mark:   | ID of the Commit     |