# CreateUcRecordingRequest

## Example Usage

```typescript
import { CreateUcRecordingRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateUcRecordingRequest = {
  ucRecording: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `ucRecording`                                                   | [shared.UcRecording](../../../sdk/models/shared/ucrecording.md) | :heavy_check_mark:                                              | N/A                                                             |
| `connectionId`                                                  | *string*                                                        | :heavy_check_mark:                                              | ID of the connection                                            |
| `fields`                                                        | *string*[]                                                      | :heavy_minus_sign:                                              | Comma-delimited fields to return                                |