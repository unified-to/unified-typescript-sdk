# UpdateAtsJobRequest

## Example Usage

```typescript
import { UpdateAtsJobRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateAtsJobRequest = {
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