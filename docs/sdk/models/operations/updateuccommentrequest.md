# UpdateUcCommentRequest

## Example Usage

```typescript
import { UpdateUcCommentRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateUcCommentRequest = {
  ucComment: {
    content: "<value>",
  },
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ucComment`                                                                                                                                      | [shared.UcComment](../../../sdk/models/shared/uccomment.md)                                                                                      | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              |
| `connectionId`                                                                                                                                   | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the connection                                                                                                                             |
| `fields`                                                                                                                                         | [operations.UpdateUcCommentQueryParamFields](../../../sdk/models/operations/updateuccommentqueryparamfields.md)[]                                | :heavy_minus_sign:                                                                                                                               | Fields to return                                                                                                                                 |
| `id`                                                                                                                                             | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | ID of the Comment                                                                                                                                |
| `raw`                                                                                                                                            | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Raw parameters to include in the 3rd-party request. Encoded as a URL component. eg. raw parameters: foo=bar&zoo=bar -> raw=foo%3Dbar%26zoo%3Dbar |