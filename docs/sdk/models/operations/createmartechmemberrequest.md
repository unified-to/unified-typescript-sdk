# CreateMartechMemberRequest

## Example Usage

```typescript
import { CreateMartechMemberRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateMartechMemberRequest = {
  marketingMember: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `marketingMember`                                                       | [shared.MarketingMember](../../../sdk/models/shared/marketingmember.md) | :heavy_check_mark:                                                      | A member represents a person                                            |
| `connectionId`                                                          | *string*                                                                | :heavy_check_mark:                                                      | ID of the connection                                                    |
| `fields`                                                                | *string*[]                                                              | :heavy_minus_sign:                                                      | Comma-delimited fields to return                                        |