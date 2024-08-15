# UpdateAccountingTaxrateRequest

## Example Usage

```typescript
import { UpdateAccountingTaxrateRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateAccountingTaxrateRequest = {
    connectionId: "<value>",
    id: "<id>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `accountingTaxrate`                                                         | [shared.AccountingTaxrate](../../../sdk/models/shared/accountingtaxrate.md) | :heavy_minus_sign:                                                          | N/A                                                                         |
| `connectionId`                                                              | *string*                                                                    | :heavy_check_mark:                                                          | ID of the connection                                                        |
| `id`                                                                        | *string*                                                                    | :heavy_check_mark:                                                          | ID of the Taxrate                                                           |