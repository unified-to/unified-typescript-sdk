# AccountingCashflowItem

## Example Usage

```typescript
import { AccountingCashflowItem } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: AccountingCashflowItem = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `accountId`                                                                             | *string*                                                                                | :heavy_minus_sign:                                                                      | If attributable to a specific GL account (reference to AccountingAccount)               |
| `amount`                                                                                | *number*                                                                                | :heavy_minus_sign:                                                                      | Positive = inflow, Negative = outflow                                                   |
| `name`                                                                                  | *string*                                                                                | :heavy_minus_sign:                                                                      | e.g. "Net Income", "Depreciation", "Equipment"                                          |
| `subItems`                                                                              | [shared.AccountingCashflowItem](../../../sdk/models/shared/accountingcashflowitem.md)[] | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `transactionIds`                                                                        | *string*[]                                                                              | :heavy_minus_sign:                                                                      | Optional linkage to transactions                                                        |