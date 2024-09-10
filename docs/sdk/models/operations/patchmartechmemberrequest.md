# PatchMartechMemberRequest

## Example Usage

```typescript
import { PatchMartechMemberRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchMartechMemberRequest = {
  connectionId: "<value>",
  id: "<id>",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `marketingMember`                                                       | [shared.MarketingMember](../../../sdk/models/shared/marketingmember.md) | :heavy_minus_sign:                                                      | A member represents a person                                            |
| `connectionId`                                                          | *string*                                                                | :heavy_check_mark:                                                      | ID of the connection                                                    |
| `fields`                                                                | *string*[]                                                              | :heavy_minus_sign:                                                      | Comma-delimited fields to return                                        |
| `id`                                                                    | *string*                                                                | :heavy_check_mark:                                                      | ID of the Member                                                        |