# UpdateAccountingAccountRequest

## Example Usage

```typescript
import { UpdateAccountingAccountRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateAccountingAccountRequest = {
  connectionId: "<value>",
  id: "<id>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `accountingAccount`                                                         | [shared.AccountingAccount](../../../sdk/models/shared/accountingaccount.md) | :heavy_minus_sign:                                                          | Chart of accounts                                                           |
| `connectionId`                                                              | *string*                                                                    | :heavy_check_mark:                                                          | ID of the connection                                                        |
| `id`                                                                        | *string*                                                                    | :heavy_check_mark:                                                          | ID of the Account                                                           |