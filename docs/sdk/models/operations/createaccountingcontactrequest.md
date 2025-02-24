# CreateAccountingContactRequest

## Example Usage

```typescript
import { CreateAccountingContactRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateAccountingContactRequest = {
  accountingContact: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `accountingContact`                                                         | [shared.AccountingContact](../../../sdk/models/shared/accountingcontact.md) | :heavy_check_mark:                                                          | N/A                                                                         |
| `connectionId`                                                              | *string*                                                                    | :heavy_check_mark:                                                          | ID of the connection                                                        |
| `fields`                                                                    | *string*[]                                                                  | :heavy_minus_sign:                                                          | Comma-delimited fields to return                                            |