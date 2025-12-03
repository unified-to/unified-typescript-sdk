# AccountingCashflowItem

## Example Usage

```typescript
import { AccountingCashflowItem } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: AccountingCashflowItem = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `accountId`                                                                             | *string*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `amount`                                                                                | *number*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `name`                                                                                  | *string*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `subItems`                                                                              | [shared.AccountingCashflowItem](../../../sdk/models/shared/accountingcashflowitem.md)[] | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `transactionIds`                                                                        | *string*[]                                                                              | :heavy_minus_sign:                                                                      | Optional linkage to transactions                                                        |