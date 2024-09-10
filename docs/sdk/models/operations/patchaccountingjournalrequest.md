# PatchAccountingJournalRequest

## Example Usage

```typescript
import { PatchAccountingJournalRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: PatchAccountingJournalRequest = {
  connectionId: "<value>",
  id: "<id>",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `accountingJournal`                                                         | [shared.AccountingJournal](../../../sdk/models/shared/accountingjournal.md) | :heavy_minus_sign:                                                          | N/A                                                                         |
| `connectionId`                                                              | *string*                                                                    | :heavy_check_mark:                                                          | ID of the connection                                                        |
| `id`                                                                        | *string*                                                                    | :heavy_check_mark:                                                          | ID of the Journal                                                           |