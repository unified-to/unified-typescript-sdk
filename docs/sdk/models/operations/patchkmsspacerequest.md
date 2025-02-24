# PatchKmsSpaceRequest

## Example Usage

```typescript
import { PatchKmsSpaceRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchKmsSpaceRequest = {
  kmsSpace: {
    name: "<value>",
  },
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `kmsSpace`                                                | [shared.KmsSpace](../../../sdk/models/shared/kmsspace.md) | :heavy_check_mark:                                        | N/A                                                       |
| `connectionId`                                            | *string*                                                  | :heavy_check_mark:                                        | ID of the connection                                      |
| `fields`                                                  | *string*[]                                                | :heavy_minus_sign:                                        | Comma-delimited fields to return                          |
| `id`                                                      | *string*                                                  | :heavy_check_mark:                                        | ID of the Space                                           |