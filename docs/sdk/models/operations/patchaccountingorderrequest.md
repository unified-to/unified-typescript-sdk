# PatchAccountingOrderRequest

## Example Usage

```typescript
import { PatchAccountingOrderRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchAccountingOrderRequest = {
  accountingOrder: {},
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `accountingOrder`                                                       | [shared.AccountingOrder](../../../sdk/models/shared/accountingorder.md) | :heavy_check_mark:                                                      | N/A                                                                     |
| `connectionId`                                                          | *string*                                                                | :heavy_check_mark:                                                      | ID of the connection                                                    |
| `fields`                                                                | *string*[]                                                              | :heavy_minus_sign:                                                      | Comma-delimited fields to return                                        |
| `id`                                                                    | *string*                                                                | :heavy_check_mark:                                                      | ID of the Order                                                         |