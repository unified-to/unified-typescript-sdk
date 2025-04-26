# PatchUcCommentRequest

## Example Usage

```typescript
import { PatchUcCommentRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchUcCommentRequest = {
  ucComment: {
    content: "<value>",
  },
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `ucComment`                                                 | [shared.UcComment](../../../sdk/models/shared/uccomment.md) | :heavy_check_mark:                                          | N/A                                                         |
| `connectionId`                                              | *string*                                                    | :heavy_check_mark:                                          | ID of the connection                                        |
| `fields`                                                    | *string*[]                                                  | :heavy_minus_sign:                                          | Comma-delimited fields to return                            |
| `id`                                                        | *string*                                                    | :heavy_check_mark:                                          | ID of the Comment                                           |