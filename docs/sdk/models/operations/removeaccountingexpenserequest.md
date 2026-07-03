# RemoveAccountingExpenseRequest

## Example Usage

```typescript
import { RemoveAccountingExpenseRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: RemoveAccountingExpenseRequest = {
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `connectionId`       | *string*             | :heavy_check_mark:   | ID of the connection |
| `id`                 | *string*             | :heavy_check_mark:   | ID of the Expense    |