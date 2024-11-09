# PatchRepoPullrequestRequest

## Example Usage

```typescript
import { PatchRepoPullrequestRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchRepoPullrequestRequest = {
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `repoPullrequest`                                                       | [shared.RepoPullrequest](../../../sdk/models/shared/repopullrequest.md) | :heavy_minus_sign:                                                      | N/A                                                                     |
| `connectionId`                                                          | *string*                                                                | :heavy_check_mark:                                                      | ID of the connection                                                    |
| `fields`                                                                | *string*[]                                                              | :heavy_minus_sign:                                                      | Comma-delimited fields to return                                        |
| `id`                                                                    | *string*                                                                | :heavy_check_mark:                                                      | ID of the Pullrequest                                                   |