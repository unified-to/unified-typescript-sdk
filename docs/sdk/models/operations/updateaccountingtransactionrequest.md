# UpdateAccountingTransactionRequest

## Example Usage

```typescript
import { UpdateAccountingTransactionRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateAccountingTransactionRequest = {
    connectionId: "<value>",
    id: "<id>",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `accountingTransaction`                                                             | [shared.AccountingTransaction](../../../sdk/models/shared/accountingtransaction.md) | :heavy_minus_sign:                                                                  | N/A                                                                                 |
| `connectionId`                                                                      | *string*                                                                            | :heavy_check_mark:                                                                  | ID of the connection                                                                |
| `id`                                                                                | *string*                                                                            | :heavy_check_mark:                                                                  | ID of the Transaction                                                               |