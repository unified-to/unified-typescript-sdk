# UpdateAtsCandidateRequest

## Example Usage

```typescript
import { UpdateAtsCandidateRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateAtsCandidateRequest = {
  connectionId: "<value>",
  id: "<id>",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `atsCandidate`                                                    | [shared.AtsCandidate](../../../sdk/models/shared/atscandidate.md) | :heavy_minus_sign:                                                | N/A                                                               |
| `connectionId`                                                    | *string*                                                          | :heavy_check_mark:                                                | ID of the connection                                              |
| `id`                                                              | *string*                                                          | :heavy_check_mark:                                                | ID of the Candidate                                               |