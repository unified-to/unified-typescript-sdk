# UpdateAccountingJournalRequest

## Example Usage

```typescript
import { UpdateAccountingJournalRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: UpdateAccountingJournalRequest = {
  accountingJournal: {},
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `accountingJournal`                                                         | [shared.AccountingJournal](../../../sdk/models/shared/accountingjournal.md) | :heavy_check_mark:                                                          | N/A                                                                         |
| `connectionId`                                                              | *string*                                                                    | :heavy_check_mark:                                                          | ID of the connection                                                        |
| `fields`                                                                    | *string*[]                                                                  | :heavy_minus_sign:                                                          | Comma-delimited fields to return                                            |
| `id`                                                                        | *string*                                                                    | :heavy_check_mark:                                                          | ID of the Journal                                                           |