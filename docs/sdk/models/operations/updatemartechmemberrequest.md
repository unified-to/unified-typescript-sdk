# UpdateMartechMemberRequest

## Example Usage

```typescript
import { UpdateMartechMemberRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateMartechMemberRequest = {
  connectionId: "<value>",
  id: "<id>",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `marketingMember`                                                       | [shared.MarketingMember](../../../sdk/models/shared/marketingmember.md) | :heavy_minus_sign:                                                      | A member represents a person                                            |
| `connectionId`                                                          | *string*                                                                | :heavy_check_mark:                                                      | ID of the connection                                                    |
| `id`                                                                    | *string*                                                                | :heavy_check_mark:                                                      | ID of the Member                                                        |