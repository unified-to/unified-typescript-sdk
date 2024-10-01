# CreateAtsDocumentRequest

## Example Usage

```typescript
import { CreateAtsDocumentRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateAtsDocumentRequest = {
  connectionId: "<id>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `atsDocument`                                                   | [shared.AtsDocument](../../../sdk/models/shared/atsdocument.md) | :heavy_minus_sign:                                              | N/A                                                             |
| `connectionId`                                                  | *string*                                                        | :heavy_check_mark:                                              | ID of the connection                                            |
| `fields`                                                        | *string*[]                                                      | :heavy_minus_sign:                                              | Comma-delimited fields to return                                |