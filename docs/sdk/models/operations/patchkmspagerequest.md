# PatchKmsPageRequest

## Example Usage

```typescript
import { PatchKmsPageRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchKmsPageRequest = {
  connectionId: "<value>",
  id: "<id>",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `kmsPage`                                               | [shared.KmsPage](../../../sdk/models/shared/kmspage.md) | :heavy_minus_sign:                                      | N/A                                                     |
| `connectionId`                                          | *string*                                                | :heavy_check_mark:                                      | ID of the connection                                    |
| `id`                                                    | *string*                                                | :heavy_check_mark:                                      | ID of the Page                                          |