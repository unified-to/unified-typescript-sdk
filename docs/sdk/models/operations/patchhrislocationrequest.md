# PatchHrisLocationRequest

## Example Usage

```typescript
import { PatchHrisLocationRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchHrisLocationRequest = {
    connectionId: "<value>",
    id: "<id>",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `hrisLocation`                                                    | [shared.HrisLocation](../../../sdk/models/shared/hrislocation.md) | :heavy_minus_sign:                                                | N/A                                                               |
| `connectionId`                                                    | *string*                                                          | :heavy_check_mark:                                                | ID of the connection                                              |
| `id`                                                              | *string*                                                          | :heavy_check_mark:                                                | ID of the Location                                                |