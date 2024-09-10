# PatchAccountingInvoiceRequest

## Example Usage

```typescript
import { PatchAccountingInvoiceRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchAccountingInvoiceRequest = {
  connectionId: "<value>",
  id: "<id>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `accountingInvoice`                                                         | [shared.AccountingInvoice](../../../sdk/models/shared/accountinginvoice.md) | :heavy_minus_sign:                                                          | N/A                                                                         |
| `connectionId`                                                              | *string*                                                                    | :heavy_check_mark:                                                          | ID of the connection                                                        |
| `id`                                                                        | *string*                                                                    | :heavy_check_mark:                                                          | ID of the Invoice                                                           |