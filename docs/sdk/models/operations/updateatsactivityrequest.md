# UpdateAtsActivityRequest

## Example Usage

```typescript
import { UpdateAtsActivityRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateAtsActivityRequest = {
    connectionId: "<value>",
    id: "<id>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `atsActivity`                                                   | [shared.AtsActivity](../../../sdk/models/shared/atsactivity.md) | :heavy_minus_sign:                                              | N/A                                                             |
| `connectionId`                                                  | *string*                                                        | :heavy_check_mark:                                              | ID of the connection                                            |
| `id`                                                            | *string*                                                        | :heavy_check_mark:                                              | ID of the Activity                                              |