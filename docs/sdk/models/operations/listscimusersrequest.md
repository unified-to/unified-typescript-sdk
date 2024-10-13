# ListScimUsersRequest

## Example Usage

```typescript
import { ListScimUsersRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: ListScimUsersRequest = {
  connectionId: "<id>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `connectionId`       | *string*             | :heavy_check_mark:   | ID of the connection |
| `count`              | *number*             | :heavy_minus_sign:   | N/A                  |
| `filter`             | *string*             | :heavy_minus_sign:   | N/A                  |
| `sortBy`             | *string*             | :heavy_minus_sign:   | N/A                  |
| `sortOrder`          | *string*             | :heavy_minus_sign:   | N/A                  |
| `startIndex`         | *number*             | :heavy_minus_sign:   | N/A                  |