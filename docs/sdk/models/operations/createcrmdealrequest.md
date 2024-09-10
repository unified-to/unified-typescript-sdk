# CreateCrmDealRequest

## Example Usage

```typescript
import { CreateCrmDealRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateCrmDealRequest = {
  connectionId: "<value>",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `crmDeal`                                                       | [shared.CrmDeal](../../../sdk/models/shared/crmdeal.md)         | :heavy_minus_sign:                                              | A deal represents an opportunity with companies and/or contacts |
| `connectionId`                                                  | *string*                                                        | :heavy_check_mark:                                              | ID of the connection                                            |