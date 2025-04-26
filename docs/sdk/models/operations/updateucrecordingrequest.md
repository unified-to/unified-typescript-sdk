# UpdateUcRecordingRequest

## Example Usage

```typescript
import { UpdateUcRecordingRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateUcRecordingRequest = {
  ucRecording: {},
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `ucRecording`                                                   | [shared.UcRecording](../../../sdk/models/shared/ucrecording.md) | :heavy_check_mark:                                              | N/A                                                             |
| `connectionId`                                                  | *string*                                                        | :heavy_check_mark:                                              | ID of the connection                                            |
| `fields`                                                        | *string*[]                                                      | :heavy_minus_sign:                                              | Comma-delimited fields to return                                |
| `id`                                                            | *string*                                                        | :heavy_check_mark:                                              | ID of the Recording                                             |