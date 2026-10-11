# AccountingTransactionLineItem

## Example Usage

```typescript
import { AccountingTransactionLineItem } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: AccountingTransactionLineItem = {};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `accountId`                                                    | *string*                                                       | :heavy_minus_sign:                                             | (reference to AccountingAccount)                               |
| `categoryIds`                                                  | *string*[]                                                     | :heavy_minus_sign:                                             | N/A                                                            |
| `description`                                                  | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `id`                                                           | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `name`                                                         | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `objectType`                                                   | *string*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `taxrateId`                                                    | *string*                                                       | :heavy_minus_sign:                                             | ref -> AccountingTaxrate applied to the line                   |
| `totalAmount`                                                  | *number*                                                       | :heavy_minus_sign:                                             | will be a positive value for a debit and negative for a credit |
| `unitAmount`                                                   | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |
| `unitQuantity`                                                 | *number*                                                       | :heavy_minus_sign:                                             | N/A                                                            |