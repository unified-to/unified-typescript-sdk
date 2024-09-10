# UpdateKmsPageRequest

## Example Usage

```typescript
import { UpdateKmsPageRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateKmsPageRequest = {
  connectionId: "<value>",
  id: "<id>",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `kmsPage`                                               | [shared.KmsPage](../../../sdk/models/shared/kmspage.md) | :heavy_minus_sign:                                      | N/A                                                     |
| `connectionId`                                          | *string*                                                | :heavy_check_mark:                                      | ID of the connection                                    |
| `fields`                                                | *string*[]                                              | :heavy_minus_sign:                                      | Comma-delimited fields to return                        |
| `id`                                                    | *string*                                                | :heavy_check_mark:                                      | ID of the Page                                          |