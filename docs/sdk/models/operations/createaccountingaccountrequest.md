# CreateAccountingAccountRequest

## Example Usage

```typescript
import { CreateAccountingAccountRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateAccountingAccountRequest = {
  accountingAccount: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `accountingAccount`                                                         | [shared.AccountingAccount](../../../sdk/models/shared/accountingaccount.md) | :heavy_check_mark:                                                          | Chart of accounts                                                           |
| `connectionId`                                                              | *string*                                                                    | :heavy_check_mark:                                                          | ID of the connection                                                        |
| `fields`                                                                    | *string*[]                                                                  | :heavy_minus_sign:                                                          | Comma-delimited fields to return                                            |