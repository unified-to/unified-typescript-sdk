# UpdateAtsScorecardRequest

## Example Usage

```typescript
import { UpdateAtsScorecardRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateAtsScorecardRequest = {
  connectionId: "<value>",
  id: "<id>",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `atsScorecard`                                                    | [shared.AtsScorecard](../../../sdk/models/shared/atsscorecard.md) | :heavy_minus_sign:                                                | N/A                                                               |
| `connectionId`                                                    | *string*                                                          | :heavy_check_mark:                                                | ID of the connection                                              |
| `id`                                                              | *string*                                                          | :heavy_check_mark:                                                | ID of the Scorecard                                               |