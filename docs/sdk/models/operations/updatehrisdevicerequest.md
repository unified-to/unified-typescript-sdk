# UpdateHrisDeviceRequest

## Example Usage

```typescript
import { UpdateHrisDeviceRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateHrisDeviceRequest = {
  hrisDevice: {
    name: "<value>",
  },
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `hrisDevice`                                                  | [shared.HrisDevice](../../../sdk/models/shared/hrisdevice.md) | :heavy_check_mark:                                            | N/A                                                           |
| `connectionId`                                                | *string*                                                      | :heavy_check_mark:                                            | ID of the connection                                          |
| `fields`                                                      | *string*[]                                                    | :heavy_minus_sign:                                            | Comma-delimited fields to return                              |
| `id`                                                          | *string*                                                      | :heavy_check_mark:                                            | ID of the Device                                              |