# CreateKmsPageRequest

## Example Usage

```typescript
import { CreateKmsPageRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateKmsPageRequest = {
  kmsPage: {
    title: "<value>",
    type: "HTML",
  },
  connectionId: "<id>",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `kmsPage`                                               | [shared.KmsPage](../../../sdk/models/shared/kmspage.md) | :heavy_check_mark:                                      | N/A                                                     |
| `connectionId`                                          | *string*                                                | :heavy_check_mark:                                      | ID of the connection                                    |
| `fields`                                                | *string*[]                                              | :heavy_minus_sign:                                      | Comma-delimited fields to return                        |