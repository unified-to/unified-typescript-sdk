# RemoveHrisTimeoffRequest

## Example Usage

```typescript
import { RemoveHrisTimeoffRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: RemoveHrisTimeoffRequest = {
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `connectionId`       | *string*             | :heavy_check_mark:   | ID of the connection |
| `id`                 | *string*             | :heavy_check_mark:   | ID of the Timeoff    |