# AccountingBalancesheetItem

## Example Usage

```typescript
import { AccountingBalancesheetItem } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: AccountingBalancesheetItem = {};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `accountId`                                                                                     | *string*                                                                                        | :heavy_minus_sign:                                                                              | (reference to AccountingAccount)                                                                |
| `amount`                                                                                        | *number*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `name`                                                                                          | *string*                                                                                        | :heavy_minus_sign:                                                                              | N/A                                                                                             |
| `subItems`                                                                                      | [shared.AccountingBalancesheetItem](../../../sdk/models/shared/accountingbalancesheetitem.md)[] | :heavy_minus_sign:                                                                              | N/A                                                                                             |