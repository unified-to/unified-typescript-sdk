# RemoveGenaiMemoryRequest

## Example Usage

```typescript
import { RemoveGenaiMemoryRequest } from "@unified-api/typescript-sdk/sdk/models/operations";

let value: RemoveGenaiMemoryRequest = {
  connectionId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `connectionId`       | *string*             | :heavy_check_mark:   | ID of the connection |
| `id`                 | *string*             | :heavy_check_mark:   | ID of the Memory     |