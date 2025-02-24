# UpdateKmsCommentRequest

## Example Usage

```typescript
import { UpdateKmsCommentRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateKmsCommentRequest = {
  kmsComment: {
    content: "<value>",
  },
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `kmsComment`                                                  | [shared.KmsComment](../../../sdk/models/shared/kmscomment.md) | :heavy_check_mark:                                            | N/A                                                           |
| `connectionId`                                                | *string*                                                      | :heavy_check_mark:                                            | ID of the connection                                          |
| `fields`                                                      | *string*[]                                                    | :heavy_minus_sign:                                            | Comma-delimited fields to return                              |
| `id`                                                          | *string*                                                      | :heavy_check_mark:                                            | ID of the Comment                                             |