# CreateAccountingInvoiceRequest

## Example Usage

```typescript
import { CreateAccountingInvoiceRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateAccountingInvoiceRequest = {
    connectionId: "<value>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `accountingInvoice`                                                         | [shared.AccountingInvoice](../../../sdk/models/shared/accountinginvoice.md) | :heavy_minus_sign:                                                          | N/A                                                                         |
| `connectionId`                                                              | *string*                                                                    | :heavy_check_mark:                                                          | ID of the connection                                                        |