# GetAccountingTaxrateRequest

## Example Usage

```typescript
import { GetAccountingTaxrateRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: GetAccountingTaxrateRequest = {
  connectionId: "<value>",
  id: "<id>",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `connectionId`                   | *string*                         | :heavy_check_mark:               | ID of the connection             |
| `fields`                         | *string*[]                       | :heavy_minus_sign:               | Comma-delimited fields to return |
| `id`                             | *string*                         | :heavy_check_mark:               | ID of the Taxrate                |