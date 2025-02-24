# UpdateAccountingTransactionRequest

## Example Usage

```typescript
import { UpdateAccountingTransactionRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateAccountingTransactionRequest = {
  accountingTransaction: {},
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `accountingTransaction`                                                             | [shared.AccountingTransaction](../../../sdk/models/shared/accountingtransaction.md) | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `connectionId`                                                                      | *string*                                                                            | :heavy_check_mark:                                                                  | ID of the connection                                                                |
| `fields`                                                                            | *string*[]                                                                          | :heavy_minus_sign:                                                                  | Comma-delimited fields to return                                                    |
| `id`                                                                                | *string*                                                                            | :heavy_check_mark:                                                                  | ID of the Transaction                                                               |