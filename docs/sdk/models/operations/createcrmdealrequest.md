# CreateCrmDealRequest

## Example Usage

```typescript
import { CreateCrmDealRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateCrmDealRequest = {
  crmDeal: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `crmDeal`                                                       | [shared.CrmDeal](../../../sdk/models/shared/crmdeal.md)         | :heavy_check_mark:                                              | A deal represents an opportunity with companies and/or contacts |
| `connectionId`                                                  | *string*                                                        | :heavy_check_mark:                                              | ID of the connection                                            |
| `fields`                                                        | *string*[]                                                      | :heavy_minus_sign:                                              | Comma-delimited fields to return                                |