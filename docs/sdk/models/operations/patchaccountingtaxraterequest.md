# PatchAccountingTaxrateRequest

## Example Usage

```typescript
import { PatchAccountingTaxrateRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchAccountingTaxrateRequest = {
  connectionId: "<value>",
  id: "<id>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `accountingTaxrate`                                                         | [shared.AccountingTaxrate](../../../sdk/models/shared/accountingtaxrate.md) | :heavy_minus_sign:                                                          | N/A                                                                         |
| `connectionId`                                                              | *string*                                                                    | :heavy_check_mark:                                                          | ID of the connection                                                        |
| `fields`                                                                    | *string*[]                                                                  | :heavy_minus_sign:                                                          | Comma-delimited fields to return                                            |
| `id`                                                                        | *string*                                                                    | :heavy_check_mark:                                                          | ID of the Taxrate                                                           |