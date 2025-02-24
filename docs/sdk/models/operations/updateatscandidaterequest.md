# UpdateAtsCandidateRequest

## Example Usage

```typescript
import { UpdateAtsCandidateRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateAtsCandidateRequest = {
  atsCandidate: {},
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `atsCandidate`                                                    | [shared.AtsCandidate](../../../sdk/models/shared/atscandidate.md) | :heavy_check_mark:                                                | N/A                                                               |
| `connectionId`                                                    | *string*                                                          | :heavy_check_mark:                                                | ID of the connection                                              |
| `fields`                                                          | *string*[]                                                        | :heavy_minus_sign:                                                | Comma-delimited fields to return                                  |
| `id`                                                              | *string*                                                          | :heavy_check_mark:                                                | ID of the Candidate                                               |