# ListEnrichCompaniesRequest

## Example Usage

```typescript
import { ListEnrichCompaniesRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: ListEnrichCompaniesRequest = {
    connectionId: "<value>",
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `connectionId`                      | *string*                            | :heavy_check_mark:                  | ID of the connection                |
| `domain`                            | *string*                            | :heavy_minus_sign:                  | The domain of the company to search |
| `name`                              | *string*                            | :heavy_minus_sign:                  | The name of the company to search   |