# PatchAccountingInvoiceRequest

## Example Usage

```typescript
import { PatchAccountingInvoiceRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchAccountingInvoiceRequest = {
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `accountingInvoice`                                                         | [shared.AccountingInvoice](../../../sdk/models/shared/accountinginvoice.md) | :heavy_minus_sign:                                                          | N/A                                                                         |
| `connectionId`                                                              | *string*                                                                    | :heavy_check_mark:                                                          | ID of the connection                                                        |
| `fields`                                                                    | *string*[]                                                                  | :heavy_minus_sign:                                                          | Comma-delimited fields to return                                            |
| `id`                                                                        | *string*                                                                    | :heavy_check_mark:                                                          | ID of the Invoice                                                           |