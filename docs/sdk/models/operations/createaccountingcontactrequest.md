# CreateAccountingContactRequest

## Example Usage

```typescript
import { CreateAccountingContactRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateAccountingContactRequest = {
    connectionId: "<value>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `accountingContact`                                                         | [shared.AccountingContact](../../../sdk/models/shared/accountingcontact.md) | :heavy_minus_sign:                                                          | N/A                                                                         |
| `connectionId`                                                              | *string*                                                                    | :heavy_check_mark:                                                          | ID of the connection                                                        |