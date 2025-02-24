# CreateAtsInterviewRequest

## Example Usage

```typescript
import { CreateAtsInterviewRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateAtsInterviewRequest = {
  atsInterview: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `atsInterview`                                                    | [shared.AtsInterview](../../../sdk/models/shared/atsinterview.md) | :heavy_check_mark:                                                | N/A                                                               |
| `connectionId`                                                    | *string*                                                          | :heavy_check_mark:                                                | ID of the connection                                              |
| `fields`                                                          | *string*[]                                                        | :heavy_minus_sign:                                                | Comma-delimited fields to return                                  |