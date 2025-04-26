# CreateUcCommentRequest

## Example Usage

```typescript
import { CreateUcCommentRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateUcCommentRequest = {
  ucComment: {
    content: "<value>",
  },
  connectionId: "<id>",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `ucComment`                                                 | [shared.UcComment](../../../sdk/models/shared/uccomment.md) | :heavy_check_mark:                                          | N/A                                                         |
| `connectionId`                                              | *string*                                                    | :heavy_check_mark:                                          | ID of the connection                                        |
| `fields`                                                    | *string*[]                                                  | :heavy_minus_sign:                                          | Comma-delimited fields to return                            |