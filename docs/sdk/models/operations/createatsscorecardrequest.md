# CreateAtsScorecardRequest

## Example Usage

```typescript
import { CreateAtsScorecardRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateAtsScorecardRequest = {
  connectionId: "<id>",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `atsScorecard`                                                    | [shared.AtsScorecard](../../../sdk/models/shared/atsscorecard.md) | :heavy_minus_sign:                                                | N/A                                                               |
| `connectionId`                                                    | *string*                                                          | :heavy_check_mark:                                                | ID of the connection                                              |
| `fields`                                                          | *string*[]                                                        | :heavy_minus_sign:                                                | Comma-delimited fields to return                                  |