# AccountingFee

## Example Usage

```typescript
import { AccountingFee } from "@unified-api/typescript-sdk/sdk/models/shared";

let value: AccountingFee = {
  amount: 4261.46,
  type: "COD",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `amount`                                                                    | *number*                                                                    | :heavy_check_mark:                                                          | N/A                                                                         |
| `currency`                                                                  | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `originalType`                                                              | *string*                                                                    | :heavy_minus_sign:                                                          | N/A                                                                         |
| `type`                                                                      | [shared.AccountingFeeType](../../../sdk/models/shared/accountingfeetype.md) | :heavy_check_mark:                                                          | N/A                                                                         |