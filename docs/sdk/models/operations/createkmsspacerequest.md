# CreateKmsSpaceRequest

## Example Usage

```typescript
import { CreateKmsSpaceRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateKmsSpaceRequest = {
  kmsSpace: {
    name: "<value>",
  },
  connectionId: "<id>",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `kmsSpace`                                                | [shared.KmsSpace](../../../sdk/models/shared/kmsspace.md) | :heavy_check_mark:                                        | N/A                                                       |
| `connectionId`                                            | *string*                                                  | :heavy_check_mark:                                        | ID of the connection                                      |
| `fields`                                                  | *string*[]                                                | :heavy_minus_sign:                                        | Comma-delimited fields to return                          |