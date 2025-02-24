# PatchAtsScorecardRequest

## Example Usage

```typescript
import { PatchAtsScorecardRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchAtsScorecardRequest = {
  atsScorecard: {},
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `atsScorecard`                                                    | [shared.AtsScorecard](../../../sdk/models/shared/atsscorecard.md) | :heavy_check_mark:                                                | N/A                                                               |
| `connectionId`                                                    | *string*                                                          | :heavy_check_mark:                                                | ID of the connection                                              |
| `fields`                                                          | *string*[]                                                        | :heavy_minus_sign:                                                | Comma-delimited fields to return                                  |
| `id`                                                              | *string*                                                          | :heavy_check_mark:                                                | ID of the Scorecard                                               |