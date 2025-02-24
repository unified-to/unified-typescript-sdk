# UpdateAtsActivityRequest

## Example Usage

```typescript
import { UpdateAtsActivityRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateAtsActivityRequest = {
  atsActivity: {},
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `atsActivity`                                                   | [shared.AtsActivity](../../../sdk/models/shared/atsactivity.md) | :heavy_check_mark:                                              | N/A                                                             |
| `connectionId`                                                  | *string*                                                        | :heavy_check_mark:                                              | ID of the connection                                            |
| `fields`                                                        | *string*[]                                                      | :heavy_minus_sign:                                              | Comma-delimited fields to return                                |
| `id`                                                            | *string*                                                        | :heavy_check_mark:                                              | ID of the Activity                                              |