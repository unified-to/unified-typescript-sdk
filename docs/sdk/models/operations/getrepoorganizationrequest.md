# GetRepoOrganizationRequest

## Example Usage

```typescript
import { GetRepoOrganizationRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: GetRepoOrganizationRequest = {
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `connectionId`                   | *string*                         | :heavy_check_mark:               | ID of the connection             |
| `fields`                         | *string*[]                       | :heavy_minus_sign:               | Comma-delimited fields to return |
| `id`                             | *string*                         | :heavy_check_mark:               | ID of the Organization           |