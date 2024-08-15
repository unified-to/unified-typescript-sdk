# PatchAccountingContactRequest

## Example Usage

```typescript
import { PatchAccountingContactRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchAccountingContactRequest = {
    connectionId: "<value>",
    id: "<id>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `accountingContact`                                                         | [shared.AccountingContact](../../../sdk/models/shared/accountingcontact.md) | :heavy_minus_sign:                                                          | N/A                                                                         |
| `connectionId`                                                              | *string*                                                                    | :heavy_check_mark:                                                          | ID of the connection                                                        |
| `id`                                                                        | *string*                                                                    | :heavy_check_mark:                                                          | ID of the Contact                                                           |