# CreateAtsCandidateRequest

## Example Usage

```typescript
import { CreateAtsCandidateRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateAtsCandidateRequest = {
  atsCandidate: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `atsCandidate`                                                    | [shared.AtsCandidate](../../../sdk/models/shared/atscandidate.md) | :heavy_check_mark:                                                | N/A                                                               |
| `connectionId`                                                    | *string*                                                          | :heavy_check_mark:                                                | ID of the connection                                              |
| `fields`                                                          | *string*[]                                                        | :heavy_minus_sign:                                                | Comma-delimited fields to return                                  |