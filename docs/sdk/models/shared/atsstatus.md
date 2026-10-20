# AtsStatus

## Example Usage

```typescript
import { AtsStatus } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: AtsStatus = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `description`                                                                              | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `id`                                                                                       | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `jobId`                                                                                    | *string*                                                                                   | :heavy_minus_sign:                                                                         | The ID of the job this status/stage belongs to, when the provider scopes statuses per job. |
| `metadata`                                                                                 | [shared.AtsMetadata](../../../sdk/models/shared/atsmetadata.md)[]                          | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `originalStatus`                                                                           | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `raw`                                                                                      | Record<string, *any*>                                                                      | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `status`                                                                                   | [shared.AtsStatusStatus](../../../sdk/models/shared/atsstatusstatus.md)                    | :heavy_minus_sign:                                                                         | N/A                                                                                        |