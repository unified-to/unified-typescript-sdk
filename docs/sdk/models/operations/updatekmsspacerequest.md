# UpdateKmsSpaceRequest

## Example Usage

```typescript
import { UpdateKmsSpaceRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateKmsSpaceRequest = {
    connectionId: "<value>",
    id: "<id>",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `kmsSpace`                                                | [shared.KmsSpace](../../../sdk/models/shared/kmsspace.md) | :heavy_minus_sign:                                        | N/A                                                       |
| `connectionId`                                            | *string*                                                  | :heavy_check_mark:                                        | ID of the connection                                      |
| `id`                                                      | *string*                                                  | :heavy_check_mark:                                        | ID of the Space                                           |