# PatchKmsCommentRequest

## Example Usage

```typescript
import { PatchKmsCommentRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchKmsCommentRequest = {
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `kmsComment`                                                  | [shared.KmsComment](../../../sdk/models/shared/kmscomment.md) | :heavy_minus_sign:                                            | N/A                                                           |
| `connectionId`                                                | *string*                                                      | :heavy_check_mark:                                            | ID of the connection                                          |
| `fields`                                                      | *string*[]                                                    | :heavy_minus_sign:                                            | Comma-delimited fields to return                              |
| `id`                                                          | *string*                                                      | :heavy_check_mark:                                            | ID of the Comment                                             |