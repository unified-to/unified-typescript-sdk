# CreateAccountingInvoiceRequest

## Example Usage

```typescript
import { CreateAccountingInvoiceRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateAccountingInvoiceRequest = {
  accountingInvoice: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `accountingInvoice`                                                         | [shared.AccountingInvoice](../../../sdk/models/shared/accountinginvoice.md) | :heavy_check_mark:                                                          | N/A                                                                         |
| `connectionId`                                                              | *string*                                                                    | :heavy_check_mark:                                                          | ID of the connection                                                        |
| `fields`                                                                    | *string*[]                                                                  | :heavy_minus_sign:                                                          | Comma-delimited fields to return                                            |