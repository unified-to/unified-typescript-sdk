# CreateKmsSpaceRequest

## Example Usage

```typescript
import { CreateKmsSpaceRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateKmsSpaceRequest = {
    connectionId: "<value>",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `kmsSpace`                                                | [shared.KmsSpace](../../../sdk/models/shared/kmsspace.md) | :heavy_minus_sign:                                        | N/A                                                       |
| `connectionId`                                            | *string*                                                  | :heavy_check_mark:                                        | ID of the connection                                      |