# CreateAccountingTaxrateRequest

## Example Usage

```typescript
import { CreateAccountingTaxrateRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateAccountingTaxrateRequest = {
  accountingTaxrate: {},
  connectionId: "<id>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `accountingTaxrate`                                                         | [shared.AccountingTaxrate](../../../sdk/models/shared/accountingtaxrate.md) | :heavy_check_mark:                                                          | N/A                                                                         |
| `connectionId`                                                              | *string*                                                                    | :heavy_check_mark:                                                          | ID of the connection                                                        |
| `fields`                                                                    | *string*[]                                                                  | :heavy_minus_sign:                                                          | Comma-delimited fields to return                                            |