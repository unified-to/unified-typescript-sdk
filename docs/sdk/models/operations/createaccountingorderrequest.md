# CreateAccountingOrderRequest

## Example Usage

```typescript
import { CreateAccountingOrderRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: CreateAccountingOrderRequest = {
  connectionId: "<id>",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `accountingOrder`                                                       | [shared.AccountingOrder](../../../sdk/models/shared/accountingorder.md) | :heavy_minus_sign:                                                      | N/A                                                                     |
| `connectionId`                                                          | *string*                                                                | :heavy_check_mark:                                                      | ID of the connection                                                    |
| `fields`                                                                | *string*[]                                                              | :heavy_minus_sign:                                                      | Comma-delimited fields to return                                        |