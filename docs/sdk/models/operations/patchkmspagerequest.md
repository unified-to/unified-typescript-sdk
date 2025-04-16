# PatchKmsPageRequest

## Example Usage

```typescript
import { PatchKmsPageRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchKmsPageRequest = {
  kmsPage: {
    title: "<value>",
    type: "HTML",
  },
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `kmsPage`                                               | [shared.KmsPage](../../../sdk/models/shared/kmspage.md) | :heavy_check_mark:                                      | N/A                                                     |
| `connectionId`                                          | *string*                                                | :heavy_check_mark:                                      | ID of the connection                                    |
| `fields`                                                | *string*[]                                              | :heavy_minus_sign:                                      | Comma-delimited fields to return                        |
| `id`                                                    | *string*                                                | :heavy_check_mark:                                      | ID of the Page                                          |