# UpdateCrmDealRequest

## Example Usage

```typescript
import { UpdateCrmDealRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateCrmDealRequest = {
  connectionId: "<value>",
  id: "<id>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `crmDeal`                                                       | [shared.CrmDeal](../../../sdk/models/shared/crmdeal.md)         | :heavy_minus_sign:                                              | A deal represents an opportunity with companies and/or contacts |
| `connectionId`                                                  | *string*                                                        | :heavy_check_mark:                                              | ID of the connection                                            |
| `fields`                                                        | *string*[]                                                      | :heavy_minus_sign:                                              | Comma-delimited fields to return                                |
| `id`                                                            | *string*                                                        | :heavy_check_mark:                                              | ID of the Deal                                                  |