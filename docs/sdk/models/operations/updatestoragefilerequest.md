# UpdateStorageFileRequest

## Example Usage

```typescript
import { UpdateStorageFileRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateStorageFileRequest = {
    connectionId: "<value>",
    id: "<id>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `storageFile`                                                   | [shared.StorageFile](../../../sdk/models/shared/storagefile.md) | :heavy_minus_sign:                                              | N/A                                                             |
| `connectionId`                                                  | *string*                                                        | :heavy_check_mark:                                              | ID of the connection                                            |
| `id`                                                            | *string*                                                        | :heavy_check_mark:                                              | ID of the File                                                  |