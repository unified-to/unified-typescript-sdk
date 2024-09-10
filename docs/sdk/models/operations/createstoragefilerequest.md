# CreateStorageFileRequest

## Example Usage

```typescript
import { CreateStorageFileRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateStorageFileRequest = {
  connectionId: "<value>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `storageFile`                                                   | [shared.StorageFile](../../../sdk/models/shared/storagefile.md) | :heavy_minus_sign:                                              | N/A                                                             |
| `connectionId`                                                  | *string*                                                        | :heavy_check_mark:                                              | ID of the connection                                            |
| `fields`                                                        | *string*[]                                                      | :heavy_minus_sign:                                              | Comma-delimited fields to return                                |