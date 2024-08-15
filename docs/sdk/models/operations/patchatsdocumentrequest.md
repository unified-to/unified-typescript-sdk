# PatchAtsDocumentRequest

## Example Usage

```typescript
import { PatchAtsDocumentRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchAtsDocumentRequest = {
    connectionId: "<value>",
    id: "<id>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `atsDocument`                                                   | [shared.AtsDocument](../../../sdk/models/shared/atsdocument.md) | :heavy_minus_sign:                                              | N/A                                                             |
| `connectionId`                                                  | *string*                                                        | :heavy_check_mark:                                              | ID of the connection                                            |
| `id`                                                            | *string*                                                        | :heavy_check_mark:                                              | ID of the Document                                              |