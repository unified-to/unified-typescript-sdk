# PatchStorageFileRequest

## Example Usage

```typescript
import { PatchStorageFileRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchStorageFileRequest = {
  storageFile: {},
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `storageFile`                                                   | [shared.StorageFile](../../../sdk/models/shared/storagefile.md) | :heavy_check_mark:                                              | N/A                                                             |
| `connectionId`                                                  | *string*                                                        | :heavy_check_mark:                                              | ID of the connection                                            |
| `fields`                                                        | *string*[]                                                      | :heavy_minus_sign:                                              | Comma-delimited fields to return                                |
| `id`                                                            | *string*                                                        | :heavy_check_mark:                                              | ID of the File                                                  |