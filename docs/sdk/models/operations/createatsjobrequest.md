# CreateAtsJobRequest

## Example Usage

```typescript
import { CreateAtsJobRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateAtsJobRequest = {
  connectionId: "<value>",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `atsJob`                                              | [shared.AtsJob](../../../sdk/models/shared/atsjob.md) | :heavy_minus_sign:                                    | N/A                                                   |
| `connectionId`                                        | *string*                                              | :heavy_check_mark:                                    | ID of the connection                                  |
| `fields`                                              | *string*[]                                            | :heavy_minus_sign:                                    | Comma-delimited fields to return                      |