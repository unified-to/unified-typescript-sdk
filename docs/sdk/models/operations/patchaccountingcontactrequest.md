# PatchAccountingContactRequest

## Example Usage

```typescript
import { PatchAccountingContactRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchAccountingContactRequest = {
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `accountingContact`                                                         | [shared.AccountingContact](../../../sdk/models/shared/accountingcontact.md) | :heavy_minus_sign:                                                          | N/A                                                                         |
| `connectionId`                                                              | *string*                                                                    | :heavy_check_mark:                                                          | ID of the connection                                                        |
| `fields`                                                                    | *string*[]                                                                  | :heavy_minus_sign:                                                          | Comma-delimited fields to return                                            |
| `id`                                                                        | *string*                                                                    | :heavy_check_mark:                                                          | ID of the Contact                                                           |