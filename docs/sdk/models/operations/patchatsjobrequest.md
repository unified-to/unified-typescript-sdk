# PatchAtsJobRequest

## Example Usage

```typescript
import { PatchAtsJobRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchAtsJobRequest = {
    connectionId: "<value>",
    id: "<id>",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `atsJob`                                              | [shared.AtsJob](../../../sdk/models/shared/atsjob.md) | :heavy_minus_sign:                                    | N/A                                                   |
| `connectionId`                                        | *string*                                              | :heavy_check_mark:                                    | ID of the connection                                  |
| `id`                                                  | *string*                                              | :heavy_check_mark:                                    | ID of the Job                                         |