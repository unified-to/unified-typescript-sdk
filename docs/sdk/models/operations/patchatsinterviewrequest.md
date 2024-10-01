# PatchAtsInterviewRequest

## Example Usage

```typescript
import { PatchAtsInterviewRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchAtsInterviewRequest = {
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `atsInterview`                                                    | [shared.AtsInterview](../../../sdk/models/shared/atsinterview.md) | :heavy_minus_sign:                                                | N/A                                                               |
| `connectionId`                                                    | *string*                                                          | :heavy_check_mark:                                                | ID of the connection                                              |
| `fields`                                                          | *string*[]                                                        | :heavy_minus_sign:                                                | Comma-delimited fields to return                                  |
| `id`                                                              | *string*                                                          | :heavy_check_mark:                                                | ID of the Interview                                               |