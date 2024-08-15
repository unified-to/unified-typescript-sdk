# RemoveStorageFileRequest

## Example Usage

```typescript
import { RemoveStorageFileRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: RemoveStorageFileRequest = {
    connectionId: "<value>",
    id: "<id>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `connectionId`       | *string*             | :heavy_check_mark:   | ID of the connection |
| `id`                 | *string*             | :heavy_check_mark:   | ID of the File       |